(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{177:function(o,t,e){},184:function(o,t,e){"use strict";var n=e(177);e.n(n).a},195:function(o,t,e){"use strict";e.r(t);var n=e(2),i=e(3),s=e(60);let c=class extends i.c{constructor(){super(...arguments),this.showCode=!1,this.showQrcode=!1,this.showPhone=!1}get demoLink(){return location.origin+this.$site.base+this.link.slice(1)+".html"}};n.a([Object(i.b)(),n.b("design:type",String)],c.prototype,"link",void 0);var a=c=n.a([Object(i.a)({components:{HiIcon:s.a}})],c),d=(e(184),e(0)),r=Object(d.a)(a,function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("section",{staticClass:"demo-wrap"},[e("div",{staticClass:"demo-header"},[o.link?e("hi-icon",{staticClass:"i-icon",attrs:{name:"mobilephone"},on:{click:function(t){o.showPhone=!0}}}):o._e(),o.link?e("hi-icon",{staticClass:"i-icon",attrs:{name:"qrcode"},on:{click:function(t){o.showQrcode=!0}}}):o._e(),e("hi-icon",{staticClass:"i-icon",attrs:{name:"code"},on:{click:function(t){o.showCode=!o.showCode}}})],1),e("div",{staticClass:"demo-content"},[e("transition",{attrs:{name:"collapse"}},[o.showCode?e("div",{staticClass:"demo-code"},[o._t("code")],2):o._e()]),e("div",{staticClass:"demo"},[o._t("default")],2)],1),e("transition",{attrs:{name:"fade"}},[o.showQrcode?e("modal-qrcode",{attrs:{link:o.demoLink},on:{hide:function(t){o.showQrcode=!1}}}):o._e(),o.showPhone?e("modal-phone",{attrs:{link:o.demoLink},on:{hide:function(t){o.showPhone=!1}}}):o._e()],1)],1)},[],!1,null,"48bac8f8",null);t.default=r.exports}}]);