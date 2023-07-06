"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[31],{7925:function(t,e,n){var i=n(146),r=n(7294),a=n(917);e.Z=function(t){if(null==t||null==t.setNote)return(0,a.tZ)(r.Fragment,null,(0,i.l3)(t.note));const{0:e,1:n}=(0,r.useState)(!0);return(0,a.tZ)("input",{type:"text",className:e?"lcars-form-control lcars-is-valid":"lcars-form-control lcars-is-invalid",placeholder:(0,i.l3)(t.note),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:e=>{try{t.setNote((0,i.pb)(e.target.value)),n(!0)}catch(r){n(!1)}}})}},8424:function(t,e,n){n.d(e,{Z:function(){return a}});var i=n(7925),r=n(917);function a(t){const e=t.notes;return null==e?(0,r.tZ)("div",null):(0,r.tZ)("div",{className:"d-inline-flex flex-wrap pl-2 pr-2 bd-highlight "},e.map(((t,e)=>(0,r.tZ)("h2",{className:"d-flex bd-highlight px-2"},(0,r.tZ)(i.Z,{key:e,note:t,setNote:null})))))}},146:function(t,e,n){n.d(e,{UV:function(){return x},W5:function(){return u},WP:function(){return f},Y:function(){return M},il:function(){return m},l3:function(){return Z},pb:function(){return g},w:function(){return d},x7:function(){return N},yZ:function(){return c}});const i=[2,2,1,2,2,2,1],r=[2,1,2,2,1,3,1],a=[2,1,2,2,1,2,2],s=[1,1,1,1,1,1,1,1,1,1,1],o=[2,1,2,1,2,1,2,1],l=[1,2,1,2,2,2,2];function c(t,e){const n=[t];let c=[0],d=!1;switch(e){case"CHROMATIC":c=s;break;case"NATURAL":const e=u(t);d=-1==e.modifier||"F"==e.base&&0==e.modifier,c=a;break;case"HARMONIC":const n=u(t);d=-1==n.modifier||"F"==n.base&&0==n.modifier,c=r;break;case"MAJOR":c=i,d=-1==t.modifier||"F"==t.base&&0==t.modifier;break;case"DIMINISHED":c=o;break;case"ALTERED":c=l}let m=t;for(let i of c){for(let t=0;t<i;t++)m=f(m,d);n.push(m)}return n}function u(t){let e=t;for(let n=0;n<3;n++)e=f(e,!0);return e}function d(t){let e=t;for(let n=0;n<3;n++)e=m(e,!0);return e}function f(t,e){return-1==t.modifier?{base:t.base,modifier:0}:1==t.modifier?"E"==t.base||"B"==t.base?e?{base:b(b(t.base)),modifier:-1}:{base:b(t.base),modifier:1}:{base:b(t.base),modifier:0}:"E"==t.base||"B"==t.base?{base:b(t.base),modifier:0}:e?{base:b(t.base),modifier:-1}:{base:t.base,modifier:1}}function m(t,e){return 1==t.modifier?{base:t.base,modifier:0}:-1==t.modifier?("F"==t.base||"C"==t.base)&&e?{base:h(t.base),modifier:-1}:{base:h(t.base),modifier:0}:"F"==t.base||"C"==t.base?{base:h(t.base),modifier:0}:e?{base:t.base,modifier:-1}:{base:h(t.base),modifier:1}}function b(t){return"G"==t?"A":String.fromCharCode(t.charCodeAt(0)+1)}function h(t){return"A"==t?"G":String.fromCharCode(t.charCodeAt(0)-1)}function Z(t){return t.base+function(t){if(0==t.modifier)return"";if(1==t.modifier)return"♯";if(-1==t.modifier)return"♭";return""}(t)}function N(t){let e=Z(t.tonic)+function(t){switch(t){case"MAJOR":return"";case"MINOR":return"-";case"DIMINISHED":return"dim"}}(t.type);for(let n of t.addOns)e+=v(n);return null!==t.substitution&&(e=e+"/"+t.substitution),e}function v(t){if(7==t.index){const e="7";return 0==t.modifier?"maj"+e:-1==t.modifier?e:"8"}{const e=t.index>5?t.index.toString():(t.index+8).toString();return e.length>1?0==t.modifier?"("+e+")":-1==t.modifier?"(b"+e+")":"(#"+e+")":0==t.modifier?e:-1==t.modifier?"b"+e:"#"+e}}function g(t){if(console.log("NoteParse:"+t+"\n"),t.length>2)throw"Invalid Note";const e=String.fromCharCode(t.charCodeAt(0));if(!["A","B","C","D","E","F","G"].includes(e))throw console.log("Wrong Base:"+e),"Invalid Note";if(1==t.length)return{base:e,modifier:0};const n="#"===t.charAt(1)||"♯"==t.charAt(1)?1:"b"===t.charAt(1)||"♭"==t.charAt(1)?-1:0;if(0==n&&t.length>1)throw"Invalid note";return{base:e,modifier:n}}const I={dim:"DIMINISHED",h:"DIMINISHED","Δ":"DIMINISHED",min:"MINOR","-":"MINOR",minor:"MINOR",M:"MAJOR"},p=/^(sus|maj7|\^7|add\d+|(#|\u266F|\u266D|b)?\d|\((#|\u266F|\u266D|b)?\d+\))/gm,A="^(A|B|C|D|E|F|G)(#|♯|♭|b)?";function M(t){const e=t.match(A);if(null==e||0==e.length)throw console.log(t),"Invalid Chord";const n=g(e[0]);let i=t.slice(e[0].length);console.log("Note Excluded:"+i);let r="MAJOR",a="";for(var s in I)I.hasOwnProperty(s)&&i.startsWith(s)&&(console.log("starts with "+s),r=I[s],a=s);i=i.slice(a.length);let o=[];for(;i.length>0;){let t=i.match(p);if(console.log("Match:"+JSON.stringify(t)+"\n"),null==t)throw"Invalid Chord";{const e=t[0];e.startsWith("(")?o.push(C(e.slice(1,e.length-1))):o.push(C(e)),i=i.slice(e.length)}}let l=null,c=t.match("/(A|B|C|D|E|F|G)$");return null!=c&&(l=c[0]),{tonic:n,type:r,addOns:o,substitution:l}}function C(t){if(t.length<1)throw"Invalid";if(t.startsWith("maj"))return{index:7,modifier:0};if(t.startsWith("sus"))return{index:4,modifier:0};if(t.startsWith("7"))return{index:7,modifier:-1};if(t.startsWith("^"))return{index:7,modifier:0};let e=1,n=0;if("#"!==t.charAt(0)&&"♯"!=t.charAt(0)&&"b"!==t.charAt(0)&&"♭"!=t.charAt(0)||(e=parseInt(t.slice(1)),n="#"===t.charAt(0)||"♯"==t.charAt(0)?1:-1),t.startsWith("add")?(e=parseInt(t.slice(3)),n=0):(e=parseInt(t),n=0),0==e||1==e||8==e||null==e)throw"invalid";return{index:e,modifier:n}}function x(t){const e=c(t.tonic,"MAJOR");var n=[];switch(t.type){case"DIMINISHED":n=c(t.tonic,"DIMINISHED");break;case"MAJOR":n=e;break;case"MINOR":n=c(t.tonic,"NATURAL")}var i=[S(n[0],t.tonic.base,t.substitution),S(n[2],t.tonic.base,t.substitution),S(n[4],t.tonic.base,t.substitution)];for(var r of t.addOns){const n=r.index<e.length?r.index-1:r.index%e.length;0==r.modifier?i.push(e[n]):-1==r.modifier?i.push(S(m(e[n],!0),t.tonic.base,t.substitution)):i.push(S(f(e[n],!1),t.tonic.base,t.substitution))}return i}function S(t,e,n){return null===n?t:t.base==e?{base:n,modifier:t.modifier}:t}},8420:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var i=n(146),r=n(7294),a=n(8424),s=n(6791),o=n(4001),l=n(7925),c=n(9571),u=n(917);function d(){const{0:t,1:e}=(0,r.useState)({base:"C",modifier:0}),n=(0,i.w)(t),d=(0,i.W5)(t);return(0,u.tZ)(s.Z,{currentPage:"Music",currentSubPage:"Scales"},(0,u.tZ)(o.Z,{title:"Scales",description:"Generate the scales for a note, and the relative scales",keywords:["music","theory","scales","generate","relative","minor","major","notes","dominant"]}),(0,u.tZ)("div",{className:"d-flex flex-wrap"},(0,u.tZ)("div",{className:"pr-2"},(0,u.tZ)("h2",null,"Main Note"),(0,u.tZ)("p",null,(0,u.tZ)(l.Z,{note:t,setNote:e}))),(0,u.tZ)("div",{className:"align-self-end"},(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"buttons"},(0,u.tZ)(c.oT,{className:"orange",onClick:()=>e(n)},(0,u.tZ)("div",{className:"d-flex flex-column mb-2"},(0,u.tZ)("div",null,"Relative Minor:"),(0,u.tZ)(l.Z,{note:n,setNote:null})))))),(0,u.tZ)("div",{className:"align-self-end"},(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"buttons"},(0,u.tZ)(c.oT,{className:"orange",onClick:()=>e(d)}," ",(0,u.tZ)("div",{className:"d-flex flex-column mb-2"},(0,u.tZ)("div",null,"Relative Major: "),(0,u.tZ)(l.Z,{note:d,setNote:null}))))))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null,"Major Scale"),(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"lcars-card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)(a.Z,{notes:(0,i.yZ)(t,"MAJOR")}))))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null,"Natural Minor Scale"),(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"lcars-card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)(a.Z,{notes:(0,i.yZ)(t,"NATURAL")}))))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null," Harmonic Minor Scale "),(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"lcars-card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)(a.Z,{notes:(0,i.yZ)(t,"HARMONIC")}))))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null," Chromatic Scale "),(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"lcars-card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)(a.Z,{notes:(0,i.yZ)(t,"CHROMATIC")}))))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null," Diminished Scale "),(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"lcars-card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)(a.Z,{notes:(0,i.yZ)(t,"DIMINISHED")}))))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null," Altered Scale "),(0,u.tZ)("p",null,(0,u.tZ)("div",{className:"lcars-card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)(a.Z,{notes:(0,i.yZ)(t,"ALTERED")}))))))}}}]);
//# sourceMappingURL=component---src-pages-scales-tsx-18992264cc498a1fb556.js.map