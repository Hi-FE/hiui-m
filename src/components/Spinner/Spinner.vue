<template>
  <div :class="component_class" :style="styles"></div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  const prefixCls = 'hiui-spinner'

  export default {
    name: 'Spinner',
    props: {
      size: {
        default: 26,
        type: Number
      },
      color: {
        default: '#666',
        type: String
      }
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
      },
      styles () {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`,
          borderColor: `${this.color}`
        }
      }
    }
  }
</script>
