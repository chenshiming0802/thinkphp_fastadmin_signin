import{f as o,y as t,s as e,l as a,x as l,p as r,q as n,c as s,w as i,i as u,o as c,h as m,u as p,v as f}from"./index-BjfunRpr.js";import{a as d,b as _,c as v}from"./uv-popup.DHUtt-1P.js";import{x,a as b,r as h}from"./uv-icon.B7eKapMU.js";import{_ as g}from"./xc-uv-upload.DR-foFt4.js";import{_ as k}from"./uv-button.C7uUtOfu.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-transition.DsI_QwgO.js";import"./uv-line.C_KnvacM.js";import"./uv-safe-bottom.BHLPinXG.js";import"./uv-loading-icon.CvAzROqE.js";const w=j({data(){return{config:o,xsStringUtils:x,xsDateUtils:b,sp:{},sr:{},control:{form:{nickname:null,avatar:null},rules:{nickname:{required:!0,message:this.$t("xc.rules_required_input")}}}}},onLoad(o){this.xinit()},onShow(){let o=this;t.onShow((function(){o.public_show()}))},onPullDownRefresh(){let o=this;setTimeout((function(){o.public_show(),e()}),1e3)},methods:{xinit(){},public_reset(){this.public_show()},public_show(){let o=this;a.getUserinfo((function(t){l.row2form(t,o.control.form)}))},control_submit(){let o=this,t=o.control;o.$refs.form.validate().then((e=>{l.my_post_xtype("xc","cloginApi","updateUserinfo",t.form,(function(t){r.message_success(o.$t("xc.msg_success_save"),(function(){r.router_navigateBack()}))}))}))},control_clickDelete(){r.router_gotoPage("/pages/xclogin/me_delete")},mp_control_changeNick(o){this.control.form.nickname=o.detail.value},mp_control_onChooseAvatar(o){let t=this.control;l.upload(o.detail.avatarUrl,(function(o){t.form.avatar=o}))}}},[["render",function(o,t,e,a,l,r){const x=h(n("uv-input"),d),b=h(n("uv-form-item"),_),j=h(n("xc-uv-upload"),g),w=h(n("uv-form"),v),y=h(n("uv-button"),k),U=u;return c(),s(U,{class:"xc-wrap"},{default:i((()=>[m(U,{class:"xc-block"},{default:i((()=>[m(w,{labelPosition:"left",model:l.control.form,rules:l.control.rules,ref:"form"},{default:i((()=>[m(b,{label:o.$t("xclogin._model_.nickname"),prop:"nickname",required:"",borderBottom:""},{default:i((()=>[m(x,{modelValue:l.control.form.nickname,"onUpdate:modelValue":t[0]||(t[0]=o=>l.control.form.nickname=o),border:"surround"},null,8,["modelValue"])])),_:1},8,["label"]),m(b,{label:o.$t("xclogin._model_.avatar"),prop:"avatar",required:"",borderBottom:""},{default:i((()=>[m(j,{modelValue:l.control.form.avatar,"onUpdate:modelValue":t[1]||(t[1]=o=>l.control.form.avatar=o),maxCount:"1"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["model","rules"]),m(y,{type:"primary",text:o.$t("xc.btn_save"),customStyle:"margin-top: 10px",onClick:r.control_submit},null,8,["text","onClick"]),m(U,{class:"xc-afterbuton",onClick:r.control_clickDelete},{default:i((()=>[p(f(o.$t("xclogin.me.btn_destoryaccount")),1)])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-04ad9362"]]);export{w as default};
