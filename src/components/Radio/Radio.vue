<template>
  <span :class="component_class">
    <i class="radio-icon">
      <transition name="bounce">
        <i class="active-sign" v-show="is_active" :style="active_style"></i>
      </transition>
    </i>
    <input class="hidden-input" :id="_uid" type="radio" :value="cur_value" @click="!disabled && triggerHandler(cur_value)">
    <label class="radio-label" :for="_uid"><slot></slot></label>
  </span>
</template>

<style lang="stylus">
  @import './style/';

  bounce();
</style>

<script>
  const prefixCls = 'hiui-radio'

  export default {
    name: 'Radio',
    props: {
      value: {},
      checked: {},
      size: {
        default: 'md',
        type: String
      },
      color: String,
      reselect: Boolean,
      disabled: Boolean
    },
    model: {
      prop: 'checked',
      event: 'input'
    },
    data () {
      return {
        cur_checked: ''
      }
    },
    computed: {
      component_class () {
        const { size, disabled, is_active } = this
        return [
          prefixCls,
          `${prefixCls}-${size}`,
          { disabled, active: is_active }
        ]
      },
      is_active: function () {
        const { cur_value, cur_checked } = this;
        return cur_value === cur_checked
      },
      active_style: function () {
        return {
          backgroundColor: this.color
        }
      },
      cur_value: function () {
        return this.value == null ? this.$slots.default[0].text : this.value
      }
    },
    watch: {
      checked: function (checked) {
        this.cur_checked = checked;
      }
    },
    created: function () {
      this.cur_checked = this.checked
    },
    methods: {
      triggerHandler: function (value) {
        this.cur_checked = this.reselect && this.cur_checked === value && this.cur_checked !== '' ? '' : value;
        this.$emit('input', this.cur_checked)
      }
    }
  }
</script>