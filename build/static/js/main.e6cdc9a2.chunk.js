(this.webpackJsonpqueryfront=this.webpackJsonpqueryfront||[]).push([[0],{120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),l=(t(95),t(96),t(11)),i=t.n(l),m=t(18),s=t(24),u=t(35),p=t.n(u),d=t(71);function g(){return d.PROD_SERVER_ADDRESS}var E=function(){var e=Object(m.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(),e.next=3,p()({method:"post",url:"".concat(t,"/api/auth/login"),data:a,headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=t(170),f=t(158),v=t(156),b=t(166),y=t(157),x=t(168),w=t(153),k=t(159),S=t(167),j=t(36),C=t(154),O=t(155);function N(){return r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(w.a,{color:"inherit",href:"https://material-ui.com/"},"Beliba Homa")," ",(new Date).getFullYear(),".")}var T=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function q(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),p=u[0],d=u[1],g=T(),C=function(){var a=Object(m.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,E({email:o,password:p});case 4:200<=(n=a.sent).status<=300&&(localStorage.setItem("query-auth-token",n.data.token),e.history.push("/reports")),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,null),r.a.createElement("div",{className:g.paper},r.a.createElement(h.a,{className:g.avatar}),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:g.form,onSubmit:C,noValidate:!0},r.a.createElement(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){c(e.target.value)}}),r.a.createElement(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){d(e.target.value)}}),r.a.createElement(y.a,{control:r.a.createElement(x.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit},"Sign In"),r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:!0},r.a.createElement(w.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{to:"/register",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(S.a,{mt:8},r.a.createElement(N,null)))}var D=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function R(){var e=D();return r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(h.a,{className:e.avatar}),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(k.a,{container:!0,spacing:2},r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(y.a,{control:r.a.createElement(x.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(k.a,{container:!0,justify:"flex-end"},r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(S.a,{mt:5},r.a.createElement(N,null)))}var W=t(38),B=t(28),I=t(72),P=g(),A=function(){var e=Object(m.a)(i.a.mark((function e(a){var t,n,r,o,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"blob","x-access-token":localStorage.getItem("query-auth-token")},n={method:"GET",url:"".concat(P,"/api/reports/staticReport?reportType=").concat(a.reportType,"&month=").concat(a.month,"-").concat(a.year),responseType:"arraybuffer",headers:t},e.prev=2,e.next=5,p()(n);case 5:r=e.sent,o="".concat(a.reportType,"-").concat(a.month,"-").concat(a.year,".xlsx"),c=URL.createObjectURL(new Blob([r.data])),(l=document.createElement("a")).href=c,l.setAttribute("download",o),document.body.appendChild(l),l.click(),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(2),Error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(a){return e.apply(this,arguments)}}(),F=t(160),V=t(162),_=t(165),H=t(164),K=t(163),L=t(161);t(73);var U=t(75);var G=function(e){var a=e.onDateChange,t=Object(n.useState)(new Date),o=Object(s.a)(t,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){console.log(c),a(c.getMonth()+1,c.getFullYear())}),[c]),r.a.createElement("div",null,r.a.createElement(U.a,{onChange:l,value:c}))},M=Object(C.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"dark"===e.palette.type?e.palette.grey[700]:e.palette.grey[200]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:Object(I.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function Y(e){var a=Object(n.useState)((new Date).getMonth+1),t=Object(s.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)((new Date).getFullYear()),u=Object(s.a)(l,2),p=u[0],d=u[1],g=Object(n.useState)([]),E=Object(s.a)(g,2),h=(E[0],E[1],function(e,a){d(a),c(e)}),b=function(){var e=Object(m.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({year:p,month:o,reportType:a});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(a){return e.apply(this,arguments)}}(),y=M();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement(F.a,{position:"static",color:"default",elevation:0,className:y.appBar},r.a.createElement(L.a,{className:y.toolbar},r.a.createElement(j.a,{variant:"h6",align:"left",color:"inherit",noWrap:!0,className:y.toolbarTitle},"Beliba Homa Reports"),r.a.createElement(f.a,{onClick:function(){localStorage.removeItem("query-auth-token"),e.history.push("/login")},color:"primary",variant:"outlined",className:y.link},"Logout"))),r.a.createElement(O.a,{maxWidth:"sm",component:"main",className:y.heroContent},r.a.createElement(j.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Monthly Reports"),r.a.createElement(j.a,{variant:"h5",align:"center",color:"textSecondary",component:"p"},"Choose your form out of the following options:")),r.a.createElement(O.a,{maxWidth:"md",component:"main"},r.a.createElement(k.a,{container:!0,spacing:5,alignItems:"flex-end","justify-content":"center","flex-wrap":"wrap"},["queryTutorsHours","queryKivunA","queryKivunB","queryKivunC","queryGeneralParticipents","quaterlyKivunReport"].map((function(e){return r.a.createElement(k.a,{key:e,item:!0,md:4},r.a.createElement(V.a,null,r.a.createElement(K.a,{title:e,titleTypographyProps:{align:"center"},subheaderTypographyProps:{align:"center"},className:y.cardHeader}),r.a.createElement(H.a,null,r.a.createElement("div",{className:y.cardPricing},r.a.createElement(G,{onDateChange:h}))),r.a.createElement(_.a,null,r.a.createElement(f.a,{onClick:function(){return b(e)},fullWidth:!0,variant:"contained",color:"primary"},"Download Report"))))})))),r.a.createElement(O.a,{maxWidth:"md",component:"footer",className:y.footer},r.a.createElement(S.a,{mt:5},r.a.createElement(N,null))))}function J(e){return localStorage.getItem("query-auth-token")?r.a.createElement(B.b,e):r.a.createElement(B.a,{to:"/login"})}function $(e){return localStorage.getItem("query-auth-token")?r.a.createElement(B.a,{to:"/reports"}):r.a.createElement(B.b,e)}var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W.a,null,r.a.createElement(B.d,null,r.a.createElement($,{exact:!0,path:"/",component:q}),r.a.createElement(J,{exact:!0,path:"/reports",component:Y}),r.a.createElement($,{exact:!0,path:"/login",component:q}),r.a.createElement($,{exact:!0,path:"/register",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a){e.exports={PROD_SERVER_ADDRESS:"http://belibahomaquerynode.herokuapp.com",DEV_SERVER_ADDRESS:"http://localhost:3000"}},90:function(e,a,t){e.exports=t(120)},95:function(e,a,t){},96:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.e6cdc9a2.chunk.js.map