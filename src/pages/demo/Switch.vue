<template>
  <demo title="Switch" class="switch-demo">
    <!-- Size -->
    <demo-item name="size" description="尺寸" :code="code">
      <vSwitch :size="'sm'" v-model="val"></vSwitch>
      <vSwitch :size="'md'" v-model="val"></vSwitch>
      <vSwitch :size="'lg'" v-model="val"></vSwitch>
    </demo-item>

    <!-- Color -->
    <demo-item name="style" description="自定义样式" :code="color_code">
      <vSwitch :class="'green'" v-model="val"></vSwitch>
    </demo-item>

    <!-- Status -->
    <demo-item name="status" description="状态" :code="status_code">
      <vSwitch v-model="val"></vSwitch>
      <vSwitch v-model="val" disabled></vSwitch>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
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
<vSwitch :size="'sm'" v-model="val"></vSwitch>
<vSwitch :size="'md'" v-model="val"></vSwitch>
<vSwitch :size="'lg'" v-model="val"></vSwitch>
        `,
        color_code: `
<vSwitch :class="'green'" v-model="val"></vSwitch>

<style lang="stylus">
.green {
  background-color: _red;
}

.green.checked {
  background-color: _green;
}
</style>
        `,
        status_code: `
<vSwitch v-model="val"></vSwitch>
<vSwitch v-model="val" disabled></vSwitch>
        `,
        val: false
      }
    }
  }
</script>
