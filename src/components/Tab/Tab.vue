<template>
  <div :class="component_class" :style="tab_style">
    <div v-for="(item, i) in tab_data"
         :key="i" @click="handleClick(i, item.name)"
         @mouseenter="handleMouseEnter(i, item.name)"
         :class="[item_class, { active: value === i }]"
         :style="[item_style, value === i ? activeStyle : {}]"
         >
         <Icon v-if="item.icon" class="hiui-icon-prefix" :name="item.icon"></Icon>
         {{ item.name }}
         <Icon v-if="item.suffix_icon" class="hiui-icon-suffix" :name="item.suffix_icon"></Icon>
    </div>
  </div>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  import Icon from '../Icon'

  const prefixCls = 'hiui-tab'

  export default {
    name: 'Tab',
    components: {
      Icon
    },
    props: {
      value: {
        default: 0,
        type: Number
      },
      data: {
        default: [],
        type: Array
      },
      trigger: {
        default: 'click',
        type: String
      },
      type: {
        default: 'padding',
        type: String
      },
      font_size: Number,
      width: [Number, String],
      height: [Number, String],
      theme: String,
      activeStyle: Object,
      gap: Number
    },
    data () {
      return {
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          {
            [`${prefixCls}-${this.theme}`]: this.theme,
            [`${prefixCls}-${this.type && this.type.split(':')[0]}`]: this.type
          }
        ]
      },
      item_class () {
        return [
          `${prefixCls}-item`
        ]
      },
      item_style () {
        let style = {}
        if (this.bar_type === 'fix_width') {
          let val = this.type.split(':')[1]

          if (val) {
            style.width = val
          } else {
            style.width = `${1 / this.data.length * 100}%`
          }
        }

        if (typeof this.font_size === 'number') {
          style.fontSize = `${this.font_size}px`
        }

        if (typeof this.gap === 'number') {
          if (this.bar_type === 'no_padding') {
            style.marginRight = `${this.gap}px`
          }
          if (this.bar_type === 'padding') {
            style.padding = `0 ${this.gap / 2}px`
          }
        }
        return style
      },
      bar_type () {
        return this.type && this.type.split(':')[0]
      },
      tab_style () {
        let style = {}

        if (this.width) {
          style.width = this.width + (typeof this.width === 'number' ? 'px' : '')
        }
        if (this.height === 'auto') {
          style.height = 'auto'
          style.lineHeight = 'inherit'
        }
        if (typeof this.height === 'number') {
          style.height = `${this.height}px`
          style.lineHeight = `${this.height}px`
        }

        return style
      },
      tab_data () {
        return Array.from(this.data, (item) => typeof item === 'object' ? item : { name: item })
      }
    },
    methods: {
      handleClick (i, title) {
        if (this.trigger !== 'click' || i === this.value) {
          return false
        }

        this.$emit('input', i)
        this.$emit('change', i, title)
      },
      handleMouseEnter (i, title) {
        if (this.trigger !== 'hover' || i === this.value) {
          return false
        }

        this.$emit('input', i)
        this.$emit('change', i, title)
      }
    }
  }
</script>
