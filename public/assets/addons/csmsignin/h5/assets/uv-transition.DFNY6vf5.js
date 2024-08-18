import{ai as t,q as i,u as s,o as a,d as e,w as n,v as o,A as r,n as h,f as l,g as m}from"./index-DF3Oe_BT.js";import{_ as c}from"./_plugin-vue_export-helper.BCo6x5W8.js";class u{constructor(i,s){this.options=i,this.animation=t({...i}),this.currentStepAnimates={},this.next=0,this.$=s}_nvuePushAnimates(t,i){let s=this.currentStepAnimates[this.next],a={};if(a=s||{styles:{},config:{}},d.includes(t)){a.styles.transform||(a.styles.transform="");let s="";"rotate"===t&&(s="deg"),a.styles.transform+=`${t}(${i+s}) `}else a.styles[t]=`${i}`;this.currentStepAnimates[this.next]=a}_animateRun(t={},i={}){let s=this.$.$refs.ani.ref;if(s)return new Promise(((a,e)=>{nvueAnimation.transition(s,{styles:t,...i},(t=>{a()}))}))}_nvueNextAnimate(t,i=0,s){let a=t[i];if(a){let{styles:e,config:n}=a;this._animateRun(e,n).then((()=>{i+=1,this._nvueNextAnimate(t,i,s)}))}else this.currentStepAnimates={},"function"==typeof s&&s(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const d=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function f(t,i){if(i)return clearTimeout(i.timer),new u(t,i)}d.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{u.prototype[t]=function(...i){return this.animation[t](...i),this}}));const p=c({name:"uv-transition",mixins:[i,s],emits:["click","change"],props:{show:{type:Boolean,default:!1},mode:{type:[Array,String,null],default:()=>"fade"},duration:{type:[String,Number],default:300},timingFunction:{type:String,default:"ease-out"},customClass:{type:String,default:""},cellChild:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{transformStyles(){const t={transform:this.transform,opacity:this.opacity,...this.$uv.addStyle(this.customStyle),"transition-duration":this.duration/1e3+"s"};return this.$uv.addStyle(t,"string")}},created(){this.config={duration:this.duration,timingFunction:this.timingFunction,transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=f(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,i={}){if(this.animation){for(let i in t)try{"object"==typeof t[i]?this.animation[i](...t[i]):this.animation[i](t[i])}catch(s){console.error(`方法 ${i} 不存在`)}return this.animation.step(i),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:i}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=i,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=f(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.opacity=1,this.$emit("change",{detail:this.isShow}),this.transform=""}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:i}=this.styleInit(!1);this.opacity=t||1,this.transform=i,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let i={transform:""},s=(t,s)=>{"fade"===s?i.opacity=this.animationType(t)[s]:i.transform+=this.animationType(t)[s]+" "};return"string"==typeof this.mode?s(t,this.mode):this.mode.forEach((i=>{s(t,i)})),i},tranfromInit(t){let i=(t,i)=>{let s=null;"fade"===i?s=t?0:1:(s=t?"-100%":"0","zoom-in"===i&&(s=t?.8:1),"zoom-out"===i&&(s=t?1.2:1),"slide-right"===i&&(s=t?"100%":"0"),"slide-bottom"===i&&(s=t?"100%":"0")),this.animation[this.animationMode()[i]](s)};return"string"==typeof this.mode?i(t,this.mode):this.mode.forEach((s=>{i(t,s)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,i,s,c,u,d){const f=m;return u.isShow?(a(),e(f,{key:0,ref:"ani",animation:u.animationData,class:r(s.customClass),style:h(d.transformStyles),onClick:d.onClick},{default:n((()=>[o(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])):l("",!0)}]]);export{p as _};
