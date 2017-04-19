<template>
  <div :class="component_class" :style="styles"></div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
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
      component_class: function () {
        return [
          'hiui-spinner'
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
