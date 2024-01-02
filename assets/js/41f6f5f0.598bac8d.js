"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[745],{4108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(5893),r=a(1151),l=a(4695),s=a(3913),i=a(2425);const o={title:"GET application/get",description:"Get a list of all the application forms.",sidebar_label:"Get applications",slug:"get",sidebar_position:0},u="GET application/get",c={id:"products/zander/api/application/get",title:"GET application/get",description:"Get a list of all the application forms.",source:"@site/docs/products/zander/api/application/get.mdx",sourceDirName:"products/zander/api/application",slug:"/products/zander/api/application/get",permalink:"/docs/products/zander/api/application/get",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/application/get.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GET application/get",description:"Get a list of all the application forms.",sidebar_label:"Get applications",slug:"get",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Delete announcement",permalink:"/docs/products/zander/api/announcement/delete"},next:{title:"Create application",permalink:"/docs/products/zander/api/application/create"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}];function h(e){const t={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"get-applicationget",children:[(0,n.jsx)(l.Z,{color:"#46AF00",children:"GET"})," ",(0,n.jsx)(t.code,{children:"application/get"})]}),"\n",(0,n.jsx)(t.p,{children:"Get a list of all the application forms."}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"info",children:(0,n.jsx)(t.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"id"})," ",(0,n.jsx)(t.strong,{children:"optional"})," ",(0,n.jsx)(t.em,{children:"integer"}),(0,n.jsx)(t.br,{}),"\n","The id of the application to view."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,n.jsx)(s.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"}],children:(0,n.jsxs)(i.Z,{value:"first",children:[(0,n.jsx)(t.h2,{id:"response",children:"Response"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n'})}),(0,n.jsx)(t.p,{children:"Returns a list of application forms."})]})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2425:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(9275);const r={tabItem:"tabItem__kUE"};var l=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},3913:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7294),r=a(9275),l=a(5944),s=a(6550),i=a(469),o=a(2434),u=a(2398),c=a(3088);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=f({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=u??m;return h({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(2389);const v={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var g=a(5893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),r=i[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},4695:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var n=a(5893);const r=e=>{let{children:t,color:a}=e;return(0,n.jsx)("span",{style:{backgroundColor:a,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:t})}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var n=a(7294);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);