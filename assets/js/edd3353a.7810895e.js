"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4817],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7462),r=t(7294),o=t(2389),i=t(3725),l=t(6010),u="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(k),T=w[0],O=w[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==T&&b.some((function(e){return e.value===C}))&&O(C)}var j=function(e){var n=e.currentTarget,t=x.indexOf(n),a=b[t].value;a!==T&&(E(n),O(a),null!=d&&N(d,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},4695:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.color;return a.createElement("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},n)}},3109:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return f}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(4695),l=t(9877),u=t(8215),s=["components"],c={title:"POST announcement/create",description:"Create an announcement on Network platforms.",sidebar_label:"Create announcement",slug:"create",sidebar_position:0},p='<Highlight color="',m={unversionedId:"api/announcement/create",id:"api/announcement/create",title:"POST announcement/create",description:"Create an announcement on Network platforms.",source:"@site/docs/api/announcement/create.mdx",sourceDirName:"api/announcement",slug:"/api/announcement/create",permalink:"/docs/api/announcement/create",editUrl:"https://github.com/ModularEnigma/zander-docs/tree/main/packages/create-docusaurus/templates/shared/docs/api/announcement/create.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"POST announcement/create",description:"Create an announcement on Network platforms.",sidebar_label:"Create announcement",slug:"create",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/contributing/documentation"},next:{title:"Edit announcement",permalink:"/docs/api/announcement/edit"}},d={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}],v={toc:f};function b(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-announcementcreate"},(0,o.kt)(i.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"announcement/create")),(0,o.kt)("p",null,"Create an announcement on Network platforms."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"announcementSlug")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","Unique Identifier."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"body")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","The text or message you would like to send in the format you specified."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"motd")," ",(0,o.kt)("em",{parentName:"p"},"boolean"),(0,o.kt)("br",{parentName:"p"}),"\n","Is the announcement meant for the message of the day?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tips")," ",(0,o.kt)("em",{parentName:"p"},"boolean"),(0,o.kt)("br",{parentName:"p"}),"\n","Is this an announcement to rotate in game?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"web")," ",(0,o.kt)("em",{parentName:"p"},"boolean"),(0,o.kt)("br",{parentName:"p"}),"\n","Is this a website banner announcement to display globally?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"link")," ",(0,o.kt)("strong",{parentName:"p"},"optional")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","If tips or web is selected, when clicked, where should it redirect the user?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"motdFormat")," ",(0,o.kt)("strong",{parentName:"p"},"optional")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","If motd is selected, what is the & colour specific format?"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Message of the day",value:"second"},{label:"Invalid",value:"third"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "announcementSlug": "joinCommunityDiscord",\n    "body": "Join our community Discord",\n    "motd": false,\n    "tips": true,\n    "web": false,\n    "link": "https://craftingforchrist.net/discord"\n}\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,o.kt)("p",null,'A new announcement has been created. This announcement will rotate in-game with\nthe message "Join our community Discord". If clicked on it will send you to the\ndiscord.')),(0,o.kt)(u.Z,{value:"second",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "announcementSlug": "joinCommunityDiscord",\n    "body": "Join our community Discord",\n    "motd": true,\n    "tips": false,\n    "web": false,\n    "motdFormat": "&aJoin our community Discord"\n}\n')),(0,o.kt)("h2",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,o.kt)("p",null,"A new announcement has been created. This announcement is message of the day and\nwill be coloured.")),(0,o.kt)(u.Z,{value:"third",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))))}b.isMDXComponent=!0}}]);