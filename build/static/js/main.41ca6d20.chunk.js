(this.webpackJsonpqueryfront=this.webpackJsonpqueryfront||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),c=(t(98),t(99),t(14)),i=t.n(c),m=t(24),s=t(38),u=t(42),p=t.n(u),d=t(43),g=function(){var e=Object(m.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({method:"post",url:"".concat(d.server_address,"/api/auth/login"),data:a,headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),h=t(179),f=t(167),E=t(162),v=t(180),b=t(166),y=t(177),x=t(159),w=t(168),N=t(175),k=t(39),C=t(160),S=t(161);function j(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(x.a,{color:"inherit",href:"https://material-ui.com/"},"Beliba Homa")," ",(new Date).getFullYear(),".")}var T=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function O(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(""),u=Object(s.a)(c,2),p=u[0],d=u[1],C=T(),O=function(){var a=Object(m.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t.preventDefault(),a.next=4,g({email:o,password:p});case 4:200<=(n=a.sent).status<=300&&(localStorage.setItem("query-auth-token",n.data.token),e.history.push("/reports")),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:C.paper},r.a.createElement(h.a,{className:C.avatar}),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:C.form,onSubmit:O,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){l(e.target.value)}}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){d(e.target.value)}}),r.a.createElement(b.a,{control:r.a.createElement(y.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:C.submit},"Sign In"),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(x.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(w.a,{item:!0},r.a.createElement(x.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(N.a,{mt:8},r.a.createElement(j,null)))}function W(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(x.a,{color:"inherit",href:"https://material-ui.com/"},"Beliba Homa")," ",(new Date).getFullYear(),".")}var q=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function I(){var e=q();return r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(h.a,{className:e.avatar}),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(b.a,{control:r.a.createElement(y.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(w.a,{container:!0,justify:"flex-end"},r.a.createElement(w.a,{item:!0},r.a.createElement(x.a,{href:"login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(N.a,{mt:5},r.a.createElement(W,null)))}var B=t(28),D=t(78),P=t(76),A=function(){var e=Object(m.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({method:"get",url:"".concat(d.server_address,"/reports/").concat(a.reportName,"?month=").concat(a.year,"-").concat(a.month),headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("query-auth-token")}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),F=t(169),H=t(171),R=t(174),V=t(173),K=t(172),J=t(170),M=t(176),Y=t(182),U=t(181),_=t(165),L={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},G=["2019","2020"];function Q(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(x.a,{color:"inherit",href:"https://material-ui.com/"},"Beliba Homa")," ",(new Date).getFullYear(),".")}var $=Object(C.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"dark"===e.palette.type?e.palette.grey[700]:e.palette.grey[200]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:Object(P.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}})),z=[{title:"Tutors Hours",reportName:"queryTutorsHours",description:[],buttonText:"Download Report",buttonVariant:"contained"},{title:"Kivun Part 1",reportName:"queryKivunA",description:[],buttonText:"Download Report",buttonVariant:"contained"},{title:"Kivun Part 2",reportName:"queryKivunB",description:[],buttonText:"Download Report",buttonVariant:"contained"},{title:"Kivun Part 3",reportName:"queryKivunC",description:[],buttonText:"Download Report",buttonVariant:"contained"}];function X(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(""),u=Object(s.a)(c,2),p=u[0],d=u[1],g=function(e){l(e.target.value)},h=function(e){d(e.target.value)},v=function(){var e=Object(m.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({year:p,month:o,reportName:a});case 3:200<=(t=e.sent).status<=300&&((n=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t.data)),n.setAttribute("download",a+".csv"),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),b=$();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(F.a,{position:"static",color:"default",elevation:0,className:b.appBar},r.a.createElement(J.a,{className:b.toolbar},r.a.createElement(k.a,{variant:"h6",align:"left",color:"inherit",noWrap:!0,className:b.toolbarTitle},"Beliba Homa Querying"),r.a.createElement(f.a,{onClick:function(){localStorage.removeItem("query-auth-token"),e.history.push("/login")},color:"primary",variant:"outlined",className:b.link},"Logout"))),r.a.createElement(S.a,{maxWidth:"sm",component:"main",className:b.heroContent},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Monthly Reports"),r.a.createElement(k.a,{variant:"h5",align:"center",color:"textSecondary",component:"p"},"Choose your form out of the following options:")),r.a.createElement(S.a,{maxWidth:"md",component:"main"},r.a.createElement(w.a,{container:!0,spacing:5,alignItems:"flex-end"},z.map((function(e){return r.a.createElement(w.a,{item:!0,key:e.title,xs:12,sm:"Enterprise"===e.title?12:6,md:4},r.a.createElement(H.a,null,r.a.createElement(K.a,{title:e.title,subheader:e.subheader,titleTypographyProps:{align:"center"},subheaderTypographyProps:{align:"center"},className:b.cardHeader}),r.a.createElement(V.a,null,r.a.createElement("div",{className:b.cardPricing},r.a.createElement(_.a,{variant:"outlined",className:b.formControl},r.a.createElement(U.a,null,"Month"),r.a.createElement(M.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:o,onChange:g},Object.keys(L).map((function(e){return r.a.createElement(Y.a,{key:e,value:L[e]},e)}))))),r.a.createElement("div",{className:b.cardPricing},r.a.createElement(_.a,{variant:"outlined",className:b.formControl},r.a.createElement(U.a,null,"Year"),r.a.createElement(M.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:p,onChange:h},G.map((function(e){return r.a.createElement(Y.a,{key:e,value:e},e)}))))),r.a.createElement("ul",null,e.description.map((function(e){return r.a.createElement(k.a,{component:"li",variant:"subtitle1",align:"center",key:e},e)})))),r.a.createElement(R.a,null,r.a.createElement(f.a,{onClick:function(){return v(e.reportName)},fullWidth:!0,variant:e.buttonVariant,color:"primary"},e.buttonText))))})))),r.a.createElement(S.a,{maxWidth:"md",component:"footer",className:b.footer},r.a.createElement(N.a,{mt:5},r.a.createElement(Q,null))))}function Z(e){return localStorage.getItem("query-auth-token")?r.a.createElement(B.b,e):r.a.createElement(B.a,{to:"/auth"})}function ee(e){return localStorage.getItem("query-auth-token")?r.a.createElement(B.a,{to:"/reports"}):r.a.createElement(B.b,e)}var ae=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D.a,null,r.a.createElement(B.d,null,r.a.createElement(ee,{exact:!0,path:"/",component:O}),r.a.createElement(Z,{exact:!0,path:"/reports",component:X}),r.a.createElement(ee,{exact:!0,path:"/login",component:O}),r.a.createElement(ee,{exact:!0,path:"/register",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,a,t){e.exports={server_address:"http://localhost:3000"}},93:function(e,a,t){e.exports=t(124)},98:function(e,a,t){},99:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.41ca6d20.chunk.js.map