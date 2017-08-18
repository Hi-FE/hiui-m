# Toast

> 提示

## API

```js
let vm = this.$toast(content, type)
let vm = this.$toast(content, options)
```

## Options

| 参数 | 说明 | 类型 | 默认值 |
| ----|:-----| ---- | ---- |
| content | 提示文本  | `String` | - |
| type | 主题，可选值`default/primary/success/warning/error`  | `String` | - |
| time | 自动关闭的延时，单位毫秒（为`0`时则不自动消失）  | `Number` | `2000` |
| callback | 消失后回调  | `Function` | - |


