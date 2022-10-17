"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7166],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),g=r,c=m["".concat(u,".").concat(g)]||m[g]||p[g]||i;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5872:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Installation and Configuration",description:"TODO",sidebar_label:"Installation and Configuration",sidebar_position:1},l=void 0,o={unversionedId:"products/zander/guides/installationAndConfiguration",id:"products/zander/guides/installationAndConfiguration",title:"Installation and Configuration",description:"TODO",source:"@site/docs/products/zander/guides/installationAndConfiguration.md",sourceDirName:"products/zander/guides",slug:"/products/zander/guides/installationAndConfiguration",permalink:"/docs/products/zander/guides/installationAndConfiguration",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/guides/installationAndConfiguration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation and Configuration",description:"TODO",sidebar_label:"Installation and Configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Vote",permalink:"/docs/products/zander/features/vote"},next:{title:"Permissions",permalink:"/docs/products/zander/guides/permissions"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Requirements Notes",id:"requirements-notes",level:2},{value:"Configuring .env",id:"configuring-env",level:2},{value:"Configuring config.json",id:"configuring-configjson",level:2},{value:"Features (features.json) Toggleability",id:"features-featuresjson-toggleability",level:2}],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS (minimum version ",(0,r.kt)("inlineCode",{parentName:"li"},"v16.17.0"),")"),(0,r.kt)("li",{parentName:"ul"},"MySQL Database")),(0,r.kt)("h2",{id:"requirements-notes"},"Requirements Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"node -v")," in your console to check the current version you have.")),(0,r.kt)("h1",{id:"websiteapi"},"Website/API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and clone the repo using ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/ModularEnigma/zander-web")," in your Terminal."),(0,r.kt)("li",{parentName:"ul"},"Rename your ",(0,r.kt)("inlineCode",{parentName:"li"},".env.example")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," to make this active."),(0,r.kt)("li",{parentName:"ul"},"Rename your ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json.example")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json")," to make this active.")),(0,r.kt)("h2",{id:"configuring-env"},"Configuring .env"),(0,r.kt)("p",null,"We keep all of the database, session and API variables separate from the main configuration file.\nHere is a table to break down what each function does:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"The web port for the Web application to run on. NOTE: If you're using Heroku, this will be overridden."),(0,r.kt)("td",{parentName:"tr",align:null},"8080")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discordAPIKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The bot token for your Discord bot application"),(0,r.kt)("td",{parentName:"tr",align:null},"TOKEN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apiKey"),(0,r.kt)("td",{parentName:"tr",align:null},"All of the applications connect together by this secure key. Set it and make sure you keep it secret and keep it safe."),(0,r.kt)("td",{parentName:"tr",align:null},"APIKEY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionCookieSecret"),(0,r.kt)("td",{parentName:"tr",align:null},"A passphrase with a minimum length of 32 characters used to encrypt session data for logged in users."),(0,r.kt)("td",{parentName:"tr",align:null},"THISISNOTVERYSECRETANDITHINKYOUSHOULDCHANGEIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"databaseHost"),(0,r.kt)("td",{parentName:"tr",align:null},"The host of where the MySQL database is hosted (via domain or IP)"),(0,r.kt)("td",{parentName:"tr",align:null},"database.example.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"databasePort"),(0,r.kt)("td",{parentName:"tr",align:null},"The port that your MySQL database runs off"),(0,r.kt)("td",{parentName:"tr",align:null},"4052")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"databaseUser"),(0,r.kt)("td",{parentName:"tr",align:null},"The username for your MySQL user"),(0,r.kt)("td",{parentName:"tr",align:null},"USER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"databasePassword"),(0,r.kt)("td",{parentName:"tr",align:null},"The password for your MySQL user"),(0,r.kt)("td",{parentName:"tr",align:null},"PASSWORD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"databaseName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your MySQL Database"),(0,r.kt)("td",{parentName:"tr",align:null},"DATABASE")))),(0,r.kt)("h2",{id:"configuring-configjson"},"Configuring config.json"),(0,r.kt)("p",null,"You can change and customise your Zander experience for your Network in the config.json file from the display name to setting your links to your Networks external platforms. Here is a table to break down what each config option does:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug"),(0,r.kt)("td",{parentName:"tr",align:null},"Toggle the debug console to troubleshoot application issues."),(0,r.kt)("td",{parentName:"tr",align:null},"TRUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.siteName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name or branding name of the site."),(0,r.kt)("td",{parentName:"tr",align:null},"My Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.siteAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the site (use the example in development and your branding in production)"),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:8080")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.tagline"),(0,r.kt)("td",{parentName:"tr",align:null},"The tagline or one-liner for your Network"),(0,r.kt)("td",{parentName:"tr",align:null},"The best Network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.email"),(0,r.kt)("td",{parentName:"tr",align:null},"The main contact email used for your network"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:support@example.com"},"support@example.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.policy"),(0,r.kt)("td",{parentName:"tr",align:null},"There are various options which all link to public markdown files that are displayed on the Legal pages."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.platforms"),(0,r.kt)("td",{parentName:"tr",align:null},"There are various options which all link to your Networks external platforms (you can toggle these in features.json)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.apiRoute"),(0,r.kt)("td",{parentName:"tr",align:null},"The route you can customize and change for api root."),(0,r.kt)("td",{parentName:"tr",align:null},"/api")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteConfiguration.redirectRoute"),(0,r.kt)("td",{parentName:"tr",align:null},"The route you can customize and change for redirect for forms."),(0,r.kt)("td",{parentName:"tr",align:null},"/redirect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discord.guildId"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of your guild or Discord server."),(0,r.kt)("td",{parentName:"tr",align:null},"899441191416901632")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discord.channels"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of specified channels which are sent specific announcements and notifications to."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discord.roles"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of specified roles which can be assigned to users."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"features-featuresjson-toggleability"},"Features (features.json) Toggleability"),(0,r.kt)("p",null,"You can find more about the functionality and toggling features across the Network under the ",(0,r.kt)("a",{parentName:"p",href:"/docs/products/zander/features/"},"Features page")),(0,r.kt)("h1",{id:"proxy"},"Proxy"),(0,r.kt)("h1",{id:"auth"},"Auth"),(0,r.kt)("h1",{id:"vote"},"Vote"),(0,r.kt)("h1",{id:"hub"},"Hub"))}p.isMDXComponent=!0}}]);