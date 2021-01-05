import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import ObjectInspector from '../src/index.js'

storiesOf('Numbers', module)
  .add('positive', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="42"/>',
  }))
  .add('zero', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="0"/>',
  }))
  .add('negative', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="-1"/>',
  }))
  .add('float', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="1.5"/>',
  }))
  .add('exponential', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="1e100"/>',
  }))
  .add('NaN', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="NaN"/>',
  }))
  .add('Infinity', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="Infinity"/>',
  }))

storiesOf('BigInts', module)
  .add('positive', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="42n"/>',
  }))
  .add('zero', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="0n"/>',
  }))
  .add('negative', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="-1n"/>',
  }))

storiesOf('Strings', module)
  .add('empty string', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="``"/>',
  }))
  .add('simple', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="`hello`"/>',
  }))

storiesOf('Booleans', module)
  .add('true', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="true"/>',
  }))
  .add('false', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="false"/>',
  }))

storiesOf('Undefined', module).add('undefined', () => ({
  components: { ObjectInspector },
  template: '<object-inspector :data="undefined"/>',
}))

storiesOf('Null', module).add('null', () => ({
  components: { ObjectInspector },
  template: '<object-inspector :data="null"/>',
}))

storiesOf('Symbols', module).add('test', () => ({
  components: { ObjectInspector },
  template: '<object-inspector :data="data"/>',
  data() {
    return { data: Symbol.for('test') }
  },
}))
