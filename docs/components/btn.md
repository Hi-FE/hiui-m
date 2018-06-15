---
sidebarDepth: 2
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

<demo link="/demos/Btn/size">
  <btn-size></btn-size>
  <template slot="code">

<<< @/docs/demos/Btn/size.vue

  </template>
</demo>

### 块状
块状按钮占用整行宽度

<demo link="/demos/Btn/block">
  <btn-block></btn-block>
  <template slot="code">

<<< @/docs/demos/Btn/block.vue

  </template>
</demo>

### 类型
可在不同场景中使用各种类型选择

<demo link="/demos/Btn/type">
  <btn-type></btn-type>
  <template slot="code">

<<< @/docs/demos/Btn/type.vue

  </template>
</demo>

