<template>
  <demo title="{{Name}}" class="{{name}}-demo">
    <demo-item name="default" description="默认" :code="code" lang="js">
      <Btn @click.native="${{name}}()">{{Name}}</Btn>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';

  .{{name}}-demo {}
</style>

<script>
  export default {
    data () {
      return {
        code: `
this.${{name}}()
        `
      }
    }
  }
</script>
