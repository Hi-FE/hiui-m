# Rate

> 评分

## API

| 参数 | 说明 | 类型 | 默认值 |
| ----|:-----| ---- | ---- |
| value | 评分数，请使用v-model获取及设置  | `Number` | `0` |
| size | 星星大小  | `Number` | `20` |
| allow_half | 是否允许显示半个星星  | `Boolean` | `false` |
| disabled | 是否为只读  | `Boolean` | `false` |
| color | 未选中颜色  | `String` | `#ccc` |
| active_color | 选中颜色  | `String` | `#f7ba2a` |
| show_text | 是否显示文本  | `Boolean` | `false` |
| texts | 显示文本，字符串时`{value}`将被替换成数值  | `Array / String` | `['极差', '失望', '一般', '满意', '惊喜']` |
