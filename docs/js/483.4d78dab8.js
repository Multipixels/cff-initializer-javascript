"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[483],{1364:(e,t,s)=>{s.d(t,{n:()=>r});var i=s(1959),n=s(3673),a=s(2883),o=s.n(a);const l=(0,i.iH)({"cff-version":"1.2.0",type:"software",identifiers:[{type:"doi",value:"10.0000/FIXME",description:"This is the description of the DOI"},{type:"swh",value:"some swh identifier"},{type:"url",value:"https://github.com/citation-file-format/cffinit",description:"This is the description of the URL"},{type:"other",value:"custom identifiers",description:"This is the description of the custom identifier"}],keywords:["first keyword","second keyword","third"]});function r(){return{asYAML:(0,n.Fl)((()=>o().dump(l.value,{replacer:u}))),cff:(0,n.Fl)((()=>l.value)),commit:(0,n.Fl)((()=>l.value.commit)),date_released:(0,n.Fl)((()=>l.value.date_released)),identifiers:(0,n.Fl)((()=>l.value.identifiers)),keywords:(0,n.Fl)((()=>l.value.keywords)),message:(0,n.Fl)((()=>l.value.message)),title:(0,n.Fl)((()=>l.value.title)),type:(0,n.Fl)((()=>l.value.type)),version:(0,n.Fl)((()=>l.value.version)),setCommit:e=>{l.value.commit=e},setDateReleased:e=>{l.value.date_released=e},setIdentifiers:e=>{l.value.identifiers=e},setKeywords:e=>{l.value.keywords=e},setMessage:e=>{l.value.message=e},setTitle:e=>{l.value.title=e},setType:e=>{l.value.type=e},setVersion:e=>{l.value.version=e}}}const u=(e,t)=>{if(console.log("hideEmptyKeys: ",e,t),""!==t)return t}},8150:(e,t,s)=>{s.d(t,{g:()=>o});var i=s(1959),n=s(3673);const a=(0,i.iH)(1);function o(){return{step:(0,n.Fl)((()=>a.value)),next:()=>{a.value=a.value+1},previous:()=>{a.value=a.value-1},goto:e=>{a.value=e}}}},2751:(e,t,s)=>{s.d(t,{Z:()=>m});var i=s(3673);const n={class:"row action-buttons"},a={class:"col"},o={class:"col q-mr-lg",align:"right"};function l(e,t,s,l,r,u){const c=(0,i.up)("q-btn"),d=(0,i.up)("q-btn-group");return(0,i.wg)(),(0,i.j4)("div",n,[(0,i.Wm)("div",a,[(0,i.Wm)(c,{"no-caps":"",flat:"",onClick:e.navigatePrevious,color:"",label:"Back"},null,8,["onClick"])]),(0,i.Wm)("div",o,[(0,i.Wm)(d,{flat:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{"no-caps":"",flat:"",color:"",label:"Finish",to:"/finish"}),(0,i.Wm)(c,{"no-caps":"",onClick:e.navigateNext,color:"grey-6",label:"Next"},null,8,["onClick"])])),_:1})])])}var r=s(9582),u=s(8150);const c=(0,i.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,r.tv)(),s=()=>{e.next();const s=`/${e.step.value}`;return t.push({path:s})},i=()=>{e.previous();const s=`/${e.step.value}`;return t.push({path:s})},n=s=>{e.goto(s);const i=`/${e.step.value}`;return t.push({path:i})};return{step:e,navigateNext:s,navigatePrevious:i,navigateTo:n}}});var d=s(8240),v=s(6375),p=s(7518),f=s.n(p);c.render=l;const m=c;f()(c,"components",{QBtn:d.Z,QBtnGroup:v.Z})},483:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(3673);const n=(0,i.HX)("data-v-2d9d1fde");(0,i.dD)("data-v-2d9d1fde");const a=(0,i.Wm)("div",{class:"q-pa-md"},[(0,i.Wm)("div",{class:"q-gutter-md title-field text-dark"},[(0,i.Wm)("p",{class:"q-mt-xl text-h5"}," Identifiers ")])],-1);(0,i.Cn)();const o=n(((e,t,s,n,o,l)=>{const r=(0,i.up)("StepperActions");return(0,i.wg)(),(0,i.j4)(i.HY,null,[a,(0,i.Wm)(r)],64)}));var l=s(2751),r=s(1364);const u=(0,i.aZ)({name:"PageIdentifiers",components:{StepperActions:l.Z},setup(){const e=(0,r.n)();return{identifiers:e.identifiers,setIdentifiers:e.setIdentifiers}}});u.render=o,u.__scopeId="data-v-2d9d1fde";const c=u}}]);