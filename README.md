# vue-object-inspector

Vue component used as an js/json object inspector/viewer, inspired by [react-inspector](https://github.com/storybookjs/react-inspector) .

> Nodes will not be rendered if parent is collapsed.

## Online Playground

![](https://raw.githubusercontent.com/vikyd/repos-bigfile/main/vue-object-inspector/object.png)

![](https://raw.githubusercontent.com/vikyd/repos-bigfile/main/vue-object-inspector/array.png)

![](https://raw.githubusercontent.com/vikyd/repos-bigfile/main/vue-object-inspector/json.png)

![](https://raw.githubusercontent.com/vikyd/repos-bigfile/main/vue-object-inspector/proto.png)

## Usage

```sh
npm install vue-object-inspector
```

In Vue component:

```vue
<template>
  <div>
    <object-inspector :data="data" />
  </div>
</template>

<script>
import ObjectInpsector from 'vue-object-inspector'

export default {
  name: 'your-component',
  components: {
    ObjectInspector,
  },
  data() {
    return {
      data: {
        a: 1,
        b: 'abc',
        c: [1, 2, 3],
        d: { x1: 1, x2: 2 },
      },
    }
  },
}
</script>
```

## Vue `props`

This component supports some Vue props, similar to [react-inspector](https://github.com/storybookjs/react-inspector/blob/v5.1.0/README.md#api) , just a bit different.

### `data`

- what: JavaScript Object or any var you would like to inspect
- type: any
- mandatory: true

### `name`

- what: root node prefix name
- type: String
- mandatory: false

### `expandLevel`

- what: an integer specifying to which level the tree should be initially expanded
- type: Integer
- mandatory: false
- default: `0`

### `expandPaths`

- what: an array containing all the paths that should be expanded when the component is initialized, or a string of just one path
- type: Array of String
- mandatory: false
- details: syntax like [JSONPath](https://goessner.net/articles/JsonPath/)
- default: `[]`
- examples:
  - `['$']`: expand root node, `$` always refers to the root node
  - `['$.myKey']`: expand to `myKey` node (will also expand all parent nodes)
    - this is different from [react-inspector](https://github.com/storybookjs/react-inspector)
  - `['$.myKey.myArr']`: expand to `myArr` node (will also expand all parent nodes)
  - `['$.a', '$.b']`: expand first level nodes `a` and `b`
  - `['$.1']`: expand by array index
  - `['$.*']`: wildcard, expand all level 2 nodes, equivalent to `:expandLevel="2"`
  - `['$.*.*']`: wildcard, expand all level 3 nodes, equivalent to `:expandLevel="3"`

### `showNonenumerable`

- what: show non-enumerable properties, like `__proto__`, `length`, `constructor` ...
- type: Boolean
- mandatory: false
- default: `false`

### `sortObjectKeys`

- what: sort object keys like [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- type: Boolean or Function
- mandatory: false
- default: no sort
- examples:
  - `true`: keys of objects are sorted in alphabetical order except for arrays
  - function in Vue component methods:
    ```js
    reverseSortFunc(a, b) {
      return b > a ? 1 : -1
    }
    ```

### `nodeRenderer`

- what: use a custom `nodeRenderer` to render the object properties
- type: Function, should return [JSX](https://cn.vuejs.org/v2/guide/render-function.html#ad) elements
  - function parameters: `depth`, `name`, `data`, `isNonenumerable`
  - `isNonenumerable` refers to default hidden properties like `__proto__`, `length` ...
- mandatory: false
- default: a default `nodeRenderer`
- examples:
  - function in Vue component methods:
    ```js
    myNodeRenderer(depth, name, data, isNonenumerable) {
      return (
        <button>
          {name}: {data}
        </button>
      )
    }
    ```

### `objectMaxProperties`

- what: max count object properties should be list in preview label
- type: Interger
- mandatory: false
- default: `5`

### `arrayMaxProperties`

- what: max count array properties should be list in preview label
- type: Interger
- mandatory: false
- default: `10`

## Development

Local preview page is [example/App.vue](example/App.vue) .

```sh
# Install dependencies
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build
```

## Storybook Preview

After `npm install`, you can also run this command to see lots of live examples.

```sh
npm run storybook
```

See `stories` folder for source code of examples.

## Thanks

- [react-inspector](https://github.com/storybookjs/react-inspector)
