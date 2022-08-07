"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),s=r(6010),o=r(2389),l=r(7392),i=r(7094),u=r(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r;const{lazy:o,block:p,defaultValue:m,values:f,groupId:b,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,l.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?t:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:w}=(0,i.U)(),[T,N]=(0,a.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=O[b];null!=e&&e!==T&&h.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,r=E.indexOf(t),n=h[r].value;n!==T&&(x(t),N(n),null!=b&&w(b,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;r=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;r=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:j,onFocus:P,onClick:P},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),s=r(4695),o=r(5488),l=r(5162);const i={title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",sidebar_label:"Destroy session",slug:"destroy",sidebar_position:28},u='<Highlight color="#FF6E26">POST</Highlight> `session/destroy`',c={unversionedId:"products/zander/api/session/destroy",id:"products/zander/api/session/destroy",title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",source:"@site/docs/products/zander/api/session/destroy.mdx",sourceDirName:"products/zander/api/session",slug:"/products/zander/api/session/destroy",permalink:"/docs/products/zander/api/session/destroy",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/session/destroy.mdx",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",sidebar_label:"Destroy session",slug:"destroy",sidebar_position:28},sidebar:"tutorialSidebar",previous:{title:"Update for server switch",permalink:"/docs/products/zander/api/session/switch"},next:{title:"Create user",permalink:"/docs/products/zander/api/user/create"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}],m={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-sessiondestroy"},(0,a.kt)(s.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"h1"},"session/destroy")),(0,a.kt)("p",null,"Update session record to indicate end of session and logout."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","The UUID for the Minecraft user."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"No session",value:"second"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"first",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,a.kt)("p",null,"shadowolfyt's session has been destroyed.")),(0,a.kt)(l.Z,{value:"second",mdxType:"TabItem"},(0,a.kt)("p",null,"When shadowolfyt does not have an ongoing session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n')),(0,a.kt)("h2",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);