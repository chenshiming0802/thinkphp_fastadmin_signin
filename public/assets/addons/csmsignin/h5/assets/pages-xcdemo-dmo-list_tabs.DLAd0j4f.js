import{c as t,x as s,j as i,q as o,s as e,l as a,m as n,d as l,w as r,g as c,o as m,e as u,b as p,r as g,F as d}from"./index-DauSF6J7.js";import{_}from"./uv-tabs.eJwOcVLt.js";import{x as b,r as h}from"./uni-app.es.DglSl7oz.js";import{_ as f}from"./uv-sticky.f4YQecqw.js";import{_ as x,a as j,b as v}from"./xc-uv-load-more.cRB5-Ws4.js";import{x as w}from"./uv-empty.DThi24_f.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-badge.vAz19-Y0.js";import"./uv-loading-icon.Bf4N3Fiv.js";import"./uv-line.DlAHhN7k.js";const k=y({data:()=>({config:t,xsStringUtils:s,xsDateUtils:b,pageinfo:i.pageinfo(),sp:{},sr:{tablist:[],list:[]},control:{tab_object_id:null}}),onLoad(t){this.xinit()},onShow(){let t=this;o.onShow((function(){t.public_show()}))},onPullDownRefresh(){let t=this;setTimeout((function(){t.public_reset(),e()}),1e3)},onReachBottom(){this._pagelist()},methods:{xinit(){let t=this,s=i.buildparams({},{},"weigh","desc");i.queryList("dmocategory",s,(function(s){t.sr.tablist=w.push(s.list,{name:"全部"})}))},public_show(){this.pageinfo.reset(),this._pagelist()},public_reset(){this.public_show()},control_changeTabitem:function(t){this.control.tab_object_id=t.id,this.public_show()},_pagelist(){let t=this,s=i.buildparams({csmsignin_dmocategory_id:t.control.tab_object_id},{csmsignin_dmocategory_id:"="},"weigh","desc");i.queryPageList("dmo",s,t.pageinfo,(function(s){i.processListImages(s.list,["bannerimage"]),t.sr.list=t.pageinfo.appendList(s.list,["bannerimage"])}))},control_clickItem(t){a.router_gotoPage("/pages/xcdemo/dmo/item",{id:t.id})}}},[["render",function(t,s,i,o,e,a){const b=h(n("uv-tabs"),_),w=h(n("uv-sticky"),f),y=h(n("xc-uv-list-item"),x),k=h(n("uv-list"),j),C=h(n("xc-uv-load-more"),v),L=c;return m(),l(L,{class:"xc-wrap"},{default:r((()=>[u(w,{bgColor:"#fff"},{default:r((()=>[u(b,{list:e.sr.tablist,onChange:a.control_changeTabitem},null,8,["list","onChange"])])),_:1}),u(k,null,{default:r((()=>[(m(!0),p(d,null,g(e.sr.list,((t,s)=>(m(),l(y,{title:t.name,note:e.xsDateUtils.timestampToString(t.updatetime),thumb:t.bannerimage,"thumb-size":"lg",clickable:"",onClick:s=>a.control_clickItem(t)},null,8,["title","note","thumb","onClick"])))),256))])),_:1}),u(C,{pageinfo:e.pageinfo},null,8,["pageinfo"])])),_:1})}]]);export{k as default};
