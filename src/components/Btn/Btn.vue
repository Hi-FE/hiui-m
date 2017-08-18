<template>
  <button :class="component_class" @click="handleClick" :disabled="disabled">
    <Icon v-if="is_loading" name="loading" :rotate="true"></Icon>
    <Icon v-if="!is_loading && prefix" :name="prefix"></Icon>
    <span v-if="loading_text">
      {{ loading_text }}
    </span>
    <span v-else>
      <slot></slot>
    </span>
    <Icon v-if="!is_loading && suffix" :name="suffix"></Icon>
  </button>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  import Icon from '../Icon'

  const prefixCls = 'hiui-btn'

  export default {
    name: 'Btn',
    components: {
      Icon
    },
    props: {
      size: {
        default: 'md',
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      is_loading: {
        default: false,
        type: Boolean
      },
      loading_text: String,
      prefix: String,
      suffix: String
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          {
            [`${prefixCls}-${this.size}`]: this.size,
            'disabled': this.is_loading || this.disabled
          }
        ]
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>
