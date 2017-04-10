import Btn from './Btn'

const install = (Vue) => {
  Vue.component(Btn.name, Btn)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Btn
}