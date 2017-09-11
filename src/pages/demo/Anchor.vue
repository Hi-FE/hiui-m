<template>
  <demo title="Anchor" class="anchor-demo">
    <demo-item name="default" description="默认" :code="code" lang="js">
      <Bar class="bar" v-fixed="50">{{ index }}</Bar>
      <div v-for="num in data" class="block" v-anchor:test="setIndex">
        <h1>{{ num }}</h1>
      </div>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';

  .anchor-demo {}

  .anchor-demo .bar {
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .anchor-demo .block {
    width: 100%;
    height: 300px;
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  _colors = _blue _red _green _yellow _grey;
  for color, i in _colors {
    .anchor-demo .block:nth-child(5n + {i % 5 + 1}) {
      background-color: color;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        data: [0, 1, 2, 3, 4, 5, 6],
        index: 0,
        code: `
<div v-for="num in data" class="block" v-anchor:test="setIndex">
  <h1>{{ num }}</h1>
</div>
        `
      }
    },
    methods: {
      setIndex (index) {
        this.index = index
      }
    }
  }
</script>
