<template>
  <transition name="hiui-modal-fade" @after-leave="afterLeave">
    <div v-show="modal_show" v-if="isExist" :class="component_class" :style="component_style">
      <div v-if="use_mask" class="hiui-modal-mask" @click="closeModal('mask')"></div>
      <transition :name="transitionName[type]">
        <div v-show="modal_show" :class="container_class">
          <Icon v-if="use_close" :class="icon_class" name="close" role="button" @click.native="closeModal()"></Icon>
          <div :class="body_class" :style="body_style">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="stylus">
  @import './style/';

  fade('hiui-modal-');
  bounce-center('hiui-modal-');
  slide-down('hiui-modal-');
  slide-up('hiui-modal-');
  slide-left('hiui-modal-');
  slide-right('hiui-modal-');
</style>

<script>
  import { isValid, getStyles, on, off } from '@/tools';
  const prefixCls = 'hiui-modal'

  export default {
    name: 'Modal',
    components: {
      Icon: require('../Icon/Icon.vue')
    },
    props: {
      show: false,
      type: {
        default: 'center',
        type: String,
        validator (val) {
          return isValid(['center', 'top', 'bottom', 'left', 'right'], val)
        }
      },
      render_type: {
        default: 'show',
        type: String,
        validator (val) {
          return isValid(['show', 'if'], val)
        }
      },
      use_close: {
        default: true,
        type: Boolean
      },
      use_mask: {
        default: true,
        type: Boolean
      },
      mask_close: {
        default: true,
        type: Boolean
      },
      prevent_scroll: {
        default: true,
        type: Boolean
      },
      use_shadow: {
        default: true,
        type: Boolean
      },
      overflow: String,
      border_radius: String,
      background_color: String,
      z_index: [Number, String]
    },
    model: {
      prop: 'show',
      event: 'switch'
    },
    data () {
      return {
        modal_show: this.show,
        isExist: this.render_type === 'show' || this.show,
        transitionName: {
          center: 'hiui-modal-bounce-center',
          top: 'hiui-modal-slide-down',
          bottom: 'hiui-modal-slide-up',
          left: 'hiui-modal-slide-right',
          right: 'hiui-modal-slide-left'
        }
      }
    },
    watch: {
      show (val) {
        this.isExist = true
        this.$nextTick(() => {
          this.modal_show = val
        })

        if (this.prevent_scroll) {
          if (val) {
            on(document.documentElement, 'mousewheel', this.noScroll)
            on(document.documentElement, 'DOMMouseScroll', this.noScroll)
          } else {
            off(document.documentElement, 'mousewheel', this.noScroll)
            off(document.documentElement, 'DOMMouseScroll', this.noScroll)
          }
        }
      }
    },
    computed: {
      component_class () {
        return [
          `${prefixCls}-wrap`
        ]
      },
      component_style () {
        return getStyles({
          zIndex: this.z_index
        })
      },
      container_class () {
        let classNames = [
          prefixCls,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-hasMask`]: this.use_mask
          }
        ]
        return classNames
      },
      body_class () {
        let classNames = [
          `${prefixCls}-body`,
          {
            [`${prefixCls}-body-use_shadow`]: this.use_shadow
          }
        ]
        return classNames
      },
      body_style () {
        return getStyles({
          backgroundColor: this.background_color,
          borderRadius: this.border_radius,
          overflow: this.overflow
        })
      },
      icon_class () {
        return [
          `${prefixCls}-close`
        ]
      }
    },
    methods: {
      noScroll (e) {
        e.preventDefault()
      },
      closeModal (name) {
        if (name === 'mask' && !this.mask_close) {
          return false
        }
        this.$emit('switch', false)
      },
      afterLeave () {
        this.isExist = this.render_type === 'show'
      }
    },
    destroyed () {
      off(document.documentElement, 'mousewheel', this.noScroll)
      off(document.documentElement, 'DOMMouseScroll', this.noScroll)
    }
  }
</script>
