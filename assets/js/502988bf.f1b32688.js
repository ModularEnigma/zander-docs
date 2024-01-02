"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5170],{5042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(5893),a=r(1151),o=r(4695),s=r(3913),l=r(2425);const i={title:"GET web/logout",description:"Logout a user and destroy their session.",sidebar_label:"Logout user",slug:"logout",sidebar_position:2},u="GET web/logout",c={id:"products/zander/api/web/logout",title:"GET web/logout",description:"Logout a user and destroy their session.",source:"@site/docs/products/zander/api/web/logout.mdx",sourceDirName:"products/zander/api/web",slug:"/products/zander/api/web/logout",permalink:"/docs/products/zander/api/web/logout",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/web/logout.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"GET web/logout",description:"Logout a user and destroy their session.",sidebar_label:"Logout user",slug:"logout",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Login user",permalink:"/docs/products/zander/api/web/login"},next:{title:"Get Configuration",permalink:"/docs/products/zander/api/web/configuration"}},d={},p=[{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"get-weblogout",children:[(0,n.jsx)(o.Z,{color:"#46AF00",children:"GET"})," ",(0,n.jsx)(t.code,{children:"web/logout"})]}),"\n",(0,n.jsx)(t.p,{children:"Logout a user and destroy their session."}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"info",children:(0,n.jsx)(t.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Deprecated. This will be removed in a later update."})}),"\n",(0,n.jsx)(s.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"}],children:(0,n.jsxs)(l.Z,{value:"first",children:[(0,n.jsx)(t.h2,{id:"response",children:"Response"}),(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"TODO: This is not the behaviour of the implementation at the moment."})})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "success": true\n}\n'})}),(0,n.jsx)(t.p,{children:"shadowolfyt is now logged out to the website."})]})})]})}function b(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2425:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var n=r(9275);const a={tabItem:"tabItem__kUE"};var o=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},3913:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(7294),a=r(9275),o=r(5944),s=r(6550),l=r(469),i=r(2434),u=r(2398),c=r(3088);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(2389);const g={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var v=r(5893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},4695:(e,t,r)=>{r.d(t,{Z:()=>a});r(7294);var n=r(5893);const a=e=>{let{children:t,color:r}=e;return(0,n.jsx)("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:t})}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var n=r(7294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);