var t,s;import{m as e,a as i,H as o,o as n,c as h,w as c,h as d,n as r,e as u,i as a}from"./index-BjfunRpr.js";import{_ as l}from"./_plugin-vue_export-helper.BCo6x5W8.js";const p=l({name:"uv-sticky",mixins:[e,i,{props:{offsetTop:{type:[String,Number],default:0},customNavHeight:{type:[String,Number],default:44},disabled:{type:Boolean,default:!1},bgColor:{type:String,default:"transparent"},zIndex:{type:[String,Number],default:""},index:{type:[String,Number],default:""},...null==(s=null==(t=uni.$uv)?void 0:t.props)?void 0:s.sticky}}],data:()=>({cssSticky:!1,stickyTop:0,elId:"",left:0,width:"auto",height:"auto",fixed:!1}),computed:{style(){const t={};return this.disabled?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=this.$uv.addUnit(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,this.$uv.deepMerge(this.$uv.addStyle(this.customStyle),t)},stickyContent(){const t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex(){return this.zIndex?this.zIndex:970}},created(){this.elId=this.$uv.guid()},mounted(){this.init()},methods:{init(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.disabled&&this.initObserveContent()},initObserveContent(){this.$uvGetRect("#"+this.elId).then((t=>{this.height=t.height,this.left=t.left,this.width=t.width,this.$nextTick((()=>{this.observeContent()}))}))},observeContent(){this.disconnectObserver("contentObserver");const t=o({thresholds:[.95,.98,1]});t.relativeToViewport({top:-this.stickyTop}),t.observe(`#${this.elId}`,(t=>{this.setFixed(t.boundingClientRect.top)})),this.contentObserver=t},setFixed(t){const s=t<=this.stickyTop;this.fixed=s},disconnectObserver(t){const s=this[t];s&&s.disconnect()},getStickyTop(){this.stickyTop=this.$uv.getPx(this.offsetTop)+this.$uv.getPx(this.customNavHeight)},async checkSupportCssSticky(){this.checkCssStickyForH5()&&(this.cssSticky=!0),"android"===this.$uv.os()&&Number(this.$uv.sys().system)>8&&(this.cssSticky=!0),"ios"===this.$uv.os()&&(this.cssSticky=!0)},checkComputedStyle(){},checkCssStickyForH5(){const t=["","-webkit-","-ms-","-moz-","-o-"],s=t.length,e=document.createElement("div");for(let i=0;i<s;i++)if(e.style.position=t[i]+"sticky",""!==e.style.position)return!0;return!1}},unmounted(){this.disconnectObserver("contentObserver")}},[["render",function(t,s,e,i,o,l){const p=a;return n(),h(p,{class:"uv-sticky",id:o.elId,style:r([l.style])},{default:c((()=>[d(p,{style:r([l.stickyContent]),class:"uv-sticky__content"},{default:c((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["id","style"])}],["__scopeId","data-v-df7be8db"]]);export{p as _};
