<template>
  <nav class="nav">
    <ul>
      <template v-for="obj in data">
        <router-link :exact="true" :to="obj.path" tag="li" class="link-li">
          {{ obj.name }}
          <small>{{ obj.cn_name }}</small>
        </router-link>
        <div v-if="obj.child" v-for="child_obj in obj.child" class="nav-child-wrap">
          <div class="nav-child-title">{{ child_obj.title }}</div>
          <router-link v-for="(component_obj, i) in child_obj.components" :key="i" :exact="true" :to="obj.path + component_obj.path" class="nav-child link-li" tag="li">
            {{ component_obj.name }}
            <small>{{ component_obj.cn_name }}</small>
          </router-link>
        </div>
      </template>
    </ul>
  </nav>
</template>

<style lang="stylus" scope>
  @import '../../style/';

  .nav {
    width: 100%;
    padding: 20px;

    .nav-li {
      small {
        font-size: 12px;
        margin-left: 4px;
        opacity: .85;
      }
    }

    .nav-child-wrap {
      margin-left: 30px;

      .nav-child {
        padding: 8px 15px;

        &:hover {
          color: _blue_deep;
          cursor: po
        }
      }

      .nav-child-title {
        font-size: 14px;
        color: #999;
        margin: 5px 0;
      }
    }
  }

.link-li {
  position: relative;
  font-size: 16px;
  color: _grey_deeper;
  padding: 12px 10px;

  &:hover {
    color: _blue_deep;
  }

  &.router-link-active {
    color: _blue;
    cursor: default;

    &::before {
      content: '';
      position: absolute;
      color: _blue;
      width: 0;
      height: 0;
      left: -2px;
      top: 50%;
      font-size: 12px;
      transform: translateY(-50%);
      border: 6px solid transparent;
      border-left-color: _blue;
    }
  }

  &:not(.router-link-active) {
    cursor: pointer;
  }
}

</style>

<script>
  import config from '@/config.js'

  export default {
    name: 'Nav',
    data () {
      return {
        data: config.nav
      }
    },
    methods: {
    }
  }
</script>
