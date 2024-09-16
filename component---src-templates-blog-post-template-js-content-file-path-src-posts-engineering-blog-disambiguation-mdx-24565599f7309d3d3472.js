"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[8936],{8991:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(644),a=n(8453),i=n(6540),r=n(1223);function s(e){const t=Object.assign({p:"p",h2:"h2",code:"code",hr:"hr"},(0,a.RP)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.p,null,'If you ask anyone what is the job of a software engineer, they will probably say "write code". In my experience, if I use 50% of my work week writing code, that is a lot. I think I may have achieved that a few times, and they were all in the context of hackathons. Most of the job is communicating: with your fellow engineers, the designers, management, cross-functional partners, users, etc. That is often to determine the answer to the question such as "What should I be doing?" or my preferred version "What is the problem I am trying to solve?". Because once I have a problem I can think of a few solutions and then start coding them.'),"\n",i.createElement(t.p,null,"In software engineering the solutions we are expected to provide are code. And code tends to not leave much space for ambiguity. In fact, computers are extremely good at unambiguously doing exactly what the code tells them to do",i.createElement(r.A,{presentation:"1"},"Much to the chagrin to software engineers like me, who need mnemonics for left and right, and would argue the computer should have been able to tell that when I said right, I meant my other right."),". Because if you look closely, what computers ultimately are, is just a set of tightly packed deterministic processes that we run on deterministic data. But Computers don’t do well with ambiguity. The more closely you look the less ambiguous the computers need the instructions to be, up to the point where they end up being a series of ANDs, ORs, NOTs, etc… And ultimately, as software engineers, what we do is being able to translate an ambiguous task into these extremely clear instructions"),"\n",i.createElement(t.h2,null,"A History of Software Engineering"),"\n",i.createElement(t.p,null,"To start off let's have a quick look at the history of software engineering, as presented by me, a non-historian, trying to make a point",i.createElement(r.A,{presentation:"2"}," If you want a less biased version I am sure ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/History_of_software_engineering",target:"_blank"},"Wikipedia")," can provide you with a slightly more detailed and significantly less biased portrayal of said history."),". While computers have evolved significantly since their inception, with things getting smaller, more efficient, and more powerful, the base units have remained more or less the same, excluding ongoing research on quantum computing. Simplified: We have a series of 1s and 0s (bits)",i.createElement(r.A,{presentation:"3"},"Which is if we start things a bit later (pun intended). Technically if we consider the first computer to be the ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/Bombe",target:"_blank"},"Bombe")," inputs were not bits, but letters which were set on mechanical gears.")," going through circuitry connected by gates that do logical operations like and, not, or, etc... and return the result. These gates can then be combined to do specific operations like addition. And all of these circuits are combined to an instruction set that the programmer can then use, usually through a low level language like ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/Assembly_language",target:"_blank"},"Assembly"),", to tell the computer to what you wanted it to do. People used to write code a lot of code in Assembly",i.createElement(r.A,{presentation:"4"},"You know the famous Apollo mission ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/Apollo_Guidance_Computer#/media/File:Margaret_Hamilton_-_restoration.jpg",target:"_blank"},"photo")," of Margaret Hamilton? Those were a lot of instructions."),", but it's a much rarer now. Most Software Engineers nowadays do not need to even know what Assembly looks like",i.createElement(r.A,{presentation:"5"},"Though some may try to write entire games, like ",i.createElement("a",{href:"https://www.reddit.com/r/programming/comments/4pphk3/i_made_this_512_byte_snake_game_in_pure_assembly/",target:"_blank"},"Snake"),", in Assembly as a form of either scientific self-flagellation or ostentatious peacocking."),". Later on compilers came along that made it possible to write slightly more human-readable instructions",i.createElement(r.A,{presentation:"6"},"If one can call FORTRAN or Lisp readable."),", that were then translated to machine instructions. The compilers became more advanced, and with them the capabilities of the languages improved in what you could express through them. Just like a child gathers more vocabulary."),"\n",i.createElement(t.p,null,"Nowadays, we have more specialised languages like Rust, JavaScript and Python, each with its own sets of strengths and weaknesses. A lot of algorithms have been abstracted away as well in common libraries we need only use. So new engineers learn more and more how to communicate in these new frameworks that the languages provide."),"\n",i.createElement(t.h2,null,"Speculations on the future of Software Engineering"),"\n",i.createElement(t.p,null,"The big topic in the technology space nowadays is LLMs. With ",i.createElement("a",{href:"https://github.com/features/copilot",target:"_blank"},"Github's Copilot")," there is increasing speculation about AI making the job of Software Engineers obsolete. Personally I would not be too concerned. With the use of similar technologies, auto-completes in IDEs have been getting more and more useful. When autocomplete appeared, automatically filling in the name of the functions no engineer lost their job. We were just no longer expecting the engineers to remember the name of the functions, their arguments, and most importantly which order they go in. With the usage of the mysterious AI, the auto-complete instead of auto-completing ",i.createElement(t.code,null,"ca")," to ",i.createElement(t.code,null,"catch")," it will catch the error, and throw it back out, because that's mostly what we do anyway."),"\n",i.createElement(t.p,null,"In the state they are nowadays, I am not too worried about LLMs magically being able to start being able to write code. But let's assume that LLMs became advanced enough that they are able to create correct code",i.createElement(r.A,{presentation:"7"},"And not the most statistically likely correct code."),' based on what you told them. What you then have: is just another compiler. Then instead of using JavaScript as a language in which the engineer communicates to the computer, they use spoken English, that the LLM translates to JavaScript that then gets translated to Machine Instructions, eventually. But, as we are already seeing in the increase of talks about prompt engineering as a buzzword and study, that English we will use to "speak" to the LLM is likely not going to be the same as we use when speaking with each other, at least if we want to get the desired results. And at this point will it not be just another programming language?'),"\n",i.createElement(t.h2,null,"Software Engineers as Computer Disambiguators"),"\n",i.createElement(t.p,null,"In the business world companies tend to want to make money, so ultimately that is the problem they are trying to solve. How they go about it is solutions. The bigger the company the more it can do to achieve that goal. But because there are so many people doing different things, it may not be entirely clear to the software engineer who is writing up the animation for the like button on Facebook, on how that has anything to do with making the company more money. And the important thing is, they don't really need to. Their skill is to be able to tell the computer which pixels on the monitor to light up blue."),"\n",i.createElement(t.p,null,'But this engineer themselves got their instructions from someone who probably told them to "make the like button more fun to click". They themselves probably got instructions from someone else that "we want to drive up engagement on posts", who probably got instructions from someone who said "we want people to interact with more posts", who got the prompt that "we want people to see more ads", which ultimately came from the original problem statement of "we want more money." Each iteration clarifies the problem further until there is one single set of instructions, the code, but the disambiguation does not stop there, once the engineer writes the code, the compiler translates it to a set of instructions that get sent to the processor, and then there are a lot of electrons firing in circuits. If you were to just look at the electrons firing it may take you a while to tell that it\'s just doing a thumbs up animation.'),"\n",i.createElement(t.p,null,"At every level, each person removes one layer of ambiguity up to the point where it's just LEDs lighting up on a screen, in the right way. But if you go to a computer and just tell it what you want it will probably sit there silently and not do it. You can't expect it to understand you and magically do what you intended it to do. Similarly, if you were to go to the Engineer who was doing the thumbs up animation and present them with the problem, they would probably shrug their shoulders and probably not very successfully try to do it, if they try at all. Ultimately this also falls under my belief about one of the biggest and most important differences between a senior and a junior engineer, and that is how much ambiguity are they able to remove."),"\n",i.createElement(t.h2,null,"Conclusions"),"\n",i.createElement(t.p,null,"Computers get their instructions from the software engineer, who get their instructions from their seniors, who get their instructions from their managers, who get their instructions from their customers (in a very simplified communication model). As instructions don’t come bottom up, but from the top of the communication funnel, every layer has to sift out ambiguity to create a more and more concrete set of instructions for the lower levels up to the point where we have the computer doing the thing we want it to do. Once we've done that we probably need to clearly communicate it back up, and the cycle begins again."),"\n",i.createElement(t.hr),"\n",i.createElement(t.p,null,i.createElement("sup",null,"1")," Much to the chagrin to software engineers like me, who need mnemonics for left and right, and would argue the computer should have been able to tell that when I said right, I meant my other right."),"\n",i.createElement(t.p,null,i.createElement("sup",null,"2")," If you want a less biased version I am sure ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/History_of_software_engineering",target:"_blank"},"Wikipedia")," can provide you with a slightly more detailed and significantly less biased portrayal of said history."),"\n",i.createElement(t.p,null,i.createElement("sup",null,"3")," Which is if we start things a bit later (pun intended). Technically if we consider the first computer to be the ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/Bombe",target:"_blank"},"Bombe")," inputs were not bits, but letters which were set on mechanical gears."),"\n",i.createElement(t.p,null,i.createElement("sup",null,"4")," You know the famous Apollo mission ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/Apollo_Guidance_Computer#/media/File:Margaret_Hamilton_-_restoration.jpg",target:"_blank"},"photo")," of Margaret Hamilton? Those were a lot of instructions."),"\n",i.createElement(t.p,null,i.createElement("sup",null,"5")," Though some may try to write entire games, like ",i.createElement("a",{href:"https://www.reddit.com/r/programming/comments/4pphk3/i_made_this_512_byte_snake_game_in_pure_assembly/",target:"_blank"},"Snake"),", in Assembly as a form of either scientific self-flagellation or ostentatious peacocking."),"\n",i.createElement(t.p,null,i.createElement("sup",null,"6")," If one can call FORTRAN or Lisp readable."),"\n",i.createElement(t.p,null,i.createElement("sup",null,"7")," And not the most statistically likely correct code."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?i.createElement(t,e,i.createElement(s,e)):s(e)},h=n(88),c=n(1042);const m=(0,o.A)("h1",{target:"e17e5u5i1"})({name:"f58qsc",styles:"font-size:3rem;@media (max-width: 420px){min-font-size:24px;}text-align:right important!"}),u=(0,o.A)("div",{target:"e17e5u5i0"})({name:"193diwy",styles:'padding:10px 60px 10px 60px;@media (max-width: 420px){padding:10px 10px 10px 10px;}font-family:source-serif-pro,Georgia,Cambria,"Helvetica Neue","Arial Narrow",serif;text-rendering:optimizelegibility;font-weight:400'});function d(e){let{data:t,children:n}=e;const{mdx:o}=t,{frontmatter:r}=o;return"food"===r.category?i.createElement(h.A,{currentPage:"Interests",currentSubPage:"Food"},i.createElement(c.A,{title:r.title,keywords:r.keywords,description:r.description}),i.createElement(u,null,i.createElement(m,null,r.title),i.createElement(a.xA,null,n))):"theatre"===r.category?i.createElement(h.A,{currentPage:"Interests",currentSubPage:"Theatre Reviews"},i.createElement(c.A,{title:r.title+" - Review",keywords:r.keywords,description:r.description}),i.createElement(u,null,i.createElement(m,null,r.title),i.createElement(a.xA,null,n)),i.createElement("footer",{className:"footer go-center"},i.createElement("div",null,"---",r.date,"---"),i.createElement("div",{className:"lcars-bar-slice-bottom"}))):i.createElement(h.A,{currentPage:"Maria Mateescu",currentSubPage:"personal"===r.category?"Personal Log":"Engineering Log"},i.createElement(c.A,{title:r.title,keywords:r.keywords,description:r.description}),i.createElement(u,null,i.createElement(m,null,r.title),i.createElement(a.xA,null,n)),i.createElement("footer",{className:"footer go-center"},i.createElement("div",null,"---",r.date,"---"),i.createElement("div",{className:"lcars-bar-slice-bottom"})))}function g(e){return i.createElement(d,e,i.createElement(l,e))}},8453:function(e,t,n){n.d(t,{RP:function(){return i},xA:function(){return s}});var o=n(6540);const a=o.createContext({});function i(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||r:i(e),o.createElement(a.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-content-file-path-src-posts-engineering-blog-disambiguation-mdx-24565599f7309d3d3472.js.map