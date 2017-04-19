// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './_router'
import components from './components'

import demo from '@/pages/components/demo'
import demoItem from '@/pages/components/demo-item'
import vCode from '@/pages/components/v-code'

import 'github-markdown-css'

Vue.component(demo.name, demo)
Vue.component(demoItem.name, demoItem)
Vue.component(vCode.name, vCode)

Vue.use(components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
