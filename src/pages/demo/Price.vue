<template>
  <demo title="Price" class="price-demo">
    <demo-item name="fontSize" description="字号大小" :code="code">
      <Price>24</Price>
      <Price :font_size="36">36</Price>
      <Price :font_size="48">48</Price>
    </demo-item>

    <demo-item name="color" description="颜色" :code="color_code">
      <Price>99</Price>
      <Price :color="'#00a0e9'">998</Price>
      <Price :color="'rgba(99, 99, 99, 1)'">9998</Price>
    </demo-item>

    <demo-item name="super" description="价格符号对其文本上标" :code="super_code">
      <Price :super="true">24</Price>
      <Price :super="true" :font_size="36">36</Price>
      <Price :super="true" :font_size="48">48</Price>
    </demo-item>

    <demo-item name="delete" description="删除样式" :code="delete_code">
      <Price :delete="true">24</Price>
      <Price :delete="true" :font_size="36">36</Price>
      <Price :delete="true" :font_size="48">48</Price>
    </demo-item>

    <demo-item name="suffix" description="后缀文本" :code="suffix_code">
      <Price suffix="起">24</Price>
      <Price suffix="起" :font_size="36">36</Price>
      <Price suffix="起" :font_size="48">48</Price>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
  @import '../../style/';

  .price-demo {
  }
</style>

<script>
  export default {
    data () {
      return {
        code: `
<Price>24</Price>
<Price :font_size="36">36</Price>
<Price :font_size="48">48</Price>
        `,
        color_code: `
<Price>99</Price>
<Price :color="'#00a0e9'">998</Price>
<Price :color="'rgba(99, 99, 99, 1)'">9998</Price>
        `,
        super_code: `
<Price :super="true">24</Price>
<Price :super="true" :font_size="36">36</Price>
<Price :super="true" :font_size="48">48</Price>
        `,
        delete_code: `
<Price :delete="true">24</Price>
<Price :delete="true" :font_size="36">36</Price>
<Price :delete="true" :font_size="48">48</Price>
        `,
        suffix_code: `
<Price suffix="起">24</Price>
<Price suffix="起" :font_size="36">36</Price>
<Price suffix="起" :font_size="48">48</Price>
        `
      }
    }
  }
</script>
