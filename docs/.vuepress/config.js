const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '../..', dir)
}

module.exports = {
  title: 'Hiui-M',
  base: '/hiui-m/',
  description: 'UI components for m.wantu.cn',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    module: {
      rules: [{
        test: /\.(vue|(j|t)sx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          cache: false,
          formatter: require('eslint/lib/formatters/codeframe')
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
