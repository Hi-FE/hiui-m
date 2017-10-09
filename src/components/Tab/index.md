# Tab

> 标签栏

## API

| 参数 | 说明 | 类型 | 默认值 |
| ----|:-----| ---- | ---- |
| value | 当前索引值，请使用v-model获取及设置  | `Number` | `0` |
| data | 标签栏数据[`String` / `Object { name:标签名, icon:前置图标, suffix_icon:后置图标 }`] | `Array` | - |
| type | 标签类型，可选值`padding/no_padding/fix_width/fix_width:String`  | `String` | `padding` |
| width | 容器宽度  | `String/Number` | - |
| height | 标签高度，可选值为 `Number / "auto"`  | `String/Number` | `40` |
| font_size | 字体大小  | `Number` | `14` |
| gap | 标签之间的间隔  | `Number` | - |
| theme | 标签主题，可选值` - /card/ticket`  | `String` | - |
| active-style | 选中时标签样式  | `Object` | - |


| 事件 | 说明 | 参数 | 默认值 |
| ----|:-----| ---- | ---- |
| change | 标签切换时，回调方法 | `[index <Number:索引>, title <Any:选中标签名>]` | - |
