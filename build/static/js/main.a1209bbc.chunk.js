(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),o=n(2),c=n.n(o),i=n(4),s=n(3),p=function(e){var t=e.blog,n=e.removeFunction;return r.a.createElement("div",{className:"blog"},r.a.createElement("br",null),r.a.createElement("div",null,t.title),r.a.createElement("div",null,t.author),r.a.createElement("div",null,t.url),r.a.createElement("div",null,t.likes),r.a.createElement("button",{name:t.title,value:t.id,onClick:n}," Delete"))},d=function(e){var t=e.title,n=e.author,a=e.likes,l=e.url,u=e.titleHandler,o=e.authorHandler,c=e.likesHandler,i=e.urlHandler,s=e.addFunction;return r.a.createElement("form",{onSubmit:s},r.a.createElement("div",null,"Blog title:  "),r.a.createElement("input",{value:t,onChange:u}),r.a.createElement("div",null,"Author: "),r.a.createElement("input",{value:n,onChange:o}),r.a.createElement("div",null,"Blog url:  "),r.a.createElement("input",{value:l,onChange:i}),r.a.createElement("div",null,"likes: "),r.a.createElement("input",{value:a,onChange:c}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"tallenna")))},f=n(5),m=n.n(f),v=null,g={getAll:function(){return m.a.get("/api/blogs").then(function(e){return e.data})},create:function(){var e=Object(i.a)(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},e.next=3,m.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return m.a.put("".concat("/api/blogs","/").concat(e),t).then(function(e){return e.data})},remove:function(e){return m.a.delete("".concat("/api/blogs","/").concat(e)).then(function(e){return e.data})},setToken:function(e){v="bearer ".concat(e)}},b={login:function(){var e=Object(i.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},h=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),f=o[0],m=o[1],v=Object(a.useState)(""),h=Object(s.a)(v,2),w=h[0],O=h[1],j=Object(a.useState)(""),k=Object(s.a)(j,2),S=k[0],y=k[1],x=Object(a.useState)(""),B=Object(s.a)(x,2),H=B[0],C=B[1],D=Object(a.useState)(null),A=Object(s.a)(D,2),F=A[0],I=A[1],J=Object(a.useState)(""),N=Object(s.a)(J,2),T=N[0],U=N[1],P=Object(a.useState)(""),z=Object(s.a)(P,2),R=z[0],q=z[1],G=Object(a.useState)(null),K=Object(s.a)(G,2),L=K[0],M=K[1],Q=function(){var e=Object(i.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with",T,R),e.prev=2,e.next=5,b.login({username:T,password:R});case 5:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),g.setToken(n.token),M(n),U(""),q(""),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),I("wrong credentials"),setTimeout(function(){I(null)},5e3);case 17:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("logging out: ",T),window.localStorage.removeItem("loggedBlogappUser");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){g.getAll().then(function(e){l(e)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);M(t),g.setToken(t.token)}},[]);var W=function(e){e.preventDefault(),window.confirm("Poistetaanko ".concat(e.target.title,"?"))&&(g.remove(e.target.value).then(l(n.filter(function(t){return t.id!==e.target.value}))),I("".concat(e.target.title," poistettiin tietokannasta.")))},X=function(e){e.preventDefault();var t={title:f,author:w,url:S,likes:H};if(n.find(function(e){return e.title===f})){var a=n.find(function(e){return e.title===f});if(window.confirm("".concat(f," on jo luettelossa. Haluatko korvata blogin?"))){var r={title:f,author:w,url:S,likes:H,id:a.id};g.update(r.id,r).catch(function(e){I('Blogi "'.concat(r.title,'" on jo poistettu palvelimelta.'))});var u=n.find(function(e){return e.id===r.id}),o=n.indexOf(u);n.splice(o,1,r),m(""),O(""),C(""),y(""),I('Blogin "'.concat(r.title,'" tiedot p\xe4ivitettiin.'))}}else g.create(t).then(function(e){l(n.concat(e)),m(""),O(""),y(""),C(""),I("".concat(e.title," lis\xe4ttiin puhelinluetteloon."))}).catch(function(e){console.log(e.response.data),I(e.response.data)})},Y=function(e){m(e.target.value)},Z=function(e){O(e.target.value)},$=function(e){y(e.target.value)},_=function(e){C(e.target.value)};return r.a.createElement("div",null,r.a.createElement(E,{message:F}),r.a.createElement("h1",null,"Blogilista"),null===L?r.a.createElement("form",{onSubmit:Q},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:T,name:"Username",onChange:function(e){var t=e.target;return U(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:R,name:"Password",onChange:function(e){var t=e.target;return q(t.value)}})),r.a.createElement("button",{type:"submit"},"login")):r.a.createElement("div",null,r.a.createElement("p",null,L.name," logged in"),r.a.createElement(d,{title:f,author:w,url:S,likes:H,titleHandler:Y,authorHandler:Z,urlHandler:$,likesHandler:_,addFunction:X}),r.a.createElement("form",{onSubmit:V},r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"logout")))),n.map(function(e){return r.a.createElement(p,{key:e.id,blog:e,removeFunction:W})}))};n(40);console.log("Rendering app."),u.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a1209bbc.chunk.js.map