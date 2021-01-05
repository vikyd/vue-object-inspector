import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import ObjectInspector from '../src/index.js'

storiesOf('Nested object examples', module)
  .add('Ice sculpture', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="2" :data="data"/>',
    data() {
      return {
        data: {
          id: 2,
          name: 'An ice sculpture',
          // "price": 12.50,
          tags: ['cold', 'ice'],
          dimensions: {
            length: 7.0,
            width: 12.0,
            height: 9.5,
          },
          warehouseLocation: {
            latitude: -78.75,
            longitude: 20.4,
          },
        },
      }
    },
  }))
  .add('Github', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="1" :data="data"/>',
    data() {
      return {
        data: {
          login: 'vikyd',
          id: 2208880,
          avatar_url: 'https://avatars0.githubusercontent.com/u/2208880?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vikyd',
          html_url: 'https://github.com/vikyd',
          followers_url: 'https://api.github.com/users/vikyd/followers',
          following_url:
            'https://api.github.com/users/vikyd/following{/other_user}',
          gists_url: 'https://api.github.com/users/vikyd/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vikyd/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/vikyd/subscriptions',
          organizations_url: 'https://api.github.com/users/vikyd/orgs',
          repos_url: 'https://api.github.com/users/vikyd/repos',
          events_url: 'https://api.github.com/users/vikyd/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vikyd/received_events',
          type: 'User',
          site_admin: false,
          name: 'VikydZhang',
          company: null,
          blog: 'https://github.com/vikyd/note',
          location: null,
          email: null,
          hireable: null,
          bio: 'Why am I here ?',
          twitter_username: null,
          public_repos: 76,
          public_gists: 4,
          followers: 15,
          following: 119,
          created_at: '2012-08-24T03:24:37Z',
          updated_at: '2021-01-05T07:52:04Z',
        },
      }
    },
  }))
  .add('Glossary', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="7" :data="data"/>',
    data() {
      return {
        data: {
          glossary: {
            title: 'example glossary',
            GlossDiv: {
              title: 'S',
              GlossList: {
                GlossEntry: {
                  ID: 'SGML',
                  SortAs: 'SGML',
                  GlossTerm: 'Standard Generalized Markup Language',
                  Acronym: 'SGML',
                  Abbrev: 'ISO 8879:1986',
                  GlossDef: {
                    para:
                      'A meta-markup language, used to create markup languages such as DocBook.',
                    GlossSeeAlso: ['GML', 'XML'],
                  },
                  GlossSee: 'markup',
                },
              },
            },
          },
        },
      }
    },
  }))
  .add('Contrived example', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="3" :data="data"/>',
    data() {
      return {
        data: {
          a1: 1,
          a2: 'A2',
          a3: true,
          a4: undefined,
          a5: {
            'a5-1': null,
            'a5-2': ['a5-2-1', 'a5-2-2'],
            'a5-3': {},
          },
          a6: function () {
            // eslint-disable-next-line
            console.log('hello world')
          },
          a7: new Date('2005-04-03'),
        },
      }
    },
  }))

storiesOf('Objects', module)
  .add('Object: Date', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="new Date(`2005-04-03`)"/>',
  }))
  .add('Object: Regular Expressin', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :data="/^.*$/"/>',
  }))
  .add('Object: Empty Object', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="1"  :data="{}"/>',
  }))
  .add('Object: Empty String key', () => ({
    components: { ObjectInspector },
    template: `<object-inspector :data="{'': 'hi'}"/>`,
  }))
  .add('Object: Object with getter property', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector :expandLevel="2":data="{ get prop() { return `v` } }"/>',
  }))
  .add('Object: Object with getter property that throws', () => ({
    components: { ObjectInspector },
    template: '<object-inspector :expandLevel="2" :data="data"/>',
    data() {
      // TODO: this example will not working now
      return {
        data: {
          get prop() {
            throw new Error()
          },
        },
      }
    },
  }))
  .add('Object: Simple Object', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="2" :data="{ k: `v` }"/>',
  }))
  .add('Object: inherited object', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="2" :data="Object.create({ k: `v` })"/>',
  }))
  .add('Object: `Object`', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="1" :data="Object"/>',
  }))
  .add('Object: `Object.prototype`', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="1" :data="Object.prototype"/>',
  }))
  .add('Object: Simple Object with name', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="2" name="test" :data="{k: `v`}"/>',
  }))
  .add(
    'Object: `Object.create(null) (Empty object with null prototype)`',
    () => ({
      components: { ObjectInspector },
      template:
        '<object-inspector showNonenumerable :expandLevel="1" :data="Object.create(null)"/>',
    })
  )
  .add('Object: Object with null prototype', () => ({
    components: { ObjectInspector },
    template:
      '<object-inspector showNonenumerable :expandLevel="1" :data="Object.assign(Object.create(null), { key: `value` })"/>',
  }))
