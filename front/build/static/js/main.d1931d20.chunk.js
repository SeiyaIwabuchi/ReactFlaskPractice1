(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{85:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),c=a.n(i),o=a(9),s=a.n(o),r=(a(85),a(37)),l=a(43),h=a(21),d=a(50),b=a(49),j=a(35),p=(a(126),a(140)),m=a(128),x=a(129),u=a(130),O=a(131),g=a(132),f=a(97),k=a(133),S=a(138),T=a(134),y=a(135),v=a(137),C=a(70),z=a(124),N=a(136),B=a(32),w=a.n(B),M=a(51),H=a(67),G=a.n(H),P=a(68),D=a.n(P),F=a(26),U=["Noto Sans JP","Lato","\u6e38\u30b4\u30b7\u30c3\u30af Medium","\u6e38\u30b4\u30b7\u30c3\u30af\u4f53","Yu Gothic Medium","YuGothic","\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN","Hiragino Kaku Gothic ProN","\u30e1\u30a4\u30ea\u30aa","Meiryo","\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af","MS PGothic","sans-serif"].join(","),L=Object(C.a)({typography:{fontFamily:U},palette:{primary:M.a,type:"dark"}}),I=Object(z.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{},appBarSpacer:e.mixins.toolbar,SearchfieldSize:{width:"100%",marginTop:"2%"},listItemSize:{padding:0,paddingTop:5},paperSize:{width:"100%"},paperTypoTitleSize:{padding:"1%"},paperTypoBodySize:{margin:"1%",marginTop:"1%",paddingBottom:"1%"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},LinkSize:{width:"100%",textDecoration:"none"}}}));function J(e){var t=I();return Object(n.jsx)("header",{children:Object(n.jsx)(x.a,{className:t.appBar,position:"fixed",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(m.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){e.handleClick(),e.snackbarTextHandle("\u30e1\u30cb\u30e5\u30fc\u8868\u793a")},children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(O.a,{variant:"h6",className:t.title,children:"\u30e1\u30e2\u30e1\u30e2\u30e1"})]})})})}function Y(e){return Object(n.jsx)(g.a,{className:e.classes.listItemSize,children:Object(n.jsx)(F.b,{to:"/editor",className:e.classes.LinkSize,children:Object(n.jsxs)(f.a,{className:e.classes.paperSize,onClick:e.handleClick,children:[Object(n.jsx)(O.a,{className:e.classes.paperTypoTitleSize,variant:"h5",noWrap:!0,children:"\u898b\u51fa\u3057"}),Object(n.jsx)(O.a,{className:e.classes.paperTypoBodySize,variant:"body1",noWrap:!0,children:"\u5185\u5bb9:hogehogehogehogehogehogehogehogehogrhogrhogr"})]})})})}function K(e){for(var t=[],a=0;a<10;a++)t.push(Y({classes:e.classes,handleClick:e.handleClick}));return Object(n.jsx)(n.Fragment,{children:t})}function R(e){var t=I();return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:t.appBarSpacer}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(S.a,{label:"\u691c\u7d22",className:t.SearchfieldSize}),Object(n.jsx)(T.a,{style:{maxHeight:"100%",overflow:"auto"},children:Object(n.jsx)(K,{classes:t,handleClick:function(){e.handleClick(),e.snackbarTextHandle("\u7de8\u96c6\u753b\u9762\u3078\u9077\u79fb")}})}),Object(n.jsx)(F.b,{to:"/editor",children:Object(n.jsx)(y.a,{color:"primary","aria-label":"add",className:t.fab,children:Object(n.jsx)(D.a,{})})})]})]})}var W=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={open:!1,snackbarText:"",snackbarTextHandle:n.setSnackbarText},n.handleClose=n.handleClose.bind(Object(h.a)(n)),n.setSnackbarText=n.setSnackbarText.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"setSnackbarText",value:function(e){this.setState({snackbarText:e})}},{key:"handleClose",value:function(e,t){"clickaway"!==t&&this.setState({open:!1})}},{key:"render",value:function(){var e=this;return Object(n.jsx)(N.a,{theme:L,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,message:this.state.snackbarText,action:Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)(m.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleClose,children:Object(n.jsx)(w.a,{fontSize:"small"})})})}),Object(n.jsx)(v.a,{}),Object(n.jsx)(J,{snackbarTextHandle:this.setSnackbarText,handleClick:function(){e.setState({open:!0})}}),Object(n.jsx)(R,{snackbarTextHandle:this.setSnackbarText,handleClick:function(){e.setState({open:!0})}})]})})}}]),a}(c.a.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,141)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))},q=a(69),A=a.n(q),Q=["Noto Sans JP","Lato","\u6e38\u30b4\u30b7\u30c3\u30af Medium","\u6e38\u30b4\u30b7\u30c3\u30af\u4f53","Yu Gothic Medium","YuGothic","\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN","Hiragino Kaku Gothic ProN","\u30e1\u30a4\u30ea\u30aa","Meiryo","\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af","MS PGothic","sans-serif"].join(","),V=Object(C.a)({typography:{fontFamily:Q},palette:{primary:M.a,type:"dark"}}),X=Object(z.a)((function(e){return{root:{flexGrow:1,height:"100%"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{},appBarSpacer:e.mixins.toolbar,SearchfieldSize:{width:"100%",marginTop:"2%"},listItemSize:{padding:0,paddingTop:5},paperSize:{margin:"1%",marginTop:"5%",width:"100%",height:"auto",padding:"1%"},paperTypoTitleSize:{margin:"1%"},paperTypoBodySize:{margin:"1%",marginTop:"-1%"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));var Z=function e(){Object(r.a)(this,e),this.title="",this.body=""};function $(e){var t=X();return Object(n.jsx)("header",{children:Object(n.jsx)(x.a,{className:t.appBar,position:"fixed",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(F.b,{to:"/",style:{textDecoration:"none"},children:Object(n.jsx)(m.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){console.log(e.memoData),e.handleClick(),e.snackbarTextHandle("\u30e1\u30cb\u30e5\u30fc\u8868\u793a"),fetch("http://localhost:8080/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.memoData.title,body:e.memoData.body})}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},children:Object(n.jsx)(A.a,{color:"action"})})}),Object(n.jsx)(O.a,{variant:"h6",className:t.title,children:"\u30e1\u30e2\u30e1\u30e2\u30e1"})]})})})}function _(e){var t=X(),a=Object(i.useState)(""),c=Object(j.a)(a,2),o=c[0],s=c[1],r=Object(i.useState)(""),l=Object(j.a)(r,2),h=l[0],d=l[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:t.appBarSpacer}),Object(n.jsx)(k.a,{children:Object(n.jsxs)(f.a,{className:t.paperSize,children:[Object(n.jsx)(S.a,{label:"Title",style:{margin:"1%",width:"98%"},value:o,onChange:function(t){s(t.target.value),e.handleUpdateMemo(t.target.value,h)}}),Object(n.jsx)("br",{}),Object(n.jsx)(S.a,{label:"Body",multiline:!0,variant:"outlined",style:{marginTop:"2%",marginBottom:"2%",width:"100%"},value:h,onChange:function(t){d(t.target.value),e.handleUpdateMemo(o,t.target.value)}})]})})]})}var ee=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).memodata=void 0,n.state={open:!1,snackbarText:"",snackbarTextHandle:n.setSnackbarText},n.handleClose=n.handleClose.bind(Object(h.a)(n)),n.setSnackbarText=n.setSnackbarText.bind(Object(h.a)(n)),n.handleUpdateMemo=n.handleUpdateMemo.bind(Object(h.a)(n)),n.memodata=new Z,n}return Object(l.a)(a,[{key:"setSnackbarText",value:function(e){this.setState({snackbarText:e})}},{key:"handleClose",value:function(e,t){"clickaway"!==t&&this.setState({open:!1})}},{key:"handleUpdateMemo",value:function(e,t){this.memodata.title=e,this.memodata.body=t,console.log(this.memodata.title,this.memodata.body)}},{key:"render",value:function(){var e=this;return Object(n.jsx)(N.a,{theme:V,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,message:this.state.snackbarText,action:Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)(m.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleClose,children:Object(n.jsx)(w.a,{fontSize:"small"})})})}),Object(n.jsx)(v.a,{}),Object(n.jsx)($,{snackbarTextHandle:this.setSnackbarText,handleClick:function(){e.setState({open:!0})},memoData:this.memodata}),Object(n.jsx)(_,{snackbarTextHandle:this.setSnackbarText,handleClick:function(){e.setState({open:!0})},handleUpdateMemo:this.handleUpdateMemo})]})})}}]),a}(c.a.Component),te=a(12);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(F.a,{children:Object(n.jsxs)(te.c,{children:[Object(n.jsx)(te.a,{exact:!0,path:"/",component:W}),Object(n.jsx)(te.a,{exact:!0,path:"/editor",component:ee}),Object(n.jsx)(te.a,{component:W})]})})}),document.getElementById("root")),E()}},[[96,1,2]]]);
//# sourceMappingURL=main.d1931d20.chunk.js.map