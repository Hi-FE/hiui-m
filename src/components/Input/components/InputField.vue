<template>
  <div :class="component_class">
    <template v-if="type === 'textarea'">
      <textarea :style="textarea_style"
                :rows="rows"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :value="value"
                @focus="$emit('focus')"
                @blur="$emit('blur')"
                @keyup.enter="$emit('enter')"
                @input="$emit('input', $event.target.value)"
                @change="$emit('input', reformStr($event.target.value)), $emit('change', reformStr($event.target.value))"></textarea>
      <textarea class="hidden-textarea" :ref="'hidden_textarea'" :rows="rows" :value="value"></textarea>
    </template>
    <input v-else
           :type="type"
           :placeholder="placeholder"
           :disabled="disabled"
           :readonly="readonly"
           :value="value"
           @focus="$emit('focus')"
           @blur="$emit('blur')"
           @keyup.enter="$emit('enter')"
           @input="$emit('input', $event.target.value)"
           @change="$emit('input', reformStr($event.target.value)), $emit('change', reformStr($event.target.value))">
  </div>
</template>

<style lang="stylus">
  @import '../../../style/';
  .hiui-input-field {
    color:_black;display: block;width: 100%;
    &:not(.textarea) {position:absolute;z-index:8;left:0;top:50%;transform: translateY(-50%);transition: margin-top .3s; }
    &.no-padding textarea { padding: 0 }
    input{
      line-height:1;display: block;width: 100%;height:100%;-webkit-appearance: textfield; border: 0; outline: none; background: transparent; color: inherit;
      &:-webkit-autofill { -webkit-box-shadow: 0 0 0px 1000px white inset; }
      &::placeholder { color:_grey_deep }
    }
    textarea{
      resize: vertical;padding: 10px _gap_xsm;display: block;width: 100%;-webkit-appearance: textfield; border: 0; outline: none; background: transparent; color: inherit;
      &.hidden-textarea { opacity:0;position:absolute;z-index:-1; }
    }
  }
</style>

<script>
  const prefixCls = 'hiui-input-field'
  const BASIC_VERIFY_REGEXP = {
    phone: /^\d{7,14}$/,
    password: /^(.){6,18}$/,
    email: /^[\w\d]+[\w\d-.]*@[\w\d-.]+\.[\w\d]{2,10}$/,
    empty: /.+/
  }
  export default {
    name: 'InputField',
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      placeholder: [String, Number],
      disabled: Boolean,
      readonly: Boolean,
      format: Boolean,
      autosize: Boolean,
      no_padding: Boolean,
      rows: { type: Number, default: 3 },
      verify: [String, Array],
      reg: [RegExp, String]
    },
    data () {
      return {
        textarea_height: 0
      }
    },
    computed: {
      component_class () {
        return [
          prefixCls,
          this.type,
          { 'no-padding': this.no_padding }
        ]
      },
      textarea_style: function () {
        return {
          height: this.textarea_height ? this.textarea_height + 'px' : undefined
        }
      },
      // 验证结果
      verify_result: function () {
        return this.verifyResult(this.value, this.reg, this.verify);
      }
    },
    watch: {
      verify_result: function () {
        this.$emit('verify', this.verify_result)
      },
      value: function () {
        this.autosize && this.recomputeTextAreaHeight()
      }
    },
    created: function () {
      this.$emit('verify', this.verify_result)
    },
    methods: {
      // 正则验证
      verifyResult: function (value = '', regs, verify = []) {
        value = value && typeof value.trim === 'function' && value.trim() || value;
        verify = [].concat(verify);
        // 优先使用接口正则验证
        if (this.reg) return new RegExp(this.reg).test(value)
        // 内置基础正则验证
        for (let i = 0, len = verify.length, reg; i < len; i++) {
          reg = BASIC_VERIFY_REGEXP[verify[i]];
          if (reg.test(value)) {
            // fix: 判空正则无法识别undefined
            if (verify[i] === 'empty') return !!value || value === 0;
            return true;
          } else {
            if (i === len - 1) {
              return false;
            }
          }
        }
        return false
      },
      reformStr: function (str) {
        str = str + '';
        let result = str.trim();
        if (this.type === 'number') result = parseFloat(result);
        if (this.format) result = this.dealSpecialSymbol(result);
        return result;
      },
      dealSpecialSymbol: function (str) {
        const CHINESE_SYMBOL = '，。！？【】（）％＃＠＆１２３４５６７８９０'
        const REFORM_SYMBOL = ',.!?[]()%#@&1234567890'
        const TRANS_SYMBOL = { '.': true, '(': true, ')': true, '{': true, '}': true, '?': true }
        if (typeof str.normalize === 'function') str = str.normalize('NFKC');
        let arr = str.split('');
        let arr_deal = arr.map((item) => {
          let idx;
          let condition;
          condition = TRANS_SYMBOL[item] ? '\\' + item : item;
          idx = CHINESE_SYMBOL.search(condition);
          return idx !== -1 ? REFORM_SYMBOL.charAt(idx) : item;
        })
        return arr_deal.join('');
      },
      recomputeTextAreaHeight: function () {
        this.$nextTick(() => {
          const hidden_textarea = this.$refs.hidden_textarea;
          this.textarea_height = hidden_textarea.scrollHeight;
        })
      }
    }
  }
</script>
