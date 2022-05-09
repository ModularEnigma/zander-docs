"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9167],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),i=n(2389),o=n(3725),l=n(6010),s="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,a.useState)(k),w=T[0],O=T[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=g[d];null!=I&&I!==w&&v.some((function(e){return e.value===I}))&&O(I)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==w&&(E(t),O(r),null!=d&&N(d,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function u(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},4695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},6535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4695),l=n(9877),s=n(8215),p=["components"],u={title:"POST shop/items/edit",description:"Edit an item in the shop listing in the directory.",sidebar_label:"Edit item in shop",slug:"items/edit",sidebar_position:67},c='<Highlight color="',m={unversionedId:"api/shop/items-edit",id:"api/shop/items-edit",title:"POST shop/items/edit",description:"Edit an item in the shop listing in the directory.",source:"@site/docs/api/shop/items-edit.mdx",sourceDirName:"api/shop",slug:"/api/shop/items/edit",permalink:"/docs/api/shop/items/edit",editUrl:"https://github.com/ModularEnigma/zander-docs/tree/main/packages/create-docusaurus/templates/shared/docs/api/shop/items-edit.mdx",tags:[],version:"current",sidebarPosition:67,frontMatter:{title:"POST shop/items/edit",description:"Edit an item in the shop listing in the directory.",sidebar_label:"Edit item in shop",slug:"items/edit",sidebar_position:67},sidebar:"tutorialSidebar",previous:{title:"Add item to shop",permalink:"/docs/api/shop/items/create"},next:{title:"Delete item in shop",permalink:"/docs/api/shop/items/delete"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],f={toc:h};function v(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-shopitemsedit"},(0,i.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"h1"},"shop/items/edit")),(0,i.kt)("p",null,"Edit an item in the shop listing in the directory."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shopId")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","The ID of the shop containing the item."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shopItemId")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","The ID of the item to edit."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shopItem")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","The Minecraft item name of the shop item."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shopPrice")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","The price for the item."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shopBuyQuantity")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","The quantity of the item you buy with the price."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Missing shopId",value:"second"},{label:"Missing shopItemId",value:"third"},{label:"Invalid Price",value:"fourth"},{label:"Invalid Quantity",value:"fifth"},{label:"Unknown Minecraft Item",value:"sixth"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "shopId": 12,\n    "shopItemId": 6,\n    "shopItem": "Glass",\n    "shopPrice": 2,\n    "shopBuyQuantity": 128\n}\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./create"},(0,i.kt)("inlineCode",{parentName:"a"},"shop/items/create")))),(0,i.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./create"},(0,i.kt)("inlineCode",{parentName:"a"},"shop/items/create")))),(0,i.kt)(s.Z,{value:"third",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "shopId": 12,\n    "shopItemId": 000000,\n    "shopItem": "Glass",\n    "shopPrice": 2,\n    "shopBuyQuantity": 128\n}\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO"))),(0,i.kt)(s.Z,{value:"fourth",mdxType:"TabItem"},(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./create"},(0,i.kt)("inlineCode",{parentName:"a"},"shop/items/create")))),(0,i.kt)(s.Z,{value:"fifth",mdxType:"TabItem"},(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./create"},(0,i.kt)("inlineCode",{parentName:"a"},"shop/items/create")))),(0,i.kt)(s.Z,{value:"sixth",mdxType:"TabItem"},(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./create"},(0,i.kt)("inlineCode",{parentName:"a"},"shop/items/create"))))))}v.isMDXComponent=!0}}]);