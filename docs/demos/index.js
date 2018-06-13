import BtnSize from './Btn/size'
import BtnBlock from './Btn/block'

const install = Vue => {
  Vue.component(BtnSize.name, BtnSize)
  Vue.component(BtnBlock.name, BtnBlock)
}

export default {
  install
}
