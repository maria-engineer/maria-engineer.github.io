/*! For license information please see 6d6a9e5ed5ef9282da8700b4a3b6f8717a33180b-ab35df5707c509e0c4d1.js.LICENSE.txt */
(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[900],{1223:function(e,t,n){"use strict";n.d(t,{A:function(){return He}});var o=n(644),r=n(6540);const l=Math.min,i=Math.max,c=Math.round,s=Math.floor,a=e=>({x:e,y:e}),u={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function f(e,t,n){return i(e,l(t,n))}function p(e,t){return"function"==typeof e?e(t):e}function m(e){return e.split("-")[0]}function y(e){return e.split("-")[1]}function h(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function g(e){return["top","bottom"].includes(m(e))?"y":"x"}function w(e){return h(g(e))}function b(e){return e.replace(/start|end/g,(e=>d[e]))}function x(e){return e.replace(/left|right|bottom|top/g,(e=>u[e]))}function _(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function E(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function S(e,t,n){let{reference:o,floating:r}=e;const l=g(t),i=w(t),c=v(i),s=m(t),a="y"===l,u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let p;switch(s){case"top":p={x:u,y:o.y-r.height};break;case"bottom":p={x:u,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}switch(y(t)){case"start":p[i]-=f*(n&&a?-1:1);break;case"end":p[i]+=f*(n&&a?-1:1)}return p}async function A(e,t){var n;void 0===t&&(t={});const{x:o,y:r,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=p(t,e),y=_(m),h=c[f?"floating"===d?"reference":"floating":d],v=E(await l.getClippingRect({element:null==(n=await(null==l.isElement?void 0:l.isElement(h)))||n?h:h.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),g="floating"===d?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,w=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),b=await(null==l.isElement?void 0:l.isElement(w))&&await(null==l.getScale?void 0:l.getScale(w))||{x:1,y:1},x=E(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:w,strategy:s}):g);return{top:(v.top-x.top+y.top)/b.y,bottom:(x.bottom-v.bottom+y.bottom)/b.y,left:(v.left-x.left+y.left)/b.x,right:(x.right-v.right+y.right)/b.x}}function R(){return"undefined"!=typeof window}function T(e){return L(e)?(e.nodeName||"").toLowerCase():"#document"}function k(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function O(e){var t;return null==(t=(L(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function L(e){return!!R()&&(e instanceof Node||e instanceof k(e).Node)}function C(e){return!!R()&&(e instanceof Element||e instanceof k(e).Element)}function D(e){return!!R()&&(e instanceof HTMLElement||e instanceof k(e).HTMLElement)}function N(e){return!(!R()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof k(e).ShadowRoot)}function $(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function B(e){return["table","td","th"].includes(T(e))}function j(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(n){return!1}}))}function I(e){const t=P(),n=C(e)?W(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function P(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function H(e){return["html","body","#document"].includes(T(e))}function W(e){return k(e).getComputedStyle(e)}function z(e){return C(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function F(e){if("html"===T(e))return e;const t=e.assignedSlot||e.parentNode||N(e)&&e.host||O(e);return N(t)?t.host:t}function M(e){const t=F(e);return H(t)?e.ownerDocument?e.ownerDocument.body:e.body:D(t)&&$(t)?t:M(t)}function V(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);const r=M(e),l=r===(null==(o=e.ownerDocument)?void 0:o.body),i=k(r);if(l){const e=q(i);return t.concat(i,i.visualViewport||[],$(r)?r:[],e&&n?V(e):[])}return t.concat(r,V(r,[],n))}function q(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function K(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=D(e),l=r?e.offsetWidth:n,i=r?e.offsetHeight:o,s=c(n)!==l||c(o)!==i;return s&&(n=l,o=i),{width:n,height:o,$:s}}function Y(e){return C(e)?e:e.contextElement}function X(e){const t=Y(e);if(!D(t))return a(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:l}=K(t);let i=(l?c(n.width):n.width)/o,s=(l?c(n.height):n.height)/r;return i&&Number.isFinite(i)||(i=1),s&&Number.isFinite(s)||(s=1),{x:i,y:s}}const Z=a(0);function G(e){const t=k(e);return P()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Z}function U(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=e.getBoundingClientRect(),l=Y(e);let i=a(1);t&&(o?C(o)&&(i=X(o)):i=X(e));const c=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==k(e))&&t}(l,n,o)?G(l):a(0);let s=(r.left+c.x)/i.x,u=(r.top+c.y)/i.y,d=r.width/i.x,f=r.height/i.y;if(l){const e=k(l),t=o&&C(o)?k(o):o;let n=e,r=q(n);for(;r&&o&&t!==n;){const e=X(r),t=r.getBoundingClientRect(),o=W(r),l=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,i=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;s*=e.x,u*=e.y,d*=e.x,f*=e.y,s+=l,u+=i,n=k(r),r=q(n)}}return E({width:d,height:f,x:s,y:u})}function J(e,t){const n=z(e).scrollLeft;return t?t.left+n:U(O(e)).left+n}function Q(e,t,n){void 0===n&&(n=!1);const o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(n?0:J(e,o)),y:o.top+t.scrollTop}}function ee(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=k(e),o=O(e),r=n.visualViewport;let l=o.clientWidth,i=o.clientHeight,c=0,s=0;if(r){l=r.width,i=r.height;const e=P();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,s=r.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,n);else if("document"===t)o=function(e){const t=O(e),n=z(e),o=e.ownerDocument.body,r=i(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),l=i(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let c=-n.scrollLeft+J(e);const s=-n.scrollTop;return"rtl"===W(o).direction&&(c+=i(t.clientWidth,o.clientWidth)-r),{width:r,height:l,x:c,y:s}}(O(e));else if(C(t))o=function(e,t){const n=U(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,l=D(e)?X(e):a(1);return{width:e.clientWidth*l.x,height:e.clientHeight*l.y,x:r*l.x,y:o*l.y}}(t,n);else{const n=G(e);o={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return E(o)}function te(e,t){const n=F(e);return!(n===t||!C(n)||H(n))&&("fixed"===W(n).position||te(n,t))}function ne(e,t,n){const o=D(t),r=O(t),l="fixed"===n,i=U(e,!0,l,t);let c={scrollLeft:0,scrollTop:0};const s=a(0);if(o||!o&&!l)if(("body"!==T(t)||$(r))&&(c=z(t)),o){const e=U(t,!0,l,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else r&&(s.x=J(r));const u=!r||o||l?a(0):Q(r,c);return{x:i.left+c.scrollLeft-s.x-u.x,y:i.top+c.scrollTop-s.y-u.y,width:i.width,height:i.height}}function oe(e){return"static"===W(e).position}function re(e,t){if(!D(e)||"fixed"===W(e).position)return null;if(t)return t(e);let n=e.offsetParent;return O(e)===n&&(n=n.ownerDocument.body),n}function le(e,t){const n=k(e);if(j(e))return n;if(!D(e)){let t=F(e);for(;t&&!H(t);){if(C(t)&&!oe(t))return t;t=F(t)}return n}let o=re(e,t);for(;o&&B(o)&&oe(o);)o=re(o,t);return o&&H(o)&&oe(o)&&!I(o)?n:o||function(e){let t=F(e);for(;D(t)&&!H(t);){if(I(t))return t;if(j(t))return null;t=F(t)}return null}(e)||n}const ie={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const l="fixed"===r,i=O(o),c=!!t&&j(t.floating);if(o===i||c&&l)return n;let s={scrollLeft:0,scrollTop:0},u=a(1);const d=a(0),f=D(o);if((f||!f&&!l)&&(("body"!==T(o)||$(i))&&(s=z(o)),D(o))){const e=U(o);u=X(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}const p=!i||f||l?a(0):Q(i,s,!0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-s.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-s.scrollTop*u.y+d.y+p.y}},getDocumentElement:O,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const c=[..."clippingAncestors"===n?j(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let o=V(e,[],!1).filter((e=>C(e)&&"body"!==T(e))),r=null;const l="fixed"===W(e).position;let i=l?F(e):e;for(;C(i)&&!H(i);){const t=W(i),n=I(i);n||"fixed"!==t.position||(r=null),(l?!n&&!r:!n&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||$(i)&&!n&&te(e,i))?o=o.filter((e=>e!==i)):r=t,i=F(i)}return t.set(e,o),o}(t,this._c):[].concat(n),o],s=c[0],a=c.reduce(((e,n)=>{const o=ee(t,n,r);return e.top=i(o.top,e.top),e.right=l(o.right,e.right),e.bottom=l(o.bottom,e.bottom),e.left=i(o.left,e.left),e}),ee(t,s,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:le,getElementRects:async function(e){const t=this.getOffsetParent||le,n=this.getDimensions,o=await n(e.floating);return{reference:ne(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=K(e);return{width:t,height:n}},getScale:X,isElement:C,isRTL:function(e){return"rtl"===W(e).direction}};function ce(e,t,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,f=Y(e),p=r||c?[...f?V(f):[],...V(t)]:[];p.forEach((e=>{r&&e.addEventListener("scroll",n,{passive:!0}),c&&e.addEventListener("resize",n)}));const m=f&&u?function(e,t){let n,o=null;const r=O(e);function c(){var e;clearTimeout(n),null==(e=o)||e.disconnect(),o=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),c();const{left:f,top:p,width:m,height:y}=e.getBoundingClientRect();if(u||t(),!m||!y)return;const h={rootMargin:-s(p)+"px "+-s(r.clientWidth-(f+m))+"px "+-s(r.clientHeight-(p+y))+"px "+-s(f)+"px",threshold:i(0,l(1,d))||1};let v=!0;function g(e){const t=e[0].intersectionRatio;if(t!==d){if(!v)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}v=!1}try{o=new IntersectionObserver(g,{...h,root:r.ownerDocument})}catch(w){o=new IntersectionObserver(g,h)}o.observe(e)}(!0),c}(f,n):null;let y,h=-1,v=null;a&&(v=new ResizeObserver((e=>{let[o]=e;o&&o.target===f&&v&&(v.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=v)||e.observe(t)}))),n()})),f&&!d&&v.observe(f),v.observe(t));let g=d?U(e):null;return d&&function t(){const o=U(e);!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||n();g=o,y=requestAnimationFrame(t)}(),n(),()=>{var e;p.forEach((e=>{r&&e.removeEventListener("scroll",n),c&&e.removeEventListener("resize",n)})),null==m||m(),null==(e=v)||e.disconnect(),v=null,d&&cancelAnimationFrame(y)}}const se=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:l,placement:i,middlewareData:c}=t,s=await async function(e,t){const{placement:n,platform:o,elements:r}=e,l=await(null==o.isRTL?void 0:o.isRTL(r.floating)),i=m(n),c=y(n),s="y"===g(n),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,d=p(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:v}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&"number"==typeof v&&(h="end"===c?-1*v:v),s?{x:h*u,y:f*a}:{x:f*a,y:h*u}}(t,e);return i===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+s.x,y:l+s.y,data:{...s,placement:i}}}}},ae=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:l=!0,crossAxis:i=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=p(e,t),a={x:n,y:o},u=await A(t,s),d=g(m(r)),y=h(d);let v=a[y],w=a[d];if(l){const e="y"===y?"bottom":"right";v=f(v+u["y"===y?"top":"left"],v,v-u[e])}if(i){const e="y"===d?"bottom":"right";w=f(w+u["y"===d?"top":"left"],w,w-u[e])}const b=c.fn({...t,[y]:v,[d]:w});return{...b,data:{x:b.x-n,y:b.y-o,enabled:{[y]:l,[d]:i}}}}}},ue=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:l,rects:i,initialPlacement:c,platform:s,elements:a}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:E=!0,...S}=p(e,t);if(null!=(n=l.arrow)&&n.alignmentOffset)return{};const R=m(r),T=g(c),k=m(c)===c,O=await(null==s.isRTL?void 0:s.isRTL(a.floating)),L=f||(k||!E?[x(c)]:function(e){const t=x(e);return[b(e),t,b(t)]}(c)),C="none"!==_;!f&&C&&L.push(...function(e,t,n,o){const r=y(e);let l=function(e,t,n){const o=["left","right"],r=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?l:i;default:return[]}}(m(e),"start"===n,o);return r&&(l=l.map((e=>e+"-"+r)),t&&(l=l.concat(l.map(b)))),l}(c,E,_,O));const D=[c,...L],N=await A(t,S),$=[];let B=(null==(o=l.flip)?void 0:o.overflows)||[];if(u&&$.push(N[R]),d){const e=function(e,t,n){void 0===n&&(n=!1);const o=y(e),r=w(e),l=v(r);let i="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=x(i)),[i,x(i)]}(r,i,O);$.push(N[e[0]],N[e[1]])}if(B=[...B,{placement:r,overflows:$}],!$.every((e=>e<=0))){var j,I;const e=((null==(j=l.flip)?void 0:j.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:B},reset:{placement:t}};let n=null==(I=B.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:I.placement;if(!n)switch(h){case"bestFit":{var P;const e=null==(P=B.filter((e=>{if(C){const t=g(e.placement);return t===T||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(n=e);break}case"initialPlacement":n=c}if(r!==n)return{reset:{placement:n}}}return{}}}},de=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:c,elements:s,middlewareData:a}=t,{element:u,padding:d=0}=p(e,t)||{};if(null==u)return{};const m=_(d),h={x:n,y:o},g=w(r),b=v(g),x=await c.getDimensions(u),E="y"===g,S=E?"top":"left",A=E?"bottom":"right",R=E?"clientHeight":"clientWidth",T=i.reference[b]+i.reference[g]-h[g]-i.floating[b],k=h[g]-i.reference[g],O=await(null==c.getOffsetParent?void 0:c.getOffsetParent(u));let L=O?O[R]:0;L&&await(null==c.isElement?void 0:c.isElement(O))||(L=s.floating[R]||i.floating[b]);const C=T/2-k/2,D=L/2-x[b]/2-1,N=l(m[S],D),$=l(m[A],D),B=N,j=L-x[b]-$,I=L/2-x[b]/2+C,P=f(B,I,j),H=!a.arrow&&null!=y(r)&&I!==P&&i.reference[b]/2-(I<B?N:$)-x[b]/2<0,W=H?I<B?I-B:I-j:0;return{[g]:h[g]+W,data:{[g]:P,centerOffset:I-P-W,...H&&{alignmentOffset:W}},reset:H}}}),fe=(e,t,n)=>{const o=new Map,r={platform:ie,...n},l={...r.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:i}=n,c=l.filter(Boolean),s=await(null==i.isRTL?void 0:i.isRTL(t));let a=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=S(a,o,s),f=o,p={},m=0;for(let y=0;y<c.length;y++){const{name:n,fn:l}=c[y],{x:h,y:v,data:g,reset:w}=await l({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=h?h:u,d=null!=v?v:d,p={...p,[n]:{...p[n],...g}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(f=w.placement),w.rects&&(a=!0===w.rects?await i.getElementRects({reference:e,floating:t,strategy:r}):w.rects),({x:u,y:d}=S(a,f,s))),y=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}})(e,t,{...r,platform:l})};var pe=n(6942);const me="react-tooltip-core-styles",ye="react-tooltip-base-styles",he={core:!1,base:!1};function ve({css:e,id:t=ye,type:n="base",ref:o}){var r,l;if(!e||"undefined"==typeof document||he[n])return;if("core"===n&&"undefined"!=typeof process&&(null===(r=null===process||void 0===process?void 0:{})||void 0===r?void 0:r.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==n&&"undefined"!=typeof process&&(null===(l=null===process||void 0===process?void 0:{})||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===n&&(t=me),o||(o={});const{insertAt:i}=o;if(document.getElementById(t))return;const c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),he[n]=!0}const ge=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:n=null,place:o="top",offset:r=10,strategy:l="absolute",middlewares:i=[se(Number(r)),ue({fallbackAxisSideDirection:"start"}),ae({padding:5})],border:c})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};const s=i;return n?(s.push(de({element:n,padding:5})),fe(e,t,{placement:o,strategy:l,middleware:s}).then((({x:e,y:t,placement:n,middlewareData:o})=>{var r,l;const i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(r=o.arrow)&&void 0!==r?r:{x:0,y:0},u=null!==(l={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]])&&void 0!==l?l:"bottom",d=c&&{borderBottom:c,borderRight:c};let f=0;if(c){const e=`${c}`.match(/(\d+)px/);f=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...d,[u]:`-${4+f}px`},place:n}}))):fe(e,t,{placement:"bottom",strategy:l,middleware:s}).then((({x:e,y:t,placement:n})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:n})))},we=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),be=(e,t,n)=>{let o=null;const r=function(...r){const l=()=>{o=null,n||e.apply(this,r)};n&&!o&&(e.apply(this,r),o=setTimeout(l,t)),n||(o&&clearTimeout(o),o=setTimeout(l,t))};return r.cancel=()=>{o&&(clearTimeout(o),o=null)},r},xe=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,_e=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,n)=>_e(e,t[n])));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!xe(e)||!xe(t))return e===t;const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&n.every((n=>_e(e[n],t[n])))},Ee=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const n=t.getPropertyValue(e);return"auto"===n||"scroll"===n}))},Se=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(Ee(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},Ae="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,Re=e=>{e.current&&(clearTimeout(e.current),e.current=null)},Te="DEFAULT_TOOLTIP_ID",ke={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Oe=(0,r.createContext)({getTooltipData:()=>ke});function Le(e=Te){return(0,r.useContext)(Oe).getTooltipData(e)}var Ce={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},De={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const Ne=({forwardRef:e,id:t,className:n,classNameArrow:o,variant:l="dark",anchorId:i,anchorSelect:c,place:s="top",offset:a=10,events:u=["hover"],openOnClick:d=!1,positionStrategy:f="absolute",middlewares:p,wrapper:m,delayShow:y=0,delayHide:h=0,float:v=!1,hidden:g=!1,noArrow:w=!1,clickable:b=!1,closeOnEsc:x=!1,closeOnScroll:_=!1,closeOnResize:E=!1,openEvents:S,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:T,style:k,position:O,afterShow:L,afterHide:C,disableTooltip:D,content:N,contentWrapperRef:$,isOpen:B,defaultIsOpen:j=!1,setIsOpen:I,activeAnchor:P,setActiveAnchor:H,border:W,opacity:z,arrowColor:F,role:M="tooltip"})=>{var V;const q=(0,r.useRef)(null),K=(0,r.useRef)(null),Y=(0,r.useRef)(null),X=(0,r.useRef)(null),Z=(0,r.useRef)(null),[G,U]=(0,r.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:s}),[J,Q]=(0,r.useState)(!1),[ee,te]=(0,r.useState)(!1),[ne,oe]=(0,r.useState)(null),re=(0,r.useRef)(!1),le=(0,r.useRef)(null),{anchorRefs:ie,setActiveAnchor:se}=Le(t),ae=(0,r.useRef)(!1),[ue,de]=(0,r.useState)([]),fe=(0,r.useRef)(!1),me=d||u.includes("click"),ye=me||(null==S?void 0:S.click)||(null==S?void 0:S.dblclick)||(null==S?void 0:S.mousedown),he=S?{...S}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!S&&me&&Object.assign(he,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const ve=A?{...A}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!A&&me&&Object.assign(ve,{mouseleave:!1,blur:!1,mouseout:!1});const we=R?{...R}:{escape:x||!1,scroll:_||!1,resize:E||!1,clickOutsideAnchor:ye||!1};T&&(Object.assign(he,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(ve,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(we,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),Ae((()=>(fe.current=!0,()=>{fe.current=!1})),[]);const xe=e=>{fe.current&&(e&&te(!0),setTimeout((()=>{fe.current&&(null==I||I(e),void 0===B&&Q(e))}),10))};(0,r.useEffect)((()=>{if(void 0===B)return()=>null;B&&te(!0);const e=setTimeout((()=>{Q(B)}),10);return()=>{clearTimeout(e)}}),[B]),(0,r.useEffect)((()=>{if(J!==re.current)if(Re(Z),re.current=J,J)null==L||L();else{const e=(()=>{const e=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(ms|s)$/);if(!e)return 0;const[,t,n]=e;return Number(t)*("ms"===n?1:1e3)})();Z.current=setTimeout((()=>{te(!1),oe(null),null==C||C()}),e+25)}}),[J]);const Ee=e=>{U((t=>_e(t,e)?t:e))},Te=(e=y)=>{Re(Y),ee?xe(!0):Y.current=setTimeout((()=>{xe(!0)}),e)},ke=(e=h)=>{Re(X),X.current=setTimeout((()=>{ae.current||xe(!1)}),e)},Oe=e=>{var t;if(!e)return;const n=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==n?void 0:n.isConnected))return H(null),void se({current:null});y?Te():xe(!0),H(n),se({current:n}),Re(X)},Ne=()=>{b?ke(h||100):h?ke():xe(!1),Re(Y)},$e=({x:e,y:t})=>{var n;const o={getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})};ge({place:null!==(n=null==ne?void 0:ne.place)&&void 0!==n?n:s,offset:a,elementReference:o,tooltipReference:q.current,tooltipArrowReference:K.current,strategy:f,middlewares:p,border:W}).then((e=>{Ee(e)}))},Be=e=>{if(!e)return;const t=e,n={x:t.clientX,y:t.clientY};$e(n),le.current=n},je=e=>{var t;if(!J)return;const n=e.target;n.isConnected&&((null===(t=q.current)||void 0===t?void 0:t.contains(n))||[document.querySelector(`[id='${i}']`),...ue].some((e=>null==e?void 0:e.contains(n)))||(xe(!1),Re(Y)))},Ie=be(Oe,50,!0),Pe=be(Ne,50,!0),He=e=>{Pe.cancel(),Ie(e)},We=()=>{Ie.cancel(),Pe()},ze=(0,r.useCallback)((()=>{var e,t;const n=null!==(e=null==ne?void 0:ne.position)&&void 0!==e?e:O;n?$e(n):v?le.current&&$e(le.current):(null==P?void 0:P.isConnected)&&ge({place:null!==(t=null==ne?void 0:ne.place)&&void 0!==t?t:s,offset:a,elementReference:P,tooltipReference:q.current,tooltipArrowReference:K.current,strategy:f,middlewares:p,border:W}).then((e=>{fe.current&&Ee(e)}))}),[J,P,N,k,s,null==ne?void 0:ne.place,a,f,O,null==ne?void 0:ne.position,v]);(0,r.useEffect)((()=>{var e,t;const n=new Set(ie);ue.forEach((e=>{(null==D?void 0:D(e))||n.add({current:e})}));const o=document.querySelector(`[id='${i}']`);o&&!(null==D?void 0:D(o))&&n.add({current:o});const r=()=>{xe(!1)},l=Se(P),c=Se(q.current);we.scroll&&(window.addEventListener("scroll",r),null==l||l.addEventListener("scroll",r),null==c||c.addEventListener("scroll",r));let s=null;we.resize?window.addEventListener("resize",r):P&&q.current&&(s=ce(P,q.current,ze,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const a=e=>{"Escape"===e.key&&xe(!1)};we.escape&&window.addEventListener("keydown",a),we.clickOutsideAnchor&&window.addEventListener("click",je);const u=[],d=e=>{J&&(null==e?void 0:e.target)===P||Oe(e)},f=e=>{J&&(null==e?void 0:e.target)===P&&Ne()},p=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],m=["click","dblclick","mousedown","mouseup"];Object.entries(he).forEach((([e,t])=>{t&&(p.includes(e)?u.push({event:e,listener:He}):m.includes(e)&&u.push({event:e,listener:d}))})),Object.entries(ve).forEach((([e,t])=>{t&&(p.includes(e)?u.push({event:e,listener:We}):m.includes(e)&&u.push({event:e,listener:f}))})),v&&u.push({event:"pointermove",listener:Be});const y=()=>{ae.current=!0},h=()=>{ae.current=!1,Ne()};return b&&!ye&&(null===(e=q.current)||void 0===e||e.addEventListener("mouseenter",y),null===(t=q.current)||void 0===t||t.addEventListener("mouseleave",h)),u.forEach((({event:e,listener:t})=>{n.forEach((n=>{var o;null===(o=n.current)||void 0===o||o.addEventListener(e,t)}))})),()=>{var e,t;we.scroll&&(window.removeEventListener("scroll",r),null==l||l.removeEventListener("scroll",r),null==c||c.removeEventListener("scroll",r)),we.resize?window.removeEventListener("resize",r):null==s||s(),we.clickOutsideAnchor&&window.removeEventListener("click",je),we.escape&&window.removeEventListener("keydown",a),b&&!ye&&(null===(e=q.current)||void 0===e||e.removeEventListener("mouseenter",y),null===(t=q.current)||void 0===t||t.removeEventListener("mouseleave",h)),u.forEach((({event:e,listener:t})=>{n.forEach((n=>{var o;null===(o=n.current)||void 0===o||o.removeEventListener(e,t)}))}))}}),[P,ze,ee,ie,ue,S,A,R,me,y,h]),(0,r.useEffect)((()=>{var e,n;let o=null!==(n=null!==(e=null==ne?void 0:ne.anchorSelect)&&void 0!==e?e:c)&&void 0!==n?n:"";!o&&t&&(o=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`);const r=new MutationObserver((e=>{const n=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===t?n.push(e.target):e.oldValue===t&&r.push(e.target)),"childList"===e.type){if(P){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(o)try{r.push(...t.filter((e=>e.matches(o)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(o)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,P))&&(te(!1),xe(!1),H(null),Re(Y),Re(X),!0)}))}if(o)try{const t=[...e.addedNodes].filter((e=>1===e.nodeType));n.push(...t.filter((e=>e.matches(o)))),n.push(...t.flatMap((e=>[...e.querySelectorAll(o)])))}catch(e){}}})),(n.length||r.length)&&de((e=>[...e.filter((e=>!r.includes(e))),...n]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{r.disconnect()}}),[t,c,null==ne?void 0:ne.anchorSelect,P]),(0,r.useEffect)((()=>{ze()}),[ze]),(0,r.useEffect)((()=>{if(!(null==$?void 0:$.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>ze()))}));return e.observe($.current),()=>{e.disconnect()}}),[N,null==$?void 0:$.current]),(0,r.useEffect)((()=>{var e;const t=document.querySelector(`[id='${i}']`),n=[...ue,t];P&&n.includes(P)||H(null!==(e=ue[0])&&void 0!==e?e:t)}),[i,ue,P]),(0,r.useEffect)((()=>(j&&xe(!0),()=>{Re(Y),Re(X)})),[]),(0,r.useEffect)((()=>{var e;let n=null!==(e=null==ne?void 0:ne.anchorSelect)&&void 0!==e?e:c;if(!n&&t&&(n=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),n)try{const e=Array.from(document.querySelectorAll(n));de(e)}catch(e){de([])}}),[t,c,null==ne?void 0:ne.anchorSelect]),(0,r.useEffect)((()=>{Y.current&&(Re(Y),Te(y))}),[y]);const Fe=null!==(V=null==ne?void 0:ne.content)&&void 0!==V?V:N,Me=J&&Object.keys(G.tooltipStyles).length>0;return(0,r.useImperativeHandle)(e,(()=>({open:t=>{if(null==t?void 0:t.anchorSelect)try{document.querySelector(t.anchorSelect)}catch(e){return void console.warn(`[react-tooltip] "${t.anchorSelect}" is not a valid CSS selector`)}oe(null!=t?t:null),(null==t?void 0:t.delay)?Te(t.delay):xe(!0)},close:e=>{(null==e?void 0:e.delay)?ke(e.delay):xe(!1)},activeAnchor:P,place:G.place,isOpen:Boolean(ee&&!g&&Fe&&Me)}))),ee&&!g&&Fe?r.createElement(m,{id:t,role:M,className:pe("react-tooltip",Ce.tooltip,De.tooltip,De[l],n,`react-tooltip__place-${G.place}`,Ce[Me?"show":"closing"],Me?"react-tooltip__show":"react-tooltip__closing","fixed"===f&&Ce.fixed,b&&Ce.clickable),onTransitionEnd:e=>{Re(Z),J||"opacity"!==e.propertyName||(te(!1),oe(null),null==C||C())},style:{...k,...G.tooltipStyles,opacity:void 0!==z&&Me?z:void 0},ref:q},Fe,r.createElement(m,{className:pe("react-tooltip-arrow",Ce.arrow,De.arrow,o,w&&Ce.noArrow),style:{...G.tooltipArrowStyles,background:F?`linear-gradient(to right bottom, transparent 50%, ${F} 50%)`:void 0},ref:K})):null},$e=({content:e})=>r.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),Be=r.forwardRef((({id:e,anchorId:t,anchorSelect:n,content:o,html:l,render:i,className:c,classNameArrow:s,variant:a="dark",place:u="top",offset:d=10,wrapper:f="div",children:p=null,events:m=["hover"],openOnClick:y=!1,positionStrategy:h="absolute",middlewares:v,delayShow:g=0,delayHide:w=0,float:b=!1,hidden:x=!1,noArrow:_=!1,clickable:E=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:R=!1,openEvents:T,closeEvents:k,globalCloseEvents:O,imperativeModeOnly:L=!1,style:C,position:D,isOpen:N,defaultIsOpen:$=!1,disableStyleInjection:B=!1,border:j,opacity:I,arrowColor:P,setIsOpen:H,afterShow:W,afterHide:z,disableTooltip:F,role:M="tooltip"},V)=>{const[q,K]=(0,r.useState)(o),[Y,X]=(0,r.useState)(l),[Z,G]=(0,r.useState)(u),[U,J]=(0,r.useState)(a),[Q,ee]=(0,r.useState)(d),[te,ne]=(0,r.useState)(g),[oe,re]=(0,r.useState)(w),[le,ie]=(0,r.useState)(b),[ce,se]=(0,r.useState)(x),[ae,ue]=(0,r.useState)(f),[de,fe]=(0,r.useState)(m),[me,ye]=(0,r.useState)(h),[he,ve]=(0,r.useState)(null),[ge,be]=(0,r.useState)(null),xe=(0,r.useRef)(B),{anchorRefs:_e,activeAnchor:Ee}=Le(e),Se=e=>null==e?void 0:e.getAttributeNames().reduce(((t,n)=>{var o;return n.startsWith("data-tooltip-")&&(t[n.replace(/^data-tooltip-/,"")]=null!==(o=null==e?void 0:e.getAttribute(n))&&void 0!==o?o:null),t}),{}),Ae=e=>{const t={place:e=>{var t;G(null!==(t=e)&&void 0!==t?t:u)},content:e=>{K(null!=e?e:o)},html:e=>{X(null!=e?e:l)},variant:e=>{var t;J(null!==(t=e)&&void 0!==t?t:a)},offset:e=>{ee(null===e?d:Number(e))},wrapper:e=>{var t;ue(null!==(t=e)&&void 0!==t?t:f)},events:e=>{const t=null==e?void 0:e.split(" ");fe(null!=t?t:m)},"position-strategy":e=>{var t;ye(null!==(t=e)&&void 0!==t?t:h)},"delay-show":e=>{ne(null===e?g:Number(e))},"delay-hide":e=>{re(null===e?w:Number(e))},float:e=>{ie(null===e?b:"true"===e)},hidden:e=>{se(null===e?x:"true"===e)},"class-name":e=>{ve(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,n])=>{var o;null===(o=t[e])||void 0===o||o.call(t,n)}))};(0,r.useEffect)((()=>{K(o)}),[o]),(0,r.useEffect)((()=>{X(l)}),[l]),(0,r.useEffect)((()=>{G(u)}),[u]),(0,r.useEffect)((()=>{J(a)}),[a]),(0,r.useEffect)((()=>{ee(d)}),[d]),(0,r.useEffect)((()=>{ne(g)}),[g]),(0,r.useEffect)((()=>{re(w)}),[w]),(0,r.useEffect)((()=>{ie(b)}),[b]),(0,r.useEffect)((()=>{se(x)}),[x]),(0,r.useEffect)((()=>{ye(h)}),[h]),(0,r.useEffect)((()=>{xe.current!==B&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[B]),(0,r.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===B,disableBase:B}}))}),[]),(0,r.useEffect)((()=>{var o;const r=new Set(_e);let l=n;if(!l&&e&&(l=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),l)try{document.querySelectorAll(l).forEach((e=>{r.add({current:e})}))}catch(o){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${t}']`);if(i&&r.add({current:i}),!r.size)return()=>null;const c=null!==(o=null!=ge?ge:i)&&void 0!==o?o:Ee.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const n=Se(c);Ae(n)}))})),a={attributes:!0,childList:!1,subtree:!1};if(c){const e=Se(c);Ae(e),s.observe(c,a)}return()=>{s.disconnect()}}),[_e,Ee,ge,t,n]),(0,r.useEffect)((()=>{(null==C?void 0:C.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),j&&!we("border",`${j}`)&&console.warn(`[react-tooltip] "${j}" is not a valid \`border\`.`),(null==C?void 0:C.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),I&&!we("opacity",`${I}`)&&console.warn(`[react-tooltip] "${I}" is not a valid \`opacity\`.`)}),[]);let Re=p;const Te=(0,r.useRef)(null);if(i){const e=i({content:(null==ge?void 0:ge.getAttribute("data-tooltip-content"))||q||null,activeAnchor:ge});Re=e?r.createElement("div",{ref:Te,className:"react-tooltip-content-wrapper"},e):null}else q&&(Re=q);Y&&(Re=r.createElement($e,{content:Y}));const ke={forwardRef:V,id:e,anchorId:t,anchorSelect:n,className:pe(c,he),classNameArrow:s,content:Re,contentWrapperRef:Te,place:Z,variant:U,offset:Q,wrapper:ae,events:de,openOnClick:y,positionStrategy:me,middlewares:v,delayShow:te,delayHide:oe,float:le,hidden:ce,noArrow:_,clickable:E,closeOnEsc:S,closeOnScroll:A,closeOnResize:R,openEvents:T,closeEvents:k,globalCloseEvents:O,imperativeModeOnly:L,style:C,position:D,isOpen:N,defaultIsOpen:$,border:j,opacity:I,arrowColor:P,setIsOpen:H,afterShow:W,afterHide:z,disableTooltip:F,activeAnchor:ge,setActiveAnchor:e=>be(e),role:M};return r.createElement(Ne,{...ke})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||ve({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||ve({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}));var je=n(7437);const Ie=(0,o.A)(Be,{target:"e65dn8c1"})({name:"12j3pdt",styles:"max-width:70%"}),Pe=(0,o.A)("sup",{target:"e65dn8c0"})({name:"k2cl8l",styles:"color:#fc3;text-decoration:underline;padding-left:3px;padding-right:3px"});function He(e){let{presentation:t="*",children:n}=e;return(0,je.Y)("span",null,(0,je.Y)(Pe,{id:"tooltip-"+t},t),(0,je.Y)(Ie,{opacity:1,anchorSelect:"#tooltip-"+t,clickable:!0},n))}},6942:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,l(n)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=6d6a9e5ed5ef9282da8700b4a3b6f8717a33180b-ab35df5707c509e0c4d1.js.map