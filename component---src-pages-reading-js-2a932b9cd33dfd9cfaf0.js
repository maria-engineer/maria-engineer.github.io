"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[9525],{8099:function(e,a,o){var n=o(6540);a.A=n.createContext({google:null,setGoogle:()=>{}})},87:function(e,a,o){o.d(a,{A:function(){return i}});var n=o(8099),r=o(6540),t=o(7437);function i(e){let{data:a,id:o}=e;const{0:i,1:l}=(0,r.useState)(null),{google:d}=(0,r.useContext)(n.A);return(0,r.useEffect)((()=>{if(d&&!i){var e={backgroundColor:"#121212",defaultColor:"#636"};const n=()=>{const n=new d.visualization.GeoChart(document.getElementById("mapChart-"+o));n.draw(d.visualization.arrayToDataTable(a),e),l(n)};d.charts.load("current",{packages:["geochart"]}).then(n),d.setOnLoadCallback(n)}}),[d,a,i,o]),(0,t.Y)(r.Fragment,null,!i&&(0,t.Y)("div",null,"..."),(0,t.Y)("div",{id:"mapChart-"+o,className:d?"":"d-none w-100"}))}},3135:function(e,a,o){o.r(a),o.d(a,{default:function(){return u}});var n=o(6540),r=o(88),t=o(1042),i=o(87),l=o(8099),d=(o(1223),o(7437));function u(){const{0:e,1:a}=(0,n.useState)(null);(0,n.useEffect)((()=>(e||window.google&&a(window.google),()=>{let e=document.getElementById("googleChartsScript");e&&e.remove()})),[e]);return(0,d.Y)(r.A,{currentPage:"Interests",currentSubPage:"Reading"},(0,d.Y)(t.A,{title:"Reading around the world",description:"A world map keeping track of where from I've read books. With reviews.",keywords:["Reading","World","Map","Challenge","Around The World","Reading Around The World","Books"]}),(0,d.Y)(l.A.Provider,{value:{google:e,setGoogle:a}},(0,d.Y)("div",null,(0,d.Y)("h2",null,"Books Around the World"),(0,d.Y)("p",null,"The fiction books I have read from authors from around the world."),(0,d.Y)(i.A,{data:[["Country","Title -  Author"],["Argentina","Ficciones - Jorge Luis Borges"],["Australia","The Forests of Silence - Emily Rodda"],["Belgium","Maigret - Georges Simenon"],["Brazil","The Alchemist - Paulo Coelho"],["Canada","The Penelopiad - Margaret Atwood"],["China","The Art of War - Sun Tzu"],["Ivory Coast","Standing heavy - GauZ'"],["Czech Republic","R.U.R. - Karel Capek"],["France","The Little Prince - Antoine de Saint-Exupery"],["Germany","Siddhartha - Herman Hesse"],["Greece","The Odyssey - Homer"],["Ireland","Gulliver's Travels - Jonathan Swift"],["Italy","The Prince - Niccolo Machiavelli"],["Japan","Spring Snow - Yukio Mishima"],["Nigeria","Raybearer - Jordan Ifueko"],["Norway","Hedda Gabler - Henrik Ibsen"],["Poland","Solaris - Stanislaw Lem"],["Romania","Iona - Marin Sorescu"],["Russia","Lolita - Vladimir Nabokov"],["South Korea","Kim Jiyoung, Born 1982 - Cho Nam-Joo"],["Switzerland","Heidi - Johanna Spyri"],["Taiwan","The Mermaid's Tale - Lee Wei-Jing"],["Ukraine","Death and The Penguin - Andrey Kurkov"],["United Kingdom","The Canterville Ghost - Oscar Wilde"],["United States","Giovanni's Room - James Baldwin"],["Vietnam","Ticket to Childhood - Nguyen Nhat Anh"]],id:"book"}))))}}}]);
//# sourceMappingURL=component---src-pages-reading-js-2a932b9cd33dfd9cfaf0.js.map