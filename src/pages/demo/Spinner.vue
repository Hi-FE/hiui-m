<template>
  <demo title="Spinner" class="spinner-demo">
    <demo-item name="Default" description="默认" :code="code">
      <Spinner></Spinner>
    </demo-item>

    <demo-item name="Size" description="尺寸" :code="size_code">
      <Spinner></Spinner>
      <Spinner :size="36"></Spinner>
      <Spinner :size="48"></Spinner>
      <Spinner :size="60"></Spinner>
    </demo-item>

    <demo-item name="Color" description="颜色" :code="color_code">
      <Spinner color="pink"></Spinner>
      <Spinner color="#87db83"></Spinner>
      <Spinner color="rgba(255, 66, 66, 1)"></Spinner>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scope>
  .spinner-demo {
  }
</style>

<script>
  export default {
    data () {
      return {
        code: `
<Spinner></Spinner>
        `,
        size_code: `
<Spinner></Spinner>
<Spinner :size="36"></Spinner>
<Spinner :size="48"></Spinner>
<Spinner :size="60"></Spinner>
        `,
        color_code: `
<Spinner color="pink"></Spinner>
<Spinner color="#87db83"></Spinner>
<Spinner color="rgba(255, 66, 66, 1)"></Spinner>
      `
      }
    }
  }
</script>
