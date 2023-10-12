"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[813],{687:function(e,r,n){n.d(r,{Dw:function(){return p},M1:function(){return o},TP:function(){return i},_L:function(){return u},tx:function(){return l}});var t=n(165),c=n(861),s="ec73ed453538a4674e2e8f7ad6508b0a",a="https://api.themoviedb.org/3",u=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(a,"/trending/movie/day?api_key=").concat(s));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(a,"/movie/").concat(r,"?api_key=").concat(s));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(a,"/movie/").concat(r,"/credits?api_key=").concat(s));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c.cast);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(a,"/movie/").concat(r,"/reviews?api_key=").concat(s));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(a,"/search/movie?api_key=").concat(s,"&query=").concat(r));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()},149:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var t,c,s,a,u,i=n(165),o=n(861),l=n(439),p=n(791),d=n(689),h=n(87),v=n(687),f=n(168),x=n(822),m=x.Z.div(t||(t=(0,f.Z)(["\n  margin-top: 10px;\n  display: flex;\n  padding-left: 15px;\n"]))),j=x.Z.div(c||(c=(0,f.Z)([""]))),Z=x.Z.img(s||(s=(0,f.Z)([""]))),w=x.Z.ul(a||(a=(0,f.Z)(["\n  list-style: none;\n"]))),g=x.Z.div(u||(u=(0,f.Z)(["\nborder: 3px solid #dddddd;\nborder-left: unset;\nborder-right: unset;\npadding-left: 15px;\n"]))),b=n(184),k=function(){var e,r,n=(0,d.UO)().movieId,t=(0,p.useState)(null),c=(0,l.Z)(t,2),s=c[0],a=c[1],u=(0,d.TH)(),f=(0,p.useState)(null!==(e=null===(r=u.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),x=(0,l.Z)(f,1)[0];return(0,p.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.TP)(n);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.OL,{to:x,children:" \u2190 Go back"}),(0,b.jsxs)(b.Fragment,{children:[s&&(0,b.jsxs)(m,{children:[(0,b.jsx)("div",{children:(0,b.jsx)(Z,{src:"https://image.tmdb.org/t/p/w300".concat(s.poster_path),alt:s.title})}),(0,b.jsx)(j,{children:(0,b.jsxs)(w,{children:[(0,b.jsxs)("h2",{children:[s.title,"(",new Date(s.release_date).getFullYear(),")"]}),(0,b.jsx)("li",{children:(0,b.jsxs)("p",{children:["User Score: ",Math.round(10*s.vote_average)||0,"%"]})}),(0,b.jsxs)("li",{children:[(0,b.jsx)("h3",{children:"Overviev"}),s.overview]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("h4",{children:"Genres"}),s.genres.map((function(e){return e.name})).join(", ")]})]})})]}),(0,b.jsxs)(g,{children:[(0,b.jsx)("p",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(h.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(d.j3,{})]})]})}}}]);
//# sourceMappingURL=813.8f598a39.chunk.js.map