<template>
  <div class="demo-item">
    <h3 class="demo-item-title">
      {{ name }}
      <small>{{ description }}</small>
    </h3>
    <hr />
    <div class="demo-item-container">
      <slot></slot>
    </div>
    <transition name="slide">
      <div class="demo-code">
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
      font-size: 13px;
      border-radius: 4px;
    }
  }
  
  .demo-item-container {
    padding: 10px 0;
  }
  
  .demo-item-title {
    padding: 5px 10px;
    
    small {
      margin-left: 5px;
      font-size: 12px;
      color: #999;
    }
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
    mounted () {
      hljs.highlightBlock(this.$refs.code)
    }
  }
</script>
