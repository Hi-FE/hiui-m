<template>
  <div class="demo-item">
    <h3 class="demo-item-title">
      {{ name }}
      <small>{{ description }}</small>
      <div class="show-code-btn" @click="show_code = !show_code">Code</div>
    </h3>
    <hr />
    <div class="demo-item-container">
      <slot></slot>
    </div>
    <transition name="slide">
      <div v-show="show_code" class="demo-code">
        <pre><code ref="code" :class="lang">{{ code.trim() }}</code></pre>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus" scope>
  @import '../../style/index.styl'; 
  
  .demo-item {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    background-color: _white;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .16);
    
    code {
      padding-left: 10px;
      font-size: 13px;
      border-radius: 4px;
      background-color: #f6f8fa;
    }
  }
  
  .demo-item-container {
    padding: 10px;
  }
  
  .demo-item-title {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    
    small {
      margin-left: 5px;
      font-size: 12px;
      color: #999;
    }
    
    .show-code-btn {
      float: right;
      font-size: 12px;
      color: _blue;
      cursor: pointer;
    }
  }
  
  .slide-enter-active, .slide-leave-active {
    max-height: 300px;
    overflow: hidden;
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to {
    max-height: 0;
  }
</style>

<script>
  import hljs from 'highlight.js'

  export default {
    name: 'demo-item',
    props: {
      lang: {
        default: 'html',
        type: String
      },
      name: String,
      description: String,
      code: String
    },
    data () {
      return {
        show_code: false
      }
    },
    mounted () {
      hljs.highlightBlock(this.$refs.code)
    }
  }
</script>
