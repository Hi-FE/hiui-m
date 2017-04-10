<template>
  <button :style="style">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style lang="stylus">
  @import './style/'
</style>

<script>
  import { fontSize, inter, gap } from '@/style/'

  export default {
    name: 'Btn',
    props: {
      size: {
        default: 'md',
        type: String,
        validator (val) {
          return ['sm', 'md', 'lg'].some((v) => v === val)
        }
      },
      disabled: {
        default: false,
        type: Boolean
      },
      is_loading: {
        default: false,
        type: Boolean
      },
      prefix: [Object, String],
      suffix: [Object, String]
    },
    data () {
      return {
        msg: 'button'
      }
    },
    computed: {
      style: function() {
        return {
          padding: `0 ${gap[this.size]}`,
          fontSize: fontSize[this.size],
          height: inter[this.size]
        }
      }
    }
  }
</script>
