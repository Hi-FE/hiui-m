<template>
  <label :class="component_class"
         :style="custom_style"
         @mouseenter="is_hover = true"
         @mouseleave="is_hover = false">

    <div class="wrapper">

      <InputLabel :label="label"></InputLabel>

      <InputField
                  v-if="type !== 'select'"
                  :type="type"
                  :placeholder="placeholder"
                  :disabled="disabled"
                  :readonly="readonly"
                  :format="format"
                  :reg="reg"
                  :verify="verify"
                  :value="value != null ? value : val"
                  :autosize="autosize"
                  :rows="rows"
                  :no_padding="!with_border"
                  @focus="focusHandler"
                  @blur="blurHandler(is_edited)"
                  @enter="enterHandler"
                  @input="inputHandler"
                  @change="$emit('change', arguments[0])"
                  @verify="verifyHandler"></InputField>

      <!-- 枚举类型 -->
      <InputSelect v-else
                         :placeholder="placeholder"
                         :disabled="disabled"
                         :readonly="readonly"
                         :value="value"
                         :enums="enums"
                         :default_first="default_first"
                         @focus="focusHandler"
                         @blur="blurHandler(true)"
                         @enter="enterHandler"
                         @input="inputHandler"
                         @change="$emit('change', arguments[0])"
                         @verify="verifyHandler"></InputSelect>

      <InputTip :tip="err_tip"
                :position="type === 'textarea' ? 'top' : 'middle'"
                :verify="verify"
                :is_error="is_error"
                :is_correct="is_correct"></InputTip>
    </div>

  </label>
</template>

<style lang="stylus">
  @import './style/';
  .wrapper { position: relative;width: 100%;height:100% }
</style>

<script>
  const prefixCls = 'hiui-input'

  export default {
    name: 'Input',
    props: {
      value: {},
      size: { type: String, default: 'md' },
      color: String,
      label: [String, Number],
      placeholder: [String, Number],
      type: { type: String, default: 'text' },
      verify: [String, Array],
      reg: [RegExp, String],
      tip: String,
      with_border: { type: Boolean, default: true },
      format: Boolean,
      disabled: Boolean,
      readonly: Boolean,
      rows: Number,
      autosize: Boolean,
      enums: Array,
      default_first: Boolean
    },
    components: {
      InputLabel: require('./components/InputLabel.vue'),
      InputField: require('./components/InputField.vue'),
      InputTip: require('./components/InputTip.vue'),
      InputSelect: require('./components/InputSelect.vue')
    },
    data () {
      return {
        custom_tip: '',
        val: '',
        is_hover: false,
        is_focus: false,
        is_error: false,
        is_correct: false,
        is_edited: false,
        verify_result: false
      }
    },
    computed: {
      component_class () {
        const { is_error, is_focus, disabled, is_animated, size, type, with_border, label } = this;
        return [
          prefixCls,
          `${prefixCls}-${size}`,
          { error: is_error, focus: is_focus, disabled, animated: is_animated, 'with-border': with_border, textarea: type === 'textarea', float: label != null }
        ]
      },
      custom_style: function () {
        const { color, is_hover, is_focus, with_border } = this;
        if (!color || !with_border) return {}
        let rgb = color.indexOf('rgb') === -1 ? this.hexToRgb(color) : color.replace(/[^\d,]/g, '').split(',');
        const _boxshadow = is_focus ? `0 0 0 2px rgba(${rgb.r || rgb[0] || 0},${rgb.g || rgb[1] || 0},${rgb.b || rgb[2] || 0},.2)` : undefined;
        const _color = is_hover || is_focus ? color : undefined;
        return {
          borderColor: _color,
          boxShadow: _boxshadow
        }
      },
      // 标题浮动动画开关
      is_animated: function () {
        return this.label && !!(this.is_focus || this.value || this.value === 0);
      },
      // 无验证需求
      no_verify: function () {
        return (!this.verify || (this.verify && !this.verify.length)) && !this.reg
      },
      // 错误提示
      err_tip: function () {
        return this.custom_tip || this.tip
      }
    },
    watch: {
      value: function () {
        this.is_edited = true;
      }
    },
    created: function () {
      this.registerEvents();
    },
    methods: {
      verifyHandler: function (verify_result) {
        const { no_verify } = this;
        this.verify_result = verify_result;
        this.$emit('verify', no_verify || verify_result)
      },
      focusHandler: function () {
        this.is_focus = true
        this.is_error = false
        this.is_correct = false
        this.$emit('focus')
      },
      blurHandler: function (is_edited) {
        this.is_focus = false
        if (is_edited) {
          this.is_error = !this.no_verify && !this.verify_result || !!this.custom_tip;
          this.is_correct = !this.no_verify && this.verify_result && !this.custom_tip;
        }
        this.$emit('blur')
      },
      enterHandler: function () {
        this.$emit('enter');
      },
      inputHandler: function (val) {
        this.is_edited = true
        this.is_correct = false
        this.is_error = false
        this.val = val
        this.$emit('input', val);
      },
      registerEvents: function () {
        const handler = () => {
          this.verifyHandler(this.verify_result);
          this.blurHandler(true);
        }
        this.$root.$on('form-verify', handler)
        this.$on('form-verify', handler)
        this.$on('error', (tip) => {
          this.custom_tip = tip
          this.is_error = true;
          this.is_correct = false;
          this.$emit('verify', false)
        })
        this.$on('correct', () => {
          this.custom_tip = ''
          this.is_error = false;
          this.is_correct = true;
          this.$emit('verify', true)
        })
        this.$on('clear', () => {
          this.custom_tip = ''
          this.is_error = false;
          this.is_correct = false;
          this.$emit('verify', false)
        })
      },
      hexToRgb: function (hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
    }
  }
</script>
