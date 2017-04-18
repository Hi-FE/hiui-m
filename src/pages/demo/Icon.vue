<template>
  <demo title="Icon" class="icon-demo">
    <!-- Prop: size -->
    <demo-item name="Size" description="图标大小" :code="size_code">
      <Icon :size="16" name="search"></Icon>
      <Icon :size="24" name="search"></Icon>
      <Icon :size="32" name="search"></Icon>
    </demo-item>

    <!-- Prop: color -->
    <demo-item name="Color" description="图标颜色" :code="color_code">
      <Icon color="pink" name="search"></Icon>
      <Icon color="#87db83" name="search"></Icon>
      <Icon color="rgba(255, 0, 0, 0.6)" name="search"></Icon>
    </demo-item>

    <!-- Prop: rotate -->
    <demo-item name="Rotate" description="旋转" :code="rotate_code">
      <Icon :rotate="true" name="loading"></Icon>
      <Icon :rotate="true" name="refresh"></Icon>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
  .icon-demo .hiui-icon { margin: 0 2px; }
</style>

<script>
  export default {
    data () {
      return {
        size_code: `
<Icon :size="16" name="search"></Icon>
<Icon :size="24" name="search"></Icon>
<Icon :size="32" name="search"></Icon>
        `,
        color_code: `
<Icon color="pink" name="search"></Icon>
<Icon color="#87db83" name="search"></Icon>
<Icon color="rgba(255, 0, 0, 0.6)" name="search"></Icon>
        `,
        rotate_code: `
<Icon :rotate="true" name="loading"></Icon>
<Icon :rotate="true" name="refresh"></Icon>
        `
      }
    },
    components: {
      demo: require('@/pages/components/demo.vue'),
      demoItem: require('@/pages/components/demo-item.vue')
    }
  }
</script>
