"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[639],{7606:function(e,t,a){a.d(t,{G:function(){return y}});var r=a(4694),n=a(5697),l=a.n(n),c=a(7294);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),n=f(t.slice(0,r)),l=t.slice(r+1).trim();return n.startsWith("webkit")?e[(a=n,a.charAt(0).toUpperCase()+a.slice(1))]=l:e[n]=l,e}),{})}var v=!1;try{v=!0}catch(g){}function E(e){return e&&"object"===i(e)&&e.prefix&&e.iconName&&e.icon?e:r.parse.icon?r.parse.icon(e):null===e?null:e&&"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function y(e){var t=e.forwardedRef,a=u(e,["forwardedRef"]),n=a.icon,l=a.mask,c=a.symbol,i=a.className,o=a.title,f=a.titleId,p=E(n),g=b("classes",[].concat(d(function(e){var t,a=e.spin,r=e.pulse,n=e.fixedWidth,l=e.inverse,c=e.border,i=e.listItem,o=e.flip,m=e.size,u=e.rotation,d=e.pull,f=(s(t={"fa-spin":a,"fa-pulse":r,"fa-fw":n,"fa-inverse":l,"fa-border":c,"fa-li":i,"fa-flip-horizontal":"horizontal"===o||"both"===o,"fa-flip-vertical":"vertical"===o||"both"===o},"fa-".concat(m),null!=m),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(d),null!=d),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(a)),d(i.split(" ")))),h=b("transform","string"==typeof a.transform?r.parse.transform(a.transform):a.transform),w=b("mask",E(l)),O=(0,r.icon)(p,m({},g,{},h,{},w,{symbol:c,title:o,titleId:f}));if(!O)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var k=O.abstract,j={ref:t};return Object.keys(a).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(j[e]=a[e])})),N(k[0],j)}y.displayName="FontAwesomeIcon",y.propTypes={border:l().bool,className:l().string,mask:l().oneOfType([l().object,l().array,l().string]),fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf(["horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),size:l().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var N=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var n=(a.children||[]).map((function(a){return e(t,a)})),l=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e}),{attrs:{}}),c=r.style,i=void 0===c?{}:c,s=u(r,["style"]);return l.attrs.style=m({},l.attrs.style,{},i),t.apply(void 0,[a.tag,m({},l.attrs,{},s)].concat(d(n)))}.bind(null,c.createElement)},7494:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(5444);function l(e){e.color;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-chevron-up",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}))}function c(e){var t,a=e.currentPage,c=void 0===a?"":a,i=e.siteTitle,s=void 0===i?"":i,o=e.currentSubPage,m=void 0===o?"":o;t=null!=c?c:s;return r.createElement("div",null,r.createElement("div",{className:"wrap"},r.createElement("div",{className:"scroll-top"},r.createElement("a",{id:"scroll-top",onClick:function(){window.scrollTo({top:0})}},r.createElement(l,{color:"#121212"}))),r.createElement("div",{className:"left-frame-top"},r.createElement("div",{className:"panel-1"}),r.createElement("div",{className:"panel-2"})),r.createElement("div",{className:"right-frame-top"},r.createElement("div",{className:"banner"},"Home"===c?"Maria Mateescu • Software Engineer":c+" • "+m),r.createElement("div",{className:"data-cascade-button-group"},r.createElement("div",{className:"button",id:"menu-1"},r.createElement(n.Link,{to:"/"},"Home")),r.createElement("div",{className:"button",id:"menu-2"},r.createElement(n.Link,{to:"/scales/"},"Music")),r.createElement("div",{className:"button",id:"menu-3"},r.createElement(n.Link,{to:"/theatre/"},"Interests")),r.createElement("div",{className:"button",id:"menu-4"},r.createElement(n.Link,{to:"/blog/"},"Blog"))),r.createElement("div",{className:"runner"},r.createElement("div",{className:"top-corner-bg"},r.createElement("div",{className:"top-corner"})),r.createElement("div",{className:"block-2"}),r.createElement("div",{className:"block-3"}),r.createElement("div",{className:"block-4"},r.createElement("div",{className:"block-4-floatbar"}))),r.createElement("div",{className:"bar-panel"},r.createElement("div",{className:"bar-1"}),r.createElement("div",{className:"bar-2"}),r.createElement("div",{className:"bar-3"}),r.createElement("div",{className:"bar-4"},r.createElement("div",{className:"bar-4-inside"}))))),r.createElement("div",null))}function i(e){var t=e.currentPage,a=void 0===t?"":t,l=(e.siteTitle,e.currentSubPage),c=void 0===l?"":l;return"Music"===a?r.createElement("div",{className:"left-frame"},r.createElement("div",null,r.createElement("div",{className:"panel-33"}),r.createElement("div",{className:"panel-3"},r.createElement(n.Link,{to:"/scales/"},"Scales")),r.createElement("div",{className:"panel-4"},r.createElement(n.Link,{to:"/chords/"},"Chords")),"Scales "===c&&r.createElement(r.Fragment,null,r.createElement("div",{className:"panel-5"}),r.createElement("div",{className:"panel-6"}),r.createElement("div",{className:"panel-7"}),r.createElement("div",{className:"panel-8"}))),r.createElement("div",null,r.createElement("div",{className:"panel-10"}))):"Interests"===a?r.createElement("div",{className:"left-frame"},r.createElement("div",null,r.createElement("div",{className:"panel-33"}),r.createElement("div",{className:"panel-3"},r.createElement(n.Link,{to:"/theatre/"},"Theatre")),r.createElement("div",{className:"panel-4"},r.createElement(n.Link,{to:"/reading/"},"Reading")),r.createElement("div",{className:"panel-3"},r.createElement(n.Link,{to:"/art/"},"Art")),r.createElement("div",{className:"panel-5"}),r.createElement("div",{className:"panel-6"}),r.createElement("div",{className:"panel-7"}),r.createElement("div",{className:"panel-8"})),r.createElement("div",null,r.createElement("div",{className:"panel-10"}))):"Home"===a?r.createElement("div",{className:"left-frame"},r.createElement("div",null,r.createElement("div",{className:"panel-3"}),r.createElement("div",{className:"panel-6"}),r.createElement("div",{className:"panel-4"})),r.createElement("div",null,r.createElement("div",{className:"panel-10"}))):r.createElement("div",{className:"left-frame"},r.createElement("div",null,r.createElement("div",{className:"panel-3"}),r.createElement("div",{className:"panel-4"}),r.createElement("div",{className:"panel-5"}),r.createElement("div",{className:"panel-6"}),r.createElement("div",{className:"panel-7"}),r.createElement("div",{className:"panel-8"}),r.createElement("div",{className:"panel-9"})),r.createElement("div",null,r.createElement("div",{className:"panel-10"})))}function s(e){var t,a,l=e.currentPage,s=void 0===l?"":l,o=e.currentSubPage,m=void 0===o?"":o,u=e.children,d=(0,n.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(c,{currentPage:s,siteTitle:(null===(t=d.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",currentSubPage:m}),r.createElement("div",{className:"wrap",id:"gap"},r.createElement(i,{currentPage:s,currentSubPage:m,siteTitle:(null===(a=d.site.siteMetadata)||void 0===a?void 0:a.title)||"Title"}),r.createElement("div",{className:"right-frame"},r.createElement("div",{className:"bar-panel"},r.createElement("div",{className:"bar-6"}),r.createElement("div",{className:"bar-7"}),r.createElement("div",{className:"bar-8"}),r.createElement("div",{className:"bar-9"},r.createElement("div",{className:"bar-9-inside"}))),r.createElement("div",{className:"runner"},r.createElement("div",{className:"corner-bg"},r.createElement("div",{className:"corner"}))),r.createElement("div",{className:"content"},u,r.createElement("footer",{className:"page-footer go-center"},r.createElement("div",{className:"lcars-bar-slice-top"}),r.createElement("div",{className:"lcars-bar"},r.createElement("div",{className:"lcars-bar-inner"},r.createElement("div",{className:"lcars-bar-cutout"}))),"© ",(new Date).getFullYear()," Maria Mateescu, Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),", style inspired by"," ",r.createElement("a",{href:"https://thelcars.com"},"LCARS"))))))}},7431:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(5414),l=a(5444);function c(e){var t,a,c=e.description,i=void 0===c?"":c,s=e.lang,o=void 0===s?"en":s,m=(e.meta,e.title),u=e.keywords,d=void 0===u?[]:u,f=(0,l.useStaticQuery)("63159454").site,p=i||f.siteMetadata.description;null===(t=f.siteMetadata)||void 0===t||t.title;return r.createElement(r.Fragment,null,r.createElement(n.q,null,r.createElement("meta",{name:"twitter:title",content:m}),r.createElement("meta",{name:"twitter:description",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=f.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"og:title",content:m}),r.createElement("meta",{name:"og:description",content:p}),r.createElement("meta",{name:"description",content:p}),r.createElement("meta",{name:"keywords",content:d.join(",")}),r.createElement("meta",{name:"lang",content:o}),r.createElement("title",null,m)))}}}]);
//# sourceMappingURL=88d149c91c064e89f0eb938efeb03d65b6bfd20e-ac552993a4f0945052cc.js.map