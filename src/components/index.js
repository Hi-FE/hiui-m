// Base
import Btn from './Btn'
import Icon from './Icon'
import Bar from './Bar'

// Data out
import Toast from './Toast'

const install = (Vue) => {
  Vue.component(Btn.name, Btn)
  Vue.component(Icon.name, Icon)
  Vue.component(Bar.name, Bar)

  Vue.use(Toast)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Btn,
  Icon,
  Bar,
  Toast
}
