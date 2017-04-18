<template>
  <demo title="Icon" class="bar-demo">
    <div class="demo-main">
      <!-- Size: true -->
      <Bar class="flex-center" size="lg">
        <h3>Bar</h3>
      </Bar>
      <v-code :code="code"></v-code>

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
    
    code {
      margin: 10px;
    }
  }
  
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .bar {
    margin: 10px 0;
  }
</style>

<script>
  export default {
    data () {
      return {
        code: `
<!-- Size: true -->
<Bar class="flex-center" size="lg">
  <h3>Bar</h3>
</Bar>

<style>
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
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
    },
    components: {
      demo: require('@/pages/components/demo'),
      demoItem: require('@/pages/components/demo-item'),
      vCode: require('@/pages/components/v-code')
    }
  }
</script>
