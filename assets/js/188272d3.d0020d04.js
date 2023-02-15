"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(v,l(l({ref:t},u),{},{components:r})):a.createElement(v,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7462),n=r(7294),o=r(6010),l=r(2389),s=r(7392),i=r(7094),c=r(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:m,groupId:v,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[O,T]=(0,n.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=v){const e=k[v];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,r=N.indexOf(t),a=h[r].value;a!==O&&(E(t),T(a),null!=v&&w(v,String(a)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:P,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{children:t,color:r}=e;return a.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4695),l=r(5488),s=r(5162);const i={title:"POST discord/leave",description:"Log a message to a Discord channel when user leaves the Network.",sidebar_label:"Log user leaving",slug:"leave",sidebar_position:5},c='<Highlight color="#FF6E26">POST</Highlight> `discord/leave`',u={unversionedId:"products/zander/api/discord/leave",id:"products/zander/api/discord/leave",title:"POST discord/leave",description:"Log a message to a Discord channel when user leaves the Network.",source:"@site/docs/products/zander/api/discord/leave.mdx",sourceDirName:"products/zander/api/discord",slug:"/products/zander/api/discord/leave",permalink:"/docs/products/zander/api/discord/leave",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/discord/leave.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"POST discord/leave",description:"Log a message to a Discord channel when user leaves the Network.",sidebar_label:"Log user leaving",slug:"leave",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Log user joining",permalink:"/docs/products/zander/api/discord/join"},next:{title:"Log server switch",permalink:"/docs/products/zander/api/discord/switch"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:p};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"post-discordleave"},(0,n.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"h1"},"discord/leave")),(0,n.kt)("p",null,"Log a message to a Discord channel when user leaves the Network."),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"username")," ",(0,n.kt)("em",{parentName:"p"},"string"),(0,n.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt"\n}\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,n.kt)("p",null,"A Discord message will be created that says,"),(0,n.kt)("p",null,'"\u274e  | ',(0,n.kt)("inlineCode",{parentName:"p"},"shadowolfyt"),' has left the Network."')),(0,n.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"TODO")))))}v.isMDXComponent=!0}}]);