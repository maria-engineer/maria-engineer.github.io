"use strict";(self.webpackChunkmaria_dot_engineer=self.webpackChunkmaria_dot_engineer||[]).push([[9456],{5640:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(644),a=n(8453),s=n(6540);function r(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3"},(0,a.RP)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.p,null,"I love monorepos. I love monorepos so much, there is no way this is going to be a balanced blog post. If you want a non-biased opinion piece on monorepos vs. multiple-repo developer experience, this is not it. This is an ode about why I think monorepos are amazing and why more people should use them."),"\n",s.createElement(t.p,null,"I am not alone in this opinion, Google is famous for its one great monorepo, google3. And Meta loves monorepos so much it has multiple of them."),"\n",s.createElement(t.h2,null,"What is a monorepo?"),"\n",s.createElement(t.p,null,"There's nothing too special about a monorepo. It's just a regular repository in source control, the only big difference is that everything you work on is in one single such repository."),"\n",s.createElement(t.h2,null,"Won't my code be a mess if it's all in one place?"),"\n",s.createElement(t.p,null,"Well, that is entirely up to you. In a monorepo we usually use folder structures to keep our code clean and tidy. I suppose it is possible to create confusing folder structures and litter code everywhere that is used in the most confusing places. But that's an issue in small repos as well."),"\n",s.createElement(t.h2,null,"Ok, so tell me what's so cool about them..."),"\n",s.createElement(t.p,null,"They are genuinely a joy to work in. They make cleaning up tech debt and encourage better engineering. Ok, that may be an over-exaggeration, but they certainly help make the cleanups less daunting."),"\n",s.createElement(t.h3,null,"Monorepos and Refactoring"),"\n",s.createElement(t.p,null,"Refactoring can come from a lot of places of need. It can be changes in business needs, it can be newly discovered security vulnerabilities, or just the plain old tech debt that is finally calling in to be paid. Having everything that could possibly call into your code into one place makes it a lot easier to check all your bases. With the evolution of static code analysis, we now can find those references with greater ease. This enables us to make the safe decisions when tackling that code debt. And the beauty of it is, in one repo, we often can make all this in 1 single pull request (sometimes 2, for push safety reasons, with the second being the clean-up)."),"\n",s.createElement(t.p,null,"Sure, nowadays, there are tools like SourceGraph that have made it easier to track this across repos, but there's a high chance that if I am making that change, I will not have all the repos that use my code checked out on my machine. And managing all those changes will be quite time-consuming."),"\n",s.createElement(t.p,null,"Mind you it is not only writing of the changes that becomes easier. But think of the reviewers. When reviewing one big PR that refactors everything in the exact same way, as a reviewer I can look at the code once, to determine its validity, and then verify that it is the same across all different use-cases. I have all the context I need in one single PR, instead of having to chase the information."),"\n",s.createElement(t.h3,null,"Monorepos and Developing New Stuff"),"\n",s.createElement(t.p,null,"But then maintaining old code is not the only responsibility of an engineer. Writing new code and developing new features is also important. Well hold your horses because monorepos also make this easier."),"\n",s.createElement(t.p,null,"My biggest pet peeve in software development, and what I consider to be the biggest waste of time, is reinventing the wheel. Most engineers nowadays do not work at the bleeding edge of technological discovery, what that means is that what they're trying to do has probably been done before. Maybe in a different way, but the building blocks are already there to be placed into a different shape that suits the new needs. When all these building blocks are scattered across many repos, some old and forgotten, it is difficult to find them. This leads to \"needing\" to reinvent the wheel every time. And that's not an easy feat."),"\n",s.createElement(t.p,null,"With monorepos finding the wheels that have already been invented, tried, tested, and gone through multiple improvement iterations becomes easier. The developer does less work because they can reuse the work others have done before them, the reviewer does less work because they probably can assume that what is already there works (true, there may be fallacies to this), and future maintainers of the project will have an easier time understanding as well as keeping the code up to date, as it's standardised across the company."),"\n",s.createElement(t.h3,null,"Monorepos and Culture"),"\n",s.createElement(t.p,null,"There is the question of which came first the culture or the technology. But a monorepo is closely linked with a culture of openness within the company. The fact that all developers can check out and read the entire repo, means all developers get to see and learn from all that their colleagues have done in the past. Which has countless benefits. But above all it fosters a culture of being able to fix things across the company. Sometimes there are small fixes that can be done in multiple places than just the small corner of the world of one's singular project, and the company benefits from them being propagated across the entire repository. Facebook had this famous motto of \"Nothing at Facebook is somebody else's problem.\" which I believe is one of the attitudes that allowed Facebook to become so successful and iterate so quickly. It encourages a culture of inclusion and acceptance of ideas from wherever they may come from. Thus, it creates a feeling of empowerment in its engineers. And this empowerment comes with dedication to the problems."),"\n",s.createElement(t.p,null,"I've been in places where monorepos were not used. And the developer experience was still good. However, the culture was consistently not as open. They did not encourage cross team collaboration, and it was difficult to achieve things across teams."),"\n",s.createElement(t.h2,null,"Conclusion"),"\n",s.createElement(t.p,null,"Perhaps I may be giving monorepos too much credit. Are they needed for a company to function? No. But they certainly make it a nicer company to work for."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?s.createElement(t,e,s.createElement(r,e)):r(e)},l=n(88),c=n(1042);const h=(0,o.A)("h1",{target:"e17e5u5i0"})({name:"1nr4a14",styles:"text-align:right important!"});function u(e){let{data:t,children:n}=e;const{mdx:o}=t,{frontmatter:r}=o;return"food"===r.category?s.createElement(l.A,{currentPage:"Interests",currentSubPage:"Food"},s.createElement(c.A,{title:r.title,keywords:r.keywords,description:r.description}),s.createElement("div",{className:" content"},s.createElement(h,null,r.title),n)):"theatre"===r.category?s.createElement(l.A,{currentPage:"Interests",currentSubPage:"Theatre Reviews"},s.createElement(c.A,{title:r.title+" - Theatre Review",keywords:r.keywords,description:r.description}),s.createElement("div",{className:"content"},s.createElement("h1",null,r.title),n),s.createElement("footer",{className:"footer go-center"},s.createElement("div",null,"---",r.date,"---"),s.createElement("div",{className:"lcars-bar-slice-bottom"}))):s.createElement(l.A,{currentPage:"Maria Mateescu",currentSubPage:"personal"===r.category?"Personal Log":"Engineering Log"},s.createElement(c.A,{title:r.title,keywords:r.keywords,description:r.description}),s.createElement("div",{className:"content"},s.createElement("h1",null,r.title),s.createElement(a.xA,null,n)),s.createElement("footer",{className:"footer go-center"},s.createElement("div",null,"---",r.date,"---"),s.createElement("div",{className:"lcars-bar-slice-bottom"})))}function m(e){return s.createElement(u,e,s.createElement(i,e))}},8453:function(e,t,n){n.d(t,{RP:function(){return s},xA:function(){return i}});var o=n(6540);const a=o.createContext({});function s(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:s(e),o.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-content-file-path-src-posts-engineering-blog-monorepos-mdx-87414e9ba4da8c3166f9.js.map