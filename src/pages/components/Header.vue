<template>
  <header class="header">
    <h3 class="logo">
      {{ config.name }}
      <small>{{ config.version }}</small>
    </h3>
    <ul class="menu">
      <li v-for="(val, key) in config.links">
        <a :href="val">{{ key }}</a>
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
    border-bottom: 1px solid _grey;

    .logo {
      float: left;
      padding: 0 40px;

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
        color: _font_color;
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
