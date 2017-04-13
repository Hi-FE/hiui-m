<template>
  <button :class="component_class">
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
  export default {
    name: 'Btn',
    components: {
      Icon: require('@/components/Icon/Icon.vue')
    },
    props: {
      type: {
        default: 'primary',
        type: String
      },
      theme: {
        default: '',
        type: String
      },
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
    data () {
      return {
        msg: 'button'
      }
    },
    computed: {
      component_class: function () {
        return [
          'hiui-btn',
          `hiui-btn-${this.type}`,
          `hiui-btn-${this.theme}`,
          {
            [`hiui-btn-${this.size}`]: this.size,
            'disabled': this.disabled
          }
        ]
      }
    }
  }
</script>
