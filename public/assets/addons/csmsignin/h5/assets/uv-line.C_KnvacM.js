var t,e;import{m as i,a as r,o as s,c as d,n as o,i as l}from"./index-BjfunRpr.js";import{_ as n}from"./_plugin-vue_export-helper.BCo6x5W8.js";const a=n({name:"uv-line",mixins:[i,r,{props:{color:{type:String,default:"#d6d7d9"},length:{type:[String,Number],default:"100%"},direction:{type:String,default:"row"},hairline:{type:Boolean,default:!0},margin:{type:[String,Number],default:0},dashed:{type:Boolean,default:!1},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.line}}],computed:{lineStyle(){const t={};return t.margin=this.margin,"row"===this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.dashed?"dashed":"solid",t.width=this.$uv.addUnit(this.length),this.hairline&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.dashed?"dashed":"solid",t.height=this.$uv.addUnit(this.length),this.hairline&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))}}},[["render",function(t,e,i,r,n,a){const h=l;return s(),d(h,{class:"uv-line",style:o([a.lineStyle])},null,8,["style"])}],["__scopeId","data-v-c767f31f"]]);export{a as _};