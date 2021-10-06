"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[261],{1512:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var n=i(3673);const d=(0,n.HX)("data-v-c37d8a12");(0,n.dD)("data-v-c37d8a12");const r={class:"q-pa-md col-flex"},a=(0,n.Wm)("div",{class:"q-gutter-md title-field text-dark"},[(0,n.Wm)("p",{class:"q-mt-xl page-title"}," Identifiers ")],-1),s=(0,n.Uk)(" Add identifier ");(0,n.Cn)();const l=d(((e,t,i,l,o,u)=>{const p=(0,n.up)("IdentifierViewCard"),c=(0,n.up)("IdentifierEditCard"),v=(0,n.up)("q-btn"),m=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",r,[a,((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.identifiers,((i,d)=>((0,n.wg)(),(0,n.j4)("div",{key:d,class:"q-mb-md"},[e.editingId!==d?((0,n.wg)(),(0,n.j4)(p,{key:0,index:d,identifier:i,onEditPressed:()=>e.editingId=d},null,8,["index","identifier","onEditPressed"])):((0,n.wg)(),(0,n.j4)(c,(0,n.dG)({key:1,index:d},i,{onUpdateType:e.setIdentifierTypeField,onUpdateValue:e.setIdentifierValueField,onUpdateDescription:e.setIdentifierDescriptionField,onClosePressed:t[1]||(t[1]=()=>e.editingId=-1),onRemovePressed:e.removeIdentifier}),null,16,["index","onUpdateType","onUpdateValue","onUpdateDescription","onRemovePressed"]))])))),128)),(0,n.Wm)(v,{"no-caps":"",onClick:e.addIdentifier,color:"primary"},{default:d((()=>[s])),_:1},8,["onClick"])]),(0,n.Wm)(m)],64)}));var o=i(1959),u=i(415);i(246);const p={class:"row items-center no-wrap"},c={class:"q-gutter-md items-center no-wrap"},v={class:"q-gutter-md items-center no-wrap"};function m(e,t,i,d,r,a){const s=(0,n.up)("q-option-group"),l=(0,n.up)("q-input"),o=(0,n.up)("q-card-section"),u=(0,n.up)("q-btn"),m=(0,n.up)("q-card-actions"),f=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(f,{flat:"",bordered:"",class:"bg-formcard"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Wm)("div",p,[(0,n.Wm)(s,{inline:"",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":t[1]||(t[1]=t=>e.$emit("updateType","type",t))},null,8,["model-value","options"])]),(0,n.Wm)("div",c,[(0,n.Wm)(l,{"bg-color":"white",label:"Value",outlined:"",standout:"",dense:"","model-value":e.value,"onUpdate:modelValue":t[2]||(t[2]=t=>e.$emit("updateValue","value",t)),rules:[e.validateValue]},null,8,["model-value","rules"])]),(0,n.Wm)("div",v,[(0,n.Wm)(l,{"bg-color":"white",label:"Description",outlined:"",standout:"",dense:"","model-value":e.description,"onUpdate:modelValue":t[3]||(t[3]=t=>e.$emit("updateDescription","description",t)),rules:[e.validateDescription]},null,8,["model-value","rules"])])])),_:1}),(0,n.Wm)(m,{align:"between"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{icon:"delete",color:"negative",label:"Remove",dense:"",onClick:t[4]||(t[4]=t=>e.$emit("removePressed"))}),(0,n.Wm)(u,{icon:"close",label:"Close",dense:"",onClick:t[5]||(t[5]=t=>e.$emit("closePressed"))})])),_:1})])),_:1})}var f=i(4334);const w=(0,n.aZ)({name:"IdentifierEditCard",props:{index:{type:Number,required:!0},type:{type:String,default:""},value:{type:String,default:""},description:{type:String,default:""}},setup(e){const t={doi:(0,f.rk)("/definitions/identifier/anyOf/0/properties/value"),url:(0,f.rk)("/definitions/identifier/anyOf/1/properties/value"),swh:(0,f.rk)("/definitions/identifier/anyOf/2/properties/value"),other:(0,f.rk)("/definitions/identifier/anyOf/3/properties/value")};return{validateValue:i=>t[e.type](i),validateDescription:(0,f.zN)("/definitions/identifier-description"),typeOptions:[{label:"DOI",value:"doi"},{label:"URL",value:"url"},{label:"Software Heritage",value:"swh"},{label:"Other",value:"other"}]}},emits:["closePressed","removePressed","updateType","updateValue","updateDescription"]});var y=i(151),g=i(5589),b=i(7011),I=i(1206),W=i(9367),C=i(9892),k=i(7518),q=i.n(k);w.render=m;const h=w;q()(w,"components",{QCard:y.Z,QCardSection:g.Z,QOptionGroup:b.Z,QInput:I.Z,QCardActions:W.Z,QBtn:C.Z});var V=i(2323);const Z={class:"row items-center no-wrap"},O={class:"col-11"},j={class:"text-subtitle1"},x={class:"text-subtitle1"},D={class:"text-subtitle1"},P={class:"col-1"};function U(e,t,i,d,r,a){const s=(0,n.up)("q-btn"),l=(0,n.up)("q-card-section"),o=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(o,{flat:"",bordered:"",class:"bg-formcard",onMouseover:t[2]||(t[2]=t=>e.showEdit=!0),onMouseleave:t[3]||(t[3]=t=>e.showEdit=!1)},{default:(0,n.w5)((()=>[(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[(0,n.Wm)("div",Z,[(0,n.Wm)("div",O,[(0,n.Wm)("div",j,(0,V.zw)(e.identifier.type),1),(0,n.Wm)("div",x,(0,V.zw)(e.identifier.value),1),(0,n.Wm)("div",D,(0,V.zw)(e.identifier.description),1)]),(0,n.Wm)("div",P,[e.showEdit?((0,n.wg)(),(0,n.j4)(s,{key:0,color:"primary",round:"",flat:"",icon:"edit",onClick:t[1]||(t[1]=t=>e.$emit("editPressed"))})):(0,n.kq)("",!0)])])])),_:1})])),_:1})}const Q=(0,n.aZ)({name:"IdentifierViewCard",props:{index:{type:Number,required:!0},identifier:{type:Object,required:!0}},setup(){const e=(0,o.iH)(!1);return{showEdit:e}},emits:["editPressed"]});Q.render=U;const E=Q;q()(Q,"components",{QCard:y.Z,QCardSection:g.Z,QBtn:C.Z});var S=i(1364);const _=(0,n.aZ)({name:"Identifiers",components:{StepperActions:u.Z,IdentifierEditCard:h,IdentifierViewCard:E},setup(){const{identifiers:e,setIdentifiers:t}=(0,S.Y)(),i=(0,o.iH)(-1);return{identifiers:e,editingId:i,setIdentifierTypeField(n,d){const r=Object.assign({},e.value[i.value]);r.type=d,e.value[i.value]=r,t(e.value)},setIdentifierValueField(n,d){const r=Object.assign({},e.value[i.value]);r.value=d,e.value[i.value]=r,t(e.value)},setIdentifierDescriptionField(n,d){const r=Object.assign({},e.value[i.value]);r.description=d,e.value[i.value]=r,t(e.value)},removeIdentifier(){const n=[...e.value];n.splice(i.value,1),t(n),i.value=-1},addIdentifier(){const n={type:"doi",value:"",description:""},d=[...e.value,n];t(d),i.value=d.length-1}}}});_.render=l,_.__scopeId="data-v-c37d8a12";const F=_;q()(_,"components",{QBtn:C.Z})}}]);