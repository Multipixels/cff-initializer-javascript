"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[935],{1877:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var i=t(3673);const s=(0,i.HX)("data-v-5efa1906");(0,i.dD)("data-v-5efa1906");const o={id:"metroline"},l={id:"form"},c=(0,i.Wm)("div",{id:"form-title"},[(0,i.Wm)("h1",{class:"page-title"}," License ")],-1),a={id:"form-content"},r=(0,i.Wm)("p",{class:"question"}," What is the license of the work? ",-1),d={id:"form-button-bar"};(0,i.Cn)();const u=s(((e,n,t,s,u,p)=>{const m=(0,i.up)("Stepper"),f=(0,i.up)("q-select"),v=(0,i.up)("StepperActions");return(0,i.wg)(),(0,i.j4)(i.HY,null,[(0,i.Wm)("div",o,[(0,i.Wm)(m)]),(0,i.Wm)("div",l,[c,(0,i.Wm)("div",a,[r,(0,i.Wm)(f,{"bg-color":"white",label:"license",outlined:"",standout:"","use-input":"","model-value":e.license,options:e.options,rules:[e.validateLicense],onFilter:e.filterFn,"onUpdate:modelValue":e.setLicense},null,8,["model-value","options","rules","onFilter","onUpdate:modelValue"])]),(0,i.Wm)("div",d,[(0,i.Wm)(v)])])],64)}));var p=t(1959),m=t(3351),f=t(1364),v=t(6298),W=t(5264),L=t(2902);const h=(0,i.aZ)({name:"ScreenLicense",components:{Stepper:W.Z,StepperActions:L.Z},setup(){const e=(0,f.Y)(),n=v.definitions["license-enum"].enum,t=(0,p.iH)(n);return{license:e.license,licenses:n,options:t,setLicense:e.setLicense,validateLicense:(0,m.zN)("/definitions/license-enum"),filterFn(e,i){i(""!==e?()=>{const i=e.toLowerCase();t.value=n.filter((e=>e.toLowerCase().indexOf(i)>-1))}:()=>{t.value=n})}}}});var w=t(7217),b=t(7518),S=t.n(b);h.render=u,h.__scopeId="data-v-5efa1906";const k=h;S()(h,"components",{QSelect:w.Z})}}]);