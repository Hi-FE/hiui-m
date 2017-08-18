# Modal

> 弹出层

## API

| 参数 | 说明 | 类型 | 默认值 |
| ----|:-----| ---- | ---- |
| show | 控制弹出层显示，请使用`v-model`获取及设置  | `Boolean` | - |
| type | 弹出层类型，可选值`center/top/bottom/left/right`  | `String` | `center` |
| use_close | 是否显示关闭按钮 | `Boolean` | `true` |
| use_mask | 是否显示遮罩层 | `Boolean` | `false` |
| mask_close | 点击遮罩层是否关闭弹出层 | `Boolean` | `true` |
| render_type | 组件渲染类型，可选值`show/if` | `String` | `show` |
| use_shadow | 是否使用阴影 | `Boolean` | `true` |
| background_color | 弹出层背景色 | `String` | `#fff` |
| overflow | 弹出层的overflow | `String` | `visible` |
| z_index | 组件的堆叠层级 | `String/Number` | `999` |
| border_radius | 弹出层圆角 | `String` | `0` |
| prevent_scroll | 是否禁止页面滚动 | `Boolean` | `true` |
