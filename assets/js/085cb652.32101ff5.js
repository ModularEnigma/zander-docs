"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5001],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),o=a(6010),l=a(2389),i=a(7392),p=a(7094),s=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:f,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,p.U)(),[O,T]=(0,n.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=g[f];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=w.indexOf(t),r=v[a].value;r!==O&&(E(t),T(r),null!=f&&N(f,String(r)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},4695:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=e=>{let{children:t,color:a}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},1417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),o=a(4695),l=a(5488),i=a(5162);const p={title:"POST application/create",description:"Create an application for users to apply for.",sidebar_label:"Create application",slug:"create",sidebar_position:1},s='<Highlight color="#FF6E26">POST</Highlight> `application/create`',c={unversionedId:"products/zander/api/application/create",id:"products/zander/api/application/create",title:"POST application/create",description:"Create an application for users to apply for.",source:"@site/docs/products/zander/api/application/create.mdx",sourceDirName:"products/zander/api/application",slug:"/products/zander/api/application/create",permalink:"/docs/products/zander/api/application/create",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/application/create.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"POST application/create",description:"Create an application for users to apply for.",sidebar_label:"Create application",slug:"create",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Get applications",permalink:"/docs/products/zander/api/application/get"},next:{title:"Edit application",permalink:"/docs/products/zander/api/application/edit"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"post-applicationcreate"},(0,n.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"h1"},"application/create")),(0,n.kt)("p",null,"Create an application for users to apply for."),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"displayName")," ",(0,n.kt)("em",{parentName:"p"},"string"),(0,n.kt)("br",{parentName:"p"}),"\n","The display name for the application."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"description")," ",(0,n.kt)("em",{parentName:"p"},"string"),(0,n.kt)("br",{parentName:"p"}),"\n","A short blurb of the application."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"displayIcon")," ",(0,n.kt)("em",{parentName:"p"},"string"),(0,n.kt)("br",{parentName:"p"}),"\n","The icon to display from FontAwesome."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"requirementsMarkdown")," ",(0,n.kt)("em",{parentName:"p"},"string"),(0,n.kt)("br",{parentName:"p"}),"\n","A link to a markdown file that renders the requirements for the role."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"redirectURL")," ",(0,n.kt)("em",{parentName:"p"},"string"),(0,n.kt)("br",{parentName:"p"}),"\n","The external URL to link the user to to complete commence the application process."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"position")," ",(0,n.kt)("em",{parentName:"p"},"integer"),(0,n.kt)("br",{parentName:"p"}),"\n","Which position should this application sit on the page"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"applicationStatus")," ",(0,n.kt)("em",{parentName:"p"},"integer"),(0,n.kt)("br",{parentName:"p"}),"\n","Whether the application is Open or Closed."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"first",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "displayName": "Developer",\n    "description": "Developers code stuff and sit down",\n    "displayIcon": "<url>",\n    "requirementsMarkdown": "<url>",\n    "redirectURL": "forms.google.com/<id>",\n    "position": 3\n}\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "The application Developer has been successfully created!"\n}\n')),(0,n.kt)("p",null,"A new application form has been created. ",(0,n.kt)("em",{parentName:"p"},"TODO: Where does form appear?"))),(0,n.kt)(i.Z,{value:"second",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);