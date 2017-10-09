/* purecss */
import 'purecss/build/base-min.css'
import 'purecss/build/grids-min.css'

/* base */
import Rate from './Rate'
import Spinner from './Spinner'
import Btn from './Btn'
import Icon from './Icon'
import Bar from './Bar'

/* data-in */
import Input from './Input'
import CheckBox from './CheckBox'
import Radio from './Radio'
import Switch from './Switch'

/* data-out */
import { Swipe, SwipeSlide } from './Swipe'
import Anchor from './Anchor'
import Fixed from './Fixed'
import Loadmore from './Loadmore'
import Tab from './Tab'
import Modal from './Modal'
import Price from './Price'
import Toast from './Toast'

const install = (Vue) => {
  /* component */
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeSlide.name, SwipeSlide)
  Vue.component(Input.name, Input)
  Vue.component(Rate.name, Rate)
  Vue.component(CheckBox.name, CheckBox)
  Vue.component(Radio.name, Radio)
  Vue.component(Loadmore.name, Loadmore)
  Vue.component(Tab.name, Tab)
  Vue.component(Modal.name, Modal)
  Vue.component(Price.name, Price)
  Vue.component(Spinner.name, Spinner)
  Vue.component(Btn.name, Btn)
  Vue.component(Icon.name, Icon)
  Vue.component(Bar.name, Bar)
  Vue.component(Switch.name, Switch)

  /* method */
  Vue.use(Anchor)
  Vue.use(Fixed)
  Vue.use(Toast)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  /* export */
  Swipe,
  Input,
  Anchor,
  Fixed,
  Rate,
  CheckBox,
  Radio,
  Loadmore,
  Tab,
  Modal,
  Price,
  Spinner,
  Btn,
  Icon,
  Bar,
  Toast,
  Switch,
  install
}
