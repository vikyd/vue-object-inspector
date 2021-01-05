import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import ObjectInspector from '../src/index.js'

storiesOf('Arrays', module)
  .add('Empty Array', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="[]"/>',
  }))
  .add('Empty Array (show non-enumerable properties)', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="1" :data="[]"/>',
  }))
  .add('Basic Array', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="1" :data="[`cold`, `ice`]"/>',
  }))
  .add('Array with different types of elements', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="1" :data="[`a`, 1, {}]"/>',
  }))
  .add('Long Array', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="data"/>',
    data() {
      return { data: new Array(1000).fill(0).map((x, i) => i + '') }
    },
  }))
  .add('Array with big objects', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="data"/>',
    data() {
      return {
        data: new Array(100).fill(0).map((x, i) => ({
          key: i,
          name: `John #${i}`,
          dateOfBirth: new Date(i * 10e8),
          address: `${i} Main Street`,
          zip: 90210 + i,
        })),
      }
    },
  }))
  .add('Uint32Array', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="data"/>',
    data() {
      return { data: new Uint32Array(1000) }
    },
  }))
