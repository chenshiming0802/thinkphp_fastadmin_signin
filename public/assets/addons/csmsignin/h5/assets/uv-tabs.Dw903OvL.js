var e,t;import{m as s,a as i,q as r,o as a,c as l,w as n,h as o,e as d,n as u,b as h,F as c,r as p,d as _,u as b,v,C as g,i as m,D as f}from"./index-DpYft6Hu.js";import{u as y,_ as w}from"./uv-badge.Bv0z97o-.js";import{r as $}from"./uv-icon.B5hOwPsQ.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";const x=S({name:"uv-tabs",emits:["click","change"],mixins:[s,i,{props:{duration:{type:Number,default:300},list:{type:Array,default:()=>[]},lineColor:{type:String,default:"#3c9cff"},activeStyle:{type:[String,Object],default:()=>({color:"#303133"})},inactiveStyle:{type:[String,Object],default:()=>({color:"#606266"})},lineWidth:{type:[String,Number],default:20},lineHeight:{type:[String,Number],default:3},lineBgSize:{type:String,default:"cover"},itemStyle:{type:[String,Object],default:()=>({height:"44px"})},scrollable:{type:Boolean,default:!0},current:{type:[Number,String],default:0},keyName:{type:String,default:"name"},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.tabs}}],data:()=>({firstTime:!0,scrollLeft:0,scrollViewWidth:0,lineOffsetLeft:0,tabsRect:{left:0},innerCurrent:0,moving:!1}),watch:{current:{immediate:!0,handler(e,t){e!==this.innerCurrent&&(this.innerCurrent=e,this.$nextTick((()=>{this.resize()})))}},list(){this.$nextTick((()=>{this.resize()}))}},computed:{textStyle(){return e=>{const t={},s=e==this.innerCurrent?this.$uv.addStyle(this.activeStyle):this.$uv.addStyle(this.inactiveStyle);return this.list[e].disabled&&(t.color="#c8c9cc"),this.$uv.deepMerge(s,t)}},propsBadge:()=>y},async mounted(){this.init()},methods:{setLineLeft(){const e=this.list[this.innerCurrent];if(!e)return;let t=this.list.slice(0,this.innerCurrent).reduce(((e,t)=>e+t.rect.width),0),s=this.$uv.getPx(this.lineWidth);this.$uv.test.number(this.lineWidth)&&this.$uv.unit&&(s=this.$uv.getPx(`${this.lineWidth}${this.$uv.unit}`)),this.lineOffsetLeft=t+(e.rect.width-s)/2,this.firstTime&&setTimeout((()=>{this.firstTime=!1}),20)},animation(e,t=0){},clickHandler(e,t){this.$emit("click",{...e,index:t}),e.disabled||(this.innerCurrent!=t&&this.$emit("change",{...e,index:t}),this.innerCurrent=t,this.$nextTick((()=>{this.resize()})))},init(){this.$uv.sleep().then((()=>{this.resize()}))},setScrollLeft(){const e=this.list[this.innerCurrent],t=this.list.slice(0,this.innerCurrent).reduce(((e,t)=>e+t.rect.width),0),s=this.$uv.sys().windowWidth;let i=t-(this.tabsRect.width-e.rect.width)/2-(s-this.tabsRect.right)/2+this.tabsRect.left/2;i=Math.min(i,this.scrollViewWidth-this.tabsRect.width),this.scrollLeft=Math.max(0,i)},resize(){0!==this.list.length&&Promise.all([this.getTabsRect(),this.getAllItemRect()]).then((([e,t=[]])=>{this.tabsRect=e,this.scrollViewWidth=0,t.map(((e,t)=>{this.scrollViewWidth+=e.width,this.list[t].rect=e})),this.setLineLeft(),this.setScrollLeft()}))},getTabsRect(){return new Promise((e=>{this.queryRect("uv-tabs__wrapper__scroll-view").then((t=>e(t)))}))},getAllItemRect(){return new Promise((e=>{const t=this.list.map(((e,t)=>this.queryRect(`uv-tabs__wrapper__nav__item-${t}`,!0)));Promise.all(t).then((t=>e(t)))}))},queryRect(e,t){return new Promise((t=>{this.$uvGetRect(`.${e}`).then((e=>{t(e)}))}))}}},[["render",function(e,t,s,i,y,S){const x=g,C=$(r("uv-badge"),w),T=m,k=f;return a(),l(T,{class:"uv-tabs",style:u([e.$uv.addStyle(e.customStyle)])},{default:n((()=>[o(T,{class:"uv-tabs__wrapper"},{default:n((()=>[d(e.$slots,"left",{},void 0,!0),o(T,{class:"uv-tabs__wrapper__scroll-view-wrapper"},{default:n((()=>[o(k,{"scroll-x":e.scrollable,"scroll-left":y.scrollLeft,"scroll-with-animation":"",class:"uv-tabs__wrapper__scroll-view","show-scrollbar":!1,ref:"uv-tabs__wrapper__scroll-view"},{default:n((()=>[o(T,{class:"uv-tabs__wrapper__nav",ref:"uv-tabs__wrapper__nav",style:u({flex:e.scrollable?"":1})},{default:n((()=>[(a(!0),h(c,null,p(e.list,((t,s)=>(a(),l(T,{class:_(["uv-tabs__wrapper__nav__item",[`uv-tabs__wrapper__nav__item-${s}`,t.disabled&&"uv-tabs__wrapper__nav__item--disabled"]]),key:s,onClick:e=>S.clickHandler(t,s),ref_for:!0,ref:`uv-tabs__wrapper__nav__item-${s}`,style:u([{flex:e.scrollable?"":1},e.$uv.addStyle(e.itemStyle)])},{default:n((()=>[o(x,{class:_([[t.disabled&&"uv-tabs__wrapper__nav__item__text--disabled"],"uv-tabs__wrapper__nav__item__text"]),style:u([S.textStyle(s)])},{default:n((()=>[b(v(t[e.keyName]),1)])),_:2},1032,["class","style"]),o(C,{show:!(!t.badge||!(t.badge.show||t.badge.isDot||t.badge.value)),isDot:t.badge&&t.badge.isDot||S.propsBadge.isDot,value:t.badge&&t.badge.value||S.propsBadge.value,max:t.badge&&t.badge.max||S.propsBadge.max,type:t.badge&&t.badge.type||S.propsBadge.type,showZero:t.badge&&t.badge.showZero||S.propsBadge.showZero,bgColor:t.badge&&t.badge.bgColor||S.propsBadge.bgColor,color:t.badge&&t.badge.color||S.propsBadge.color,shape:t.badge&&t.badge.shape||S.propsBadge.shape,numberType:t.badge&&t.badge.numberType||S.propsBadge.numberType,inverted:t.badge&&t.badge.inverted||S.propsBadge.inverted,customStyle:"margin-left: 4px;"},null,8,["show","isDot","value","max","type","showZero","bgColor","color","shape","numberType","inverted"])])),_:2},1032,["onClick","style","class"])))),128)),o(T,{class:"uv-tabs__wrapper__nav__line",ref:"uv-tabs__wrapper__nav__line",style:u([{width:e.$uv.addUnit(e.lineWidth),transform:`translate(${y.lineOffsetLeft}px)`,transitionDuration:`${y.firstTime?0:e.duration}ms`,height:y.firstTime?0:e.$uv.addUnit(e.lineHeight),background:e.lineColor,backgroundSize:e.lineBgSize}])},null,8,["style"])])),_:1},8,["style"])])),_:1},8,["scroll-x","scroll-left"])])),_:1}),d(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["style"])}],["__scopeId","data-v-02da80e0"]]);export{x as _};
