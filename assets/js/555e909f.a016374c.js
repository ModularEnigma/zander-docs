"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),i=a(6010),o=a(2389),l=a(7392),p=a(7094),s=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:f,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[O,T]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==O&&(E(t),T(n),null!=f&&N(f,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:C,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},4695:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const r=e=>{let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},8322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(4695),o=a(5488),l=a(5162);const p={title:"POST application/edit",description:"Edit an existing application for users to apply for.",sidebar_label:"Edit application",slug:"edit",sidebar_position:2},s='<Highlight color="#FF6E26">POST</Highlight> `application/edit`',c={unversionedId:"products/zander/api/application/edit",id:"products/zander/api/application/edit",title:"POST application/edit",description:"Edit an existing application for users to apply for.",source:"@site/docs/products/zander/api/application/edit.mdx",sourceDirName:"products/zander/api/application",slug:"/products/zander/api/application/edit",permalink:"/docs/products/zander/api/application/edit",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/application/edit.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"POST application/edit",description:"Edit an existing application for users to apply for.",sidebar_label:"Edit application",slug:"edit",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create application",permalink:"/docs/products/zander/api/application/create"},next:{title:"Delete application",permalink:"/docs/products/zander/api/application/delete"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"post-applicationedit"},(0,r.kt)(i.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,r.kt)("inlineCode",{parentName:"h1"},"application/edit")),(0,r.kt)("p",null,"Edit an existing application for users to apply for."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"displayName")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","The display name for the application."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"description")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","A short blurb of the application."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"displayIcon")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","The icon to display from FontAwesome."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"requirementsMarkdown")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","A link to a markdown file that renders the requirements for the role."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redirectURL")," ",(0,r.kt)("em",{parentName:"p"},"string"),(0,r.kt)("br",{parentName:"p"}),"\n","The external URL to link the user to to complete commence the application process."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"position")," ",(0,r.kt)("em",{parentName:"p"},"integer"),(0,r.kt)("br",{parentName:"p"}),"\n","Which position should this application sit on the page"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"applicationStatus")," ",(0,r.kt)("em",{parentName:"p"},"integer"),(0,r.kt)("br",{parentName:"p"}),"\n","Whether the application is Open or Closed."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Missing applicationId",value:"second"},{label:"Invalid",value:"third"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "applicationId": 12,\n    "displayName": "Developer",\n    "description": "Developers code stuff and sit down",\n    "displayIcon": "<url>",\n    "requirementsMarkdown": "<url>",\n    "redirectURL": "forms.google.com/<id>",\n    "position": 3\n}\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"create"},(0,r.kt)("inlineCode",{parentName:"a"},"application/create")))),(0,r.kt)(l.Z,{value:"second",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "applicationId": 000000,\n    "displayName": "Developer",\n    "description": "Developers code stuff and sit down",\n    "displayIcon": "<url>",\n    "requirementsMarkdown": "<url>",\n    "redirectURL": "forms.google.com/<id>",\n    "position": 3\n}\n')),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TODO"))),(0,r.kt)(l.Z,{value:"third",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);