(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"#002B49",marginBottom:"1.45rem"}},r.a.createElement("div",{className:"d-flex justify-content-between",style:{width:"90%"}},r.a.createElement("h1",{className:"align-self-start pl-5"},r.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),r.a.createElement("div",{className:"d-flex justify-content-end flex-grow-1"},r.a.createElement("p",{className:"align-self-end px-2"},r.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},"Home")),r.a.createElement("p",{className:"align-self-end pl-2"},r.a.createElement(l.Link,{to:"/chords/",style:{color:"white",textDecoration:"none"}},"Chords")))))};i.defaultProps={siteTitle:""};var o=i;a("8ypT"),t.a=function(e){var t,a=e.children,n=Object(l.useStaticQuery)("3649515864");return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{siteTitle:(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.a.createElement("main",null,a),r.a.createElement("footer",{style:{marginTop:"2rem"}},"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a("q1tI"),r=a.n(n);function l(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var o=[2,2,1,2,2,2,1],c=[2,1,2,2,1,3,1],s=[2,1,2,2,1,2,2];function u(e,t){var a=[e],n=[0];switch(t){case"CHROMATIC":for(var r=m(e);r.base!=e.base||r.isFlat!=e.isFlat||r.isSharp!=e.isSharp;)a.push(r),r=m(r);return a;case"NATURAL":n=s;break;case"HARMONIC":n=c;break;case"MAJOR":n=o}for(var i,u=e,d=l(n);!(i=d()).done;){for(var p=i.value,h=0;h<p;h++)u=m(u);a.push(u)}return a}function m(e){return e.isFlat?{base:e.base,isSharp:!1,isFlat:!1}:e.isSharp?"E"==e.base||"B"==e.base?{base:d(e.base),isSharp:!0,isFlat:!1}:{base:d(e.base),isSharp:!1,isFlat:!1}:"E"==e.base||"B"==e.base?{base:d(e.base),isSharp:!1,isFlat:!1}:{base:e.base,isSharp:!0,isFlat:!1}}function d(e){return"G"==e?"A":String.fromCharCode(e.charCodeAt(0)+1)}function p(e){return e.base+function(e){if(e.isSharp==e.isFlat)return"";if(e.isSharp)return"#";if(e.isFlat)return"b";return""}(e)}var h=a("Wbzz");var f=function(e){if(null==e.setNote)return r.a.createElement("h2",{className:"d-flex bd-highlight px-2"},p(e.note));var t=Object(n.useState)(!0),a=t[0],l=t[1];return r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:a?"form-control is-valid":"form-control is-invalid",placeholder:p(e.note),"aria-label":"Note","aria-describedby":"basic-addon1",onChange:function(t){try{e.setNote((a=t.target.value,{base:String.fromCharCode(a.charCodeAt(0)),isSharp:a.length>1&&"#"===a.charAt(1),isFlat:a.length>1&&"b"===a.charAt(1)})),l(!0)}catch(n){l(!1)}var a}}))};function b(e){var t=e.notes;return null==t?null:r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-inline-flex p-2 bd-highlight row-2 "},t.map((function(e,t){return r.a.createElement(f,{key:t,note:e,setNote:null})})))))}var E=a("Bl7J"),v=a("vrFN");function y(){var e=Object(n.useState)({base:"C",isSharp:!1,isFlat:!1}),t=e[0],a=e[1];return r.a.createElement(E.a,null,r.a.createElement(v.a,{title:"Home"}),r.a.createElement("h1",null,"Main Note"),r.a.createElement("p",null,r.a.createElement(f,{note:t,setNote:a})),r.a.createElement("h2",null,"Major Scale"),r.a.createElement("p",null,r.a.createElement(b,{notes:u(t,"MAJOR")})),r.a.createElement("h2",null," Natural Minor Scale "),r.a.createElement("p",null,r.a.createElement(b,{notes:u(t,"NATURAL")})),r.a.createElement("h2",null," Harmonic Minor Scale "),r.a.createElement("p",null,r.a.createElement(b,{notes:u(t,"HARMONIC")})),r.a.createElement("h2",null," Chromatic Scale "),r.a.createElement("p",null,r.a.createElement(b,{notes:u(t,"CHROMATIC")})),r.a.createElement(h.Link,{to:"/page-2/"},"Go to page 2")," ",r.a.createElement("br",null),r.a.createElement(h.Link,{to:"/using-typescript/"},'Go to "Using TypeScript"'))}},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky"),i=a("Wbzz");function o(e){var t,a,n=e.description,o=e.lang,c=e.meta,s=e.title,u=Object(i.useStaticQuery)("63159454").site,m=n||u.siteMetadata.description,d=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return r.a.createElement(l.a,{htmlAttributes:{lang:o},title:s,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a?void 0:a.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-index-tsx-40f38b871a9074ba18d3.js.map