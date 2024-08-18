import{c as n,x as s,a as t,o as e,b as o,d as i,w as l,F as c,r,e as u,n as a,f,i as p,g as d,S as g,h,j as m,s as x,k as _,l as b,m as k,p as w,t as y}from"./index-P_cLt-V2.js";import{x as v,_ as j}from"./uv-empty.CSllc6BM.js";import{x as S,r as T}from"./uni-app.es.qT0q2I_i.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as H}from"./xc-uv-clogin-loginform.D8UlsYct.js";import{_ as I}from"./uv-button.CapyWq2Z.js";import{_ as U}from"./uv-parse.BgfjabDG.js";import{_ as q}from"./uv-tabs.CFWrbJNn.js";import"./uv-popup.9HTs5IvN.js";import"./uv-transition.CcGN9U5O.js";import"./uv-line.B02Rw8W0.js";import"./uv-safe-bottom.BG61ITrv.js";import"./uv-loading-icon.CssbsuKb.js";import"./uv-checkbox-group.Czlfino2.js";import"./uv-badge.DjXn40qx.js";const L=C({props:{files:{type:String,default:null}},watch:{files:{handler(n,s){let t=this;t.list.length>1&&this.$nextTick((()=>{t.setSwiperHeight()}))}}},data:()=>({config:n,xsStringUtils:s,xsDateUtils:S,sp:{},sr:{},control:{list:[],swiperHeight:0,currentIndex:0}}),created(){this.xinit(),this.public_show()},methods:{xinit(){},public_show(){let n=this;n.control.list=s.split(n.files,","),n.control.list.length>1&&setTimeout((function(){n.setSwiperHeight()}),100)},public_reset(){this.public_show()},control_changeSwiper(n){this.$nextTick((()=>{this.setSwiperHeight()}))},setSwiperHeight(){let n=this,s=t().in(n);s.select("#xp-item-0").boundingClientRect(),s.exec((s=>{s&&s[0]&&(n.control.swiperHeight=s[0].height)}))}}},[["render",function(n,s,t,m,x,_){const b=p,k=d,w=g,y=h;return e(),o(c,null,[x.control.list.length>1?(e(),i(y,{key:0,autoplay:!0,onChange:_.control_changeSwiper,current:x.control.currentIndex,style:a({height:x.control.swiperHeight+"px"})},{default:l((()=>[(e(!0),o(c,null,r(x.control.list,((n,s)=>(e(),i(w,{key:s},{default:l((()=>[u(k,{class:"swiper-item"},{default:l((()=>[u(b,{id:"xp-item-"+s,class:"image",src:n,mode:"widthFix"},null,8,["id","src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange","current","style"])):f("",!0),1==x.control.list.length?(e(),i(b,{key:1,class:"image",src:x.control.list[0],mode:"widthFix"},null,8,["src"])):f("",!0)],64)}],["__scopeId","data-v-496a28d1"]]);const $=C({data:()=>({config:n,xsStringUtils:s,xsDateUtils:S,sp:{id:null},sr:{userinfo:null,conf:null,confinfos:[],confuser:null,signordernum:null},control:{info_content:"",loginStyle:{height:"80rpx",background:"blue",color:"#fff"}},skeleton:[{type:"line",num:3,gap:"10px",style:["width: 150px;","width: 200px;","width: 250px;"]}]}),onLoad(n){let s=m.getUrlParam(n,"id");this.sp.id=parseInt(s),this.xinit()},onShow(){let n=this;n.$nextTick((function(s){n.public_show()}))},onPullDownRefresh(){let n=this;setTimeout((function(){n.public_show(),x()}),1e3)},methods:{xinit(){let n=this;_.getUserinfo((function(s){n.sr.userinfo=s}))},public_show(){let n=this;m.getById("conf",n.sp.id,(function(s){n.sr.conf=s.conf,n.sr.confinfos=s.confinfos,n.sr.confuser=s.confuser,v.length(n.sr.confinfos)>0&&(n.control.info_content=n.sr.confinfos[0].content)}))},public_reset(){this.public_show()},onLoginSuccess(n){this.sr.userinfo=n,this._signin()},control_clickTab(n){this.control.info_content=n.content},control_signin(){let n=this;null!=n.sr.userinfo&&null!=n.sr.userinfo.mobile&&""!=n.sr.userinfo.mobile?n._signin():n.$refs["xc-uv-clogin-loginform"].public_open()},_signin(){let n=this;m.post("csmsignin/xp_conf/submitSignin",{confid:n.sp.id},(function(s){n.sr.signordernum=s.signordernum,n.sr.confuser=s.confuser,b.toast("签到成功，您是第"+s.signordernum+"个签到人！"),n.public_reset()}))}}},[["render",function(n,s,t,c,r,a){const p=T(k("uv-empty"),j),g=d,h=T(k("xc-uniapp-swiper"),L),m=T(k("xc-uv-clogin-loginform"),H),x=T(k("uv-button"),I),_=T(k("uv-parse"),U),b=T(k("uv-tabs"),q);return e(),o("section",null,[r.sr.conf?f("",!0):(e(),i(g,{key:0,class:"xc-wrap"},{default:l((()=>[u(p,{mode:"data",marginTop:"100px",text:"没有会议,请联系管理员"})])),_:1})),r.sr.conf?(e(),i(g,{key:1,class:"xc-wrap"},{default:l((()=>[u(h,{files:r.sr.conf.images},null,8,["files"]),u(g,{class:"xc-block"},{default:l((()=>[u(g,{class:"xc-title"},{default:l((()=>[w(y(r.sr.conf.name),1)])),_:1}),null!=r.sr.conf.meetdate?(e(),i(g,{key:0,class:"xc-content"},{default:l((()=>[w("会议时间: "+y(r.sr.conf.meetdate),1)])),_:1})):f("",!0),null!=r.sr.conf.meetdate?(e(),i(g,{key:1,class:"xc-content"},{default:l((()=>[w("会议地点: "+y(r.sr.conf.meetaddress),1)])),_:1})):f("",!0),null!=r.sr.conf.unsignedcontentq?(e(),i(g,{key:2,class:"xc-content"},{default:l((()=>[w(y(r.sr.conf.unsignedcontentq),1)])),_:1})):f("",!0),u(m,{ref:"xc-uv-clogin-loginform",onOnLoginSuccess:a.onLoginSuccess},null,8,["onOnLoginSuccess"]),r.sr.confuser?f("",!0):(e(),i(x,{key:3,class:"xc-pt",type:"primary",text:"立即签到",onClick:a.control_signin},null,8,["onClick"])),r.sr.confuser?(e(),i(g,{key:4,class:"xp-title-tag Y"},{default:l((()=>[w("已签到")])),_:1})):f("",!0),r.sr.confuser?f("",!0):(e(),i(g,{key:5,class:"xp-title-tag N"},{default:l((()=>[w("未签到")])),_:1}))])),_:1}),null==r.sr.confuser&&null!=r.sr.conf.unsignedcontentq?(e(),o("section",{key:0},[u(g,{class:"xc-sep"},{default:l((()=>[w(" ")])),_:1}),u(g,{class:"xc-block"},{default:l((()=>[u(_,{content:r.sr.conf.unsignedcontentq},null,8,["content"])])),_:1})])):f("",!0),null!=r.sr.confuser&&null!=r.sr.conf.siginedcontent?(e(),o("section",{key:1},[u(g,{class:"xc-sep"},{default:l((()=>[w(" ")])),_:1}),u(g,{class:"xc-block"},{default:l((()=>[u(_,{content:r.sr.conf.siginedcontent},null,8,["content"])])),_:1})])):f("",!0),u(g,{class:"xc-sep"},{default:l((()=>[w(" ")])),_:1}),u(g,{class:"xc-block"},{default:l((()=>[u(b,{list:r.sr.confinfos,onClick:a.control_clickTab,keyName:"title",scrollable:!0},null,8,["list","onClick"]),u(g,{class:"xc-content"},{default:l((()=>[u(_,{content:r.control.info_content},null,8,["content"])])),_:1})])),_:1})])),_:1})):f("",!0)])}],["__scopeId","data-v-4811a488"]]);export{$ as default};
