<template>
  <span :class="['object-value', calcObject.class]"
    >{{ calcObject.text
    }}<template v-if="type === 'function'"
      ><span class="object-value-function-prefix">ƒ&nbsp;</span
      ><span class="object-value-function-name"
        >{{ object.name }}()</span
      ></template
    ></span
  >
</template>

<script>
export default {
  name: 'object-value',
  props: ['object'],
  computed: {
    type() {
      return typeof this.object
    },
    calcObject() {
      const o = this.object
      switch (typeof o) {
        case 'bigint':
          return {
            class: 'object-value-number',
            text: `${o}n`,
          }
        case 'number':
          return {
            class: 'object-value-number',
            text: `${o}`,
          }
        case 'string':
          return {
            class: 'object-value-string',
            text: `"${o}"`,
          }
        case 'boolean':
          return {
            class: 'object-value-boolean',
            text: `${o}`,
          }
        case 'undefined':
          return {
            class: 'object-value-undefined',
            text: 'undefined',
          }
        case 'object':
          if (o === null) {
            return {
              class: 'object-value-null',
              text: 'null',
            }
          }
          if (o instanceof Date) {
            return {
              class: '',
              text: o.toString(),
            }
          }
          if (o instanceof RegExp) {
            return {
              class: 'object-value-regexp',
              text: o.toString(),
            }
          }
          if (Array.isArray(o)) {
            return {
              class: '',
              text: `Array(${o.length})`,
            }
          }
          if (!o.constructor) {
            return {
              class: '',
              text: 'Object',
            }
          }
          if (
            typeof o.constructor.isBuffer === 'function' &&
            o.constructor.isBuffer(o)
          ) {
            return {
              class: '',
              text: `Buffer[${o.constructor.name}]`,
            }
          }
          return {
            class: '',
            text: o.constructor.name,
          }
        case 'function':
          return {
            class: '',
            text: '',
          }
        case 'symbol':
          return {
            class: 'object-value-symbol',
            text: o.toString(),
          }
      }
    },
  },
  methods: {},
}
</script>

<style lang="less"></style>
