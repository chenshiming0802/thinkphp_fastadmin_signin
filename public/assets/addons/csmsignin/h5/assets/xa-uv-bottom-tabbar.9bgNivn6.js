var t,e,a,i;import{u as o,v as n,m as l,o as s,d as r,w as c,e as d,b as u,F as h,y as p,n as v,p as b,t as m,g as f,D as g,B as x,C as y,f as _,c as S,x as C,a7 as $,r as D}from"./index-ClTyY6uP.js";import{r as k,_ as z,x as w}from"./uni-app.es.Cs0ob3XO.js";import{_ as P}from"./uv-badge.DwmQQ7Aa.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as I}from"./uv-safe-bottom.DAKuAC1_.js";const A=B({name:"uv-tabbar-item",mixins:[o,n,{props:{name:{type:[String,Number,null],default:null},icon:{icon:String,default:""},iconSize:{type:[String,Number],default:""},badge:{type:[String,Number,null],default:null},dot:{type:Boolean,default:!1},text:{type:String,default:""},badgeStyle:{type:[Object,String],default:"top: 6px;right:2px;"},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.tabbarItem}}],emits:["click","change"],data:()=>({isActive:!1,parentData:{value:null,activeColor:"",inactiveColor:"",iconSize:20}}),created(){this.init()},methods:{init(){this.updateParentData(),this.parent||this.$uv.error("uv-tabbar-item必须搭配uv-tabbar组件使用");const t=this.parent.children.indexOf(this);this.isActive=(this.name||t)===this.parentData.value},updateParentData(){this.getParentData("uv-tabbar")},updateFromParent(){this.init()},clickHandler(){this.$nextTick((()=>{const t=this.parent.children.indexOf(this),e=this.name||t;e!==this.parent.value&&this.parent.$emit("change",e),this.$emit("click",e)}))}}},[["render",function(t,e,a,i,o,n){const x=k(l("uv-icon"),z),y=k(l("uv-badge"),P),_=f,S=g;return s(),r(_,{class:"uv-tabbar-item",style:v([t.$uv.addStyle(t.customStyle)]),onClick:n.clickHandler},{default:c((()=>[d(_,{class:"uv-tabbar-item__icon"},{default:c((()=>[t.icon?(s(),r(x,{key:0,name:t.icon,color:o.isActive?o.parentData.activeColor:o.parentData.inactiveColor,size:t.iconSize?t.iconSize:o.parentData.iconSize},null,8,["name","color","size"])):(s(),u(h,{key:1},[o.isActive?p(t.$slots,"active-icon",{key:0},void 0,!0):p(t.$slots,"inactive-icon",{key:1},void 0,!0)],64)),d(y,{absolute:"",offset:[0,t.dot?"34rpx":t.badge>9?"14rpx":"20rpx"],customStyle:t.badgeStyle,isDot:t.dot,value:t.badge||(t.dot?1:null),show:t.dot||t.badge>0},null,8,["offset","customStyle","isDot","value","show"])])),_:3}),p(t.$slots,"text",{},(()=>[d(S,{class:"uv-tabbar-item__text",style:v({color:o.isActive?o.parentData.activeColor:o.parentData.inactiveColor})},{default:c((()=>[b(m(t.text),1)])),_:1},8,["style"])]),!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-b90ffc42"]]);const H=B({name:"uv-tabbar",mixins:[o,n,{props:{value:{type:[String,Number,null],default:null},safeAreaInsetBottom:{type:Boolean,default:!0},border:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:9},activeColor:{type:String,default:"#1989fa"},inactiveColor:{type:String,default:"#7d7e80"},fixed:{type:Boolean,default:!0},placeholder:{type:Boolean,default:!0},iconSize:{type:[String,Number],default:20},...null==(i=null==(a=uni.$uv)?void 0:a.props)?void 0:i.tabbar}}],data:()=>({placeholderHeight:0}),computed:{tabbarStyle(){const t={zIndex:this.zIndex};return this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))},updateChild(){return[this.value,this.activeColor,this.inactiveColor]},updatePlaceholder(){return[this.fixed,this.placeholder]}},watch:{updateChild(){this.updateChildren()},updatePlaceholder(){this.setPlaceholderHeight()}},created(){this.children=[]},mounted(){this.setPlaceholderHeight()},methods:{updateChildren(){this.children.length&&this.children.map((t=>t.updateFromParent()))},async setPlaceholderHeight(){this.fixed&&this.placeholder&&(await this.$uv.sleep(20),this.$uvGetRect(".uv-tabbar__content").then((({height:t=50})=>{this.placeholderHeight=t})))}}},[["render",function(t,e,a,i,o,n){const u=f,h=k(l("uv-safe-bottom"),I);return s(),r(u,{class:"uv-tabbar"},{default:c((()=>[d(u,{class:x(["uv-tabbar__content",[t.border&&"uv-border-top",t.fixed&&"uv-tabbar--fixed"]]),ref:"uv-tabbar__content",onTouchmove:y(t.noop,["stop","prevent"]),style:v([n.tabbarStyle])},{default:c((()=>[d(u,{class:"uv-tabbar__content__item-wrapper"},{default:c((()=>[p(t.$slots,"default",{},void 0,!0)])),_:3}),t.safeAreaInsetBottom?(s(),r(h,{key:0})):_("",!0)])),_:3},8,["onTouchmove","class","style"]),t.placeholder?(s(),r(u,{key:0,class:"uv-tabbar__placeholder",style:v({height:o.placeholderHeight+"px"})},null,8,["style"])):_("",!0)])),_:3})}],["__scopeId","data-v-4db96c7f"]]);const j=B({data:()=>({config:S,xsStringUtils:C,xsDateUtils:w,sp:{id:null},sr:{row:[]},control:{index:0,datas:[{name:"首页",icon:"home",path:"/pages/xcdemo/index"},{name:"我的",icon:"account",path:"/pages/xclogin/me"}]}}),created(){this.xinit(),this.public_show()},methods:{xinit(){},public_show(){let t=this;const e="/"+$().pop().route;for(var a=0;a<t.control.datas.length;a++){t.control.datas[a].path==e&&(t.control.index=a)}},public_reset(){this.public_show()},control_change(t){this.control.index=t,uni.$uv.route({type:"redirect",url:this.control.datas[t].path})}}},[["render",function(t,e,a,i,o,n){const d=k(l("uv-tabbar-item"),A),p=k(l("uv-tabbar"),H);return s(),r(p,{value:o.control.index,fixed:!0,safeAreaInsetBottom:"",border:"",onChange:n.control_change},{default:c((()=>[(s(!0),u(h,null,D(o.control.datas,(t=>(s(),r(d,{text:t.name,icon:t.icon},null,8,["text","icon"])))),256))])),_:1},8,["value","onChange"])}]]);export{j as _};
