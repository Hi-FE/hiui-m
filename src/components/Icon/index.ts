import Icon from './Icon.vue'

(Icon as any).install = (Vue: any) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
