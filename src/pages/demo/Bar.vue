<template>
  <demo title="Icon" class="bar-demo">
    <div class="demo-main">
      <!-- 标题Bar -->
      <Bar class="top-bar">
        <h3>Bar</h3>
      </Bar>

      <!-- 固定底部按钮 -->
      <Bar class="fix-bottom-bar" size="lg">
        <Btn>验证并支付</Btn>
      </Bar>
      <v-code :code="code"></v-code>
      <v-code :code="style_code" lang="css"></v-code>

      <!-- use_padding: false -->
      <Bar class="bar">
        <Btn>Button</Btn>
      </Bar>
      <v-code :code="no_padding_code"></v-code>
      
      <!-- use_padding: true -->
      <Bar class="bar" :use_padding="true">
        <Btn>Button</Btn>
        <Btn>Button</Btn>
        <Btn>Button</Btn>
      </Bar>
      <v-code :code="have_padding_code"></v-code>
    </div>
  </demo>
</template>

<style lang="stylus" scope>
  @import '../../style/';
  
  .bar-demo .demo-main {
    position: relative;
    padding-bottom: _size_o_lg;
    
    code {
      margin: 10px;
    }
  }
  
  .bar {
    margin: 10px 0;
  }
  
  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  
  .fix-bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    
    button {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0;
      background-color: _red;
      color: #fff;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        code: `
<!-- 标题Bar -->
<Bar class="top-bar">
  <h3>Bar</h3>
</Bar>

<!-- 固定底部按钮 -->
<Bar class="fix-bottom-bar" size="lg">
  <Btn>验证并支付</Btn>
</Bar>
        `,
        style_code: `
.top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fix-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  
  button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    background-color: _red;
    color: #fff;
  }
}
        `,
        no_padding_code: `
<!-- use_padding: false -->
<Bar class="bar">
  <Btn>Button</Btn>
</Bar>
        `,
        have_padding_code: `
<!-- use_padding: true -->
<Bar class="bar" :use_padding="true">
  <Btn>Button</Btn>
  <Btn>Button</Btn>
  <Btn>Button</Btn>
</Bar>
        `
      }
    }
  }
</script>
