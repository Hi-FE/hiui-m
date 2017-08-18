<template>
  <div class="demo-code">
    <pre><code ref="code" :class="lang">{{ code.trim() }}</code></pre>
  </div>
</template>

<style lang="stylus" scoped>
  .demo-code code {
    padding-left: 10px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f6f8fa;
  }
</style>

<script>
  import hljs from 'highlight.js'

  export default {
    name: 'v-code',
    props: ['code', 'lang'],
    mounted () {
      hljs.highlightBlock(this.$refs.code)
    }
  }
</script>