import{f as o,y as i,s,X as n,W as t,t as r,c as e,w as c,i as l,o as u,h as p}from"./index-C9rZ7Etr.js";import{_ as a}from"./xc-uv-clogin-loginform.BsZ0afTv.js";import{x as m,a as f,r as g}from"./uv-icon.DSvEdO5n.js";import{_ as d}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-popup.DmGpcaVm.js";import"./uv-transition.x7msCryv.js";import"./uv-line.Cg-M0Gcv.js";import"./uv-safe-bottom.fbeqw3Cz.js";import"./uv-loading-icon.Dn1OaElp.js";import"./uv-checkbox-group.Co7ciPSK.js";import"./uv-button.CWauuAIw.js";const h=d({data:()=>({config:o,xsStringUtils:m,xsDateUtils:f,sp:{},sr:{},control:{uniIdRedirectUrl:""}}),onLoad(o){this.control.uniIdRedirectUrl=decodeURIComponent(o.uniIdRedirectUrl),this.xinit()},onShow(){let o=this;i.onShow((function(){o.public_show()}))},onPullDownRefresh(){let o=this;setTimeout((function(){o.public_show(),s()}),1e3)},methods:{xinit(){},public_reset(){this.public_show()},public_show(){this.$refs["xc-uv-clogin-loginform"].public_open()},onLoginSuccess(o){let i=n("xcCloginUtils_beforelogin_url");null!=i&&""!=i||(i="/#/"),t({url:i})}}},[["render",function(o,i,s,n,t,m){const f=g(r("xc-uv-clogin-loginform"),a),d=l;return u(),e(d,{class:"xc-wrap xp-wrap"},{default:c((()=>[p(f,{ref:"xc-uv-clogin-loginform",onOnLoginSuccess:m.onLoginSuccess,ispage:!0},null,8,["onOnLoginSuccess"])])),_:1})}],["__scopeId","data-v-16f8033f"]]);export{h as default};