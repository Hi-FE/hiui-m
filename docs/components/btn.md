---
sidebarDepth: 0
Props:
 - name: size
   description: 按钮尺寸
   type: String
   params: sm, md, lg
   default: md
 - name: block
   description:  是否整行显示
   type: Boolean
   default: false
Slots:
 - name: default
   description: 原生Vue插槽
Events:
 - name: click
   description: 按钮点击事件
   params: Event
---

# Btn
> 按钮组件

## API
<api />

## 示例

### 尺寸
多种尺寸应对不同场景

<demo>
  <btn-size></btn-size>
  <template slot="code">

<<< @/docs/demos/Btn/size.vue

  </template>
</demo>

<!-- include ./icon.md -->
