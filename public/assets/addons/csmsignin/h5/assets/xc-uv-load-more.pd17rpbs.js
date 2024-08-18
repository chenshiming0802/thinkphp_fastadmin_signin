var t,e,i,o;import{u as a,v as s,m as l,o as n,d as r,w as d,e as u,n as c,B as h,g as p,L as g,M as m,W as f,X as v,f as y,y as b,p as _,t as S,i as w,D as x,b as k}from"./index-B6DGGkvU.js";import{r as C,_ as $}from"./uni-app.es.Cbr9XfqL.js";import{_ as T}from"./uv-badge.D98clheT.js";import{_ as B}from"./uv-loading-icon.fysPsUZ0.js";import{_ as z}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as V}from"./uv-line.C7WL1MEA.js";import{_ as P}from"./uv-empty.DfdG6-w9.js";const D=z({name:"uv-switch",mixins:[a,s,{props:{value:{type:[Boolean,String,Number],default:!1},modelValue:{type:[Boolean,String,Number],default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[String,Number],default:25},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#fff"},activeValue:{type:[String,Number,Boolean],default:!0},inactiveValue:{type:[String,Number,Boolean],default:!1},asyncChange:{type:Boolean,default:!1},space:{type:[String,Number],default:0},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.switch}}],data:()=>({bgColor:"#ffffff",innerValue:!1}),watch:{value(t){if(t!==this.inactiveValue&&t!==this.activeValue)return this.$uv.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");this.innerValue=t},modelValue(t){if(t!==this.inactiveValue&&t!==this.activeValue)return this.$uv.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");this.innerValue=t}},created(){this.innerValue=this.value||this.modelValue},computed:{isActive(){return this.innerValue===this.activeValue},switchStyle(){let t={};return t.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)+2),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)+2),this.customInactiveColor&&(t.borderColor="rgba(0, 0, 0, 0)"),t.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,t},nodeStyle(){let t={};t.width=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space);const e=this.isActive?this.$uv.addUnit(this.space):this.$uv.addUnit(this.$uv.getPx(this.size));return t.transform=`translateX(-${e})`,t},bgStyle(){let t={};return t.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)-this.$uv.getPx(this.size)/2),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)),t.backgroundColor=this.inactiveColor,t.transform=`scale(${this.isActive?0:1})`,t},customInactiveColor(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},methods:{clickHandler(){if(!this.disabled&&!this.loading){const t=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||(this.$emit("input",t),this.$emit("update:modelValue",t)),this.$nextTick((()=>{this.$emit("change",t)}))}}}},[["render",function(t,e,i,o,a,s){const g=p,m=C(l("uv-loading-icon"),B);return n(),r(g,{class:h(["uv-switch",[t.disabled&&"uv-switch--disabled"]]),style:c([s.switchStyle,t.$uv.addStyle(t.customStyle)]),onClick:s.clickHandler},{default:d((()=>[u(g,{class:"uv-switch__bg",style:c([s.bgStyle])},null,8,["style"]),u(g,{class:h(["uv-switch__node",[a.innerValue&&"uv-switch__node--on"]]),style:c([s.nodeStyle]),ref:"uv-switch__node"},{default:d((()=>[u(m,{show:t.loading,mode:"circle",timingFunction:"linear",color:a.innerValue?t.activeColor:"#AAABAD",size:.6*t.size},null,8,["show","color","size"])])),_:1},8,["class","style"])])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-4477799c"]]);const A=z({name:"uv-list-item",mixins:[a,s],emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},showBadge:{type:[Boolean,String],default:!1},badge:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({name:"",color:"#000000",size:20,customPrefix:""})},border:{type:Boolean,default:!1},customStyle:{type:Object,default:()=>({padding:"",backgroundColor:"#FFFFFF"})},keepScrollPosition:{type:Boolean,default:!1}},computed:{directionData(){return this.direction?this.direction:this.parentData.direction?this.parentData.direction:"row"}},watch:{"customStyle.padding":{handler(t){t&&this.setPadding(t)},immediate:!0}},data:()=>({isFirstChild:!1,padding:{top:"",right:"",bottom:"",left:""},parentData:{direction:"row",padding:0}}),created(){this.updateParentData()},mounted(){this.init(),this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{init(){this.parent||this.$uv.error("uv-list-item必须搭配uv-list组件使用"),this.$nextTick((()=>{this.padding.top||this.padding.right||this.padding.bottom||this.padding.left||this.setPadding(this.parentData.padding)}))},updateParentData(){this.getParentData("uv-list")},setPadding(t){"number"==typeof t&&(t+="");let e=t.split(" ");if(1===e.length){const t=e[0];this.padding={top:t,right:t,bottom:t,left:t}}else if(2===e.length){const[t,i]=e;this.padding={top:t,right:i,bottom:t,left:i}}else if(4===e.length){const[t,i,o,a]=e;this.padding={top:t,right:i,bottom:o,left:a}}},getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(t){this.$emit("switchChange",t)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){let e={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(t){case"navigateTo":default:g(e);break;case"redirectTo":v(e);break;case"reLaunch":f(e);break;case"switchTab":m(e)}}}},[["render",function(t,e,i,o,a,s){const g=p,m=w,f=C(l("uv-icon"),$),v=x,k=C(l("uv-badge"),T),B=C(l("uv-switch"),D);return n(),r(g,{class:h([{"uv-list-item--disabled":i.disabled},"uv-list-item"]),style:c([t.$uv.addStyle(i.customStyle),{"background-color":i.customStyle.backgroundColor?i.customStyle.backgroundColor:"#fff"}]),"hover-class":!i.clickable&&!i.link||i.disabled||i.showSwitch?"":"uv-list-item--hover",onClick:s.onClick},{default:d((()=>[a.isFirstChild?y("",!0):(n(),r(g,{key:0,class:h(["border--left",{"uv-list--border":i.border}])},null,8,["class"])),u(g,{class:"uv-list-item__wrapper"},{default:d((()=>[b(t.$slots,"default",{},(()=>[u(g,{class:h(["uv-list-item__container",{"container--right":i.showArrow||i.link,"flex--direction":"column"===s.directionData}]),style:c({paddingTop:a.padding.top,paddingLeft:a.padding.left,paddingRight:a.padding.right,paddingBottom:a.padding.bottom})},{default:d((()=>[b(t.$slots,"header",{},(()=>[u(g,{class:"uv-list-item__header"},{default:d((()=>[i.thumb?(n(),r(g,{key:0,class:"uv-list-item__icon"},{default:d((()=>[u(m,{src:i.thumb,class:h(["uv-list-item__icon-img",["uv-list--"+i.thumbSize]])},null,8,["src","class"])])),_:1})):i.showExtraIcon?(n(),r(g,{key:1,class:"uv-list-item__icon"},{default:d((()=>[u(f,{name:i.extraIcon.icon,customPrefix:i.extraIcon.customPrefix,color:i.extraIcon.color,size:i.extraIcon.size},null,8,["name","customPrefix","color","size"])])),_:1})):y("",!0)])),_:1})]),!0),b(t.$slots,"body",{},(()=>[u(g,{class:h(["uv-list-item__content",{"uv-list-item__content--center":i.thumb||i.showExtraIcon||i.showBadge||i.showSwitch}])},{default:d((()=>[i.title?(n(),r(v,{key:0,class:h(["uv-list-item__content-title",[i.ellipsis&&`uv-line-${i.ellipsis}`]])},{default:d((()=>[_(S(i.title),1)])),_:1},8,["class"])):y("",!0),i.note?(n(),r(v,{key:1,class:"uv-list-item__content-note"},{default:d((()=>[_(S(i.note),1)])),_:1})):y("",!0)])),_:1},8,["class"])]),!0),b(t.$slots,"footer",{},(()=>[i.rightText||i.showBadge||i.showSwitch?(n(),r(g,{key:0,class:h(["uv-list-item__extra",{"flex--justify":"column"===s.directionData}])},{default:d((()=>[i.rightText?(n(),r(v,{key:0,class:"uv-list-item__extra-text"},{default:d((()=>[_(S(i.rightText),1)])),_:1})):y("",!0),i.showBadge?(n(),r(k,{key:1,show:!!(i.badge.show||i.badge.isDot||i.badge.value),isDot:i.badge.isDot,value:i.badge.value,max:i.badge.max,type:i.badge.type,showZero:i.badge.showZero,bgColor:i.badge.bgColor,color:i.badge.color,shape:i.badge.shape,numberType:i.badge.numberType,inverted:i.badge.inverted,customStyle:"margin-left: 4px;"},null,8,["show","isDot","value","max","type","showZero","bgColor","color","shape","numberType","inverted"])):y("",!0),i.showSwitch?(n(),r(B,{key:2,value:i.switchChecked,disabled:i.disabled,onChange:s.onSwitchChange},null,8,["value","disabled","onChange"])):y("",!0)])),_:1},8,["class"])):y("",!0)]),!0)])),_:3},8,["class","style"])]),!0)])),_:3}),i.showArrow||i.link?(n(),r(f,{key:1,size:"34rpx",class:"uv-icon-wrapper",color:"#bbb",name:"arrow-right"})):y("",!0)])),_:3},8,["class","style","hover-class","onClick"])}],["__scopeId","data-v-6f31c44f"]]);const I=z({name:"uv-list",mixins:[a,s],"mp-weixin":{options:{multipleSlots:!1}},props:{border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dadbde"},direction:{type:String,default:"row"},padding:{type:[String,Number],default:"20rpx 30rpx"}},created(){this.firstChildAppend=!1},computed:{parentData(){return[this.direction,this.padding]}},methods:{loadMore(t){this.$emit("scrolltolower")},scroll(t){this.$emit("scroll",t)}}},[["render",function(t,e,i,o,a,s){const l=p;return n(),r(l,{class:"uv-list",style:c([t.$uv.addStyle(t.customStyle)])},{default:d((()=>[i.border?(n(),r(l,{key:0,class:"uv-list--border-top",style:c([{"background-color":i.borderColor}])},null,8,["style"])):y("",!0),b(t.$slots,"default",{},void 0,!0),i.border?(n(),r(l,{key:1,class:"uv-list--border-bottom",style:c([{"background-color":i.borderColor}])},null,8,["style"])):y("",!0)])),_:3},8,["style"])}],["__scopeId","data-v-08ecc9d2"]]);const N=z({name:"uv-loadmore",mixins:[a,s,{props:{status:{type:String,default:"loadmore"},bgColor:{type:String,default:"transparent"},icon:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:14},iconSize:{type:[String,Number],default:16},color:{type:String,default:"#606266"},loadingIcon:{type:String,default:"spinner"},loadmoreText:{type:String,default:"加载更多"},loadingText:{type:String,default:"正在加载..."},nomoreText:{type:String,default:"没有更多了"},isDot:{type:Boolean,default:!1},iconColor:{type:String,default:"#b7b7b7"},marginTop:{type:[String,Number],default:10},marginBottom:{type:[String,Number],default:10},height:{type:[String,Number],default:"auto"},line:{type:Boolean,default:!1},lineColor:{type:String,default:"#E6E8EB"},dashed:{type:Boolean,default:!1},...null==(o=null==(i=uni.$uv)?void 0:i.props)?void 0:o.loadmore}}],data:()=>({dotText:"●"}),computed:{loadTextStyle(){return{color:this.color,fontSize:this.$uv.addUnit(this.fontSize),lineHeight:this.$uv.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText(){let t="";return t="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,t}},methods:{loadMore(){"loadmore"==this.status&&this.$emit("loadmore")}}},[["render",function(t,e,i,o,a,s){const g=C(l("uv-line"),V),m=C(l("uv-loading-icon"),B),f=p,v=x;return n(),r(f,{class:"uv-loadmore",style:c([{backgroundColor:t.bgColor,marginBottom:t.$uv.addUnit(t.marginBottom),marginTop:t.$uv.addUnit(t.marginTop),height:t.$uv.addUnit(t.height)},t.$uv.addStyle(t.customStyle)])},{default:d((()=>[t.line?(n(),r(g,{key:0,length:"140rpx",color:t.lineColor,hairline:!1,dashed:t.dashed},null,8,["color","dashed"])):y("",!0),u(f,{class:h(["loadmore"==t.status||"nomore"==t.status?"uv-more":"","uv-loadmore__content"])},{default:d((()=>["loading"===t.status&&t.icon?(n(),r(f,{key:0,class:"uv-loadmore__content__icon-wrap"},{default:d((()=>[u(m,{color:t.iconColor,size:t.iconSize,mode:t.loadingIcon},null,8,["color","size","mode"])])),_:1})):y("",!0),u(v,{class:h(["uv-line-1",["nomore"==t.status&&1==t.isDot?"uv-loadmore__content__dot-text":"uv-loadmore__content__text"]]),style:c([s.loadTextStyle]),onClick:s.loadMore},{default:d((()=>[_(S(s.showText),1)])),_:1},8,["style","class","onClick"])])),_:1},8,["class"]),t.line?(n(),r(g,{key:1,length:"140rpx",color:t.lineColor,hairline:!1,dashed:t.dashed},null,8,["color","dashed"])):y("",!0)])),_:1},8,["style"])}],["__scopeId","data-v-53282763"]]);const U=z({name:"xc-uv-load-more",props:{pageinfo:{type:Object,default:[]}},watch:{pageinfo:{handler(t,e){this.xinit()},deep:!0,immediate:!0}},data:()=>({}),mounted(){let t=this;t.$nextTick((function(){t.xinit()}))},methods:{xinit:function(){}}},[["render",function(t,e,i,o,a,s){const d=C(l("uv-load-more"),N),u=C(l("uv-empty"),P);return n(),k("section",null,[i.pageinfo.list.length>0?(n(),r(d,{key:0,status:i.pageinfo.status},null,8,["status"])):y("",!0),0==i.pageinfo.list.length?(n(),r(u,{key:1,mode:"list",marginTop:"100",iconSize:"100"})):y("",!0)])}]]);export{A as _,I as a,U as b};