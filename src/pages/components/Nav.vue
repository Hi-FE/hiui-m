<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/">Overview</router-link>
      </li>
      <li>
        <router-link to="/Btn">Btn</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="stylus" scope>
  @import '../../style/';
  
  .nav {
    padding: 20px;
  }
</style>

<script>
  export default {
    name: 'Nav',
    components: {
    },
    methods: {
    }
  }
</script>
