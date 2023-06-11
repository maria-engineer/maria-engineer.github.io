"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[522],{3512:function(e,t,a){var n=a(7294);t.Z=n.createContext({google:null,setGoogle:()=>{}})},9196:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(3512),r=a(7294),o=a(3431);function l(e){let{data:t,id:a}=e;const{0:l,1:i}=(0,r.useState)(null),{google:d}=(0,r.useContext)(n.Z);return(0,r.useEffect)((()=>{if(d&&!l){var e={backgroundColor:"#121212",defaultColor:"#636"};const n=()=>{const n=new d.visualization.GeoChart(document.getElementById("mapChart-"+a));n.draw(d.visualization.arrayToDataTable(t),e),i(n)};d.charts.load("current",{packages:["geochart"]}).then(n),d.setOnLoadCallback(n)}}),[d,t,l,a]),(0,o.tZ)(r.Fragment,null,!l&&(0,o.tZ)("div",null,"..."),(0,o.tZ)("div",{id:"mapChart-"+a,className:d?"":"d-none w-100"}))}},316:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),r=a(2755),o=a(7431),l=a(5444),i=a(9196),d=a(3512),u=a(4566),s=a(3431);function c(e){let{data:{allMarkdownRemark:{edges:t}}}=e;const{0:a,1:c}=(0,n.useState)(null);(0,n.useEffect)((()=>(a||window.google&&c(window.google),()=>{let e=document.getElementById("googleChartsScript");e&&e.remove()})),[a]);const h=t.map((e=>{var t;return null==e||null===(t=e.node)||void 0===t?void 0:t.frontmatter})).filter((e=>null!=e));return(0,s.tZ)(r.Z,{currentPage:"Interests",currentSubPage:"Theatre"},(0,s.tZ)(o.Z,{title:"Theatre around the world",description:"A world map keeping track of where from I've read or watched plays from. With Reviews",keywords:["Plays","World","Map","World Map","Challenge","Around The World","Theatre","Reviews"]}),(0,s.tZ)(d.Z.Provider,{value:{google:a,setGoogle:c}},(0,s.tZ)("h2",null,"Reviews"),null==h?void 0:h.map(((e,t)=>(0,s.tZ)(u.NB,{key:"theatre"+t,onClick:()=>(0,l.navigate)(e.slug),"aria-label":"Navigate to the review for: "+e.title},(0,s.tZ)("div",null,"★ ",e.subcategory),(0,s.tZ)("div",null,e.title),(0,s.tZ)("div",null,e.date)))),(0,s.tZ)(l.Link,{to:"/2023-watching-theatre/"},(0,s.tZ)("h3",null,"Shows I'm watching out for in 2023")),(0,s.tZ)("div",null,(0,s.tZ)("h2",null,"Plays Around the World"),(0,s.tZ)("div",null,"I am counting both plays I have seen performed as well as plays I have read."),(0,s.tZ)(i.Z,{data:[["Country","Title - Author"],["Romania","Macbett - Eugene Ionesco"],["United Kingdom","Pygmalion - George Bernard Shaw"],["United States","The Nether - Jenifer Haley"],["France","A Flea in her Ear - Georges Feydeau"],["Switzerland","The Physicists - Friedrich Durrenmatt"],["Czech Republic","R.U.R. - Karel Capek"],["Ireland","Waiting for Godot - Samuel Beckett"],["Germany","Spring's Awakening - Frank Wedekind"],["Norway","Hedda Gabler - Henrik Ibsen"],["Greece","Lysistrata - Aristophanes"],["Iran","White Rabbit, Red Rabbit - Nassim Soleimanpour"],["Argentina","Kiss of the Spider Woman(play) - Manuel Puig"],["Malta","Blanket Ban - Marta Vella & Davinia Hamilton"],["South Korea","The Apology - Kyo Choi"]],id:"play"}))))}}}]);
//# sourceMappingURL=component---src-pages-theatre-js-f14cf5f4e3f52fdb57f9.js.map