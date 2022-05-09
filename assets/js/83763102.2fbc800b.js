"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4035],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),r=t(7294),s=t(2389),l=t(3725),i=t(6010),o="tabItem_LplD";function u(e){var n,t,s,u=e.lazy,p=e.block,m=e.defaultValue,c=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=v[0])?void 0:s.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(b),T=w[0],O=w[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=y[d];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&O(j)}var C=function(e){var n=e.currentTarget,t=x.indexOf(n),a=h[t].value;a!==T&&(E(n),O(a),null!=d&&N(d,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var n=e.value,t=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:C,onClick:C},s,{className:(0,i.Z)("tabs__item",o,null==s?void 0:s.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,s.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},4695:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.color;return a.createElement("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},n)}},8433:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return f}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),l=t(4695),i=t(9877),o=t(8215),u=["components"],p={title:"POST punishment/issue",description:"Issues a punishment to a user.",sidebar_label:"Issue punishment",slug:"issue",sidebar_position:43},m='<Highlight color="',c={unversionedId:"api/punishment/issue",id:"api/punishment/issue",title:"POST punishment/issue",description:"Issues a punishment to a user.",source:"@site/docs/api/punishment/issue.mdx",sourceDirName:"api/punishment",slug:"/api/punishment/issue",permalink:"/docs/api/punishment/issue",editUrl:"https://github.com/ModularEnigma/zander-docs/tree/main/packages/create-docusaurus/templates/shared/docs/api/punishment/issue.mdx",tags:[],version:"current",sidebarPosition:43,frontMatter:{title:"POST punishment/issue",description:"Issues a punishment to a user.",sidebar_label:"Issue punishment",slug:"issue",sidebar_position:43},sidebar:"tutorialSidebar",previous:{title:"Delete server",permalink:"/docs/api/server/delete"},next:{title:"Delete punishment",permalink:"/docs/api/punishment/delete"}},d={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2},{value:"Response",id:"response-2",level:2},{value:"Response",id:"response-3",level:2}],v={toc:f};function h(e){var n=e.components,t=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"post-punishmentissue"},(0,s.kt)(l.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,s.kt)("inlineCode",{parentName:"h1"},"punishment/issue")),(0,s.kt)("p",null,"Issues a punishment to a user."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"playerUsername")," ",(0,s.kt)("em",{parentName:"p"},"string"),(0,s.kt)("br",{parentName:"p"}),"\n","Username of the punished user."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"staffUsername")," ",(0,s.kt)("em",{parentName:"p"},"string"),(0,s.kt)("br",{parentName:"p"}),"\n","Username of the punishing Staff Member."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"platform")," ",(0,s.kt)("em",{parentName:"p"},"string"),(0,s.kt)("br",{parentName:"p"}),"\n","Specify the platform to be punished from (server/discord)."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"type")," ",(0,s.kt)("em",{parentName:"p"},"string"),(0,s.kt)("br",{parentName:"p"}),"\n","Type of punishment to issue (warn/kick/tempBan/ban/ipBan)."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"length")," ",(0,s.kt)("strong",{parentName:"p"},"optional")," ",(0,s.kt)("em",{parentName:"p"},"string"),(0,s.kt)("br",{parentName:"p"}),"\n","The length of the punishment (if applicable)."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"reason")," ",(0,s.kt)("em",{parentName:"p"},"string"),(0,s.kt)("br",{parentName:"p"}),"\n","Reason for the punishement."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)(i.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid platform",value:"second"},{label:"Invalid type",value:"third"},{label:"Invalid length for type",value:"fourth"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"first",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "playerUsername": "shadowolfyt",\n    "staffUsername": :"Camemes",\n    "platform": "server",\n    "type": "kick",\n    "length": "5d",\n    "reason": "Bad System Admin"\n}\n')),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,s.kt)("p",null,"shadowolfyt has been kicked from the server for 5d by Camemes for being a 'Bad\nSystem Admin'.")),(0,s.kt)(o.Z,{value:"second",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "playerUsername": "shadowolfyt",\n    "staffUsername": :"Camemes",\n    "platform": "invalid-platform",\n    "type": "kick",\n    "length": "5d",\n    "reason": "Bad System Admin"\n}\n')),(0,s.kt)("h2",{id:"response-1"},"Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"TODO"))),(0,s.kt)(o.Z,{value:"third",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "playerUsername": "shadowolfyt",\n    "staffUsername": :"Camemes",\n    "platform": "server",\n    "type": "invalid-type",\n    "length": "5d",\n    "reason": "Bad System Admin"\n}\n')),(0,s.kt)("h2",{id:"response-2"},"Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"TODO"))),(0,s.kt)(o.Z,{value:"fourth",mdxType:"TabItem"},(0,s.kt)("p",null,"When issuing a kick, a length must be included. Bans do not require a length and\nthus the length parameter does not need to be included."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "playerUsername": "shadowolfyt",\n    "staffUsername": :"Camemes",\n    "platform": "server",\n    "type": "kick",\n    "reason": "Bad System Admin"\n}\n')),(0,s.kt)("h2",{id:"response-3"},"Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"TODO")))))}h.isMDXComponent=!0}}]);