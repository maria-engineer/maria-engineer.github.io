(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[367],{7925:function(t,e,n){"use strict";var o=n(146),i=n(7294),r=n(917);e.Z=function(t){if(null==t||null==t.setNote)return(0,r.tZ)(i.Fragment,null,(0,o.l3)(t.note));const{0:e,1:n}=(0,i.useState)(!0);return(0,r.tZ)("input",{type:"text",className:e?"lcars-form-control lcars-is-valid":"lcars-form-control lcars-is-invalid",placeholder:(0,o.l3)(t.note),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:e=>{try{t.setNote((0,o.pb)(e.target.value)),n(!0)}catch(i){n(!1)}}})}},8424:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var o=n(7925),i=n(917);function r(t){const e=t.notes;return null==e?(0,i.tZ)("div",null):(0,i.tZ)("div",{className:"d-inline-flex flex-wrap pl-2 pr-2 bd-highlight "},e.map(((t,e)=>(0,i.tZ)("h2",{className:"d-flex bd-highlight px-2"},(0,i.tZ)(o.Z,{key:e,note:t,setNote:null})))))}},146:function(t,e,n){"use strict";n.d(e,{UV:function(){return N},W5:function(){return u},WP:function(){return f},Y:function(){return w},il:function(){return p},l3:function(){return b},pb:function(){return x},w:function(){return d},x7:function(){return g},yZ:function(){return c}});const o=[2,2,1,2,2,2,1],i=[2,1,2,2,1,3,1],r=[2,1,2,2,1,2,2],s=[1,1,1,1,1,1,1,1,1,1,1],a=[2,1,2,1,2,1,2,1],l=[1,2,1,2,2,2,2];function c(t,e){const n=[t];let c=[0],d=!1;switch(e){case"CHROMATIC":c=s;break;case"NATURAL":const e=u(t);d=-1==e.modifier||"F"==e.base&&0==e.modifier,c=r;break;case"HARMONIC":const n=u(t);d=-1==n.modifier||"F"==n.base&&0==n.modifier,c=i;break;case"MAJOR":c=o,d=-1==t.modifier||"F"==t.base&&0==t.modifier;break;case"DIMINISHED":c=a;break;case"ALTERED":c=l}let p=t;for(let o of c){for(let t=0;t<o;t++)p=f(p,d);n.push(p)}return n}function u(t){let e=t;for(let n=0;n<3;n++)e=f(e,!0);return e}function d(t){let e=t;for(let n=0;n<3;n++)e=p(e,!0);return e}function f(t,e){return-1==t.modifier?{base:t.base,modifier:0}:1==t.modifier?"E"==t.base||"B"==t.base?e?{base:h(h(t.base)),modifier:-1}:{base:h(t.base),modifier:1}:{base:h(t.base),modifier:0}:"E"==t.base||"B"==t.base?{base:h(t.base),modifier:0}:e?{base:h(t.base),modifier:-1}:{base:t.base,modifier:1}}function p(t,e){return 1==t.modifier?{base:t.base,modifier:0}:-1==t.modifier?("F"==t.base||"C"==t.base)&&e?{base:m(t.base),modifier:-1}:{base:m(t.base),modifier:0}:"F"==t.base||"C"==t.base?{base:m(t.base),modifier:0}:e?{base:t.base,modifier:-1}:{base:m(t.base),modifier:1}}function h(t){return"G"==t?"A":String.fromCharCode(t.charCodeAt(0)+1)}function m(t){return"A"==t?"G":String.fromCharCode(t.charCodeAt(0)-1)}function b(t){return t.base+function(t){if(0==t.modifier)return"";if(1==t.modifier)return"♯";if(-1==t.modifier)return"♭";return""}(t)}function g(t){let e=b(t.tonic)+function(t){switch(t){case"MAJOR":return"";case"MINOR":return"-";case"DIMINISHED":return"dim"}}(t.type);for(let n of t.addOns)e+=k(n);return null!==t.substitution&&(e=e+"/"+t.substitution),e}function k(t){if(7==t.index){const e="7";return 0==t.modifier?"maj"+e:-1==t.modifier?e:"8"}{const e=t.index>5?t.index.toString():(t.index+8).toString();return e.length>1?0==t.modifier?"("+e+")":-1==t.modifier?"(b"+e+")":"(#"+e+")":0==t.modifier?e:-1==t.modifier?"b"+e:"#"+e}}function x(t){if(console.log("NoteParse:"+t+"\n"),t.length>2)throw"Invalid Note";const e=String.fromCharCode(t.charCodeAt(0));if(!["A","B","C","D","E","F","G"].includes(e))throw console.log("Wrong Base:"+e),"Invalid Note";if(1==t.length)return{base:e,modifier:0};const n="#"===t.charAt(1)||"♯"==t.charAt(1)?1:"b"===t.charAt(1)||"♭"==t.charAt(1)?-1:0;if(0==n&&t.length>1)throw"Invalid note";return{base:e,modifier:n}}const v={dim:"DIMINISHED",h:"DIMINISHED","Δ":"DIMINISHED",min:"MINOR","-":"MINOR",minor:"MINOR",M:"MAJOR"},Z=/^(sus|maj7|\^7|add\d+|(#|\u266F|\u266D|b)?\d|\((#|\u266F|\u266D|b)?\d+\))/gm,y="^(A|B|C|D|E|F|G)(#|♯|♭|b)?";function w(t){const e=t.match(y);if(null==e||0==e.length)throw console.log(t),"Invalid Chord";const n=x(e[0]);let o=t.slice(e[0].length);console.log("Note Excluded:"+o);let i="MAJOR",r="";for(var s in v)v.hasOwnProperty(s)&&o.startsWith(s)&&(console.log("starts with "+s),i=v[s],r=s);o=o.slice(r.length);let a=[];for(;o.length>0;){let t=o.match(Z);if(console.log("Match:"+JSON.stringify(t)+"\n"),null==t)throw"Invalid Chord";{const e=t[0];e.startsWith("(")?a.push(C(e.slice(1,e.length-1))):a.push(C(e)),o=o.slice(e.length)}}let l=null,c=t.match("/(A|B|C|D|E|F|G)$");return null!=c&&(l=c[0]),{tonic:n,type:i,addOns:a,substitution:l}}function C(t){if(t.length<1)throw"Invalid";if(t.startsWith("maj"))return{index:7,modifier:0};if(t.startsWith("sus"))return{index:4,modifier:0};if(t.startsWith("7"))return{index:7,modifier:-1};if(t.startsWith("^"))return{index:7,modifier:0};let e=1,n=0;if("#"!==t.charAt(0)&&"♯"!=t.charAt(0)&&"b"!==t.charAt(0)&&"♭"!=t.charAt(0)||(e=parseInt(t.slice(1)),n="#"===t.charAt(0)||"♯"==t.charAt(0)?1:-1),t.startsWith("add")?(e=parseInt(t.slice(3)),n=0):(e=parseInt(t),n=0),0==e||1==e||8==e||null==e)throw"invalid";return{index:e,modifier:n}}function N(t){const e=c(t.tonic,"MAJOR");var n=[];switch(t.type){case"DIMINISHED":n=c(t.tonic,"DIMINISHED");break;case"MAJOR":n=e;break;case"MINOR":n=c(t.tonic,"NATURAL")}var o=[I(n[0],t.tonic.base,t.substitution),I(n[2],t.tonic.base,t.substitution),I(n[4],t.tonic.base,t.substitution)];for(var i of t.addOns){const n=i.index<e.length?i.index-1:i.index%e.length;0==i.modifier?o.push(e[n]):-1==i.modifier?o.push(I(p(e[n],!0),t.tonic.base,t.substitution)):o.push(I(f(e[n],!1),t.tonic.base,t.substitution))}return o}function I(t,e,n){return null===n?t:t.base==e?{base:n,modifier:t.modifier}:t}},4038:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var o=n(4316),i=n(7294),r=n(146),s=n(8424),a=n(6791),l=n(4001),c=n(9571),u=n(917);var d=function(t){if(null==t.setChord)return(0,u.tZ)("h2",{className:"d-flex bd-highlight px-2"},(0,r.x7)(t.chord));{const{0:e,1:n}=(0,i.useState)(!0),o=e=>{try{t.setChord&&t.setChord((0,r.Y)(e.target.value)),n(!0)}catch(o){n(!1)}};return(0,u.tZ)("div",{className:"buttons d-flex flex-row mb-3 ml-3"},(0,u.tZ)("input",{"data-bs-theme":"dark",type:"text",className:e?"mr-21 lcars-form-control lcars-lcars-is-valid":"mr-21 lcars-form-control lcars-is-invalid",placeholder:(0,r.x7)(t.chord),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:o}),(0,u.tZ)(c.oT,{className:e?"orange":"c46",disabled:!e,onClick:()=>t.setChord({tonic:(0,r.il)(t.chord.tonic,!0),type:t.chord.type,addOns:t.chord.addOns,substitution:t.chord.substitution})},"Transpose down"),(0,u.tZ)(c.oT,{className:e?"orange":"c46",disabled:!e,onClick:()=>t.setChord({tonic:(0,r.WP)(t.chord.tonic,!1),type:t.chord.type,addOns:t.chord.addOns,substitution:t.chord.substitution})},"Transpose up"))}},f=n(7925);const p=n(7585),h=(0,o.Z)("div",{target:"e1cgpokp4"})({name:"1mqqpl",styles:"width:1095px;min-height:1880px;background-color:white;padding:50px 40px 10px 40px;justify-items:start"}),m=(0,o.Z)("div",{target:"e1cgpokp3"})({name:"j702qd",styles:"font-size:xxx-large;font-style:bold;text-align:center;color:black"}),b=(0,o.Z)("div",{target:"e1cgpokp2"})({name:"7agyji",styles:"color:black;text-align:left;font-size:medium"}),g=(0,o.Z)("div",{target:"e1cgpokp1"})({name:"c528f3",styles:"width:250px;border-right:1px;border-left:2px;border-top:0px;border-bottom:0px;border-color:black;margin-right:-1px;height:60px;margin-bottom:5px;display:flex;font-size:auto;color:black;border-style:solid;flex-wrap:nowrap;justify-content:stretch;align-content:center"}),k=(0,o.Z)("div",{target:"e1cgpokp0"})({name:"xrtz4",styles:"color:black;text-align:left;margin-right:6px;display:flex;justify-content:stretch;word-wrap:nowrap;flex-wrap:nowrap;align-self:center;flex-grow:1;flex-shrink:1;font-size:20px"});function x(){const{0:t,1:e}=(0,i.useState)({tonic:{base:"C",modifier:0},type:"MAJOR",addOns:[],substitution:null});return(0,u.tZ)(a.Z,{currentPage:"Music",currentSubPage:"Chords"},(0,u.tZ)(l.Z,{title:"Chords",description:"Given chord find all the notes you can play in jazz improv.",keywords:["music","theory","chords","ireal","song","improvise","jazz improvisation","note generation","translate","what notes can I use","jazz","generate","notes","improv","jazz improvisation chord generation"]}),(0,u.tZ)("div",null,(0,u.tZ)("h2",null,"Main Chord"),(0,u.tZ)("p",null,(0,u.tZ)(d,{chord:t,setChord:e}))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null,"Available Notes:"),(0,u.tZ)("div",null,(0,u.tZ)("div",{className:"lcars-card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)(s.Z,{notes:(0,r.UV)(t)}))))),(0,u.tZ)("div",null,(0,u.tZ)("h2",null,"Full Song"),(0,u.tZ)("p",null,(0,u.tZ)(v,null))))}function v(){const{0:t,1:e}=(0,i.useState)((()=>{var t=null;return"undefined"!=typeof window&&(t=window.localStorage.getItem("ireal-url")),t||null})),{0:n,1:o}=(0,i.useState)(void 0),{0:s,1:a}=(0,i.useState)(""),{0:l,1:d}=(0,i.useState)(void 0);return(0,u.tZ)("div",null,(0,u.tZ)("div",{className:"d-flex flex-row"},(0,u.tZ)("div",{className:"align-self-center mr-5"},"iReal URL:","  "),(0,u.tZ)("input",{type:"text",className:"lcars-form-control lcars-big-input",placeholder:null!=t?t:"","aria-label":"Note","aria-describedby":"basic-addon1",onChange:t=>e(t.target.value)}),(0,u.tZ)(c.zx,{className:t?"orange":"c46",disabled:null===t,onClick:()=>{const e=p(t);if(e&&t){"undefined"!=typeof window&&window.localStorage.setItem("ireal-url",t);const n=e.songs[0],i=n.music.measures;d((0,r.pb)(n.key)),o({bars:i.map((t=>({chords:t.map((t=>{var e;return null!==(e=(0,r.Y)(t))&&void 0!==e?e:null}))})))}),a(n.title)}}},"Process")),(0,u.tZ)("div",null,"To get the right url to paste here, go to the"," ",(0,u.tZ)("a",{href:"https://www.irealb.com/forums/forumdisplay.php?3-Songs"},"iReal forum"),", and find the song you like. Once you have found it you can right click and copy the url, then you can paste it here. I have not yet implemented all the functionalities of the iReal app, so some notes may be missing."),l&&(0,u.tZ)(h,{id:"a4-print-song"},(0,u.tZ)(m,null,null!=s?s:"Unknown"),(0,u.tZ)(b,{className:"d-flex flex-row justify-content-start align-content-center"},(0,u.tZ)(c.oT,{className:n&&l?"orange":"c46",disabled:!n||!l,onClick:()=>{o({bars:n.bars.map((t=>({chords:t.chords.map((t=>t?function(t){return{tonic:(0,r.il)(t.tonic,!0),type:t.type,addOns:t.addOns,substitution:null}}(t):t))})))}),d((0,r.il)(l,!0))}},"Transpose down"),(0,u.tZ)(c.oT,{className:n&&l?"orange":"c46",disabled:!n||!l,onClick:()=>{o({bars:n.bars.map((t=>({chords:t.chords.map((t=>t?function(t){return{tonic:(0,r.WP)(t.tonic,!1),type:t.type,addOns:t.addOns,substitution:null}}(t):t))})))}),d((0,r.WP)(l,!0))}},"Transpose up"),(0,u.tZ)("div",null," In the key of ",(0,r.l3)(l))),n&&(0,u.tZ)(Z,{data:n})))}function Z(t){let{data:e}=t;return null===e?(0,u.tZ)("div",null):(0,u.tZ)("div",{className:"flex-wrap d-flex flex-row"},e.bars.map((t=>(0,u.tZ)(g,null,t.chords.map((t=>{const e=void 0===t?void 0:(0,r.UV)(t);return void 0===t||void 0===e||0===e.length?(0,u.tZ)(k,null):(0,u.tZ)(k,null,e.map((t=>(0,u.tZ)(i.Fragment,null,(0,u.tZ)(f.Z,{note:t,setNote:null})," "))))}))))))}},4978:function(t){let e,n,o,i,r,s,a,l,c,u,d,f;const p=[{token:"XyQ",description:"Empty space"},{token:/\*\w/,description:"Section marker"},{token:/<(.*?)>/,description:"Comments inside carets",operation:function(t){"d.c. al 3rd ending"===t[1].toLowerCase()&&(s=!0);"d.c. al fine"===t[1].toLowerCase()&&(l=!0);"d.c. al coda"===t[1].toLowerCase()&&(c=!0);"d.s. al coda"===t[1].toLowerCase()&&(u=!0);"fine"===t[1].toLowerCase()&&(a=e.length)}},{token:/T(\d+)/,description:"Time signature",operation:function(t){r=t[1]}},{token:"x",description:"Repeat previous measure in current measure",operation:function(){e[e.length-1]=e[e.length-2]}},{token:"Kcl",description:"Repeat previous measure and create new measure",operation:function(){e[e.length]=e[e.length-1]}},{token:"r|XyQ",description:"Repeat previous two measures",operation:function(){e[e.length-1]=e[e.length-3],e[e.length]=e[e.length-2]}},{token:/Y+/,description:"Vertical spacers"},{token:"n",description:"No Chord (N.C)",operation:function(){0===e.length&&e.push([]);e[e.length-1].push(null)}},{token:"p",description:"Pause slash"},{token:"U",description:"Ending measure for player"},{token:"S",description:"Segno",operation:function(){f=e.length-1}},{token:"Q",description:"Coda",operation:function(){d=e.length}},{token:"{",description:"Start repeat marker",operation:function(){h(),n=e.length-1,i=null}},{token:"}",description:"End repeat marker",operation:m},{token:"LZ|",description:"Bar line",operation:h},{token:"|",description:"Bar line",operation:h},{token:"LZ",description:"Bar line",operation:h},{token:"[",description:"Double bar start",operation:h},{token:"]",description:"Double bar end",operation:b},{token:/N(\d)/,description:"Numbered endings",operation:function(t){1===parseInt(t[1])&&(i=e.length-1)}},{token:"Z",description:"Final bar line",operation:b},{token:/[A-GW]{1}[\+\-\^\dhob#suadlt]*(\/[A-G][#b]?)?/,description:"Chord",operation:function(t){0===e.length&&e.push([]);let n=t[0];n.startsWith("W")&&o?n=n.replace("W",o):o=n.split("/")[0];e[e.length-1].push(n)}}];function h(){0!==e.length&&0===e[e.length-1].length||e.push([])}function m(){i||(i=e.length),e.push(...e.slice(n,i)),h()}function b(){s&&(m(),s=!1),l&&(e.push(...e.slice(0,a)),l=!1),c&&(e.push(...e.slice(0,d)),c=!1),u&&(e.push(...e.slice(f,d)),u=!1)}function g(t){for(let e=0;e<p.length;e++){const n=p[e];if("string"==typeof n.token&&t.startsWith(n.token)){n.operation&&n.operation(),g(t.substring(n.token.length).trim());break}if(n.token instanceof RegExp){const e=t.match(n.token);if(e&&0===e.index){n.operation&&n.operation(e),g(t.substring(e[0].length).trim());break}}e===p.length-1&&t.length>1&&g(t.substring(1))}}function k(t){return t.filter((t=>0!==t.length))}t.exports=function(t){return e=[],n=null,i=null,o=null,d=null,f=null,r=null,s=!1,c=!1,u=!1,a=null,l=!1,g(t),{measures:k(e),timeSignature:r,raw:t}}},7585:function(t,e,n){"use strict";const o=/.*?irealb:\/\/([^"]*)/,i="1r34LbKcu7",r=n(6572),s=n(4978);function a(t){const e=t.split(i);return s(r.ireal(e[1]))}t.exports=function(t){const e=o.exec(t),n=decodeURIComponent(e[1]).split("===");return{name:n.length>1?n.pop():void 0,songs:n.map((t=>function(t){const e=t.split(/=+/).filter((t=>""!=t));let n,o,r,s,l,c,u,d,f=null;return 7===e.length&&([n,o,r,s,c,d,f]=e),8===e.length&&e[4].startsWith(i)&&([n,o,r,s,c,u,d,f]=e),8===e.length&&e[5].startsWith(i)&&([n,o,r,s,l,c,d,f]=e),9===e.length&&([n,o,r,s,l,c,u,d,f]=e),{title:n,composer:o,style:r,key:s,transpose:l?parseInt(l):null,music:a(c),compStyle:u,bpm:d?parseInt(d):null,repeats:f?parseInt(f):null}}(t)))}}},6572:function(t,e){"use strict";function n(t){let e=t.split("");for(let n=0;n<5;n++)e[49-n]=t[n],e[n]=t[49-n];for(let n=10;n<24;n++)e[49-n]=t[n],e[n]=t[49-n];return e.join("")}e.ireal=function(t){let e,o="";for(;t.length>50;)e=t.substring(0,50),(t=t.substring(50)).length<2?o+=e:o+=n(e);return o+=t,o}}}]);
//# sourceMappingURL=component---src-pages-chords-tsx-91ba37ec5da02ab6289f.js.map