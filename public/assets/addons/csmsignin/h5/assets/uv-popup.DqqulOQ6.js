var e,t,n,r,i,o,s,a,l,u;import{r as d,_ as c}from"./uni-app.es.DglSl7oz.js";import{u as p,v as f,m as h,o as y,d as m,w as g,e as b,y as v,f as _,n as x,B as w,g as S,U as k,p as C,t as $,D as q,C as P,N as I}from"./index-DauSF6J7.js";import{_ as O}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as T}from"./uv-transition.DzrTv04y.js";import{_ as j}from"./uv-line.DlAHhN7k.js";import{_ as A}from"./uv-safe-bottom.DjGHdoer.js";const B=O({name:"uv-input",mixins:[p,f,{props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},disabledColor:{type:String,default:"#f5f7fa"},clearable:{type:Boolean,default:!1},password:{type:Boolean,default:!1},maxlength:{type:[String,Number],default:-1},placeholder:{type:String,default:null},placeholderClass:{type:String,default:"input-placeholder"},placeholderStyle:{type:[String,Object],default:"color: #c0c4cc"},confirmType:{type:String,default:"done"},confirmHold:{type:Boolean,default:!1},holdKeyboard:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},autoBlur:{type:Boolean,default:!1},cursor:{type:[String,Number],default:-1},cursorSpacing:{type:[String,Number],default:30},selectionStart:{type:[String,Number],default:-1},selectionEnd:{type:[String,Number],default:-1},adjustPosition:{type:Boolean,default:!0},inputAlign:{type:String,default:"left"},fontSize:{type:[String,Number],default:"14px"},color:{type:String,default:"#303133"},prefixIcon:{type:String,default:""},prefixIconStyle:{type:[String,Object],default:""},suffixIcon:{type:String,default:""},suffixIconStyle:{type:[String,Object],default:""},border:{type:String,default:"surround"},readonly:{type:Boolean,default:!1},shape:{type:String,default:"square"},formatter:{type:[Function,null],default:null},ignoreCompositionEvent:{type:Boolean,default:!0},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.input}}],data:()=>({innerValue:"",focused:!1,innerFormatter:e=>e}),created(){this.innerValue=this.modelValue},watch:{value(e){this.innerValue=e},modelValue(e){this.innerValue=e}},computed:{isShowClear(){const{clearable:e,readonly:t,focused:n,innerValue:r}=this;return!!e&&!t&&!!n&&""!==r},inputClass(){let e=[],{border:t,disabled:n,shape:r}=this;return"surround"===t&&(e=e.concat(["uv-border","uv-input--radius"])),e.push(`uv-input--${r}`),"bottom"===t&&(e=e.concat(["uv-border-bottom","uv-input--no-radius"])),e.join(" ")},wrapperStyle(){const e={};return this.disabled&&(e.backgroundColor=this.disabledColor),"none"===this.border?e.padding="0":(e.paddingTop="6px",e.paddingBottom="6px",e.paddingLeft="9px",e.paddingRight="9px"),this.$uv.deepMerge(e,this.$uv.addStyle(this.customStyle))},inputStyle(){const e={color:this.color,fontSize:this.$uv.addUnit(this.fontSize),textAlign:this.inputAlign};return(this.disabled||this.readonly)&&(e["pointer-events"]="none"),e}},methods:{setFormatter(e){this.innerFormatter=e},onInput(e){let{value:t=""}=e.detail||{};const n=(this.formatter||this.innerFormatter)(t);this.innerValue=t,this.$nextTick((()=>{this.innerValue=n,this.valueChange()}))},onBlur(e){this.$emit("blur",e.detail.value),this.$uv.sleep(100).then((()=>{this.focused=!1})),this.$uv.formValidate(this,"blur")},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",this.innerValue)},onkeyboardheightchange(e){this.$emit("keyboardheightchange",e)},valueChange(){this.isClear&&(this.innerValue="");const e=this.innerValue;this.$nextTick((()=>{this.$emit("input",e),this.$emit("update:modelValue",e),this.$emit("change",e),this.$uv.formValidate(this,"change")}))},onClear(){this.innerValue="",this.isClear=!0,this.$uv.sleep(100).then((e=>{this.isClear=!1})),this.$nextTick((()=>{this.$emit("clear"),this.valueChange()}))},clickHandler(){}}},[["render",function(e,t,n,r,i,o){const s=d(h("uv-icon"),c),a=S,l=k;return y(),m(a,{class:w(["uv-input",o.inputClass]),style:x([o.wrapperStyle])},{default:g((()=>[b(a,{class:"uv-input__content"},{default:g((()=>[b(a,{class:"uv-input__content__prefix-icon"},{default:g((()=>[v(e.$slots,"prefix",{},(()=>[e.prefixIcon?(y(),m(s,{key:0,name:e.prefixIcon,size:"18",customStyle:e.prefixIconStyle},null,8,["name","customStyle"])):_("",!0)]),!0)])),_:3}),b(a,{class:"uv-input__content__field-wrapper",onClick:o.clickHandler},{default:g((()=>[b(l,{class:"uv-input__content__field-wrapper__field",style:x([o.inputStyle]),type:e.type,focus:e.focus,cursor:e.cursor,value:i.innerValue,"auto-blur":e.autoBlur,disabled:e.disabled||e.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":e.placeholderClass,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,password:e.password||"password"===e.type||void 0,ignoreCompositionEvent:e.ignoreCompositionEvent,onInput:o.onInput,onBlur:o.onBlur,onFocus:o.onFocus,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["style","type","focus","cursor","value","auto-blur","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","password","ignoreCompositionEvent","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])])),_:1},8,["onClick"]),o.isShowClear?(y(),m(a,{key:0,class:"uv-input__content__clear",onClick:o.onClear},{default:g((()=>[b(s,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):_("",!0),b(a,{class:"uv-input__content__subfix-icon"},{default:g((()=>[v(e.$slots,"suffix",{},(()=>[e.suffixIcon?(y(),m(s,{key:0,name:e.suffixIcon,size:"18",customStyle:e.suffixIconStyle},null,8,["name","customStyle"])):_("",!0)]),!0)])),_:3})])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-f5be3788"]]);const F=O({name:"uv-form-item",emits:["click"],mixins:[p,f,{props:{label:{type:String,default:""},prop:{type:String,default:""},borderBottom:{type:[Boolean],default:!1},labelPosition:{type:String,default:""},labelWidth:{type:[String,Number],default:""},rightIcon:{type:String,default:""},leftIcon:{type:String,default:""},required:{type:Boolean,default:!1},leftIconStyle:{type:[String,Object],default:""},...null==(r=null==(n=uni.$uv)?void 0:n.props)?void 0:r.formItem}}],data:()=>({message:"",parentData:{labelPosition:"left",labelAlign:"left",labelStyle:{},labelWidth:45,errorType:"message"}}),created(){this.init()},methods:{init(){this.updateParentData(),this.parent||this.$uv.error("uv-form-item需要结合uv-form组件使用")},updateParentData(){this.getParentData("uv-form")},clearValidate(){this.message=null},resetField(){const e=this.$uv.getProperty(this.parent.originalModel,this.prop);this.$uv.setProperty(this.parent.model,this.prop,e),this.message=null},clickHandler(){this.$emit("click")}}},[["render",function(e,t,n,r,i,o){const s=q,a=d(h("uv-icon"),c),l=S,u=d(h("uv-transition"),T),p=d(h("uv-line"),j);return y(),m(l,{class:"uv-form-item"},{default:g((()=>[b(l,{class:"uv-form-item__body",onClick:o.clickHandler,style:x([e.$uv.addStyle(e.customStyle),{flexDirection:"left"===(e.labelPosition||i.parentData.labelPosition)?"row":"column"}])},{default:g((()=>[v(e.$slots,"label",{},(()=>[e.required||e.leftIcon||e.label?(y(),m(l,{key:0,class:"uv-form-item__body__left",style:x({width:e.$uv.addUnit(e.labelWidth||i.parentData.labelWidth),marginBottom:"left"===i.parentData.labelPosition?0:"5px"})},{default:g((()=>[b(l,{class:"uv-form-item__body__left__content"},{default:g((()=>[e.required?(y(),m(s,{key:0,class:"uv-form-item__body__left__content__required"},{default:g((()=>[C("*")])),_:1})):_("",!0),e.leftIcon?(y(),m(l,{key:1,class:"uv-form-item__body__left__content__icon"},{default:g((()=>[b(a,{name:e.leftIcon,"custom-style":e.leftIconStyle},null,8,["name","custom-style"])])),_:1})):_("",!0),b(s,{class:"uv-form-item__body__left__content__label",style:x([i.parentData.labelStyle,{justifyContent:"left"===i.parentData.labelAlign?"flex-start":"center"===i.parentData.labelAlign?"center":"flex-end"}])},{default:g((()=>[C($(e.label),1)])),_:1},8,["style"])])),_:1})])),_:1},8,["style"])):_("",!0)]),!0),b(l,{class:"uv-form-item__body__right"},{default:g((()=>[b(l,{class:"uv-form-item__body__right__content"},{default:g((()=>[b(l,{class:"uv-form-item__body__right__content__slot"},{default:g((()=>[v(e.$slots,"default",{},void 0,!0)])),_:3}),b(l,{class:"item__body__right__content__icon"},{default:g((()=>[v(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3})])),_:3})])),_:3},8,["onClick","style"]),v(e.$slots,"error",{},(()=>[i.message&&"message"===i.parentData.errorType?(y(),m(u,{key:0,show:!0,duration:100,mode:"fade"},{default:g((()=>[b(s,{class:"uv-form-item__body__right__message",style:x({marginLeft:e.$uv.addUnit("top"===i.parentData.labelPosition?0:e.labelWidth||i.parentData.labelWidth)})},{default:g((()=>[C($(i.message),1)])),_:1},8,["style"])])),_:1})):_("",!0)]),!0),e.borderBottom?(y(),m(p,{key:0,color:i.message&&"border-bottom"===i.parentData.errorType?"#f56c6c":"#d6d7d9"},null,8,["color"])):_("",!0)])),_:3})}],["__scopeId","data-v-d5bbf17c"]]);const z=O({name:"uv-overlay",emits:["click"],mixins:[p,f,{props:{show:{type:Boolean,default:!1},zIndex:{type:[String,Number],default:10070},duration:{type:[String,Number],default:300},opacity:{type:[String,Number],default:.5},...null==(o=null==(i=uni.$uv)?void 0:i.props)?void 0:o.overlay}}],watch:{show(e){document.querySelector("body").style.overflow=e?"hidden":""}},computed:{overlayStyle(){const e={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return this.$uv.deepMerge(e,this.$uv.addStyle(this.customStyle))}},methods:{clickHandler(){this.$emit("click")},clear(){}}},[["render",function(e,t,n,r,i,o){const s=d(h("uv-transition"),T);return y(),m(s,{show:e.show,mode:"fade","custom-class":"uv-overlay",duration:e.duration,"custom-style":o.overlayStyle,onClick:o.clickHandler,onTouchmove:P(o.clear,["stop","prevent"])},{default:g((()=>[v(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick","onTouchmove"])}],["__scopeId","data-v-9cc2c1b3"]]),D={props:{model:{type:Object,default:()=>({})},rules:{type:[Object,Function,Array],default:()=>({})},errorType:{type:String,default:"message"},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:45},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:()=>({})},...null==(a=null==(s=uni.$uv)?void 0:s.props)?void 0:a.form}};const E=/%[sdj%]/g;let V=function(){};function N(e){if(!e||!e.length)return null;const t={};return e.forEach((e=>{const{field:n}=e;t[n]=t[n]||[],t[n].push(e)})),t}function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=1;const i=t[0],o=t.length;if("function"==typeof i)return i.apply(null,t.slice(1));if("string"==typeof i){let e=String(i).replace(E,(e=>{if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch(n){return"[Circular]"}break;default:return e}}));for(let n=t[r];r<o;n=t[++r])e+=` ${n}`;return e}return i}function M(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(t)||"string"!=typeof e||e))}function H(e,t,n){let r=0;const i=e.length;!function o(s){if(s&&s.length)return void n(s);const a=r;r+=1,a<i?t(e[a],o):n([])}([])}function W(e,t,n,r){if(t.first){const t=new Promise(((t,i)=>{const o=function(e){const t=[];return Object.keys(e).forEach((n=>{t.push.apply(t,e[n])})),t}(e);H(o,n,(function(e){return r(e),e.length?i({errors:e,fields:N(e)}):t()}))}));return t.catch((e=>e)),t}let i=t.firstFields||[];!0===i&&(i=Object.keys(e));const o=Object.keys(e),s=o.length;let a=0;const l=[],u=new Promise(((t,u)=>{const d=function(e){if(l.push.apply(l,e),a++,a===s)return r(l),l.length?u({errors:l,fields:N(l)}):t()};o.length||(r(l),t()),o.forEach((t=>{const r=e[t];-1!==i.indexOf(t)?H(r,n,d):function(e,t,n){const r=[];let i=0;const o=e.length;function s(e){r.push.apply(r,e),i++,i===o&&n(r)}e.forEach((e=>{t(e,s)}))}(r,n,d)}))}));return u.catch((e=>e)),u}function U(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"==typeof t?t():t,field:t.field||e.fullField}}}function L(e,t){if(t)for(const n in t)if(t.hasOwnProperty(n)){const r=t[n];"object"==typeof r&&"object"==typeof e[n]?e[n]={...e[n],...r}:e[n]=r}return e}function K(e,t,n,r,i,o){!e.required||n.hasOwnProperty(e.field)&&!M(t,o||e.type)||r.push(R(i.messages.required,e.fullField))}const J={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i};var Z={integer:function(e){return/^(-)?\d+$/.test(e)},float:function(e){return/^(-)?\d+(\.\d+)?$/.test(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function(e){return!isNaN(e)&&"number"==typeof+e},object:function(e){return"object"==typeof e&&!Z.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(J.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(J.url)},hex:function(e){return"string"==typeof e&&!!e.match(J.hex)}};const Y={required:K,whitespace:function(e,t,n,r,i){(/^\s+$/.test(t)||""===t)&&r.push(R(i.messages.whitespace,e.fullField))},type:function(e,t,n,r,i){if(e.required&&void 0===t)return void K(e,t,n,r,i);const o=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(o)>-1?Z[o](t)||r.push(R(i.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&r.push(R(i.messages.types[o],e.fullField,e.type))},range:function(e,t,n,r,i){const o="number"==typeof e.len,s="number"==typeof e.min,a="number"==typeof e.max,l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;let u=t,d=null;const c="number"==typeof t,p="string"==typeof t,f=Array.isArray(t);if(c?d="number":p?d="string":f&&(d="array"),!d)return!1;f&&(u=t.length),p&&(u=t.replace(l,"_").length),o?u!==e.len&&r.push(R(i.messages[d].len,e.fullField,e.len)):s&&!a&&u<e.min?r.push(R(i.messages[d].min,e.fullField,e.min)):a&&!s&&u>e.max?r.push(R(i.messages[d].max,e.fullField,e.max)):s&&a&&(u<e.min||u>e.max)&&r.push(R(i.messages[d].range,e.fullField,e.min,e.max))},enum:function(e,t,n,r,i){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(t)&&r.push(R(i.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,t,n,r,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(R(i.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||r.push(R(i.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function G(e,t,n,r,i){const o=e.type,s=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t,o)&&!e.required)return n();Y.required(e,t,r,s,i,o),M(t,o)||Y.type(e,t,r,s,i)}n(s)}const Q={string:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t,"string")&&!e.required)return n();Y.required(e,t,r,o,i,"string"),M(t,"string")||(Y.type(e,t,r,o,i),Y.range(e,t,r,o,i),Y.pattern(e,t,r,o,i),!0===e.whitespace&&Y.whitespace(e,t,r,o,i))}n(o)},method:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i),void 0!==t&&Y.type(e,t,r,o,i)}n(o)},number:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(""===t&&(t=void 0),M(t)&&!e.required)return n();Y.required(e,t,r,o,i),void 0!==t&&(Y.type(e,t,r,o,i),Y.range(e,t,r,o,i))}n(o)},boolean:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i),void 0!==t&&Y.type(e,t,r,o,i)}n(o)},regexp:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i),M(t)||Y.type(e,t,r,o,i)}n(o)},integer:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i),void 0!==t&&(Y.type(e,t,r,o,i),Y.range(e,t,r,o,i))}n(o)},float:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i),void 0!==t&&(Y.type(e,t,r,o,i),Y.range(e,t,r,o,i))}n(o)},array:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t,"array")&&!e.required)return n();Y.required(e,t,r,o,i,"array"),M(t,"array")||(Y.type(e,t,r,o,i),Y.range(e,t,r,o,i))}n(o)},object:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i),void 0!==t&&Y.type(e,t,r,o,i)}n(o)},enum:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i),void 0!==t&&Y.enum(e,t,r,o,i)}n(o)},pattern:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t,"string")&&!e.required)return n();Y.required(e,t,r,o,i),M(t,"string")||Y.pattern(e,t,r,o,i)}n(o)},date:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();if(Y.required(e,t,r,o,i),!M(t)){let n;n="number"==typeof t?new Date(t):t,Y.type(e,n,r,o,i),n&&Y.range(e,n.getTime(),r,o,i)}}n(o)},url:G,hex:G,email:G,required:function(e,t,n,r,i){const o=[],s=Array.isArray(t)?"array":typeof t;Y.required(e,t,r,o,i,s),n(o)},any:function(e,t,n,r,i){const o=[];if(e.required||!e.required&&r.hasOwnProperty(e.field)){if(M(t)&&!e.required)return n();Y.required(e,t,r,o,i)}n(o)}};function X(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){const e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}const ee=X();function te(e){this.rules=null,this._messages=ee,this.define(e)}te.prototype={messages:function(e){return e&&(this._messages=L(X(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");let t,n;for(t in this.rules={},e)e.hasOwnProperty(t)&&(n=e[t],this.rules[t]=Array.isArray(n)?n:[n])},validate:function(e,t,n){const r=this;void 0===t&&(t={}),void 0===n&&(n=function(){});let i,o,s=e,a=t,l=n;if("function"==typeof a&&(l=a,a={}),!this.rules||0===Object.keys(this.rules).length)return l&&l(),Promise.resolve();if(a.messages){let e=this.messages();e===ee&&(e=X()),L(e,a.messages),a.messages=e}else a.messages=this.messages();const u={};(a.keys||Object.keys(this.rules)).forEach((t=>{i=r.rules[t],o=s[t],i.forEach((n=>{let i=n;"function"==typeof i.transform&&(s===e&&(s={...s}),o=s[t]=i.transform(o)),i="function"==typeof i?{validator:i}:{...i},i.validator=r.getValidationMethod(i),i.field=t,i.fullField=i.fullField||t,i.type=r.getType(i),i.validator&&(u[t]=u[t]||[],u[t].push({rule:i,value:o,source:s,field:t}))}))}));const d={};return W(u,a,((e,t)=>{const{rule:n}=e;let r,i=!("object"!==n.type&&"array"!==n.type||"object"!=typeof n.fields&&"object"!=typeof n.defaultField);function o(e,t){return{...t,fullField:`${n.fullField}.${e}`}}function s(r){void 0===r&&(r=[]);let s=r;if(Array.isArray(s)||(s=[s]),!a.suppressWarning&&s.length&&te.warning("async-validator:",s),s.length&&n.message&&(s=[].concat(n.message)),s=s.map(U(n)),a.first&&s.length)return d[n.field]=1,t(s);if(i){if(n.required&&!e.value)return s=n.message?[].concat(n.message).map(U(n)):a.error?[a.error(n,R(a.messages.required,n.field))]:[],t(s);let r={};if(n.defaultField)for(const t in e.value)e.value.hasOwnProperty(t)&&(r[t]=n.defaultField);r={...r,...e.rule.fields};for(const e in r)if(r.hasOwnProperty(e)){const t=Array.isArray(r[e])?r[e]:[r[e]];r[e]=t.map(o.bind(null,e))}const i=new te(r);i.messages(a.messages),e.rule.options&&(e.rule.options.messages=a.messages,e.rule.options.error=a.error),i.validate(e.value,e.rule.options||a,(e=>{const n=[];s&&s.length&&n.push.apply(n,s),e&&e.length&&n.push.apply(n,e),t(n.length?n:null)}))}else t(s)}i=i&&(n.required||!n.required&&e.value),n.field=e.field,n.asyncValidator?r=n.asyncValidator(n,e.value,s,e.source,a):n.validator&&(r=n.validator(n,e.value,s,e.source,a),!0===r?s():!1===r?s(n.message||`${n.field} fails`):r instanceof Array?s(r):r instanceof Error&&s(r.message)),r&&r.then&&r.then((()=>s()),(e=>s(e)))}),(e=>{!function(e){let t,n=[],r={};function i(e){if(Array.isArray(e)){let t;n=(t=n).concat.apply(t,e)}else n.push(e)}for(t=0;t<e.length;t++)i(e[t]);n.length?r=N(n):(n=null,r=null),l(n,r)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!Q.hasOwnProperty(e.type))throw new Error(R("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;const t=Object.keys(e),n=t.indexOf("message");return-1!==n&&t.splice(n,1),1===t.length&&"required"===t[0]?Q.required:Q[this.getType(e)]||!1}},te.register=function(e,t){if("function"!=typeof t)throw new Error("Cannot register a validator by type, validator is not a function");Q[e]=t},te.warning=V,te.messages=ee,te.warning=function(){};const ne=O({name:"uv-form",mixins:[p,f,D],provide(){return{uForm:this}},data:()=>({formRules:{},validator:{},originalModel:null}),watch:{rules:{immediate:!0,handler(e){this.setRules(e)}},propsChange(e){var t;(null==(t=this.children)?void 0:t.length)&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))},model:{immediate:!0,handler(e){this.originalModel||(this.originalModel=this.$uv.deepClone(e))}}},computed:{propsChange(){return[this.errorType,this.borderBottom,this.labelPosition,this.labelWidth,this.labelAlign,this.labelStyle]}},created(){this.children=[]},methods:{setRules(e){0!==Object.keys(e).length&&(this.formRules=e,this.validator=new te(e))},resetFields(){this.resetModel()},resetModel(e){this.children.map((e=>{const t=null==e?void 0:e.prop,n=this.$uv.getProperty(this.originalModel,t);this.$uv.setProperty(this.model,t,n)}))},clearValidate(e){e=[].concat(e),this.children.map((t=>{(void 0===e[0]||e.includes(t.prop))&&(t.message=null)}))},async validateField(e,t,n=null){this.$nextTick((()=>{const r=[];e=[].concat(e),this.children.map((t=>{const i=[];if(e.includes(t.prop)){const e=this.$uv.getProperty(this.model,t.prop),o=t.prop.split("."),s=o[o.length-1],a=this.formRules[t.prop];if(!a)return;const l=[].concat(a);for(let u=0;u<l.length;u++){const o=l[u],a=[].concat(null==o?void 0:o.trigger);if(n&&!a.includes(n))continue;new te({[s]:o}).validate({[s]:e},((e,n)=>{this.$uv.test.array(e)&&(r.push(...e),i.push(...e)),this.$nextTick((()=>{var e,n;t.message=(null==(e=i[0])?void 0:e.message)?null==(n=i[0])?void 0:n.message:null}))}))}}})),"function"==typeof t&&t(r)}))},validate(e){return new Promise(((e,t)=>{this.$nextTick((()=>{const n=this.children.map((e=>e.prop));this.validateField(n,(n=>{n.length?("toast"===this.errorType&&this.$uv.toast(n[0].message),t(n)):e(!0)}))}))}))}}},[["render",function(e,t,n,r,i,o){const s=S;return y(),m(s,{class:"uv-form"},{default:g((()=>[v(e.$slots,"default")])),_:3})}]]);const re=O({name:"uv-status-bar",mixins:[p,f,{props:{bgColor:{type:String,default:"transparent"}}}],data:()=>({}),computed:{style(){const e={};return e.height=this.$uv.addUnit(this.$uv.sys().statusBarHeight,"px"),this.bgColor&&(this.bgColor.indexOf("gradient")>-1?e.backgroundImage=this.bgColor:e.background=this.bgColor),this.$uv.deepMerge(e,this.$uv.addStyle(this.customStyle))}}},[["render",function(e,t,n,r,i,o){const s=S;return y(),m(s,{style:x([o.style]),class:"uv-status-bar"},{default:g((()=>[v(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-08fe2518"]]);const ie=O({name:"uv-popup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const e={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(t=>{if(this.disable)return;const n=Object.keys(e).find((n=>{const r=t.key,i=e[n];return i===r||Array.isArray(i)&&i.includes(r)}));n&&setTimeout((()=>{this.$emit(n,{})}),0)}))},render:()=>{}}},mixins:[p,f],emits:["change","maskClick"],props:{mode:{type:String,default:"center"},duration:{type:[String,Number],default:300},zIndex:{type:[String,Number],default:997},bgColor:{type:String,default:"#ffffff"},safeArea:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},overlayOpacity:{type:[Number,String],default:.4},overlayStyle:{type:[Object,String],default:""},safeAreaInsetBottom:{type:Boolean,default:!0},safeAreaInsetTop:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1},closeIconPos:{type:String,default:"top-right"},zoom:{type:Boolean,default:!0},round:{type:[Number,String],default:0},...null==(u=null==(l=uni.$uv)?void 0:l.props)?void 0:u.popup},watch:{type:{handler:function(e){this.config[e]&&this[this.config[e]](!0)},immediate:!0},isDesktop:{handler:function(e){this.config[e]&&this[this.config[this.mode]](!0)},immediate:!0},showPopup(e){document.getElementsByTagName("body")[0].style.overflow=e?"hidden":"visible"}},data(){return{ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},transitionStyle:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupClass:this.isDesktop?"fixforpc-top":"top",direction:""}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.bgColor||"none"===this.bgColor||this.$uv.getPx(this.round)>0?"transparent":this.bgColor},contentStyle(){const e={};if(this.bgColor&&(e.backgroundColor=this.bg),this.round){const t=this.$uv.addUnit(this.round),n=this.direction?this.direction:this.mode;e.backgroundColor=this.bgColor,"top"===n?(e.borderBottomLeftRadius=t,e.borderBottomRightRadius=t):"bottom"===n?(e.borderTopLeftRadius=t,e.borderTopRightRadius=t):"center"===n&&(e.borderRadius=t)}return this.$uv.deepMerge(e,this.$uv.addStyle(this.customStyle))}},unmounted(){this.setH5Visible()},created(){this.messageChild=null,this.clearPropagation=!1},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},clear(e){e.stopPropagation(),this.clearPropagation=!0},open(e){if(this.showPopup)return;if(e&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(e)?this.direction=e:e=this.mode,!this.config[e])return this.$uv.error(`缺少类型：${e}`);this[this.config[e]](),this.$emit("change",{show:!0,type:e})},close(e){this.showTrans=!1,this.$emit("change",{show:!1,type:this.mode}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.closeOnClickOverlay&&this.close())},top(e){this.popupClass=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,left:0,right:0,backgroundColor:this.bg},e||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.mode&&this.messageChild.timerClose()})))},bottom(e){this.popupClass="bottom",this.ani=["slide-bottom"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,left:0,right:0,bottom:0,backgroundColor:this.bg},e||(this.showPopup=!0,this.showTrans=!0)},center(e){this.popupClass="center",this.ani=this.zoom?["zoom-in","fade"]:["fade"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},e||(this.showPopup=!0,this.showTrans=!0)},left(e){this.popupClass="left",this.ani=["slide-left"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},e||(this.showPopup=!0,this.showTrans=!0)},right(e){this.popupClass="right",this.ani=["slide-right"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},e||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(e,t,n,r,i,o){const s=d(h("uv-overlay"),z),a=d(h("uv-status-bar"),re),l=d(h("uv-safe-bottom"),A),u=d(h("uv-icon"),c),p=S,f=d(h("uv-transition"),T),k=I("keypress");return i.showPopup?(y(),m(p,{key:0,class:w(["uv-popup",[i.popupClass,o.isDesktop?"fixforpc-z-index":""]]),style:x([{zIndex:n.zIndex}])},{default:g((()=>[b(p,{onTouchstart:o.touchstart},{default:g((()=>[i.maskShow&&n.overlay?(y(),m(s,{key:"1",show:i.showTrans,duration:n.duration,"custom-style":n.overlayStyle,opacity:n.overlayOpacity,zIndex:n.zIndex,onClick:o.onTap},null,8,["show","duration","custom-style","opacity","zIndex","onClick"])):_("",!0),b(f,{key:"2",mode:i.ani,name:"content","custom-style":i.transitionStyle,duration:n.duration,show:i.showTrans,onClick:o.onTap},{default:g((()=>[b(p,{class:w(["uv-popup__content",[i.popupClass]]),style:x([o.contentStyle]),onClick:o.clear},{default:g((()=>[n.safeAreaInsetTop?(y(),m(a,{key:0})):_("",!0),v(e.$slots,"default",{},void 0,!0),n.safeAreaInsetBottom?(y(),m(l,{key:1})):_("",!0),n.closeable?(y(),m(p,{key:2,onClick:P(o.close,["stop"]),class:w(["uv-popup__content__close",["uv-popup__content__close--"+n.closeIconPos]]),"hover-class":"uv-popup__content__close--hover","hover-stay-time":"150"},{default:g((()=>[b(u,{name:"close",color:"#909399",size:"18",bold:""})])),_:1},8,["onClick","class"])):_("",!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode","custom-style","duration","show","onClick"])])),_:3},8,["onTouchstart"]),i.maskShow?(y(),m(k,{key:0,onEsc:o.onTap},null,8,["onEsc"])):_("",!0)])),_:3},8,["class","style"])):_("",!0)}],["__scopeId","data-v-db11292f"]]);export{ie as _,B as a,F as b,ne as c,z as d};
