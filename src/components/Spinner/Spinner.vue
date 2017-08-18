<template>
  <div :class="component_class">
    <div v-if="wrap" class="hiui-spinner-content">
      <Icon name="loading" :rotate="true" :color="color" :size="size"></Icon>
      <slot></slot>
    </div>
    <Icon v-else name="loading" :rotate="true" :color="color" :size="size"></Icon>
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  import Icon from '../Icon/'

  const prefixCls = 'hiui-spinner'

  export default {
    name: 'Spinner',
    components: {
      Icon
    },
    props: {
      size: Number,
      color: {
        default: '',
        type: String
      },
      wrap: {
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
          {
            [`${prefixCls}-wrap`]: this.wrap
          }
        ]
      },
      styles () {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`,
          color: `${this.color}`
        }
      }
    }
  }
</script>
