<template>
  <section class="api-wrap" v-if="tabs.length > 0">
    <div class="tab">
      <div v-for="(tab, index) in tabs" :class="['tab-item', { active: tab === curTab }]" :key="tab" @click="curTab = tab">
        {{ map[tab] }}
      </div>
    </div>

    <div class="api-list" v-if="curTab === 'props'">
      <div class="api-item" v-for="(item, index) in props" :key="index">
        <div class="row">
          <div class="row-item">
            <span class="label">名称</span>
            <span class="value name">{{ item.name }}</span>
          </div>
          <div class="row-item">
            <span class="label">默认值</span>
            <span class="value">{{ item.default }}</span>
          </div>
          <div class="row-item" v-if="item.params">
            <span class="label">可选值</span>
            <span class="value">{{ item.params }}</span>
          </div>
          <div class="row-item">
            <span class="label">类型</span>
            <span class="value">{{ item.type }}</span>
          </div>
        </div>
        <div class="row desc">
          {{ item.description }}
        </div>
      </div>
    </div>

    <div class="api-list" v-if="curTab === 'slots'">
      <div class="api-item" v-for="(item, index) in slots" :key="index">
        <div class="row">
          <div class="row-item">
            <span class="label">名称</span>
            <span class="value name">{{ item.name }}</span>
          </div>
          <div class="row-item" v-if="item.scopes">
            <span class="label">插槽作用域值</span>
            <span class="value">{{ item.scopes }}</span>
          </div>
        </div>
        <div class="row desc">
          {{ item.description }}
        </div>
      </div>
    </div>

    <div class="api-list" v-if="curTab === 'events'">
      <div class="api-item" v-for="(item, index) in events" :key="index">
        <div class="row">
          <div class="row-item">
            <span class="label">名称</span>
            <span class="value name">{{ item.name }}</span>
          </div>
          <div class="row-item" v-if="item.params">
            <span class="label">回调参数</span>
            <span class="value">{{ item.params }}</span>
          </div>
        </div>
        <div class="row desc">
          {{ item.description }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Api extends Vue {
  curTab = 'props'
  map = {
    props: 'Props',
    slots: 'Slots',
    events: 'Events'
  }

  get props () {
    return (this as any).$page.frontmatter.Props
  }

  get slots () {
    return (this as any).$page.frontmatter.Slots
  }

  get events () {
    return (this as any).$page.frontmatter.Events
  }

  get tabs () {
    let tabs = []
    if (this.props) {
      tabs.push('props')
    }
    if (this.slots) {
      tabs.push('slots')
    }
    if (this.events) {
      tabs.push('events')
    }


    return tabs
  }
}
</script>

<style lang="stylus" scoped>
  .api-wrap {
    margin: 10px 0 50px;
    background-color #eee;
    border-radius: 4px;

    .tab {
      display: flex;
      height: 50px;
      align-items: center;
      border-bottom: 1px solid #fff;

      .tab-item {
        padding: 0 15px;
        color: #232323;
        cursor: pointer;

        &.active {
          color: var(--primary);
          font-weight: bold;
        }
      }
    }

    .api-list {
      padding: 5px;
      box-sizing: border-box;

      .api-item {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }

    .row {
      display: flex;
      padding: 10px;
      background-color: #fff;

      .row-item {
        width: 25%;
        display: flex;
        flex-direction column;

        &:last-child {
          flex: 1;
          align-items: flex-end;
        }

        &:first-child {
          align-items: flex-start;
        }

        .label {
          color: #999;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .value {
          font-weight: 700;
          font-size: 16px;

          &.name {
            color: var(--primary);
          }
        }
      }

      &.desc {
        background-color #f6f6f6;
        color: #666;
        font-size: 14px;
      }
    }
  }
</style>
