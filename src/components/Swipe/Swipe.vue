<template>
  <div :class="component_class" @mouseenter="is_hover = true" @mouseleave="is_hover = false">

      <div class="swiper-container" ref="swiper_container">
        <!-- Content -->
        <div class="swiper-wrapper">
          <slot></slot>
        </div>

        <!-- Index -->
        <SwipeIndex v-if="index"
                    :swiper="swiper"
                    :slides_len="slides_len"
                    :index_trigger="index_trigger"
                    :index_x_offset="index_x_offset"
                    :index_y_offset="index_y_offset"
                    @active="slideTo(arguments[0]), swiper.startAutoplay()"></SwipeIndex>

      </div>

      <!--  Arrow -->
      <SwipeArrow v-if="arrow && swiper" v-show="arrow !== 'hover' || is_hover"
                  :swiper="swiper"
                  :outer_arrow="outer_arrow"
                  :loop="loop"
                  :preview="preview"
                  :arrow_offset="arrow_offset"
                  :slides_len="slides_len"></SwipeArrow>

  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  import Swiper from 'swiper'
  import Icon from '../Icon'

  import 'swiper/dist/css/swiper.min.css'
  const prefixCls = 'hiui-swipe'

  export default {
    name: 'Swipe',
    props: {
      value: {},
      preview: { type: [Number, String], default: 1 },
      between: { type: Number, default: 0 },
      sliding_num: { type: Number, default: 1 },
      free: Boolean,
      coverflow: Boolean,
      loop: { type: Boolean, default: true },
      autoplay: [Boolean, Number],
      index: Boolean,
      index_trigger: { type: [String, Boolean], default: 'click' },
      trigger: { type: String, default: 'change' },
      arrow: { type: [String, Boolean], default: 'hover' },
      outer_arrow: {type: Boolean},
      arrow_offset: Number,
      index_x_offset: Number,
      index_y_offset: Number,
      update_by: {}
    },
    data () {
      return {
        swiper: null,
        inited: false,
        is_hover: false,
        is_sliding: false
      }
    },
    components: {
      Icon,
      SwipeSlide: require('./SwipeSlide.vue'),
      SwipeArrow: require('./components/arrow.vue'),
      SwipeIndex: require('./components/index.vue')
    },
    computed: {
      component_class () {
        return [
          prefixCls
        ]
      },
      config: function () {
        const { preview, between, sliding_num, free, loop, autoplay, value } = this;
        const autoplay_speed = typeof autoplay === 'number' ? autoplay : autoplay ? 5000 : undefined
        // default config
        let config = {
          slidesPerView: preview,
          slidesPerGroup: sliding_num,
          spaceBetween: between,
          freeMode: free,
          loop: loop,
          initialSlide: value,
          autoplay: autoplay_speed,
          onTransitionEnd: (swiper) => {
            const { inited, trigger } = this;
            if (!inited) return;
            if (trigger === 'progress') this.is_sliding = false;
            this.$emit('input', swiper.realIndex)
          }
        }
        // coverflow config
        const coverflow = this.coverflow ? {
          slideToClickedSlide: true,
          centeredSlides: true,
          effect: 'coverflow',
          coverflow: { rotate: 0, stretch: 0, depth: 100, modifier: 3, slideShadows: false }
        } : {};
        // progress config (emit index when swiper is sliding)
        const progress = this.trigger === 'progress' ? {
          watchSlidesProgress: true,
          onProgress: (swiper, progress) => {
            this.is_sliding = true;
            if (swiper.realIndex != null && swiper.realIndex !== this.value) {
              this.$emit('input', swiper.realIndex);
            }
          }
        } : {}
        config = { ...config, ...coverflow, ...progress }
        return config
      },
      slides_len: function () {
        if (!this.swiper) return 0;
        const len = this.swiper.slides.length;
        return this.loop ? len - this.preview * 2 : len
      },
      arrow_disabled_status: function () {
        const { loop, preview, swiper, slides_len } = this;
        return {
          prev: !loop && swiper.activeIndex === 0,
          next: !loop && swiper.activeIndex === slides_len - preview
        }
      },
      reset: function () {
        let { preview, between, free, coverflow, loop, sliding_num, autoplay } = this;
        return { preview, between, free, coverflow, loop, sliding_num, autoplay }
      }
    },
    created: function () {
      this.registerEvents();
    },
    mounted: function () {
      this.init()
    },
    watch: {
      value: function (index, old_index) {
        const { swiper, trigger, is_sliding } = this;
        if (!swiper || (trigger === 'progress' && is_sliding)) return;
        this.slideTo(index)
        this.swiper.startAutoplay()
      },
      update_by: {
        deep: true,
        handler: function () {
          this.$nextTick(() => this.update())
        }
      },
      reset: function () {
        this.swiper.destroy(true, true);
        this.init();
      }
    },
    methods: {
      init: function () {
        this.swiper = new Swiper(this.$refs.swiper_container, this.config);
        this.inited = true;
      },
      update: function () {
        this.swiper && this.swiper.update(true);
      },
      slideTo: function (target) {
        let { loop, preview, slides_len, swiper } = this;
        let active = swiper.activeIndex
        let len = swiper.slides.length
        let speed = swiper.params.speed
        if (loop) {
          let is_first = active === len - preview && target === 0;
          let is_last = active === preview - 1 && target === slides_len - 1
          if (is_first || is_last) speed = 0;
          target += preview
        }
        this.swiper.slideTo(target, speed)
      },
      registerEvents: function () {
        this.$on('slide-to', (index) => {
          this.slideTo(index)
        })
        this.$on('slide-next', (index) => {
          const {swiper} = this;
          swiper.slideNext()
        })
        this.$on('slide-prev', (index) => {
          const {swiper} = this;
          swiper.slidePrev()
        })
      }
    }
  }
</script>
