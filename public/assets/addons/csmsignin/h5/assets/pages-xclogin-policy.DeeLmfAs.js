import{y as t,x as n,f as a,c as s,w as e,i as o,o as l,h as c,u as i,v as p,j as u,O as r}from"./index-C9rZ7Etr.js";import{_ as d}from"./_plugin-vue_export-helper.BCo6x5W8.js";const f=d({data:()=>({sp:{type:null},param:{title:null,content:null}}),onLoad(t){this.sp.type=t.type,this.xinit()},onShow(){let n=this;t.onShow((function(){n.public_show()}))},methods:{xinit:function(){},public_show:function(){let t=this;n.get("/"+a.addons+"/xc_clogin_api/policy",{type:t.sp.type},(function(n){t.param.title=n.title,t.param.content=n.content}))}}},[["render",function(t,n,a,d,f,m){const h=o,x=r;return l(),s(h,{class:"xc-wrap"},{default:e((()=>[c(h,{class:"xc-block"},{default:e((()=>[c(h,{class:"xc-title"},{default:e((()=>[i(p(f.param.title),1)])),_:1}),null!=f.param.content&&""!=f.param.content?(l(),s(h,{key:0,class:"xc-content"},{default:e((()=>[c(x,{nodes:f.param.content},null,8,["nodes"])])),_:1})):u("",!0)])),_:1})])),_:1})}]]);export{f as default};
