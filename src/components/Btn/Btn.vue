<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export type BtnSize = 'sm' | 'md' | 'lg'

@Component
export default class HiBtn extends Vue {
  text = '测试！'

  @Prop({ default: 'md' })
  size: BtnSize

  @Prop({ default: false })
  block: boolean

  get classes () {
    return [
      'hiui-btn',
      `hiui-btn--${this.size}`,
      {
        'hiui-btn--block': this.block
      }
    ]
  }
}
</script>

<style lang="stylus">
.hiui-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  border-radius: 4px;
  color: var(--primary);
  border: 1px solid var(--primary);
  background-color: #fff;
  user-select: none;
  position: relative;
  outline: none;
  box-shadow: none;
  transition: all .3s;
  padding: 0 var(--size_o_md);
  height: var(--size_o_md);

  &:not(.disabled):active {
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, .12);
  }

  &.disabled {
    opacity: .3;
  }

  &.hiui-btn--sm {
    font-size: var(--btn-font_sm);
    padding: 0 var(--btn-gap_sm);
    height: var(--size_sm);
  }

  &.hiui-btn--md {
    font-size: var(--btn-font_md);
    padding: 0 var(--btn-gap_md);
    height: var(--size_md);
  }

  &.hiui-btn--lg {
    font-size: var(--btn-font_lg);
    padding: 0 var(--btn-gap_lg);
    height: var(--size_lg);
  }

  &.hiui-btn--block {
    flex: 1;
    width: 100%;
  }
}
</style>

