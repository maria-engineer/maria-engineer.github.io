"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[367],{7494:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(5444);function l(e){e.color;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-chevron-up",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}))}function i(e){var t,a=e.currentPage,i=void 0===a?"":a,c=e.siteTitle,s=void 0===c?"":c,o=e.currentSubPage,m=void 0===o?"":o;t=null!=i?i:s;return r.createElement("div",null,r.createElement("div",{className:"wrap"},r.createElement("div",{className:"scroll-top"},r.createElement("a",{id:"scroll-top",onClick:function(){window.scrollTo({top:0})}},r.createElement(l,{color:"#121212"}))),r.createElement("div",{className:"left-frame-top"},r.createElement("div",{className:"panel-1"}),r.createElement("div",{className:"panel-2"})),r.createElement("div",{className:"right-frame-top"},r.createElement("div",{className:"banner"},"Home"===i?"Maria Mateescu • Software Engineer":i+" • "+m),r.createElement("div",{className:"data-cascade-button-group"},r.createElement("div",{className:"button",id:"menu-1"},r.createElement(n.Link,{to:"/"},"Home")),r.createElement("div",{className:"button",id:"menu-2"},r.createElement(n.Link,{to:"/scales/"},"Music")),r.createElement("div",{className:"button",id:"menu-3"},r.createElement(n.Link,{to:"/art/"},"Art")),r.createElement("div",{className:"button",id:"menu-4"},r.createElement(n.Link,{to:"/blog/"},"Blog"))),r.createElement("div",{className:"runner"},r.createElement("div",{className:"top-corner-bg"},r.createElement("div",{className:"top-corner"})),r.createElement("div",{className:"block-2"}),r.createElement("div",{className:"block-3"}),r.createElement("div",{className:"block-4"},r.createElement("div",{className:"block-4-floatbar"}))),r.createElement("div",{className:"bar-panel"},r.createElement("div",{className:"bar-1"}),r.createElement("div",{className:"bar-2"}),r.createElement("div",{className:"bar-3"}),r.createElement("div",{className:"bar-4"},r.createElement("div",{className:"bar-4-inside"}))))),r.createElement("div",null))}function c(e){var t=e.currentPage,a=void 0===t?"":t,l=(e.siteTitle,e.currentSubPage),i=void 0===l?"":l;return"Music"===a?r.createElement("div",{className:"left-frame"},r.createElement("div",null,r.createElement("div",{className:"panel-33"}),r.createElement("div",{className:"panel-3"},r.createElement(n.Link,{to:"/scales/"},"Scales")),r.createElement("div",{className:"panel-4"},r.createElement(n.Link,{to:"/chords/"},"Chords")),"Scales "===i&&r.createElement(r.Fragment,null,r.createElement("div",{className:"panel-5"}),r.createElement("div",{className:"panel-6"}),r.createElement("div",{className:"panel-7"}),r.createElement("div",{className:"panel-8"}))),r.createElement("div",null,r.createElement("div",{className:"panel-10"}))):"Home"===a?r.createElement("div",{className:"left-frame"},r.createElement("div",null,r.createElement("div",{className:"panel-3"}),r.createElement("div",{className:"panel-6"}),r.createElement("div",{className:"panel-4"})),r.createElement("div",null,r.createElement("div",{className:"panel-10"}))):r.createElement("div",{className:"left-frame"},r.createElement("div",null,r.createElement("div",{className:"panel-3"}),r.createElement("div",{className:"panel-4"}),r.createElement("div",{className:"panel-5"}),r.createElement("div",{className:"panel-6"}),r.createElement("div",{className:"panel-7"}),r.createElement("div",{className:"panel-8"}),r.createElement("div",{className:"panel-9"})),r.createElement("div",null,r.createElement("div",{className:"panel-10"})))}function s(e){var t,a,l=e.currentPage,s=void 0===l?"":l,o=e.currentSubPage,m=void 0===o?"":o,d=e.children,u=(0,n.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(i,{currentPage:s,siteTitle:(null===(t=u.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",currentSubPage:m}),r.createElement("div",{className:"wrap",id:"gap"},r.createElement(c,{currentPage:s,currentSubPage:m,siteTitle:(null===(a=u.site.siteMetadata)||void 0===a?void 0:a.title)||"Title"}),r.createElement("div",{className:"right-frame"},r.createElement("div",{className:"bar-panel"},r.createElement("div",{className:"bar-6"}),r.createElement("div",{className:"bar-7"}),r.createElement("div",{className:"bar-8"}),r.createElement("div",{className:"bar-9"},r.createElement("div",{className:"bar-9-inside"}))),r.createElement("div",{className:"runner"},r.createElement("div",{className:"corner-bg"},r.createElement("div",{className:"corner"}))),r.createElement("div",{className:"content"},d,r.createElement("footer",{className:"page-footer go-center"},r.createElement("div",{className:"lcars-bar-slice-top"}),r.createElement("div",{className:"lcars-bar"},r.createElement("div",{className:"lcars-bar-inner"},r.createElement("div",{className:"lcars-bar-cutout"}))),"© ",(new Date).getFullYear()," Maria Mateescu, Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),", style inspired by"," ",r.createElement("a",{href:"https://thelcars.com"},"LCARS"))))))}},9267:function(e,t,a){var r=a(1319),n=a(7294);t.Z=function(e){if(null==e.setNote)return n.createElement(n.Fragment,null,(0,r.l3)(e.note));var t=(0,n.useState)(!0),a=t[0],l=t[1];return n.createElement("form",null,n.createElement("input",{type:"text",className:a?"lcars-form-control lcars-is-valid":"lcars-form-control lcars-is-invalid",placeholder:(0,r.l3)(e.note),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:function(t){try{e.setNote((0,r.pb)(t.target.value)),l(!0)}catch(a){l(!1)}}}))}},190:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(9267);function l(e){var t=e.notes;return null==t?r.createElement("div",null):r.createElement("div",{className:"lcars-card"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"d-inline-flex flex-wrap pl-2 pr-2 bd-highlight "},t.map((function(e,t){return r.createElement("h2",{className:"d-flex bd-highlight px-2"},r.createElement(n.Z,{key:t,note:e,setNote:null}))})))))}},7431:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(5414),l=a(5444);function i(e){var t,a,i=e.description,c=void 0===i?"":i,s=(e.lang,e.meta,e.title),o=e.keywords,m=void 0===o?[]:o,d=(0,l.useStaticQuery)("63159454").site,u=c||d.siteMetadata.description;null===(t=d.siteMetadata)||void 0===t||t.title;return r.createElement(r.Fragment,null,r.createElement(n.q,null,r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:u}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=d.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"og:title",content:s}),r.createElement("meta",{name:"og:description",content:u}),r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{name:"keywords",content:m.join(",")}),r.createElement("title",null,s)))}},1319:function(e,t,a){function r(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,{yZ:function(){return m},W5:function(){return d},w:function(){return u},l3:function(){return h},x7:function(){return N},pb:function(){return g},Y:function(){return A},UV:function(){return M}});var l=[2,2,1,2,2,2,1],i=[2,1,2,2,1,3,1],c=[2,1,2,2,1,2,2],s=[1,1,1,1,1,1,1,1,1,1,1],o=[2,1,2,1,2,1,2,1];function m(e,t){var a=[e],n=[0],m=!1;switch(t){case"CHROMATIC":n=s;break;case"NATURAL":var u=d(e);m=-1==u.modifier||"F"==u.base&&0==u.modifier,n=c;break;case"HARMONIC":var v=d(e);m=-1==v.modifier||"F"==v.base&&0==v.modifier,n=i;break;case"MAJOR":n=l,m=-1==e.modifier||"F"==e.base&&0==e.modifier;break;case"DIMINISHED":n=o}for(var E,b=e,h=r(n);!(E=h()).done;){for(var N=E.value,p=0;p<N;p++)b=f(b,m);a.push(b)}return a}function d(e){for(var t=e,a=0;a<3;a++)t=f(t,!0);return t}function u(e){for(var t=e,a=0;a<3;a++)t=v(t,!0);return t}function f(e,t){return-1==e.modifier?{base:e.base,modifier:0}:1==e.modifier?"E"==e.base||"B"==e.base?t?{base:E(E(e.base)),modifier:-1}:{base:E(e.base),modifier:1}:{base:E(e.base),modifier:0}:"E"==e.base||"B"==e.base?{base:E(e.base),modifier:0}:t?{base:E(e.base),modifier:-1}:{base:e.base,modifier:1}}function v(e,t){return 1==e.modifier?{base:e.base,modifier:0}:-1==e.modifier?("F"==e.base||"C"==e.base)&&t?{base:b(e.base),modifier:-1}:{base:b(e.base),modifier:0}:"F"==e.base||"C"==e.base?{base:b(e.base),modifier:0}:t?{base:e.base,modifier:-1}:{base:b(e.base),modifier:1}}function E(e){return"G"==e?"A":String.fromCharCode(e.charCodeAt(0)+1)}function b(e){return"A"==e?"G":String.fromCharCode(e.charCodeAt(0)-1)}function h(e){return e.base+function(e){if(0==e.modifier)return"";if(1==e.modifier)return"♯";if(-1==e.modifier)return"♭";return""}(e)}function N(e){for(var t,a=h(e.tonic)+function(e){switch(e){case"MAJOR":return"";case"MINOR":return"-";case"DIMINISHED":return"dim"}}(e.type),n=r(e.addOns);!(t=n()).done;){a+=p(t.value)}return a}function p(e){if(7==e.index){return 0==e.modifier?"maj7":-1==e.modifier?"7":"8"}var t=e.index>5?e.index.toString():(e.index+8).toString();return t.length>1?0==e.modifier?"("+t+")":-1==e.modifier?"(b"+t+")":"(#"+t+")":0==e.modifier?t:-1==e.modifier?"b"+t:"#"+t}function g(e){if(console.log("NoteParse:"+e+"\n"),e.length>2)throw"Invalid Note";var t=String.fromCharCode(e.charCodeAt(0));if(!["A","B","C","D","E","F","G"].includes(t))throw console.log("Wrong Base:"+t),"Invalid Note";if(1==e.length)return{base:t,modifier:0};var a="#"===e.charAt(1)||"♯"==e.charAt(1)?1:"b"===e.charAt(1)||"♭"==e.charAt(1)?-1:0;if(0==a&&e.length>1)throw"Invalid note";return{base:t,modifier:a}}var w={dim:"DIMINISHED","Δ":"DIMINISHED",min:"MINOR","-":"MINOR",minor:"MINOR",maj:"MAJOR"},y=/^(maj7|(#|\u266F|\u266D|b)?\d|\((#|\u266F|\u266D|b)?\d+\))/gm;function A(e){var t=e.match("^(A|B|C|D|E|F|G)(#|♯|♭|b)?");if(null==t||0==t.length)throw console.log(e),"Invalid Chord";var a=g(t[0]),r=e.slice(t[0].length);console.log("Note Excluded:"+r);var n="MAJOR",l="";for(var i in w)w.hasOwnProperty(i)&&r.startsWith(i)&&(console.log("starts with "+i),n=w[i],l=i);r=r.slice(l.length);for(var c=[];r.length>0;){var s=r.match(y);if(console.log("Match:"+JSON.stringify(s)+"\n"),null==s)throw"Invalid Chord";var o=s[0];o.startsWith("(")?c.push(I(o.slice(1,o.length-1))):c.push(I(o)),r=r.slice(o.length)}return{tonic:a,type:n,addOns:c}}function I(e){if(e.length<1)throw"Invalid";if(e.startsWith("maj"))return{index:7,modifier:0};if(e.startsWith("7"))return{index:7,modifier:-1};var t=1,a=0;if("#"===e.charAt(0)||"♯"==e.charAt(0)||"b"===e.charAt(0)||"♭"==e.charAt(0)?(t=parseInt(e.slice(1)),a="#"===e.charAt(0)||"♯"==e.charAt(0)?1:-1):(t=parseInt(e),a=0),0==t||1==t||8==t||null==t)throw"invalid";return{index:t,modifier:a}}function M(e){var t=m(e.tonic,"MAJOR"),a=[];switch(e.type){case"DIMINISHED":a=m(e.tonic,"DIMINISHED");break;case"MAJOR":a=t;break;case"MINOR":a=m(e.tonic,"NATURAL")}for(var n,l=[a[0],a[2],a[4]],i=r(e.addOns);!(n=i()).done;){var c=n.value,s=c.index<t.length?c.index-1:c.index%t.length;0==c.modifier?l.push(t[s]):-1==c.modifier?l.push(v(t[s],!0)):l.push(f(t[s],!1))}return l}},1495:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(1319),l=a(190),i=a(7494),c=a(7431);var s=function(e){if(null==e.setChord)return r.createElement("h2",{className:"d-flex bd-highlight px-2"},(0,n.x7)(e.chord));var t=(0,r.useState)(!0),a=t[0],l=t[1];return r.createElement("form",null,r.createElement("input",{type:"text",className:a?"lcars-form-control lcars-is-valid":"lcars-form-control lcars-is-invalid",placeholder:(0,n.x7)(e.chord),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:function(t){try{e.setChord&&e.setChord((0,n.Y)(t.target.value)),l(!0)}catch(a){l(!1)}}}))};function o(){var e=(0,r.useState)({tonic:{base:"C",modifier:0},type:"MAJOR",addOns:[]}),t=e[0],a=e[1];return r.createElement(i.Z,{currentPage:"Music",currentSubPage:"Chords"},r.createElement(c.Z,{title:"Chords",description:"Given chord find all the notes you can play in jazz improv.",keywords:["music","theory","chords","jazz","generate","notes"]}),r.createElement("div",null,r.createElement("h2",null,"Main Chord"),r.createElement("p",null,r.createElement(s,{chord:t,setChord:a}))),r.createElement("div",null,r.createElement("h2",null,"Available Notes:"),r.createElement("p",null,r.createElement(l.Z,{notes:(0,n.UV)(t)}))))}}}]);
//# sourceMappingURL=component---src-pages-chords-tsx-35513752cde158880e7b.js.map