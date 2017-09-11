let Anchor = {}
let _anchors = {}
const _w = window
// const _d = document
Anchor.install = function (Vue) {
  Vue.directive('anchor', {
    bind: function (el, binding, vnode, oldVnode) {
      // scrollHandler variable
      let _rect;
      let active_anchor_rect;
      let vnode_index
      let vnode_context
      let cur_anchors
      let cur_anchor
      let cur_index
      let cur_vm
      let prev_element;
      let prev_rect;
      _anchors[binding.arg] = _anchors[binding.arg] || { anchors: [], context: {}, cur_index: -1 }

      // 清除掉已删除的节点
      _anchors[binding.arg].anchors = _anchors[binding.arg].anchors.filter(item => item != null)

      _anchors[binding.arg].anchors.push(el)
      _anchors[binding.arg].context = vnode.context
      el.dataset.anchor_index = _anchors[binding.arg].anchors.length - 1
      vnode.scrollHandler = function (event) {
        vnode_context = _anchors[binding.arg]
        vnode_index = +el.dataset.anchor_index

        // 获取不到上下文，则略过
        if (!vnode_context) return
        cur_anchors = vnode_context.anchors
        cur_vm = vnode_context.context
        cur_anchor = cur_anchors[vnode_index]
        cur_index = vnode_context.cur_index

        // 如果不存在锚点，则略过。
        if (!cur_anchor) return

        _rect = cur_anchor.getBoundingClientRect()
        active_anchor_rect = cur_index !== -1 && cur_anchors[cur_index] ? cur_anchors[cur_index].getBoundingClientRect() : null;

        // 当前激活的元素完全在屏幕内, 则跳过
        if (active_anchor_rect && active_anchor_rect.height > 0 && active_anchor_rect.top >= 0 && active_anchor_rect.top + active_anchor_rect.height < _w.innerHeight) return

        // 当前元素出现在屏幕内
        if (_rect.top + _rect.height >= 0 && _rect.top < _w.innerHeight) {
          prev_element = cur_anchors[vnode_index - 1]
          prev_rect = prev_element && prev_element.getBoundingClientRect()
          // 前一个元素的3/4内容消失在可视范围, 当前元素激活
          if (!prev_element || prev_rect.top + (prev_rect.height * 3 / 4) < 0) {
            if (cur_index !== vnode_index) {
              _anchors[binding.arg].cur_index = vnode_index
              if (typeof cur_vm[binding.expression] === 'function') cur_vm[binding.expression](vnode_index, binding.arg)
            }
            return
          }

          // 前一个元素的1/2内容出现在可视范围, 前一个元素激活
          if (prev_element && _rect.top - (prev_rect.height / 2) > 0) {
            if (cur_index !== vnode_index - 1) {
              _anchors[binding.arg].cur_index = vnode_index - 1
              if (typeof cur_vm[binding.expression] === 'function') cur_vm[binding.expression](vnode_index - 1, binding.arg)
            }
            return
          }
        }
      }
      _w.addEventListener('scroll', vnode.scrollHandler)
    },
    unbind: function (el, binding, vnode, oldVnode) {
      if (_anchors[binding.arg]) {
        // 清除掉已有节点，置为null，以便其它节点能够正确清除
        el.dataset.anchor_index != null && _anchors[binding.arg].anchors.splice(el.dataset.anchor_index, 1, null)

        vnode.scrollHandler != null && _w.removeEventListener('scroll', vnode.scrollHandler)
      }
    }
  })
}
export default Anchor
