<template>
  <demo title="Icon" class="icon-demo">
    <demo-item name="default" description="默认" :code="size_code">
      <Btn @click="$toast(nowDate)">Toast</Btn>
    </demo-item>

    <demo-item class="type-btn-group" name="type" description="主题" :code="type_code">
      <Btn @click="$toast(nowDate, 'default')">Default</Btn>
      <Btn @click="$toast(nowDate, 'primary')">Primary</Btn>
      <Btn @click="$toast(nowDate, 'success')">Success</Btn>
      <Btn @click="$toast(nowDate, 'warning')">Warning</Btn>
      <Btn @click="$toast(nowDate, 'error')">Error</Btn>
    </demo-item>

    <demo-item name="time" description="自动关闭的延时，单位毫秒" :code="time_code">
      <Btn @click="$toast('一秒后消失', { time: 1000 })">延迟一秒</Btn>
      <Btn @click="control">手动控制</Btn>
    </demo-item>

    <demo-item name="callback" description="消失后的回调" :code="callback_code">
      <Btn @click="$toast(nowDate, { callback: () => $toast('Callback！') })">回调函数</Btn>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';

  .type-btn-group .hiui-btn {
    margin: 3px 0;

    _colors = _blue _green _yellow _red;
    _start = 2;

    for color, _i in _colors {
      &:nth-child({_start + _i}) {
        color: _white;
        border-color: color;
        background-color: color;
      }
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        size_code: `
<Btn @click="$toast(nowDate)">Toast</Btn>
        `,
        type_code: `
<Btn @click="$toast(nowDate, 'default')">Default</Btn>
<Btn @click="$toast(nowDate, 'primary')">Primary</Btn>
<Btn @click="$toast(nowDate, 'success')">Success</Btn>
<Btn @click="$toast(nowDate, 'warning')">Warning</Btn>
<Btn @click="$toast(nowDate, 'error')">Error</Btn>
        `,
        time_code: `
<Btn @click="$toast('一秒后消失', { time: 1000 })">延迟一秒</Btn>
<Btn @click="control">手动控制</Btn>

//...
control () {
  if (this.vm) {
    this.vm.show = false
    this.vm = null
    return false
  }
  this.vm = this.$toast(this.nowDate, { time: 0 })
}
        `,
        callback_code: `
<Btn @click="$toast(nowDate, { callback: () => $toast('Callback！') })">回调函数</Btn>
        `,
        timer: null,
        vm: null,
        nowDate: new Date().toLocaleString()
      }
    },
    methods: {
      control () {
        if (this.vm) {
          this.vm.show = false
          this.vm = null
          return false
        }
        this.vm = this.$toast(this.nowDate, { time: 0 })
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        this.nowDate = new Date().toLocaleString()
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>
