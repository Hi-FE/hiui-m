<template>
  <label :class="component_class">
    <input type="checkbox" v-model="checked" />
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
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          `${prefixCls}-${this.size}`,
          {
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
