(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ToV3:function(e,r,t){"use strict";var n=t("WXus"),a=t("q1tI"),i=t.n(a);r.a=function(e){if(null==e.setNote)return i.a.createElement("h2",{className:"d-flex bd-highlight px-2"},Object(n.h)(e.note));var r=Object(a.useState)(!0),t=r[0],o=r[1];return i.a.createElement("form",null,i.a.createElement("input",{type:"text",className:t?"form-control is-valid":"form-control is-invalid",placeholder:Object(n.h)(e.note),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:function(r){try{e.setNote(Object(n.b)(r.target.value)),o(!0)}catch(t){o(!1)}}}))}},WXus:function(e,r,t){"use strict";function n(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,"f",(function(){return u})),t.d(r,"d",(function(){return d})),t.d(r,"e",(function(){return f})),t.d(r,"h",(function(){return g})),t.d(r,"g",(function(){return p})),t.d(r,"b",(function(){return I})),t.d(r,"a",(function(){return O})),t.d(r,"c",(function(){return C}));var i=[2,2,1,2,2,2,1],o=[2,1,2,2,1,3,1],c=[2,1,2,2,1,2,2],s=[1,1,1,1,1,1,1,1,1,1,1],l=[2,1,2,1,2,1,2,1];function u(e,r){var t=[e],a=[0],u=!1;switch(r){case"CHROMATIC":a=s;break;case"NATURAL":var f=d(e);u=-1==f.modifier||"F"==f.base&&0==f.modifier,a=c;break;case"HARMONIC":var h=d(e);u=-1==h.modifier||"F"==h.base&&0==h.modifier,a=o;break;case"MAJOR":a=i,u=-1==e.modifier||"F"==e.base&&0==e.modifier;break;case"DIMINISHED":a=l}for(var b,v=e,g=n(a);!(b=g()).done;){for(var p=b.value,A=0;A<p;A++)v=m(v,u);t.push(v)}return t}function d(e){for(var r=e,t=0;t<3;t++)r=m(r,!0);return r}function f(e){for(var r=e,t=0;t<3;t++)r=h(r,!0);return r}function m(e,r){return-1==e.modifier?{base:e.base,modifier:0}:1==e.modifier?"E"==e.base||"B"==e.base?r?{base:b(b(e.base)),modifier:-1}:{base:b(e.base),modifier:1}:{base:b(e.base),modifier:0}:"E"==e.base||"B"==e.base?{base:b(e.base),modifier:0}:r?{base:b(e.base),modifier:-1}:{base:e.base,modifier:1}}function h(e,r){return 1==e.modifier?{base:e.base,modifier:0}:-1==e.modifier?("F"==e.base||"C"==e.base)&&r?{base:v(e.base),modifier:-1}:{base:v(e.base),modifier:0}:"F"==e.base||"C"==e.base?{base:v(e.base),modifier:0}:r?{base:e.base,modifier:-1}:{base:v(e.base),modifier:1}}function b(e){return"G"==e?"A":String.fromCharCode(e.charCodeAt(0)+1)}function v(e){return"A"==e?"G":String.fromCharCode(e.charCodeAt(0)-1)}function g(e){return e.base+function(e){if(0==e.modifier)return"";if(1==e.modifier)return"♯";if(-1==e.modifier)return"♭";return""}(e)}function p(e){for(var r,t=g(e.tonic)+function(e){switch(e){case"MAJOR":return"";case"MINOR":return"-";case"DIMINISHED":return"dim"}}(e.type),a=n(e.addOns);!(r=a()).done;){t+=A(r.value)}return t}function A(e){if(7==e.index){return 0==e.modifier?"maj7":-1==e.modifier?"7":"8"}var r=e.index>5?e.index.toString():(e.index+8).toString();return r.length>1?0==e.modifier?"("+r+")":-1==e.modifier?"(b"+r+")":"(#"+r+")":0==e.modifier?r:-1==e.modifier?"b"+r:"#"+r}function I(e){if(console.log("NoteParse:"+e+"\n"),e.length>2)throw"Invalid Note";var r=String.fromCharCode(e.charCodeAt(0));if(!["A","B","C","D","E","F","G"].includes(r))throw console.log("Wrong Base:"+r),"Invalid Note";if(1==e.length)return{base:r,modifier:0};var t="#"===e.charAt(1)||"♯"==e.charAt(1)?1:"b"===e.charAt(1)||"♭"==e.charAt(1)?-1:0;if(0==t&&e.length>1)throw"Invalid note";return{base:r,modifier:t}}var N={dim:"DIMINISHED","Δ":"diminished",min:"MINOR","-":"MINOR",minor:"MINOR"},E=/^(maj7|(#|\u266F|\u266D|b)?\d|\((#|\u266F|\u266D|b)?\d+\))/gm;function O(e){var r=e.match("^(A|B|C|D|E|F)(#|♯|♭|b)?");if(null==r||0==r.length)throw console.log(e),"Invalid Chord";var t=I(r[0]),n=e.slice(r[0].length);console.log("Note Excluded:"+n);var a="MAJOR",i="";for(var o in N)N.hasOwnProperty(o)&&n.startsWith(o)&&(console.log("starts with "+o),a=N[o],i=o);n=n.slice(i.length);for(var c=[];n.length>0;){var s=n.match(E);if(console.log("Match:"+JSON.stringify(s)+"\n"),null==s)throw"Invalid Chord";var l=s[0];l.startsWith("(")?c.push(y(l.slice(1,l.length-1))):c.push(y(l)),n=n.slice(l.length)}return{tonic:t,type:a,addOns:c}}function y(e){if(e.length<1)throw"Invalid";if(e.startsWith("maj"))return{index:7,modifier:0};if(e.startsWith("7"))return{index:7,modifier:-1};var r=1,t=0;if("#"===e.charAt(0)||"♯"==e.charAt(0)||"b"===e.charAt(0)||"♭"==e.charAt(0)?(r=parseInt(e.slice(1)),t="#"===e.charAt(0)||"♯"==e.charAt(0)?1:-1):(r=parseInt(e),t=0),0==r||1==r||8==r||null==r)throw"invalid";return{index:r,modifier:t}}function C(e){var r=u(e.tonic,"MAJOR"),t=[];switch(e.type){case"DIMINISHED":t=u(e.tonic,"DIMINISHED");break;case"MAJOR":t=r;break;case"MINOR":t=u(e.tonic,"NATURAL")}for(var a,i=[t[0],t[2],t[4]],o=n(e.addOns);!(a=o()).done;){var c=a.value,s=c.index<r.length?c.index-1:c.index%r.length;0==c.modifier?i.push(r[s]):-1==c.modifier?i.push(h(r[s],!0)):i.push(m(r[s],!1))}return i}},jDGg:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var n=t("q1tI"),a=t.n(n),i=t("ToV3");function o(e){var r=e.notes;return null==r?null:a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"d-inline-flex pl-2 pr-2 bd-highlight "},r.map((function(e,r){return a.a.createElement(i.a,{key:r,note:e,setNote:null})})))))}},lRs5:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return u}));var n=t("q1tI"),a=t.n(n),i=t("WXus"),o=t("jDGg"),c=t("Bl7J"),s=t("vrFN");var l=function(e){if(null==e.setChord)return a.a.createElement("h2",{className:"d-flex bd-highlight px-2"},Object(i.g)(e.chord));var r=Object(n.useState)(!0),t=r[0],o=r[1];return a.a.createElement("form",null,a.a.createElement("input",{type:"text",className:t?"form-control is-valid":"form-control is-invalid",placeholder:Object(i.g)(e.chord),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:function(r){try{e.setChord(Object(i.a)(r.target.value)),o(!0)}catch(t){o(!1)}}}))};function u(){var e=Object(n.useState)({tonic:{base:"C",modifier:0},type:"MAJOR",addOns:[]}),r=e[0],t=e[1];return a.a.createElement(c.a,{currentPage:"Music"},a.a.createElement(s.a,{title:"Chords"}),a.a.createElement("div",null,a.a.createElement("h1",null,"Main Chord"),a.a.createElement("p",null,a.a.createElement(l,{chord:r,setChord:t}))),a.a.createElement("div",null,a.a.createElement("h2",null,"Available Notes:"),a.a.createElement("p",null,a.a.createElement(o.a,{notes:Object(i.c)(r)}))))}}}]);
//# sourceMappingURL=component---src-pages-chords-tsx-1c74b012a1e94f7fa912.js.map