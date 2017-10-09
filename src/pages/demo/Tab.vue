<template>
  <demo title="Tab" class="tab-demo">
    <demo-item name="default" description="默认" :code="code">
      <Tab :data="['标签一', '标签二', '标签三']" v-model="default_index"></Tab>
    </demo-item>

    <demo-item name="type" description="类型" :code="type_code">
      <Tab :data="['标签一', '标签二', '标签三']" v-model="type_index" :type="'no_padding'"></Tab>
      <Tab :data="['标签一', '标签二', '标签三']" v-model="type_index" :type="'fix_width'"></Tab>
      <Tab :data="['标签一', '标签二', '标签三']" v-model="type_index" :type="'fix_width:25%'"></Tab>
    </demo-item>

    <demo-item name="theme" description="主题" :code="theme_code">
      <Tab :data="['标签一', '标签二', '标签三']" v-model="theme_index"></Tab>
      <Tab :data="['标签一', '标签二', '标签三']" v-model="theme_index" :theme="'card'"></Tab>
      <Tab :data="['标签一', '标签二', '标签三']" v-model="theme_index" :theme="'ticket'" :type="'fix_width'"></Tab>
    </demo-item>

    <demo-item name="icon" description="图标" :code="icon_code">
      <Tab :data="['Home', 'Cart', 'User']" v-model="icon_index"></Tab>
      <Tab
        :data="[{
          name: 'Home',
          icon: 'home'
        }, {
          name: 'Cart',
          icon: 'shoppingcart'
        }, {
          name: 'User',
          icon: 'user'
        }]" v-model="icon_index"></Tab>
      <Tab
        :data="[{
          name: 'Home',
          suffix_icon: 'home'
        }, {
          name: 'Cart',
          suffix_icon: 'shoppingcart'
        }, {
          name: 'User',
          suffix_icon: 'user'
        }]" v-model="icon_index"></Tab>
    </demo-item>

    <demo-item name="activeStyle" description="选中样式" :code="style_code" slot="right">
      <Tab :data="['标签一', '标签二', '标签三']" v-model="style_index" :active-style="{ color: '#f02f45', borderBottomColor: '#f02f45' }"></Tab>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';

  .tab-demo .hiui-Tab {
    box-sizing: content-box;
  }
</style>

<script>
  export default {
    data () {
      return {
        default_index: 0,
        type_index: 0,
        theme_index: 0,
        trigger_index: 0,
        icon_index: 0,
        style_index: 0,
        code: `
<Tab :data="['标签一', '标签二', '标签三']" v-model="default_index"></Tab>
        `,
        type_code: `
<Tab :data="['标签一', '标签二', '标签三']" v-model="type_index" :type="'no_padding'"></Tab>
<Tab :data="['标签一', '标签二', '标签三']" v-model="type_index" :type="'fix_width'"></Tab>
<Tab :data="['标签一', '标签二', '标签三']" v-model="type_index" :type="'fix_width:25%'"></Tab>
        `,
        theme_code: `
<Tab :data="['标签一', '标签二', '标签三']" v-model="theme_index"></Tab>
<Tab :data="['标签一', '标签二', '标签三']" v-model="theme_index" :theme="'card'"></Tab>
<Tab :data="['标签一', '标签二', '标签三']" v-model="theme_index" :theme="'ticket'" :type="'fix_width'"></Tab>
        `,
        icon_code: `
<Tab :data="['Home', 'Cart', 'User']" v-model="icon_index"></Tab>
<Tab
  :data="[{
    name: 'Home',
    icon: 'home'
  }, {
    name: 'Cart',
    icon: 'shoppingcart'
  }, {
    name: 'User',
    icon: 'user'
  }]" v-model="style_index"></Tab>
<Tab
  :data="[{
    name: 'Home',
    suffix_icon: 'home'
  }, {
    name: 'Cart',
    suffix_icon: 'shoppingcart'
  }, {
    name: 'User',
    suffix_icon: 'user'
  }]" v-model="icon_index"></Tab>
        `,
        style_code: `
<Tab :data="['标签一', '标签二', '标签三']" v-model="style_index" :active-style="{ color: '#f02f45', borderBottomColor: '#f02f45' }"></Tab>
        `
      }
    }
  }
</script>
