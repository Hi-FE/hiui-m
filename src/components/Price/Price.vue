<template>
  <span :class="component_class" :style="component_style">
    <small :style="suffix_style">{{ symbol }}</small><em><slot></slot></em><small class="hiui-price-suffix" :style="suffix_style" v-if="suffix">{{ suffix }}</small>
  </span>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  const prefixCls = 'hiui-price'

  export default {
    name: 'Price',
    props: {
      super: {
        type: Boolean,
        default: false
      },
      delete: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#f02f45'
      },
      font_size: {
        type: Number,
        default: 24
      },
      no_shrink: {
        type: Boolean,
        default: false
      },
      symbol: {
        type: String,
        default: '￥'
      },
      suffix: [String, Number],
      text_size: Number
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
            [`${prefixCls}-sup`]: this.super,
            [`${prefixCls}-delete`]: this.delete,
            [`${prefixCls}-noShrink`]: this.no_shrink
          }
        ]
      },
      component_style () {
        return {
          'color': this.color,
          'font-size': `${this.font_size}px`,
          'line-height': `${this.font_size}px`
        }
      },
      suffix_style () {
        return {
          'font-size': `${this.text_size}px`
        }
      }
    }
  }
</script>
