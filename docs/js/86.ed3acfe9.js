"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[86],{2398:(e,o,r)=>{r.r(o),r.d(o,{default:()=>P});var n=r(3673),d=r(2323);const t=(0,n.HX)("data-v-1f3d2497");(0,n.dD)("data-v-1f3d2497");const s={id:"metroline"},a={id:"form"},i=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Keywords ")],-1),l={id:"form-content"},c={class:"question"},m=(0,n.Uk)(" What keywords describe the work? "),u={class:"scroll-to-bottom-container"},w=(0,n.Wm)("span",{class:"bottom"},null,-1),y=(0,n.Uk)(" Add keyword "),v={id:"form-button-bar"};(0,n.Cn)();const p=t(((e,o,r,p,k,b)=>{const f=(0,n.up)("Stepper"),g=(0,n.up)("SchemaGuideLink"),h=(0,n.up)("Keyword"),W=(0,n.up)("q-btn"),K=(0,n.up)("q-banner"),x=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",s,[(0,n.Wm)(f)]),(0,n.Wm)("div",a,[i,(0,n.Wm)("div",l,[(0,n.Wm)("p",c,[m,(0,n.Wm)(g,{anchor:"#keywords"})]),(0,n.Wm)("div",u,[w,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywords,((o,r)=>((0,n.wg)(),(0,n.j4)(h,{class:"q-mr-lg",key:r,keyword:o,index:r,"num-keywords":e.keywords.length,onMoveDown:o=>e.moveDown(r,e.keywords,e.setKeywords),onMoveUp:o=>e.moveUp(r,e.keywords,e.setKeywords),onRemovePressed:o=>e.removeKeyword(r),onUpdate:o=>e.setKeyword(r,o)},null,8,["keyword","index","num-keywords","onMoveDown","onMoveUp","onRemovePressed","onUpdate"])))),128))])]),(0,n.Wm)(W,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:t((()=>[y])),_:1},8,["onClick"]),e.keywordsErrors.messages.length>0?((0,n.wg)(),(0,n.j4)(K,{key:0,class:"bg-warning text-negative"},{default:t((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywordsErrors.messages,((e,o)=>((0,n.wg)(),(0,n.j4)("div",{key:o},(0,d.zw)(e),1)))),128))])),_:1})):(0,n.kq)("",!0)]),(0,n.Wm)("div",v,[(0,n.Wm)(x)])])],64)}));var k=r(7268),b=r(525),f=r(2334);const g=(0,n.HX)("data-v-3815b80e");(0,n.dD)("data-v-3815b80e");const h={class:"keyword"},W={class:"keyword-input"};(0,n.Cn)();const K=g(((e,o,r,d,t,s)=>{const a=(0,n.up)("q-input"),i=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)("div",h,[(0,n.Wm)("div",W,[(0,n.Wm)(a,{"bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword","model-value":e.keyword,error:e.keywordError.hasError,"error-message":e.keywordError.messages.join(", "),"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update",o))},null,8,["model-value","error","error-message"])]),(0,n.Wm)(i,{class:"keyword-btn",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(i,{class:"keyword-btn",color:"blue",disable:e.index==e.numKeywords-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[3]||(o[3]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(i,{class:"keyword-btn",color:"negative",dense:"",icon:"delete",tabindex:"-1",title:"Remove",onClick:o[4]||(o[4]=o=>e.$emit("removePressed"))})])}));var x=r(3281);const U=(0,n.aZ)({name:"KeywordCard",props:{keyword:{type:String,default:""},index:{type:Number,required:!0},numKeywords:{type:Number,default:0}},setup(e){return{keywordError:(0,n.Fl)((()=>(0,x.I)(`/keywords/${e.index}`)))}},emits:["moveDown","moveUp","removePressed","update"]});var q=r(4842),C=r(2165),Z=r(7518),j=r.n(Z);U.render=K,U.__scopeId="data-v-3815b80e";const D=U;j()(U,"components",{QInput:q.Z,QBtn:C.Z});var S=r(2064),E=r(1364),A=r(4009),_=function(e,o,r,n){function d(e){return e instanceof r?e:new r((function(o){o(e)}))}return new(r||(r=Promise))((function(r,t){function s(e){try{i(n.next(e))}catch(o){t(o)}}function a(e){try{i(n["throw"](e))}catch(o){t(o)}}function i(e){e.done?r(e.value):d(e.value).then(s,a)}i((n=n.apply(e,o||[])).next())}))};const H=(0,n.aZ)({name:"ScreenKeywords",components:{SchemaGuideLink:k.Z,Stepper:b.Z,StepperActions:f.Z,Keyword:D},setup(){const{keywords:e,setKeywords:o}=(0,E.Y)(),r=()=>_(this,void 0,void 0,(function*(){let r;const d="";r=void 0===e.value?[d]:[...e.value,d],o(r),yield(0,n.Y3)(),(0,A.O)()})),d=r=>{if(void 0!==e.value){const n=[...e.value];n.splice(r,1),o(n),Array.isArray(n)&&0===n.length&&o(void 0)}},t=(r,n)=>{if(void 0!==e.value){const d=[...e.value];d[r]=n,o(d)}};return{addKeyword:r,keywords:e,moveDown:S.v,moveUp:S.A,removeKeyword:d,setKeyword:t,setKeywords:o,keywordsErrors:(0,n.Fl)((()=>(0,x.I)("/keywords")))}}});var I=r(5607);H.render=p,H.__scopeId="data-v-1f3d2497";const P=H;j()(H,"components",{QBtn:C.Z,QBanner:I.Z})}}]);