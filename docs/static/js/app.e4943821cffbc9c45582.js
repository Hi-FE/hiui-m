webpackJsonp([1],[,,,function(t,e,n){n(73);var s=n(0)(n(36),n(293),null,null);t.exports=s.exports},,function(t,e,n){"use strict";e.a={name:"Hiui-M",version:"v1.0.0",github:"https://github.com/Hi-FE/hiui-m",nav:[{name:"Overview",cn_name:"概述",path:"/"},{name:"Standard",cn_name:"规范",path:"/Standard"},{name:"Components",cn_name:"组件",path:"/Components",child:[{title:"Base",components:[{name:"Btn",cn_name:"按钮",path:"/Btn"},{name:"Icon",cn_name:"图标",path:"/Icon"},{name:"Bar",cn_name:"栏",path:"/Bar"},{name:"Spinner",cn_name:"加载动画",path:"/Spinner"}]},{title:"Data in",components:[{name:"Switch",cn_name:"开关",path:"/Switch"}]},{title:"Data out",components:[{name:"Toast",cn_name:"提示",path:"/Toast"}]}]}]}},,,,,function(t,e,n){n(71);var s=n(0)(n(27),n(290),null,null);t.exports=s.exports},function(t,e,n){"use strict";var s=n(4),a=n(313);s.a.use(a.a);var o=[{path:"/Btn",name:"Preview-Btn",component:n(269)},{path:"/Icon",name:"Preview-Icon",component:n(270)},{path:"/Bar",name:"Preview-Bar",component:n(268)},{path:"/Toast",name:"Preview-Toast",component:n(273)},{path:"/Switch",name:"Preview-Switch",component:n(272)},{path:"/Spinner",name:"Preview-Spinner",component:n(271)}];e.a=new a.a({mode:"hash",routes:o.concat([{path:"/",component:n(274),children:[{path:"/",name:"Overview",component:n(311)},{path:"/Standard",name:"Standard",component:n(312)},{path:"/Components",name:"Components",component:n(310)},{path:"/Components/Btn",name:"Btn",meta:{preview:"./#/Btn"},component:n(305)},{path:"/Components/Icon",name:"Icon",meta:{preview:"./#/Icon"},component:n(306)},{path:"/Components/Bar",name:"Bar",meta:{preview:"./#/Bar"},component:n(304)},{path:"/Components/Toast",name:"Toast",meta:{preview:"./#/Toast"},component:n(309)},{path:"/Components/Switch",name:"Switch",meta:{preview:"./#/Switch"},component:n(308)},{path:"/Components/Spinner",name:"Spinner",meta:{preview:"./#/Spinner"},component:n(307)}]}])})},function(t,e,n){"use strict";var s=n(20),a=n(18),o=n(19),i=n(17),r=n(21),c=n(22),_=function(t){t.component(s.a.name,s.a),t.component(a.a.name,a.a),t.component(o.a.name,o.a),t.component(i.a.name,i.a),t.component(r.a.name,r.a),t.use(c.a)};"undefined"!=typeof window&&window.Vue&&_(window.Vue),e.a={Spinner:s.a,Btn:a.a,Icon:o.a,Bar:i.a,Toast:c.a,Switch:r.a,install:_}},function(t,e){},function(t,e,n){n(63);var s=n(0)(n(24),n(282),null,null);t.exports=s.exports},function(t,e,n){n(76);var s=n(0)(n(33),n(303),null,null);t.exports=s.exports},function(t,e,n){n(61);var s=n(0)(n(34),n(279),null,null);t.exports=s.exports},function(t,e,n){"use strict";var s=n(260),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(261),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(10),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(262),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(263),a=n.n(s);e.a=a.a},function(t,e,n){"use strict";var s=n(264),a=n.n(s),o=void 0,i=function(t){var e=t.extend(a.a);t.prototype.$toast=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,s=arguments[2];o&&o.$destroy(!0);var a=new e({data:{content:t,time:n,callback:s}});o=a.$mount(),o.show=!0,o.$on("destroy",function(){o=null})}};e.a={install:i,Toast:a.a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),a=n(14),o=n.n(a),i=n(11),r=n(12),c=n(16),_=n.n(c),l=n(15),p=n.n(l),d=n(3),v=n.n(d),u=n(13);n.n(u);s.a.component(_.a.name,_.a),s.a.component(p.a.name,p.a),s.a.component(v.a.name,v.a),s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Bar",props:{size:{default:"md",type:String},use_padding:{default:!1,type:Boolean},is_center:{default:!1,type:Boolean},is_middle:{default:!1,type:Boolean}},data:function(){return{}},computed:{component_class:function(){return["hiui-bar","hiui-bar-"+this.size,{"hiui-bar-padding":this.use_padding,"hiui-bar-center":this.is_center,"hiui-bar-middle":this.is_middle}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(45),a=n.n(s);e.default={name:"Btn",components:{Icon:n(10)},props:{size:{default:"md",type:String},disabled:{default:!1,type:Boolean},is_loading:{default:!1,type:Boolean},loading_text:String,prefix:String,suffix:String},data:function(){return{msg:"button"}},computed:{component_class:function(){var t;return["hiui-btn",(t={},a()(t,"hiui-btn-"+this.size,this.size),a()(t,"disabled",this.disabled),t)]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Icon",props:{size:Number,name:{type:String,required:!0},color:{default:"",type:String},rotate:{default:!1,type:Boolean}},data:function(){return{}},computed:{component_class:function(){return["iconfont","hiui-icon","icon-"+this.name,{"hiui-icon-rotate":this.rotate}]},size_style:function(){return{fontSize:this.size?this.size+"px":"",color:this.color||""}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Spinner",props:{size:{default:26,type:Number},color:{default:"#666",type:String}},data:function(){return{}},computed:{component_class:function(){return["hiui-spinner"]},styles:function(){return{width:this.size+"px",height:this.size+"px",borderColor:""+this.color}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vSwitch",props:{size:{default:"md",type:String},value:{type:Boolean,required:!0}},computed:{component_class:function(){return["hiui-switch","hiui-switch-"+this.size,{checked:this.value}]},checked:{set:function(t){this.$emit("input",t)},get:function(){return this.value}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Toast",data:function(){return{show:!1,content:"",time:0,callback:null}},computed:{component_class:function(){return["hiui-toast"]}},methods:{close:function(){this.show=!1},afterLeave:function(){this.$emit("destroy"),this.$destroy(!0)}},mounted:function(){document.body.appendChild(this.$el),setTimeout(this.close,this.time)},beforeDestroy:function(){this.callback&&this.callback(),document.body.removeChild(this.$el)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(5);e.default={name:"Header",data:function(){return{config:s.a}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(5);e.default={name:"Nav",data:function(){return{data:s.a.nav}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo-item",components:{vCode:n(3)},props:{lang:{default:"html",type:String},name:String,description:String,code:String},data:function(){return{show_code:!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo",props:{title:{default:"",type:String},is_horizontal_center:{default:!1,type:Boolean},is_vertical_center:{default:!1,type:Boolean}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Preview",props:["width","height"],computed:{size:function(){return{width:this.width+"px",height:this.height+"px"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(78),a=n.n(s);e.default={name:"v-code",props:["code","lang"],mounted:function(){a.a.highlightBlock(this.$refs.code)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{code:'\n<!-- 标题Bar -->\n<Bar class="top-bar">\n  <h3>Bar</h3>\n</Bar>\n\n<!-- 固定底部按钮 -->\n<Bar class="fix-bottom-bar" size="lg">\n  <Btn>验证并支付</Btn>\n</Bar>\n\n<style lang="stylus">\n.top-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fix-bottom-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 9;\n}\n\n.fix-bottom-bar button {\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 0;\n  background-color: _red;\n  color: #fff;\n}\n</style>\n        ',no_padding_code:'\n<!-- use_padding: false -->\n<Bar class="bar">\n  <Btn>Button</Btn>\n</Bar>\n        ',have_padding_code:'\n<!-- use_padding: true -->\n<Bar class="bar" :use_padding="true">\n  <Btn>Button</Btn>\n  <Btn>Button</Btn>\n  <Btn>Button</Btn>\n</Bar>\n        '}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{size_code:'\n<Btn size="sm">Btn sm</Btn>\n<Btn size="md">Btn md</Btn>\n<Btn size="lg">Btn lg</Btn>\n        ',status_code:'\n<Btn :disabled="true">Disabled</Btn>\n<Btn :is_loading="true" loading_text="Loading..">Btn</Btn>\n        ',icon_code:'\n<Btn prefix="search">search</Btn>\n<Btn suffix="search">search</Btn>\n        '}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name_code:'\n<Icon name="heart"></Icon>\n<Icon name="star"></Icon>\n<Icon name="tag"></Icon>\n        ',size_code:'\n<Icon size="16" name="enviroment"></Icon>\n<Icon size="24" name="enviroment"></Icon>\n<Icon size="32" name="enviroment"></Icon>\n        ',color_code:'\n<Icon color="red" name="search"></Icon>\n<Icon color="#00a0e9" name="search"></Icon>\n<Icon color="rgba(33, 66, 99, 0.6)" name="search"></Icon>\n        ',rotate_code:'\n<Icon :rotate="true" name="loading"></Icon>\n<Icon :rotate="true" name="reload"></Icon>\n        '}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{code:"\n<Spinner></Spinner>\n        ",size_code:'\n<Spinner></Spinner>\n<Spinner :size="36"></Spinner>\n<Spinner :size="48"></Spinner>\n<Spinner :size="60"></Spinner>\n        ',color_code:'\n<Spinner color="pink"></Spinner>\n<Spinner color="#87db83"></Spinner>\n<Spinner color="rgba(255, 66, 66, 1)"></Spinner>\n      '}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{code:'\n<vSwitch size="sm" v-model="val"></vSwitch>\n<vSwitch size="md" v-model="val"></vSwitch>\n<vSwitch size="lg" v-model="val"></vSwitch>\n        ',color_code:'\n<vSwitch class="green" v-model="val"></vSwitch>\n\n<style lang="stylus">\n.green {\n  background-color: _red;\n}\n\n.green.checked {\n  background-color: _green;\n}\n</style>\n        ',val:!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{size_code:"\nthis.$toast('Default Toast')\n        "}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",components:{vHeader:n(265),vNav:n(266),preview:n(267)},data:function(){return{phone5_size:[320,568],phone6_size:[375,667]}},computed:{preview_size:function(){return document.documentElement.clientHeight<this.phone6_size[1]+120?this.phone5_size:this.phone6_size}}}},,,,,,,,,,,,,,function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},function(t,e){t.exports={gap_xsm:"6px",gap_sm:"12px",gap_md:"20px",gap_lg:"30px",gap_xlg:"44px",size_o_sm:"28px",size_o_md:"40px",size_o_lg:"52px",size_sm:"24px",size_md:"34px",size_lg:"44px"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var s=n(0)(null,n(291),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(300),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(299),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(298),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(297),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(296),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(295),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(294),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(280),null,null);t.exports=s.exports},function(t,e,n){n(74);var s=n(0)(n(25),n(301),null,null);t.exports=s.exports},function(t,e,n){n(70);var s=n(0)(n(26),n(289),null,null);t.exports=s.exports},function(t,e,n){n(75);var s=n(0)(n(28),n(302),null,null);t.exports=s.exports},function(t,e,n){n(67);var s=n(0)(n(29),n(286),null,null);t.exports=s.exports},function(t,e,n){n(60);var s=n(0)(n(30),n(278),null,null);t.exports=s.exports},function(t,e,n){n(59);var s=n(0)(n(31),n(277),null,null);t.exports=s.exports},function(t,e,n){n(72);var s=n(0)(n(32),n(292),null,null);t.exports=s.exports},function(t,e,n){n(64);var s=n(0)(n(35),n(283),null,null);t.exports=s.exports},function(t,e,n){n(62);var s=n(0)(n(37),n(281),null,null);t.exports=s.exports},function(t,e,n){n(69);var s=n(0)(n(38),n(288),null,null);t.exports=s.exports},function(t,e,n){n(68);var s=n(0)(n(39),n(287),null,null);t.exports=s.exports},function(t,e,n){n(66);var s=n(0)(n(40),n(285),null,null);t.exports=s.exports},function(t,e,n){n(57);var s=n(0)(n(41),n(275),null,null);t.exports=s.exports},function(t,e,n){n(58);var s=n(0)(n(42),n(276),null,null);t.exports=s.exports},function(t,e,n){n(65);var s=n(0)(n(43),n(284),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"switch-demo",attrs:{title:"Switch"}},[n("demo-item",{attrs:{name:"Size",description:"尺寸",code:t.code}},[n("vSwitch",{attrs:{size:"sm"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),t._v(" "),n("vSwitch",{attrs:{size:"md"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),t._v(" "),n("vSwitch",{attrs:{size:"lg"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),t._v(" "),n("demo-item",{attrs:{name:"Style",description:"自定义样式",code:t.color_code}},[n("vSwitch",{staticClass:"green",model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"icon-demo",attrs:{title:"Icon"}},[n("demo-item",{attrs:{name:"Default",description:"默认",code:t.size_code,lang:"js"}},[n("Btn",{nativeOn:{click:function(e){t.$toast("Default Toast")}}},[t._v("Toast")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h3",{staticClass:"logo"},[t._v("\n    "+t._s(t.config.name)+"\n    "),n("small",[t._v(t._s(t.config.version))])]),t._v(" "),n("ul",{staticClass:"menu"},[n("li",[n("a",{attrs:{href:t.config.github}},[t._v("Github")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("transition",{attrs:{name:"fade"},on:{"after-leave":t.afterLeave}},[n("div",{class:t.component_class},[t._v("\n    "+t._s(t.content)+"\n  ")])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"demo-container"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Standard")]),t._v(" "),n("blockquote",[n("p",[t._v("一些基础的规范")])]),t._v(" "),n("h2",[t._v("Span")]),t._v(" "),n("blockquote",[n("p",[t._v("元素间的距离")])]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("基本的 xsm sm md lg xlg 五档间距，UI组件和公共业务组件强制要求，具体页面设计建议遵从。")]),t._v(" "),n("h2",[t._v("Size")]),t._v(" "),n("blockquote",[n("p",[t._v("基础尺寸，一般用于规范元素的高度，比如一个按钮的size。")])]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("outer用于Bar组件，inner用于Btn form等组件。")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-base"},[t._v("6px 12px 20px 30px 44px\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-base"},[t._v("// outer: 28px 40px 52px\n// inner: 24px 34px 44px\n")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"bar-demo",attrs:{title:"Icon"}},[n("div",{staticClass:"demo-main"},[n("Bar",{staticClass:"top-bar"},[n("h3",[t._v("Bar")])]),t._v(" "),n("Bar",{staticClass:"fix-bottom-bar",attrs:{size:"lg"}},[n("Btn",[t._v("验证并支付")])],1),t._v(" "),n("v-code",{attrs:{code:t.code}}),t._v(" "),n("Bar",{staticClass:"bar"},[n("Btn",[t._v("Button")])],1),t._v(" "),n("v-code",{attrs:{code:t.no_padding_code}}),t._v(" "),n("Bar",{staticClass:"bar",attrs:{use_padding:!0}},[n("Btn",[t._v("Button")]),t._v(" "),n("Btn",[t._v("Button")]),t._v(" "),n("Btn",[t._v("Button")])],1),t._v(" "),n("v-code",{attrs:{code:t.have_padding_code}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"preview-wrap",style:t.size},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("v-header"),t._v(" "),n("main",{staticClass:"main"},[n("section",{staticClass:"left-content"},[n("v-nav")],1),t._v(" "),n("section",{class:["right-content",{hasPreview:!t.$route.meta.noPreview}]},[n("div",{staticClass:"markdown-body"},[n("router-view")],1)])]),t._v(" "),t.$route.meta.preview?n("preview",{attrs:{width:t.preview_size[0],height:t.preview_size[1]}},[n("iframe",{staticClass:"preview",attrs:{src:t.$route.meta.preview,frameborder:"0"}})],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"spinner-demo",attrs:{title:"Spinner"}},[n("demo-item",{attrs:{name:"Default",description:"默认",code:t.code}},[n("Spinner")],1),t._v(" "),n("demo-item",{attrs:{name:"Size",description:"尺寸",code:t.size_code}},[n("Spinner"),t._v(" "),n("Spinner",{attrs:{size:36}}),t._v(" "),n("Spinner",{attrs:{size:48}}),t._v(" "),n("Spinner",{attrs:{size:60}})],1),t._v(" "),n("demo-item",{attrs:{name:"Color",description:"颜色",code:t.color_code}},[n("Spinner",{attrs:{color:"pink"}}),t._v(" "),n("Spinner",{attrs:{color:"#87db83"}}),t._v(" "),n("Spinner",{attrs:{color:"rgba(255, 66, 66, 1)"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{class:t.component_class},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{__c:function(e){var n=t.checked,s=e.target,a=!!s.checked;if(Array.isArray(n)){var o=t._i(n,null);a?o<0&&(t.checked=n.concat(null)):o>-1&&(t.checked=n.slice(0,o).concat(n.slice(o+1)))}else t.checked=a}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{staticClass:"icon-demo",attrs:{title:"Icon"}},[n("demo-item",{attrs:{name:"Name",description:"图标类型",code:t.name_code}},[n("Icon",{attrs:{name:"heart"}}),t._v(" "),n("Icon",{attrs:{name:"star"}}),t._v(" "),n("Icon",{attrs:{name:"tag"}})],1),t._v(" "),n("demo-item",{attrs:{name:"Size",description:"图标大小",code:t.size_code}},[n("Icon",{attrs:{size:16,name:"enviroment"}}),t._v(" "),n("Icon",{attrs:{size:24,name:"enviroment"}}),t._v(" "),n("Icon",{attrs:{size:32,name:"enviroment"}})],1),t._v(" "),n("demo-item",{attrs:{name:"Color",description:"图标颜色",code:t.color_code}},[n("Icon",{attrs:{color:"red",name:"search"}}),t._v(" "),n("Icon",{attrs:{color:"#00a0e9",name:"search"}}),t._v(" "),n("Icon",{attrs:{color:"rgba(33, 66, 99, 0.6)",name:"search"}})],1),t._v(" "),n("demo-item",{attrs:{name:"Rotate",description:"旋转",code:t.rotate_code}},[n("Icon",{attrs:{rotate:!0,name:"loading"}}),t._v(" "),n("Icon",{attrs:{rotate:!0,name:"reload"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo",{attrs:{title:"Btn"}},[n("demo-item",{attrs:{name:"Size",description:"按钮大小",code:t.size_code}},[n("div",{staticClass:"btn-group"},[n("Btn",{attrs:{size:"sm"}},[t._v("Size sm")]),t._v(" "),n("Btn",{attrs:{size:"md"}},[t._v("Size md")]),t._v(" "),n("Btn",{attrs:{size:"lg"}},[t._v("Size lg")])],1)]),t._v(" "),n("demo-item",{attrs:{name:"Status",description:"按钮状态",code:t.status_code}},[n("div",{staticClass:"btn-group"},[n("Btn",{attrs:{disabled:!0}},[t._v("Disabled")]),t._v(" "),n("Btn",{attrs:{is_loading:!0,loading_text:"Loading.."}},[t._v("Btn")])],1)]),t._v(" "),n("demo-item",{attrs:{name:"Icon",description:"更多图标",code:t.icon_code}},[n("div",{staticClass:"btn-group"},[n("Btn",{attrs:{prefix:"search"}},[t._v("search")]),t._v(" "),n("Btn",{attrs:{suffix:"search"}},[t._v("search")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.component_class},[t.is_loading?n("Icon",{attrs:{name:"loading",rotate:!0}}):t._e(),t._v(" "),!t.is_loading&&t.prefix?n("Icon",{attrs:{name:t.prefix}}):t._e(),t._v(" "),t.loading_text?n("span",[t._v("\n    "+t._s(t.loading_text)+"\n  ")]):n("span",[t._t("default")],2),t._v(" "),!t.is_loading&&t.suffix?n("Icon",{attrs:{name:t.suffix}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:t.component_class,style:t.size_style})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Components")]),t._v(" "),n("blockquote",[n("p",[t._v("组件")])]),t._v(" "),n("h2",[t._v("Usage")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    "),n("span",{staticClass:"hljs-attr"},[t._v("Btn")]),t._v(": "),n("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),n("span",{staticClass:"hljs-string"},[t._v("'@/components/Btn'")]),t._v(")\n  }\n}\n")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("ul",[t._l(t.data,function(e){return[n("router-link",{staticClass:"link-li",attrs:{exact:!0,to:e.path,tag:"li"}},[t._v("\n        "+t._s(e.name)+"\n        "),n("small",[t._v(t._s(e.cn_name))])]),t._v(" "),t._l(e.child,function(s){return e.child?n("div",{staticClass:"nav-child-wrap"},[n("div",{staticClass:"nav-child-title"},[t._v(t._s(s.title))]),t._v(" "),t._l(s.components,function(s,a){return n("router-link",{key:a,staticClass:"nav-child link-li",attrs:{exact:!0,to:e.path+s.path,tag:"li"}},[t._v("\n          "+t._s(s.name)+"\n          "),n("small",[t._v(t._s(s.cn_name))])])})],2):t._e()})]})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-code"},[n("pre",[n("code",{ref:"code",class:t.lang},[t._v(t._s(t.code.trim()))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Switch")]),t._v(" "),n("blockquote",[n("p",[t._v("开关")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("尺寸，可选值 "),n("code",[t._v("lg")]),t._v("/"),n("code",[t._v("md")]),t._v("/"),n("code",[t._v("sm")])]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("md")])])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("绑定值")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[t._v("-")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Spinner")]),t._v(" "),n("blockquote",[n("p",[t._v("加载动画")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("尺寸")]),t._v(" "),n("td",[n("code",[t._v("Number")])]),t._v(" "),n("td",[n("code",[t._v("26")])])]),t._v(" "),n("tr",[n("td",[t._v("color")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("颜色")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("#666")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Hiui-m")]),t._v(" "),n("blockquote",[n("p",[t._v("移动端组件库")])]),t._v(" "),n("h2",[t._v("安装")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("使用")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-bash"},[t._v("$ npm install hiui-m --save\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("Btn")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"lg"')]),t._v(">")]),t._v("Hiui-M"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("Btn")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n  "),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" Btn "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'hiui-m/src/Btn'")]),t._v("\n\n  "),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n      Btn\n    }\n  }\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Bar")]),t._v(" "),n("blockquote",[n("p",[t._v("栏")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("容器高度（使用outer标准），可选值 "),n("code",[t._v("sm")]),t._v("/"),n("code",[t._v("md")]),t._v("/"),n("code",[t._v("lg")])]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("md")])])]),t._v(" "),n("tr",[n("td",[t._v("use_padding")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否包含内边距（outer - inner）")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Toast")]),t._v(" "),n("blockquote",[n("p",[t._v("提示")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Paramsl")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$toast(content, time, callback)\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("提示文本")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("time")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("存在时间")]),t._v(" "),n("td",[n("code",[t._v("Number")])]),t._v(" "),n("td",[t._v("2000")])]),t._v(" "),n("tr",[n("td",[t._v("callback")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("消失后回调")]),t._v(" "),n("td",[n("code",[t._v("Function")])]),t._v(" "),n("td",[t._v("-")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Btn")]),t._v(" "),n("blockquote",[n("p",[t._v("按钮组件")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("按钮尺寸，可选值 "),n("code",[t._v("sm")]),t._v("/"),n("code",[t._v("md")]),t._v("/"),n("code",[t._v("lg")])]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("md")])])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])]),t._v(" "),n("tr",[n("td",[t._v("is_loading")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否加载中")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])]),t._v(" "),n("tr",[n("td",[t._v("loading_text")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("加载时的文本")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("prefix")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("前置图标")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("suffix")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("后置图标")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Icon")]),t._v(" "),n("blockquote",[n("p",[t._v("图标")])]),t._v(" "),n("h2",[t._v("API")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("name")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("图标类型")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("图标尺寸")]),t._v(" "),n("td",[n("code",[t._v("Number")])]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("color")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("图标颜色")]),t._v(" "),n("td",[n("code",[t._v("String")])]),t._v(" "),n("td",[n("code",[t._v("#666")])])]),t._v(" "),n("tr",[n("td",[t._v("rotate")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否旋转")]),t._v(" "),n("td",[n("code",[t._v("Boolean")])]),t._v(" "),n("td",[n("code",[t._v("false")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.component_class},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.component_class,style:t.styles})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-item"},[n("h3",{staticClass:"demo-item-title"},[t._v("\n    "+t._s(t.name)+"\n    "),n("small",[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"show-code-btn",on:{click:function(e){t.show_code=!t.show_code}}},[t._v("Code")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"demo-item-container"},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("v-code",{directives:[{name:"show",rawName:"v-show",value:t.show_code,expression:"show_code"}],attrs:{lang:t.lang,code:t.code}})],1)],1)},staticRenderFns:[]}},function(t,e,n){t.exports=n(255)},function(t,e,n){t.exports=n(253)},function(t,e,n){t.exports=n(252)},function(t,e,n){t.exports=n(257)},function(t,e,n){t.exports=n(258)},function(t,e,n){t.exports=n(254)},function(t,e,n){t.exports=n(251)},function(t,e,n){t.exports=n(256)},function(t,e,n){t.exports=n(259)}],[23]);
//# sourceMappingURL=app.e4943821cffbc9c45582.js.map