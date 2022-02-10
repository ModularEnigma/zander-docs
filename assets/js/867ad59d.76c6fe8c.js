"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3989],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7294),o=t(2389),i=t(9548),l=t(6010),u="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,O=(0,a.useState)(y),w=O[0],T=O[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==w&&b.some((function(e){return e.value===j}))&&T(j)}var P=function(e){var n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==w&&(E(n),T(r),null!=d&&N(d,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},4695:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.color;return r.createElement("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},n)}},8725:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(4695),l=t(9877),u=t(8215),s=["components"],c={title:"POST communitycreation/approve",description:"Approve a community creation submission.",sidebar_label:"Approve submission",slug:"approve",sidebar_position:17},p='<Highlight color="',m={unversionedId:"api/communitycreation/approve",id:"api/communitycreation/approve",title:"POST communitycreation/approve",description:"Approve a community creation submission.",source:"@site/docs/api/communitycreation/approve.mdx",sourceDirName:"api/communitycreation",slug:"/api/communitycreation/approve",permalink:"/docs/api/communitycreation/approve",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/communitycreation/approve.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"POST communitycreation/approve",description:"Approve a community creation submission.",sidebar_label:"Approve submission",slug:"approve",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Create submission",permalink:"/docs/api/communitycreation/submit"},next:{title:"Deny submission",permalink:"/docs/api/communitycreation/deny"}},d=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Response",id:"response-1",children:[],level:2}],v={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-communitycreationapprove"},(0,o.kt)(i.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"communitycreation/approve")),(0,o.kt)("p",null,"Approve a community creation submission."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"id")," ",(0,o.kt)("em",{parentName:"p"},"integer"),(0,o.kt)("br",{parentName:"p"}),"\n","The ID of the creation submission to approve."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Missing id",value:"second"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 12\n}\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,o.kt)("p",null,"The community creation submission with id 12 has been approved. ",(0,o.kt)("em",{parentName:"p"},"TODO: What\nexactly does this mean? Goes on the website?"))),(0,o.kt)(u.Z,{value:"second",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 000000\n}\n')),(0,o.kt)("h2",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);