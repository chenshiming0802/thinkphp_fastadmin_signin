import{f as e,y as t,s,q as o,x as i,p as l,V as n,t as c,c as a,w as _,i as u,o as r,h as m,u as d,v as x}from"./index-C9rZ7Etr.js";import{_ as f}from"./uv-button.CWauuAIw.js";import{x as p,a as g,r as h}from"./uv-icon.DSvEdO5n.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-loading-icon.Dn1OaElp.js";const w=b({data:()=>({config:e,xsStringUtils:p,xsDateUtils:g,sp:{},sr:{row:[]},control:{}}),onLoad(e){this.xinit()},onShow(){let e=this;t.onShow((function(){e.public_show()}))},onPullDownRefresh(){let e=this;setTimeout((function(){e.public_show(),s()}),1e3)},methods:{xinit(){},public_reset(){this.public_show()},public_show(){},control_submit:function(){let e=this;o.confirm(null,e.$t("xclogin.me_delete.msg_confirm_delete"),(function(){i.my_get_xtype("xc","cloginApi","deleteUserinfo",[],(function(){o.message_success(e.$t("xclogin.me_delete.msg_delete_success"),(function(){l.clearSession(),n({url:"/pages/index/index"})}))}))}))}}},[["render",function(e,t,s,o,i,l){const n=u,p=h(c("uv-button"),f);return r(),a(n,{class:"xc-wrap"},{default:_((()=>[m(n,{class:"xc-block"},{default:_((()=>[m(n,{class:"xc-title"},{default:_((()=>[d(x(e.$t("xclogin.me_delete.msg_delete_risk_tips")),1)])),_:1}),m(n,{class:"xc-content"},{default:_((()=>[d(x(e.$t("xclogin.me_delete.msg_delete_risk_1")),1)])),_:1}),m(n,{class:"xc-content"},{default:_((()=>[d(x(e.$t("xclogin.me_delete.msg_delete_risk_2")),1)])),_:1}),m(p,{type:"primary",text:e.$t("xclogin.me_delete.btn_delete"),onClick:l.control_submit},null,8,["text","onClick"])])),_:1})])),_:1})}]]);export{w as default};
