import{s as P,n as _}from"../chunks/scheduler.D0bTj_Jr.js";import{S,i as $,e as m,c as p,a as u,d as o,b as E,f,g as j,t as v,s as q,h as g,j as w,k as x}from"../chunks/index.BCgFsq5-.js";import{e as k}from"../chunks/each.D6YF6ztN.js";function b(c,n,a){const t=c.slice();return t[1]=n[a],t}function y(c){let n,a=c[1].title+"",t,l,s,e=c[1].content+"",r;return{c(){n=m("h1"),t=v(a),l=q(),s=m("p"),r=v(e),this.h()},l(i){n=p(i,"H1",{class:!0});var h=u(n);t=g(h,a),h.forEach(o),l=w(i),s=p(i,"P",{});var d=u(s);r=g(d,e),d.forEach(o),this.h()},h(){E(n,"class","mt-5 text-[30px]")},m(i,h){f(i,n,h),x(n,t),f(i,l,h),f(i,s,h),x(s,r)},p:_,d(i){i&&(o(n),o(l),o(s))}}}function C(c){let n,a=k(c[0]),t=[];for(let l=0;l<a.length;l+=1)t[l]=y(b(c,a,l));return{c(){n=m("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){n=p(l,"DIV",{class:!0});var s=u(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(o),this.h()},h(){E(n,"class","text-white")},m(l,s){f(l,n,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null)},p(l,[s]){if(s&1){a=k(l[0]);let e;for(e=0;e<a.length;e+=1){const r=b(l,a,e);t[e]?t[e].p(r,s):(t[e]=y(r),t[e].c(),t[e].m(n,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=a.length}},i:_,o:_,d(l){l&&o(n),j(t,l)}}}function D(c){return[[{title:"隱私權政策更新日期：2024年3月14日",content:"歡迎您光臨我們的網站，我們十分重視您的隱私權。本隱私權政策旨在明確說明當您使用我們的網站時，我們將如何收集、使用和保護您提供給我們的個人資訊。"},{title:"資訊收集與使用：",content:"我們會運用各種技術來收集與您互動相關的資訊。這包括使用 cookies和類似的追蹤技術來收集您訪問我們網站的資訊。我們也會使用分析服務來收集和分析一些一般性的資訊，例如網站訪問量和訪客的來源。這些資訊將幫助我們了解我們的訪客以及他們如何使用我們的服務，從而改進和客製化我們的服務。"},{title:"資訊保護：",content:"我們致力於保護您的個人資訊安全。我們採用各種安全技術和程序來保護您提供給我們的資訊，以防止未經授權的訪問、使用或泄露。"},{title:"資訊分享：",content:"我們不會出售、交換或租借您的個人資訊給第三方。我們僅在符合法律規定的情況下，以及為了提供我們的服務或保護我們的權益而分享您的資訊。"},{title:"隱私權政策的修改：",content:"我們保留隨時更新和修改本隱私權政策的權利。任何修改將在我們的網站上公佈，敬請定期查閱以獲取最新消息。"},{title:"聯絡我們：",content:"如果您對我們的隱私權政策有任何疑問或意見，請通過我們網站上提供的聯絡方式與我們聯繫。我們將竭誠為您解答任何疑問。"}]]}class z extends S{constructor(n){super(),$(this,n,D,C,P,{})}}export{z as component};