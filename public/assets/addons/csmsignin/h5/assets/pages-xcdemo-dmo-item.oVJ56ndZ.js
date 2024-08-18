var e,t;import{u as s,v as i,$ as o,I as r,m as a,o as h,d,w as n,e as l,B as u,n as c,f as g,y as m,i as p,g as w,c as v,x as y,q as b,s as f,j as x,p as S,t as _,b as $,r as L,F as k}from"./index-DauSF6J7.js";import{r as B,_ as C,x as E}from"./uni-app.es.DglSl7oz.js";import{_ as U}from"./uv-transition.DzrTv04y.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as z}from"./uv-line.DlAHhN7k.js";import{_ as F}from"./uv-parse.BeJ02sQo.js";const H=I({name:"uv-image",emits:["click","load","error"],mixins:[s,i,{props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"300"},height:{type:[String,Number],default:"225"},shape:{type:String,default:"square"},radius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},observeLazyLoad:{type:Boolean,default:!1},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"},cellChild:{type:Boolean,default:!1},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.image}}],data(){return{isError:!1,loading:!0,backgroundStyle:{},show:!1,observeShow:!this.observeLazyLoad,elIndex:"",imgWidth:this.width,imgHeight:this.height,thresholdValue:50}},watch:{src:{immediate:!0,handler(e){e?(this.isError=!1,this.loading=!0):this.isError=!0}},width(e){this.show=!1,this.$uv.sleep(2).then((e=>{this.show=!0})),this.imgWidth=e},height(e){this.show=!1,this.$uv.sleep(2).then((e=>{this.show=!0})),this.imgHeight=e}},computed:{wrapStyle(){let e={};return"heightFix"!==this.mode&&(e.width=this.$uv.addUnit(this.imgWidth)),"widthFix"!==this.mode&&(e.height=this.$uv.addUnit(this.imgHeight)),e.borderRadius="circle"==this.shape?"10000px":this.$uv.addUnit(this.radius),e.overflow=this.radius>0?"hidden":"visible",this.$uv.deepMerge(e,this.$uv.addStyle(this.customStyle))},imageStyle(){let e={};return e.borderRadius="circle"==this.shape?"10000px":this.$uv.addUnit(this.radius),e}},created(){this.elIndex=this.$uv.guid(),this.observer={},this.observerName="lazyLoadContentObserver"},mounted(){this.show=!0,this.$nextTick((()=>{this.observeLazyLoad&&this.observerFn()}))},methods:{onClick(){this.$emit("click")},onErrorHandler(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler(e){"widthFix"==this.mode&&(this.imgHeight="auto"),"heightFix"==this.mode&&(this.imgWidth="auto"),this.loading=!1,this.isError=!1,this.$emit("load",e),this.removeBgColor()},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}},observerFn(){this.$nextTick((()=>{o("onLazyLoadReachBottom",(()=>{this.observeShow||(this.observeShow=!0)}))})),setTimeout((()=>{this.disconnectObserver(this.observerName);const e=r(this);e.relativeToViewport({bottom:this.thresholdValue}).observe(`.uv-image--${this.elIndex}`,(e=>{e.intersectionRatio>0&&(this.observeShow=!0,this.disconnectObserver(this.observerName))})),this[this.observerName]=e}),50)},disconnectObserver(e){const t=this[e];t&&t.disconnect()}}},[["render",function(e,t,s,i,o,r){const v=p,y=B(a("uv-icon"),C),b=w,f=B(a("uv-transition"),U);return o.show?(h(),d(f,{key:0,show:o.show,mode:"fade",duration:e.fade?e.duration:0,"cell-child":e.cellChild,"custom-style":r.wrapStyle},{default:n((()=>[l(b,{class:u(["uv-image",[`uv-image--${o.elIndex}`]]),onClick:r.onClick,style:c([r.wrapStyle,o.backgroundStyle])},{default:n((()=>[!o.isError&&o.observeShow?(h(),d(v,{key:0,src:e.src,mode:e.mode,onError:r.onErrorHandler,onLoad:r.onLoadHandler,"show-menu-by-longpress":e.showMenuByLongpress,"lazy-load":e.lazyLoad,class:"uv-image__image",style:c([r.imageStyle]),webp:e.webp},null,8,["src","mode","onError","onLoad","show-menu-by-longpress","lazy-load","style","webp"])):g("",!0),e.showLoading&&o.loading?(h(),d(b,{key:1,class:"uv-image__loading",style:c({borderRadius:"circle"==e.shape?"50%":e.$uv.addUnit(e.radius),backgroundColor:e.bgColor,width:e.$uv.addUnit(e.width),height:e.$uv.addUnit(e.height)})},{default:n((()=>[m(e.$slots,"loading",{},(()=>[l(y,{name:e.loadingIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):g("",!0),e.showError&&o.isError&&!o.loading?(h(),d(b,{key:2,class:"uv-image__error",style:c({borderRadius:"circle"==e.shape?"50%":e.$uv.addUnit(e.radius),width:e.$uv.addUnit(e.width),height:e.$uv.addUnit(e.height)})},{default:n((()=>[m(e.$slots,"error",{},(()=>[l(y,{name:e.errorIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):g("",!0)])),_:3},8,["class","onClick","style"])])),_:3},8,["show","duration","cell-child","custom-style"])):g("",!0)}],["__scopeId","data-v-f788feaf"]]);const N=I({data:()=>({config:v,xsStringUtils:y,xsDateUtils:E,sp:{id:null},sr:{row:[]},control:{}}),onLoad(e){this.sp.id=e.id,this.xinit()},onShow(){let e=this;b.onShow((function(){e.public_show()}))},onPullDownRefresh(){let e=this;setTimeout((function(){e.public_show(),f()}),1e3)},methods:{xinit(){},public_show(){let e=this;x.getById("dmo",e.sp.id,(function(t){x.processRowImages(t.row,["bannerimage","images"]),e.sr.row=t.row}))},public_reset(){this.public_show()}}},[["render",function(e,t,s,i,o,r){const u=B(a("uv-image"),H),c=w,g=B(a("uv-line"),z),m=B(a("uv-parse"),F);return h(),d(c,{class:"xc-wrap-grey"},{default:n((()=>[l(u,{src:o.sr.row.bannerimage,width:"100%",observeLazyLoad:!0},null,8,["src"]),l(c,{class:"xc-block"},{default:n((()=>[l(c,{class:"xc-title"},{default:n((()=>[S(_(o.sr.row.name),1)])),_:1}),l(c,{class:"xc-titledesc"},{default:n((()=>[S(_("发布时间："+o.xsDateUtils.timestampToString(o.sr.row.updatetime)),1)])),_:1}),l(g,{hairline:!1,margin:"10px 0px"}),l(c,{class:"xc-content"},{default:n((()=>[l(m,{content:o.sr.row.content},null,8,["content"])])),_:1}),(h(!0),$(k,null,L(o.sr.row.images,(e=>(h(),d(u,{showLoading:!0,src:e,width:"100%",height:"180px"},null,8,["src"])))),256))])),_:1})])),_:1})}]]);export{N as default};