<template>
  <demo title="Checkbox" class="checkbox-demo">

    <demo-item name="size" description="大小" :code="code">
      <CheckBox v-model="test" :size="'sm'">小</CheckBox>
      <CheckBox v-model="test" :size="'md'">中等</CheckBox>
      <CheckBox v-model="test" :size="'lg'">大</CheckBox>
      <p class="result">{{ JSON.stringify(test) }}</p>
    </demo-item>

    <demo-item name="value" description="指定值" :code="value_code">
      <CheckBox v-model="test_value" :value="'small'">小</CheckBox>
      <CheckBox v-model="test_value" :value="'normal'">中等</CheckBox>
      <CheckBox v-model="test_value" :value="'large'">大</CheckBox>
      <p class="result">{{ JSON.stringify(test_value) }}</p>
    </demo-item>

    <demo-item name="status" description="状态" :code="disable_code">
      <CheckBox v-model="test_disable">正常</CheckBox>
      <CheckBox v-model="test_disable" :disabled="true">禁用</CheckBox>
      <p class="result">{{ JSON.stringify(test_disable) }}</p>
    </demo-item>

    <demo-item name="color" description="颜色" :code="color_code">
      <CheckBox v-model="test_color">正常</CheckBox>
      <CheckBox v-model="test_color" :color="'rgb(0, 160, 233)'">蓝色</CheckBox>
      <p class="result">{{ JSON.stringify(test_color) }}</p>
    </demo-item>

  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';
  .checkbox-demo .hiui-checkbox { margin-right:5px }
  .checkbox-demo .result { margin-top:10px;margin-bottom:0 }
</style>

<script>
  export default {
    data () {
      return {
        test: [],
        test_value: [],
        test_disable: [],
        test_color: [],
        code: `
<CheckBox v-model="test" :size="'sm'">小</CheckBox>
<CheckBox v-model="test" :size="'md'">中等</CheckBox>
<CheckBox v-model="test" :size="'lg'">大</CheckBox>
        `,
        value_code: `
<CheckBox v-model="test_value" :value="'small'" :size="'sm'">小</CheckBox>
<CheckBox v-model="test_value" :value="'normal'" :size="'md'">中等</CheckBox>
<CheckBox v-model="test_value" :value="'large'" :size="'lg'">大</CheckBox>
        `,
        disable_code: `
<CheckBox v-model="test_disable">正常</CheckBox>
<CheckBox v-model="test_disable" :disabled="true">禁用</CheckBox>
        `,
        color_code: `
<CheckBox v-model="test_color">正常</CheckBox>
<CheckBox v-model="test_color" :color="'rgb(0, 160, 233)'">蓝色</CheckBox>
        `
      }
    }
  }
</script>
