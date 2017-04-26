<template>
  <div :class="component_class">
    {{Name}}
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  const prefixCls = 'hiui-{{name}}'

  export default {
    name: '{{cname}}',
    props: {
    },
    data () {
      return {
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls
        ]
      }
    }
  }
</script>
