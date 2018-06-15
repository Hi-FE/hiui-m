import './styles/theme/color.styl'
import './styles/theme/size.styl'

import { VueConstructor } from 'vue'
import * as Components from './components'
import { setTheme, ThemeOption } from './utils/color'

export interface ThemeOptions {
  color: ThemeOption,
  size: ThemeOption
}

export interface HiuiMOptions {
  theme: ThemeOptions,
  components: string[]
}

const HiuiM = {
  install (Vue: VueConstructor, options: HiuiMOptions) {
    if (options) {
      if (options.hasOwnProperty('theme')) {
        if (options.theme.hasOwnProperty('color')) {
          setTheme(options.theme.color)
        }
        if (options.theme.hasOwnProperty('size')) {
          setTheme(options.theme.size)
        }
      }
      if (options.hasOwnProperty('components')) {
        options.components.forEach(name => {
          if (!(Components as any)[name]) {
            console.warn(`[hiui-m warn]: 未找到组件 ${name}， 组件只允许使用 ${Object.keys(Components).join(', ')}`)
          } else {
            Vue.use((Components as any)[name])
          }
        })
      } else {
        Object.values(Components).forEach(component => Vue.use(component))
      }
    } else {
      Object.values(Components).forEach(component => Vue.use(component))
    }
  }
}

export * from './components'
export default HiuiM
