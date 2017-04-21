<template>
  <header class="header">
    <h3 class="logo">
      {{ config.name }}
      <small>{{ config.version }}</small>
    </h3>
    <ul class="menu">
      <li>
        <a :href="config.github">Github</a>
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
      padding: 0 20px;

      small {
        font-size: 12px;
        opacity: .3;
        letter-spacing: 1.3px;
      }
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
  import config from '@/config'

  export default {
    name: 'Header',
    data () {
      return {
        config
      }
    }
  }
</script>
