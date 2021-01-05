import { getPropertyValue } from '@/libs/propertyUtils'

export const createIterator = (showNonenumerable, sortObjectKeys) => {
  const objectIterator = function* (data) {
    const shouldIterate =
      (typeof data === 'object' && data !== null) || typeof data === 'function'
    if (!shouldIterate) return

    const dataIsArray = Array.isArray(data)

    // iterable objects (except arrays)
    if (!dataIsArray && data[Symbol.iterator]) {
      let i = 0
      for (let entry of data) {
        if (Array.isArray(entry) && entry.length === 2) {
          const [k, v] = entry
          yield {
            name: k,
            data: v,
          }
        } else {
          yield {
            name: i.toString(),
            data: entry,
          }
        }
        i++
      }
    } else {
      const keys = Object.getOwnPropertyNames(data)
      if (sortObjectKeys === true && !dataIsArray) {
        // Array keys should not be sorted in alphabetical order
        keys.sort()
      } else if (typeof sortObjectKeys === 'function') {
        keys.sort(sortObjectKeys)
      }

      for (const propertyName of keys) {
        if (propertyIsEnumerable.call(data, propertyName)) {
          const propertyValue = getPropertyValue(data, propertyName)
          yield {
            name: propertyName || `""`,
            data: propertyValue,
          }
        } else if (showNonenumerable) {
          // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
          // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
          // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
          let propertyValue
          try {
            propertyValue = getPropertyValue(data, propertyName)
          } catch (e) {
            // console.warn(e)
          }

          if (propertyValue !== undefined) {
            yield {
              name: propertyName,
              data: propertyValue,
              isNonenumerable: true,
            }
          }
        }
      }

      // [[Prototype]] of the object: `Object.getPrototypeOf(data)`
      // the property name is shown as "__proto__"
      if (showNonenumerable && data !== Object.prototype /* already added */) {
        yield {
          name: '__proto__',
          data: Object.getPrototypeOf(data),
          isNonenumerable: true,
        }
      }
    }
  }

  return objectIterator
}
