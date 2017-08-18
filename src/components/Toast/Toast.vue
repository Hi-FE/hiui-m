<template>
  <transition name="hiui_fade" @after-leave="afterLeave">
    <div v-if="show" :class="component_class">
      <!-- <Icon v-if="show_icon" :name="iconType[type]" :size="16"></Icon> -->
      <div class="hiui-toast-content">{{ content }}</div>
    </div>
  </transition>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  const prefixCls = 'hiui-toast'

  export default {
    name: 'Toast',
    data () {
      return {
        show: false,
        content: '',
        time: 2000,
        type: 'default',
        callback: null,
        iconType: {
          'default': 'info-circle',
          'primary': 'info-circle',
          'success': 'check-circle',
          'error': 'close-circle',
          'warning': 'exclamation-circle'
        },
        show_icon: {
          type: Boolean,
          default: true
        }
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          {
            [`${prefixCls}-${this.type}`]: this.type,
            [`${prefixCls}-show_icon`]: this.show_icon
          }
        ]
      }
    },
    methods: {
      close () {
        this.show = false
      },
      afterLeave () {
        this.$destroy(true)
      }
    },
    mounted () {
      document.body.appendChild(this.$el)
      this.time && setTimeout(this.close, this.time)
    },
    beforeDestroy () {
      document.body.removeChild(this.$el)
      this.callback && this.$nextTick(() => {
        this.callback()
      })
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>
