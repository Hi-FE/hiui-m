import Toast from './Toast'

//  单例模式
let vm

const install = (Vue) => {
  let Component = Vue.extend(Toast)

  Vue.prototype.$toast = (content, time = 2000, callback) => {
    if (vm) {
      vm.$destroy(true)
    }
    let instance = new Component({
      data: {
        content,
        time,
        callback
      }
    })

    vm = instance.$mount()
    vm.show = true

    vm.$on('destroy', () => {
      vm = null
    })
  }
}

export default {
  install,
  Toast
}