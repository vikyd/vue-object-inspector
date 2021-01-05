import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import ObjectInspector from '../src/index.js'

storiesOf('Maps', module)
  .add('Map: Empty Map', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="1" :data="new Map()"/>',
  }))
  .add('Map: Boolean keys', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="1" :data="new Map([[true, `one`], [false, `two`]])"/>',
  }))
  .add('Map: Regex keys', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="1" :data="new Map([[/S/g, `one`], [/D/g, `two`]])"/>',
  }))
  .add('Map: String keys', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="1" :data="new Map([[`one`, 1], [`two`, 2]])"/>',
  }))
  .add('Map: Object keys', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="1" :data="new Map([[{}, 1], [{ key: 2 }, 2]])"/>',
  }))
  .add('Map: Array keys', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="1" :data="new Map([[[1], 1], [[2], 2]])"/>',
  }))
  .add('Map: Map keys', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="1" :data="new Map([[new Map(), 1], [new Map([]), 2]])"/>',
  }))

storiesOf('Sets', module)
  .add('Set: Empty Set', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="new Set()"/>',
  }))
  .add('Set: Simple Set', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="1" :data="new Set([1, 2, 3, 4])"/>',
  }))
  .add('Set: Nested Set', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="2" :data="new Set([1, 2, 3, new Set([1, 2])])"/>',
  }))

storiesOf('Functions', module)
  .add('Functions: anonymous function', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="function () {}"/>',
  }))
  .add('Functions: anonymous arrow function', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="() => {}"/>',
  }))
  .add('Functions: named function', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="data"/>',
    data() {
      return {
        data: function namedFunction() {},
      }
    },
  }))
  .add('Functions: named function (show non-enumerable properties)', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="1" :data="data"/>',
    data() {
      return {
        data: function namedFunction() {},
      }
    },
  }))
