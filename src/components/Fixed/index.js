let Fixed = {};
const _w = window
const _d = document
const _fixed_base_style = {
  position: 'fixed',
  zIndex: '99',
  top: '0',
  left: '0',
  margin: '0'
}
const getResetStyle = function (el) {
  let reset_style = {}
  const style = _w.getComputedStyle(el)
  for (let key in _fixed_base_style) {
    reset_style[key] = style[key]
  }
  return reset_style
}
Fixed.install = function (Vue, options) {
  // v-fixed
  Vue.directive('fixed', {
    // bind event
    bind: function (el, binding, vnode, oldVnode) {
      let body_scroll_top;
      let el_rect;
      let apply_style;
      let is_fixed;
      vnode.fixedHandler = function (event) {
        body_scroll_top = _d.documentElement.scrollTop || _d.body.scrollTop
        el_rect = el.getBoundingClientRect();

        // 目标元素已隐藏 (ps: 针对v-show)
        if (!el_rect.width && !el_rect.height) return;

        // 元素是否处于fixed状态
        is_fixed = body_scroll_top > +el.dataset.init_top;

        apply_style = is_fixed ? Object.assign({}, _fixed_base_style, {
          left: el_rect.left + 'px',
          width: el_rect.width + 'px'
        }) : el.dataset.reset_style && JSON.parse(el.dataset.reset_style)

        if (binding.value !== undefined) {
          if (typeof +binding.expression === 'number' && !isNaN(+binding.expression)) apply_style.top = is_fixed ? parseInt(binding.value) + 'px' : '0'
          if (binding.value.hasOwnProperty('top')) apply_style.top = is_fixed ? parseInt(binding.value.top) + 'px' : '0'
          if (binding.value.hasOwnProperty('zIndex')) apply_style.zIndex = is_fixed ? binding.value.zIndex : '0'
        }

        for (let key in apply_style) {
          el.style[key] = apply_style[key]
        }
        if (el.el_placeholder) el.el_placeholder.style.display = is_fixed ? el.dataset.init_display : 'none'
      }
      _w.addEventListener('scroll', vnode.fixedHandler)
    },
    // insert placeholder
    inserted: function (el, binding, vnode, oldVnode) {
      setTimeout(() => {
        Vue.nextTick(() => {
          const style = _w.getComputedStyle(el)
          const _rect = el.getBoundingClientRect();
          const placeholder_base_style = ['display', 'margin', 'position']
          const body_scroll_top = _d.documentElement.scrollTop || _d.body.scrollTop
          const is_fixed = body_scroll_top > _rect.top;
          let el_placeholder = _d.createElement(el.nodeName)

          placeholder_base_style.forEach(key => {
            el_placeholder.style[key] = style[key];
          })

          // 如果元素不处于fixed状态下，则隐藏placeholder
          !is_fixed ? el_placeholder.style.display = 'none' : '';

          el_placeholder.style.width = _rect.width + 'px';
          el_placeholder.style.height = _rect.height + 'px';

          el.el_placeholder = el_placeholder
          el.dataset.reset_style = JSON.stringify(getResetStyle(el))

          // safari跟chrome在此处取到的_rect.top不同 ？？？
          // Mac端的safari添加setTimeout则可以解决
          // IOS端的safari还需要添加nextTick才能解决
          // #fix
          // v-fixed接口一个参数，可用来指定元素top值，指定fixed的时机
          // v-fixed="12" or v-fixed="{ top: 12 }"
          el.dataset.init_top = _rect.top + body_scroll_top
          if (binding.value !== undefined) {
            if (typeof +binding.expression === 'number' && !isNaN(+binding.expression)) el.dataset.init_top -= parseInt(binding.value)
            if (binding.value.hasOwnProperty('top')) el.dataset.init_top -= parseInt(binding.value.top)
          }
          el.dataset.init_display = style.display

          // insert placeholder to parentNode
          el.parentNode.insertBefore(el.el_placeholder, el);
        })
      }, 0)
    },
    componentUpdated: function (el, binding, vnode, oldVnode) {
      setTimeout(() => {
        Vue.nextTick(() => {
          // 监听指定值，判断模板是否更新
          if (binding.value === undefined) return
          let value
          let oldValue
          const style = _w.getComputedStyle(el)
          const _rect = el.getBoundingClientRect();
          const body_scroll_top = _d.documentElement.scrollTop || _d.body.scrollTop
          if (binding.value.hasOwnProperty('watch')) {
            value = binding.value.watch
            oldValue = binding.oldValue.watch
          } else {
            value = binding.value
            oldValue = binding.oldValue
          }
          if (value !== oldValue) {
            el.dataset.init_top = _rect.top + body_scroll_top
            if (binding.value !== undefined) {
              if (typeof +binding.expression === 'number' && !isNaN(+binding.expression)) el.dataset.init_top = parseInt(binding.value)
              if (binding.value.hasOwnProperty('top')) el.dataset.init_top = parseInt(binding.value.top)
            }
            el.dataset.init_display = style.display
          }
        })
      }, 0)
    },
    unbind: function (el, binding, vnode, oldVnode) {
      _w.removeEventListener('scroll', vnode.fixedHandler)
    }
  })
}
export default Fixed
