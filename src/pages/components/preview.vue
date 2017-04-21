<template>
  <div class="preview-wrap" :style="size">
    <slot></slot>
  </div>
</template>

<style lang="stylus" scope>
  @import '../../style/';

  .preview-wrap {
    position: fixed;
    top: 10px;
    right: 30px;
    border-radius: 4px;
    background-color: _grey_lighter;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .26);
    overflow: hidden;
  }

  @media screen and (min-height: 800px) {
    .preview-wrap {
      top: 80px;
    }
  }
</style>

<script>
  export default {
    name: 'Preview',
    props: ['width', 'height'],
    computed: {
      size: function() {
        return {
          width: `${this.width}px`,
          height: `${this.height}px`
        }
      }
    }
  }
</script>
