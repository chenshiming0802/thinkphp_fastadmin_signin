var e,t;import{u as o,v as i,ak as r,a7 as n,o as a,d as l,w as d,B as s,n as u,b as c,F as v,r as p,f as y,p as f,t as m,g,D as h}from"./index-C_Jtyk6D.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";const w=b({name:"uv-loading-icon",mixins:[o,i,{props:{show:{type:Boolean,default:!0},color:{type:String,default:"#909193"},textColor:{type:String,default:"#909193"},vertical:{type:Boolean,default:!1},mode:{type:String,default:"spinner"},size:{type:[String,Number],default:24},textSize:{type:[String,Number],default:15},textStyle:{type:Object,default:()=>({})},text:{type:[String,Number],default:""},timingFunction:{type:String,default:"linear"},duration:{type:[String,Number],default:1200},inactiveColor:{type:String,default:""},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.loadingIcon}}],data:()=>({array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}),computed:{otherBorderColor(){const e=r(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:e:"transparent"}},watch:{show(e){}},mounted(){this.init()},methods:{init(){setTimeout((()=>{}),20)},addEventListenerToWebview(){const e=n(),t=e[e.length-1].$getAppWebview();t.addEventListener("hide",(()=>{this.webviewHide=!0})),t.addEventListener("show",(()=>{this.webviewHide=!1}))}}},[["render",function(e,t,o,i,r,n){const b=g,w=h;return e.show?(a(),l(b,{key:0,class:s(["uv-loading-icon",[e.vertical&&"uv-loading-icon--vertical"]]),style:u([e.$uv.addStyle(e.customStyle)])},{default:d((()=>[r.webviewHide?y("",!0):(a(),l(b,{key:0,class:s(["uv-loading-icon__spinner",[`uv-loading-icon__spinner--${e.mode}`]]),ref:"ani",style:u({color:e.color,width:e.$uv.addUnit(e.size),height:e.$uv.addUnit(e.size),borderTopColor:e.color,borderBottomColor:n.otherBorderColor,borderLeftColor:n.otherBorderColor,borderRightColor:n.otherBorderColor,"animation-duration":`${e.duration}ms`,"animation-timing-function":"semicircle"===e.mode||"circle"===e.mode?e.timingFunction:""})},{default:d((()=>["spinner"===e.mode?(a(!0),c(v,{key:0},p(r.array12,((e,t)=>(a(),l(b,{key:t,class:"uv-loading-icon__dot"})))),128)):y("",!0)])),_:1},8,["class","style"])),e.text?(a(),l(w,{key:1,class:"uv-loading-icon__text",style:u([{fontSize:e.$uv.addUnit(e.textSize),color:e.textColor},e.$uv.addStyle(e.textStyle)])},{default:d((()=>[f(m(e.text),1)])),_:1},8,["style"])):y("",!0)])),_:1},8,["style","class"])):y("",!0)}],["__scopeId","data-v-d9c6b36a"]]);export{w as _};
