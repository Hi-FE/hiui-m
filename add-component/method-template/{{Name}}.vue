<template>
  <div :class="component_class">
    {{Name}}
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  export default {
    name: '{{Name}}',
    props: {
    },
    data () {
      return {
      }
    },
    computed: {
      component_class: function () {
        return [
          'hiui-{{name}}'
        ]
      }
    }
  }
</script>
