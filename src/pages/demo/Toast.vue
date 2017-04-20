<template>
  <demo title="Icon" class="icon-demo">
    <demo-item name="Default" description="默认" :code="size_code" lang="js">
      <Btn @click.native="$toast('Default Toast')">Toast</Btn>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
  .icon-demo .hiui-icon { margin: 0 2px; }
</style>

<script>
  export default {
    data () {
      return {
        size_code: `
this.$toast('Default Toast')
        `
      }
    }
  }
</script>
