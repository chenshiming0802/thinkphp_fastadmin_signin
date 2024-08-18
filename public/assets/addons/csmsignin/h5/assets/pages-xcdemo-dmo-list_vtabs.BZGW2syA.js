import{u as t,v as e,o as i,d as s,w as l,y as a,g as o,z as r,A as n,m as h,e as c,n as d,b as u,F as g,r as b,B as m,C as p,f as v,p as y,t as S,D as _,E as f,c as w,x,j as $,G as I,H as T,q as k,s as H,l as B}from"./index-CBvp-4dO.js";import{_ as j,a as C,b as P}from"./xc-uv-load-more.DdjmE-SI.js";import{r as R,x as D}from"./uni-app.es.qNtsQ7Zh.js";import{_ as A}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{u as V,_ as q}from"./uv-badge.C7NWtSe_.js";import{x as L}from"./uv-empty.BtqCF6uE.js";import"./uv-loading-icon.BheHwPY6.js";import"./uv-line.CzAFXsL5.js";const M=A({name:"uv-vtabs-item",mixins:[t,e],props:{index:{type:[Number,String],default:0}},data:()=>({top:0,height:0}),mounted(){this.init()},methods:{async init(){if(this.getParentData("uv-vtabs"),!this.parent)return this.$uv.error("uv-vtabs必须要搭配uv-vtabs-item组件使用");this.parent.chain&&(await this.$uv.sleep(),this.getItemRect().then((t=>{this.top=t.top,this.height=t.height})))},getItemRect(){return new Promise((t=>{this.$uvGetRect(".uv-vtabs-item").then((e=>{t(e)}))}))}}},[["render",function(t,e,r,n,h,c){const d=o;return i(),s(d,{class:"uv-vtabs-item",id:`content_${r.index}`,ref:"uv-vtabs-item"},{default:l((()=>[a(t.$slots,"default")])),_:3},8,["id"])}]]);const N=A({name:"uv-vtabs",mixins:[t,e,{props:{list:{type:Array,default:()=>[]},keyName:{type:String,default:"name"},current:{type:[Number,String],default:0},hdHeight:{type:[Number,String],default:0},chain:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},barWidth:{type:[Number,String],default:"180rpx"},barScrollable:{type:Boolean,default:!0},barBgColor:{type:String,default:""},barStyle:{type:[Object,String],default:""},barItemStyle:{type:[Object,String],default:""},barItemActiveStyle:{type:[Object,String],default:""},barItemActiveLineStyle:{type:[Object,String],default:""},barItemBadgeStyle:{type:[Object,String],default:""},contentStyle:{type:[Object,String],default:""}}}],created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init(this.current)}))},data:()=>({activeIndex:0,contentScrollTop:0,contentScrollTop2:0,contentScrollTo:"",scrolling:!1,barScrolling:!1,touching:!1,hasHeight:0,scrollViewHeight:0,barScrollTop:0,barScrollToView:"",timer2:0}),computed:{scrollX:()=>!1,vtabsStyle(){const t={};return t.height=this.getHeight(),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))},getBarStyle(){const t={};return t.width=this.$uv.getPx(this.barWidth,!0),t.background=this.barBgColor,t.height=this.getHeight(),this.$uv.deepMerge(t,this.$uv.addStyle(this.barStyle))},itemStyle(){return t=>{var e;const i={};let s=this.barItemStyle;this.barItemStyle&&!(null==(e=this.barItemStyle)?void 0:e.background)&&(s.background="transparent");const l=t===this.activeIndex?this.$uv.addStyle(this.barItemActiveStyle):this.$uv.addStyle(s);return this.list[t].disabled&&(i.color="#c8c9cc"),this.$uv.deepMerge(i,l)}},textStyle(){return t=>{const e={};return e.width=this.$uv.getPx(this.barWidth,!0),e}},getContentStyle(){const t={};return t.height=this.getHeight(),t},propsBadge:()=>V},watch:{current(t){this.touching||this.$nextTick((()=>{this.init(t||0)}))},list(t){t.length&&this.$uv.sleep(30).then((t=>{this.resize()}))},activeIndex(t){this.chain||(this.contentScrollTop2=0-4*Math.random()-4),this.$emit("change",t)}},methods:{init(t){let e=0;clearInterval(this.timer2),this.timer2=setInterval((async()=>{e++,e>50&&clearInterval(this.timer2),this.children.length&&(clearInterval(this.timer2),await this.$uv.sleep(300),this.clickHandler(t))}),100)},scrolltolower(){this.$emit("scrolltolower",this.activeIndex)},async resize(){0!=this.list.length&&this.barScrollable&&Promise.all([this.getTabsRect(),this.getAllItemRect()]).then((([t,e=[]])=>{this.tabsRect=t,this.scrollViewHeight=0,e.map(((t,e)=>{this.scrollViewHeight+=t.height,this.list[e].rect=t})),this.setBarScrollTop()}))},setBarScrollTop(){const t=this.list[this.activeIndex],e=this.list.slice(0,this.activeIndex).reduce(((t,e)=>t+e.rect.height),0),i=this.$uv.getPx(this.getHeight());let s=t.rect.height/2+e-i/2;s=Math.min(s,this.scrollViewHeight-this.tabsRect.height),this.barScrollTop=Math.max(0,s),s>=this.scrollViewHeight-this.tabsRect.height&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{this.barScrollToView=`bar_${this.activeIndex}`}),400))},async clickHandler(t){t!=this.activeIndex&&(this.touching=!0,this.activeIndex=t,this.chain&&(this.contentScrollTop=this.children[t].top-this.$uv.getPx(this.hdHeight)-4*Math.random()-4,this.contentScrollTo=`content_${t}`),this.timer&&clearTimeout(this.timer),r((()=>{this.resize()}),300,!1),n((()=>{this.touching=!1}),900))},scrollHandler(t){if(this.touching||this.scrolling)return;this.scrolling=!0,this.$uv.sleep(80).then((()=>{this.scrolling=!1}));const e=t.detail.scrollTop;let i=this.children;const s=i.length;let l=0,a=0;i=this.children.map(((t,e)=>{t.height>0&&(this.hasHeight=t.height),t.height=t.height>0?t.height:this.hasHeight;const i={height:t.height,top:l};return l+=t.height,i}));for(let o=0;o<s;o++){const t=i[o],l=i[o+1];if(e<=i[0].top){a=0;break}if(!l){a=s-1;break}if(e>t.top&&e<l.top){a=o;break}}this.activeIndex=a,this.timer4&&clearTimeout(this.timer4),this.timer4=setTimeout((()=>{this.resize()}),100)},getHeight(){let t=0;return t=this.$uv.test.empty(this.height)||"auto"==this.height?this.$uv.addUnit(this.$uv.sys().windowHeight):this.$uv.getPx(this.height,!0),t},getTabsRect(){return new Promise((t=>{this.queryRect("uv-vtabs__bar").then((e=>t(e)))}))},getAllItemRect(){return new Promise((t=>{const e=this.list.map(((t,e)=>this.queryRect(`uv-vtabs__bar-item--${e}`,!0)));Promise.all(e).then((e=>t(e)))}))},queryRect(t,e){return new Promise((e=>{this.$uvGetRect(`.${t}`).then((t=>{e(t)}))}))}}},[["render",function(t,e,r,n,w,x){const $=o,I=_,T=R(h("uv-badge"),q),k=f;return i(),s($,{class:"uv-vtabs",style:d([x.vtabsStyle])},{default:l((()=>[c(k,{class:"uv-vtabs__bar",ref:"uv-vtabs__bar",style:d([x.getBarStyle]),"scroll-y":t.barScrollable,"scroll-x":x.scrollX,"show-scrollbar":!1,"scroll-with-animation":!0,"scroll-top":w.barScrollTop,"scroll-into-view":w.barScrollToView},{default:l((()=>[(i(!0),u(g,null,b(t.list,((e,a)=>(i(),s($,{class:m(["uv-vtabs__bar-item",`uv-vtabs__bar-item--${a}`,a==w.activeIndex&&"uv-vtabs__bar-item-active"]),ref_for:!0,ref:`uv-vtabs__bar-item--${a}`,key:a,id:`bar_${a}`,style:d([x.itemStyle(a)]),onClick:p((t=>x.clickHandler(a)),["stop"])},{default:l((()=>[a==w.activeIndex?(i(),s($,{key:0,class:"uv-vtabs__bar-item--line",style:d([t.$uv.addStyle(t.barItemActiveLineStyle)])},null,8,["style"])):v("",!0),c(I,{class:m(["uv-vtabs__bar-item--value",a==w.activeIndex&&"uv-vtabs__bar-item-active--value"]),style:d([x.itemStyle(a),x.textStyle(a)])},{default:l((()=>[y(S(e[t.keyName]),1)])),_:2},1032,["class","style"]),e.badge&&(e.badge.show||e.badge.isDot||e.badge.value)?(i(),s($,{key:1,class:"uv-vtabs__bar-item--badge",style:d([t.$uv.addStyle(t.barItemBadgeStyle)])},{default:l((()=>[c(T,{show:!(!e.badge||!(e.badge.show||e.badge.isDot||e.badge.value)),isDot:e.badge&&e.badge.isDot||x.propsBadge.isDot,value:e.badge&&e.badge.value||x.propsBadge.value,max:e.badge&&e.badge.max||x.propsBadge.max,type:e.badge&&e.badge.type||x.propsBadge.type,showZero:e.badge&&e.badge.showZero||x.propsBadge.showZero,bgColor:e.badge&&e.badge.bgColor||x.propsBadge.bgColor,color:e.badge&&e.badge.color||x.propsBadge.color,shape:e.badge&&e.badge.shape||x.propsBadge.shape,numberType:e.badge&&e.badge.numberType||x.propsBadge.numberType,inverted:e.badge&&e.badge.inverted||x.propsBadge.inverted},null,8,["show","isDot","value","max","type","showZero","bgColor","color","shape","numberType","inverted"])])),_:2},1032,["style"])):v("",!0)])),_:2},1032,["class","id","style","onClick"])))),128))])),_:1},8,["style","scroll-y","scroll-x","scroll-top","scroll-into-view"]),t.chain?(i(),s(k,{key:0,class:"uv-vtabs__content",style:d([x.getContentStyle,t.$uv.addStyle(t.contentStyle)]),"scroll-y":!0,"scroll-x":x.scrollX,"show-scrollbar":!1,"scroll-top":w.contentScrollTop,"scroll-into-view":w.contentScrollTo,"scroll-with-animation":!0,onScroll:x.scrollHandler,onScrolltolower:x.scrolltolower},{default:l((()=>[a(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","scroll-x","scroll-top","scroll-into-view","onScroll","onScrolltolower"])):(i(),s(k,{key:1,class:"uv-vtabs__content",style:d([x.getContentStyle,t.$uv.addStyle(t.contentStyle)]),"scroll-y":!0,"scroll-x":x.scrollX,"show-scrollbar":!1,"scroll-top":w.contentScrollTop2,onScrolltolower:x.scrolltolower},{default:l((()=>[a(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","scroll-x","scroll-top","onScrolltolower"]))])),_:3},8,["style"])}],["__scopeId","data-v-4604c71b"]]);const z=A({data:()=>({config:w,xsStringUtils:x,xsDateUtils:D,pageinfo:$.pageinfo(),sp:{},sr:{tablist:[],list:[]},control:{tab_object_id:null}}),computed:{height:()=>I().windowHeight-T(100)},onLoad(t){this.xinit()},onShow(){let t=this;k.onShow((function(){t.public_show()}))},onPullDownRefresh(){let t=this;setTimeout((function(){t.public_reset(),H()}),1e3)},methods:{xinit(){let t=this,e=$.buildparams({},{},"weigh","desc");$.queryList("dmocategory",e,(function(e){t.sr.tablist=L.push(e.list,{name:"全部"})}))},public_show(){this.pageinfo.reset(),this._pagelist()},public_reset(){this.public_show()},control_changeTabitem(t){let e=this,i=e.sr.tablist[t];e.control.tab_object_id=i.id,e.public_show()},control_scrolltobottom(){this._pagelist()},_pagelist(){let t=this,e=$.buildparams({csmsignin_dmocategory_id:t.control.tab_object_id},{csmsignin_dmocategory_id:"="},"weigh","desc");$.queryPageList("dmo",e,t.pageinfo,(function(e){$.processListImages(e.list,["bannerimage"]),t.sr.list=t.pageinfo.appendList(e.list,["bannerimage"])}))},control_clickItem(t){B.router_gotoPage("/pages/xcdemo/dmo/item",{id:t.id})}}},[["render",function(t,e,a,r,n,d){const m=R(h("xc-uv-list-item"),j),p=R(h("uv-list"),C),v=R(h("uv-vtabs-item"),M),y=R(h("xc-uv-load-more"),P),S=R(h("uv-vtabs"),N),_=o;return i(),s(_,{class:"xc-wrap"},{default:l((()=>[c(S,{chain:!1,list:n.sr.tablist,height:d.height,hdHeight:"100rpx",onChange:d.control_changeTabitem,onScrolltolower:d.control_scrolltobottom},{default:l((()=>[c(v,null,{default:l((()=>[c(p,null,{default:l((()=>[(i(!0),u(g,null,b(n.sr.list,((t,e)=>(i(),s(m,{title:t.name,note:n.xsDateUtils.timestampToString(t.updatetime),thumb:t.bannerimage,"thumb-size":"lg",clickable:"",onClick:e=>d.control_clickItem(t)},null,8,["title","note","thumb","onClick"])))),256))])),_:1})])),_:1}),c(y,{pageinfo:n.pageinfo},null,8,["pageinfo"])])),_:1},8,["list","height","onChange","onScrolltolower"])])),_:1})}]]);export{z as default};
