var fs = require('fs')
var path = require('path')
var generateComponent = require('./generateComponent')

//  获取命令行得到的组件名
const component_name = process.argv[2]
const isFunction = process.argv[3] === 'method'

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

//  替换规则
const rule = {
  'Name': component_name,
  'name': component_name_lower
}

//  模板路径
const template_path = path.normalize(path.join(__dirname, isFunction ? './method-template/' : './template/'))

//  目标位置
const target_path = path.normalize(path.join(__dirname, '../src/components/'))
const component_path = path.join(target_path, component_name)

//  生成模板组件
generateComponent(template_path, component_path, rule)


