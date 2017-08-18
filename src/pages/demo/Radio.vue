<template>
  <demo title="Radio" class="radio-demo">
    <demo-item name="size" description="大小" :code="code">
      <Radio v-model="test" :size="'sm'">单选按钮</Radio>
      <Radio v-model="test" :size="'md'">单选按钮2</Radio>
      <Radio v-model="test" :size="'lg'">单选按钮3</Radio>
      <p class="radio-result">已选中：{{ test }}</p>
    </demo-item>
    <demo-item name="value" description="指定值" :code="value_code">
      <Radio :value="0" v-model="value_test">单选按钮</Radio>
      <Radio :value="1" v-model="value_test">单选按钮2</Radio>
      <Radio :value="2" v-model="value_test">单选按钮3</Radio>
      <p class="radio-result">已选中：{{ value_test }}</p>
    </demo-item>
    <demo-item name="status" description="状态" :code="status_code">
      <Radio v-model="status_test">单选按钮</Radio>
      <Radio :disabled="true" v-model="status_test">已禁用</Radio>
      <p class="radio-result">已选中：{{ status_test }}</p>
    </demo-item>
    <demo-item name="color" description="颜色" :code="color_code">
      <Radio v-model="color_test">单选按钮</Radio>
      <Radio :color="'rgb(0, 160, 233)'" v-model="color_test">单选按钮2(蓝色)</Radio>
      <p class="radio-result">已选中：{{ color_test }}</p>
    </demo-item>
    <demo-item name="reselect" description="重选(选中状态再次点击则取消)" :code="reselect_code">
      <Radio v-model="reselect_test" :reselect="true">单选按钮</Radio>
      <Radio v-model="reselect_test" :reselect="true">单选按钮2</Radio>
      <p class="radio-result">已选中：{{ reselect_test }}</p>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';
  .hiui-radio { margin-right:5px }
  .radio-result { margin-bottom:0;margin-top:10px }
</style>

<script>
  export default {
    data () {
      return {
        test: '',
        value_test: 0,
        status_test: '',
        color_test: '',
        reselect_test: '',
        code: `
<Radio v-model="test" :size="'sm'">单选按钮</Radio>
<Radio v-model="test" :size="'md'">单选按钮2</Radio>
<Radio v-model="test" :size="'lg'">单选按钮3</Radio>
<p class="radio-result">已选中：{{ test }}</p>
        `,
        value_code: `
<Radio :value="1" v-model="value_test">单选按钮</Radio>
<Radio :value="2" v-model="value_test">单选按钮2</Radio>
<Radio :value="3" v-model="value_test">单选按钮3</Radio>
<p class="radio-result">已选中：{{ value_test }}</p>
        `,
        status_code: `
<Radio v-model="status_test">单选按钮</Radio>
<Radio :disabled="true" v-model="status_test">已禁用</Radio>
<p class="radio-result">已选中：{{ status_test }}</p>
        `,
        color_code: `
<Radio v-model="color_test">单选按钮</Radio>
<Radio :color="'rgb(0, 160, 233)'" v-model="color_test">单选按钮2(蓝色)</Radio>
<p class="radio-result">已选中：{{ color_test }}</p>
        `,
        reselect_code: `
<Radio v-model="reselect_test" :reselect="true">单选按钮</Radio>
<Radio v-model="reselect_test" :reselect="true">单选按钮2</Radio>
<p class="radio-result">已选中：{{ reselect_test }}</p>
        `
      }
    }
  }
</script>
