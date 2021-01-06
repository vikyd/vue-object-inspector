<template>
  <li :aria-expanded="expanded" role="treeitem" class="tree-node">
    <div class="tree-node-preview-container" @click="onClick">
      <span
        v-if="shouldShowArrow"
        :class="[
          'tree-node-arrow',
          expanded ? 'tree-node-arrow-expanded' : 'tree-node-arrow-collapsed',
        ]"
      >
        ▶ </span
      ><span
        v-else-if="shouldShowPlaceholder && $slots.default"
        class="tree-node-placeholder"
        >&nbsp;</span
      ><node-renderer />
    </div>

    <ol role="group" class="tree-node-child-nodes-container">
      <slot v-if="expanded"></slot>
      <!-- <span v-else>undefined</span> -->
    </ol>
  </li>
</template>

<script>
export default {
  name: 'tree-node',
  components: {
    NodeRenderer: {
      render(h) {
        const parent = this.$parent.$parent
        return parent.nodeRenderer(
          parent.depth,
          parent.name,
          parent.data,
          parent.isNonenumerable
        )
      },
    },
  },
  props: {
    name: { type: String },
    data: { type: null },
    depth: { type: Number },
    expanded: { type: Boolean },
    shouldShowArrow: { type: Boolean },
    shouldShowPlaceholder: { type: Boolean },
    nodeRenderer: { type: Function },
  },
  computed: {},
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="less"></style>
