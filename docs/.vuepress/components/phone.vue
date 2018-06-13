<template>
  <div class="phone-wrap">
    <Content />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Phone extends Vue {
}
</script>

<style lang="stylus" scoped>
  .phone-wrap {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #eee;
    min-height: 100vh;
    box-sizing: border-box;
  }
</style>
