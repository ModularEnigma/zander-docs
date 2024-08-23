"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8017],{9489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(4848),a=r(8453),o=r(1944);r(1470),r(9365);const i={title:"GET web/configuration",description:"Obtain site configuration for the application.",sidebar_label:"Get Configuration",slug:"configuration",sidebar_position:3},s="GET web/configuration",u={id:"products/zander/api/web/configuration",title:"GET web/configuration",description:"Obtain site configuration for the application.",source:"@site/docs/products/zander/api/web/configuration.mdx",sourceDirName:"products/zander/api/web",slug:"/products/zander/api/web/configuration",permalink:"/docs/products/zander/api/web/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/web/configuration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"GET web/configuration",description:"Obtain site configuration for the application.",sidebar_label:"Get Configuration",slug:"configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Logout user",permalink:"/docs/products/zander/api/web/logout"},next:{title:"Get Statistics",permalink:"/docs/products/zander/api/web/statistics"}},l={},c=[{value:"Examples",id:"examples",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"get-webconfiguration",children:[(0,n.jsx)(o.A,{color:"#46AF00",children:"GET"})," ",(0,n.jsx)(t.code,{children:"web/configuration"})]})}),"\n",(0,n.jsx)(t.p,{children:"Obtain site configuration for the application."}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"info",children:(0,n.jsx)(t.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var n=r(8215);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),a=r(8215),o=r(3104),i=r(6347),s=r(205),u=r(7485),l=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,d]=f({queryString:r,groupId:a}),[h,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=l??h;return b({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==n&&(l(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},1944:(e,t,r)=>{r.d(t,{A:()=>a});r(6540);var n=r(4848);const a=e=>{let{children:t,color:r}=e;return(0,n.jsx)("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:t})}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(6540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);