<template>
  <div class="example">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Example extends Vue {
}
</script>

<style lang="stylus" scoped>
  .example {
    display: flex;
    padding: 10px;
  }
</style>
