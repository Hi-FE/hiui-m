<template>
  <section class="demo-wrap">
    <div class="demo-header">
      <icon name="qrcode" class="i-icon"></icon>
      <icon name="code" class="i-icon" @click="showCode = !showCode"></icon>
    </div>
    <div class="demo-content">
      <transition name="collapse">
        <div class="demo-code" v-if="showCode">
          <slot name="code"></slot>
        </div>
      </transition>
      <div class="demo">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Demo extends Vue {
  showCode = false
}
</script>

<style lang="stylus" scoped>
  .demo-wrap {
    border-radius: 4px;
    overflow: hidden;

    .demo-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 48px;
      background-color #f6f6f6;
      padding: 0 10px;

      .i-icon {
        font-size: 24px;
        padding: 5px 10px;
        cursor: pointer;
      }
    }

    .demo-content {
      background-color: #eee;
      padding: 20px;
      display: flex;
      flex-direction: column;

      .demo-code {
        padding-bottom: 10px;
      }
    }
  }

  .collapse-enter-active, .collapse-leave-active {
    transition: max-height .3s;
    max-height: 1000px;
    overflow: hidden;
  }
  .collapse-enter, .collapse-leave-to {
    max-height: 0px;
  }
</style>