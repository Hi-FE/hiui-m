<template>
  <div :class="component_class">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
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
      component_class: function () {
        return [
          'hiui-bar',
          `hiui-bar-${this.size}`,
          {
            'hiui-bar-padding': this.use_padding,
            'hiui-bar-center': this.is_center,
            'hiui-bar-middle': this.is_middle
          }
        ]
      }
    }
  }
</script>
