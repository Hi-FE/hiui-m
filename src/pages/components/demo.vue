<template>
  <div class="demo-wrap">
    <h2 class="title">{{ title }}</h2>
    <div class="demo-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '../../style/index.styl';

  .demo-wrap {
    position: relative;
    width: 100%;
    height: 100%;

    .title {
      position: fixed;
      top: 0;
      left: 0;
      height: 50px;
      width: 100%;
      line-height: 50px;
      background-color: _blue;
      color: _white;
      text-align: center;
      z-index: 9;
    }

    .demo-container {
      position: relative;
      top: 50px;
      left: 0;
      overflow: auto;
      width: 100%;
      height: calc(100% - 50px);
    }
  }
</style>

<script>
  export default {
    name: 'demo',
    props: {
      title: {
        default: '',
        type: String
      },
      is_horizontal_center: {
        default: false,
        type: Boolean
      },
      is_vertical_center: {
        default: false,
        type: Boolean
      }
    }
  }
</script>
