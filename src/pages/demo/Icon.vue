<template>
  <demo title="Icon">
    <demo-item name="Size" description="图标大小" :code="size_code">
      <Icon size="sm" name="search"></Icon>
      <Icon size="md" name="search"></Icon>
      <Icon size="lg" name="search"></Icon>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
</style>

<script>
  export default {
    data () {
      return {
        size_code: `
<Icon size="sm" name="search"></Icon>
<Icon size="md" name="search"></Icon>
<Icon size="lg" name="search"></Icon> 
        `
      }
    },
    components: {
      demo: require('@/pages/components/demo.vue'),
      demoItem: require('@/pages/components/demo-item.vue'),
      Icon: require('@/components/Icon/Icon.vue')
    }
  }
</script>
