var e,l,t,s;import{r as a,_ as i}from"./uv-icon.B7eKapMU.js";import{m as c,a as o,q as u,o as r,c as n,w as d,h as y,d as p,n as v,e as _,t as f,u as g,v as m,i as b,C as S}from"./index-BjfunRpr.js";import{_ as h}from"./uv-line.C_KnvacM.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";const $=k({name:"uv-cell",emits:["click"],mixins:[c,o,{props:{title:{type:[String,Number],default:""},label:{type:[String,Number],default:""},value:{type:[String,Number],default:""},icon:{type:String,default:""},disabled:{type:Boolean,default:!1},border:{type:Boolean,default:!0},center:{type:Boolean,default:!0},url:{type:String,default:""},linkType:{type:String,default:"navigateTo"},clickable:{type:Boolean,default:!1},isLink:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rightIcon:{type:String,default:"arrow-right"},arrowDirection:{type:String,default:""},iconStyle:{type:[Object,String],default:()=>({})},rightIconStyle:{type:[Object,String],default:()=>({})},titleStyle:{type:[Object,String],default:()=>({})},size:{type:String,default:""},stop:{type:Boolean,default:!0},name:{type:[Number,String],default:""},cellStyle:{type:[Object,String],default:()=>{}},...null==(l=null==(e=uni.$uv)?void 0:e.props)?void 0:l.cell}}],computed:{titleTextStyle(){return this.$uv.addStyle(this.titleStyle)}},methods:{clickHandler(e){this.disabled||(this.$emit("click",{name:this.name}),this.openPage(),this.stop&&this.preventEvent(e))}}},[["render",function(e,l,t,s,c,o){const k=a(u("uv-icon"),i),$=b,z=S,x=a(u("uv-line"),h);return r(),n($,{class:p(["uv-cell",[e.customClass]]),style:v([e.$uv.addStyle(e.customStyle)]),"hover-class":e.disabled||!e.clickable&&!e.isLink?"":"uv-cell--clickable","hover-stay-time":250,onClick:o.clickHandler},{default:d((()=>[y($,{class:p(["uv-cell__body",[e.center&&"uv-cell--center","large"===e.size&&"uv-cell__body--large"]]),style:v([e.cellStyle])},{default:d((()=>[y($,{class:"uv-cell__body__content"},{default:d((()=>[y($,{class:"uv-cell__left-icon-wrap"},{default:d((()=>[_(e.$slots,"icon",{},(()=>[e.icon?(r(),n(k,{key:0,name:e.icon,"custom-style":e.iconStyle,size:"large"===e.size?22:18},null,8,["name","custom-style","size"])):f("",!0)]),!0)])),_:3}),y($,{class:"uv-cell__title"},{default:d((()=>[_(e.$slots,"title",{},(()=>[e.title?(r(),n(z,{key:0,class:p(["uv-cell__title-text",[e.disabled&&"uv-cell--disabled","large"===e.size&&"uv-cell__title-text--large"]]),style:v([o.titleTextStyle])},{default:d((()=>[g(m(e.title),1)])),_:1},8,["style","class"])):f("",!0)]),!0),_(e.$slots,"label",{},(()=>[e.label?(r(),n(z,{key:0,class:p(["uv-cell__label",[e.disabled&&"uv-cell--disabled","large"===e.size&&"uv-cell__label--large"]])},{default:d((()=>[g(m(e.label),1)])),_:1},8,["class"])):f("",!0)]),!0)])),_:3})])),_:3}),_(e.$slots,"value",{},(()=>[e.$uv.test.empty(e.value)?f("",!0):(r(),n(z,{key:0,class:p(["uv-cell__value",[e.disabled&&"uv-cell--disabled","large"===e.size&&"uv-cell__value--large"]])},{default:d((()=>[g(m(e.value),1)])),_:1},8,["class"]))]),!0),e.$slots["right-icon"]||e.isLink?(r(),n($,{key:0,class:p(["uv-cell__right-icon-wrap",[`uv-cell__right-icon-wrap--${e.arrowDirection}`]])},{default:d((()=>[e.$slots["right-icon"]?_(e.$slots,"right-icon",{key:0},void 0,!0):(r(),n(k,{key:1,name:e.rightIcon,"custom-style":e.rightIconStyle,color:e.disabled?"#c8c9cc":"info",size:"large"===e.size?18:16},null,8,["name","custom-style","color","size"]))])),_:3},8,["class"])):f("",!0)])),_:3},8,["class","style"]),e.border?(r(),n(x,{key:0})):f("",!0)])),_:3},8,["class","style","hover-class","onClick"])}],["__scopeId","data-v-1976e35c"]]);const z=k({name:"uv-cell-group",mixins:[c,o,{props:{title:{type:String,default:""},border:{type:Boolean,default:!0},...null==(s=null==(t=uni.$uv)?void 0:t.props)?void 0:s.cellGroup}}]},[["render",function(e,l,t,s,i,c){const o=S,k=b,$=a(u("uv-line"),h);return r(),n(k,{style:v([e.$uv.addStyle(e.customStyle)]),class:p([[e.customClass],"uv-cell-group"])},{default:d((()=>[e.title?(r(),n(k,{key:0,class:"uv-cell-group__title"},{default:d((()=>[_(e.$slots,"title",{},(()=>[y(o,{class:"uv-cell-group__title__text"},{default:d((()=>[g(m(e.title),1)])),_:1})]),!0)])),_:3})):f("",!0),y(k,{class:"uv-cell-group__wrapper"},{default:d((()=>[e.border?(r(),n($,{key:0})):f("",!0),_(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style","class"])}],["__scopeId","data-v-97f3db78"]]);export{$ as _,z as a};
