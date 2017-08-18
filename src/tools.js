export const getStyles = (obj, unit) => {
  let result = {}
  for (let key in obj) {
    if (obj[key]) {
      result[key] = obj[key] + (unit || '')
    }
  }
  return Object.keys(result).length > 0 ? result : null
}

export const isValid = (rule, val) => {
  return rule.some((str) => str === val)
}

export const on = (elem, type, fn) => {
  elem.addEventListener(type, fn, false)
}

export const off = (elem, type, fn) => {
  elem.removeEventListener(type, fn, false)
}

export const formatDate = (date, fmt) => {
  if (!(date instanceof Date)) {
    return ''
  }

  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), //  日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() //  毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}
