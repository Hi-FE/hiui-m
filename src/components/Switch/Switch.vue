<template>
  <div :class="component_class">
    Switch
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  export default {
    name: 'vSwitch',
    props: {
    },
    data () {
      return {
      }
    },
    computed: {
      component_class: function () {
        return [
          'hiui-switch'
        ]
      }
    }
  }
</script>
