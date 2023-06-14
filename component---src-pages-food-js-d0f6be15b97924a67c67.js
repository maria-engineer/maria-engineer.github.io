"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[8552],{3579:function(e,a,t){var o=t(7294);a.Z=o.createContext({google:null,setGoogle:()=>{}})},1596:function(e,a,t){t.d(a,{Z:function(){return n}});var o=t(3579),l=t(7294),r=t(917);function n(e){let{data:a,id:t}=e;const{0:n,1:i}=(0,l.useState)(null),{google:d}=(0,l.useContext)(o.Z);return(0,l.useEffect)((()=>{if(d&&!n){var e={backgroundColor:"#121212",defaultColor:"#636"};const o=()=>{const o=new d.visualization.GeoChart(document.getElementById("mapChart-"+t));o.draw(d.visualization.arrayToDataTable(a),e),i(o)};d.charts.load("current",{packages:["geochart"]}).then(o),d.setOnLoadCallback(o)}}),[d,a,n,t]),(0,r.tZ)(l.Fragment,null,!n&&(0,r.tZ)("div",null,"..."),(0,r.tZ)("div",{id:"mapChart-"+t,className:d?"":"d-none w-100"}))}},496:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var o=t(4316),l=t(7294),r=t(6791),n=t(4001),i=t(1883),d=t(1596),u=t(8032),s=t(3579),c=t(917);const g=(0,o.Z)("button",{target:"e11l76f42"})({name:"115xeuc",styles:"display:block;margin:0px 10px 0px 0px;width:200px;height:250px;padding:0px 5px 5px 5px;border-radius:26px;align-items:start;background-color:hsl(233, 8%, 19%);justify-content:center;border-width:0;text-decoration:none important!;box-shadow:inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),0 0 0 1px hsla(0, 0%, 0%, 0.05),0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),0 3.5px 6px hsla(0, 0%, 0%, 0.09)"}),m=(0,o.Z)("div",{target:"e11l76f41"})({name:"13ap67b",styles:"font-style:bold;font-size:20px"}),p=(0,o.Z)("div",{target:"e11l76f40"})({name:"mmdt3g",styles:"font-size:14px"});var h={name:"1i2ikmb",styles:"object:cover;width:180px;height:140px;border-radius:20px"};function f(e){let{data:{allMdx:{edges:a}}}=e;const{0:t,1:o}=(0,l.useState)(null);(0,l.useEffect)((()=>(t||window.google&&o(window.google),()=>{let e=document.getElementById("googleChartsScript");e&&e.remove()})),[t]);const f=a.map((e=>{var a;return null==e||null===(a=e.node)||void 0===a?void 0:a.frontmatter})).filter((e=>null!=e));return null==f||f.map((e=>{console.log(JSON.stringify(e))})),(0,c.tZ)(r.Z,{currentPage:"Interests",currentSubPage:"Food"},(0,c.tZ)(n.Z,{title:"Food around the world",description:"A page dedicated to my love for food. Here is a list of my recipes, as well as an attempt to keep track of where I've eaten food from.",keywords:["Food","World","Map","World Map","Challenge","Around The World","Recipe"]}),(0,c.tZ)(s.Z.Provider,{value:{google:t,setGoogle:o}},(0,c.tZ)("h2",null,"Recipes"),(0,c.tZ)("p",null,"These are all recipes I have made multiple times. Some come from my grandma's notebook, where I've had to experiment with some of the ratios of ingredients."," "),(0,c.tZ)("div",{className:"d-flex flex-wrap flex-row"},null==f?void 0:f.map(((e,a)=>{var t,o,l,r;return(0,c.tZ)(g,{key:"recipe"+a,onClick:()=>(0,i.navigate)(e.slug),"aria-label":"Navigate to the recipe for: "+e.title},(null===(t=e.featuredImage)||void 0===t||null===(o=t.childImageSharp)||void 0===o?void 0:o.gatsbyImageData)&&(0,c.tZ)(u.G,{css:h,image:(0,u.c)(null===(l=e.featuredImage)||void 0===l||null===(r=l.childImageSharp)||void 0===r?void 0:r.gatsbyImageData)}),(0,c.tZ)(m,null,e.title),(0,c.tZ)(p,null,e.description))}))),(0,c.tZ)("div",null,(0,c.tZ)("h2",null,"Food Around the World"),(0,c.tZ)("p",null,"Food I have had from all around the world."),(0,c.tZ)(d.Z,{data:[["Country","Most memorable dish"],["Argentina","Steak"],["Australia","Fairy Bread"],["Austria","Strudel"],["Belgium","Chocolate"],["Brazil","Steak"],["Bulgaria","Cucumber soup"],["Canada","Poutine"],["China","Xiao Long Bao"],["Cuba","Cubano"],["Egypt","YES"],["Estonia","YES"],["Ethiopia","YES"],["France","Canele"],["Georgia","YES"],["Germany","Wurst"],["Greece","Dolmades"],["Hungary","Goulash"],["India","Kheer"],["Ireland","YES"],["Israel","Hummous"],["Italy","Tiramisu"],["Jamaica","YES"],["Japan","Ramen"],["Laos","Pla Pao Gluer"],["Mexico","Burrito"],["Morocco","Tagine"],["Nepal","Momo"],["Nigeria","Smoked jollof rice"],["Norway","YES"],["Peru","Ceviche"],["Poland","Pierogi"],["Romania","Sarmale"],["Russia","Borscht"],["Slovakia","YES"],["South Africa","Biltong"],["South Korea","Gogi Guk Su"],["Spain","Paella"],["Sweden","Meatballs"],["Switzerland","Fondue"],["Thailand","Beef & cucumber curry"],["Turkey","Baklava"],["United Kingdom","YES"],["United States","Grits"],["Vietnam","Pho"]],id:"food"}))))}}}]);
//# sourceMappingURL=component---src-pages-food-js-d0f6be15b97924a67c67.js.map