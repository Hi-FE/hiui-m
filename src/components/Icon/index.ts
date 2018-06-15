import Icon from './Icon.vue'

const install = (Vue: any) => {
  Vue.component(Icon.name, Icon)
}

export default {
  install,
  Icon
}
