<template>
  <div class="btn-group">
    <btn size="sm">小按钮</btn>
    <btn size="md">中按钮</btn>
    <btn size="lg">大按钮</btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BtnSize extends Vue {
}
</script>

<style lang="stylus">
  .btn-group button {
    margin: 5px;
  }
</style>

