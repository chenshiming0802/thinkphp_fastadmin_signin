var e,t,o,n;import{u as l,v as i,m as s,o as c,d as a,w as r,e as u,B as p,n as m,f as d,p as g,t as h,D as _,g as f,Y as y,a8 as x,a9 as v,c as b,x as C,aa as k,j as $,k as w,ab as S,l as T,y as B,b as N,F as P}from"./index-CBvp-4dO.js";import{d as O,a as V,b as j,c as A,_ as L}from"./uv-popup.BsBpFEUE.js";import{r as I,_ as z,x as U}from"./uni-app.es.qNtsQ7Zh.js";import{_ as D}from"./uv-loading-icon.BheHwPY6.js";import{_ as R,a as q,b as M}from"./uv-checkbox-group.NGPcIz8Q.js";import{_ as E}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as K}from"./uv-button.Cka0dJjU.js";import{_ as G}from"./uv-line.CzAFXsL5.js";const H=E({name:"uv-toast",mixins:[l,i],data:()=>({isShow:!1,timer:null,config:{message:"",type:"",duration:2e3,icon:!0,position:"center",complete:null,overlay:!1,loading:!1},tmpConfig:{}}),computed:{iconName(){return this.tmpConfig.icon&&"none"!=this.tmpConfig.icon&&["error","warning","success","primary"].includes(this.tmpConfig.type)?this.$uv.type2icon(this.tmpConfig.type):""},overlayStyle(){const e={justifyContent:"center",alignItems:"center",display:"flex",backgroundColor:"rgba(0, 0, 0, 0)"};return e},iconStyle(){const e={marginRight:"4px"};return e},contentStyle(){const e=this.$uv.sys().windowHeight,t={};let o=0;return"top"===this.tmpConfig.position?o=.25*-e:"bottom"===this.tmpConfig.position&&(o=.25*e),t.transform=`translateY(${o}px)`,t}},created(){["primary","success","error","warning","default","loading"].map((e=>{this[e]=t=>this.show({type:e,message:t})}))},methods:{show(e){this.tmpConfig=this.$uv.deepMerge(this.config,e),this.clearTimer(),this.isShow=!0,this.timer=setTimeout((()=>{this.clearTimer(),"function"==typeof this.tmpConfig.complete&&this.tmpConfig.complete()}),this.tmpConfig.duration)},hide(){this.clearTimer()},clearTimer(){this.isShow=!1,clearTimeout(this.timer),this.timer=null}},unmounted(){this.clearTimer()}},[["render",function(e,t,o,n,l,i){const y=I(s("uv-loading-icon"),D),x=I(s("uv-icon"),z),v=I(s("uv-gap"),R),b=_,C=f,k=I(s("uv-overlay"),O);return c(),a(C,{class:"uv-toast"},{default:r((()=>[u(k,{show:l.isShow,"custom-style":i.overlayStyle},{default:r((()=>[u(C,{class:p(["uv-toast__content",["uv-type-"+l.tmpConfig.type,"loading"===l.tmpConfig.type||l.tmpConfig.loading?"uv-toast__content--loading":""]]),style:m([i.contentStyle])},{default:r((()=>["loading"===l.tmpConfig.type?(c(),a(y,{key:0,mode:"circle",color:"rgb(255, 255, 255)",inactiveColor:"rgb(120, 120, 120)",size:"25"})):"defalut"!==l.tmpConfig.type&&i.iconName?(c(),a(x,{key:1,name:i.iconName,size:"17",color:l.tmpConfig.type,customStyle:i.iconStyle},null,8,["name","color","customStyle"])):d("",!0),"loading"===l.tmpConfig.type||l.tmpConfig.loading?(c(),a(v,{key:2,height:"12",bgColor:"transparent"})):d("",!0),u(b,{class:p(["uv-toast__content__text",["uv-toast__content__text--"+l.tmpConfig.type]]),style:{"max-width":"400rpx"}},{default:r((()=>[g(h(l.tmpConfig.message),1)])),_:1},8,["class"])])),_:1},8,["style","class"])])),_:1},8,["show","custom-style"])])),_:1})}],["__scopeId","data-v-4fdbf213"]]);const Y=E({name:"uv-code",mixins:[l,i,{props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.code}}],data(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler(e){this.secNum=e}}},methods:{checkKeepRunning(){let e=Number(y(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);let t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,x(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start(){this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.timer=setInterval((()=>{--this.secNum?this.changeEvent(this.changeText.replace(/x|X/,this.secNum)):(clearInterval(this.timer),this.timer=null,this.changeEvent(this.endText),this.secNum=this.seconds,this.$emit("end"),this.canGetCode=!0)}),1e3),this.setTimeToStorage()},reset(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent(e){this.$emit("change",e)},setTimeToStorage(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){let e=Math.floor(+new Date/1e3);v({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},unmounted(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}},[["render",function(e,t,o,n,l,i){const s=f;return c(),a(s,{class:"uv-code"})}]]);const X=E({props:{modelValue:{type:Object,default:[]},data:{type:Object,default:[]}},watch:{data:{handler(e,t){}}},emits:["onLoginSuccess","onCheckAgreePolicy"],data:()=>({config:b,xsStringUtils:C,xsDateUtils:U,xcLangUtils:k,sp:{},sr:{},control:{form:{mobile:"",captcha:""},rules:{mobile:{type:"string",required:!0,len:11,message:k.t("xclogin.login.msg_mobile_error_format"),trigger:["blur"]},captcha:{type:"string",required:!0,len:4,message:k.t("xclogin.login.msg_input_ccode"),trigger:["blur"]}}},controlcode:{tips:"",seconds:60}}),created(){this.xinit(),this.public_show()},methods:{xinit(){},public_show(){},public_reset(){this.public_show()},control_submit(){this.$emit("onCheckAgreePolicy",this._submit)},_submit(){console.log("-submit");let e=this;e.$refs.form.validate().then((t=>{$.post("/"+b.addons+"/xc_clogin_api/mobilelogin",{mobile:e.control.form.mobile,captcha:e.control.form.captcha},(function(t){let o=t.userinfo.token;w.setSessionToken(o),null!=e.sp.push_clientid||""!=e.sp.push_clientid?$.my_post_xtype("xc","clogininfo","save",{setting_key:"app_push_clientid",setting_value:e.sp.push_clientid},(function(o){e.$emit("onLoginSuccess",t.userinfo)})):e.$emit("onLoginSuccess",t.userinfo)}),(function(t){return e.control.errmsg=t,e.control.form.captcha="",!1}))}))},controlcode_codeChange(e){this.controlcode.tips=e},controlcode_getCode(){let e=this;console.log(e.$refs.code),e.$refs.code.canGetCode?(S({title:e.$t("xclogin.login.msg_getting_ccode")}),$.post("sms/send",{mobile:e.control.form.mobile,event:"mobilelogin"},(function(t){T.message_success(e.$t("xclogin.login.msg_already_send_ccode")),e.$refs.code.start()}),(function(e){T.message_error(e)}))):T.message_success(e.$t("xclogin.login.msg_send_after_ccode"))}}},[["render",function(e,t,o,n,l,i){const p=I(s("uv-input"),V),m=I(s("uv-form-item"),j),d=I(s("uv-toast"),H),_=I(s("uv-code"),Y),f=I(s("uv-button"),K),y=I(s("uv-form"),A);return c(),a(y,{labelPosition:"left",model:l.control.form,rules:l.control.rules,ref:"form",labelWidth:"80px"},{default:r((()=>[u(m,{label:e.$t("xclogin._model_.mobile"),prop:"mobile"},{default:r((()=>[u(p,{type:"number",modelValue:l.control.form.mobile,"onUpdate:modelValue":t[0]||(t[0]=e=>l.control.form.mobile=e),placeholder:e.$t("xclogin.login.msg_input_mobile")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(m,{label:e.$t("xclogin._model_.captcha"),prop:"captcha"},{default:r((()=>[u(p,{type:"number",modelValue:l.control.form.captcha,"onUpdate:modelValue":t[1]||(t[1]=e=>l.control.form.captcha=e),placeholder:e.$t("xclogin.login.msg_input_ccode")},{suffix:r((()=>[u(d,{ref:"toast"},null,512),u(_,{"start-text":e.$t("xclogin.login.msg_get_ccode"),"end-text":e.$t("xclogin.login.msg_reget_ccode"),changeText:e.$t("xclogin.login.msg_countdown_ccode"),"keep-running":"",seconds:l.controlcode.seconds,ref:"code",onChange:i.controlcode_codeChange},null,8,["start-text","end-text","changeText","seconds","onChange"]),u(f,{onClick:i.controlcode_getCode,text:l.control.tips,type:"success",size:"mini"},{default:r((()=>[g(h(l.controlcode.tips),1)])),_:1},8,["onClick","text"])])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"]),u(f,{type:"primary",text:e.$t("xclogin.login.btn_login"),customStyle:"margin-top: 10px",onClick:i.control_submit},null,8,["text","onClick"])])),_:1},8,["model","rules"])}]]);const F=E({props:{modelValue:{type:String,default:null},truevalue:{type:String,default:"Y"},falsevalue:{type:String,default:"N"}},watch:{modelValue:{handler(e,t){this.xinit()}}},data:()=>({sp:{checked:!1},control:{visible:!1,displayvalue:"请选择",columns:[]}}),created(){this.xinit()},methods:{xinit:function(){let e=this;e.control,e.sp.checked=e.modelValue==e.truevalue},control_change:function(e){let t=this,o=e?t.truevalue:t.falsevalue;t.$emit("update:modelValue",o)}}},[["render",function(e,t,o,n,l,i){const p=I(s("uv-checkbox"),q),m=I(s("uv-checkbox-group"),M),d=f;return c(),a(d,{style:{display:"inline-block"},class:"u-input u-input-single-checkbox"},{default:r((()=>[u(m,null,{default:r((()=>[u(p,{shape:"squre",label:" ",checked:l.sp.checked,size:"20",onChange:i.control_change},null,8,["checked","onChange"])])),_:1})])),_:1})}]]);const W=E({name:"uv-modal",mixins:[l,i,{props:{title:{type:[String],default:""},content:{type:String,default:""},confirmText:{type:String,default:"确认"},cancelText:{type:String,default:"取消"},showConfirmButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!1},confirmColor:{type:String,default:"#2979ff"},cancelColor:{type:String,default:"#606266"},buttonReverse:{type:Boolean,default:!1},zoom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:10075},asyncClose:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},negativeTop:{type:[String,Number],default:0},width:{type:[String,Number],default:"650rpx"},align:{type:String,default:"left"},textStyle:{type:[Object,String],default:""},...null==(n=null==(o=uni.$uv)?void 0:o.props)?void 0:n.modal}}],data:()=>({loading:!1}),computed:{nvueStyle:()=>({})},methods:{open(){this.$refs.modalPopup.open(),this.loading&&(this.loading=!1)},close(){this.$refs.modalPopup.close()},popupChange(e){e.show||this.$emit("close")},confirmHandler(){this.loading||this.$emit("confirm"),this.asyncClose?this.loading=!0:this.close()},cancelHandler(){this.$emit("cancel"),this.close()},closeLoading(){this.$nextTick((()=>{this.loading=!1}))}}},[["render",function(e,t,o,n,l,i){const y=_,x=f,v=I(s("uv-line"),G),b=I(s("uv-loading-icon"),D),C=I(s("uv-popup"),L);return c(),a(C,{ref:"modalPopup",mode:"center",zoom:e.zoom,zIndex:e.zIndex,customStyle:{borderRadius:"6px",overflow:"hidden",marginTop:`-${e.$uv.addUnit(e.negativeTop)}`},closeOnClickOverlay:e.closeOnClickOverlay,safeAreaInsetBottom:!1,duration:400,onChange:i.popupChange},{default:r((()=>[u(x,{class:"uv-modal",style:m({width:e.$uv.addUnit(e.width)})},{default:r((()=>[e.title?(c(),a(y,{key:0,class:"uv-modal__title"},{default:r((()=>[g(h(e.title),1)])),_:1})):d("",!0),u(x,{class:"uv-modal__content",style:m({paddingTop:(e.title?12:25)+"px"})},{default:r((()=>[B(e.$slots,"default",{},(()=>[u(y,{class:"uv-modal__content__text",style:m([{textAlign:e.align},i.nvueStyle,e.$uv.addStyle(e.textStyle)])},{default:r((()=>[g(h(e.content),1)])),_:1},8,["style"])]),!0)])),_:3},8,["style"]),B(e.$slots,"confirmButton",{},(()=>[u(v),e.showConfirmButton||e.showCancelButton?(c(),a(x,{key:0,class:"uv-modal__button-group",style:m({flexDirection:e.buttonReverse?"row-reverse":"row"})},{default:r((()=>[e.showCancelButton?(c(),a(x,{key:0,class:p(["uv-modal__button-group__wrapper uv-modal__button-group__wrapper--cancel",[e.showCancelButton&&!e.showConfirmButton&&"uv-modal__button-group__wrapper--only-cancel"]]),"hover-stay-time":150,"hover-class":"uv-modal__button-group__wrapper--hover",onClick:i.cancelHandler},{default:r((()=>[u(y,{class:"uv-modal__button-group__wrapper__text",style:m({color:e.cancelColor})},{default:r((()=>[g(h(e.cancelText),1)])),_:1},8,["style"])])),_:1},8,["class","onClick"])):d("",!0),e.showConfirmButton&&e.showCancelButton?(c(),a(v,{key:1,direction:"column"})):d("",!0),e.showConfirmButton?(c(),a(x,{key:2,class:p(["uv-modal__button-group__wrapper uv-modal__button-group__wrapper--confirm",[!e.showCancelButton&&e.showConfirmButton&&"uv-modal__button-group__wrapper--only-confirm"]]),"hover-stay-time":150,"hover-class":"uv-modal__button-group__wrapper--hover",onClick:i.confirmHandler},{default:r((()=>[l.loading?(c(),a(b,{key:0})):(c(),a(y,{key:1,class:"uv-modal__button-group__wrapper__text",style:m({color:e.confirmColor})},{default:r((()=>[g(h(e.confirmText),1)])),_:1},8,["style"]))])),_:1},8,["class","onClick"])):d("",!0)])),_:1},8,["style"])):d("",!0)]),!0)])),_:3},8,["style"])])),_:3},8,["zoom","zIndex","customStyle","closeOnClickOverlay","onChange"])}],["__scopeId","data-v-a841b530"]]);const J=E({props:{ispage:{type:Boolean,default:!1}},emits:["onLoginSuccess"],data:()=>({config:b,xsStringUtils:C,xsDateUtils:U,sp:{},sr:{},control:{agreementChecked:"N",func:null,page_visible:!1}}),created(){let e=this;e.$nextTick((function(){e.xinit(),e.public_show()}))},methods:{xinit(){},public_show(){},public_reset(){this.public_show()},public_open(){this._open()},onLoginSuccess(e){this.$emit("onLoginSuccess",e),this._close()},onCheckAgreePolicy(e){let t=this;t.control.func=e,"N"==t.control.agreementChecked?t.$refs.aggreementModal.open():t.control.func()},control_clickAgreement(){this.control.agreementChecked="Y",this.$refs.aggreementModal.close()},control_clickPolicy(e){T.router_gotoPage("/pages/xclogin/policy",{type:e})},control_clickModalAgreement(){let e=this;e.control_clickAgreement(),e.control.func&&e.control.func()},_open(){let e=this;e.ispage?e.control.page_visible=!0:e.$refs.modal.open()},_close(){let e=this;e.ispage?e.control.page_visible=!1:e.$refs.modal.close()}}},[["render",function(e,t,o,n,l,i){const p=f,m=I(s("xc-uv-clogin-loginform-mobileinput"),X),_=I(s("xc-uv-single-checkbox"),F),y=I(s("uv-popup"),L),x=I(s("uv-modal"),W);return c(),N(P,null,[o.ispage?d("",!0):(c(),a(y,{key:0,ref:"modal",round:"5"},{default:r((()=>[u(p,{class:"xc-block xp-block"},{default:r((()=>[u(p,{class:"xp-title"},{default:r((()=>[g(h(e.$t("xclogin.login.label_welcome_login"))+" "+h(l.config[e.$i18n.locale+"_projectname"]),1)])),_:1}),u(p,{class:"xp-block-form"},{default:r((()=>[u(m,{onOnLoginSuccess:i.onLoginSuccess,onOnCheckAgreePolicy:i.onCheckAgreePolicy},null,8,["onOnLoginSuccess","onOnCheckAgreePolicy"])])),_:1}),u(p,{class:"xp-agreement"},{default:r((()=>[u(_,{modelValue:l.control.agreementChecked,"onUpdate:modelValue":t[0]||(t[0]=e=>l.control.agreementChecked=e)},null,8,["modelValue"]),g(" "+h(e.$t("xclogin.login.msg_please_agree"))+" 《",1),u(p,{class:"xp-link-policy",onClick:t[1]||(t[1]=e=>i.control_clickPolicy("service"))},{default:r((()=>[g(h(e.$t("xclogin.me.label_servicepolicy")),1)])),_:1}),g("》 《"),u(p,{class:"xp-link-policy",onClick:t[2]||(t[2]=e=>i.control_clickPolicy("private"))},{default:r((()=>[g(h(e.$t("xclogin.me.label_privatepolicy")),1)])),_:1}),g("》 ")])),_:1})])),_:1})])),_:1},512)),o.ispage&&l.control.page_visible?(c(),a(p,{key:1,class:"xc-wrap mp-wrap-page"},{default:r((()=>[u(p,{class:"xc-block xp-block"},{default:r((()=>[u(p,{class:"xp-title"},{default:r((()=>[g(h(e.$t("xclogin.login.label_welcome_login"))+" "+h(l.config[e.$i18n.locale+"_projectname"]),1)])),_:1}),u(p,{class:"xp-block-form"},{default:r((()=>[u(m,{onOnLoginSuccess:i.onLoginSuccess,onOnCheckAgreePolicy:i.onCheckAgreePolicy},null,8,["onOnLoginSuccess","onOnCheckAgreePolicy"])])),_:1}),u(p,{class:"xp-agreement"},{default:r((()=>[u(_,{modelValue:l.control.agreementChecked,"onUpdate:modelValue":t[3]||(t[3]=e=>l.control.agreementChecked=e)},null,8,["modelValue"]),g(" "+h(e.$t("xclogin.login.msg_please_agree"))+" 《",1),u(p,{class:"xp-link-policy",onClick:t[4]||(t[4]=e=>i.control_clickPolicy("service"))},{default:r((()=>[g(h(e.$t("xclogin.me.label_servicepolicy")),1)])),_:1}),g("》 《"),u(p,{class:"xp-link-policy",onClick:t[5]||(t[5]=e=>i.control_clickPolicy("private"))},{default:r((()=>[g(h(e.$t("xclogin.me.label_privatepolicy")),1)])),_:1}),g("》 ")])),_:1})])),_:1})])),_:1})):d("",!0),u(x,{ref:"aggreementModal",onConfirm:i.control_clickModalAgreement,showCancelButton:"",cancelText:e.$t("xc.btn_cancel"),confirmText:e.$t("xclogin.login.msg_please_agree")},{default:r((()=>[u(p,{class:"xp-slot-content"},{default:r((()=>[g(h(e.$t("xclogin.login.msg_please_read"))+" 《",1),u(p,{class:"xp-link-policy",onClick:t[6]||(t[6]=e=>i.control_clickPolicy("service"))},{default:r((()=>[g(h(e.$t("xclogin.me.label_servicepolicy")),1)])),_:1}),g("》 《"),u(p,{class:"xp-link-policy",onClick:t[7]||(t[7]=e=>i.control_clickPolicy("private"))},{default:r((()=>[g(h(e.$t("xclogin.me.label_privatepolicy")),1)])),_:1}),g("》 ")])),_:1})])),_:1},8,["onConfirm","cancelText","confirmText"])],64)}],["__scopeId","data-v-34d6e0c7"]]);export{J as _};
