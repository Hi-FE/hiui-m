<template>
  <div class="modal" @click="$emit('hide')">
    <div class="modal-content" @click.stop>
      <div class="phone-header">
        <img src="https://spics.hitour.cc/192c27b5bc03e80c4de4abb62ce861dc.png" alt="nav">
        <input class="phone-link" type="text" v-model="phoneLink" @keyup.enter="setIframeLink">
      </div>
      <iframe class="phone-iframe" :src="iframeLink" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ModalPhone extends Vue {
  qrcode = null
  phoneLink = ''
  iframeLink = ''

  @Prop()
  link: string

  created () {
    this.iframeLink = this.phoneLink = this.link
  }

  setIframeLink () {
    this.iframeLink = this.phoneLink
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

  .modal-content {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 667px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .16);

    .phone-header {
      background-color: var(--primary);
      padding: 2px 5px;
    }

    .phone-link {
      padding: 0 10px;
      height: 32px;
      font-size: 14px;
      width: 100%;
      border-radius: 4px;
      border: none;
      outline: none;
      box-shadow: none;
      box-sizing: border-box;
      margin: 3px 0;
    }

    .phone-iframe {
      flex: 1;
    }
  }
</style>

