"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[806],{3579:function(e,a,o){var n=o(7294);a.Z=n.createContext({google:null,setGoogle:()=>{}})},1596:function(e,a,o){o.d(a,{Z:function(){return i}});var n=o(3579),t=o(7294),r=o(917);function i(e){let{data:a,id:o}=e;const{0:i,1:l}=(0,t.useState)(null),{google:d}=(0,t.useContext)(n.Z);return(0,t.useEffect)((()=>{if(d&&!i){var e={backgroundColor:"#121212",defaultColor:"#636"};const n=()=>{const n=new d.visualization.GeoChart(document.getElementById("mapChart-"+o));n.draw(d.visualization.arrayToDataTable(a),e),l(n)};d.charts.load("current",{packages:["geochart"]}).then(n),d.setOnLoadCallback(n)}}),[d,a,i,o]),(0,r.tZ)(t.Fragment,null,!i&&(0,r.tZ)("div",null,"..."),(0,r.tZ)("div",{id:"mapChart-"+o,className:d?"":"d-none w-100"}))}},7096:function(e,a,o){o.r(a),o.d(a,{default:function(){return u}});var n=o(7294),t=o(6791),r=o(4001),i=o(1596),l=o(3579),d=o(917);function u(){const{0:e,1:a}=(0,n.useState)(null);(0,n.useEffect)((()=>(e||window.google&&a(window.google),()=>{let e=document.getElementById("googleChartsScript");e&&e.remove()})),[e]);return(0,d.tZ)(t.Z,{currentPage:"Interests",currentSubPage:"Reading"},(0,d.tZ)(r.Z,{title:"Reading around the world",description:"A world map keeping track of where from I've read books. With reviews.",keywords:["Reading","World","Map","Challenge","Around The World","Reading Around The World","Books"]}),(0,d.tZ)(l.Z.Provider,{value:{google:e,setGoogle:a}},(0,d.tZ)("div",null,(0,d.tZ)("h2",null,"Books Around the World"),(0,d.tZ)(i.Z,{data:[["Country","Title -  Author"],["Ireland","Gulliver's Travels - Jonathan Swift"],["United States","Giovanni's Room - James Baldwin"],["United Kingdom","The Canterville Ghost - Oscar Wilde"],["Australia","The Forests of Silence - Emily Rodda"],["France","The Little Prince - Antoine de Saint-Exupery"],["Japan","Spring Snow - Yukio Mishima"],["Brazil","The Alchemist - Paulo Coelho"],["Switzerland","Heidi - Johanna Spyri"],["Poland","Solaris - Stanislaw Lem"],["Romania","Iona - Marin Sorescu"],["Germany","Siddhartha - Herman Hesse"],["Czech Republic","R.U.R. - Karel Capek"],["Italy","The Prince - Niccolo Machiavelli"],["China","The Art of War - Sun Tzu"],["Russia","Lolita - Vladimir Nabokov"],["Greece","The Odyssey - Homer"],["Norway","Hedda Gabler - Henrik Ibsen"],["South Korea","Kim Jiyoung, Born 1982 - Cho Nam-Joo"],["Belgium","Maigret - Georges Simenon"],["Canada","The Penelopiad - Margaret Atwood"],["Nigeria","Raybearer - Jordan Ifueko"],["Taiwan","The Mermaid's Tale - Lee Wei-Jing"],["Vietnam","Ticket to Childhood - Nguyen Nhat Anh"],["Ukraine","Death and The Penguin - Andrey Kurkov"]],id:"book"}))))}}}]);
//# sourceMappingURL=component---src-pages-reading-js-206f9e8d37c0c169d444.js.map