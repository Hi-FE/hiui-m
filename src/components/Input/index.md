# Input

> 输入栏

## API

| 参数 | 说明 | 类型 | 默认值 |
| ----|:-----| ---- | ---- |
| value | 输入框的值，请使用`v-model`获取及设置  | - | - |
| size | 输入框尺寸，可选值 `sm`/`md`/`lg` | `String` | `md` |
| color | 输入框聚焦时的颜色, 支持两种格式`#f00`/`rgb(255,255,255)` | `String` | - |
| label | 标题 | `String` | - |
| placeholder | 占位文本/提示文本 | `String` | - |
| type | 输入类型，可选值`text`/`textarea`/`select` | `String` | `text` |
| verify | 验证内容，可选值 `phone`/`password`/`email`/`empty` | `String` | - |
| reg | 自定义验证正则 | `String`/`RegExp` | - |
| tip | 验证错误提示 | `String` | - |
| disabled | 是否禁用 | `Boolean` | `false` |
| format | 是否格式化内容，将全角符号转化为半角, `，` => `,` | `Boolean` | `false` |
| readonly | 只读 | `Boolean` | `false` |
| with_border | 是否带边框 | `Boolean` | `true` |
| rows | `textarea`类型有效，指定默认行数 | `Number` | `3` |
| autosize | `textarea`类型有效，内容撑开高度 | `Boolean` | `false` |
| enums | `select`类型有效，选择框数据 | `Array` | - |
| default_first | `select`类型有效，是否默认选中第一个 | `Boolean` | `false` |

| 事件 | 说明 | 类型 | 使用 | 结果 |
| ----|:-----| ---- | ---- | ---- |
| form-verify | 验证当前选择器是否选中 | 触发事件 | `component.$emit('form-verify')`/`this.$root.$emit('form-verify')` | - |
| error | 手动触发错误提示（需要手动清除提示，否则一直存在） | 触发事件 | `component.$emit('error', '错误提示')` | - |
| correct | 手动触发正确提示 | 触发事件 | `component.$emit('correct')` | - |
| clear | 手动清除提示 | 触发事件 | `component.$emit('clear')` | - |
| verify | 返回验证结果 | 监听事件 | `@verify="result = argument[0]"` | `true`/`false` |
| enter | 用户按下Enter键时触发 | 监听事件 | `@enter="dosomething"` |  - |




