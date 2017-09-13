<template>
  <div class="swipe-index" :style="swipe_offset_style">
    <span class="index"
          v-for="(item, i) in slides_len"
          :class="{ active: i === swiper.realIndex }"
          @click="index_trigger === 'click' && $emit('active', i)"
          @mouseenter="index_trigger === 'hover' && $emit('active', i)"></span>
  </div>
</template>

<style scoped lang="stylus">
  @import '../../../style/';
  .swipe-index {
    position:absolute;z-index:9;left:50%;bottom:_gap_xsm;transform:translateX(-50%);
    .index { display: inline-block;width: _swipe_size;height: _swipe_size;border-radius:100%;background-color:rgba(255,255,255,.5);transition: background-color .3s;cursor:pointer }
    .index.active{ background-color:#fff }
    .index + .index{ margin-left:_gap_xsm }
  }
</style>

<script>
  export default {
    name: 'swipeIndex',
    props: ['swiper', 'index_x_offset', 'index_y_offset', 'slides_len', 'index_trigger'],
    data: function () {
      return {}
    },
    computed: {
      swipe_offset_style: function () {
        const _gap_xsm = 14
        const { index_x_offset, index_y_offset } = this;
        return {
          'margin-left': index_x_offset + 'px',
          'bottom': _gap_xsm + index_y_offset + 'px'
        }
      }
    }
  }
</script>