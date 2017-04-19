webpackJsonp([1],[,,function(t,e,n){n(66);var s=n(0)(n(29),n(281),null,null);t.exports=s.exports},function(t,e,n){n(54);var s=n(0)(n(30),n(262),null,null);t.exports=s.exports},,,,,,,function(t,e,n){n(62);var s=n(0)(n(25),n(271),null,null);t.exports=s.exports},function(t,e,n){n(64);var s=n(0)(n(32),n(274),null,null);t.exports=s.exports},function(t,e){t.exports={name:"Hiui-M",version:"v1.0.0",github:"https://github.com/Hi-FE/hiui-m",nav:[{name:"Overview",cn_name:"概述",path:"/"},{name:"Standard",cn_name:"规范",path:"/Standard"},{name:"Components",cn_name:"组件",path:"/Components",child:[{title:"Base",components:[{name:"Btn",cn_name:"按钮",path:"/Btn"},{name:"Icon",cn_name:"图标",path:"/Icon"},{name:"Bar",cn_name:"栏",path:"/Bar"}]},{title:"Data out",components:[{name:"Toast",cn_name:"提示",path:"/Toast"}]}]}]}},function(t,e,n){"use strict";var s=n(5),a=n(289);s.a.use(a.a),e.a=new a.a({mode:"hash",routes:[{path:"/Btn",name:"Preview-Btn",component:n(255)},{path:"/Icon",name:"Preview-Icon",component:n(256)},{path:"/Bar",name:"Preview-Bar",component:n(254)},{path:"/Toast",name:"Preview-Toast",component:n(257)},{path:"/",component:n(258),children:[{path:"/",name:"Overview",component:n(287)},{path:"/Standard",name:"Standard",component:n(288)},{path:"/Components",name:"Components",component:n(286)},{path:"/Components/Btn",name:"Btn",meta:{preview:"/#/Btn"},component:n(283)},{path:"/Components/Icon",name:"Icon",meta:{preview:"/#/Icon"},component:n(284)},{path:"/Components/Bar",name:"Bar",meta:{preview:"/#/Bar"},component:n(282)},{path:"/Components/Toast",name:"Toast",meta:{preview:"/#/Toast"},component:n(285)}]}]})},function(t,e,n){"use strict";var s=n(18),a=n(19),o=n(17),i=n(20),r=function(t){t.component(s.a.name,s.a),t.component(a.a.name,a.a),t.component(o.a.name,o.a),t.use(i.a)};"undefined"!=typeof window&&window.Vue&&r(window.Vue),e.a={install:r,Btn:s.a,Icon:a.a,Bar:o.a,Toast:i.a}},function(t,e){},function(t,e,n){n(56);var s=n(0)(n(22),n(265),null,null);t.exports=s.exports},function(t,e,n){"use strict";var s=n(248),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(249),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(10),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(250),a=n.n(s),o=void 0,i=function(t){var e=t.extend(a.a);t.prototype.$toast=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,s=arguments[2];o&&o.$destroy(!0);var a=new e({data:{content:t,time:n,callback:s}});o=a.$mount(),o.show=!0,o.$on("destroy",function(){o=null})}};e.a={install:i,Toast:a.a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),a=n(16),o=n.n(a),i=n(13),r=n(14),c=n(15);n.n(c);s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Bar",props:{size:{default:"md",type:String},use_padding:{default:!1,type:Boolean},is_center:{default:!1,type:Boolean},is_middle:{default:!1,type:Boolean}},data:function(){return{}},computed:{component_class:function(){return["hiui-bar","hiui-bar-"+this.size,{"hiui-bar-padding":this.use_padding,"hiui-bar-center":this.is_center,"hiui-bar-middle":this.is_middle}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(39),a=n.n(s);e.default={name:"Btn",components:{Icon:n(10)},props:{size:{default:"md",type:String},disabled:{default:!1,type:Boolean},is_loading:{default:!1,type:Boolean},loading_text:String,prefix:String,suffix:String},data:function(){return{msg:"button"}},computed:{component_class:function(){var t;return["hiui-btn",(t={},a()(t,"hiui-btn-"+this.size,this.size),a()(t,"disabled",this.disabled),t)]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(292),a=n.n(s);e.default={name:"Icon",props:{size:Number,name:{type:String,required:!0},color:{default:"#666",type:String},rotate:{default:!1,type:Boolean}},data:function(){return{icons:a.a}},computed:{component_class:function(){return["hiui-icon",{"hiui-icon-rotate":this.rotate}]},size_style:function(){return void 0!==this.size?{width:this.size+"px",height:this.size+"px"}:null}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Toast",data:function(){return{show:!1,content:"",time:0,callback:null}},computed:{component_class:function(){return["hiui-toast"]}},methods:{close:function(){this.show=!1},afterLeave:function(){this.$emit("destroy"),this.$destroy(!0)}},mounted:function(){document.body.appendChild(this.$el),setTimeout(this.close,this.time)},beforeDestroy:function(){this.callback&&this.callback(),document.body.removeChild(this.$el)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),a=n.n(s);e.default={name:"Header",data:function(){return{config:a.a}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),a=n.n(s);e.default={name:"Nav",data:function(){return{data:a.a.nav}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo-item",components:{vCode:n(11)},props:{lang:{default:"html",type:String},name:String,description:String,code:String},data:function(){return{show_code:!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo",props:{title:{default:"",type:String},is_horizontal_center:{default:!1,type:Boolean},is_vertical_center:{default:!1,type:Boolean}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Preview",props:["width","height"],computed:{size:function(){return{width:this.width+"px",height:this.height+"px"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(68),a=n.n(s);e.default={name:"code",props:["code","lang"],mounted:function(){a.a.highlightBlock(this.$refs.code)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{code:'\n<!-- Size: true -->\n<Bar class="flex-center" size="lg">\n  <h3>Bar</h3>\n</Bar>\n\n<style>\n  .flex-center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n</style>\n        ',no_padding_code:'\n<!-- use_padding: false -->\n<Bar class="bar">\n  <Btn>Button</Btn>\n</Bar>\n        ',have_padding_code:'\n<!-- use_padding: true -->\n<Bar class="bar" :use_padding="true">\n  <Btn>Button</Btn>\n  <Btn>Button</Btn>\n  <Btn>Button</Btn>\n</Bar>\n        '}},components:{demo:n(3),demoItem:n(2),vCode:n(11)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{size_code:'\n<Btn size="sm">Btn sm</Btn>\n<Btn size="md">Btn md</Btn>\n<Btn size="lg">Btn lg</Btn>\n        ',status_code:'\n<Btn :disabled="true">Disabled</Btn>\n<Btn :is_loading="true" loading_text="Loading..">Btn</Btn>\n        ',icon_code:'\n<Btn prefix="search">search</Btn>\n<Btn suffix="search">search</Btn>\n        '}},components:{demo:n(3),demoItem:n(2)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{size_code:'\n<Icon :size="16" name="search"></Icon>\n<Icon :size="24" name="search"></Icon>\n<Icon :size="32" name="search"></Icon>\n        ',color_code:'\n<Icon color="pink" name="search"></Icon>\n<Icon color="#87db83" name="search"></Icon>\n<Icon color="rgba(255, 0, 0, 0.6)" name="search"></Icon>\n        ',rotate_code:'\n<Icon :rotate="true" name="loading"></Icon>\n<Icon :rotate="true" name="refresh"></Icon>\n        '}},components:{demo:n(3),demoItem:n(2)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{size_code:"\nthis.$toast('Default Toast')\n        "}},components:{demo:n(3),demoItem:n(2)},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",components:{vHeader:n(251),vNav:n(252),preview:n(253)},data:function(){return{phone5_size:[320,568],phone6_size:[375,667]}},computed:{preview_size:function(){return document.documentElement.clientHeight<this.phone6_size[1]+120?this.phone5_size:this.phone6_size}}}},,,,,,,,,,,,,,function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var s=n(0)(null,n(272),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(279),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(278),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(277),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(276),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(275),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(263),null,null);t.exports=s.exports},function(t,e,n){n(65);var s=n(0)(n(23),n(280),null,null);t.exports=s.exports},function(t,e,n){n(61);var s=n(0)(n(24),n(270),null,null);t.exports=s.exports},function(t,e,n){n(53);var s=n(0)(n(26),n(261),null,null);t.exports=s.exports},function(t,e,n){n(52);var s=n(0)(n(27),n(260),null,null);t.exports=s.exports},function(t,e,n){n(63);var s=n(0)(n(28),n(273),null,null);t.exports=s.exports},function(t,e,n){n(57);var s=n(0)(n(31),n(266),null,null);t.exports=s.exports},function(t,e,n){n(55);var s=n(0)(n(33),n(264),null,null);t.exports=s.exports},function(t,e,n){n(60);var s=n(0)(n(34),n(269),null,null);t.exports=s.exports},function(t,e,n){n(59);var s=n(0)(n(35),n(268),null,null);t.exports=s.exports},function(t,e,n){n(51);var s=n(0)(n(36),n(259),null,null);t.exports=s.exports},function(t,e,n){n(58);var s=n(0)(n(37),n(267),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"icon-demo",attrs:{title:"Icon"}},[n("demo-item",{attrs:{name:"Default",description:"默认",code:t.size_code}},[n("Btn",{nativeOn:{click:function(e){t.$toast("Default Toast")}}},[t._v("Toast")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h3",{staticClass:"logo"},[t._v("\n    "+t._s(t.config.name)+"\n    "),n("small",[t._v(t._s(t.config.version))])]),t._v(" "),n("ul",{staticClass:"menu"},[n("li",[n("a",{attrs:{href:t.config.github}},[t._v("Github")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("transition",{attrs:{name:"fade"},on:{"after-leave":t.afterLeave}},[n("div",{class:t.component_class},[t._v("\n    "+t._s(t.content)+"\n  ")])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"demo-container"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Standard")]),t._v(" "),n("blockquote",[n("p",[t._v("一些基础的规范")])]),t._v(" "),n("h2",[t._v("Span")]),t._v(" "),n("blockquote",[n("p",[t._v("元素间的距离")])]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("基本的 xsm sm md lg xlg 五档间距，UI组件和公共业务组件强制要求，具体页面设计建议遵从。")]),t._v(" "),n("h2",[t._v("Size")]),t._v(" "),n("blockquote",[n("p",[t._v("基础尺寸，一般用于规范元素的高度，比如一个按钮的size。")])]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("outer用于Bar组件，inner用于Btn form等组件。")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-base"},[t._v("6px 12px 20px 30px 44px\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-base"},[t._v("// outer: 28px 40px 52px\n// inner: 24px 34px 44px\n")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"bar-demo",attrs:{title:"Icon"}},[n("div",{staticClass:"demo-main"},[n("Bar",{staticClass:"flex-center",attrs:{size:"lg"}},[n("h3",[t._v("Bar")])]),t._v(" "),n("v-code",{attrs:{code:t.code}}),t._v(" "),n("Bar",{staticClass:"bar"},[n("Btn",[t._v("Button")])],1),t._v(" "),n("v-code",{attrs:{code:t.no_padding_code}}),t._v(" "),n("Bar",{staticClass:"bar",attrs:{use_padding:!0}},[n("Btn",[t._v("Button")]),t._v(" "),n("Btn",[t._v("Button")]),t._v(" "),n("Btn",[t._v("Button")])],1),t._v(" "),n("v-code",{attrs:{code:t.have_padding_code}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"preview-wrap",style:t.size},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("v-header"),t._v(" "),n("main",{staticClass:"main"},[n("section",{staticClass:"left-content"},[n("v-nav")],1),t._v(" "),n("section",{class:["right-content",{hasPreview:!t.$route.meta.noPreview}]},[n("div",{staticClass:"markdown-body"},[n("router-view")],1)])]),t._v(" "),t.$route.meta.preview?n("preview",{attrs:{width:t.preview_size[0],height:t.preview_size[1]}},[n("iframe",{staticClass:"preview",attrs:{src:t.$route.meta.preview,frameborder:"0"}})],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"icon-demo",attrs:{title:"Icon"}},[n("demo-item",{attrs:{name:"Size",description:"图标大小",code:t.size_code}},[n("Icon",{attrs:{size:16,name:"search"}}),t._v(" "),n("Icon",{attrs:{size:24,name:"search"}}),t._v(" "),n("Icon",{attrs:{size:32,name:"search"}})],1),t._v(" "),n("demo-item",{attrs:{name:"Color",description:"图标颜色",code:t.color_code}},[n("Icon",{attrs:{color:"pink",name:"search"}}),t._v(" "),n("Icon",{attrs:{color:"#87db83",name:"search"}}),t._v(" "),n("Icon",{attrs:{color:"rgba(255, 0, 0, 0.6)",name:"search"}})],1),t._v(" "),n("demo-item",{attrs:{name:"Rotate",description:"旋转",code:t.rotate_code}},[n("Icon",{attrs:{rotate:!0,name:"loading"}}),t._v(" "),n("Icon",{attrs:{rotate:!0,name:"refresh"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{attrs:{title:"Btn"}},[n("demo-item",{attrs:{name:"Size",description:"按钮大小",code:t.size_code}},[n("div",{staticClass:"btn-group"},[n("Btn",{attrs:{size:"sm"}},[t._v("Size sm")]),t._v(" "),n("Btn",{attrs:{size:"md"}},[t._v("Size md")]),t._v(" "),n("Btn",{attrs:{size:"lg"}},[t._v("Size lg")])],1)]),t._v(" "),n("demo-item",{attrs:{name:"Status",description:"按钮状态",code:t.status_code}},[n("div",{staticClass:"btn-group"},[n("Btn",{attrs:{disabled:!0}},[t._v("Disabled")]),t._v(" "),n("Btn",{attrs:{is_loading:!0,loading_text:"Loading.."}},[t._v("Btn")])],1)]),t._v(" "),n("demo-item",{attrs:{name:"Icon",description:"更多图标",code:t.icon_code}},[n("div",{staticClass:"btn-group"},[n("Btn",{attrs:{prefix:"search"}},[t._v("search")]),t._v(" "),n("Btn",{attrs:{suffix:"search"}},[t._v("search")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.component_class},[t.is_loading?n("Icon",{attrs:{name:"loading",rotate:!0}}):t._e(),t._v(" "),!t.is_loading&&t.prefix?n("Icon",{attrs:{name:t.prefix}}):t._e(),t._v(" "),t.loading_text?n("span",[t._v("\n    "+t._s(t.loading_text)+"\n  ")]):n("span",[t._t("default")],2),t._v(" "),!t.is_loading&&t.suffix?n("Icon",{attrs:{name:t.suffix}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:t.component_class,style:t.size_style},[n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024",width:"100%",height:"100%"}},[n("path",{attrs:{fill:t.color,d:t.icons[t.name]}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Components")]),t._v(" "),n("blockquote",[n("p",[t._v("组件")])]),t._v(" "),n("h2",[t._v("Usage")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    "),n("span",{staticClass:"hljs-attr"},[t._v("Btn")]),t._v(": "),n("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),n("span",{staticClass:"hljs-string"},[t._v("'@/components/Btn'")]),t._v(")\n  }\n}\n")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("ul",[t._l(t.data,function(e){return[n("router-link",{staticClass:"link-li",attrs:{exact:!0,to:e.path,tag:"li"}},[t._v("\n        "+t._s(e.name)+"\n        "),n("small",[t._v(t._s(e.cn_name))])]),t._v(" "),t._l(e.child,function(s){return e.child?n("div",{staticClass:"nav-child-wrap"},[n("div",{staticClass:"nav-child-title"},[t._v(t._s(s.title))]),t._v(" "),t._l(s.components,function(s,a){return n("router-link",{key:a,staticClass:"nav-child link-li",attrs:{exact:!0,to:e.path+s.path,tag:"li"}},[t._v("\n          "+t._s(s.name)+"\n          "),n("small",[t._v(t._s(s.cn_name))])])})],2):t._e()})]})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-code"},[n("pre",[n("code",{ref:"code",class:t.lang},[t._v(t._s(t.code.trim()))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Hiui-m")]),t._v(" "),n("blockquote",[n("p",[t._v("移动端组件库")])]),t._v(" "),n("h2",[t._v("安装")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("使用")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-bash"},[t._v("$ npm install hiui-m --save\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("Btn")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"lg"')]),t._v(">")]),t._v("Hiui-M"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("Btn")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n  "),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" Btn "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'hiui-m/src/Btn'")]),t._v("\n\n  "),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n      Btn\n    }\n  }\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Bar")]),t._v(" "),n("blockquote",[n("p",[t._v("栏")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("容器高度（使用outer标准），可选值 "),n("code",[t._v("sm")]),t._v("/"),n("code",[t._v("md")]),t._v("/"),n("code",[t._v("lg")])]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("md")])])]),t._v(" "),n("tr",[n("td",[t._v("use_padding")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否包含内边距（outer - inner）")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Toast")]),t._v(" "),n("blockquote",[n("p",[t._v("提示")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Params")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("this.$toast(content, time, callback)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("提示文本")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("time")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("存在时间")]),t._v(" "),n("td",[n("code",[t._v("Number")])]),t._v(" "),n("td",[t._v("2000")])]),t._v(" "),n("tr",[n("td",[t._v("callback")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("消失后回调")]),t._v(" "),n("td",[n("code",[t._v("Function")])]),t._v(" "),n("td",[t._v("-")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Icon")]),t._v(" "),n("blockquote",[n("p",[t._v("图标")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("name")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("图标类型")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("图标尺寸")]),t._v(" "),n("td",[n("code",[t._v("Number")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("color")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("图标颜色")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("#666")])])]),t._v(" "),n("tr",[n("td",[t._v("rotate")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否旋转")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Btn")]),t._v(" "),n("blockquote",[n("p",[t._v("按钮组件")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("按钮尺寸，可选值 "),n("code",[t._v("sm")]),t._v("/"),n("code",[t._v("md")]),t._v("/"),n("code",[t._v("lg")])]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("md")])])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])]),t._v(" "),n("tr",[n("td",[t._v("is_loading")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否加载中")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])]),t._v(" "),n("tr",[n("td",[t._v("loading_text")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("加载时的文本")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("prefix")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("前置图标")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("suffix")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("后置图标")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.component_class},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-item"},[n("h3",{staticClass:"demo-item-title"},[t._v("\n    "+t._s(t.name)+"\n    "),n("small",[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"show-code-btn",on:{click:function(e){t.show_code=!t.show_code}}},[t._v("Code")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"demo-item-container"},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("v-code",{directives:[{name:"show",rawName:"v-show",value:t.show_code,expression:"show_code"}],attrs:{lang:t.lang,code:t.code}})],1)],1)},staticRenderFns:[]}},function(t,e,n){t.exports=n(245)},function(t,e,n){t.exports=n(242)},function(t,e,n){t.exports=n(243)},function(t,e,n){t.exports=n(244)},function(t,e,n){t.exports=n(241)},function(t,e,n){t.exports=n(246)},function(t,e,n){t.exports=n(247)},,,,function(t,e){t.exports={search:"M968.00768 849.44896l-162.7136-164.67968c42.9056-67.6864 68.48512-147.7632 68.48512-234.12736 0-240.4352-192.6144-435.36384-430.24384-435.36384-237.62944 0-430.24384 194.92864-430.24384 435.36384 0 240.4352 192.63488 435.4048 430.24384 435.4048 85.38112 0 164.47488-25.96864 231.38304-69.36576l162.7136 164.67968c36.02432 36.47488 94.37184 36.47488 130.37568 0C1004.01152 944.96768 1004.01152 885.84192 968.00768 849.44896zM443.51488 761.61024c-169.71776 0-307.32288-139.24352-307.32288-310.96832 0-171.70432 137.60512-310.96832 307.32288-310.96832 169.73824 0 307.32288 139.24352 307.32288 310.96832C750.83776 622.36672 613.23264 761.61024 443.51488 761.61024z",loading:"M318.003 90.829c12.758-10.192 31.41-9.386 43.227 2.432 12.691 12.692 12.69 33.268 0 45.958-3.58 3.579-7.787 6.149-12.269 7.709-53.375 25.846-101.519 64.437-139.462 115.087-61.471 82.081-87.296 183.201-72.702 284.737 14.558 101.537 67.806 191.295 149.886 252.736 169.535 127.039 410.688 92.385 537.6-77.119 33.217-44.387 56-94.113 67.648-147.842 3.777-17.281 20.896-28.256 38.049-24.512 17.277 3.742 28.256 20.799 24.512 38.049-13.664 62.783-40.225 120.832-78.977 172.672-71.713 95.744-176.479 157.887-294.978 174.848-21.599 3.135-43.167 4.672-64.605 4.67-96.161 0.002-189.346-30.814-267.681-89.471C152.508 779.07 90.395 674.303 73.402 555.871c-16.992-118.464 13.152-236.449 84.864-332.224C201.823 165.484 256.913 120.963 318.003 90.829z",refresh:"M480 32a32 32 0 0 0 32 32c119.664 0 232.16 46.608 316.768 131.232C913.392 279.84 960 392.336 960 512c0 118.096-45.472 229.168-128 313.392V736a32 32 0 0 0-64 0v192h192a32 32 0 0 0 0-64h-76.416C974.16 768.512 1024 644.112 1024 512c0-136.752-53.264-265.328-149.984-362.032C777.328 53.264 648.752 0 512 0a32 32 0 0 0-32 32zM149.984 874.032C246.672 970.736 375.248 1024 512 1024a32 32 0 0 0 0-64c-119.664 0-232.16-46.608-316.768-131.232C110.608 744.16 64 631.664 64 512c0-118.096 45.472-229.168 128-313.392V288a32 32 0 0 0 64 0V96H64a32 32 0 0 0 0 64h76.416C49.84 255.488 0 379.888 0 512c0 136.752 53.264 265.328 149.984 362.032z"}}],[21]);
//# sourceMappingURL=app.23a07051b1d86b0ffc1d.js.map