<template>
  <div
    :class="[
      'vue-object-inspector',
      theme === 'chromeDark' ? 'vue-object-inspector-chromedark' : '',
    ]"
  >
    <tree-view
      v-bind="$attrs"
      :dataIterator="dataIterator"
      :data="data"
      :nodeRenderer="finnalNodeRenderer"
    />
  </div>
</template>

<script>
import '@/styles/index.less'

import { createIterator } from '@/libs/data'
import TreeView from '@/components/tree-view'
import ObjectLabel from '@/components/object-label'
import ObjectRootLabel from '@/components/object-root-label'

export default {
  name: 'object-inspector',
  components: {
    TreeView,
    ObjectLabel,
    ObjectRootLabel,
  },
  provide() {
    return {
      objectMaxProperties: this.objectMaxProperties,
      arrayMaxProperties: this.arrayMaxProperties,
    }
  },
  // inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: '',
    },
    data: null,
    // expandLevel: {
    //   type: Number,
    //   default: 1,
    // },
    // expandPaths: {
    //   type: [String, Array],
    //   default: '',
    // },
    // name: {
    //   type: String,
    //   default: '',
    // },
    nodeRenderer: {
      type: Function,
    },
    showNonenumerable: {
      type: Boolean,
      default: false,
    },
    sortObjectKeys: {
      type: [Boolean, Function],
      default: false,
    },
    objectMaxProperties: {
      type: Number,
      default: 5,
    },
    arrayMaxProperties: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {}
  },
  computed: {
    dataIterator() {
      return createIterator(this.showNonenumerable, this.sortObjectKeys)
    },
    finnalNodeRenderer() {
      return this.nodeRenderer ? this.nodeRenderer : this.defaultNodeRenderer
    },
  },
  methods: {
    defaultNodeRenderer(depth, name, data, isNonenumerable) {
      if (depth === 0) {
        return <ObjectRootLabel name={name} data={data} />
      } else {
        return (
          <ObjectLabel
            name={name}
            data={data}
            isNonenumerable={isNonenumerable}
          />
        )
      }
    },
  },
}
</script>

<style lang="less"></style>
