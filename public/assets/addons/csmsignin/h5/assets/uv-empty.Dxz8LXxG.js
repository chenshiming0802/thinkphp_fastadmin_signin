var t,e;import{r as i,_ as s}from"./uni-app.es.BItphNhK.js";import{q as n,u as o,l as a,o as r,d,w as l,n as c,e as u,m as p,t as m,v as y,f,i as h,C as g,g as v}from"./index-B3YTDGpb.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";const x={length:t=>t.length,isEquals:(t,e)=>JSON.stringify(t)===JSON.stringify(e),contains:(t,e)=>t.includes(e),isEmpty:t=>0===t.length,indexOf:(t,e)=>t.indexOf(e),lastIndexOf:(t,e)=>t.lastIndexOf(e),subarray:(t,e,i)=>(void 0===i&&(i=t.length-e),t.slice(e,e+i-1)),addObject:(t,e)=>(t.push(e),t),addObjects:(t,e)=>t.concat(e),insertObject:(t,e,i)=>(t.splice(i,0,e),t),removeObject:(t,e)=>t.filter((t=>t!==e)),remove:(t,e,i)=>(void 0===i&&(i=t.length-e),t.splice(e,i),t),reverse:t=>t.reverse(),clone:t=>JSON.parse(JSON.stringify(t)),toString:t=>t.join(", "),push:(t,e)=>(t.unshift(e),t),pop:t=>(t.pop(),t)};const O=S({name:"uv-empty",mixins:[n,o,{props:{icon:{type:String,default:""},text:{type:String,default:""},textColor:{type:String,default:"#c0c4cc"},textSize:{type:[String,Number],default:14},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:90},mode:{type:String,default:"data"},width:{type:[String,Number],default:160},height:{type:[String,Number],default:160},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.empty}}],data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址","wifi-off":"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}),computed:{emptyStyle(){const t={};return t.marginTop=this.$uv.addUnit(this.marginTop),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))},textStyle(){const t={};return t.color=this.textColor,t.fontSize=this.$uv.addUnit(this.textSize),t},isImg(){const t=this.icon.indexOf("data:")>-1&&this.icon.indexOf("base64")>-1;return-1!==this.icon.indexOf("/")||t}}},[["render",function(t,e,n,o,S,x){const O=i(a("uv-icon"),s),_=h,b=g,w=v;return t.show?(r(),d(w,{key:0,class:"uv-empty",style:c([x.emptyStyle])},{default:l((()=>[x.isImg?(r(),d(_,{key:1,style:c({width:t.$uv.addUnit(t.width),height:t.$uv.addUnit(t.height)}),src:t.icon,mode:"widthFix"},null,8,["style","src"])):(r(),d(O,{key:0,name:"message"===t.mode?"chat":`empty-${t.mode}`,size:t.iconSize,color:t.iconColor,"margin-top":"14"},null,8,["name","size","color"])),u(b,{class:"uv-empty__text",style:c([x.textStyle])},{default:l((()=>[p(m(t.text?t.text:S.icons[t.mode]),1)])),_:1},8,["style"]),u(w,{class:"uv-empty__wrap"},{default:l((()=>[y(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])):f("",!0)}],["__scopeId","data-v-d585060f"]]);export{O as _,x};
