<template>
  <div class="preview-wrap" :style="size">
    <slot></slot>
  </div>
</template>

<style lang="stylus" scope>
  @import '../../style/'; 
  
  .preview-wrap {
    position: fixed;
    top: 100px;
    right: 20px;
    border-radius: 4px;
    background-color: _grey_lighter;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .26);
    overflow: hidden;
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
    },
    components: {
    },
    methods: {
    }
  }
</script>
