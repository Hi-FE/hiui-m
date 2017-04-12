<template>
  <div class="demo-wrap">
    <h2 class="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<style lang="stylus" scope>
  @import '../../style/index.styl'; 
  
  .demo-wrap {
    display: flex;
    flex-direction: column;
    
    .title {
      height: 50px;
      line-height: 50px;
      background-color: _black;
      color: _white;
      text-align: center;
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
