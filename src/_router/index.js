import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const preview_routes = [
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
    path: '/Switch',
    name: 'Preview-Switch',
    component: require('@/pages/demo/Switch.vue')
  }, {
    path: '/Spinner',
    name: 'Preview-Spinner',
    component: require('@/pages/demo/Spinner.vue')
  }, {
    path: '/Price',
    name: 'Preview-Price',
    component: require('@/pages/demo/Price.vue')
  }, {
    path: '/Modal',
    name: 'Preview-Modal',
    component: require('@/pages/demo/Modal.vue')
  }, {
    path: '/Tab',
    name: 'Preview-Tab',
    component: require('@/pages/demo/Tab.vue')
  }, {
    path: '/Loadmore',
    name: 'Preview-Loadmore',
    component: require('@/pages/demo/Loadmore.vue')
  }, {
    path: '/Radio',
    name: 'Preview-Radio',
    component: require('@/pages/demo/Radio.vue')
  }, {
    path: '/CheckBox',
    name: 'Preview-CheckBox',
    component: require('@/pages/demo/CheckBox.vue')
  }, {
    path: '/Rate',
    name: 'Preview-Rate',
    component: require('@/pages/demo/Rate.vue')
  }/* preview */
]

export default new Router({
  mode: 'hash',
  routes: preview_routes.concat([{
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
        preview: './#/Btn'
      },
      component: require('@/components/Btn/index.md')
    }, {
      path: '/Components/Icon',
      name: 'Icon',
      meta: {
        preview: './#/Icon'
      },
      component: require('@/components/Icon/index.md')
    }, {
      path: '/Components/Bar',
      name: 'Bar',
      meta: {
        preview: './#/Bar'
      },
      component: require('@/components/Bar/index.md')
    }, {
      path: '/Components/Toast',
      name: 'Toast',
      meta: {
        preview: './#/Toast'
      },
      component: require('@/components/Toast/index.md')
    }, {
      path: '/Components/Switch',
      name: 'Switch',
      meta: {
        preview: './#/Switch'
      },
      component: require('@/components/Switch/index.md')
    }, {
      path: '/Components/Spinner',
      name: 'Spinner',
      meta: {
        preview: './#/Spinner'
      },
      component: require('@/components/Spinner/index.md')
    }, {
      path: '/Components/Price',
      name: 'Price',
      meta: {
        preview: './#/Price'
      },
      component: require('@/components/Price/index.md')
    }, {
      path: '/Components/Modal',
      name: 'Modal',
      meta: {
        preview: './#/Modal'
      },
      component: require('@/components/Modal/index.md')
    }, {
      path: '/Components/Tab',
      name: 'Tab',
      meta: {
        preview: './#/Tab'
      },
      component: require('@/components/Tab/index.md')
    }, {
      path: '/Components/Loadmore',
      name: 'Loadmore',
      meta: {
        preview: './#/Loadmore'
      },
      component: require('@/components/Loadmore/index.md')
    }, {
      path: '/Components/Radio',
      name: 'Radio',
      meta: {
        preview: './#/Radio'
      },
      component: require('@/components/Radio/index.md')
    }, {
      path: '/Components/CheckBox',
      name: 'CheckBox',
      meta: {
        preview: './#/CheckBox'
      },
      component: require('@/components/CheckBox/index.md')
    }, {
      path: '/Components/Rate',
      name: 'Rate',
      meta: {
        preview: './#/Rate'
      },
      component: require('@/components/Rate/index.md')
    }/* router */]
  }])
})
