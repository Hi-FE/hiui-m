---
title: '快速开始'
---

# 快速开始

> 移动端组件库

## 通过 npm 安装

```bash
$ npm install hiui-m --save
```

## 通过 yarn 安装

```bash
$ yarn add hiui-m
```

## 如何使用

- 引用全部组件

```js
import Vue from 'vue'
import HiuiM from 'hiui-m'

Vue.use(HiuiM)
```

- 引用部分组件

```js
import Vue from 'vue'
import HiuiM from 'hiui-m'

Vue.use(HiuiM, {
  components: [
    'Btn',
    'Icon'
  ]
})
```

- 自定义主题

```js
import Vue from 'vue'
import HiuiM from 'hiui-m'

Vue.use(HiuiM, {
   theme: {
     color: {
       primary: '#fac450'
     }
   }
})
```