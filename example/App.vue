<template>
  <div id="app">
    <h1>Vue Object Inspector - Example Page</h1>
    <div class="tips">
      <p>More examples: run storybook localy, see README.md</p>
      <button @click="onClick">Expand All</button>
      <button @click="onClickFold">Collapse All</button>
      <button @click="onClickPaths">Expand to path</button>
    </div>
    <object-inspector
      :data="data"
      :expandLevel="expandLevel"
      :expandPaths="expandPaths"
      class="content"
    />
    <!-- :objectMaxProperties="2"
      :arrayMaxProperties="20" -->
    <!-- :nodeRenderer="MyNodeRenderer" -->
    <!-- :sortObjectKeys="sortFunc" -->
    <!-- showNonenumerable -->
    <!-- name="my-name" -->
  </div>
</template>

<script>
import ObjectInspector from '../src/'

export default {
  name: 'App',
  components: {
    ObjectInspector,
  },
  data() {
    return {
      expandLevel: 1,
      expandPaths: ['*.a'],
      dataArr: [
        1,
        2,
        [1, { a: 1, b: 2 }, 3],
        { a: 123, b: 'abc' },
        'my-string',
        null,
        undefined,
        Symbol('test'),
        5,
        6,
        7,
        8,
        9,
        10,
        11,
      ],
      data: {
        // symbolVal: Symbol('aaa'),
        number: 123,
        string: 'abc',
        boolean: true,
        arr: [1, 2, 3, 4, 5],
        undef: undefined,
        nul: null,
        funcArrow: () => {},
        func: function f1() {},
        a: {
          symbolVal: Symbol('aaa'),
          number: 123,
          string: 'abc',
          boolean: true,
          undef: undefined,
          nul: null,
          funcArrow: () => {},
          func: function f1() {},
          arr: [1, 2, 3, 4, 5],
          objEmpty: {},
        },
        b: 2,
        c: [1, 2, 3],
        // x0: console,
        // w: window,
      },
    }
  },
  methods: {
    onClickPaths() {
      this.expandPaths = ['$.a.arr']
    },
    onClickFold() {
      this.expandLevel = -1
      this.$nextTick(() => {
        this.expandLevel = 0
      })
    },
    onClick() {
      this.expandLevel = 5
    },
    sortFunc(a, b) {
      return b > a ? 1 : -1
    },
    MyNodeRenderer(depth, name, data, isNonenumerable) {
      return (
        <span>
          {name}: {data}
        </span>
      )
    },
  },
}
</script>

<style lang="less" scoped>
#app {
  margin: 30px auto;
  width: 1000px;
}

.content {
  padding: 15px;
  border: 1px solid #eee;
}

.tips {
  color: red;
}
</style>
