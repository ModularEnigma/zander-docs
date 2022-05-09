"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7298],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Conventions",description:"Coding conventions and standards",sidebar_label:"Conventions",sidebar_position:1},l=void 0,p={unversionedId:"contributing/conventions",id:"contributing/conventions",title:"Conventions",description:"Coding conventions and standards",source:"@site/docs/contributing/conventions.md",sourceDirName:"contributing",slug:"/contributing/conventions",permalink:"/docs/contributing/conventions",editUrl:"https://github.com/ModularEnigma/zander-docs/tree/main/packages/create-docusaurus/templates/shared/docs/contributing/conventions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Conventions",description:"Coding conventions and standards",sidebar_label:"Conventions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/contributing/introduction"},next:{title:"Documentation",permalink:"/docs/contributing/documentation"}},m={},u=[{value:"API rules",id:"api-rules",level:2},{value:"Naming conventions",id:"naming-conventions",level:3},{value:"Response format",id:"response-format",level:3},{value:"GET Request Response",id:"get-request-response",level:3},{value:"Documentation conventions",id:"documentation-conventions",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-rules"},"API rules"),(0,i.kt)("p",null,"When editing the API, these rules should be strictly followed."),(0,i.kt)("h3",{id:"naming-conventions"},"Naming conventions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests must have the suffix ",(0,i.kt)("inlineCode",{parentName:"p"},"/get")," in the endpoint. For example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET rank/get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET punishments/get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET communitycreation/get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET knowledgebase/article/get"))),(0,i.kt)("p",{parentName:"li"},"So far, no endpoints that we have added requires needing more than one ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request per endpoint group (rank/discord/server/shop etc). Thus, it makes sense to try and unify the design across these endpoints.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests that require parameters are only injected via ",(0,i.kt)("strong",{parentName:"p"},"query"),". For example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET rank/get?username=shadowwolfyt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET punishments/get?limit=20")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET communitycreation/get?id=1337"))),(0,i.kt)("p",{parentName:"li"},"These parameters must be included in the documentation to tell other users how it works.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests must ",(0,i.kt)("strong",{parentName:"p"},"NOT")," have the suffix ",(0,i.kt)("inlineCode",{parentName:"p"},"/get")," in the name (surely this is obvious).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests that require parameters are only injected via ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),". ",(0,i.kt)("strong",{parentName:"p"},"No querying, or params in the endpoint.")," For example:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST shop/create/item")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "shopId": 2,\n    "shopItem": "glass",\n    "shopPrice": 2,\n    "shopBuyQuantity": 128\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST discord/chat")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "server": "Survival",\n    "content": "This server is awesome"\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST session/destroy")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n')))),(0,i.kt)("h3",{id:"response-format"},"Response format"),(0,i.kt)("p",null,"These exist to prevent API functionality from mingling with website functionality. For example, it should be illegal for the API to redirect the user. It must always return ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," endpoints must return ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," data that adheres to the following format:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": [true|false], // Must be a boolean\n    "message": "<message>", // Optional field. Can exist regardless\n                            // of the value of success.\n    "data": // Result from the get request goes here. This field must\n            // only exist if success == true. The data type this\n            // field holds can be arbitrary (dict, list, bool, int,\n            // etc.)\n}\n')),(0,i.kt)("p",{parentName:"li"},"Valid:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "The userId is invalid"\n}\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "player": "shadowwolfyt",\n        "diamonds": "1337"\n    }\n}\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "Hello, World!",\n    "data": [ 1, 2, 3, 4, 5 ]\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," endpoints must return ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," data that adheres to the following format:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": [true|false], // Must be a boolean\n    "message": "<message>" // Optional field. Can exist regardless\n                           // of the value of success.\n}\n')),(0,i.kt)("p",{parentName:"li"},"Valid:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "User already exists"\n}\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')))),(0,i.kt)("h3",{id:"get-request-response"},"GET Request Response"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests with no query, should default to returning all of that kind without any filtering.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Any ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests with queries, should only be filtering output, not including something new that wasn't there before. For example:"),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"GET rank/get")," returned this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "admin": [ "shadowwolfyt" ] },\n        { "user": [ "shadowwolfyt", "Camemes" ] }\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Then, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET rank/get?username=Camemes")," could ",(0,i.kt)("strong",{parentName:"p"},"NOT")," return:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "donator": [ "Camemes" ] },\n        { "user": [ "Camemes" ] }\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},'As this would not fit the rule because "donator" did not appear in the non-filtered result of the plain ',(0,i.kt)("inlineCode",{parentName:"p"},"/get"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To follow from rule 2, filtering the output using a query, must not change the return result format ",(0,i.kt)("em",{parentName:"p"},"(TODO: unless maybe specified in the documentation?)"),". This is to ensure consistency when applying multiple filters at the same time. This may result in empty data, and that's okay. For example:"),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"GET rank/get")," returned this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "admin": [ "shadowwolfyt" ] },\n        { "user": [ "shadowwolfyt", "Camemes" ] }\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Then ",(0,i.kt)("inlineCode",{parentName:"p"},"GET rank/get?username=Camemes&rank=admin")," would return:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": []\n}\n')),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The data is empty because the filters reduced the result to empty, however the query still returns ",(0,i.kt)("inlineCode",{parentName:"p"},'"success": true'),". This tells the end user that an error did not occur and the filters were successfully applied. It may be desired behaviour to expect an empty result. An example of this might be the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"GET punishments/get?username=shadowwolfyt"),". Where an empty result means user ",(0,i.kt)("inlineCode",{parentName:"p"},"shadowwolfyt")," has no punishments. Also note that the data type of ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in the plain ",(0,i.kt)("inlineCode",{parentName:"p"},"/get")," was a JSON array, thus the data type of ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in the filtered query is also an empty JSON array.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Because of rule 1, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," endpoints expecting very large output should implement the query ",(0,i.kt)("inlineCode",{parentName:"p"},"?limit=x")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is an integer that defines the return result limit. What the limit does for each endpoint is up to the implementation, however it should be noted in the documentation. For example:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=3")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "shadowwolfyt", "when": "1 second ago" }, // Obviously time is not stored as a string, but you get the idea\n        { "player": "Camemes",      "when": "10 seconds ago" },\n        { "player": "StryderEpic",  "when": "25 seconds ago" }\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET punishments/get")," endpoint decided that limit=3 should only return the latest 3 punishments issued.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," endpoints expecting very large output should also implement the query ",(0,i.kt)("inlineCode",{parentName:"p"},"?page=x")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is an integer that defines the page that is returned. The data to return is defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"(page + 1) * limit")," where only ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," entries are returned. For example:"),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET punishments/get")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "one", "when": "1 second ago" },\n        { "player": "two", "when": "10 seconds ago" },\n        { "player": "three", "when": "25 seconds ago" },\n        { "player": "four", "when": "30 seconds ago" },\n        { "player": "five", "when": "35 seconds ago" },\n        { "player": "six", "when": "40 seconds ago" }\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=2&page=1")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "one", "when": "1 second ago" },\n        { "player": "two", "when": "10 seconds ago" }\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=2&page=2")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        { "player": "three", "when": "25 seconds ago" },\n        { "player": "four", "when": "30 seconds ago" },\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET punishments/get?limit=2&page=4")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": []\n}\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"Aron_with_an_a")),(0,i.kt)("p",{parentName:"blockquote"},"In MySQL this can be done simply with the offset parameter."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'// set the number of items to display per page\nconst limit = req.body.limit;\nconst page = (req.body.page) ? req.body.page : 1;\nconst offset = (page - 1) * limit;\n\n// build query\nconst sql = "SELECT * FROM punishments LIMIT " . offset . "," . limit;\n')),(0,i.kt)("p",{parentName:"blockquote"},"That will return paginated results from the database"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Any ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request that returns a list should always return ",(0,i.kt)("inlineCode",{parentName:"p"},'"success": true')," if the resulting data is an empty list if the input queries are valid. For example:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET rank/get?username=NoPlayer")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": []\n}\n')))),(0,i.kt)("h3",{id:"documentation-conventions"},"Documentation conventions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When writing documentation for ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests, all unique parameters' ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),' fields must start with the string: "Filter by", and they must also be ',(0,i.kt)("inlineCode",{parentName:"p"},"optional: true"),". For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nGroup:\n  group/endpoint:\n    method: GET\n    privileged: true # or false\n    short: My endpoint\n    description: This endpoint does...\n    username:\n      type: string\n      info: Filter by matching user IGN.\n      optional: true\n# ...\n")))))}c.isMDXComponent=!0}}]);