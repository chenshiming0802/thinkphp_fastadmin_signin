var e,t;import{u as o,v as s,o as a,d as l,w as r,p as u,t as i,B as n,n as d,f as h,D as p}from"./index-C_Jtyk6D.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";const f={props:{isDot:{type:Boolean,default:!1},value:{type:[Number,String],default:""},show:{type:Boolean,default:!0},max:{type:[Number,String],default:999},type:{type:[String,void 0,null],default:"error"},showZero:{type:Boolean,default:!1},bgColor:{type:[String,null],default:null},color:{type:[String,null],default:null},shape:{type:[String,void 0,null],default:"circle"},numberType:{type:[String,void 0,null],default:"overflow"},offset:{type:Array,default:()=>[]},inverted:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.badge}};const b=v({name:"uv-badge",mixins:[o,s,f],computed:{boxStyle:()=>({}),badgeStyle(){const e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){const t=this.offset[0],o=this.offset[1]||t;e.top=this.$uv.addUnit(t),e.right=this.$uv.addUnit(o)}return e},showValue(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}},propsType(){return this.type||"error"}}},[["render",function(e,t,o,s,v,f){const b=p;return e.show&&(0!==Number(e.value)||e.showZero||e.isDot)?(a(),l(b,{key:0,class:n([[e.isDot?"uv-badge--dot":"uv-badge--not-dot",e.inverted&&"uv-badge--inverted","horn"===e.shape&&"uv-badge--horn",`uv-badge--${f.propsType}${e.inverted?"--inverted":""}`],"uv-badge"]),style:d([e.$uv.addStyle(e.customStyle),f.badgeStyle])},{default:r((()=>[u(i(e.isDot?"":f.showValue),1)])),_:1},8,["class","style"])):h("",!0)}],["__scopeId","data-v-79f791a7"]]);export{b as _,f as u};
