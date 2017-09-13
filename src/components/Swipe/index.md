# Swipe

> 走马灯

## API

| 参数 | 说明 | 类型 | 默认值 |
| ----|:-----| ---- | ---- |
| value | Swipe的当前下标，请使用`v-model`获取及设置  | - | - |
| preview | 预览展示的滑块数目  | `Number` | 1 |
| between | 每个滑块之间的间距  | `Number` | 0 |
| autoplay | 自动滑动, 默认5000毫秒间隔，可自定义时长  | `Boolean`/`Number` | false |
| trigger | index的触发时机, 可选值`change`/`progress`  | `String` | change |
| arrow | 箭头, 可选值`true`/`false`/`'hover'`  | `String, Boolean` | false |
| outer_arrow | 是否显示外部箭头, 可选值`true`/`false` | `Boolean` | false |
| index | 显示下标, 可选值`true`/`false`  | `Boolean` | false |
| index_trigger | 下标触发滑动的方式, 可选值`click`/`hover`/`false`  | `String`/`Boolean` | click |
| arrow_offset | 箭头y轴偏差   | `Number` | - |
| index_x_offset | 下标x轴偏差  | `Number` | - |
| index_y_offset | 下标y轴偏差  | `Number` | - |
| sliding_num | 同时滑动的滑块个数  | `Number` | 1 |
| loop | 无限循环滑动  | `Boolean` | true |
| free | 滑块自由滑动  | `Boolean` | false |
| coverflow | coverflow过渡效果  | `Boolean` | false |
| update_by | 指定更新数据源，Swipe会监听它，用于更新Swipe状态 | - | - |

| 事件 | 说明 | 类型 | 使用 | 结果 |
| ----|:----- | ---- | ---- | ---- |
| slide-to | 滑动到指定index | 触发事件 | `component.$emit('slide-to', 0)` | - |
| slide-next | 滑动到后一个 | 触发事件 | `component.$emit('slide-next')` | - |
| slide-prev | 滑动到前一个 | 触发事件 | `component.$emit('slide-prev')` | - |
