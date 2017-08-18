<template>
  <span :class="component_class">
    <span class="box">
      <transition name="bounce">
        <i class="item" :style="{ backgroundColor: color }" v-show="is_active"></i>
      </transition>
    </span>
    <input class="hidden-input" :id="_uid" type="checkbox" :value="cur_value" @click="triggerHandler(cur_value)">
    <label class="checkbox-label" :for="_uid"><slot></slot></label>
  </span>
</template>

<style lang="stylus">
  @import './style/';

  bounce();
</style>

<script>
  const prefixCls = 'hiui-checkbox'

  export default {
    name: 'CheckBox',
    props: {
      size: {
        default: 'md',
        type: String
      },
      color: String,
      disabled: Boolean,
      value: {},
      checked: {
        type: Array,
        default: () => []
      }
    },
    model: {
      prop: 'checked',
      event: 'input'
    },
    data () {
      return {
        cur_checked: []
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          `${prefixCls}-${this.size}`,
          {
            disabled: this.disabled,
            active: this.is_active
          }
        ]
      },
      is_active: function () {
        return this.cur_checked.findIndex(item => this.cur_value === item) !== -1
      },
      cur_value: function () {
        return this.value == null ? this.$slots.default[0].text : this.value
      }
    },
    watch: {
      checked: function (checked) {
        this.cur_checked = [].concat(checked)
      }
    },
    created: function () {
      this.cur_checked = [].concat(this.checked)
    },
    methods: {
      triggerHandler: function (target) {
        if (this.disabled) return;
        let checked = this.cur_checked
        let index = checked.findIndex(item => {
          return item === target
        })
        if (index !== -1) checked.splice(index, 1)
        else checked.push(target)
        this.$emit('input', checked);
      }
    }
  }
</script>
