<template>
  <i :class="component_class" :style="size_style">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 1024 1024"
         width="100%"
         height="100%">
      <path :fill="color" :d="icons[name]"></path>
    </svg>
  </i>
</template>

<style lang="stylus">
  @import './style/';
</style>

<script>
  import data from './svg'

  export default {
    name: 'Icon',
    props: {
      size: Number,
      name: {
        type: String,
        required: true
      },
      color: {
        default: '#666',
        type: String
      },
      rotate: {
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
        icons: data
      }
    },
    computed: {
      component_class () {
        return [
          'hiui-icon',
          {
            'hiui-icon-rotate': this.rotate
          }
        ]
      },
      size_style () {
        return typeof this.size !== 'undefined' ? {
          width: `${this.size}px`,
          height: `${this.size}px`
        } : null
      }
    }
  };
</script>
