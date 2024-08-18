var A,e,t,l,n,i;import{u as o,v as s,o as a,d as r,w as u,p as c,t as d,C as p,n as f,D as m,Z as g,_ as y,a0 as v,a1 as h,a2 as x,a3 as b,m as S,B as k,f as w,e as N,g as R,a4 as B,a5 as I,y as D,b as G,F as H,i as _,c as M,x as E,q as L,s as O,k as U,a6 as j}from"./index-B6DGGkvU.js";import{r as z,_ as C,x as Y}from"./uni-app.es.Cbr9XfqL.js";import{_ as Q}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as F}from"./uv-checkbox-group.Bww2zUt8.js";import{_ as T}from"./uv-button.Bh68EtTb.js";import{_ as W}from"./xc-uv-clogin-loginform.D8iFtpFP.js";import{_ as J,a as P}from"./uv-cell-group.BXawtAGe.js";import{_ as X}from"./xa-uv-bottom-tabbar.B7lOHhFM.js";import"./uv-loading-icon.fysPsUZ0.js";import"./uv-popup.BjktNRL3.js";import"./uv-transition.DDrrEmW0.js";import"./uv-line.C7WL1MEA.js";import"./uv-safe-bottom.DXAKlFOn.js";import"./uv-badge.D98clheT.js";const V=Q({name:"uv-link",emits:["click"],mixins:[o,s,{props:{color:{type:String,default:""},fontSize:{type:[String,Number],default:14},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""},text:{type:String,default:""},...null==(e=null==(A=uni.$uv)?void 0:A.props)?void 0:e.link}}],computed:{linkStyle(){return{color:this.color,fontSize:this.$uv.addUnit(this.fontSize),lineHeight:this.$uv.addUnit(this.$uv.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},methods:{openLink(){window.open(this.href),this.$emit("click")}}},[["render",function(A,e,t,l,n,i){const o=m;return a(),r(o,{class:"uv-link",onClick:p(i.openLink,["stop"]),style:f([i.linkStyle,A.$uv.addStyle(A.customStyle)])},{default:u((()=>[c(d(A.text),1)])),_:1},8,["onClick","style"])}],["__scopeId","data-v-3420edd1"]]);const Z=Q({name:"uv-text",emits:["click"],mixins:[o,s,{computed:{value(){const{text:A,mode:e,format:t,href:l}=this;return"price"===e?g(t)?t(A):y(A,2):"date"===e?(!v(A)&&h(),g(t)?t(A):x(A,t||"yyyy-mm-dd")):"phone"===e?g(t)?t(A):"encrypt"===t?`${A.substr(0,3)}****${A.substr(7)}`:A:"name"===e?g(t)?t(A):"encrypt"===t?this.formatName(A):A:A}},methods:{formatName(A){let e="";if(2===A.length)e=A.substr(0,1)+"*";else if(A.length>2){let t="";for(let e=0,l=A.length-2;e<l;e++)t+="*";e=A.substr(0,1)+t+A.substr(-1,1)}else e=A;return e}}},{props:{type:{type:String,default:""},show:{type:Boolean,default:!0},text:{type:[String,Number],default:""},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},mode:{type:String,default:""},href:{type:String,default:""},format:{type:[String,Function],default:""},call:{type:Boolean,default:!0},openType:{type:String,default:""},bold:{type:Boolean,default:!1},block:{type:Boolean,default:!1},lines:{type:[String,Number],default:""},color:{type:String,default:"#303133"},size:{type:[String,Number],default:15},iconStyle:{type:[Object,String],default:()=>({fontSize:"15px"})},decoration:{type:String,default:"none"},margin:{type:[Object,String,Number],default:0},lineHeight:{type:[String,Number],default:""},align:{type:String,default:"left"},wordWrap:{type:String,default:"normal"},...null==(l=null==(t=uni.$uv)?void 0:t.props)?void 0:l.text}}],computed:{valueStyle(){const A={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:this.$uv.addUnit(this.size)};return!this.type&&(A.color=this.color),this.isNvue&&this.lines&&(A.lines=this.lines),!this.isNvue||"price"==this.mode||this.prefixIcon||this.suffixIcon||(A.flex=1,A.textAlign="left"===this.align?"flex-start":"center"===this.align?"center":"right"),this.lineHeight&&(A.lineHeight=this.$uv.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(A.display="block"),this.$uv.deepMerge(A,this.$uv.addStyle(this.customStyle))},isNvue:()=>!1,isMp:()=>!1},data:()=>({}),methods:{clickHandler(){this.call&&"phone"===this.mode&&b({phoneNumber:this.text}),this.$emit("click")}}},[["render",function(A,e,t,l,n,i){const o=m,s=z(S("uv-icon"),C),p=R,g=z(S("uv-link"),V),y=B;return A.show?(a(),r(p,{key:0,class:k(["uv-text",[]]),style:f({margin:A.margin,justifyContent:"left"===A.align?"flex-start":"center"===A.align?"center":"flex-end"}),onClick:i.clickHandler},{default:u((()=>["price"===A.mode?(a(),r(o,{key:0,class:k(["uv-text__price",A.type&&`uv-text__value--${A.type}`]),style:f([i.valueStyle])},{default:u((()=>[c("￥")])),_:1},8,["class","style"])):w("",!0),A.prefixIcon?(a(),r(p,{key:1,class:"uv-text__prefix-icon"},{default:u((()=>[N(s,{name:A.prefixIcon,customStyle:A.$uv.addStyle(A.iconStyle)},null,8,["name","customStyle"])])),_:1})):w("",!0),"link"===A.mode?(a(),r(g,{key:2,text:A.value,href:A.href,underLine:""},null,8,["text","href"])):A.openType&&i.isMp?(a(),r(y,{key:3,class:"uv-reset-button uv-text__value",style:f([i.valueStyle]),openType:A.openType,onGetuserinfo:A.onGetUserInfo,onContact:A.onContact,onGetphonenumber:A.onGetPhoneNumber,onError:A.onError,onLaunchapp:A.onLaunchApp,onOpensetting:A.onOpenSetting,lang:A.lang,"session-from":A.sessionFrom,"send-message-title":A.sendMessageTitle,"send-message-path":A.sendMessagePath,"send-message-img":A.sendMessageImg,"show-message-card":A.showMessageCard,"app-parameter":A.appParameter},{default:u((()=>[c(d(A.value),1)])),_:1},8,["style","openType","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter"])):(a(),r(o,{key:4,class:k(["uv-text__value",[A.type&&`uv-text__value--${A.type}`,A.lines&&`uv-line-${A.lines}`]]),style:f([i.valueStyle])},{default:u((()=>[c(d(A.value),1)])),_:1},8,["style","class"])),A.suffixIcon?(a(),r(p,{key:5,class:"uv-text__suffix-icon"},{default:u((()=>[N(s,{name:A.suffixIcon,customStyle:A.$uv.addStyle(A.iconStyle)},null,8,["name","customStyle"])])),_:1})):w("",!0)])),_:1},8,["style","onClick"])):w("",!0)}],["__scopeId","data-v-6fde0f74"]]),$={props:{src:{type:String,default:""},shape:{type:String,default:"circle"},size:{type:[String,Number],default:40},mode:{type:String,default:"scaleToFill"},text:{type:String,default:""},bgColor:{type:String,default:"#c0c4cc"},color:{type:String,default:"#fff"},fontSize:{type:[String,Number],default:18},icon:{type:String,default:""},mpAvatar:{type:Boolean,default:!1},randomBgColor:{type:Boolean,default:!1},defaultUrl:{type:String,default:""},colorIndex:{type:[String,Number],validator:A=>I(A,[0,19])||""===A,default:""},name:{type:String,default:""},...null==(i=null==(n=uni.$uv)?void 0:n.props)?void 0:i.avatar}};const q=Q({name:"uv-avatar",emits:["click"],mixins:[o,s,$],data(){return{colors:["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"],avatarUrl:this.src,allowMp:!1}},watch:{src:{immediate:!0,handler(A){this.avatarUrl=A,A||this.errorHandler()}}},computed:{imageStyle:()=>({})},created(){this.init()},methods:{init(){},isImg(){return-1!==this.src.indexOf("/")},errorHandler(){this.avatarUrl=this.defaultUrl||"data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"},clickHandler(){this.$emit("click",this.name)}}},[["render",function(A,e,t,l,n,i){const o=z(S("uv-icon"),C),s=z(S("uv-text"),Z),c=_,d=R;return a(),r(d,{class:k(["uv-avatar",[`uv-avatar--${A.shape}`]]),style:f([{backgroundColor:A.text||A.icon?A.randomBgColor?n.colors[""!==A.colorIndex?A.colorIndex:A.$uv.random(0,19)]:A.bgColor:"transparent",width:A.$uv.addUnit(A.size),height:A.$uv.addUnit(A.size)},A.$uv.addStyle(A.customStyle)]),onClick:i.clickHandler},{default:u((()=>[D(A.$slots,"default",{},(()=>[A.mpAvatar&&n.allowMp?(a(),G(H,{key:0},[],64)):A.icon?(a(),r(o,{key:1,name:A.icon,size:A.fontSize,color:A.color},null,8,["name","size","color"])):A.text?(a(),r(s,{key:2,text:A.text,size:A.fontSize,color:A.color,align:"center",customStyle:"justify-content: center"},null,8,["text","size","color"])):(a(),r(c,{key:3,class:k(["uv-avatar__image",[`uv-avatar__image--${A.shape}`]]),src:n.avatarUrl||A.defaultUrl,mode:A.mode,onError:i.errorHandler,style:f([{width:A.$uv.addUnit(A.size),height:A.$uv.addUnit(A.size)}])},null,8,["class","src","mode","onError","style"]))]),!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-98df1e24"]]);const K=Q({data:()=>({config:M,xsStringUtils:E,xsDateUtils:Y,sp:{id:null},sr:{userinfo:null},control:{}}),onLoad(A){this.sp.id=A.id,this.xinit()},onShow(){let A=this;L.onShow((function(){A.public_show()}))},onPullDownRefresh(){let A=this;setTimeout((function(){A.public_show(),O()}),1e3)},methods:{xinit(){},public_reset(){this.public_show()},public_show(){let A=this;U.getUserinfo((function(e){A.sr.userinfo=e}))},onLoginSuccess(A){this.sr.userinfo=A},control_clickLogin(){this.$refs["xc-uv-clogin-loginform"].public_open()},control_logout(){this.sr.userinfo=null,U.clearSession()}}},[["render",function(A,e,t,l,n,i){const o=z(S("uv-avatar"),q),s=z(S("uv-gap"),F),p=z(S("uv-button"),T),f=m,g=z(S("xc-uv-clogin-loginform"),W),y=R,v=z(S("uv-cell"),J),h=z(S("uv-cell-group"),P),x=z(S("xa-uv-bottom-tabbar"),X);return a(),r(y,{class:"xc-wrap-grey"},{default:u((()=>[N(y,{class:"xp-view-profile"},{default:u((()=>[j("section",null,[null==n.sr.userinfo?(a(),r(o,{key:0,text:A.$t("xclogin.me.label_anony_nickname"),shape:"circle",size:"100",hairline:""},null,8,["text"])):w("",!0),null!=n.sr.userinfo?(a(),r(o,{key:1,src:n.sr.userinfo.avatar,shape:"circle",size:"100",hairline:""},null,8,["src"])):w("",!0),N(s,{height:"20"}),null==n.sr.userinfo||null==n.sr.userinfo.mobile||""==n.sr.userinfo.mobile?(a(),r(p,{key:2,text:"立即登录",size:"normal",onClick:i.control_clickLogin},null,8,["onClick"])):w("",!0),null!=n.sr.userinfo&&null!=n.sr.userinfo.mobile&&""!=n.sr.userinfo.mobile?(a(),r(f,{key:3,class:"xp-nickname"},{default:u((()=>[c(d(n.sr.userinfo.nickname),1)])),_:1})):w("",!0),N(g,{ref:"xc-uv-clogin-loginform",onOnLoginSuccess:i.onLoginSuccess},null,8,["onOnLoginSuccess"])])])),_:1}),null!=n.sr.userinfo?(a(),r(s,{key:0,height:"20"})):w("",!0),null!=n.sr.userinfo?(a(),r(h,{key:1},{default:u((()=>[N(v,{title:A.$t("xclogin.me.label_linkme"),isLink:"",url:"/pages/xclogin/me_profile"},null,8,["title"])])),_:1})):w("",!0),N(s,{height:"20"}),N(h,null,{default:u((()=>[N(v,{title:A.$t("xclogin.me.label_linkme"),isLink:"",url:"/pages/xclogin/policy?type=contactme"},null,8,["title"]),N(v,{title:A.$t("xclogin.me.label_servicepolicy"),isLink:"",url:"/pages/xclogin/policy?type=service"},null,8,["title"]),N(v,{title:A.$t("xclogin.me.label_privatepolicy"),isLink:"",url:"/pages/xclogin/policy?type=private"},null,8,["title"])])),_:1}),null!=n.sr.userinfo?(a(),r(y,{key:2,class:"xp-view-logout"},{default:u((()=>[N(p,{type:"primary",text:A.$t("xclogin.me.btn_logout"),onClick:i.control_logout},null,8,["text","onClick"])])),_:1})):w("",!0),N(x)])),_:1})}],["__scopeId","data-v-69334ee4"]]);export{K as default};
