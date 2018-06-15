<template>
  <div :class="classes">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HiInput extends Vue {
  text = '测试！'

  get classes () {
    return [
      'hiui-input',
    ]
  }
}
</script>

<style lang="stylus">
.hiui-input {
}
</style>
