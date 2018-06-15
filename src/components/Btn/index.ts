import Btn from './Btn.vue'

(Btn as any).install = (Vue: any) => {
  Vue.component(Btn.name, Btn)
}

export default Btn
