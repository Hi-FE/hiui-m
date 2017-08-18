# Loadmore

> 加载更多

## API

| 参数 | 说明 | 类型 | 默认值 |
| ----|:-----| ---- | ---- |
| done | 是否已经全部加载完毕  | `Boolean` | `false` |
| interval | 手动点击加载出现间隔  | `Number` | `3` |
| offset | 距离到容器底部`300px`时加载 | `Number` | `300` |
| real_time | 是否每次滚动都监听容器高度 | `Boolean` | `false` |

| 事件 | 说明 | 回调参数 |
| ----|:-----| ---- |
| load-method | 加载时调用方法 | `[next <Function:异步加载完毕后调用>, err: <Function:加载出错时调用>]` |

| 方法 | 说明 |
| ----|:-----|
| reset | 重置组件状态 |

## Slot

| 名字 | 说明 |
| ----|:-----|
| loading | 加载中的内容 |
| loadmore | 手动加载更多的内容 |
| error | 出错时的内容 |

[#](https://vuefe.cn/v2/guide/components.html#作用域插槽) 使用 具有特殊属性 `scope` 的 `<template>` 元素做插槽时，可在作用域中调用 `loadmore` 方法去继续加载.

e.g.
```html
<template slot="loadmore" scope="props">
  <Btn @click="props.loadmore" class="blue-btn">点击加载更多</Btn>
</template>
```
