(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),o=n.n(r),a=(n(9),n(3)),i=(n(10),n(11),n(0));function u(e){var t=e.monster;return Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:""}),Object(i.jsx)("h2",{children:t.name}),Object(i.jsx)("p",{className:"wrapOnOverflow",children:t.email})]})}n(13);function l(e){var t=e.monsters;return Object(i.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(i.jsx)(u,{monster:e},e.id)}))})}n(14);function h(e){var t=e.placeholder,n=e.handleChange;return Object(i.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}var j=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),o=Object(a.a)(r,2),u=o[0],j=o[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{className:"title",children:"Monsters Rolodex"}),Object(i.jsx)(h,{placeholder:"Search Monster",handleChange:function(e){j(e.target.value)}}),Object(i.jsx)(l,{monsters:d})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.d9ed8f71.chunk.js.map