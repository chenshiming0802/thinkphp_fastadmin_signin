var t,e,i,o,a,s;import{m as l,a as n,q as r,o as d,c as u,w as c,h,n as p,d as g,i as m,K as f,L as v,V as y,W as b,t as S,e as _,u as x,v as w,j as $,C as k,b as C}from"./index-BjfunRpr.js";import{r as T,_ as z}from"./uv-icon.B7eKapMU.js";import{_ as B}from"./uv-badge.BU-UsVd-.js";import{_ as V}from"./uv-loading-icon.CvAzROqE.js";import{_ as P}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as D}from"./uv-line.C_KnvacM.js";const I=P({name:"uv-switch",mixins:[l,n,{props:{value:{type:[Boolean,String,Number],default:!1},modelValue:{type:[Boolean,String,Number],default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[String,Number],default:25},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#fff"},activeValue:{type:[String,Number,Boolean],default:!0},inactiveValue:{type:[String,Number,Boolean],default:!1},asyncChange:{type:Boolean,default:!1},space:{type:[String,Number],default:0},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.switch}}],data:()=>({bgColor:"#ffffff",innerValue:!1}),watch:{value(t){if(t!==this.inactiveValue&&t!==this.activeValue)return this.$uv.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");this.innerValue=t},modelValue(t){if(t!==this.inactiveValue&&t!==this.activeValue)return this.$uv.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");this.innerValue=t}},created(){this.innerValue=this.value||this.modelValue},computed:{isActive(){return this.innerValue===this.activeValue},switchStyle(){let t={};return t.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)+2),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)+2),this.customInactiveColor&&(t.borderColor="rgba(0, 0, 0, 0)"),t.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,t},nodeStyle(){let t={};t.width=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space);const e=this.isActive?this.$uv.addUnit(this.space):this.$uv.addUnit(this.$uv.getPx(this.size));return t.transform=`translateX(-${e})`,t},bgStyle(){let t={};return t.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)-this.$uv.getPx(this.size)/2),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)),t.backgroundColor=this.inactiveColor,t.transform=`scale(${this.isActive?0:1})`,t},customInactiveColor(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},methods:{clickHandler(){if(!this.disabled&&!this.loading){const t=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||(this.$emit("input",t),this.$emit("update:modelValue",t)),this.$nextTick((()=>{this.$emit("change",t)}))}}}},[["render",function(t,e,i,o,a,s){const l=m,n=T(r("uv-loading-icon"),V);return d(),u(l,{class:g(["uv-switch",[t.disabled&&"uv-switch--disabled"]]),style:p([s.switchStyle,t.$uv.addStyle(t.customStyle)]),onClick:s.clickHandler},{default:c((()=>[h(l,{class:"uv-switch__bg",style:p([s.bgStyle])},null,8,["style"]),h(l,{class:g(["uv-switch__node",[a.innerValue&&"uv-switch__node--on"]]),style:p([s.nodeStyle]),ref:"uv-switch__node"},{default:c((()=>[h(n,{show:t.loading,mode:"circle",timingFunction:"linear",color:a.innerValue?t.activeColor:"#AAABAD",size:.6*t.size},null,8,["show","color","size"])])),_:1},8,["class","style"])])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-4477799c"]]);const A=P({name:"uv-list-item",mixins:[l,n],emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},showBadge:{type:[Boolean,String],default:!1},badge:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({name:"",color:"#000000",size:20,customPrefix:""})},border:{type:Boolean,default:!1},customStyle:{type:Object,default:()=>({padding:"",backgroundColor:"#FFFFFF"})},keepScrollPosition:{type:Boolean,default:!1}},computed:{directionData(){return this.direction?this.direction:this.parentData.direction?this.parentData.direction:"row"}},watch:{"customStyle.padding":{handler(t){t&&this.setPadding(t)},immediate:!0}},data:()=>({isFirstChild:!1,padding:{top:"",right:"",bottom:"",left:""},parentData:{direction:"row",padding:0}}),created(){this.updateParentData()},mounted(){this.init(),this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{init(){this.parent||this.$uv.error("uv-list-item必须搭配uv-list组件使用"),this.$nextTick((()=>{this.padding.top||this.padding.right||this.padding.bottom||this.padding.left||this.setPadding(this.parentData.padding)}))},updateParentData(){this.getParentData("uv-list")},setPadding(t){"number"==typeof t&&(t+="");let e=t.split(" ");if(1===e.length){const t=e[0];this.padding={top:t,right:t,bottom:t,left:t}}else if(2===e.length){const[t,i]=e;this.padding={top:t,right:i,bottom:t,left:i}}else if(4===e.length){const[t,i,o,a]=e;this.padding={top:t,right:i,bottom:o,left:a}}},getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(t){this.$emit("switchChange",t)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){let e={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(t){case"navigateTo":default:f(e);break;case"redirectTo":b(e);break;case"reLaunch":y(e);break;case"switchTab":v(e)}}}},[["render",function(t,e,i,o,a,s){const l=m,n=$,f=T(r("uv-icon"),z),v=k,y=T(r("uv-badge"),B),b=T(r("uv-switch"),I);return d(),u(l,{class:g([{"uv-list-item--disabled":i.disabled},"uv-list-item"]),style:p([t.$uv.addStyle(i.customStyle),{"background-color":i.customStyle.backgroundColor?i.customStyle.backgroundColor:"#fff"}]),"hover-class":!i.clickable&&!i.link||i.disabled||i.showSwitch?"":"uv-list-item--hover",onClick:s.onClick},{default:c((()=>[a.isFirstChild?S("",!0):(d(),u(l,{key:0,class:g(["border--left",{"uv-list--border":i.border}])},null,8,["class"])),h(l,{class:"uv-list-item__wrapper"},{default:c((()=>[_(t.$slots,"default",{},(()=>[h(l,{class:g(["uv-list-item__container",{"container--right":i.showArrow||i.link,"flex--direction":"column"===s.directionData}]),style:p({paddingTop:a.padding.top,paddingLeft:a.padding.left,paddingRight:a.padding.right,paddingBottom:a.padding.bottom})},{default:c((()=>[_(t.$slots,"header",{},(()=>[h(l,{class:"uv-list-item__header"},{default:c((()=>[i.thumb?(d(),u(l,{key:0,class:"uv-list-item__icon"},{default:c((()=>[h(n,{src:i.thumb,class:g(["uv-list-item__icon-img",["uv-list--"+i.thumbSize]])},null,8,["src","class"])])),_:1})):i.showExtraIcon?(d(),u(l,{key:1,class:"uv-list-item__icon"},{default:c((()=>[h(f,{name:i.extraIcon.icon,customPrefix:i.extraIcon.customPrefix,color:i.extraIcon.color,size:i.extraIcon.size},null,8,["name","customPrefix","color","size"])])),_:1})):S("",!0)])),_:1})]),!0),_(t.$slots,"body",{},(()=>[h(l,{class:g(["uv-list-item__content",{"uv-list-item__content--center":i.thumb||i.showExtraIcon||i.showBadge||i.showSwitch}])},{default:c((()=>[i.title?(d(),u(v,{key:0,class:g(["uv-list-item__content-title",[i.ellipsis&&`uv-line-${i.ellipsis}`]])},{default:c((()=>[x(w(i.title),1)])),_:1},8,["class"])):S("",!0),i.note?(d(),u(v,{key:1,class:"uv-list-item__content-note"},{default:c((()=>[x(w(i.note),1)])),_:1})):S("",!0)])),_:1},8,["class"])]),!0),_(t.$slots,"footer",{},(()=>[i.rightText||i.showBadge||i.showSwitch?(d(),u(l,{key:0,class:g(["uv-list-item__extra",{"flex--justify":"column"===s.directionData}])},{default:c((()=>[i.rightText?(d(),u(v,{key:0,class:"uv-list-item__extra-text"},{default:c((()=>[x(w(i.rightText),1)])),_:1})):S("",!0),i.showBadge?(d(),u(y,{key:1,show:!!(i.badge.show||i.badge.isDot||i.badge.value),isDot:i.badge.isDot,value:i.badge.value,max:i.badge.max,type:i.badge.type,showZero:i.badge.showZero,bgColor:i.badge.bgColor,color:i.badge.color,shape:i.badge.shape,numberType:i.badge.numberType,inverted:i.badge.inverted,customStyle:"margin-left: 4px;"},null,8,["show","isDot","value","max","type","showZero","bgColor","color","shape","numberType","inverted"])):S("",!0),i.showSwitch?(d(),u(b,{key:2,value:i.switchChecked,disabled:i.disabled,onChange:s.onSwitchChange},null,8,["value","disabled","onChange"])):S("",!0)])),_:1},8,["class"])):S("",!0)]),!0)])),_:3},8,["class","style"])]),!0)])),_:3}),i.showArrow||i.link?(d(),u(f,{key:1,size:"34rpx",class:"uv-icon-wrapper",color:"#bbb",name:"arrow-right"})):S("",!0)])),_:3},8,["class","style","hover-class","onClick"])}],["__scopeId","data-v-6f31c44f"]]);const N=P({name:"uv-list",mixins:[l,n],"mp-weixin":{options:{multipleSlots:!1}},props:{border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dadbde"},direction:{type:String,default:"row"},padding:{type:[String,Number],default:"20rpx 30rpx"}},created(){this.firstChildAppend=!1},computed:{parentData(){return[this.direction,this.padding]}},methods:{loadMore(t){this.$emit("scrolltolower")},scroll(t){this.$emit("scroll",t)}}},[["render",function(t,e,i,o,a,s){const l=m;return d(),u(l,{class:"uv-list",style:p([t.$uv.addStyle(t.customStyle)])},{default:c((()=>[i.border?(d(),u(l,{key:0,class:"uv-list--border-top",style:p([{"background-color":i.borderColor}])},null,8,["style"])):S("",!0),_(t.$slots,"default",{},void 0,!0),i.border?(d(),u(l,{key:1,class:"uv-list--border-bottom",style:p([{"background-color":i.borderColor}])},null,8,["style"])):S("",!0)])),_:3},8,["style"])}],["__scopeId","data-v-08ecc9d2"]]);const U=P({name:"uv-loadmore",mixins:[l,n,{props:{status:{type:String,default:"loadmore"},bgColor:{type:String,default:"transparent"},icon:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:14},iconSize:{type:[String,Number],default:16},color:{type:String,default:"#606266"},loadingIcon:{type:String,default:"spinner"},loadmoreText:{type:String,default:"加载更多"},loadingText:{type:String,default:"正在加载..."},nomoreText:{type:String,default:"没有更多了"},isDot:{type:Boolean,default:!1},iconColor:{type:String,default:"#b7b7b7"},marginTop:{type:[String,Number],default:10},marginBottom:{type:[String,Number],default:10},height:{type:[String,Number],default:"auto"},line:{type:Boolean,default:!1},lineColor:{type:String,default:"#E6E8EB"},dashed:{type:Boolean,default:!1},...null==(o=null==(i=uni.$uv)?void 0:i.props)?void 0:o.loadmore}}],data:()=>({dotText:"●"}),computed:{loadTextStyle(){return{color:this.color,fontSize:this.$uv.addUnit(this.fontSize),lineHeight:this.$uv.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText(){let t="";return t="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,t}},methods:{loadMore(){"loadmore"==this.status&&this.$emit("loadmore")}}},[["render",function(t,e,i,o,a,s){const l=T(r("uv-line"),D),n=T(r("uv-loading-icon"),V),f=m,v=k;return d(),u(f,{class:"uv-loadmore",style:p([{backgroundColor:t.bgColor,marginBottom:t.$uv.addUnit(t.marginBottom),marginTop:t.$uv.addUnit(t.marginTop),height:t.$uv.addUnit(t.height)},t.$uv.addStyle(t.customStyle)])},{default:c((()=>[t.line?(d(),u(l,{key:0,length:"140rpx",color:t.lineColor,hairline:!1,dashed:t.dashed},null,8,["color","dashed"])):S("",!0),h(f,{class:g(["loadmore"==t.status||"nomore"==t.status?"uv-more":"","uv-loadmore__content"])},{default:c((()=>["loading"===t.status&&t.icon?(d(),u(f,{key:0,class:"uv-loadmore__content__icon-wrap"},{default:c((()=>[h(n,{color:t.iconColor,size:t.iconSize,mode:t.loadingIcon},null,8,["color","size","mode"])])),_:1})):S("",!0),h(v,{class:g(["uv-line-1",["nomore"==t.status&&1==t.isDot?"uv-loadmore__content__dot-text":"uv-loadmore__content__text"]]),style:p([s.loadTextStyle]),onClick:s.loadMore},{default:c((()=>[x(w(s.showText),1)])),_:1},8,["style","class","onClick"])])),_:1},8,["class"]),t.line?(d(),u(l,{key:1,length:"140rpx",color:t.lineColor,hairline:!1,dashed:t.dashed},null,8,["color","dashed"])):S("",!0)])),_:1},8,["style"])}],["__scopeId","data-v-53282763"]]);const F=P({name:"uv-empty",mixins:[l,n,{props:{icon:{type:String,default:""},text:{type:String,default:""},textColor:{type:String,default:"#c0c4cc"},textSize:{type:[String,Number],default:14},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:90},mode:{type:String,default:"data"},width:{type:[String,Number],default:160},height:{type:[String,Number],default:160},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},...null==(s=null==(a=uni.$uv)?void 0:a.props)?void 0:s.empty}}],data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址","wifi-off":"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}),computed:{emptyStyle(){const t={};return t.marginTop=this.$uv.addUnit(this.marginTop),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))},textStyle(){const t={};return t.color=this.textColor,t.fontSize=this.$uv.addUnit(this.textSize),t},isImg(){const t=this.icon.indexOf("data:")>-1&&this.icon.indexOf("base64")>-1;return-1!==this.icon.indexOf("/")||t}}},[["render",function(t,e,i,o,a,s){const l=T(r("uv-icon"),z),n=$,g=k,f=m;return t.show?(d(),u(f,{key:0,class:"uv-empty",style:p([s.emptyStyle])},{default:c((()=>[s.isImg?(d(),u(n,{key:1,style:p({width:t.$uv.addUnit(t.width),height:t.$uv.addUnit(t.height)}),src:t.icon,mode:"widthFix"},null,8,["style","src"])):(d(),u(l,{key:0,name:"message"===t.mode?"chat":`empty-${t.mode}`,size:t.iconSize,color:t.iconColor,"margin-top":"14"},null,8,["name","size","color"])),h(g,{class:"uv-empty__text",style:p([s.textStyle])},{default:c((()=>[x(w(t.text?t.text:a.icons[t.mode]),1)])),_:1},8,["style"]),h(f,{class:"uv-empty__wrap"},{default:c((()=>[_(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])):S("",!0)}],["__scopeId","data-v-d585060f"]]);const j=P({name:"xc-uv-load-more",props:{pageinfo:{type:Object,default:[]}},watch:{pageinfo:{handler(t,e){this.xinit()},deep:!0,immediate:!0}},data:()=>({}),mounted(){let t=this;t.$nextTick((function(){t.xinit()}))},methods:{xinit:function(){}}},[["render",function(t,e,i,o,a,s){const l=T(r("uv-load-more"),U),n=T(r("uv-empty"),F);return d(),C("section",null,[i.pageinfo.list.length>0?(d(),u(l,{key:0,status:i.pageinfo.status},null,8,["status"])):S("",!0),0==i.pageinfo.list.length?(d(),u(n,{key:1,mode:"list",marginTop:"100",iconSize:"100"})):S("",!0)])}]]);export{A as _,N as a,j as b};
