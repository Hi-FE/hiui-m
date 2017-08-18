<template>
  <div :class="component_class">
    <div :class="star_class" v-for="index in 5" @click="clickHandle(index)">
      <Icon :name="'star'" :size="size" :color="color"></Icon>
      <template v-if="index <= value">
        <Icon :name="'star'" :size="size" :color="active_color" :class="star_active_class"></Icon>
      </template>
      <template v-if="allow_half && value > index - 1 && value < index">
        <Icon :name="'star'" :size="size" :color="active_color" :class="star_active_class"
          :style="{
            width: `${(1 - index + value) * 100}%`
          }"
        ></Icon>
      </template>
    </div>
    <span v-if="show_text" :class="text_class">{{ text }}</span>
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  const prefixCls = 'hiui-rate'

  export default {
    name: 'Rate',
    props: {
      value: {
        type: Number,
        default: 0
      },
      size: {
        type: Number,
        default: 20
      },
      allow_half: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#ccc'
      },
      active_color: {
        type: String,
        default: '#f7ba2a'
      },
      show_text: {
        type: Boolean,
        default: false
      },
      texts: {
        type: [Array, String],
        default () {
          return ['极差', '失望', '一般', '满意', '惊喜']
        }
      }
    },
    data () {
      return {
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls
        ]
      },
      star_class () {
        return [
          `${prefixCls}-star`,
          {
            [`${prefixCls}-star-disabled`]: this.disabled
          }
        ]
      },
      star_active_class () {
        return [
          `${prefixCls}-star-active`
        ]
      },
      text_class () {
        return [
          `${prefixCls}-text`
        ]
      },
      text () {
        return Array.isArray(this.texts) ? this.texts[~~this.value - 1] : this.texts.replace(/\{value\}/, this.value)
      }
    },
    methods: {
      clickHandle (index) {
        if (this.disabled) {
          return false
        }

        this.$emit('input', index)
        this.$emit('change', index)
      }
    }
  }
</script>
