"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(7462),a=r(7294),o=r(6010),l=r(6775),s=r(1980),i=r(7392),u=r(12);function c(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=i??f;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var b=r(2466),h=r(2389);const v="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=i[r].value;n!==l&&(c(t),s(n))},p=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},s,{className:(0,o.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function j(e){const t=(0,h.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},5418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4695),l=r(4866),s=r(5162);const i={title:"POST discord/join",description:"Log a message to a Discord channel when user joins the Network.",sidebar_label:"Log user joining",slug:"join",sidebar_position:4},u='<Highlight color="#FF6E26">POST</Highlight> discord/join',c={unversionedId:"products/zander/api/discord/join",id:"products/zander/api/discord/join",title:"POST discord/join",description:"Log a message to a Discord channel when user joins the Network.",source:"@site/docs/products/zander/api/discord/join.mdx",sourceDirName:"products/zander/api/discord",slug:"/products/zander/api/discord/join",permalink:"/docs/products/zander/api/discord/join",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/discord/join.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"POST discord/join",description:"Log a message to a Discord channel when user joins the Network.",sidebar_label:"Log user joining",slug:"join",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Delete application",permalink:"/docs/products/zander/api/application/delete"},next:{title:"Log user leaving",permalink:"/docs/products/zander/api/discord/leave"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-discordjoin"},(0,a.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"h1"},"discord/join")),(0,a.kt)("p",null,"Log a message to a Discord channel when user joins the Network."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"username")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","Users IGN."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt"\n}\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,a.kt)("p",null,"A Discord message will be created that says,"),(0,a.kt)("p",null,'"\u2611  | ',(0,a.kt)("inlineCode",{parentName:"p"},"shadowolfyt"),' has joined the Network."')),(0,a.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);