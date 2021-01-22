<template>
  <span class="object-root-label">
    <span v-if="typeof name === 'string'">
      <span class="object-name">{{ name }}</span>
      <span>: </span>
      <object-preview :data="data" />
    </span>
    <object-preview v-else :data="data" />
  </span>
</template>

<script>
import objectPreview from './object-preview.vue'
export default {
  components: { objectPreview },
  props: ['data', 'name', 'isNonenumerable'],
}
</script>

<style lang="less"></style>
