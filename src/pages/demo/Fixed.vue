<template>
  <demo title="Fixed" class="fixed-demo">
    <demo-item name="default" description="默认" :code="code" lang="js">
      <Bar class="top-bar" v-fixed="50">这是一个固定顶部的Bar</Bar>
    </demo-item>
    <demo-item name="default" description="默认" :code="tab_code" lang="js">
      <Tab class="tab" v-model="default_index" :data="['标签一', '标签二', '标签三']" v-fixed="100"></Tab>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';

  .fixed-demo { height: 150vh!important; }

  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tab {
    background-color: #fff;
  }
</style>

<script>
  export default {
    data () {
      return {
        default_index: 0,
        code: `
<Bar class="top-bar" v-fixed="{ top: 50 }">这是一个固定顶部的Bar</Bar>
        `,
        tab_code: `
<Tab class="tab" v-model="default_index" :data="['标签一', '标签二', '标签三']" v-fixed="100"></Tab>
        `
      }
    }
  }
</script>
