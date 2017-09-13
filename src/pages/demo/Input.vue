<template>
  <demo title="Input" class="input-demo">
    <demo-item name="size" description="大小" :code="code">
      <Input :size="'sm'" v-model="size_test"></Input>
      <Input :size="'md'" v-model="size_test"></Input>
      <Input :size="'lg'" v-model="size_test"></Input>
    </demo-item>
    <demo-item name="labelFloat" description="标题浮动" :code="label_code">
      <Input :label="'我是浮动标题'" v-model="label_test"></Input>
      <Input :placeholder="'我是提示'" v-model="label_test"></Input>
    </demo-item>
    <demo-item name="status" description="状态" :code="disabled_code">
      <Input :placeholder="'正常使用'" v-model="status_test"></Input>
      <Input :placeholder="'我被禁用了'" :disabled="true"></Input>
    </demo-item>
    <demo-item name="color" description="颜色" :code="color_code">
      <Input :placeholder="'默认'" v-model="color_test"></Input>
      <Input :placeholder="'绿色'" color="#4fae9B" v-model="color_test"></Input>
      <Input :placeholder="'蓝色'" color="rgb(0, 160, 233)" v-model="color_test"></Input>
    </demo-item>
    <demo-item name="verify" description="验证" :code="verify_code">
      <Input :placeholder="'验证手机号(数字7~14位)'" verify="phone" @verify="verify_result = arguments[0]"></Input>
      <p>手机号验证结果: {{ verify_result }}</p>
      <Input :placeholder="'验证手机号/邮箱'" :verify="['phone', 'email']" @verify="verify3_result = arguments[0]"></Input>
      <p>手机号/邮箱验证果: {{ verify3_result }}</p>
      <Input :placeholder="'输入 哈哈'" :reg="/哈哈/" tip="不开心" @verify="verify1_result = arguments[0]"></Input>
      <p>自定义验证1结果：{{verify1_result}}</p>
      <Input :placeholder="'自定义验证2'" :ref="'verify_input'" @verify="verify2_result = arguments[0]"></Input>
      <p>
        <Btn @click="$refs.verify_input.$emit(verify2_result ? 'error' : 'correct', '自定义的错误信息啊')">{{ verify2_result ? '报错' : '正确' }}</Btn>
        <Btn @click="$refs.verify_input.$emit('clear')">清除(验证结果还原为false)</Btn>
      </p>
      <p>自定义验证1结果：{{verify2_result}}</p>
    </demo-item>
    <demo-item name="textarea" description="文本域" :code="textarea_code">
      <Input v-model="textarea_test"></Input>
      <Input v-model="textarea_test" :placeholder="'默认3行高'" type="textarea"></Input>
      <Input v-model="textarea_test" type="textarea" :placeholder="'内容撑开高度'" :autosize="true"></Input>
    </demo-item>
    <demo-item name="select" description="选择框" :code="textarea_code">
      <Input v-model="select_test" :type="'select'" :enums="['男', '女', '保密']" :label="'性别'"></Input>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';
  .hiui-input{ margin-bottom:5px }
  .verify-result { margin-top:5px;margin-bottom:5px }
</style>

<script>
  export default {
    data () {
      return {
        size_test: '',
        label_test: '',
        status_test: '',
        verify_test: '',
        verify1_test: '',
        verify2_test: '',
        color_test: '',
        textarea_test: '',
        select_test: '',
        verify_result: false,
        verify1_result: false,
        verify2_result: false,
        verify3_result: false,
        code: `
<Input :size="'sm'" v-model="test"></Input>
<Input :size="'md'" v-model="test"></Input>
<Input :size="'lg'" v-model="test"></Input>
        `,
        label_code: `
// 只要存在label，都会默认使用浮动动画。
<Input :label="'我是浮动标题'" v-model="label_test"></Input>
<Input :placeholder="'我是提示'" v-model="label_test"></Input>
        `,
        color_code: `
<Input :placeholder="'默认'" v-model="status_test"></Input>
<Input :placeholder="'绿色'" color="#4fae9B" v-model="color_test"></Input>
<Input :placeholder="'蓝色'" color="rgb(0, 160, 233)" v-model="color_test"></Input>
        `,
        disabled_code: `
<Input :placeholder="'正常使用'" v-model="status_test"></Input>
<Input :placeholder="'我被禁用了'" :disabled="true" v-model="status_test"></Input>
        `,
        verify_code: `
// 更多验证细节，参照API
<Input :placeholder="'验证手机号(数字7~14位)'" verify="phone" @verify="verify_result = arguments[0]"></Input>
<p>手机号验证结果: {{ verify_result }}</p>
<Input :placeholder="'验证手机号/邮箱'" :verify="['phone', 'email']" @verify="verify3_result = arguments[0]"></Input>
<p>手机号/邮箱验证果: {{ verify3_result }}</p>
<Input :placeholder="'输入 哈哈'" :reg="/哈哈/" tip="不开心" @verify="verify1_result = arguments[0]"></Input>
<p>自定义验证1结果：{{verify1_result}}</p>
<Input :placeholder="'自定义验证2'" :ref="'verify_input'" @verify="verify2_result = arguments[0]"></Input>
<p>
  <Btn @click="$refs.verify_input.$emit(verify2_result ? 'error' : 'correct', '自定义的错误信息啊')">{{ verify2_result ? '报错' : '正确' }}</Btn>
  <Btn @click="$refs.verify_input.$emit('clear')">清除(验证结果还原为false)</Btn>
</p>
<p>自定义验证1结果：{{verify2_result}}</p>
        `,
        textarea_code: `
<Input v-model="textarea_test"></Input>
<Input v-model="textarea_test" :placeholder="'默认3行高'" type="textarea"></Input>
<Input v-model="textarea_test" type="textarea" :placeholder="'内容撑开高度'" :autosize="true"></Input>
        `
      }
    }
  }
</script>
