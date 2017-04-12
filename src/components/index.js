import Btn from './Btn'
import Icon from './Icon'

const install = (Vue) => {
  Vue.component(Btn.name, Btn)
  Vue.component(Icon.name, Icon)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Btn,
  Icon
}