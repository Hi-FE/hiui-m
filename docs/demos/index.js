import BtnSize from './Btn/size'
import BtnBlock from './Btn/block'
import BtnType from './Btn/type'
// Shell: New Example import

const install = Vue => {
  Vue.component(BtnSize.name, BtnSize)
  Vue.component(BtnBlock.name, BtnBlock)
  Vue.component(BtnType.name, BtnType)
  // Shell: New Example install
}

export default {
  install
}
