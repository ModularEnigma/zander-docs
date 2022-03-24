"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8763],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7462),a=r(7294),o=r(2389),s=r(3725),l=r(6010),i="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),w=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,a.useState)(b),_=N[0],T=N[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==_&&h.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,r=O.indexOf(t),n=h[r].value;n!==_&&(x(t),T(n),null!=m&&y(m,n))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},4695:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},9687:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=r(4695),l=r(9877),i=r(8215),u=["components"],c={title:"POST web/register/create",description:"Create a new registration for a user.",sidebar_label:"Register user",slug:"register/create",sidebar_position:84},p='<Highlight color="',d={unversionedId:"api/web/register-create",id:"api/web/register-create",title:"POST web/register/create",description:"Create a new registration for a user.",source:"@site/docs/api/web/register-create.mdx",sourceDirName:"api/web",slug:"/api/web/register/create",permalink:"/docs/api/web/register/create",editUrl:"https://github.com/ModularEnigma/zander-docs/tree/main/packages/create-docusaurus/templates/shared/docs/api/web/register-create.mdx",tags:[],version:"current",sidebarPosition:84,frontMatter:{title:"POST web/register/create",description:"Create a new registration for a user.",sidebar_label:"Register user",slug:"register/create",sidebar_position:84},sidebar:"tutorialSidebar",previous:{title:"Cast vote",permalink:"/docs/api/vote/cast"},next:{title:"Verify registration",permalink:"/docs/api/web/register/verify"}},m={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2},{value:"Response",id:"response-2",level:2},{value:"Response",id:"response-3",level:2}],v={toc:f};function h(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-webregistercreate"},(0,o.kt)(s.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"web/register/create")),(0,o.kt)("p",null,"Create a new registration for a user."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"username")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"email")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","Email of the requested user."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"password")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","Password that user has inserted."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Never logged in",value:"second"},{label:"Email in use",value:"third"},{label:"Mismatched password",value:"fourth"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "email": "shadowolf@craftingforchrist.net",\n    "password": "______",\n    "confirmPassword": "______"\n}\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "You are now successfully registered. Please go back and login to get started!"\n}\n')),(0,o.kt)("p",null,"A new account for user shadowolfyt has been created. This will initiate the\nverification process (",(0,o.kt)("em",{parentName:"p"},"TODO: Clarification on whether is the case"),").")),(0,o.kt)(i.Z,{value:"second",mdxType:"TabItem"},(0,o.kt)("p",null,"When shadowolfyt has not played on the Minecraft server before"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "email": "shadowolf@craftingforchrist.net",\n    "password": "______",\n    "confirmPassword": "______"\n}\n')),(0,o.kt)("h2",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "You have not logged in before. You are required to login before becoming a community site member. You can jump on and play here: <url>/play"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO"))),(0,o.kt)(i.Z,{value:"third",mdxType:"TabItem"},(0,o.kt)("p",null,"When the email ",(0,o.kt)("inlineCode",{parentName:"p"},"shadowolf@craftingforchrist.net")," is already being used for\nanother account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "email": "shadowolf@craftingforchrist.net",\n    "password": "______",\n    "confirmPassword": "______"\n}\n')),(0,o.kt)("h2",{id:"response-2"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "The email you have provided is already in use, please enter another email and try again."\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO"))),(0,o.kt)(i.Z,{value:"fourth",mdxType:"TabItem"},(0,o.kt)("p",null,"When the password and confirmPassword do not match."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "email": "shadowolf@craftingforchrist.net",\n    "password": "___a___",\n    "confirmPassword": "___b___"\n}\n')),(0,o.kt)("h2",{id:"response-3"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "The password you have provided does not match. Please try again."\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))))}h.isMDXComponent=!0}}]);