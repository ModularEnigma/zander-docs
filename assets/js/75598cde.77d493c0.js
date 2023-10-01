"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,s(s({ref:t},m),{},{components:n})):a.createElement(k,s({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Conventions",description:"Coding conventions and standards for Zander",sidebar_label:"Conventions",sidebar_position:1},s=void 0,o={unversionedId:"contributing/zander/apiConventions",id:"contributing/zander/apiConventions",title:"Conventions",description:"Coding conventions and standards for Zander",source:"@site/docs/contributing/zander/apiConventions.md",sourceDirName:"contributing/zander",slug:"/contributing/zander/apiConventions",permalink:"/docs/contributing/zander/apiConventions",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/contributing/zander/apiConventions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Conventions",description:"Coding conventions and standards for Zander",sidebar_label:"Conventions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docs Documentation",permalink:"/docs/contributing/documentation"},next:{title:"Form Modules",permalink:"/docs/contributing/zander/formModules"}},l={},p=[{value:"Zander API rules",id:"zander-api-rules",level:2},{value:"Naming conventions",id:"naming-conventions",level:3},{value:"Response format",id:"response-format",level:3},{value:"GET Request Response",id:"get-request-response",level:3},{value:"Documentation conventions",id:"documentation-conventions",level:3}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"zander-api-rules"},"Zander API rules"),(0,r.kt)("p",null,"When editing the API, these rules should be strictly followed."),(0,r.kt)("h3",{id:"naming-conventions"},"Naming conventions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests must have the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"/get")," in the endpoint. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET rank/get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET punishments/get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET communitycreation/get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET knowledgebase/article/get"))),(0,r.kt)("p",{parentName:"li"},"So far, no endpoints that we have added requires needing more than one ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request per endpoint group (rank/discord/server/shop etc). Thus, it makes sense to try and unify the design across these endpoints.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests that require parameters are only injected via ",(0,r.kt)("strong",{parentName:"p"},"query"),". For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET rank/get?username=shadowwolfyt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET punishments/get?limit=20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET communitycreation/get?id=1337"))),(0,r.kt)("p",{parentName:"li"},"These parameters must be included in the documentation to tell other users how it works.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests must ",(0,r.kt)("strong",{parentName:"p"},"NOT")," have the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"/get")," in the name (surely this is obvious).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests that require parameters are only injected via ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),". ",(0,r.kt)("strong",{parentName:"p"},"No querying, or params in the endpoint.")," For example:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"POST shop/create/item")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "shopId": 2,\n    "shopItem": "glass",\n    "shopPrice": 2,\n    "shopBuyQuantity": 128\n}\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"POST discord/chat")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "server": "Survival",\n    "content": "This server is awesome"\n}\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"POST session/destroy")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n')))),(0,r.kt)("h3",{id:"response-format"},"Response format"),(0,r.kt)("p",null,"These exist to prevent API functionality from mingling with website functionality. For example, it should be illegal for the API to redirect the user. It must always return ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," endpoints must return ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," data that adheres to the following format:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": [true|false], // Must be a boolean\n    "message": "<message>", // Optional field. Can exist regardless\n                            // of the value of success.\n    "data": // Result from the get request goes here. This field must\n            // only exist if success == true. The data type this\n            // field holds can be arbitrary (dict, list, bool, int,\n            // etc.)\n}\n')),(0,r.kt)("p",{parentName:"li"},"Valid:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "The userId is invalid"\n}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "player": "shadowwolfyt",\n        "diamonds": "1337"\n    }\n}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "Hello, World!",\n    "data": [ 1, 2, 3, 4, 5 ]\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," endpoints must return ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," data that adheres to the following format:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": [true|false], // Must be a boolean\n    "message": "<message>" // Optional field. Can exist regardless\n                           // of the value of success.\n}\n')),(0,r.kt)("p",{parentName:"li"},"Valid:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "User already exists"\n}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')))),(0,r.kt)("h3",{id:"get-request-response"},"GET Request Response"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests with no query, should default to returning all of that kind without any filtering.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests with queries, should only be filtering output, not including something new that wasn't there before. For example:"),(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"GET rank/get")," returned this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "admin": [ "shadowwolfyt" ] },\n        { "user": [ "shadowwolfyt", "Camemes" ] }\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Then, ",(0,r.kt)("inlineCode",{parentName:"p"},"GET rank/get?username=Camemes")," could ",(0,r.kt)("strong",{parentName:"p"},"NOT")," return:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "donator": [ "Camemes" ] },\n        { "user": [ "Camemes" ] }\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},'As this would not fit the rule because "donator" did not appear in the non-filtered result of the plain ',(0,r.kt)("inlineCode",{parentName:"p"},"/get"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To follow from rule 2, filtering the output using a query, must not change the return result format ",(0,r.kt)("em",{parentName:"p"},"(TODO: unless maybe specified in the documentation?)"),". This is to ensure consistency when applying multiple filters at the same time. This may result in empty data, and that's okay. For example:"),(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"GET rank/get")," returned this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "admin": [ "shadowwolfyt" ] },\n        { "user": [ "shadowwolfyt", "Camemes" ] }\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Then ",(0,r.kt)("inlineCode",{parentName:"p"},"GET rank/get?username=Camemes&rank=admin")," would return:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": []\n}\n')),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The data is empty because the filters reduced the result to empty, however the query still returns ",(0,r.kt)("inlineCode",{parentName:"p"},'"success": true'),". This tells the end user that an error did not occur and the filters were successfully applied. It may be desired behaviour to expect an empty result. An example of this might be the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET punishments/get?username=shadowwolfyt"),". Where an empty result means user ",(0,r.kt)("inlineCode",{parentName:"p"},"shadowwolfyt")," has no punishments. Also note that the data type of ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the plain ",(0,r.kt)("inlineCode",{parentName:"p"},"/get")," was a JSON array, thus the data type of ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the filtered query is also an empty JSON array."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Because of rule 1, ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," endpoints expecting very large output should implement the query ",(0,r.kt)("inlineCode",{parentName:"p"},"?limit=x")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is an integer that defines the return result limit. What the limit does for each endpoint is up to the implementation, however it should be noted in the documentation. For example:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=3")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "shadowwolfyt", "when": "1 second ago" }, // Obviously time is not stored as a string, but you get the idea\n        { "player": "Camemes",      "when": "10 seconds ago" },\n        { "player": "StryderEpic",  "when": "25 seconds ago" }\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"In the example above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET punishments/get")," endpoint decided that limit=3 should only return the latest 3 punishments issued.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," endpoints expecting very large output should also implement the query ",(0,r.kt)("inlineCode",{parentName:"p"},"?page=x")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is an integer that defines the page that is returned. The data to return is defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"(page + 1) * limit")," where only ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," entries are returned. For example:"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET punishments/get")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "one", "when": "1 second ago" },\n        { "player": "two", "when": "10 seconds ago" },\n        { "player": "three", "when": "25 seconds ago" },\n        { "player": "four", "when": "30 seconds ago" },\n        { "player": "five", "when": "35 seconds ago" },\n        { "player": "six", "when": "40 seconds ago" }\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=2&page=1")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "one", "when": "1 second ago" },\n        { "player": "two", "when": "10 seconds ago" }\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=2&page=2")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "three", "when": "25 seconds ago" },\n        { "player": "four", "when": "30 seconds ago" },\n    ]\n}\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=2&page=4")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": []\n}\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Aron_with_an_a")),(0,r.kt)("p",{parentName:"blockquote"},"In MySQL this can be done simply with the offset parameter."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'// set the number of items to display per page\nconst limit = req.body.limit;\nconst page = (req.body.page) ? req.body.page : 1;\nconst offset = (page - 1) * limit;\n\n// build query\nconst sql = "SELECT * FROM punishments LIMIT " . offset . "," . limit;\n')),(0,r.kt)("p",{parentName:"blockquote"},"That will return paginated results from the database"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request that returns a list should always return ",(0,r.kt)("inlineCode",{parentName:"p"},'"success": true')," if the resulting data is an empty list if the input queries are valid. For example:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET rank/get?username=NoPlayer")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": []\n}\n')))),(0,r.kt)("h3",{id:"documentation-conventions"},"Documentation conventions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When writing documentation for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests, all unique parameters' ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),' fields must start with the string: "Filter by", and they must also be ',(0,r.kt)("inlineCode",{parentName:"p"},"optional: true"),". For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nrank:\n  sidebar: Ranks\n  files:\n  - get.mdx:\n      route: rank/get\n      method: GET\n      privileged: false\n      short: Get rank assignments\n      description: Returns a list of all the ranks and the users assigned to each rank.\n      parameters:\n        username:\n          type: string\n          info: Filter by matching user IGN.\n          optional: true\n# ...\n")))))}d.isMDXComponent=!0}}]);