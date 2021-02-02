<template>
  <ol role="tree" class="tree-view-outline">
    <connected-tree-node
      :name="name"
      :data="data"
      :dataIterator="dataIterator"
      :depth="0"
      :path="DEFAULT_ROOT_PATH"
      :nodeRenderer="nodeRenderer"
      :expandedPaths="expandedPaths"
      @expandedPathsChange="onExpandedPathsChange"
    />
  </ol>
</template>

<script>
import TreeNode from '@/components/tree-node'
import ConnectedTreeNode from './connected-tree-node.vue'
import { DEFAULT_ROOT_PATH, getExpandedPaths } from '@/libs/pathUtils'

export default {
  name: 'tree-view',
  components: {
    ConnectedTreeNode,
  },
  props: {
    data: null,
    expandLevel: {
      type: Number,
      default: 0,
    },
    expandPaths: {
      type: [String, Array],
      default: '',
    },
    name: {
      type: String,
    },
    sortObjectKeys: {
      type: [Boolean, Function],
      default: false,
    },
    nodeRenderer: {
      type: Function,
    },
    dataIterator: {
      type: Function,
    },
  },
  data() {
    return {
      DEFAULT_ROOT_PATH,

      expandedPaths: {},
    }
  },
  watch: {
    expandLevel() {
      this.calcExpandLevel()
    },
    expandPaths() {
      this.calcExpandPaths()
    },
  },
  beforeMount() {
    this.reCalcExpandPaths()
  },
  mounted() {},
  methods: {
    reCalcExpandPaths() {
      let paths = this.calcExpandPaths()
      this.calcExpandLevel(paths)
    },
    calcExpandPaths() {
      let paths = []
      if (this.expandPaths) {
        this.expandPaths.forEach((path) => {
          const arr = path.split('.')
          arr.forEach((part, index) => {
            paths.push(arr.slice(0, index + 1).join('.'))
          })
        })
      }
      this.expandedPaths = getExpandedPaths(
        this.data,
        this.dataIterator,
        paths,
        0,
        {}
      )

      return paths
    },
    calcExpandLevel(paths) {
      if (!paths) {
        paths = []
      }
      this.expandedPaths = getExpandedPaths(
        this.data,
        this.dataIterator,
        paths,
        this.expandLevel,
        {}
      )
    },
    onExpandedPathsChange(data) {
      this.$set(this.expandedPaths, data.path, data.val)
    },
  },
}
</script>

<style lang="less"></style>
