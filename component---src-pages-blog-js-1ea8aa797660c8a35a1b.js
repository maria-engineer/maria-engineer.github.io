"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[3711],{4151:function(e,l,n){n.r(l),n.d(l,{default:function(){return d}});var t=n(644),i=n(6540),o=n(4194),a=n(88),r=n(1042),s=n(8100),u=n(7437);const g=(0,t.A)("div",{target:"e5h8lyo0"})({name:"12wuxmp",styles:"display:flex;justify-content:space-between;align-items:center;padding-top:1.5rem"});function d(e){var l,n,t,d,p,v,b,f;let{data:{allMdx:{edges:k}}}=e;const y=k.map((e=>{var l;return null==e||null===(l=e.node)||void 0===l?void 0:l.frontmatter})).filter((e=>null!=e)).reduce(((e,l)=>(e[l.category]||(e[l.category]=[]),e[l.category].push(l),e)),{});console.log(JSON.stringify(y));const Y=null!==(l=c(null!==(n=y.personal)&&void 0!==n?n:[],5))&&void 0!==l?l:[],h=null!==(t=c(null!==(d=y.engineer)&&void 0!==d?d:[],5))&&void 0!==t?t:[];console.log(JSON.stringify(Y)),console.log(JSON.stringify(h));const m=null!==(p=Y.length)&&void 0!==p?p:0,C=null!==(v=h.length)&&void 0!==v?v:0,{0:N,1:x}=(0,i.useState)(0),{0:S,1:w}=(0,i.useState)(0);return(0,u.Y)(a.A,{currentPage:"Blog"},(0,u.Y)(r.A,{title:"Blog"}),(0,u.Y)("h2",null,"Personal Log"),null===(b=Y[N])||void 0===b?void 0:b.map(((e,l)=>(0,u.Y)(s.ll,{role:"link",key:"personal"+l,onClick:()=>(0,o.navigate)(e.slug),"aria-label":"Navigate to the blog post: "+e.title},(0,u.Y)("div",null,e.title),(0,u.Y)("div",null,e.date)))),(0,u.Y)(g,null,(0,u.Y)("button",{"aria-label":"Previous page of personal posts.",key:"personal-back",disabled:N<=0,onClick:()=>{x(N-1)}},"<"),(0,u.Y)("div",null,N+1+"/"+m),(0,u.Y)("button",{"aria-label":"Next page of personal posts.",key:"personal-next",disabled:N+1>=m,onClick:()=>{x(N+1)}},">")),(0,u.Y)("h2",null,"Engineering Log"),null===(f=h[S])||void 0===f?void 0:f.map(((e,l)=>(0,u.Y)(s.ll,{role:"link",key:"engineer"+l,onClick:()=>(0,o.navigate)(e.slug),"aria-label":"Navigate to the blog post: "+e.title},(0,u.Y)("div",null,e.title),(0,u.Y)("div",null,e.date)))),(0,u.Y)(g,null,(0,u.Y)("button",{"aria-label":"Previous page of engineering posts.",key:"engineer-back",disabled:S<=0,onClick:()=>{w(S-1)}},"<"),(0,u.Y)("div",null,S+1+"/"+C),(0,u.Y)("button",{"aria-label":"Next page of engineering posts.",key:"engineer-next",disabled:S+1>=C,onClick:()=>{w(S+1)}},">")))}function c(e,l){const n=new Array;for(;e.length>0;)n.push(e.slice(0,l)),e=e.slice(l);return console.log(JSON.stringify(n)),n}}}]);
//# sourceMappingURL=component---src-pages-blog-js-1ea8aa797660c8a35a1b.js.map