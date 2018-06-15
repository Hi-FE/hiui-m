<template>
  <example class="btn-group">
    <hi-btn size="sm">小按钮</hi-btn>
    <hi-btn size="md">中按钮</hi-btn>
    <hi-btn size="lg">大按钮</hi-btn>
  </example>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BtnSize extends Vue {
}
</script>

<style lang="stylus">
  .btn-group button {
    margin-right: 5px;
  }
</style>

