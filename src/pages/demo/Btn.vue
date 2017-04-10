<template>
  <demo title="Btn">
    <div class="btn-group">
      <Btn class="demo-btn" size="sm">Btn sm</Btn>
      <Btn class="demo-btn" size="md">Btn md</Btn>
      <Btn class="demo-btn" size="lg">Btn lg</Btn>
    </div>
  </demo>
</template>

<style lang="stylus" scope>
  .demo-btn {
    margin: 10px;
  }
  
  .btn-group {
    display: flex;
    align-items: flex-end;
  }
</style>

<script>
  export default {
    components: {
      demo: require('@/pages/components/demo.vue'),
      Btn: require('@/components/Btn/Btn.vue')
    }
  }
</script>
