(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(s,t,a){},176:function(s,t,a){"use strict";var i=a(170);a.n(i).a},187:function(s,t,a){"use strict";a.r(t);var i=a(2),e=a(3);let l=class extends e.c{constructor(){super(...arguments),this.curTab="props",this.map={props:"Props",slots:"Slots",events:"Events"}}get props(){return this.$page.frontmatter.Props}get slots(){return this.$page.frontmatter.Slots}get events(){return this.$page.frontmatter.Events}get tabs(){let s=[];return this.props&&s.push("props"),this.slots&&s.push("slots"),this.events&&s.push("events"),s}};var n=l=i.a([e.a],l),c=(a(176),a(0)),r=Object(c.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return s.tabs.length>0?a("section",{staticClass:"api-wrap"},[a("div",{staticClass:"tab"},s._l(s.tabs,function(t,i){return a("div",{key:t,class:["tab-item",{active:t===s.curTab}],on:{click:function(a){s.curTab=t}}},[s._v("\n      "+s._s(s.map[t])+"\n    ")])})),"props"===s.curTab?a("div",{staticClass:"api-list"},s._l(s.props,function(t,i){return a("div",{key:i,staticClass:"api-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("名称")]),a("span",{staticClass:"value name"},[s._v(s._s(t.name))])]),a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("默认值")]),a("span",{staticClass:"value"},[s._v(s._s(t.default))])]),t.params?a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("可选值")]),a("span",{staticClass:"value"},[s._v(s._s(t.params))])]):s._e(),a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("类型")]),a("span",{staticClass:"value"},[s._v(s._s(t.type))])])]),a("div",{staticClass:"row desc"},[s._v("\n        "+s._s(t.description)+"\n      ")])])})):s._e(),"slots"===s.curTab?a("div",{staticClass:"api-list"},s._l(s.slots,function(t,i){return a("div",{key:i,staticClass:"api-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("名称")]),a("span",{staticClass:"value name"},[s._v(s._s(t.name))])]),t.scopes?a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("插槽作用域值")]),a("span",{staticClass:"value"},[s._v(s._s(t.scopes))])]):s._e()]),a("div",{staticClass:"row desc"},[s._v("\n        "+s._s(t.description)+"\n      ")])])})):s._e(),"events"===s.curTab?a("div",{staticClass:"api-list"},s._l(s.events,function(t,i){return a("div",{key:i,staticClass:"api-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("名称")]),a("span",{staticClass:"value name"},[s._v(s._s(t.name))])]),t.params?a("div",{staticClass:"row-item"},[a("span",{staticClass:"label"},[s._v("回调参数")]),a("span",{staticClass:"value"},[s._v(s._s(t.params))])]):s._e()]),a("div",{staticClass:"row desc"},[s._v("\n        "+s._s(t.description)+"\n      ")])])})):s._e()]):s._e()},[],!1,null,"af4aae50",null);t.default=r.exports}}]);