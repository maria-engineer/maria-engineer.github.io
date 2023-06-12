(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[367],{7925:function(e,t,n){"use strict";var r=n(146),o=n(7294),i=n(917);t.Z=function(e){if(null==e.setNote)return(0,i.tZ)(o.Fragment,null,(0,r.l3)(e.note));{const{0:t,1:n}=(0,o.useState)(!0),a=t=>{try{e.setNote((0,r.pb)(t.target.value)),n(!0)}catch(o){n(!1)}};return(0,i.tZ)("input",{type:"text",className:t?"lcars-form-control lcars-is-valid":"lcars-form-control lcars-is-invalid",placeholder:(0,r.l3)(e.note),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:a})}}},8424:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7925),o=n(917);function i(e){const t=e.notes;return null==t?(0,o.tZ)("div",null):(0,o.tZ)("div",{className:"d-inline-flex flex-wrap pl-2 pr-2 bd-highlight "},t.map(((e,t)=>(0,o.tZ)("h2",{className:"d-flex bd-highlight px-2"},(0,o.tZ)(r.Z,{key:t,note:e,setNote:null})))))}},146:function(e,t,n){"use strict";n.d(t,{UV:function(){return w},W5:function(){return d},WP:function(){return f},Y:function(){return N},il:function(){return p},l3:function(){return g},pb:function(){return x},w:function(){return u},x7:function(){return b},yZ:function(){return c}});const r=[2,2,1,2,2,2,1],o=[2,1,2,2,1,3,1],i=[2,1,2,2,1,2,2],a=[1,1,1,1,1,1,1,1,1,1,1],s=[2,1,2,1,2,1,2,1],l=[1,2,1,2,2,2,2];function c(e,t){const n=[e];let c=[0],u=!1;switch(t){case"CHROMATIC":c=a;break;case"NATURAL":const t=d(e);u=-1==t.modifier||"F"==t.base&&0==t.modifier,c=i;break;case"HARMONIC":const n=d(e);u=-1==n.modifier||"F"==n.base&&0==n.modifier,c=o;break;case"MAJOR":c=r,u=-1==e.modifier||"F"==e.base&&0==e.modifier;break;case"DIMINISHED":c=s;break;case"ALTERED":c=l}let p=e;for(let r of c){for(let e=0;e<r;e++)p=f(p,u);n.push(p)}return n}function d(e){let t=e;for(let n=0;n<3;n++)t=f(t,!0);return t}function u(e){let t=e;for(let n=0;n<3;n++)t=p(t,!0);return t}function f(e,t){return-1==e.modifier?{base:e.base,modifier:0}:1==e.modifier?"E"==e.base||"B"==e.base?t?{base:h(h(e.base)),modifier:-1}:{base:h(e.base),modifier:1}:{base:h(e.base),modifier:0}:"E"==e.base||"B"==e.base?{base:h(e.base),modifier:0}:t?{base:h(e.base),modifier:-1}:{base:e.base,modifier:1}}function p(e,t){return 1==e.modifier?{base:e.base,modifier:0}:-1==e.modifier?("F"==e.base||"C"==e.base)&&t?{base:m(e.base),modifier:-1}:{base:m(e.base),modifier:0}:"F"==e.base||"C"==e.base?{base:m(e.base),modifier:0}:t?{base:e.base,modifier:-1}:{base:m(e.base),modifier:1}}function h(e){return"G"==e?"A":String.fromCharCode(e.charCodeAt(0)+1)}function m(e){return"A"==e?"G":String.fromCharCode(e.charCodeAt(0)-1)}function g(e){return e.base+function(e){if(0==e.modifier)return"";if(1==e.modifier)return"♯";if(-1==e.modifier)return"♭";return""}(e)}function b(e){let t=g(e.tonic)+function(e){switch(e){case"MAJOR":return"";case"MINOR":return"-";case"DIMINISHED":return"dim"}}(e.type);for(let n of e.addOns)t+=k(n);return t}function k(e){if(7==e.index){const t="7";return 0==e.modifier?"maj"+t:-1==e.modifier?t:"8"}{const t=e.index>5?e.index.toString():(e.index+8).toString();return t.length>1?0==e.modifier?"("+t+")":-1==e.modifier?"(b"+t+")":"(#"+t+")":0==e.modifier?t:-1==e.modifier?"b"+t:"#"+t}}function x(e){if(console.log("NoteParse:"+e+"\n"),e.length>2)throw"Invalid Note";const t=String.fromCharCode(e.charCodeAt(0));if(!["A","B","C","D","E","F","G"].includes(t))throw console.log("Wrong Base:"+t),"Invalid Note";if(1==e.length)return{base:t,modifier:0};const n="#"===e.charAt(1)||"♯"==e.charAt(1)?1:"b"===e.charAt(1)||"♭"==e.charAt(1)?-1:0;if(0==n&&e.length>1)throw"Invalid note";return{base:t,modifier:n}}const Z={dim:"DIMINISHED",h:"DIMINISHED","Δ":"DIMINISHED",min:"MINOR","-":"MINOR",minor:"MINOR",M:"MAJOR"},v=/^(sus|maj7|\^7|add\d+|(#|\u266F|\u266D|b)?\d|\((#|\u266F|\u266D|b)?\d+\))/gm,y="^(A|B|C|D|E|F|G)(#|♯|♭|b)?";function N(e){const t=e.match(y);if(null==t||0==t.length)throw console.log(e),"Invalid Chord";const n=x(t[0]);let r=e.slice(t[0].length);console.log("Note Excluded:"+r);let o="MAJOR",i="";for(var a in Z)Z.hasOwnProperty(a)&&r.startsWith(a)&&(console.log("starts with "+a),o=Z[a],i=a);r=r.slice(i.length);let s=[];for(;r.length>0;){let e=r.match(v);if(console.log("Match:"+JSON.stringify(e)+"\n"),null==e)throw"Invalid Chord";{const t=e[0];t.startsWith("(")?s.push(C(t.slice(1,t.length-1))):s.push(C(t)),r=r.slice(t.length)}}return{tonic:n,type:o,addOns:s}}function C(e){if(e.length<1)throw"Invalid";if(e.startsWith("maj"))return{index:7,modifier:0};if(e.startsWith("sus"))return{index:4,modifier:0};if(e.startsWith("7"))return{index:7,modifier:-1};if(e.startsWith("^"))return{index:7,modifier:0};let t=1,n=0;if("#"!==e.charAt(0)&&"♯"!=e.charAt(0)&&"b"!==e.charAt(0)&&"♭"!=e.charAt(0)||(t=parseInt(e.slice(1)),n="#"===e.charAt(0)||"♯"==e.charAt(0)?1:-1),e.startsWith("add")?(t=parseInt(e.slice(3)),n=0):(t=parseInt(e),n=0),0==t||1==t||8==t||null==t)throw"invalid";return{index:t,modifier:n}}function w(e){const t=c(e.tonic,"MAJOR");var n=[];switch(e.type){case"DIMINISHED":n=c(e.tonic,"DIMINISHED");break;case"MAJOR":n=t;break;case"MINOR":n=c(e.tonic,"NATURAL")}var r=[n[0],n[2],n[4]];for(var o of e.addOns){const e=o.index<t.length?o.index-1:o.index%t.length;0==o.modifier?r.push(t[e]):-1==o.modifier?r.push(p(t[e],!0)):r.push(f(t[e],!1))}return r}},4038:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(4316),o=n(7294),i=n(146),a=n(8424),s=n(6791),l=n(4001),c=n(9571),d=n(917);var u=function(e){if(null==e.setChord)return(0,d.tZ)("h2",{className:"d-flex bd-highlight px-2"},(0,i.x7)(e.chord));{const{0:t,1:n}=(0,o.useState)(!0),r=t=>{try{e.setChord&&e.setChord((0,i.Y)(t.target.value)),n(!0)}catch(r){n(!1)}};return(0,d.tZ)("div",{className:"buttons d-flex flex-row mb-3 ml-3"},(0,d.tZ)("input",{"data-bs-theme":"dark",type:"text",className:t?"mr-21 lcars-form-control lcars-lcars-is-valid":"mr-21 lcars-form-control lcars-is-invalid",placeholder:(0,i.x7)(e.chord),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:r}),(0,d.tZ)(c.oT,{className:t?"orange":"c46",disabled:!t,onClick:()=>e.setChord({tonic:(0,i.il)(e.chord.tonic,!0),type:e.chord.type,addOns:e.chord.addOns})},"Transpose down"),(0,d.tZ)(c.oT,{className:t?"orange":"c46",disabled:!t,onClick:()=>e.setChord({tonic:(0,i.WP)(e.chord.tonic,!1),type:e.chord.type,addOns:e.chord.addOns})},"Transpose up"))}},f=n(7925);const p=n(7585),h=(0,r.Z)("div",{target:"e1cgpokp4"})({name:"1mqqpl",styles:"width:1095px;min-height:1880px;background-color:white;padding:50px 40px 10px 40px;justify-items:start"}),m=(0,r.Z)("div",{target:"e1cgpokp3"})({name:"j702qd",styles:"font-size:xxx-large;font-style:bold;text-align:center;color:black"}),g=(0,r.Z)("div",{target:"e1cgpokp2"})({name:"7agyji",styles:"color:black;text-align:left;font-size:medium"}),b=(0,r.Z)("div",{target:"e1cgpokp1"})({name:"c528f3",styles:"width:250px;border-right:1px;border-left:2px;border-top:0px;border-bottom:0px;border-color:black;margin-right:-1px;height:60px;margin-bottom:5px;display:flex;font-size:auto;color:black;border-style:solid;flex-wrap:nowrap;justify-content:stretch;align-content:center"}),k=(0,r.Z)("div",{target:"e1cgpokp0"})({name:"xrtz4",styles:"color:black;text-align:left;margin-right:6px;display:flex;justify-content:stretch;word-wrap:nowrap;flex-wrap:nowrap;align-self:center;flex-grow:1;flex-shrink:1;font-size:20px"});function x(){const{0:e,1:t}=(0,o.useState)({tonic:{base:"C",modifier:0},type:"MAJOR",addOns:[]});return(0,d.tZ)(s.Z,{currentPage:"Music",currentSubPage:"Chords"},(0,d.tZ)(l.Z,{title:"Chords",description:"Given chord find all the notes you can play in jazz improv.",keywords:["music","theory","chords","jazz","generate","notes","improv","jazz improvisation chord generation"]}),(0,d.tZ)("div",null,(0,d.tZ)("h2",null,"Main Chord"),(0,d.tZ)("p",null,(0,d.tZ)(u,{chord:e,setChord:t}))),(0,d.tZ)("div",null,(0,d.tZ)("h2",null,"Available Notes:"),(0,d.tZ)("div",null,(0,d.tZ)("div",{className:"lcars-card"},(0,d.tZ)("div",{className:"card-body"},(0,d.tZ)(a.Z,{notes:(0,i.UV)(e)}))))),(0,d.tZ)("div",null,(0,d.tZ)("h2",null,"Full Song"),(0,d.tZ)("p",null,(0,d.tZ)(Z,null))))}function Z(){const{0:e,1:t}=(0,o.useState)((()=>{const e=localStorage.getItem("ireal-url");return e||null})),{0:n,1:r}=(0,o.useState)(void 0),{0:a,1:s}=(0,o.useState)(""),{0:l,1:u}=(0,o.useState)(void 0);return(0,d.tZ)("div",null,(0,d.tZ)("div",{className:"d-flex flex-row"},(0,d.tZ)("div",{className:"align-self-center mr-5"},"iReal URL:","  "),(0,d.tZ)("input",{type:"text",className:"lcars-form-control lcars-big-input",placeholder:null!=e?e:"","aria-label":"Note","aria-describedby":"basic-addon1",onChange:e=>t(e.target.value)}),(0,d.tZ)(c.zx,{className:e?"orange":"c46",disabled:null===e,onClick:()=>{const t=p(e);if(t&&e){localStorage.setItem("ireal-url",e);const n=t.songs[0],o=n.music.measures;u((0,i.pb)(n.key)),r({bars:o.map((e=>({chords:e.map((e=>{var t;return null!==(t=(0,i.Y)(e))&&void 0!==t?t:null}))})))}),s(n.title)}}},"Process")),(0,d.tZ)("div",null,"To get the right url to paste here, go to the"," ",(0,d.tZ)("a",{href:"https://www.irealb.com/forums/forumdisplay.php?3-Songs"},"iReal forum"),", and find the song you like. Once you have found it you can right click and copy the url, then you can paste it here. I have not yet implemented all the functionalities of the iReal app, so some notes may be missing."),l&&(0,d.tZ)(h,{id:"a4-print-song"},(0,d.tZ)(m,null,null!=a?a:"Unknown"),(0,d.tZ)(g,{className:"d-flex flex-row justify-content-start align-content-center"},(0,d.tZ)(c.oT,{className:n&&l?"orange":"c46",disabled:!n||!l,onClick:()=>{r({bars:n.bars.map((e=>({chords:e.chords.map((e=>e?function(e){return{tonic:(0,i.il)(e.tonic,!0),type:e.type,addOns:e.addOns}}(e):e))})))}),u((0,i.il)(l,!0))}},"Transpose down"),(0,d.tZ)(c.oT,{className:n&&l?"orange":"c46",disabled:!n||!l,onClick:()=>{r({bars:n.bars.map((e=>({chords:e.chords.map((e=>e?function(e){return{tonic:(0,i.WP)(e.tonic,!1),type:e.type,addOns:e.addOns}}(e):e))})))}),u((0,i.WP)(l,!0))}},"Transpose up"),(0,d.tZ)("div",null," In the key of ",(0,i.l3)(l))),n&&(0,d.tZ)(v,{data:n})))}function v(e){let{data:t}=e;return null===t?(0,d.tZ)("div",null):(0,d.tZ)("div",{className:"flex-wrap d-flex flex-row"},t.bars.map((e=>(0,d.tZ)(b,null,e.chords.map((e=>{const t=void 0===e?void 0:(0,i.UV)(e);return void 0===e||void 0===t||0===t.length?(0,d.tZ)(k,null):(0,d.tZ)(k,null,t.map((e=>(0,d.tZ)(o.Fragment,null,(0,d.tZ)(f.Z,{note:e,setNote:null})," "))))}))))))}},4978:function(e){let t,n,r,o,i,a,s,l,c,d,u,f;const p=[{token:"XyQ",description:"Empty space"},{token:/\*\w/,description:"Section marker"},{token:/<(.*?)>/,description:"Comments inside carets",operation:function(e){"d.c. al 3rd ending"===e[1].toLowerCase()&&(a=!0);"d.c. al fine"===e[1].toLowerCase()&&(l=!0);"d.c. al coda"===e[1].toLowerCase()&&(c=!0);"d.s. al coda"===e[1].toLowerCase()&&(d=!0);"fine"===e[1].toLowerCase()&&(s=t.length)}},{token:/T(\d+)/,description:"Time signature",operation:function(e){i=e[1]}},{token:"x",description:"Repeat previous measure in current measure",operation:function(){t[t.length-1]=t[t.length-2]}},{token:"Kcl",description:"Repeat previous measure and create new measure",operation:function(){t[t.length]=t[t.length-1]}},{token:"r|XyQ",description:"Repeat previous two measures",operation:function(){t[t.length-1]=t[t.length-3],t[t.length]=t[t.length-2]}},{token:/Y+/,description:"Vertical spacers"},{token:"n",description:"No Chord (N.C)",operation:function(){0===t.length&&t.push([]);t[t.length-1].push(null)}},{token:"p",description:"Pause slash"},{token:"U",description:"Ending measure for player"},{token:"S",description:"Segno",operation:function(){f=t.length-1}},{token:"Q",description:"Coda",operation:function(){u=t.length}},{token:"{",description:"Start repeat marker",operation:function(){h(),n=t.length-1,o=null}},{token:"}",description:"End repeat marker",operation:m},{token:"LZ|",description:"Bar line",operation:h},{token:"|",description:"Bar line",operation:h},{token:"LZ",description:"Bar line",operation:h},{token:"[",description:"Double bar start",operation:h},{token:"]",description:"Double bar end",operation:g},{token:/N(\d)/,description:"Numbered endings",operation:function(e){1===parseInt(e[1])&&(o=t.length-1)}},{token:"Z",description:"Final bar line",operation:g},{token:/[A-GW]{1}[\+\-\^\dhob#suadlt]*(\/[A-G][#b]?)?/,description:"Chord",operation:function(e){0===t.length&&t.push([]);let n=e[0];n.startsWith("W")&&r?n=n.replace("W",r):r=n.split("/")[0];t[t.length-1].push(n)}}];function h(){0!==t.length&&0===t[t.length-1].length||t.push([])}function m(){o||(o=t.length),t.push(...t.slice(n,o)),h()}function g(){a&&(m(),a=!1),l&&(t.push(...t.slice(0,s)),l=!1),c&&(t.push(...t.slice(0,u)),c=!1),d&&(t.push(...t.slice(f,u)),d=!1)}function b(e){for(let t=0;t<p.length;t++){const n=p[t];if("string"==typeof n.token&&e.startsWith(n.token)){n.operation&&n.operation(),b(e.substring(n.token.length).trim());break}if(n.token instanceof RegExp){const t=e.match(n.token);if(t&&0===t.index){n.operation&&n.operation(t),b(e.substring(t[0].length).trim());break}}t===p.length-1&&e.length>1&&b(e.substring(1))}}function k(e){return e.filter((e=>0!==e.length))}e.exports=function(e){return t=[],n=null,o=null,r=null,u=null,f=null,i=null,a=!1,c=!1,d=!1,s=null,l=!1,b(e),{measures:k(t),timeSignature:i,raw:e}}},7585:function(e,t,n){"use strict";const r=/.*?irealb:\/\/([^"]*)/,o="1r34LbKcu7",i=n(6572),a=n(4978);function s(e){const t=e.split(o);return a(i.ireal(t[1]))}e.exports=function(e){const t=r.exec(e),n=decodeURIComponent(t[1]).split("===");return{name:n.length>1?n.pop():void 0,songs:n.map((e=>function(e){const t=e.split(/=+/).filter((e=>""!=e));let n,r,i,a,l,c,d,u,f=null;return 7===t.length&&([n,r,i,a,c,u,f]=t),8===t.length&&t[4].startsWith(o)&&([n,r,i,a,c,d,u,f]=t),8===t.length&&t[5].startsWith(o)&&([n,r,i,a,l,c,u,f]=t),9===t.length&&([n,r,i,a,l,c,d,u,f]=t),{title:n,composer:r,style:i,key:a,transpose:l?parseInt(l):null,music:s(c),compStyle:d,bpm:u?parseInt(u):null,repeats:f?parseInt(f):null}}(e)))}}},6572:function(e,t){"use strict";function n(e){let t=e.split("");for(let n=0;n<5;n++)t[49-n]=e[n],t[n]=e[49-n];for(let n=10;n<24;n++)t[49-n]=e[n],t[n]=e[49-n];return t.join("")}t.ireal=function(e){let t,r="";for(;e.length>50;)t=e.substring(0,50),(e=e.substring(50)).length<2?r+=t:r+=n(t);return r+=e,r}}}]);
//# sourceMappingURL=component---src-pages-chords-tsx-18c919633b05ef47d5ca.js.map