<template>
  <header class="header">
    <h3 class="logo">
      Hiui-M
    </h3>
    <ul class="menu">
      <li>
        <a href="https://github.com/Hi-FE/hiui-m">Github</a>
      </li>
    </ul>
  </header>
</template>

<style lang="stylus" scope>
  @import '../../style/'; 

  _height = 60px;
  _font_color = _white;
  _bg_color =  _black;
  
  .header {
    height: _height;
    line-height: _height;
    color: _font_color;
    background-color: _bg_color;
    overflow: hidden;
    
    .logo {
      float: left;
      width: 100px;
      text-align: center;
    }
    
    .menu {
      float: right;
      list-style: none;
      margin-right: 40px;

      a {
        color: _white;
      }
    }
  }
</style>

<script>
  export default {
    name: 'Header',
    components: {
    },
    methods: {
    }
  }
</script>
