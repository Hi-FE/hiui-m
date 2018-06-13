const path = require('path')

module.exports = {
  title: 'Hiui-M',
  base: '/hiui-m/',
  description: 'UI components for m.wantu.cn',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
    },
    module: {
      rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, '../../src')],
        enforce: 'pre',
        loader: 'tslint-loader'
      }, {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
          happyPackMode: process.env.NODE_ENV !== 'production'
        }
      }]
    }
  },
  themeConfig: {
    repo: 'Hi-FE/hiui-m',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documents', link: '/overview/quickStart' },
    ],
    sidebar: [
      {
        title: 'HiuiM',
        collapsable: false,
        children: [
          '/overview/quickStart'
        ]
      },
      {
        title: '基础组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/btn'
        ]
      }
    ]
  }
}
