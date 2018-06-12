import parseColor from 'parse-color'

export interface Color {
  [key: string]: string
}

export const setCssVariable = function (propertyName: string, value: string) {
  if(typeof window !== 'undefined' || (process as any).browser){
    document.documentElement.style.setProperty('--' + propertyName, value);
  }
}

export const setTheme = function (colors: Color) {
  for (let name in colors) {
    setCssVariable(name, parseColor(colors[name]).hex)
  }
}
