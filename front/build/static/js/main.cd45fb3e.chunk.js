(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{88:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),o=a.n(i),c=a(9),s=a.n(c),r=(a(88),a(28)),l=a(42),d=a(21),h=a(51),j=a(50),m=a(22),b=(a(131),a(145)),u=a(133),p=a(134),x=a(135),O=a(136),f=a(101),g=a(100),k=a(137),y=a(143),S=a(138),v=a(139),T=a(141),C=a(72),D=a(129),M=a(140),N=a(34),z=a.n(N),B=a(52),w=a(68),P=a.n(w),G=a(69),H=a.n(G),F=function e(){Object(r.a)(this,e),this.id=void 0,this.title=void 0,this.body=void 0,this.datetime=void 0,this.id=0,this.title="",this.body="",this.datetime=""},E=["Noto Sans JP","Lato","\u6e38\u30b4\u30b7\u30c3\u30af Medium","\u6e38\u30b4\u30b7\u30c3\u30af\u4f53","Yu Gothic Medium","YuGothic","\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN","Hiragino Kaku Gothic ProN","\u30e1\u30a4\u30ea\u30aa","Meiryo","\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af","MS PGothic","sans-serif"].join(","),J=Object(C.a)({typography:{fontFamily:E},palette:{primary:B.a,type:"dark"}}),U=Object(D.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{},appBarSpacer:e.mixins.toolbar,SearchfieldSize:{width:"100%",marginTop:"2%"},listItemSize:{padding:0,paddingTop:5},paperSize:{width:"100%"},paperTypoTitleSize:{padding:"1%"},paperTypoBodySize:{margin:"1%",marginTop:"1%",paddingBottom:"1%"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},LinkSize:{width:"100%",textDecoration:"none"}}}));function L(e){var t=U();return Object(n.jsx)("header",{children:Object(n.jsx)(p.a,{className:t.appBar,position:"fixed",children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(u.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){e.handleClick(),e.snackbarTextHandle("\u30e1\u30cb\u30e5\u30fc\u8868\u793a")},children:Object(n.jsx)(P.a,{})}),Object(n.jsx)(O.a,{variant:"h6",className:t.title,children:"\u30e1\u30e2\u30e1\u30e2\u30e1"})]})})})}function I(e){var t=[];return e.memoData.forEach((function(a){t.push(function(e){return Object(n.jsx)(f.a,{className:e.classes.listItemSize,children:Object(n.jsxs)(g.a,{className:e.classes.paperSize,onClick:function(){e.handleClick(e.memo)},children:[Object(n.jsx)(O.a,{className:e.classes.paperTypoTitleSize,variant:"h5",noWrap:!0,children:e.memo.title}),Object(n.jsx)(O.a,{className:e.classes.paperTypoBodySize,variant:"body1",noWrap:!0,children:e.memo.body})]})})}({classes:e.classes,handleClick:function(t){e.handleClick(t)},memo:a}))})),Object(n.jsx)(n.Fragment,{children:t})}function Y(e){var t=U(),a=Object(i.useState)(""),o=Object(m.a)(a,2),c=o[0],s=o[1],r=Object(i.useState)(e.memoData),l=Object(m.a)(r,2),d=l[0],h=l[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:t.appBarSpacer}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(y.a,{label:"\u691c\u7d22",value:c,className:t.SearchfieldSize,onChange:function(t){s(t.target.value),h(function(e,t){var a=[];return e.forEach((function(e){-1!==e.title.indexOf(t)&&-1===a.indexOf(e)&&a.push(e)})),a}(e.memoData,t.target.value))}}),Object(n.jsx)(S.a,{style:{maxHeight:"100%",overflow:"auto"},children:Object(n.jsx)(I,{classes:t,memoData:""!==c?d:e.memoData,handleClick:function(t){e.handleClick(t,"update")}})}),Object(n.jsx)(v.a,{color:"primary","aria-label":"add",className:t.fab,onClick:function(){e.handleClick(new F,"insert")},children:Object(n.jsx)(H.a,{})})]})]})}var K=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={open:!1,snackbarText:"",snackbarTextHandle:n.setSnackbarText,jsonData:[]},n.handleClose=n.handleClose.bind(Object(d.a)(n)),n.setSnackbarText=n.setSnackbarText.bind(Object(d.a)(n)),fetch("http://iwabuchi.ddns.net:8080/",{method:"get"}).then((function(e){return e.json()})).then((function(e){n.setJsonData(e)})).catch((function(e){console.error("Error: ",e)})),n}return Object(l.a)(a,[{key:"setJsonData",value:function(e){this.setState({jsonData:e})}},{key:"setSnackbarText",value:function(e){this.setState({snackbarText:e})}},{key:"handleClose",value:function(e,t){"clickaway"!==t&&this.setState({open:!1})}},{key:"render",value:function(){var e=this;return Object(n.jsx)(M.a,{theme:J,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,message:this.state.snackbarText,action:Object(n.jsx)(o.a.Fragment,{children:Object(n.jsx)(u.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleClose,children:Object(n.jsx)(z.a,{fontSize:"small"})})})}),Object(n.jsx)(T.a,{}),Object(n.jsx)(L,{snackbarTextHandle:this.setSnackbarText,handleClick:function(){e.setState({open:!0})}}),Object(n.jsx)(Y,{memoData:this.state.jsonData,handleClick:function(t,a){console.log(t),e.props.history.push({pathname:"/editor",state:{memoData:t,editMode:a}})},setMemoData:function(t){e.setState({jsonData:t})}})]})})}}]),a}(o.a.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),o(e),c(e)}))},W=a(73),A=a(142),q=a(70),Q=a.n(q),V=a(71),X=a.n(V),Z=a(49),$=["Noto Sans JP","Lato","\u6e38\u30b4\u30b7\u30c3\u30af Medium","\u6e38\u30b4\u30b7\u30c3\u30af\u4f53","Yu Gothic Medium","YuGothic","\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN","Hiragino Kaku Gothic ProN","\u30e1\u30a4\u30ea\u30aa","Meiryo","\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af","MS PGothic","sans-serif"].join(","),_=Object(C.a)({typography:{fontFamily:$},palette:{primary:B.a,type:"dark"}}),ee=Object(D.a)((function(e){return{root:{flexGrow:1,height:"100%"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{},appBarSpacer:e.mixins.toolbar,SearchfieldSize:{width:"100%",marginTop:"2%"},listItemSize:{padding:0,paddingTop:5},paperSize:{margin:"1%",marginTop:"5%",width:"100%",height:"auto",padding:"1%"},paperTypoTitleSize:{margin:"1%"},paperTypoBodySize:{margin:"1%",marginTop:"-1%"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function te(e){var t=ee(),a=o.a.useState(null),i=Object(m.a)(a,2),c=i[0],s=i[1];return Object(n.jsx)("header",{children:Object(n.jsx)(p.a,{className:t.appBar,position:"fixed",children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(Z.b,{to:"/",style:{textDecoration:"none"},children:Object(n.jsx)(u.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){e.handleClick(),e.snackbarTextHandle("\u30e1\u30cb\u30e5\u30fc\u8868\u793a"),""!==e.memoData.title&&""!==e.memoData.body&&fetch("http://iwabuchi.ddns.net:8080/",{method:"update"===e.editMode?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.memoData.id,title:e.memoData.title,body:e.memoData.body})}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},children:Object(n.jsx)(Q.a,{color:"action"})})}),Object(n.jsx)(O.a,{variant:"h6",className:t.title,children:"\u30e1\u30e2\u30e1\u30e2\u30e1"}),Object(n.jsx)(u.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(n.jsx)(X.a,{color:"action",style:{textAlign:"right"}})}),Object(n.jsx)(W.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){s(null)},children:Object(n.jsx)(A.a,{onClick:function(){s(null),""!==e.memoData.title&&""!==e.memoData.body&&(fetch("http://iwabuchi.ddns.net:8080/",{method:"update"===e.editMode?"DELETE":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.memoData.id,title:e.memoData.title,body:e.memoData.body})}).then((function(e){return e.json()})).catch((function(e){console.log(e)})),e.history.replace("/"))},children:"\u524a\u9664"})})]})})})}function ae(e){var t=ee(),a=Object(i.useState)(e.memo.title),o=Object(m.a)(a,2),c=o[0],s=o[1],r=Object(i.useState)(e.memo.body),l=Object(m.a)(r,2),d=l[0],h=l[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:t.appBarSpacer}),Object(n.jsx)(k.a,{children:Object(n.jsxs)(g.a,{className:t.paperSize,children:[Object(n.jsx)(y.a,{label:"Title",style:{margin:"1%",width:"98%"},value:c,onChange:function(t){s(t.target.value),e.handleUpdateMemo(t.target.value,d)}}),Object(n.jsx)("br",{}),Object(n.jsx)(y.a,{label:"Body",multiline:!0,variant:"outlined",style:{marginTop:"2%",marginBottom:"2%",width:"100%"},value:d,onChange:function(t){h(t.target.value),e.handleUpdateMemo(c,t.target.value)}})]})})]})}var ne=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).memodata=void 0,n.editMode=void 0,n.state={open:!1,snackbarText:"",snackbarTextHandle:n.setSnackbarText},n.handleClose=n.handleClose.bind(Object(d.a)(n)),n.setSnackbarText=n.setSnackbarText.bind(Object(d.a)(n)),n.handleUpdateMemo=n.handleUpdateMemo.bind(Object(d.a)(n)),n.memodata=n.props.location.state.memoData,n.editMode=n.props.location.state.editMode,n}return Object(l.a)(a,[{key:"setSnackbarText",value:function(e){this.setState({snackbarText:e})}},{key:"handleClose",value:function(e,t){"clickaway"!==t&&this.setState({open:!1})}},{key:"handleUpdateMemo",value:function(e,t){this.memodata.title=e,this.memodata.body=t}},{key:"render",value:function(){var e=this;return Object(n.jsx)(M.a,{theme:_,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,message:this.state.snackbarText,action:Object(n.jsx)(o.a.Fragment,{children:Object(n.jsx)(u.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleClose,children:Object(n.jsx)(z.a,{fontSize:"small"})})})}),Object(n.jsx)(T.a,{}),Object(n.jsx)(te,{history:this.props.history,snackbarTextHandle:this.setSnackbarText,handleClick:function(){e.setState({open:!0})},memoData:this.memodata,editMode:this.editMode}),Object(n.jsx)(ae,{snackbarTextHandle:this.setSnackbarText,handleClick:function(){e.setState({open:!0})},handleUpdateMemo:this.handleUpdateMemo,memo:this.memodata})]})})}}]),a}(o.a.Component),ie=a(12);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(Z.a,{children:Object(n.jsxs)(ie.c,{children:[Object(n.jsx)(ie.a,{exact:!0,path:"/",component:K}),Object(n.jsx)(ie.a,{exact:!0,path:"/editor",component:ne}),Object(n.jsx)(ie.a,{component:K})]})})}),document.getElementById("root")),R()}},[[99,1,2]]]);
//# sourceMappingURL=main.cd45fb3e.chunk.js.map