"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[210],{8150:(t,e,n)=>{n.d(e,{g:()=>o});var a=n(1959),l=n(3673);const s=(0,a.iH)(1);function o(){return{step:(0,l.Fl)((()=>s.value)),next:()=>{s.value=s.value+1},previous:()=>{s.value=s.value-1},goto:t=>{s.value=t}}}},2751:(t,e,n)=>{n.d(e,{Z:()=>f});var a=n(3673);const l={class:"row action-buttons"},s={class:"col"},o={class:"col q-mr-lg",align:"right"};function u(t,e,n,u,c,r){const p=(0,a.up)("q-btn"),i=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",l,[(0,a.Wm)("div",s,[(0,a.Wm)(p,{"no-caps":"",flat:"",onClick:t.navigatePrevious,color:"",label:"Back"},null,8,["onClick"])]),(0,a.Wm)("div",o,[(0,a.Wm)(i,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{"no-caps":"",flat:"",color:"",label:"Finish",to:"/finish"}),(0,a.Wm)(p,{"no-caps":"",onClick:t.navigateNext,color:"grey-6",label:"Next"},null,8,["onClick"])])),_:1})])])}var c=n(9582),r=n(8150);const p=(0,a.aZ)({name:"StepperActions",setup(){const t=(0,r.g)(),e=(0,c.tv)(),n=()=>{t.next();const n=`/${t.step.value}`;return e.push({path:n})},a=()=>{t.previous();const n=`/${t.step.value}`;return e.push({path:n})},l=n=>{t.goto(n);const a=`/${t.step.value}`;return e.push({path:a})};return{step:t,navigateNext:n,navigatePrevious:a,navigateTo:l}}});var i=n(8240),m=n(6375),v=n(7518),d=n.n(v);p.render=u;const f=p;d()(p,"components",{QBtn:i.Z,QBtnGroup:m.Z})},210:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var a=n(3673);const l=(0,a.Wm)("div",{class:"text-h4"}," Authors page ",-1);function s(t,e,n,s,o,u){const c=(0,a.up)("q-skeleton"),r=(0,a.up)("q-item-label"),p=(0,a.up)("q-item-section"),i=(0,a.up)("q-item"),m=(0,a.up)("q-card-section"),v=(0,a.up)("q-card"),d=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)("div",null,[l,(0,a.Wm)(v,{flat:"",class:"secondary q-mt-xl q-pa-lg"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{type:"text"})])),_:1}),(0,a.Wm)(r,{caption:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{type:"text"})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c,{height:"200px",square:""}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{type:"text",class:"text-subtitle1"}),(0,a.Wm)(c,{type:"text",width:"50%",class:"text-subtitle1"}),(0,a.Wm)(c,{type:"text",class:"text-caption"})])),_:1})])),_:1}),(0,a.Wm)(d)])}var o=n(2751);const u=(0,a.aZ)({name:"PageAuthors",components:{StepperActions:o.Z},setup(){return{}}});var c=n(151),r=n(3414),p=n(2035),i=n(2350),m=n(4103),v=n(5589),d=n(7518),f=n.n(d);u.render=s;const g=u;f()(u,"components",{QCard:c.Z,QItem:r.Z,QItemSection:p.Z,QItemLabel:i.Z,QSkeleton:m.ZP,QCardSection:v.Z})}}]);