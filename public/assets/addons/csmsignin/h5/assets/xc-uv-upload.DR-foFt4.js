var e,t;import{q as a,o as i,c as l,w as s,h as o,t as u,N as r,i as d,ab as n,ac as p,ad as c,m,a as f,ae as h,af as g,ag as y,Y as v,ah as _,J as b,b as w,F as x,r as S,n as k,u as I,v as C,B as F,e as z,d as $,j as B,C as L,f as V,x as D}from"./index-BjfunRpr.js";import{r as T,_ as j,x as R,a as P}from"./uv-icon.B7eKapMU.js";import{_ as A}from"./uv-loading-icon.CvAzROqE.js";import{_ as O}from"./uv-popup.DHUtt-1P.js";import{_ as N}from"./_plugin-vue_export-helper.BCo6x5W8.js";const U=N({props:{src:{type:String,default:""},autoplay:{type:Boolean,default:!0}},data:()=>({videoSrc:"",show:!1}),computed:{getSec(){return this.src||this.videoSrc}},methods:{open(e){this.videoSrc=e,this.$refs.popup.open()},close(){this.$refs.popup.close()},change(e){this.show=e.show}}},[["render",function(e,t,n,p,c,m){const f=r,h=d,g=T(a("uv-popup"),O);return i(),l(g,{ref:"popup",onChange:m.change},{default:s((()=>[c.show?(i(),l(h,{key:0,class:"video-view"},{default:s((()=>[o(f,{class:"video",src:m.getSec,autoplay:n.autoplay},null,8,["src","autoplay"])])),_:1})):u("",!0)])),_:1},8,["onChange"])}],["__scopeId","data-v-9cf65f78"]]);function M(e,t){return["[object Object]","[object File]"].includes(Object.prototype.toString.call(e))?Object.keys(e).reduce(((a,i)=>(t.includes(i)||(a[i]=e[i]),a)),{}):{}}function q(e){return e.tempFiles.map((e=>({...M(e,["path"]),url:e.path,size:e.size,name:e.name,type:e.type})))}function E({accept:e,multiple:t,capture:a,compressed:i,maxDuration:l,sizeType:s,camera:o,maxCount:u}){return new Promise(((r,d)=>{switch(e){case"image":c({count:t?Math.min(u,9):1,sourceType:a,sizeType:s,success:e=>r(function(e){return e.tempFiles.map((e=>({...M(e,["path"]),type:"image",url:e.path,thumb:e.path,size:e.size,name:e.name})))}(e)),fail:d});break;case"video":p({sourceType:a,compressed:i,maxDuration:l,camera:o,success:e=>r(function(e){return[{...M(e,["tempFilePath","thumbTempFilePath","errMsg"]),type:"video",url:e.tempFilePath,thumb:e.thumbTempFilePath,size:e.size,name:e.name}]}(e)),fail:d});break;case"file":n({count:t?u:1,type:e,success:e=>r(q(e)),fail:d});break;default:n({count:t?u:1,type:"all",success:e=>r(q(e)),fail:d})}}))}const W=N({name:"uv-upload",emits:["error","beforeRead","oversize","afterRead","delete","clickPreview"],mixins:[m,f,{watch:{accept:{immediate:!0,handler(e){}}}},{props:{accept:{type:String,default:"image"},capture:{type:[String,Array],default:()=>["album","camera"]},compressed:{type:Boolean,default:!0},camera:{type:String,default:"back"},maxDuration:{type:Number,default:60},uploadIcon:{type:String,default:"camera-fill"},uploadIconColor:{type:String,default:"#D3D4D6"},useBeforeRead:{type:Boolean,default:!1},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:!0},previewFullVideo:{type:Boolean,default:!0},maxCount:{type:[String,Number],default:52},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},name:{type:String,default:""},sizeType:{type:Array,default:()=>["original","compressed"]},multiple:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:()=>[]},uploadText:{type:String,default:""},width:{type:[String,Number],default:80},height:{type:[String,Number],default:80},previewImage:{type:Boolean,default:!0},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.upload}}],data:()=>({lists:[],isInCount:!0}),watch:{fileList:{deep:!0,immediate:!0,handler(){this.formatFileList()}},deletable(e){e||this.lists.map((e=>{e.deletable=this.deletable}))}},methods:{formatFileList(){const{fileList:e=[],maxCount:t}=this,a=e.map((e=>Object.assign(Object.assign({},e),{isImage:"image"===this.accept||h(e.url||e.thumb),isVideo:"video"===this.accept||g(e.url||e.thumb),deletable:"boolean"==typeof e.deletable?e.deletable:this.deletable})));this.lists=a,this.isInCount=a.length<t},chooseFile(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{const{maxCount:e,multiple:t,lists:a,disabled:i}=this;if(i)return;let l;try{l=y(this.capture)?this.capture:this.capture.split(",")}catch(s){l=[]}E(Object.assign({accept:this.accept,multiple:this.multiple,capture:l,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:e-a.length})).then((e=>{this.onBeforeRead(t?e:e[0])})).catch((e=>{this.$emit("error",e)}))}),100)},onBeforeRead(e){const{beforeRead:t,useBeforeRead:a}=this;let i=!0;v(t)&&(i=t(e,this.getDetail())),a&&(i=new Promise(((t,a)=>{this.$emit("beforeRead",Object.assign(Object.assign({file:e},this.getDetail()),{callback:e=>{e?t():a()}}))}))),i&&(_(i)?i.then((t=>this.onAfterRead(t||e))):this.onAfterRead(e))},getDetail(e){return{name:this.name,index:null==e?this.fileList.length:e}},onAfterRead(e){const{maxSize:t,afterRead:a}=this;(Array.isArray(e)?e.some((e=>e.size>t)):e.size>t)?this.$emit("oversize",Object.assign({file:e},this.getDetail())):("function"==typeof a&&a(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail())))},deleteItem(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage(e,t){const a=this.$uv.deepClone(this.lists);a.map(((e,a)=>{a==t&&(e.current=!0)}));const i=a.filter((e=>e.isImage)).findIndex((e=>e.current));this.onClickPreview(e,t),e.isImage&&this.previewFullImage&&b({urls:this.lists.filter((e=>"image"===this.accept||h(e.url||e.thumb))).map((e=>e.url||e.thumb)),current:i,fail(){this.$uv.toast("预览图片失败")}})},onPreviewVideo(e,t){this.onClickPreview(e,t),this.previewFullVideo&&e.isVideo&&this.$refs.previewVideo.open(e.url)},onClickPreview(e,t){this.$emit("clickPreview",Object.assign(Object.assign({},e),this.getDetail(t)))}}},[["render",function(e,t,r,n,p,c){const m=B,f=T(a("uv-icon"),j),h=L,g=d,y=T(a("uv-loading-icon"),A),v=T(a("uv-preview-video"),U);return i(),l(g,{class:"uv-upload",style:k([e.$uv.addStyle(e.customStyle)])},{default:s((()=>[o(g,{class:"uv-upload__wrap"},{default:s((()=>[e.previewImage?(i(!0),w(x,{key:0},S(p.lists,((t,a)=>(i(),l(g,{class:"uv-upload__wrap__preview",key:a},{default:s((()=>[t.isImage||t.type&&"image"===t.type?(i(),l(m,{key:0,src:t.thumb||t.url,mode:e.imageMode,class:"uv-upload__wrap__preview__image",onClick:e=>c.onPreviewImage(t,a),style:k([{width:e.$uv.addUnit(e.width),height:e.$uv.addUnit(e.height)}])},null,8,["src","mode","onClick","style"])):(i(),l(g,{key:1,class:"uv-upload__wrap__preview__other",onClick:e=>c.onPreviewVideo(t,a),style:k([{width:e.$uv.addUnit(e.width),height:e.$uv.addUnit(e.height)}])},{default:s((()=>[o(f,{color:"#80CBF9",size:"26",name:t.isVideo||t.type&&"video"===t.type?"movie":"folder"},null,8,["name"]),o(h,{class:"uv-upload__wrap__preview__other__text"},{default:s((()=>[I(C(t.isVideo||t.type&&"video"===t.type?"视频":"文件"),1)])),_:2},1024)])),_:2},1032,["onClick","style"])),"uploading"===t.status||"failed"===t.status?(i(),l(g,{key:2,class:"uv-upload__status"},{default:s((()=>[o(g,{class:"uv-upload__status__icon"},{default:s((()=>["failed"===t.status?(i(),l(f,{key:0,name:"close-circle",color:"#ffffff",size:"25"})):(i(),l(y,{key:1,size:"22",mode:"circle"}))])),_:2},1024),t.message?(i(),l(h,{key:0,class:"uv-upload__status__message"},{default:s((()=>[I(C(t.message),1)])),_:2},1024)):u("",!0)])),_:2},1024)):u("",!0),"uploading"!==t.status&&(e.deletable||t.deletable)?(i(),l(g,{key:3,class:"uv-upload__deletable",onClick:F((e=>c.deleteItem(a)),["stop"])},{default:s((()=>[o(g,{class:"uv-upload__deletable__icon"},{default:s((()=>[o(f,{name:"close",color:"#ffffff",size:"10"})])),_:1})])),_:2},1032,["onClick"])):u("",!0),"success"===t.status?(i(),l(g,{key:4,class:"uv-upload__success"},{default:s((()=>[o(g,{class:"uv-upload__success__icon"},{default:s((()=>[o(f,{name:"checkmark",color:"#ffffff",size:"12"})])),_:1})])),_:1})):u("",!0)])),_:2},1024)))),128)):u("",!0),p.isInCount?(i(),l(g,{key:1,onClick:c.chooseFile},{default:s((()=>[z(e.$slots,"default",{},(()=>[o(g,{class:$(["uv-upload__button",[e.disabled&&"uv-upload__button--disabled"]]),"hover-class":e.disabled?"":"uv-upload__button--hover","hover-stay-time":"150",onClick:F(c.chooseFile,["stop"]),style:k([{width:e.$uv.addUnit(e.width),height:e.$uv.addUnit(e.height)}])},{default:s((()=>[o(f,{name:e.uploadIcon,size:"26",color:e.uploadIconColor},null,8,["name","color"]),e.uploadText?(i(),l(h,{key:0,class:"uv-upload__button__text"},{default:s((()=>[I(C(e.uploadText),1)])),_:1})):u("",!0)])),_:1},8,["hover-class","onClick","class","style"])]),!0)])),_:3},8,["onClick"])):u("",!0)])),_:3}),o(v,{ref:"previewVideo"},null,512)])),_:3},8,["style"])}],["__scopeId","data-v-8b6cd2cb"]]);const X=N({props:{modelValue:{type:String,default:null},accept:{type:String,default:"image"},capture:{type:[String,Array],default:()=>["album","camera"]},compressed:{type:Boolean,default:!0},camera:{type:String,default:"back"},maxDuration:{type:Number,default:60},uploadIcon:{type:String,default:"camera-fill"},uploadIconColor:{type:String,default:"#D3D4D6"},useBeforeRead:{type:Boolean,default:!1},previewFullImage:{type:Boolean,default:!0},previewFullVideo:{type:Boolean,default:!0},maxCount:{type:[String,Number],default:52},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},name:{type:String,default:""},sizeType:{type:Array,default:()=>["original","compressed"]},multiple:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},uploadText:{type:String,default:""},width:{type:[String,Number],default:80},height:{type:[String,Number],default:80},previewImage:{type:Boolean,default:!0}},watch:{modelValue:{handler(e,t){let a=this;if(R.startsWith(a.modelValue,"data:image"))return a.$emit("update:modelValue",null),[];let i=a.modelValue.split(",");a.fileList=[];for(let l=0,s=i.length;l<s;l++){let e=i[l],t=e;0!=e.indexOf("http")&&(t=V.image_baseUrl+e),a.fileList.push({url:t})}}}},data:()=>({config:V,xsStringUtils:R,xsDateUtils:P,sp:{},sr:{},control:{},fileList:[]}),created(){this.xinit(),this.public_show()},methods:{xinit(){},public_show(){},public_reset(){this.public_show()},control_click(){this.$emit("update:modelValue","Hello World!")},deletePic(e){let t=this;this[`fileList${e.name}`].splice(e.index,1),t.$emit("update:modelValue",t._convertFileListToValue(t.fileList))},async afterRead(e){let t=this,a=[].concat(e.file),i=this[`fileList${e.name}`].length;a.map((t=>{this[`fileList${e.name}`].push({...t,status:"uploading",message:"上传中"})}));for(let l=0;l<a.length;l++){const t=await this.uploadFilePromise(a[l].url);let s=this[`fileList${e.name}`][i];this[`fileList${e.name}`].splice(i,1,Object.assign(s,{status:"success",message:"",url:t})),i++}t.$emit("update:modelValue",t._convertFileListToValue(t.fileList))},uploadFilePromise:e=>new Promise(((t,a)=>{D.upload(e,(function(e){t(e)}))})),_convertFileListToValue(){let e=this,t=[];for(let a=0,i=e.fileList.length;a<i;a++){let i=e.fileList[a].url;t.push(i)}return t.join(",")}}},[["render",function(e,t,s,o,u,r){const d=T(a("uv-upload"),W);return i(),l(d,{fileList:u.fileList,onAfterRead:r.afterRead,onDelete:r.deletePic,accept:s.accept,multiple:s.multiple,capture:s.capture,compressed:s.compressed,camera:s.camera,maxDuration:s.maxDuration,uploadIcon:s.uploadIcon,uploadIconColor:s.uploadIconColor,useBeforeRead:s.useBeforeRead,previewFullImage:s.previewFullImage,previewFullVideo:s.previewFullVideo,maxCount:s.maxCount,disabled:s.disabled,imageMode:s.imageMode,name:s.name,sizeType:s.sizeType,deletable:s.deletable,maxSize:s.maxSize,uploadText:s.uploadText,width:s.width,height:s.height,previewImage:s.previewImage},null,8,["fileList","onAfterRead","onDelete","accept","multiple","capture","compressed","camera","maxDuration","uploadIcon","uploadIconColor","useBeforeRead","previewFullImage","previewFullVideo","maxCount","disabled","imageMode","name","sizeType","deletable","maxSize","uploadText","width","height","previewImage"])}]]);export{X as _};
