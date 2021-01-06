import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import ObjectInspector from '../src/index.js'

const data = { a: 1, b: 'abc', c: [1, 2, 3] }

storiesOf('Themes', module)
  .add('chromeLight', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="data"/>',
    data() {
      return {
        data: data,
      }
    },
  }))
  .add('chromeDark', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector theme="chromeDark" :expandLevel="3" :data="data"/>',
    data() {
      return {
        data: data,
      }
    },
  }))
