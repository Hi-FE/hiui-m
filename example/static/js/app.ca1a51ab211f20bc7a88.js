webpackJsonp([0],[,,function(t,e,n){"use strict";var s=n(1),r=n(45);s.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",component:n(32),children:[{path:"/",name:"Overview",meta:{noPreview:!0},component:n(44)},{path:"/Btn",name:"Btn",components:{default:n(43),preview:n(31)}}]}]})},function(t,e){},function(t,e,n){n(18);var s=n(0)(n(7),n(35),null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=n(4),o=n.n(r),a=n(2),_=n(3);n.n(_);s.a.config.productionTip=!1,new s.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";var s=n(15),r=n.n(s);n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return _});var o={sm:r.a.inter_sm,md:r.a.inter_md,lg:r.a.inter_lg},a=(r.a.outer_sm,r.a.outer_md,r.a.outer_lg,{xsm:r.a.font_xsm,sm:r.a.font_sm,md:r.a.font_md,lg:r.a.font_lg,xlg:r.a.font_xlg}),_={xsm:r.a.gap_xsm,sm:r.a.gap_sm,md:r.a.gap_md,lg:r.a.gap_lg,xlg:r.a.gap_xlg}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(6);e.default={name:"Btn",props:{size:{default:"md",type:String,validator:function(t){return["sm","md","lg"].some(function(e){return e===t})}},disabled:{default:!1,type:Boolean},is_loading:{default:!1,type:Boolean},prefix:[Object,String],suffix:[Object,String]},data:function(){return{msg:"button"}},computed:{style:function(){return{padding:"0 "+s.a[this.size],fontSize:s.b[this.size],height:s.c[this.size]}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Header",components:{},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Nav",components:{},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Header",props:{title:{default:"",type:String},is_horizontal_center:{default:!1,type:Boolean},is_vertical_center:{default:!1,type:Boolean}},mounted:function(){console.log(this.$slots)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Header",props:["width","height"],computed:{size:function(){return{width:this.width+"px",height:this.height+"px"}}},components:{},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{demo:n(29),Btn:n(26)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",components:{vHeader:n(27),vNav:n(28),preview:n(30)},data:function(){return{phone_size:[375,667]}}}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",outer_sm:"28px",outer_md:"40px",outer_lg:"52px",inter_sm:"24px",inter_md:"34px",inter_lg:"44px",font_xsm:"12px",font_sm:"14px",font_md:"16px",font_lg:"18px",font_xlg:"20px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",outer_sm:"28px",outer_md:"40px",outer_lg:"52px",inter_sm:"24px",inter_md:"34px",inter_lg:"44px",font_xsm:"12px",font_sm:"14px",font_md:"16px",font_lg:"18px",font_xlg:"20px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",outer_sm:"28px",outer_md:"40px",outer_lg:"52px",inter_sm:"24px",inter_md:"34px",inter_lg:"44px",font_xsm:"12px",font_sm:"14px",font_md:"16px",font_lg:"18px",font_xlg:"20px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",outer_sm:"28px",outer_md:"40px",outer_lg:"52px",inter_sm:"24px",inter_md:"34px",inter_lg:"44px",font_xsm:"12px",font_sm:"14px",font_md:"16px",font_lg:"18px",font_xlg:"20px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",outer_sm:"28px",outer_md:"40px",outer_lg:"52px",inter_sm:"24px",inter_md:"34px",inter_lg:"44px",font_xsm:"12px",font_sm:"14px",font_md:"16px",font_lg:"18px",font_xlg:"20px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",outer_sm:"28px",outer_md:"40px",outer_lg:"52px",inter_sm:"24px",inter_md:"34px",inter_lg:"44px",font_xsm:"12px",font_sm:"14px",font_md:"16px",font_lg:"18px",font_xlg:"20px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",outer_sm:"28px",outer_md:"40px",outer_lg:"52px",inter_sm:"24px",inter_md:"34px",inter_lg:"44px",font_xsm:"12px",font_sm:"14px",font_md:"16px",font_lg:"18px",font_xlg:"20px"}},function(t,e,n){var s=n(0)(null,n(42),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(41),null,null);t.exports=s.exports},function(t,e,n){n(22);var s=n(0)(n(8),n(39),null,null);t.exports=s.exports},function(t,e,n){n(16);var s=n(0)(n(9),n(33),null,null);t.exports=s.exports},function(t,e,n){n(23);var s=n(0)(n(10),n(40),null,null);t.exports=s.exports},function(t,e,n){n(17);var s=n(0)(n(11),n(34),null,null);t.exports=s.exports},function(t,e,n){n(19);var s=n(0)(n(12),n(36),null,null);t.exports=s.exports},function(t,e,n){n(21);var s=n(0)(n(13),n(38),null,null);t.exports=s.exports},function(t,e,n){n(20);var s=n(0)(n(14),n(37),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h3",{staticClass:"logo"},[t._v("\n    Hiui-M\n  ")]),t._v(" "),n("ul",{staticClass:"menu"},[n("li",[n("a",{attrs:{href:"https://github.com/Hi-FE/hiui-m"}},[t._v("Github")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"preview-wrap",style:t.size},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("v-header"),t._v(" "),n("main",{staticClass:"main"},[n("section",{staticClass:"left-content"},[n("v-nav")],1),t._v(" "),n("section",{staticClass:"right-content"},[n("div",{staticClass:"markdown-body"},[n("router-view")],1)])]),t._v(" "),t.$route.meta.noPreview?t._e():n("preview",{attrs:{width:t.phone_size[0],height:t.phone_size[1]}},[n("router-view",{attrs:{name:"preview"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{attrs:{title:"Btn"}},[n("div",{staticClass:"btn-group"},[n("Btn",{staticClass:"demo-btn",attrs:{size:"sm"}},[t._v("Btn sm")]),t._v(" "),n("Btn",{staticClass:"demo-btn",attrs:{size:"md"}},[t._v("Btn md")]),t._v(" "),n("Btn",{staticClass:"demo-btn",attrs:{size:"lg"}},[t._v("Btn lg")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{style:t.style},[n("span",[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Overview")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/Btn"}},[t._v("Btn")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Btn")]),t._v(" "),n("blockquote",[n("p",[t._v("按钮组件")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("按钮尺寸")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("md")])])]),t._v(" "),n("tr",[n("td",[t._v("disbaled")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("disbaled")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])]),t._v(" "),n("tr",[n("td",[t._v("is_loading")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("is_loading")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])]),t._v(" "),n("tr",[n("td",[t._v("prefix")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("prefix")]),t._v(" "),n("td",[n("code",[t._v("Object")]),t._v(", "),n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("suffix")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("suffix")]),t._v(" "),n("td",[n("code",[t._v("Object")]),t._v(", "),n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Hiui-m")]),t._v(" "),n("blockquote",[n("p",[t._v("移动端组件库")])]),t._v(" "),n("h2",[t._v("安装")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("使用")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-bash"},[t._v("$ npm install hiui-m --save\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("btn")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":size")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v("\"'lg'\"")]),t._v(">")]),t._v("Button"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("btn")]),t._v(">")]),t._v("\n")])])}]}},function(t,e,n){t.exports=n(25)},function(t,e,n){t.exports=n(24)}],[5]);
//# sourceMappingURL=app.ca1a51ab211f20bc7a88.js.map