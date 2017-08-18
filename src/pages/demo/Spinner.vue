<template>
  <demo title="Spinner" class="spinner-demo">
    <demo-item name="color" description="颜色" :code="color_code">
      <Spinner :color="'pink'"></Spinner>
      <Spinner :color="'#87db83'"></Spinner>
      <Spinner :color="'rgba(255, 66, 66, 1)'"></Spinner>
    </demo-item>

    <demo-item name="size" description="尺寸" :code="size_code">
      <Spinner></Spinner>
      <Spinner :size="36"></Spinner>
      <Spinner :size="48"></Spinner>
      <Spinner :size="60"></Spinner>
    </demo-item>

    <demo-item name="wrap" description="覆盖整个容器, 基于最近的定位父级`relative`" :code="wrap_code">
      <article class="article">
        <h3>Article Title</h3>
        <p>This is a test text</p>
        <Spinner :wrap="true">
          Loading...
        </Spinner>
      </article>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  .spinner-demo .hiui-spinner {
    display: inline-block;
  }

  .article {
    position: relative;
    width: 100%;
    padding: 15px 20px;
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
<Spinner :color="'pink'"></Spinner>
<Spinner :color="'#87db83'"></Spinner>
<Spinner :color="'rgba(255, 66, 66, 1)'"></Spinner>
        `,
        wrap_code: `
<article class="article">
  <h3>Article Title</h3>
  <p>This is a test text</p>
  <Spinner :wrap="true">
    Loading...
  </Spinner>
</article>
        `
      }
    }
  }
</script>
