import{c as t,x as s,j as o,q as i,s as e,l as a,m as l,d as n,w as c,g as r,o as u,e as p,b as m,r as d,F as f}from"./index-B6DGGkvU.js";import{_ as g}from"./uv-tabs.DPzoQc1R.js";import{x as b,r as _}from"./uni-app.es.Cbr9XfqL.js";import{_ as h}from"./uv-sticky.BSMivb2Q.js";import{_ as x,a as j,b as v}from"./xc-uv-load-more.pd17rpbs.js";import{_ as k}from"./uv-button.Bh68EtTb.js";import{x as y}from"./uv-empty.DfdG6-w9.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-badge.D98clheT.js";import"./uv-loading-icon.fysPsUZ0.js";import"./uv-line.C7WL1MEA.js";const C=w({data:()=>({options:[{text:"编辑",style:{backgroundColor:"#f5fc6c"}},{text:"删除",style:{backgroundColor:"#f56c6c"}}],config:t,xsStringUtils:s,xsDateUtils:b,pageinfo:o.pageinfo(),sp:{},sr:{dicts:[],tablist:[],list:[]},control:{tab_object_id:null}}),onLoad(t){this.xinit()},onShow(){let t=this;i.onShow((function(){t.public_show()}))},onPullDownRefresh(){let t=this;setTimeout((function(){t.public_reset(),e()}),1e3)},onReachBottom(){this._pagelist()},methods:{xinit(){let t=this;o.get_dicts("dmoapply",(function(s){t.sr.dicts=s.list,t.sr.dicts.status=y.push(t.sr.dicts.status,{name:"全部"})}));let s=o.buildparams({},{},"weigh","desc");o.queryList("dmocategory",s,(function(s){t.sr.tablist=y.push(s.list,{name:"全部"})}))},public_show(){this.pageinfo.reset(),this._pagelist()},public_reset(){this.public_show()},control_changeTabitem:function(t){this.control.tab_object_id=t.id,this.public_show()},_pagelist(){let t=this,s=o.buildparams({status:t.control.tab_object_id},{status:"="},"weigh","desc");o.my_queryPageList("dmoapply",s,t.pageinfo,(function(s){o.processListImages(s.list,["bannerimage"]),t.sr.list=t.pageinfo.appendList(s.list,["bannerimage"])}))},control_clickItem(t){a.router_gotoPage("/pages/xcdemo/dmoapply/form",{id:t.id})},control_clickAdd(){a.router_gotoPage("/pages/xcdemo/dmoapply/form")}}},[["render",function(t,s,o,i,e,a){const b=_(l("uv-tabs"),g),y=_(l("uv-sticky"),h),w=_(l("xc-uv-list-item"),x),C=_(l("uv-list"),j),L=_(l("xc-uv-load-more"),v),q=r,P=_(l("uv-button"),k);return u(),n(q,{class:"xc-wrap"},{default:c((()=>[p(y,{bgColor:"#fff"},{default:c((()=>[p(b,{list:e.sr.dicts.status,onChange:a.control_changeTabitem},null,8,["list","onChange"])])),_:1}),p(C,null,{default:c((()=>[(u(!0),m(f,null,d(e.sr.list,((t,s)=>(u(),n(w,{title:t.name,note:e.xsDateUtils.timestampToString(t.updatetime),clickable:"",border:"",onClick:s=>a.control_clickItem(t)},null,8,["title","note","onClick"])))),256))])),_:1}),p(L,{pageinfo:e.pageinfo},null,8,["pageinfo"]),p(q,{class:"xc-block-bottom-fill"}),p(q,{class:"xc-block-bottom"},{default:c((()=>[p(q,{class:"xc-one-button"},{default:c((()=>[p(P,{type:"primary",text:"添加数据",onClick:a.control_clickAdd},null,8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{C as default};
