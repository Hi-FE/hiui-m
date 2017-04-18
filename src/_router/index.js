import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  routes: [
    {
      path: '/Btn',
      name: 'Preview-Btn',
      component: require('@/pages/demo/Btn.vue')
    }, {
      path: '/Icon',
      name: 'Preview-Icon',
      component: require('@/pages/demo/Icon.vue')
    }, {
      path: '/Bar',
      name: 'Preview-Bar',
      component: require('@/pages/demo/Bar.vue')
    }, {
      path: '/Toast',
      name: 'Preview-Toast',
      component: require('@/pages/demo/Toast.vue')
    }, {
      path: '/',
      component: require('@/pages/layout'),
      children: [{
        path: '/',
        name: 'Overview',
        component: require('@/pages/views/index.md')
      }, {
        path: '/Standard',
        name: 'Standard',
        component: require('@/pages/views/standard.md')
      }, {
        path: '/Components',
        name: 'Components',
        component: require('@/pages/views/components.md')
      }, {
        path: '/Components/Btn',
        name: 'Btn',
        meta: {
          preview: '/Btn'
        },
        component: require('@/components/Btn/index.md')
      }, {
        path: '/Components/Icon',
        name: 'Icon',
        meta: {
          preview: '/Icon'
        },
        component: require('@/components/Icon/index.md')
      }, {
        path: '/Components/Bar',
        name: 'Bar',
        meta: {
          preview: '/Bar'
        },
        component: require('@/components/Bar/index.md')
      }, {
        path: '/Components/Toast',
        name: 'Toast',
        meta: {
          preview: '/Toast'
        },
        component: require('@/components/Toast/index.md')
      }]
    }
  ]
})
