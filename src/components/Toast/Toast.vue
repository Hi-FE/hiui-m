<template>
  <transition v-if="show" name="fade" @after-leave="afterLeave">
    <div :class="component_class">
      {{ content }}
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
        time: 0,
        callback: null
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls
        ]
      }
    },
    methods: {
      close () {
        this.show = false
      },
      afterLeave () {
        this.$emit('destroy')
        this.$destroy(true)
      }
    },
    mounted () {
      document.body.appendChild(this.$el)
      setTimeout(this.close, this.time)
    },
    beforeDestroy () {
      this.callback && this.callback()
      document.body.removeChild(this.$el)
    }
  }
</script>
