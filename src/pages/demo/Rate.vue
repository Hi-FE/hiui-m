<template>
  <demo title="Rate" class="rate-demo">
    <demo-item name="default" description="默认" :code="code">
      <Rate v-model="value"></Rate>
    </demo-item>
    <demo-item name="texts" description="显示文本" :code="texts_code">
      <Rate
        v-model="texts_value"
        :show_text="true"
      ></Rate>
    </demo-item>
    <demo-item name="disabled" description="只读" :code="disbaled_code">
      <Rate
        :value="disabled_value"
        :allow_half="true"
        :show_text="true"
        :disabled="true"
        :texts="'{value}'"
      ></Rate>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
  @import '../../style/';

  .rate-demo {
  }
</style>

<script>
  export default {
    data () {
      return {
        value: 0,
        texts_value: 5,
        disabled_value: 3.5,
        code: `
<Rate v-model="value"></Rate>
        `,
        texts_code: `
<Rate
  v-model="value"
  :show_text="true"
></Rate>
        `,
        disbaled_code: `
<Rate
  :value="disabled_value"
  :allow_half="true"
  :show_text="true"
  :disabled="true"
  :texts="'{value}'"
></Rate>
        `
      }
    }
  }
</script>
