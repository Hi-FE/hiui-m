<template>
  <demo title="Switch" class="switch-demo">
    <!-- Size -->
    <demo-item name="Size" description="尺寸" :code="code">
      <vSwitch size="sm" v-model="val"></vSwitch>
      <vSwitch size="md" v-model="val"></vSwitch>
      <vSwitch size="lg" v-model="val"></vSwitch>
    </demo-item>

    <!-- Color -->
    <demo-item name="Style" description="自定义样式" :code="color_code">
      <vSwitch class="green" v-model="val"></vSwitch>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
  @import '../../style/';
  
  .switch-demo {
    
    .demo-item-container {
      display: flex;
      align-items: center;     
    }
    .hiui-switch {
      margin-right: 10px;
    }
    
    .green {
      background-color: _red;
    }
    
    .green.checked {
      background-color: _green;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        code: `
<vSwitch size="sm" v-model="val"></vSwitch>
<vSwitch size="md" v-model="val"></vSwitch>
<vSwitch size="lg" v-model="val"></vSwitch>
        `,
        color_code: `
<vSwitch class="green" v-model="val"></vSwitch>

<style lang="stylus">
.green {
  background-color: _red;
}

.green.checked {
  background-color: _green;
}
</style>
        `,
        val: false
      }
    }
  }
</script>
