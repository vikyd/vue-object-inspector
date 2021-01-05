<template>
  <tree-node
    :name="name"
    :data="data"
    :depth="depth"
    :expanded="expanded"
    :shouldShowArrow="nodeHasChildNodes"
    :shouldShowPlaceholder="depth > 0"
    :nodeRenderer="nodeRenderer"
    @click="onClick"
  >
    <span v-if="expanded">
      <connected-tree-node
        v-for="(child, index) of children"
        :key="index"
        :isNonenumerable="child.isNonenumerable"
        :name="child.name"
        :data="child.data"
        :depth="depth + 1"
        :path="`${path}.${child.name}`"
        :dataIterator="dataIterator"
        :nodeRenderer="nodeRenderer"
        :expandedPaths="expandedPaths"
        v-on="$listeners"
      />
    </span>
    <span v-else>null</span>
  </tree-node>
</template>

<script>
import TreeNode from './tree-node'
import {
  DEFAULT_ROOT_PATH,
  hasChildNodes,
  getExpandedPaths,
} from '@/libs/pathUtils'

export default {
  name: 'connected-tree-node',
  components: {
    TreeNode,
  },
  props: {
    name: { type: String },
    data: { type: null },
    dataIterator: { type: Function },
    path: { type: String },
    depth: { type: Number },
    nodeRenderer: { type: Function },
    isNonenumerable: { type: Boolean },
    expandedPaths: { type: Object },
  },
  data() {
    return {
      xx: 11,
    }
  },
  computed: {
    nodeHasChildNodes() {
      return hasChildNodes(this.data, this.dataIterator)
    },
    expanded() {
      return !!this.expandedPaths[this.path]
    },
    children() {
      return [...this.dataIterator(this.data)]
    },
  },
  methods: {
    onClick() {
      if (this.nodeHasChildNodes) {
        this.$emit('expandedPathsChange', {
          path: this.path,
          val: !this.expandedPaths[this.path],
        })
      }
    },
  },
}
</script>

<style lang="less"></style>
