export default {
  name: 'Hiui-M',
  version: 'v1.0.0',
  links: {
    github: 'https://github.com/Hi-FE/hiui-m'
  },
  nav: [{
    name: 'Overview',
    cn_name: '概述',
    path: '/'
  }, {
    name: 'Standard',
    cn_name: '规范',
    path: '/Standard'
  }, {
    name: 'Components',
    cn_name: '组件',
    path: '/Components',
    child: [{
      title: 'Base',
      components: [{
        name: 'Btn',
        cn_name: '按钮',
        path: '/Btn'
      }, {
        name: 'Icon',
        cn_name: '图标',
        path: '/Icon'
      }, {
        name: 'Bar',
        cn_name: '栏',
        path: '/Bar'
      }, {
        name: 'Spinner',
        cn_name: '加载动画',
        path: '/Spinner'
      }/* base */]
    }, {
      title: 'Data in',
      components: [{
        name: 'Switch',
        cn_name: '开关',
        path: '/Switch'
      }/* data-in */]
    }, {
      title: 'Data out',
      components: [{
        name: 'Toast',
        cn_name: '提示',
        path: '/Toast'
      }/* data-out */]
    }]
  }]
}