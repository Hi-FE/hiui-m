<template>
  <i :class="classes" :style="styles" @click="clickHandled"></i>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export type BtnSize = 'sm' | 'md' | 'lg'

@Component
export default class Icon extends Vue {
  @Prop({ required: true })
  name: string

  @Prop()
  size: number

  @Prop()
  color: string

  @Prop()
  disabled: boolean

  @Prop({ default: false })
  rotate: boolean

  get classes () {
    return [
      'iconfont',
      'hiui-icon',
      `icon-${this.name}`,
      {
        [`hiui-icon--rotate`]: this.rotate,
        [`hiui-icon--disabled`]: this.disabled,
      }
    ]
  }

  get styles () {
    return {
      fontSize: this.size ? `${this.size}px` : '',
      color: this.color || ''
    }
  }

  clickHandled (e: MouseEvent) {
    if (this.disabled) {
      return false
    }

    this.$emit('click', e)
  }
}
</script>

<style lang="styl">
  @import '//at.alicdn.com/t/font_282173_y8za0xat9xd.css';

  .hiui-icon {
    position: relative;
    display: inline-block;
    vertical-align: baseline;
    /* font-size: _default_icon_size; */
    /* color: _default_icon_color; */
    overflow: hidden;
  }

  .hiui-icon--rotate {
    animation: rotate 1s infinite linear;
  }

  .hiui-icon--disabled {
    opacity: .3;
  }

  @keyframes rotate {
    form {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
