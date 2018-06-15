import Input from './Input.vue'

(Input as any).install = (Vue: any) => {
  Vue.component(Input.name, Input)
}

export default Input
