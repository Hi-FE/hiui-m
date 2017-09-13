<template>
  <span :class="component_class" v-if="label">{{ label }}</span>
</template>

<style lang="stylus">
  @import '../../../style/';
  .hiui-input-label { color: _grey_deep;line-height:1;transform-origin: left top; transition: transform .3s, margin-top .3s;position:absolute; z-index:9; top:50%; left:0; transform: translateY(-50%); }
</style>

<script>
  const prefixCls = 'hiui-input-label'
  export default {
    name: 'InputLabel',
    props: {
      label: [String, Number]
    },
    data: function () {
      return {}
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