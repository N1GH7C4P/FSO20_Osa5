(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),u=n(3),i=n.n(u),c=n(5),s=n(1),d=function(e){var t=e.blog,n=e.removeFunction,l=e.likeBlog,o=Object(a.useState)(!1),u=Object(s.a)(o,2),i=u[0],c=u[1],d=Object(a.useState)(!1),m=Object(s.a)(d,2),f=m[0],g=m[1],p={display:f?"":"none"},v={display:i?"none":""},b={display:i?"":"none"};Object(a.useEffect)(function(){h()},[]);var E=function(){c(!i)},h=function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var n=JSON.parse(e);console.log(t.user.username),console.log(n),console.log(n.username),console.log(t.user.username===n.username),t.user.username===n.username?g(!0):g(!1)}};return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},className:"blog"},r.a.createElement("div",null,t.title),r.a.createElement("div",{style:v},r.a.createElement("button",{onClick:E},"Show details")),r.a.createElement("div",{style:b},r.a.createElement("button",{onClick:E},"Hide"),r.a.createElement("br",null),r.a.createElement("div",null,t.author),r.a.createElement("div",null,t.url),r.a.createElement("div",null,t.likes," ",r.a.createElement("button",{title:t.title,likes:t.likes,author:t.author,url:t.url,id:t.id,onClick:l},"Like"))),r.a.createElement("div",{style:p},r.a.createElement("button",{name:t.title,value:t.id,onClick:n}," Delete")))},m=function(e){var t=e.title,n=e.author,a=e.likes,l=e.url,o=e.titleHandler,u=e.authorHandler,i=e.likesHandler,c=e.urlHandler,s=e.addFunction;return r.a.createElement("form",{onSubmit:s},r.a.createElement("div",null,"Blog title:  "),r.a.createElement("input",{value:t,onChange:o}),r.a.createElement("div",null,"Author: "),r.a.createElement("input",{value:n,onChange:u}),r.a.createElement("div",null,"Blog url:  "),r.a.createElement("input",{value:l,onChange:c}),r.a.createElement("div",null,"likes: "),r.a.createElement("input",{value:a,onChange:i}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"tallenna")))},f=r.a.forwardRef(function(e,t){var n=Object(a.useState)(!1),l=Object(s.a)(n,2),o=l[0],u=l[1],i={display:o?"none":""},c={display:o?"":"none"},d=function(){u(!o)};return Object(a.useImperativeHandle)(t,function(){return{toggleVisibility:d}}),r.a.createElement("div",null,r.a.createElement("div",{style:i},r.a.createElement("button",{onClick:d},e.buttonLabel)),r.a.createElement("div",{style:c},e.children,r.a.createElement("button",{onClick:d},"cancel")))}),g=n(4),p=n.n(g),v="/api/blogs",b=null,E={getOne:function(e){return p.a.get("".concat(v,"/").concat(e)).then(function(e){return e.data})},getAll:function(){return p.a.get(v).then(function(e){return e.data})},create:function(){var e=Object(c.a)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,p.a.post(v,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return p.a.put("".concat(v,"/").concat(e),t).then(function(e){return e.data})},remove:function(e){return p.a.delete("".concat(v,"/").concat(e)).then(function(e){return e.data})},setToken:function(e){b="bearer ".concat(e)}},h={login:function(){var e=Object(c.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},O=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},k=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"success"},t)},j=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,l=e.username,o=e.password;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:l,name:"Username",onChange:n})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:o,name:"Password",onChange:a})),r.a.createElement("button",{type:"submit"},"login"))},w=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),g=u[0],p=u[1],v=Object(a.useState)(""),b=Object(s.a)(v,2),w=b[0],y=b[1],S=Object(a.useState)(""),C=Object(s.a)(S,2),B=C[0],x=C[1],H=Object(a.useState)(""),U=Object(s.a)(H,2),D=U[0],I=U[1],N=Object(a.useState)(null),J=Object(s.a)(N,2),T=J[0],A=J[1],F=Object(a.useState)(null),L=Object(s.a)(F,2),P=L[0],R=L[1],V=Object(a.useState)(""),z=Object(s.a)(V,2),W=z[0],q=z[1],G=Object(a.useState)(""),K=Object(s.a)(G,2),M=K[0],Q=K[1],X=Object(a.useState)(null),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],_=Object(a.useState)(!1),ee=Object(s.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useRef)(),re=function(){var e=Object(c.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with",W,M),e.prev=2,e.next=5,h.login({username:W,password:M});case 5:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),E.setToken(n.token),$(n),q(""),Q(""),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),A("wrong credentials"),setTimeout(function(){A(null)},5e3);case 17:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(c.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("logging out: ",W),window.localStorage.removeItem("loggedBlogappUser");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){E.getAll().then(function(e){var t=e.sort(function(e,t){return t.likes-e.likes});l(t)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);$(t),E.setToken(t.token)}},[]);var oe=function(e){e.preventDefault(),window.confirm("Poistetaanko ".concat(e.target.name,"?"))&&(E.remove(e.target.value).then(l(n.filter(function(t){return t.id!==e.target.value}))),R("".concat(e.target.name," poistettiin tietokannasta.")),A(null))},ue=function(e){e.preventDefault();var t=n.find(function(t){return t.title===e.target.title}),a={title:t.title,author:t.author,url:t.url,likes:t.likes+1,user:t.user,id:t.id};E.update(a.id,a);var r=n.find(function(e){return e.id===a.id}),l=n.indexOf(r);n.splice(l,1,a)},ie=function(e){ae.current.toggleVisibility(),e.preventDefault();var t={title:g,author:w,url:B,likes:D};if(n.find(function(e){return e.title===g})){var a=n.find(function(e){return e.title===g});if(window.confirm("".concat(g," on jo luettelossa. Haluatko korvata blogin?"))){var r={title:g,author:w,url:B,likes:D,id:a.id};E.update(r.id,r).catch(function(e){A('Blogi "'.concat(r.title,'" on jo poistettu palvelimelta.'))});var o=n.find(function(e){return e.id===r.id}),u=n.indexOf(o);n.splice(u,1,r),p(""),y(""),I(""),x(""),R('Blogin "'.concat(r.title,'" tiedot p\xe4ivitettiin.'))}}else E.create(t).then(function(e){l(n.concat(e)),p(""),y(""),x(""),I(""),R("".concat(e.title," lis\xe4ttiin blogilistalle."))}).catch(function(e){console.log(e.response.data),A(e.response.data)})},ce=function(e){q(e.target.value)},se=function(e){Q(e.target.value)},de=function(e){p(e.target.value)},me=function(e){y(e.target.value)},fe=function(e){x(e.target.value)},ge=function(e){I(e.target.value)};return r.a.createElement("div",null,r.a.createElement(O,{message:T}),r.a.createElement(k,{message:P}),r.a.createElement("h1",null,"Blogilista"),null===Z?function(){var e={display:te?"none":""},t={display:te?"":"none"};return r.a.createElement("div",null,r.a.createElement("div",{style:e},r.a.createElement("button",{onClick:function(){return ne(!0)}},"log in")),r.a.createElement("div",{style:t},r.a.createElement(j,{username:W,password:M,handleUsernameChange:ce,handlePasswordChange:se,handleSubmit:re}),r.a.createElement("button",{onClick:function(){return ne(!1)}},"cancel")))}():r.a.createElement("div",null,r.a.createElement("p",null,Z.name," logged in"),r.a.createElement(f,{buttonLabel:"new blog",ref:ae},r.a.createElement(m,{title:g,author:w,url:B,likes:D,titleHandler:de,authorHandler:me,urlHandler:fe,likesHandler:ge,addFunction:ie})),r.a.createElement("form",{onSubmit:le},r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"logout")))),n.map(function(e){return r.a.createElement(d,{key:e.id,blog:e,removeFunction:oe,likeBlog:ue})}))};n(40);console.log("Rendering app."),o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.043eed8f.chunk.js.map