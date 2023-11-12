"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Installation",description:"Installation details and guide on getting your own Zander instance running for your Network.",sidebar_label:"Installation",sidebar_position:1},o=void 0,l={unversionedId:"products/zander/installation",id:"products/zander/installation",title:"Installation",description:"Installation details and guide on getting your own Zander instance running for your Network.",source:"@site/docs/products/zander/installation.md",sourceDirName:"products/zander",slug:"/products/zander/installation",permalink:"/docs/products/zander/installation",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",description:"Installation details and guide on getting your own Zander instance running for your Network.",sidebar_label:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Get Logs",permalink:"/docs/products/zander/api/web/get"},next:{title:"Configuration",permalink:"/docs/products/zander/configuration"}},s={},u=[{value:"Database",id:"database",level:2},{value:"Web/API",id:"webapi",level:2},{value:"Discord",id:"discord",level:2},{value:"Proxy",id:"proxy",level:2},{value:"Hub",id:"hub",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The installation information is as below, this information has been provided in order to ensure the best experience in setting up the zander ecosystem for your Network."),(0,a.kt)("h2",{id:"database"},"Database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"dbinit.sql")," file"),(0,a.kt)("li",{parentName:"ul"},"Change the database name if you'd like it to display as a different name."),(0,a.kt)("li",{parentName:"ul"},"Connect to your MySQL server and run the script to load the database onto your database server.")),(0,a.kt)("h2",{id:"webapi"},"Web/API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone the Web repo."),(0,a.kt)("li",{parentName:"ul"},"Install all of the required packages using ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i")),(0,a.kt)("li",{parentName:"ul"},"In the root folder, open the ",(0,a.kt)("inlineCode",{parentName:"li"},".env"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"config.json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"filter.json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"joinMessages.json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"features.json")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"lang.json")," and fill out as per the instructions in ",(0,a.kt)("a",{parentName:"li",href:"./configuration"},"Configuration"),"."),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm dev")," to start the application/website/api.")),(0,a.kt)("h2",{id:"discord"},"Discord"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visit Discord Developer Portal, and click New Application button, and type your application name, and then Create."),(0,a.kt)("li",{parentName:"ul"},"On the left menu, click Bot, and click Add Bot button."),(0,a.kt)("li",{parentName:"ul"},"Click Reset Token, and click Copy button.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Referenced from ",(0,a.kt)("a",{parentName:"p",href:"https://discordgsm.com/guide/how-to-get-a-discord-bot-token"},"https://discordgsm.com/guide/how-to-get-a-discord-bot-token"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the Bot tab, under Privileged Gateway, turn on all options.\n",(0,a.kt)("img",{src:n(3584).Z,width:"1418",height:"656"}))),(0,a.kt)("h2",{id:"proxy"},"Proxy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone the zander plugin repo."),(0,a.kt)("li",{parentName:"ul"},"Compile the zander plugin suite."),(0,a.kt)("li",{parentName:"ul"},"Put the zander-proxy plugin in your ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," folder on your Proxy."),(0,a.kt)("li",{parentName:"ul"},"Launch the Proxy once, then close the Proxy."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," folder, open the ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yml")," and fill out as per the instructions in ",(0,a.kt)("a",{parentName:"li",href:"/docs/products/zander/configuration"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Launch the Proxy again to finish.")),(0,a.kt)("h2",{id:"hub"},"Hub"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put the zander-hub plugin in your ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," folder on your server."),(0,a.kt)("li",{parentName:"ul"},"Launch the server once, then close the server."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," folder, open the ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yml")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"welcome.yml")," and fill out as per the instructions in ",(0,a.kt)("a",{parentName:"li",href:"/docs/products/zander/configuration"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Launch the server again to finish.")))}c.isMDXComponent=!0},3584:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/discordIntent-1162c453256fdfc63228ff038e61cefe.png"}}]);