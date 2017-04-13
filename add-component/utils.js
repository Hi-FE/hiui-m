var fs = require('fs')
var path = require('path')

//  打印错误
const logError = (err) => {
 console.log()
 console.error('Error: ')
 console.error(err) 
}

//  根据模板生成组件 @parames [模板路径， 组件路径, 替换规则]
const generateComponent = (template_path, component_path, rule) => {
  fs.exists(component_path, (exists) => {
    if (exists) {
      logError('组件已存在')
      return false
    }
    else {
      //  生成组件文件夹
      mkDir(component_path, () => {
        //  复制模板
        readTemplate(template_path, component_path, rule)
      })
    }
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
        mkDir(targetPath, () => {
          readTemplate(filePath, targetPath, rule)
        })
      }
      else {
        var file_name = replaceTemplate(file, rule)
        var data = readFile(filePath)
        data = replaceTemplate(data, rule)
        writeFile(_targetPath, file_name, data)
      }
    })
  })
}

//  模板替换
const replaceTemplate = (str, obj) => {
  Object.keys(obj).forEach((key) => {
    const reg = new RegExp(`{{${key}}}`, 'g')
    str = str.replace(reg, obj[key])
  })
  return str
}

//  读文件
const readFile = (_path) => { 
  return fs.readFileSync(_path, { flag: 'r+', encoding: 'utf8' })
}

//  写文件
const writeFile = (_path, _name, data) => {
  fs.writeFile(path.join(_path, _name), data, (err) => {
    if (err) {
      return logError(err)
    }
  })
}

module.exports = generateComponent