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
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
          configFile: path.join(__dirname, '../../tslint.json')
        }
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
        title: 'Base',
        collapsable: false,
        children: [
          '/components/Icon',
          '/components/Btn',
          // Shell: New Base Component
        ]
      },
      {
        title: 'Data in',
        collapsable: false,
        children: [
          '/components/Input',
          // Shell: New Data in Component
        ]
      },
      {
        title: 'Data out',
        collapsable: false,
        children: [
          // Shell: New Data out Component
        ]
      }
    ]
  }
}
