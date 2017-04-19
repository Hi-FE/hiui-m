var fs = require('fs')
var path = require('path')
var utils = require('./utils')
var argv = require('minimist')(process.argv.slice(2))

var replaceFile = utils.replaceFile
var generateComponent = utils.generateComponent
var modifyFile = utils.modifyFile

//  获取命令行得到的组件名
const component_name = argv._[0]

const isFunction = argv._[1] === 'method'
const type = argv.type || 'base'
const cn_name = argv.cn || ''

//  判断是否有输入组件名
if (!component_name) {
  console.log()
  console.log('命令有误，请按照如下格式输入:')
  console.log('npm run add Button')
  console.log('or')
  console.log('npm run add Message method')
  console.log()
  return false
}

//  小写的组件名
const component_name_lower = component_name[0].toLowerCase() + component_name.slice(1)

//  组件名
const name = argv.name || component_name

//  替换规则
const rule = {
  'Name': component_name,
  'name': component_name_lower,
  'cname': name,
  'cn_name': cn_name
}

//  模板路径
const template_path = path.normalize(path.join(__dirname, isFunction ? './method-template/' : './template/'))
//  目标位置
const component_path = path.normalize(path.join(__dirname, '../src/components/', component_name))

//  demo模板位置
const demo_template_path = path.normalize(path.join(__dirname, './demo/{{Name}}.vue'))
//  demo目标位置
const demo_target_path = path.normalize(path.join(__dirname, '../src/pages/demo/'))

if(fs.existsSync(component_path)) {
  console.error('组件已存在')
  console.log()
  return false
}

//  生成模板组件
generateComponent(template_path, component_path, rule)

//  添加Demo文件
replaceFile(demo_template_path, demo_target_path, rule)

//  修改规则
const modify_rule = {
  '/* *template*': '',
  '*template* */': ''
}

//  需要修改的文件
const modify_files = [
  {
    file: path.normalize(path.join(__dirname, '../src/_router/index.js')),
    template: '/* router */',
    content: `, {
      path: '/Components/{{Name}}',
      name: '{{Name}}',
      meta: {
        preview: './#/{{Name}}'
      },
      component: require('@/components/{{Name}}/index.md')
    }/* router */`
  }, {
    file: path.normalize(path.join(__dirname, '../src/_router/index.js')),
    template: '/* preview */',
    content: `, {
    path: '/{{Name}}',
    name: 'Preview-{{Name}}',
    component: require('@/pages/demo/{{Name}}.vue')
  }/* preview */`
  }, {
    file: path.normalize(path.join(__dirname, '../src/config.js')),
    template: `/* ${type} */`,
    content: `, {
        name: '{{Name}}',
        cn_name: '{{cn_name}}',
        path: '/{{Name}}'
      }/* ${type} */`
  }, {
    file: path.normalize(path.join(__dirname, '../src/components/index.js')),
    template: `/* ${type} */`,
    content: `/* ${type} */
import {{Name}} from './{{Name}}'`
  }, {
    file: path.normalize(path.join(__dirname, '../src/components/index.js')),
    template: `/* ${isFunction ? 'method' : 'component'} */`,
    content: isFunction ? 
    `/* method */
  Vue.use({{Name}})` 
    : 
    `/* component */
  Vue.component({{Name}}.name, {{Name}})`
  }, {
    file: path.normalize(path.join(__dirname, '../src/components/index.js')),
    template: `/* export */`,
    content: `/* export */
  {{Name}},`
  }
]

//  修改文件
modifyFile(modify_files, modify_rule, rule)





