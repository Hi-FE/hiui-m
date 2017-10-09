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
    name: 'Color',
    cn_name: '色彩',
    path: '/Color'
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
      }, {
        name: 'Rate',
        cn_name: '评分',
        path: '/Rate'
      }/* base */]
    }, {
      title: 'Data in',
      components: [{
        name: 'Switch',
        cn_name: '开关',
        path: '/Switch'
      }, {
        name: 'Radio',
        cn_name: '单选框',
        path: '/Radio'
      }, {
        name: 'CheckBox',
        cn_name: '多选框',
        path: '/CheckBox'
      }, {
        name: 'Input',
        cn_name: '输入框',
        path: '/Input'
      }/* data-in */]
    }, {
      title: 'Data out',
      components: [{
        name: 'Toast',
        cn_name: '提示',
        path: '/Toast'
      }, {
        name: 'Price',
        cn_name: '价格',
        path: '/Price'
      }, {
        name: 'Modal',
        cn_name: '弹出层',
        path: '/Modal'
      }, {
        name: 'Tab',
        cn_name: '标签栏',
        path: '/Tab'
      }, {
        name: 'Loadmore',
        cn_name: '加载更多',
        path: '/Loadmore'
      }, {
        name: 'Fixed',
        cn_name: '固定指令',
        path: '/Fixed'
      }, {
        name: 'Anchor',
        cn_name: '锚点指令',
        path: '/Anchor'
      }, {
        name: 'Swipe',
        cn_name: '走马灯',
        path: '/Swipe'
      }/* data-out */]
    }]
  }]
}