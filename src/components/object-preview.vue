<template>
  <span
    ><object-value v-if="type === Type.simple" :object="object" /><span
      v-if="type === Type.array"
      ><span class="object-preview-desc">{{
        object.length === 0 ? '' : `(${object.length})\xa0`
      }}</span
      ><span class="object-preview"
        >[<span v-for="(item, index) of previewArray" :key="index"
          ><span v-if="index != 0">, </span><object-value :object="item" /><span
            v-if="index === arrayMaxProperties - 1"
            >, </span
          ><span v-if="index === arrayMaxProperties - 1">…</span></span
        >]</span
      > </span
    ><span v-if="type === Type.other"
      ><span class="object-preview-desc">{{ desc }}</span
      ><span class="object-preview"
        >{<span v-for="(item, index) of previewObjectItems" :key="index"
          ><span v-if="index != 0">, </span
          ><span class="object-name">{{ item.key || `""` }}</span
          >:&nbsp;<object-value :object="item.val" /><span
            v-if="index === objectMaxProperties - 1"
            >…</span
          ></span
        >}</span
      >
    </span>
  </span>
</template>

<script>
import objectValue from './object-value.vue'

const Type = {
  simple: 'simple',
  array: 'array',
  other: 'other',
}

export default {
  name: 'object-preview',
  components: { objectValue },
  // `provide` from top component `object-inspector`
  inject: ['objectMaxProperties', 'arrayMaxProperties'],
  props: ['data'],
  data() {
    return {
      Type,
    }
  },
  computed: {
    object() {
      return this.data
    },
    type() {
      if (
        typeof this.object !== 'object' ||
        this.object === null ||
        this.object instanceof Date ||
        this.object instanceof RegExp
      ) {
        return Type.simple
      }

      if (Array.isArray(this.object)) {
        return Type.array
      }

      return Type.other
    },
    desc() {
      const objectContructorName = this.object.constructor
        ? this.object.constructor.name
        : 'Object'
      return objectContructorName === 'Object' ? '' : `${objectContructorName} `
    },
    previewArray() {
      return this.object.slice(0, this.arrayMaxProperties)
    },
    previewObjectItems() {
      const keys = Object.keys(this.object)
      if (keys.length > this.objectMaxProperties) {
        return keys.slice(0, this.objectMaxProperties).map((k) => {
          return { key: k, val: this.object[k] }
        })
      } else {
        return Object.keys(this.object).map((k) => {
          return {
            key: k,
            val: this.object[k],
          }
        })
      }
    },
  },
}
</script>
