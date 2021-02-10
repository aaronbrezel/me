(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),r=i.n(a),s=i(7),c=i.n(s),o=(i(13),i(2)),l=i(3),h=i(5),j=i(4),d=(i(14),i.p+"static/media/LinkedIn.7392672b.svg"),b=i.p+"static/media/Twitter.85c1aa7d.svg",u=i.p+"static/media/Instagram.ed725a5f.svg",m=i.p+"static/media/GitHub.21dbe045.svg",p=i.p+"static/media/Observable.acc40afd.svg",g=i.p+"static/media/Quoteworthy.fb741bac.svg",f=i.p+"static/media/MiamiHerald.93d6ac64.svg",O=i.p+"static/media/STLPostDispatch.3d2e06ef.svg",v=i.p+"static/media/StudentLife.af3f79b4.svg";i.p;function k(e){var t=e.greeting;return Object(n.jsx)("span",{children:t})}function y(e){var t=e.emoji;return Object(n.jsx)("span",{children:t})}var x=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).greetings=["Hello","Hi there","Howdy","Welcome"],n.emojis=["\ud83d\udc4b","\ud83d\ude00","\ud83d\ude42","\ud83e\uddd0","\ud83e\udd29","\ud83e\udd73","\ud83e\udd20","\ud83d\udd90","\u270c\ufe0f"],n.state={greeting:n.greetings[Math.floor(Math.random()*n.greetings.length)],emoji:n.emojis[Math.floor(Math.random()*n.emojis.length)]},n}return Object(l.a)(i,[{key:"handleSpin",value:function(e){e.preventDefault(),this.setState({greeting:this.greetings[Math.floor(Math.random()*this.greetings.length)],emoji:this.emojis[Math.floor(Math.random()*this.emojis.length)]})}},{key:"render",value:function(){return Object(n.jsxs)("h1",{children:[Object(n.jsx)(k,{greeting:this.state.greeting}),"\xa0\xa0",Object(n.jsx)(y,{emoji:this.state.emoji})]})}}]),i}(r.a.Component),w=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsxs)("p",{children:["My name is ",Object(n.jsx)("span",{id:"myName",children:"Aaron Brezel"}),"."]}),Object(n.jsx)("p",{children:"I am a Brooklyn-based computational journalist and newsroom developer."}),Object(n.jsx)("p",{children:"I've worn lots of hats: investigative reporter, talk-radio host, data visualizationist and software engineer."}),Object(n.jsx)("p",{children:"When out of the office, I like baseball, hiking, photography and video games."}),Object(n.jsx)("p",{children:"I use this website to collect all my work links in one place."}),Object(n.jsxs)("p",{children:["Shoot me ",Object(n.jsx)("a",{href:"mailto:brezelaaron@gmail.com?subject=Hello from the website!",rel:"noreferrer",target:"_blank",children:"an email"})," if you like to chat."]}),Object(n.jsx)("p",{children:"Happy browsing!"})]})}}]),i}(r.a.Component);function S(e){var t=e.icon;return Object(n.jsx)("div",{className:"linkIcon",children:Object(n.jsx)("img",{src:t,className:"App-logo",alt:"logo"})})}function C(e){return Object(n.jsx)("div",{className:"linkSquare",children:Object(n.jsx)("a",{href:e.link,children:Object(n.jsx)(S,{class:"linkIcon",icon:e.icon})})})}var I=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).links=e.linkData.map((function(e){return Object(n.jsx)(C,{id:e.site,site:e.site,link:e.link,icon:e.icon},e.site)})),a.type=e.type,a}return Object(l.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"linkBox",children:[Object(n.jsx)("div",{className:"linkHeader",children:Object(n.jsx)("h2",{children:this.type})}),Object(n.jsx)("div",{className:"linkContainer",children:this.links})]})}}]),i}(r.a.Component),M=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).state={temp:"nothing"},e}return Object(l.a)(i,[{key:"render",value:function(){var e=[{site:"LinkedIn",type:"Social",link:"https://www.linkedin.com/in/aaron-brezel/",icon:d},{site:"Twitter",type:"Social",link:"https://twitter.com/aaronbrezel",icon:b},{site:"Instagram",type:"Social",link:"https://www.instagram.com/brezlet/",icon:u},{site:"GitHub",type:"Code",link:"https://github.com/aaronbrezel",icon:m},{site:"Observable",type:"Code",link:"https://observablehq.com/@aaronbrezel",icon:p},{site:"Quoteworthy",type:"Code",link:"https://chrome.google.com/webstore/detail/quoteworthy/aanbnbjieflpdcekdifhcdoakdogobhc",icon:g},{site:"Miami Herald",type:"Journalism",link:"https://www.miamiherald.com/search/?q=Aaron+Brezel",icon:f},{site:"St. Louis Post-Dispatch",type:"Journalism",link:"https://www.stltoday.com/search/?k=%22aaron%20brezel%22",icon:O},{site:"Student Life",type:"Journalism",link:"https://www.studlife.com/author/aaronbrezel/",icon:v}];return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"contentWindow",children:[Object(n.jsx)(x,{}),Object(n.jsx)(w,{}),Object(n.jsx)(I,{type:"Code",linkData:e.filter((function(e){return"Code"===e.type}))}),Object(n.jsx)(I,{type:"Journalism",linkData:e.filter((function(e){return"Journalism"===e.type}))}),Object(n.jsx)(I,{type:"Social",linkData:e.filter((function(e){return"Social"===e.type}))})]})})}}]),i}(r.a.Component),z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),r(e),s(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),z()}},[[15,1,2]]]);
//# sourceMappingURL=main.9fbae8fe.chunk.js.map