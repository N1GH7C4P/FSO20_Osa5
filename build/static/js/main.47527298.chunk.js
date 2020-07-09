(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),i=n.n(l),u=n(3),o=n.n(u),c=n(5),s=n(1),d=function(e){var t=e.blog,n=e.removeFunction,l=e.likeBlog,i=e.checkRemovability,u=Object(a.useState)(!1),o=Object(s.a)(u,2),c=o[0],d=o[1],m=Object(a.useState)(!1),f=Object(s.a)(m,2),g=f[0],p=f[1],v={display:g?"":"none"},b={display:c?"none":""},E={display:c?"":"none"};Object(a.useEffect)(function(){i(t)?p(!0):p(!1)},[i]);var h=function(){d(!c)};return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},className:"blog"},r.a.createElement("div",null,t.title," by ",t.author),r.a.createElement("div",{style:b},r.a.createElement("button",{onClick:h},"Show details")),r.a.createElement("div",{style:E},r.a.createElement("button",{onClick:h},"Hide"),r.a.createElement("br",null),r.a.createElement("div",null,t.url),r.a.createElement("div",null,"Likes: ",t.likes," ",r.a.createElement("button",{title:t.title,likes:t.likes,author:t.author,url:t.url,id:t.id,onClick:l},"Like"))),r.a.createElement("div",{style:v},r.a.createElement("button",{name:t.title,value:t.id,onClick:n}," Delete")))},m=function(e){var t=e.title,n=e.author,a=e.likes,l=e.url,i=e.titleHandler,u=e.authorHandler,o=e.likesHandler,c=e.urlHandler,s=e.addFunction;return r.a.createElement("form",{onSubmit:s},r.a.createElement("div",null,"Blog title:  "),r.a.createElement("input",{value:t,onChange:i}),r.a.createElement("div",null,"Author: "),r.a.createElement("input",{value:n,onChange:u}),r.a.createElement("div",null,"Blog url:  "),r.a.createElement("input",{value:l,onChange:c}),r.a.createElement("div",null,"likes: "),r.a.createElement("input",{value:a,onChange:o}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"tallenna")))},f=r.a.forwardRef(function(e,t){var n=Object(a.useState)(!1),l=Object(s.a)(n,2),i=l[0],u=l[1],o={display:i?"none":""},c={display:i?"":"none"},d=function(){u(!i)};return Object(a.useImperativeHandle)(t,function(){return{toggleVisibility:d}}),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:d},e.buttonLabel)),r.a.createElement("div",{style:c,className:"togglableContent"},e.children,r.a.createElement("button",{onClick:d},"cancel")))});f.displayName="Togglable";var g=f,p=n(4),v=n.n(p),b="/api/blogs",E=null,h={getOne:function(e){return v.a.get("".concat(b,"/").concat(e)).then(function(e){return e.data})},getAll:function(){return v.a.get(b).then(function(e){return e.data})},create:function(){var e=Object(c.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:E}},e.next=3,v.a.post(b,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return v.a.put("".concat(b,"/").concat(e),t).then(function(e){return e.data})},remove:function(e){return v.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},setToken:function(e){E="bearer ".concat(e)}},k={login:function(){var e=Object(c.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},O=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},w=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"success"},t)},j=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,l=e.username,i=e.password;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:l,name:"Username",onChange:n})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:i,name:"Password",onChange:a})),r.a.createElement("button",{type:"submit"},"login"))},y=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),f=u[0],p=u[1],v=Object(a.useState)(""),b=Object(s.a)(v,2),E=b[0],y=b[1],S=Object(a.useState)(""),C=Object(s.a)(S,2),x=C[0],B=C[1],H=Object(a.useState)(""),N=Object(s.a)(H,2),U=N[0],D=N[1],I=Object(a.useState)(null),T=Object(s.a)(I,2),J=T[0],L=T[1],R=Object(a.useState)(null),A=Object(s.a)(R,2),F=A[0],P=A[1],V=Object(a.useState)(""),z=Object(s.a)(V,2),W=z[0],q=z[1],G=Object(a.useState)(""),K=Object(s.a)(G,2),M=K[0],Q=K[1],X=Object(a.useState)(null),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],_=Object(a.useState)(!1),ee=Object(s.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useRef)(),re=function(){var e=Object(c.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with",W,M),e.prev=2,e.next=5,k.login({username:W,password:M});case 5:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),h.setToken(n.token),$(n),q(""),Q(""),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),L("wrong credentials"),setTimeout(function(){L(null)},5e3);case 17:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(c.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("logging out: ",W),window.localStorage.removeItem("loggedBlogappUser");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){h.getAll().then(function(e){var t=e.sort(function(e,t){return t.likes-e.likes});l(t)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);$(t),h.setToken(t.token)}},[]);var ie=function(e){e.preventDefault(),window.confirm("Poistetaanko ".concat(e.target.name,"?"))&&(h.remove(e.target.value).then(l(n.filter(function(t){return t.id!==e.target.value}))),P("".concat(e.target.name," poistettiin tietokannasta.")),L(null))},ue=function(e){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);return e.user.username===n.username}},oe=function(e){e.preventDefault();var t=n.find(function(t){return t.title===e.target.title}),a={title:t.title,author:t.author,url:t.url,likes:t.likes+1,user:t.user,id:t.id};h.update(a.id,a);var r=n.find(function(e){return e.id===a.id}),l=n.indexOf(r);n.splice(l,1,a)},ce=function(e){ae.current.toggleVisibility(),e.preventDefault();var t={title:f,author:E,url:x,likes:U};if(n.find(function(e){return e.title===f})){var a=n.find(function(e){return e.title===f});if(window.confirm("".concat(f," on jo luettelossa. Haluatko korvata blogin?"))){var r={title:f,author:E,url:x,likes:U,id:a.id};h.update(r.id,r).catch(function(e){L(e)});var i=n.find(function(e){return e.id===r.id}),u=n.indexOf(i);n.splice(u,1,r),p(""),y(""),D(""),B(""),P('Blogin "'.concat(r.title,'" tiedot p\xe4ivitettiin.'))}}else h.create(t).then(function(e){l(n.concat(e)),p(""),y(""),B(""),D(""),P("".concat(e.title," lis\xe4ttiin blogilistalle."))}).catch(function(e){console.log(e.response.data),L(e.response.data)})},se=function(e){q(e.target.value)},de=function(e){Q(e.target.value)},me=function(e){p(e.target.value)},fe=function(e){y(e.target.value)},ge=function(e){B(e.target.value)},pe=function(e){D(e.target.value)};return r.a.createElement("div",null,r.a.createElement(O,{message:J}),r.a.createElement(w,{message:F}),r.a.createElement("h1",null,"Blogilista"),null===Z?function(){var e={display:te?"none":""},t={display:te?"":"none"};return r.a.createElement("div",null,r.a.createElement("div",{style:e},r.a.createElement("button",{onClick:function(){return ne(!0)}},"log in")),r.a.createElement("div",{style:t},r.a.createElement(j,{username:W,password:M,handleUsernameChange:se,handlePasswordChange:de,handleSubmit:re}),r.a.createElement("button",{onClick:function(){return ne(!1)}},"cancel")))}():r.a.createElement("div",null,r.a.createElement("p",null,Z.name," logged in"),r.a.createElement(g,{buttonLabel:"new blog",ref:ae},r.a.createElement(m,{title:f,author:E,url:x,likes:U,titleHandler:me,authorHandler:fe,urlHandler:ge,likesHandler:pe,addFunction:ce})),r.a.createElement("form",{onSubmit:le},r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"logout")))),n.map(function(e){return r.a.createElement(d,{key:e.id,blog:e,removeFunction:ie,likeBlog:oe,checkRemovability:ue})}))};n(40);console.log("Rendering app."),i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.47527298.chunk.js.map