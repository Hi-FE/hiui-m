<template>
  <demo title="Btn">
    <!-- Prop: type -->
    <demo-item name="Type" description="按钮类型" :code="type_code">
      <div class="btn-group">
        <Btn>Button</Btn>
        <Btn type="solid">Button</Btn>
        <Btn type="dashed">Button</Btn>
      </div> 
    </demo-item>

    <!-- Prop: theme-->
    <demo-item name="Theme" description="按钮颜色" :code="theme_code">
      <div class="btn-group">
        <!-- default -->
        <Btn theme="blue">Button</Btn>
        <Btn theme="green">Button</Btn>
        <Btn theme="red">Button</Btn>
        <!-- solid -->
        <Btn theme="blue" type="solid">Button</Btn>
        <Btn theme="green" type="solid">Button</Btn>
        <Btn theme="red" type="solid">Button</Btn>
        <!-- dashed -->
        <Btn theme="blue" type="dashed">Button</Btn>
        <Btn theme="green" type="dashed">Button</Btn>
        <Btn theme="red" type="dashed">Button</Btn>
        <!-- disabled -->
        <Btn theme="blue" :disabled="true">Button</Btn>
        <Btn theme="green" :disabled="true">Button</Btn>
        <Btn theme="red" :disabled="true">Button</Btn>
      </div> 
    </demo-item>

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
    margin: 3px 3px 3px 0;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data () {
      return {
        type_code: `
<Btn>Button</Btn>
<Btn type="solid">Button</Btn>
<Btn type="dashed">Button</Btn> 
        `,
        theme_code: `
<!-- default -->
<Btn theme="blue">Button</Btn>
<Btn theme="green">Button</Btn>
<Btn theme="red">Button</Btn>
<!-- solid -->
<Btn theme="blue" type="solid">Button</Btn>
<Btn theme="green" type="solid">Button</Btn>
<Btn theme="red" type="solid">Button</Btn>
<!-- dashed -->
<Btn theme="blue" type="dashed">Button</Btn>
<Btn theme="green" type="dashed">Button</Btn>
<Btn theme="red" type="dashed">Button</Btn>
<!-- disabled -->
<Btn theme="blue" :disabled="true">Button</Btn>
<Btn theme="green"  :disabled="true">Button</Btn>
<Btn theme="red"  :disabled="true">Button</Btn>
        `,
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
      demoItem: require('@/pages/components/demo-item.vue'),
      Btn: require('@/components/Btn/Btn.vue')
    }
  }
</script>
