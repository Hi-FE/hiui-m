import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('@/pages/layout'),
      children: [{
        path: '/',
        name: 'Overview',
        meta: {
          noPreview: true
        },
        component: require('@/pages/views/index.md')
      }, {
        path: '/Standard',
        name: 'Standard',
        meta: {
          noPreview: true
        },
        component: require('@/pages/views/standard.md')
      }, {
        path: '/Components',
        name: 'Components',
        meta: {
          noPreview: true
        },
        component: require('@/pages/views/components.md')
      }, {
        path: '/Components/Btn',
        name: 'Btn',
        components: {
          default: require('@/components/Btn/index.md'),
          preview: require('@/pages/demo/Btn.vue')
        }
      }, {
        path: '/Components/Icon',
        name: 'Icon',
        components: {
          default: require('@/components/Icon/index.md'),
          preview: require('@/pages/demo/Icon.vue')
        }
      }]
    }
  ]
})
