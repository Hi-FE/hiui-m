<template>
  <demo title="Icon" class="bar-demo">
    <div class="demo-main">
      <!-- 顶部Bar -->
      <Bar class="fix-top" size="lg" :is_middle="true" :is_center="true">
        <h3>Bar</h3>
      </Bar>
    
      <!-- 底部Bar -->
      <Bar class="fix-bottom" :use_padding="true">
        <Btn>Cancel</Btn>
        <Btn theme="blue" type="solid">Next</Btn>
      </Bar>

      <v-code :code="code"></v-code>
    </div>
  </demo>
</template>

<style lang="stylus" scope>
  @import '../../style/';
  
  .bar-demo .demo-main {
    height: calc(667px - 50px);
    padding: _size_o_lg 0 _size_o_md 0;
    position: relative;
    
    code {
      margin: 10px;
    }
  }
  
  .fix-top {
    position: absolute;
    top: 0;
  }
  
  .fix-bottom {
    position: absolute;
    bottom: 0;
    justify-content: space-between;
  }
</style>

<script>
  export default {
    data () {
      return {
        code: `
<!-- 顶部Bar -->
<Bar class="fix-top" size="lg" :is_middle="true" :is_center="true">
  <h3>Bar</h3>
</Bar>

<!-- 底部Bar -->
<Bar class="fix-bottom" :use_padding="true">
  <Btn>Cancel</Btn>
  <Btn theme="blue" type="solid">Next</Btn>
</Bar>
        `
      }
    },
    components: {
      demo: require('@/pages/components/demo'),
      demoItem: require('@/pages/components/demo-item'),
      vCode: require('@/pages/components/v-code'),
      Btn: require('@/components/Btn/Btn'),
      Bar: require('@/components/Bar/Bar')
    }
  }
</script>
