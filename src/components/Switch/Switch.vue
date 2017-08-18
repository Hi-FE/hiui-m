<template>
  <label :class="component_class">
    <input type="checkbox" v-model="checked" :disabled="disabled" />
  </label>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  const prefixCls = 'hiui-switch'

  export default {
    name: 'vSwitch',
    props: {
      size: {
        default: 'md',
        type: String
      },
      value: {
        type: Boolean,
        required: true
      },
      disabled: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      component_class: function () {
        return [
          prefixCls,
          `${prefixCls}-${this.size}`,
          {
            'disabled': this.disabled,
            'checked': this.value
          }
        ]
      },
      checked: {
        set (val) {
          this.$emit('input', val)
        },
        get () {
          return this.value
        }
      }
    }
  }
</script>
