import{c as t,x as s,p as o,s as i,k as a,l as e,d as l,w as n,g as c,o as r,e as u,b as p,r as m,F as d}from"./index-DOjLHWN9.js";import{_ as f}from"./uv-tabs.B9AxVCg4.js";import{x as g,a as b,r as _}from"./uni-app.es.CL2Gwq-g.js";import{_ as h}from"./uv-sticky.B2irNIXt.js";import{_ as x,a as k,b as v}from"./xc-uv-load-more.DmrVLTL3.js";import{_ as j}from"./uv-button.Cn5KIt2m.js";import{x as y}from"./uv-empty.DORsQgGO.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-badge.71iZCqhQ.js";import"./uv-loading-icon.2Kr2PZmw.js";import"./uv-line.pXkEVqwb.js";const C=w({data:()=>({options:[{text:"编辑",style:{backgroundColor:"#f5fc6c"}},{text:"删除",style:{backgroundColor:"#f56c6c"}}],config:t,xsStringUtils:g,xsDateUtils:b,pageinfo:s.pageinfo(),sp:{},sr:{dicts:[],tablist:[],list:[]},control:{tab_object_id:null}}),onLoad(t){this.xinit()},onShow(){let t=this;o.onShow((function(){t.public_show()}))},onPullDownRefresh(){let t=this;setTimeout((function(){t.public_reset(),i()}),1e3)},onReachBottom(){this._pagelist()},methods:{xinit(){let t=this;s.get_dicts("dmoapply",(function(s){t.sr.dicts=s.list,t.sr.dicts.status=y.push(t.sr.dicts.status,{name:"全部"})}));let o=s.buildparams({},{},"weigh","desc");s.queryList("dmocategory",o,(function(s){t.sr.tablist=y.push(s.list,{name:"全部"})}))},public_show(){this.pageinfo.reset(),this._pagelist()},public_reset(){this.public_show()},control_changeTabitem:function(t){this.control.tab_object_id=t.id,this.public_show()},_pagelist(){let t=this,o=s.buildparams({status:t.control.tab_object_id},{status:"="},"weigh","desc");s.my_queryPageList("dmoapply",o,t.pageinfo,(function(o){s.processListImages(o.list,["bannerimage"]),t.sr.list=t.pageinfo.appendList(o.list,["bannerimage"])}))},control_clickItem(t){a.router_gotoPage("/pages/xcdemo/dmoapply/form",{id:t.id})},control_clickAdd(){a.router_gotoPage("/pages/xcdemo/dmoapply/form")}}},[["render",function(t,s,o,i,a,g){const b=_(e("uv-tabs"),f),y=_(e("uv-sticky"),h),w=_(e("xc-uv-list-item"),x),C=_(e("uv-list"),k),L=_(e("xc-uv-load-more"),v),P=c,S=_(e("uv-button"),j);return r(),l(P,{class:"xc-wrap"},{default:n((()=>[u(y,{bgColor:"#fff"},{default:n((()=>[u(b,{list:a.sr.dicts.status,onChange:g.control_changeTabitem},null,8,["list","onChange"])])),_:1}),u(C,null,{default:n((()=>[(r(!0),p(d,null,m(a.sr.list,((t,s)=>(r(),l(w,{title:t.name,note:a.xsDateUtils.timestampToString(t.updatetime),clickable:"",border:"",onClick:s=>g.control_clickItem(t)},null,8,["title","note","onClick"])))),256))])),_:1}),u(L,{pageinfo:a.pageinfo},null,8,["pageinfo"]),u(P,{class:"xc-block-bottom-fill"}),u(P,{class:"xc-block-bottom"},{default:n((()=>[u(P,{class:"xc-one-button"},{default:n((()=>[u(S,{type:"primary",text:"添加数据",onClick:g.control_clickAdd},null,8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{C as default};
