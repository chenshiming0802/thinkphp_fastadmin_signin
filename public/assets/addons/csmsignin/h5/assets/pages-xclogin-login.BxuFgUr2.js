import{c as o,p as s,s as i,X as n,W as t,l as r,d as e,w as l,g as c,o as u,e as p}from"./index-B3YTDGpb.js";import{_ as a}from"./xc-uv-clogin-loginform.CcDIuSzm.js";import{x as m,a as g,r as f}from"./uni-app.es.BItphNhK.js";import{_ as d}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-popup.CYHBbLZk.js";import"./uv-transition.BnYateoC.js";import"./uv-line.Dr3UF4mW.js";import"./uv-safe-bottom.Do0hWKd6.js";import"./uv-loading-icon.Cg3w_dB7.js";import"./uv-checkbox-group.IskRYYdj.js";import"./uv-button.Czy-Fiws.js";const h=d({data:()=>({config:o,xsStringUtils:m,xsDateUtils:g,sp:{},sr:{},control:{uniIdRedirectUrl:""}}),onLoad(o){this.control.uniIdRedirectUrl=decodeURIComponent(o.uniIdRedirectUrl),this.xinit()},onShow(){let o=this;s.onShow((function(){o.public_show()}))},onPullDownRefresh(){let o=this;setTimeout((function(){o.public_show(),i()}),1e3)},methods:{xinit(){},public_reset(){this.public_show()},public_show(){this.$refs["xc-uv-clogin-loginform"].public_open()},onLoginSuccess(o){let s=n("xcCloginUtils_beforelogin_url");null!=s&&""!=s||(s="/#/"),t({url:s})}}},[["render",function(o,s,i,n,t,m){const g=f(r("xc-uv-clogin-loginform"),a),d=c;return u(),e(d,{class:"xc-wrap xp-wrap"},{default:l((()=>[p(g,{ref:"xc-uv-clogin-loginform",onOnLoginSuccess:m.onLoginSuccess,ispage:!0},null,8,["onOnLoginSuccess"])])),_:1})}],["__scopeId","data-v-16f8033f"]]);export{h as default};