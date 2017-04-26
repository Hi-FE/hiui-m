<template>
  <div :class="component_class">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  const prefixCls = 'hiui-bar'

  export default {
    name: 'Bar',
    props: {
      size: {
        default: 'md',
        type: String
      },
      use_padding: {
        default: false,
        type: Boolean
      },
      is_center: {
        default: false,
        type: Boolean
      },
      is_middle: {
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          `${prefixCls}-${this.size}`,
          {
            [`${prefixCls}-padding`]: this.use_padding,
            [`${prefixCls}-center`]: this.is_center,
            [`${prefixCls}-middle`]: this.is_middle
          }
        ]
      }
    }
  }
</script>
