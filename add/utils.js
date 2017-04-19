var fs = require('fs')
var path = require('path')

//  打印错误
const logError = (err) => {
 console.log()
 console.error(err) 
 console.log()
}

//  根据模板生成组件 @parames [模板路径， 组件路径, 替换规则]
const generateComponent = (template_path, component_path, rule) => {
  //  生成组件文件夹
  mkDir(component_path, () => {
    //  复制模板
    readTemplate(template_path, component_path, rule)
  })
}

//  修改文件
const modifyFile = (files, modify_rule, rule) => {
  Array.from(files, obj => {
    var str = readFile(obj.file)
    var data = str.replace(obj.template, replaceTemplate(obj.content, rule))
    writeFile(obj.file, data)
  })
}

//  读取文件夹
const readDir = (_path, cb) => {
  fs.readdir(_path, (err, files) => {
    if (err) {
      return logError(err)
    }
    cb(files)
  })
}

//  生成文件夹
const mkDir = (_path, cb) => {
  fs.mkdir(_path, function (err) {
    if(err) {
      return logError(err)
    }
    cb()
  })
}

//  读取模板
const readTemplate = (_path, _targetPath, rule) => {
  readDir(_path, (files) => {
    files.forEach((file) => {
      var filePath = path.normalize(path.join(_path, file))
      var targetPath = path.normalize(path.join(_targetPath, file))
      var stat = fs.statSync(filePath)
      var isDirectory = stat.isDirectory()
      //  判断是否为文件夹
      if (isDirectory) {
        //  如果是文件夹，则复制文件夹并递归调用readTemplate
        mkDir(targetPath, () => {
          readTemplate(filePath, targetPath, rule)
        })
      }
      else {
        //  根据规则替换文件名
        var file_name = replaceTemplate(file, rule)

        //  根据规则替换文件内容
        var data = readFile(filePath)
        data = replaceTemplate(data, rule)

        //  写文件
        writeFile(path.join(_targetPath, file_name), data)
      }
    })
  })
}

//  模板替换 @params [替换模板， 替换规则]
const replaceTemplate = (str, obj) => {
  Object.keys(obj).forEach((key) => {
    const reg = new RegExp(`{{${key}}}`, 'g')
    str = str.replace(reg, obj[key])
  })
  return str
}

//  替换文件
const replaceFile = (_path, _target, rule) => {  
  //  根据规则替换文件内容
  var data = readFile(_path)
  data = replaceTemplate(data, rule)
  
  //  根据规则替换文件名
  var file_name = path.basename(_path)
  file_name = replaceTemplate(file_name, rule)

  //  写文件
  writeFile(path.join(_target, file_name), data)
}

//  读文件
const readFile = (_path) => { 
  return fs.readFileSync(_path, { flag: 'r+', encoding: 'utf8' })
}

//  写文件
const writeFile = (_path, data) => {
  return fs.writeFileSync(_path, data, 'utf-8')
}

module.exports = {
  replaceFile,
  generateComponent,
  modifyFile
}
