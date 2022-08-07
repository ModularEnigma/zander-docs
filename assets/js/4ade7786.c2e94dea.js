"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:b,groupId:g,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=b?b:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[O,T]=(0,r.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==O&&f.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==O&&(x(t),T(a),null!=g&&N(g,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4695:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},3715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4695),l=n(5488),s=n(5162);const i={title:"POST knowledgebase/section/create",description:"Create a new knowledgebase section.",sidebar_label:"Create section",slug:"section/create",sidebar_position:9},c='<Highlight color="#FF6E26">POST</Highlight> `knowledgebase/section/create`',p={unversionedId:"products/zander/api/knowledgebase/section-create",id:"products/zander/api/knowledgebase/section-create",title:"POST knowledgebase/section/create",description:"Create a new knowledgebase section.",source:"@site/docs/products/zander/api/knowledgebase/section-create.mdx",sourceDirName:"products/zander/api/knowledgebase",slug:"/products/zander/api/knowledgebase/section/create",permalink:"/docs/products/zander/api/knowledgebase/section/create",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/knowledgebase/section-create.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"POST knowledgebase/section/create",description:"Create a new knowledgebase section.",sidebar_label:"Create section",slug:"section/create",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Get sections",permalink:"/docs/products/zander/api/knowledgebase/section/get"},next:{title:"Update section",permalink:"/docs/products/zander/api/knowledgebase/section/update"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}],m={toc:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"post-knowledgebasesectioncreate"},(0,r.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,r.kt)("inlineCode",{parentName:"h1"},"knowledgebase/section/create")),(0,r.kt)("p",null,"Create a new knowledgebase section."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sectionSlug")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","The unique identifier for the section."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sectionName")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","The display name for the section."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"description")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","A description to summarise the section"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sectionIcon")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","The Font Awesome icon to use on the section"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"position")," ",(0,r.kt)("em",{parentName:"p"},"integer"),(0,r.kt)("br",{parentName:"p"}),"\n","Where on the page it should it be displayed"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Duplicate sectionSlug",value:"second"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sectionSlug": "gettingStarted",\n    "sectionName": "Getting Started",\n    "description": "Just joined? Read these to get started on the Server",\n    "sectionIcon": "<url>",\n    "position": 3\n}\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,r.kt)("p",null,"A new section has been created with the name 'Getting Started'. The section will\nbe given the appropriate icon and description. ",(0,r.kt)("em",{parentName:"p"},"TODO: Clarification on how the\nknowledgebase works"),".")),(0,r.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,r.kt)("p",null,"When an section already exists with the articleSlug 'existing-sectionSlug'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sectionSlug": "existing-sectionSlug",\n    "sectionName": "Getting Started",\n    "description": "Just joined? Read these to get started on the Server",\n    "sectionIcon": "<url>",\n    "position": 3\n}\n')),(0,r.kt)("h2",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TODO")))))}b.isMDXComponent=!0}}]);