<template>
  <div class="modal" @click="$emit('hide')">
    <div class="qrcode" ref="qrcode"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import QRCode from 'davidshimjs-qrcodejs'

@Component
export default class ModalQrcode extends Vue {
  qrcode = null

  @Prop()
  link: string

  mounted () {
    this.qrcode = new (QRCode as any)(this.$refs.qrcode, {
      text: this.link,
      width: 280,
      height: 280,
      colorDark : '#000000',
      colorLight : '#ffffff',
      correctLevel : QRCode.CorrectLevel.H
    })
  }
}
</script>

<style lang="stylus" scoped>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .qrcode {
    padding: 20px;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .16);
    background-color: #fff;
  }
</style>
