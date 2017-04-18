<template>
  <demo title="Btn">
    <!-- Prop: size -->
    <demo-item name="Size" description="按钮大小" :code="size_code">
      <div class="btn-group">
        <Btn size="sm">Size sm</Btn>
        <Btn size="md">Size md</Btn>
        <Btn size="lg">Size lg</Btn>  
      </div> 
    </demo-item>

    <!-- Prop: disabled is_loading --> 
    <demo-item name="Status" description="按钮状态" :code="status_code">
      <div class="btn-group">
        <Btn :disabled="true">Disabled</Btn>
        <Btn :is_loading="true" loading_text="Loading..">Btn</Btn>
      </div> 
    </demo-item>

    <!-- Prop: prefix suffix --> 
    <demo-item name="Icon" description="更多图标" :code="icon_code">
      <div class="btn-group">
        <Btn prefix="search">search</Btn>
        <Btn suffix="search">search</Btn>
      </div> 
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>  
  .btn-group > button {
    margin: 2px 2px 2px 0;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data () {
      return {
        size_code: `
<Btn size="sm">Btn sm</Btn>
<Btn size="md">Btn md</Btn>
<Btn size="lg">Btn lg</Btn>
        `,
        status_code: `
<Btn :disabled="true">Disabled</Btn>
<Btn :is_loading="true" loading_text="Loading..">Btn</Btn>
        `,
        icon_code: `
<Btn prefix="search">search</Btn>
<Btn suffix="search">search</Btn>
        `
      }
    },
    components: {
      demo: require('@/pages/components/demo.vue'),
      demoItem: require('@/pages/components/demo-item.vue')
    }
  }
</script>
