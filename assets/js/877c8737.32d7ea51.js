"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),s=r(7392),p=r(7094),i=r(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:m,groupId:b,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,s.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[T,O]=(0,a.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&v.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,r=w.indexOf(t),n=v[r].value;n!==T&&(E(t),O(n),null!=b&&N(b,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]??w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},2649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(4695),o=r(5488),s=r(5162);const p={title:"GET report/get",description:"Get a list of all current Network reports.",sidebar_label:"Get reports",slug:"get",sidebar_position:19},i='<Highlight color="#46AF00">GET</Highlight> `report/get`',u={unversionedId:"products/zander/api/report/get",id:"products/zander/api/report/get",title:"GET report/get",description:"Get a list of all current Network reports.",source:"@site/docs/products/zander/api/report/get.mdx",sourceDirName:"products/zander/api/report",slug:"/products/zander/api/report/get",permalink:"/docs/products/zander/api/report/get",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/report/get.mdx",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"GET report/get",description:"Get a list of all current Network reports.",sidebar_label:"Get reports",slug:"get",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Get punishments",permalink:"/docs/products/zander/api/punishment/get"},next:{title:"Report player",permalink:"/docs/products/zander/api/report/create"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2},{value:"Response",id:"response-2",level:2},{value:"Response",id:"response-3",level:2}],m={toc:d};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-reportget"},(0,a.kt)(l.Z,{color:"#46AF00",mdxType:"Highlight"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"h1"},"report/get")),(0,a.kt)("p",null,"Get a list of all current Network reports."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"reportId")," ",(0,a.kt)("strong",{parentName:"p"},"optional")," ",(0,a.kt)("em",{parentName:"p"},"integer"),(0,a.kt)("br",{parentName:"p"}),"\n","Filter by matching report ID."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"username")," ",(0,a.kt)("strong",{parentName:"p"},"optional")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","Filter by matching user IGN."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Using reportId",value:"second"},{label:"Using username",value:"third"},{label:"Missing reportId",value:"fourth"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n')),(0,a.kt)("p",null,"A list of all reports has been returned.")),(0,a.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reportId": 12\n}\n')),(0,a.kt)("h2",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n')),(0,a.kt)("p",null,"The report with id 12 has been returned.")),(0,a.kt)(s.Z,{value:"third",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt"\n}\n')),(0,a.kt)("h2",{id:"response-2"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n')),(0,a.kt)("p",null,"A list of reports (",(0,a.kt)("em",{parentName:"p"},"TODO: Clarification: from user OR of user"),") has been\nreturned.")),(0,a.kt)(s.Z,{value:"fourth",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reportId": 000000\n}\n')),(0,a.kt)("h2",{id:"response-3"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")))))}b.isMDXComponent=!0}}]);