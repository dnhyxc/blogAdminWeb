"use strict";(self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[]).push([[616],{43455:(e,t,n)=>{n.d(t,{Z:()=>h});n(67294);var r=n(80411),a=n.n(r),i=n(31298),l=n(31660);const o="index__container--DASxH",s="index__wrap--zMp8f",c="index__scrollWrap--GYu0y",d="index__scrollBar--jWRjC",u="index__dark--aoQki",m="index__hideWrapPadding--xINbC",p="index__contentWidth--csdpd",f="index__showContainer--mFO7k",v="index__darkContainer--j8WUx";var x=n(85893);const h=function(e){var t=e.children,n=e.className,r=e.containerClassName,h=e.wrapClassName,g=e.onScroll,_=e.scrollbarRef,y=e.contentWrapRef,b=e.autoHeight,j=e.autoHeightMax,k=e.themeMode,w=(0,l.Jg)().siderVisible,I=(0,l.nR)().htmlWidth;return(0,x.jsx)("div",{className:a()(o,r,w&&I>960&&f,"dark"===k&&v),children:(0,x.jsx)("div",{className:a()(s,h,w&&I>960&&m),ref:y,children:(0,x.jsx)("div",{className:a()(c,n,w&&I>960&&p,"dark"===k&&u),children:(0,x.jsx)(i.$B,{autoHide:!0,autoHeight:b,autoHeightMax:j,ref:_,className:d,onScrollFrame:g,children:t})})})})}},46380:(e,t,n)=>{n.d(t,{Z:()=>j});n(41958);var r=n(46072),a=(n(15692),n(29759)),i=n(15861),l=n(29439),o=n(64687),s=n.n(o),c=n(67294),d=n(42016),u=n(49101),m=n(80411),p=n.n(m),f=n(74317),v=n(81237),x=n(95717),h=n(19674),g=n(20555),_=n(49058);const y={clickNoSelectText:"index__clickNoSelectText--sBjh1",Upload:"index__Upload--X2jAF",uploadImgWrap:"index__uploadImgWrap--Ubp2a",mark:"index__mark--c7H4B",iconWrap:"index__iconWrap--oiei1",iconLeft:"index__iconLeft--Kmk_q",imgStyle:"index__imgStyle--Fztw3",imageWrapStyle:"index__imageWrapStyle--dE9ww"};var b=n(85893);const j=function(e){var t=e.formLabel,n=e.needPreview,o=void 0===n||n,m=e.filePath,j=e.transitionImg,k=e.form,w=e.setFilePath,I=e.imgStyle,Z=e.markStyle,S=e.uploadWrapStyle,N=e.setAlertStatus,O=e.aspectRatio,C=void 0===O?1:O,P=e.uploadStyle,T=e.uploadNode,M=e.listType,D=void 0===M?"picture-card":M,W=e.getUploadFilePath,E=e.deleteOldCoverImage,V=(0,c.useState)(!1),R=(0,l.Z)(V,2),B=R[0],F=R[1],z=(0,c.useState)(!1),H=(0,l.Z)(z,2),A=H[0],U=H[1],L=(0,c.useState)({url:"",filename:"",type:""}),Y=(0,l.Z)(L,2),q=Y[0],J=Y[1],K=(0,c.useRef)(null),X=(0,h.Z)().userInfoStore.getUserInfo,G=function(){var e=(0,i.Z)(s().mark((function e(t){var n,r,a,i,l,o,c,d,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.type,a=t.size/1024/1024<20,_.nz.includes(r)||(0,g.vU)(_.Vo),a||(0,g.vU)("请上传小于20M的图片"),e.next=6,(0,g.hw)(t);case 6:return i=e.sent,l=null==t||null===(n=t.name)||void 0===n?void 0:n.lastIndexOf("."),o=t.name.slice(l+1),c=new File([t],"".concat(i,"_").concat(X.userId,".").concat(o),{type:t.type}),d=new FileReader,u=new Image,d.readAsDataURL(c),d.onload=function(e){u.src=d.result,u.onload=function(){var t;J({url:null===(t=e.target)||void 0===t?void 0:t.result,filename:c.name,type:c.type}),U(!0)}},e.abrupt("return",_.nz.includes(r)&&a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{className:p()(P,y.Upload),children:[A&&(0,b.jsx)(a.Z,{title:"请选择剪裁区域",className:y.cropperModalWrap,visible:A,width:820,onCancel:function(){return U(!1)},onOk:function(){K.current&&K.current.getCroppedCanvas().toBlob(function(){var e=(0,i.Z)(s().mark((function e(n){var r,a,i,l,c,d,u,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.hv)({file:n,quality:.5,mimeType:q.type});case 2:return r=e.sent,a=r.file,(i=new FormData).append("file",a,q.filename),e.t0=g.wg,e.next=9,x.cT(i);case 9:e.t1=e.sent,l=(0,e.t0)(e.t1),U(!1),l.success&&(w&&w(null==l||null===(c=l.data)||void 0===c?void 0:c.filePath),null==k||k.setFieldsValue(t?{mainCover:null==l||null===(d=l.data)||void 0===d?void 0:d.filePath}:{coverImage:null==l||null===(u=l.data)||void 0===u?void 0:u.filePath}),W&&W(null==l||null===(m=l.data)||void 0===m?void 0:m.filePath,o),(0,g.Vp)(l.message)),l.success||409!==l.code||N&&N(!0),l.success||409===l.code||401===l.code||(0,g.vU)(l.message);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:(0,b.jsx)(d.Z,{src:q.url,ref:K,onInitialized:function(e){K.current=e},preview:".uploadCrop",viewMode:1,zoomable:!0,type:"image/jpeg",guides:!1,background:!1,rotatable:!1,autoCropArea:1,style:{width:"auto",height:"100%"},aspectRatio:C,cropBoxResizable:!0,cropBoxMovable:!0,dragMode:"move",center:!0})}),(0,b.jsx)(r.Z,{name:"file",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))},listType:D,showUploadList:!1,beforeUpload:G,customRequest:function(){},children:T||!m&&(0,b.jsx)(u.Z,{})}),!T&&m&&(0,b.jsxs)("div",{className:p()(S,y.uploadImgWrap),children:[(0,b.jsxs)("div",{className:p()(Z,y.mark),children:[o&&(0,b.jsx)(f.Z,{name:"icon-browse",className:p()(y.iconWrap,y.iconLeft),onClick:function(){F(!0)}}),(0,b.jsx)(f.Z,{name:"icon-shanchu",className:y.iconWrap,onClick:function(){null==E||E(),w&&w("")}})]}),(0,b.jsx)(v.Z,{url:m,transitionImg:j,className:I,imageWrapStyle:y.imageWrapStyle})]}),o&&m&&(0,b.jsx)(a.Z,{visible:B,centered:!0,closable:!1,width:600,footer:null,onCancel:function(){F(!1)},children:(0,b.jsx)(v.Z,{url:m,transitionImg:j,className:y.imgStyle})})]})}},90616:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Oe});n(34935);var r=n(71577),a=n(4942),i=n(15861),l=n(29439),o=n(64687),s=n.n(o),c=n(67294),d=n(39711),u=n(96974),m=n(80411),p=n.n(m),f=n(1647),v=n(19674),x=n(10814),h=n(26260),g=(n(39296),n(90356),n(47181)),_=n.n(g),y=n(32523),b=n.n(y),j=n(90471),k=n(79582),w=n.n(k),I=n(72922),Z=n.n(I),S=n(51936),N=n.n(S),O=n(15660),C=n.n(O),P=n(95717),T=n(20555),M=[["heading","bold","italic"],["code","codeblock"],["hr","quote","strike"],["table","image","link"],["ul","ol","indent","outdent","task"],["scrollSync"],[{name:"myItem",tooltip:"myItem",command:"italic",text:"@",className:"toastui-editor-toolbar-icons",style:{backgroundImage:"none",color:"#333",fontSize:"20px"}}]];const D="index__editContainer--KE5bO",W="index__hidePadding--AoQkm",E="index__dark--_1fku";var V=n(85893);const R=function(e){var t=e.initialValue,n=e.onGetMackdown,r=e.siderVisible,a=e.onSaveDraft,l=e.themeMode,o=e.htmlWidth,d=void 0===o?0:o;(0,c.useEffect)((function(){var e,r=new j.ZP({el:document.querySelector("#editor"),placeholder:"请输入文章内容",initialValue:t||"",initialEditType:"markdown",previewStyle:d>960?"vertical":"tab",language:"zh-CN",height:"100%",previewHighlight:!1,hideModeSwitch:!0,toolbarItems:M,plugins:[b(),[w(),{highlighter:C()}],Z(),N(),_()],events:{change:function(){n&&n(r.getMarkdown())}},hooks:{addImageBlobHook:function(e,t){u(e,t)}}});r.insertToolbarItem({groupIndex:d>960?1:0,itemIndex:d>960?6:1},{name:"myItem",el:(e=document.createElement("button"),e.className="toastui-editor-toolbar-icons last",e.style.backgroundImage="none",e.style.margin="0",e.innerHTML='<b style="font-size: 14px; color: #868686;">'.concat(d>960?"JS":"保存","</b>"),e.addEventListener("click",(function(){d>960?(r.insertText("```js\n\n```"),r.moveCursorToStart(0)):a&&a()})),e)})}),[t,d]);var u=function(){var e=(0,i.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",t),e.t0=T.wg,e.next=5,P.cT(r);case 5:e.t1=e.sent,(a=(0,e.t0)(e.t1)).success&&n(a.data.filePath);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,V.jsx)("div",{className:p()(D,r&&d>960&&W,"dark"===l&&E),id:"editor"})};var B=n(31660),F=n(49058),z=(n(42931),n(83107)),H=(n(10845),n(92170)),A=(n(46186),n(16114)),U=(n(78943),n(19650)),L=(n(11266),n(47933)),Y=(n(4567),n(28682)),q=(n(44295),n(67773)),J=(n(37796),n(24044)),K=n(57254),X=n(30381),G=n.n(X),Q=n(46380),$=n(29191);const ee="index__tag--HDiNE",te="index__darkTag--PH1gj",ne="index__datePicker--XanBv",re="index__saveDraft--gjMz3",ae="index__drawerTitle--VYmxu",ie="index__ReleaseModel--JjIIM",le="index__uploadStyle--udnFe",oe="index__uploadImg--tjQK6",se="index__tagList--Y0yoP",ce="index__tagInp--V6f3y",de="index__tagBtn--BjrJn",ue="index__dark--iOCb1",me="index__tagMenu--xPRUJ";function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=J.Z.TextArea;const xe=function(e){var t=e.visible,n=void 0===t||t,a=e.content,o=e.articleId,d=e.initialValue,m=e.onCancel,f=e.onSaveDraft,x=e.deleteDraft,h=e.themeMode,g=(0,c.useState)(""),_=(0,l.Z)(g,2),y=_[0],b=_[1],j=(0,c.useState)(),k=(0,l.Z)(j,2),w=k[0],I=k[1],Z=(0,c.useState)(""),S=(0,l.Z)(Z,2),N=S[0],O=S[1],C=(0,u.s0)(),M=q.Z.useForm(),D=(0,l.Z)(M,1)[0],W=(0,v.Z)().userInfoStore.getUserInfo,E=(0,B.bc)(),R=E.showAlert,X=E.toLogin,pe=E.onCloseAlert,xe=E.setAlertStatus,he=(0,B.nR)().htmlWidth;(0,c.useEffect)((function(){O((null==d?void 0:d.coverImage)||"")}),[d]),(0,c.useEffect)((function(){null!=d&&d.coverImage&&b(null==d?void 0:d.coverImage),I(null==d?void 0:d.tag),D.setFieldsValue({title:null==d?void 0:d.title}),D.setFieldsValue({classify:null==d?void 0:d.classify}),D.setFieldsValue({coverImage:null==d?void 0:d.coverImage}),D.setFieldsValue({createTime:G()(null==d?void 0:d.createTime)}),D.setFieldsValue({tag:null==d?void 0:d.tag}),D.setFieldsValue({abstract:null==d?void 0:d.abstract})}),[d]);var ge=function(){var e=(0,i.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.validateFields();case 2:if(null==(t=e.sent)||!t.coverImage||(null==t?void 0:t.coverImage)===N){e.next=12;break}return e.t0=T.wg,e.next=7,P.X$({coverImage:t.coverImage,authorId:null==W?void 0:W.userId});case 7:if(e.t1=e.sent,!(n=(0,e.t0)(e.t1)).success||n.data||!t.coverImage){e.next=12;break}return e.next=12,P.Yd({url:t.coverImage,userId:null==W?void 0:W.userId});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=(0,i.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=T.wg,e.next=3,P.tu(t);case 3:e.t1=e.sent,(n=(0,e.t0)(e.t1)).success&&x&&x(),be(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=(0,i.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=T.wg,e.next=3,P.Xc(t);case 3:e.t1=e.sent,(n=(0,e.t0)(e.t1)).success&&null!=d&&d.originalArticleId&&x&&x(),be(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(e){e.success&&((0,T.Vp)(e.message),C("/home")),e.success||409!==e.code||xe(!0),e.success||409===e.code||401===e.code||(0,T.vU)(e.message)},je=function(){var e=(0,i.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=3;break}return(0,T.um)("嘿，醒醒！文章还一个字没写呢..."),e.abrupt("return");case 3:return e.next=5,D.validateFields();case 5:n=e.sent,r=fe(fe({},n),{},{content:a,createTime:(null==n||null===(t=n.createTime)||void 0===t?void 0:t.valueOf())||(new Date).valueOf(),authorId:null==W?void 0:W.userId,articleId:o||(null==d?void 0:d.originalArticleId),oldCoverImage:N}),o||null!=d&&d.originalArticleId?ye(r):(delete r.articleId,_e(r));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.validateFields();case 2:t=e.sent,f&&f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=(0,V.jsx)(Y.Z,{onClick:function(e){var t=F.c4.find((function(t){return t.key===e.key}));I(null==t?void 0:t.label),D.setFieldsValue({tag:null==t?void 0:t.label})},items:F.c4,className:me});return(0,V.jsxs)("div",{children:[R&&(0,V.jsx)($.Z,{onClick:X,onClose:pe}),(0,V.jsx)(z.Z,{title:(0,V.jsx)("div",{className:"dark"===h?ae:"",children:"发布文章"}),placement:"right",width:he>500?500:"calc(100vw - 50px)",closable:!1,onClose:function(){ge(),m&&m()},visible:n,headerStyle:"dark"===h?fe({},F.ju.headerStyle):{},bodyStyle:"dark"===h?fe({},F.ju.bodyStyle):{},extra:(0,V.jsxs)("div",{children:[(0,V.jsx)(r.Z,{type:"primary",ghost:!0,className:re,onClick:ke,children:"保存草稿"}),(0,V.jsx)(r.Z,{type:"primary",onClick:je,children:null!=d&&d.originalArticleId||o?"更新":"发布"})]}),children:(0,V.jsx)("div",{className:p()(ie,"dark"===h&&ue),children:(0,V.jsxs)(q.Z,{labelCol:{span:3},wrapperCol:{span:22},layout:"horizontal",form:D,name:"form",children:[(0,V.jsx)(q.Z.Item,{label:"标题",name:"title",initialValue:null==d?void 0:d.title,rules:[{required:!0,message:"请先输入文章标题"},{validator:function(e,t){return t&&/([*.?+$^(){}|\\/])/.test(t)?Promise.reject("标题不能包含特殊字符"):Promise.resolve()}}],children:(0,V.jsx)(J.Z,{placeholder:"请输入文章标题",maxLength:50})}),(0,V.jsx)(q.Z.Item,{label:"分类",name:"classify",initialValue:null==d?void 0:d.classify,rules:[{required:!0,message:"请选择分类"}],children:(0,V.jsx)(L.ZP.Group,{buttonStyle:"solid",children:F.ab.map((function(e){return(0,V.jsx)(L.ZP.Button,{className:p()(ee,"dark"===h&&te),value:e,children:e},e)}))})}),(0,V.jsx)(q.Z.Item,{label:"标签",name:"tag",initialValue:null==d?void 0:d.tag,rules:[{required:!0,message:"请输入文章标签"}],children:(0,V.jsxs)("div",{className:se,children:[(0,V.jsx)(J.Z,{placeholder:"请输入文章标签",value:w,onChange:function(e){I(e.target.value)},maxLength:50,className:ce}),(0,V.jsx)(A.Z,{overlay:we,autoFocus:!0,children:(0,V.jsx)(r.Z,{className:de,type:"primary",children:(0,V.jsxs)(U.Z,{children:["选择标签",(0,V.jsx)(K.Z,{})]})})})]})}),(0,V.jsx)(q.Z.Item,{label:"时间",name:"createTime",initialValue:G()(null==d?void 0:d.createTime),children:(0,V.jsx)(H.Z,{className:ne,format:"YYYY/MM/DD HH:mm:ss",showTime:!0})}),(0,V.jsx)(q.Z.Item,{label:"封面",valuePropName:"fileList",name:"coverImage",initialValue:null==d?void 0:d.coverImage,children:(0,V.jsx)(Q.Z,{filePath:y,setFilePath:b,uploadStyle:le,transitionImg:F.zl,form:D,imgStyle:oe,setAlertStatus:xe,aspectRatio:780/443,deleteOldCoverImage:ge})}),(0,V.jsx)(q.Z.Item,{label:"摘要",name:"abstract",initialValue:null==d?void 0:d.abstract,rules:[{required:!0,message:"请先输入文章摘要"}],children:(0,V.jsx)(ve,{placeholder:"请输入文章摘要",rows:3,autoSize:{minRows:3,maxRows:10},maxLength:100,showCount:!0})})]})})})]})};n(17823);var he=n(19181),ge=(n(52431),n(14277)),_e=n(93433),ye=n(54549),be=n(43455);const je={clickNoSelectText:"index__clickNoSelectText--bKP2C",overlayClassName:"index__overlayClassName--XmcLg",darkOverlayClassName:"index__darkOverlayClassName--Y5Ltx",drawerTitle:"index__drawerTitle--Jp4YN",draftBtn:"index__draftBtn--e3q0O",modalTitle:"index__modalTitle--SFARy",darkModalTitle:"index__darkModalTitle--V9Eqc",draftContent:"index__draftContent--sgIAU",noMore:"index__noMore--RzqK7",containerClassName:"index__containerClassName--P9JFb",wrapClassName:"index__wrapClassName--B0Bha",scrollWrap:"index__scrollWrap--z5lhl",draftItem:"index__draftItem--BP8bS",title:"index__title--zO3qU",actions:"index__actions--_amwY",createTime:"index__createTime--ldkWD",preBtn:"index__preBtn--iXEf_",editBtn:"index__editBtn--M0O2S",delBtn:"index__delBtn--NzRHV",dark:"index__dark--R3Z7w",draftEmpty:"index__draftEmpty--JYebZ",empty:"index__empty--i7ehr"};function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Ie=function(e){var t,n,a,o,d=e.deleteDraft,m=e.drawerVisible,f=e.hideDraftDrawer,x=e.themeMode,h=(0,c.useState)({list:[],total:0,count:0}),g=(0,l.Z)(h,2),_=g[0],y=g[1],b=(0,c.useState)(!1),j=(0,l.Z)(b,2),k=j[0],w=j[1],I=(0,c.useState)(!1),Z=(0,l.Z)(I,2),S=Z[0],N=Z[1],O=(0,c.useRef)([]),C=(0,u.s0)(),M=(0,v.Z)().userInfoStore.getUserInfo,D=(0,B.YN)({data:_,loading:k,pageSize:F.YH,scrollStyle:je.scrollStyle}),W=D.pageNo,E=D.setPageNo,R=D.onScroll,H=(0,B.nR)().htmlWidth;(0,c.useEffect)((function(){(S||m)&&A()}),[W,S,m]),(0,c.useEffect)((function(){E(1),O.current=[],y({list:O.current,total:0,count:0})}),[m]);var A=function(){var e=(0,i.Z)(s().mark((function e(){var t,n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.t0=T.wg,e.next=4,P.Jp({pageNo:W,pageSize:F.YH,userId:null==M?void 0:M.userId});case 4:e.t1=e.sent,t=(0,e.t0)(e.t1),w(!1),t.success?(n=t.data,r=n.total,a=n.list,O.current=[].concat((0,_e.Z)(O.current),(0,_e.Z)(a)),y({list:O.current,total:r,count:a.length})):(0,T.vU)(t.message);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=(0,V.jsx)("div",{className:p()(je.draftContent,"dark"===x&&je.dark),children:(null==_||null===(t=_.list)||void 0===t?void 0:t.length)>0?(0,V.jsxs)(be.Z,{containerClassName:je.containerClassName,wrapClassName:je.wrapClassName,className:je.scrollWrap,autoHeight:!0,autoHeightMax:"260px",onScroll:R,themeMode:x,children:[null==_||null===(n=_.list)||void 0===n?void 0:n.map((function(e){var t;return(0,V.jsxs)("div",{className:je.draftItem,children:[(0,V.jsx)("span",{className:je.title,children:e.title||"".concat(null===(t=e.content)||void 0===t?void 0:t.slice(0,26).replace(/#/g,"")).concat(e.content&&e.content.slice(0,26).length>20?"...":"")}),(0,V.jsxs)("span",{className:je.actions,children:[(0,V.jsx)("span",{className:je.createTime,children:(0,T.fg)(e.createTime)}),(0,V.jsx)(r.Z,{className:je.preBtn,type:"link",onClick:function(){C("/detail/".concat(e.id,"?draft=1"))},children:"预览"}),(0,V.jsx)(r.Z,{className:je.editBtn,type:"link",onClick:function(){return C("/create?draftId=".concat(e.id)),N(!1),void(f&&f())},children:"编辑"}),(0,V.jsx)(r.Z,{className:je.delBtn,type:"link",onClick:function(){return t=e,n=_.list.filter((function(e){return e.id!==t.id})),y(we(we({},_),{},{total:_.total-1,list:n})),void(d&&d(t.id,!0));var t,n},children:"删除"})]})]},e.id)})),k||(null==_||null===(a=_.list)||void 0===a?void 0:a.length)!==(null==_?void 0:_.total)?(0,V.jsx)("div",{className:je.noMore,children:"loading..."}):(0,V.jsx)("div",{className:je.noMore,children:"共(".concat(null==_||null===(o=_.list)||void 0===o?void 0:o.length,")条，没有更多了～～～")})]}):(0,V.jsx)("div",{className:je.draftEmpty,children:(0,V.jsx)(ge.Z,{image:ge.Z.PRESENTED_IMAGE_SIMPLE,description:(0,V.jsx)("div",{className:je.empty,children:"空空如也"})})})}),L=(0,V.jsx)("div",{className:p()(je.modalTitle,"dark"===x&&je.darkModalTitle),children:"草稿列表"});return H>960?(0,V.jsx)(he.Z,{placement:"bottomRight",title:L,content:U,trigger:"click",visible:S,onVisibleChange:function(e){N(e),E(1),O.current=[],y({list:O.current,total:0,count:0})},overlayClassName:"dark"===x?je.darkOverlayClassName:je.overlayClassName,children:(0,V.jsx)(r.Z,{type:"link",className:je.draftBtn,children:"草稿箱"})}):(0,V.jsx)(z.Z,{title:(0,V.jsx)("div",{className:"dark"===x?je.drawerTitle:"",children:"草稿列表"}),placement:"top",closable:!1,visible:m,headerStyle:"dark"===x?we({padding:"16px 10px",borderRadius:"0"},F.ju.headerStyle):{padding:"16px 10px",borderRadius:"0"},bodyStyle:"dark"===x?we({padding:"10px 0 10px 10px"},F.ju.bodyStyle):{padding:"10px 0 10px 10px"},height:340,onClose:function(){f&&f()},extra:(0,V.jsx)("div",{onClick:function(){f&&f()},children:(0,V.jsx)(ye.Z,{})}),children:U},"top")},Ze={clickNoSelectText:"index__clickNoSelectText--ZEa8w",container:"index__container--WW0WE",changeIconWrap:"index__changeIconWrap--DooQR",icon:"index__icon--QThtX",createContent:"index__createContent--xrk1z",preview:"index__preview--vnbfd",create:"index__create--R2eiO",release:"index__release--KFxd7",draftBtn:"index__draftBtn--mffS5",tuiEditorWrap:"index__tuiEditorWrap--ne3Zs",dark:"index__dark--DYIg4",changeHeight:"index__changeHeight--POj2H"};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Oe=(0,f.Pi)((function(){var e=(0,c.useState)(!1),t=(0,l.Z)(e,2),n=t[0],a=t[1],o=(0,c.useState)(""),m=(0,l.Z)(o,2),f=m[0],g=m[1],_=(0,c.useState)(""),y=(0,l.Z)(_,2),b=y[0],j=y[1],k=(0,c.useState)(""),w=(0,l.Z)(k,2),I=w[0],Z=w[1],S=(0,c.useState)(!1),N=(0,l.Z)(S,2),O=N[0],C=N[1];(0,B.vV)();var M=(0,v.Z)().userInfoStore.getUserInfo,D=(0,d.lr)(),W=(0,l.Z)(D,1)[0],E=(0,u.s0)(),z=W.get("id"),H=W.get("draftId"),A=(0,B.zu)({id:z,draftId:H,visible:n,draftArticleId:b}),U=A.detail,L=A.setDetail,Y=(0,B.nR)().htmlWidth,q=(0,B.Jg)().siderVisible,J=(0,B.iy)().themeMode;(0,c.useEffect)((function(){if(!n)return window.addEventListener("keydown",K),function(){window.removeEventListener("keydown",K)}}),[f,n]),(0,c.useEffect)((function(){I===H&&(L({content:""}),E("/create"))}),[I,H]);var K=function(e){e.ctrlKey&&13===e.keyCode&&G()},X=function(){var e=(0,i.Z)(s().mark((function e(t,n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=T.wg,e.next=3,P.Ye(t,n);case 3:e.t1=e.sent,(r=(0,e.t0)(e.t1)).success&&(j(null===(i=r.data)||void 0===i?void 0:i.id),(0,T.Vp)(r.message),a(!1)),r.success||401===r.code||409===r.code||(0,T.vU)(r.message);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=(0,B.Nr)(function(){var e=(0,i.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||null!=U&&U.content){e.next=3;break}return(0,T.um)("嘿，醒醒！文章还一个字没写呢..."),e.abrupt("return");case 3:r=Ne(Ne(Ne({},U),t),{},{content:f||(null==U?void 0:U.content),createTime:(null==t||null===(n=t.createTime)||void 0===n?void 0:n.valueOf())||(new Date).valueOf(),authorId:null==M?void 0:M.userId,articleId:H||b,originalArticleId:z||(null==U?void 0:U.originalArticleId)}),b||H||delete r.articleId,X(r,F.mu[b||H?2:1]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),500,[n,f,z,b,H],!0),Q=function(){var e=(0,i.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H||t||b){e.next=2;break}return e.abrupt("return");case 2:return e.t0=T.wg,e.next=5,P.R5({id:t||b||H});case 5:if(e.t1=e.sent,r=(0,e.t0)(e.t1),n){e.next=9;break}return e.abrupt("return");case 9:Z(r.data),r.data===b&&j("");case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=function(){C(!0)},ee=function(){C(!1)};return(0,V.jsxs)("div",{className:Ze.container,children:[Y<=960&&(0,V.jsx)(h.Z,{noHideMenuIcon:!0,className:Ze.changeIconWrap,themeMode:J,htmlWidth:Y}),(0,V.jsx)(x.Z,{right:(0,V.jsxs)("span",{children:[(0,V.jsx)(r.Z,{type:"link",className:p()(Ze.release,"dark"===J&&Ze.darkRelease),disabled:!(f||null!=U&&U.content),onClick:function(){return a(!0)},children:"发布文章"}),Y<=960&&(0,V.jsx)(r.Z,{type:"link",className:Ze.draftBtn,onClick:$,children:"草稿箱"}),(0,V.jsx)(Ie,{deleteDraft:Q,hideDraftDrawer:ee,drawerVisible:O,themeMode:J})]}),themeMode:J,children:"发布文章"}),(0,V.jsx)("div",{className:p()(Ze.tuiEditorWrap,q&&Y>960&&Ze.changeHeight,"dark"===J&&Ze.dark),children:(0,V.jsx)(R,{onGetMackdown:function(e){g(e.trim())},initialValue:null==U?void 0:U.content,siderVisible:q,onSaveDraft:G,themeMode:J,htmlWidth:Y},null==U?void 0:U.content)}),n&&(0,V.jsx)(xe,{visible:n,content:f||U.content,onCancel:function(){a(!1)},initialValue:U,articleId:z,onSaveDraft:G,deleteDraft:Q,themeMode:J})]})}))}}]);