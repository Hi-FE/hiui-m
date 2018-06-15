import Input from './Input.vue'

const install = (Vue: any) => {
  Vue.component(Input.name, Input)
}

export default {
  install,
  Input
}
