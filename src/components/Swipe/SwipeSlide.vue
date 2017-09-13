<template>
  <div :class="component_class">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
</style>

<script>

  const prefixCls = 'hiui-swipe-slide'

  export default {
    name: 'SwipeSlide',
    computed: {
      component_class () {
        return [
          prefixCls,
          'swiper-slide'
        ]
      }
    }
  }
</script>
