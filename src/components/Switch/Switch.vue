<template>
  <label :class="component_class">
    <input type="checkbox" v-model="checked" />
  </label>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
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
      component_class: function () {
        return [
          'hiui-switch',
          `hiui-switch-${this.size}`,
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
