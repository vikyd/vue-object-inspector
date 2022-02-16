<template>
  <span :title="name" class="object-label"
    ><span
      v-if="typeof name === 'string'"
      :class="['object-name', isNonenumerable ? 'object-name-dimmed' : '']"
      >{{ name }}</span
    ><object-preview v-else :data="name" /><span>: </span
    ><object-value :object="object" />
  </span>
</template>

<script>
import ObjectPreview from './object-preview.vue'
import ObjectValue from './object-value'

export default {
  name: 'object-label',
  components: {
    ObjectValue,
    ObjectPreview,
  },
  props: ['data', 'name', 'isNonenumerable'],
  computed: {
    object() {
      return this.data
    },
  },
}
</script>

<style lang="less"></style>
