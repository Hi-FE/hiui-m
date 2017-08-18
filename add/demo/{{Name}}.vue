<template>
  <demo title="{{Name}}" class="{{name}}-demo">
    <demo-item name="default" description="默认" :code="code">
      <{{cname}}></{{cname}}>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
  @import '../../style/';

  .{{name}}-demo {
  }
</style>

<script>
  export default {
    data () {
      return {
        code: `
<{{cname}}></{{cname}}>
        `
      }
    }
  }
</script>
