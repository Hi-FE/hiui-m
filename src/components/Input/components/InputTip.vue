<template>
  <div :class="component_class">
    <transition name="float-up">
      <div class="tip-wrapper" v-show="is_correct || is_error">

          <!-- 成功提示 -->
          <span class="correct-sign" v-if="is_correct">
            <Icon class="icon" name="check" :size="12" color="#4fae9b"></Icon>
          </span>
          <!-- 错误提示 -->
          <p class="tip" v-else-if="is_error"> * {{ self_tip }}</p>

      </div>
    </transition>

  </div>
</template>

<style lang="stylus">
  @import '../../../style/';
  .hiui-input-tip {
    color:_red;font-size: 12px;position: absolute;z-index:9;top:0;right:0;height:100%;background-color: rgba(255,255,255,.9);
    &.middle:after { content: '';display: inline-block;height: 100%;vertical-align: middle; }
    &.top {
      .tip-wrapper { margin-top:5px;margin-right:5px }
    }
    .tip-wrapper {
      display: inline-block;vertical-align: middle;position:relative;background-color:#fff
      .tip { margin: 0;display:inline-block;white-space:nowrap }
      .correct-sign {
        position:relative;vertical-align:middle;text-align: center;border: 1px solid _green;display: inline-block;border-radius: 100%;width:18px;height:18px;
        .icon{ position:absolute;z-index:1;top:50%;left:50%;transform:translate(-50%,-50%) }
      }
    }
  }
  .float-up-enter-active, .float-up-leave-active {transition: opacity .3s, transform .3s; }
  .float-up-enter, .float-up-leave-active {opacity: 0;transform: translateY(15px) }
</style>

<script>
  import Icon from '../../Icon'

  const prefixCls = 'hiui-input-tip'
  const BASIC_VERIFY_TIP = {
    phone: '手机格式不正确',
    password: '密码长度为6~20位',
    email: '邮箱格式不正确',
    empty: '不能为空'
  }
  export default {
    name: 'InputTip',
    components: {
      Icon
    },
    props: {
      tip: String,
      position: { type: String, default: 'middle' },
      verify: [String, Array],
      is_error: Boolean,
      is_correct: Boolean
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          this.position
        ]
      },
      self_tip: function () {
        const {verify} = this;
        return this.tip || BASIC_VERIFY_TIP[verify] || '输入格式不正确';
      }
    }
  }
</script>
