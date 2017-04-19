import {{Name}} from './{{Name}}'

const install = (Vue) => {
  let Component = Vue.extend({{Name}})

  Vue.prototype.${{name}} = (options) => {
    let instance = new Component({
      data: {
        ...options
      }
    })

    vm = instance.$mount()
    vm.show = true
  }
}

export default {
  install,
  {{Name}}
}