<template>
  <demo title="Icon" class="icon-demo">
    <!-- Prop: Name -->
    <demo-item name="Name" description="图标类型" :code="name_code">
      <Icon name="heart"></Icon>
      <Icon name="star"></Icon>
      <Icon name="tag"></Icon>
    </demo-item>

    <!-- Prop: size -->
    <demo-item name="Size" description="图标大小" :code="size_code">
      <Icon :size="16" name="enviroment"></Icon>
      <Icon :size="24" name="enviroment"></Icon>
      <Icon :size="32" name="enviroment"></Icon>
    </demo-item>

    <!-- Prop: color -->
    <demo-item name="Color" description="图标颜色" :code="color_code">
      <Icon color="red" name="search"></Icon>
      <Icon color="#00a0e9" name="search"></Icon>
      <Icon color="rgba(33, 66, 99, 0.6)" name="search"></Icon>
    </demo-item>

    <!-- Prop: rotate -->
    <demo-item name="Rotate" description="旋转" :code="rotate_code">
      <Icon :rotate="true" name="loading"></Icon>
      <Icon :rotate="true" name="reload"></Icon>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  .icon-demo .hiui-icon { margin: 0 2px; }
</style>

<script>
  export default {
    data () {
      return {
        name_code: `
<Icon name="heart"></Icon>
<Icon name="star"></Icon>
<Icon name="tag"></Icon>
        `,
        size_code: `
<Icon size="16" name="enviroment"></Icon>
<Icon size="24" name="enviroment"></Icon>
<Icon size="32" name="enviroment"></Icon>
        `,
        color_code: `
<Icon color="red" name="search"></Icon>
<Icon color="#00a0e9" name="search"></Icon>
<Icon color="rgba(33, 66, 99, 0.6)" name="search"></Icon>
        `,
        rotate_code: `
<Icon :rotate="true" name="loading"></Icon>
<Icon :rotate="true" name="reload"></Icon>
        `
      }
    }
  }
</script>
