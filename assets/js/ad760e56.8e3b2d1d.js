"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"Version 1.0 Patch Notes",description:"Zander release notes and changes for version 1.0.",slug:"zander-1.0-patchNotes",authors:[{name:"Ben Robson",title:"Founder & Developer at Modular Software",url:"https://github.com/benrobson",image_url:"https://github.com/benrobson.png"}],hide_table_of_contents:!1},i=void 0,o={permalink:"/blog/zander-1.0-patchNotes",source:"@site/blog/zander/12-11-2023-zander-v1.0-release.md",title:"Version 1.0 Patch Notes",description:"Zander release notes and changes for version 1.0.",date:"2023-11-12T03:26:47.000Z",formattedDate:"November 12, 2023",tags:[],readingTime:6.22,hasTruncateMarker:!1,authors:[{name:"Ben Robson",title:"Founder & Developer at Modular Software",url:"https://github.com/benrobson",image_url:"https://github.com/benrobson.png",imageURL:"https://github.com/benrobson.png"}],frontMatter:{title:"Version 1.0 Patch Notes",description:"Zander release notes and changes for version 1.0.",slug:"zander-1.0-patchNotes",authors:[{name:"Ben Robson",title:"Founder & Developer at Modular Software",url:"https://github.com/benrobson",image_url:"https://github.com/benrobson.png",imageURL:"https://github.com/benrobson.png"}],hide_table_of_contents:!1},prevItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0]},d=[{value:"Features",id:"features",level:2},{value:"Patch Notes",id:"patch-notes",level:2},{value:"Hub",id:"hub",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Web",id:"web",level:3},{value:"API",id:"api",level:4},{value:"Discord",id:"discord",level:4}],m={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hello Everyone,"),(0,r.kt)("p",null,"We're releasing our first of many patch notes for Zander, a multi-platform Minecraft Server management tool. We have only implemented most of the basics but we are working towards implementing a full suite of features which will allow you to manage your Minecraft Server with ease."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/products/zander/features/announcement"},"Announcements")," - Announcements is a feature that allows Administration to broadcast messages across your Server and Website and have linked in to external URLs if required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/products/zander/features/application"},"Applications")," - Allows administrative users to create, edit and delete applications. Applications are used for things like Server Position applications and other Server roles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/products/zander/features/discord"},"Discord")," - The Discord feature allows for moderation, community interaction and much more."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/products/zander/features/server"},"Discord")," - Allows administrative users to add, edit and remove Servers. Adding a server will list the server on the ",(0,r.kt)("inlineCode",{parentName:"li"},"/play")," page and also list the server on the ",(0,r.kt)("inlineCode",{parentName:"li"},"/play")," command on Discord.")),(0,r.kt)("h2",{id:"patch-notes"},"Patch Notes"),(0,r.kt)("h3",{id:"hub"},"Hub"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"/fly")," command which can be applied to users via ",(0,r.kt)("inlineCode",{parentName:"li"},"zander.hub.fly"),"."),(0,r.kt)("li",{parentName:"ul"},"Added a Hub Booster which can be placed as a Light Weighted Pressure plate which will allow players to be launched in the direction they're looking at with the configuration options set in the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")," file."),(0,r.kt)("li",{parentName:"ul"},"Added a player join event which: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cleared player's inventory of miscellaneous items upon joining."),(0,r.kt)("li",{parentName:"ul"},"Teleports the player to the Hub spawn point, if configured in the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml"),"."),(0,r.kt)("li",{parentName:"ul"},"Gives the player a navigation compass and set the player's current slot to the navigation compass."),(0,r.kt)("li",{parentName:"ul"},"Sets off a celebratory firework and separate Message of the Day (MOTD) sent for new players as specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"welcome.yml"),"."),(0,r.kt)("li",{parentName:"ul"},"Plays a random sound to the player upon joining."),(0,r.kt)("li",{parentName:"ul"},"Broadcasts a message announcing the player's join, if they are not vanished."))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"welcome.yml")," to configure MOTD for players."),(0,r.kt)("li",{parentName:"ul"},"Added a variant player join event which alters the Message of the Day (MOTD) for Christmas time between 24th and 25th of December."),(0,r.kt)("li",{parentName:"ul"},"Add check to avoid players from infinite falling in void."),(0,r.kt)("li",{parentName:"ul"},"Added a compass item to navigate to set Servers."),(0,r.kt)("li",{parentName:"ul"},"Implemented Creature, Interaction and Hub prevention to stop Hub being damaged by players.")),(0,r.kt)("h3",{id:"proxy"},"Proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented /discord command which redirects player to Network discord."),(0,r.kt)("li",{parentName:"ul"},"Implemented /ping command to test players connection to Proxy."),(0,r.kt)("li",{parentName:"ul"},"Implemented /rules command which redirects player to Network discord."),(0,r.kt)("li",{parentName:"ul"},"Implemented /website command which redirects player to Network website."),(0,r.kt)("li",{parentName:"ul"},"Implemented a proxy-side connection for link and word filtering."),(0,r.kt)("li",{parentName:"ul"},"Implemented Chat Event which checks chat messages for blocked content, sends a request to a filtering API, blocks messages containing restricted content and notify the player, and sends approved messages to a Discord channel for Network Log monitoring."),(0,r.kt)("li",{parentName:"ul"},"Implemented User Disconnection Event which checks if the player is still connected, sends a request to the API to destroy the player's session and sends a request to the API to notify Discord channel for Network Log monitoring of the leave event."),(0,r.kt)("li",{parentName:"ul"},"Implemented User Login event which retrieves the player logging in, sends a request to the API to create a new user if they're new, sends a request to the API to start a session, including the player's unique ID and IP address and then sends a request to the API to notify Discord channel for Network Log monitoring of the join event."),(0,r.kt)("li",{parentName:"ul"},"Implemented a Proxy Ping event which is displayed when players ping the server. It retrieves the MOTD from an API, applies formatting, and sets it as the server's description. If an error occurs, it falls back to a default MOTD specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml"),"."),(0,r.kt)("li",{parentName:"ul"},"Implemented User Switch event which sends a request to the API to switch the player's session to the new server and sends a request to the API to notify Discord of the server switch for the Network log monitoring."),(0,r.kt)("li",{parentName:"ul"},"Added a ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")," file for MOTD fallback and API connection.")),(0,r.kt)("h3",{id:"web"},"Web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented framework for website, Discord and API."),(0,r.kt)("li",{parentName:"ul"},"Implemented Feature toggling to be able to enable or disable a feature via ",(0,r.kt)("inlineCode",{parentName:"li"},"features.json")),(0,r.kt)("li",{parentName:"ul"},"Implemented filter of words and links and the ability to control via ",(0,r.kt)("inlineCode",{parentName:"li"},"filter.json")),(0,r.kt)("li",{parentName:"ul"},"Implemented ability to have random join messages for Discord which can be added to via ",(0,r.kt)("inlineCode",{parentName:"li"},"joinMessages.json")),(0,r.kt)("li",{parentName:"ul"},"Implemented a small language file to expand on for translatability in ",(0,r.kt)("inlineCode",{parentName:"li"},"lang.json")),(0,r.kt)("li",{parentName:"ul"},"Added following front-facing routes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Home /"),(0,r.kt)("li",{parentName:"ul"},"Play /play"),(0,r.kt)("li",{parentName:"ul"},"Apply /apply"),(0,r.kt)("li",{parentName:"ul"},"Terms Of Service /terms"),(0,r.kt)("li",{parentName:"ul"},"Rules /rules"),(0,r.kt)("li",{parentName:"ul"},"Privacy /privacy"),(0,r.kt)("li",{parentName:"ul"},"Refund /refund"),(0,r.kt)("li",{parentName:"ul"},"Login /login"),(0,r.kt)("li",{parentName:"ul"},"Register /register (which is currently toggleable)"),(0,r.kt)("li",{parentName:"ul"},"Logout /logout"),(0,r.kt)("li",{parentName:"ul"},"Added /discord redirect."),(0,r.kt)("li",{parentName:"ul"},"Added /webstore redirect."),(0,r.kt)("li",{parentName:"ul"},"Added /knowledgebase redirect."))),(0,r.kt)("li",{parentName:"ul"},"Implemented administration dashboard and routes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added /dashboard."),(0,r.kt)("li",{parentName:"ul"},"Added /dashboard/announcements with the Announcement Editor to allow creation, deletion and ability to edit."),(0,r.kt)("li",{parentName:"ul"},"Added /dashboard/applications with the Applications Editor to allow creation, deletion and ability to edit."),(0,r.kt)("li",{parentName:"ul"},"Added /dashboard/servers with the Servers Editor to allow creation, deletion and ability to edit."),(0,r.kt)("li",{parentName:"ul"},"Added /dashboard/logs to view application logs an actions.")))),(0,r.kt)("h4",{id:"api"},"API"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Have a look at our API documentation for information on routes functionality.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Announcement",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implemented /get"),(0,r.kt)("li",{parentName:"ul"},"Implemented /create"),(0,r.kt)("li",{parentName:"ul"},"Implemented /edit"),(0,r.kt)("li",{parentName:"ul"},"Implemented /delete"))),(0,r.kt)("li",{parentName:"ul"},"Application",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implemented /get"),(0,r.kt)("li",{parentName:"ul"},"Implemented /create"),(0,r.kt)("li",{parentName:"ul"},"Implemented /edit"),(0,r.kt)("li",{parentName:"ul"},"Implemented /delete"))),(0,r.kt)("li",{parentName:"ul"},"Server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implemented /get"),(0,r.kt)("li",{parentName:"ul"},"Implemented /get/users"),(0,r.kt)("li",{parentName:"ul"},"Implemented /create"),(0,r.kt)("li",{parentName:"ul"},"Implemented /edit"),(0,r.kt)("li",{parentName:"ul"},"Implemented /delete"))),(0,r.kt)("li",{parentName:"ul"},"Session",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implemented /create"),(0,r.kt)("li",{parentName:"ul"},"Implemented /destroy"),(0,r.kt)("li",{parentName:"ul"},"Implemented /switch"))),(0,r.kt)("li",{parentName:"ul"},"Discord",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implemented /switch"),(0,r.kt)("li",{parentName:"ul"},"Implemented /chat"),(0,r.kt)("li",{parentName:"ul"},"Implemented /join"),(0,r.kt)("li",{parentName:"ul"},"Implemented /leave"))),(0,r.kt)("li",{parentName:"ul"},"Web",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implemented /register/create"),(0,r.kt)("li",{parentName:"ul"},"Implemented /configuration"),(0,r.kt)("li",{parentName:"ul"},"Implemented /statistics"),(0,r.kt)("li",{parentName:"ul"},"Implemented /logs/get"))),(0,r.kt)("li",{parentName:"ul"},"User",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implemented /create"),(0,r.kt)("li",{parentName:"ul"},"Implemented /get"))),(0,r.kt)("li",{parentName:"ul"},"Implemented /heartbeat"),(0,r.kt)("li",{parentName:"ul"},"Implemented /filter"),(0,r.kt)("li",{parentName:"ul"},"Added function to verify token against API.")),(0,r.kt)("h4",{id:"discord"},"Discord"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented the following commands:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"legoflip")," - A simple lego flip which generates 2 different avatar heads, a unique command for the community."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"play")," - Display all Network servers to play on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"policy")," - Display Network policy (Rules, Terms, Privacy, and Refund)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rules")," - Display link to the Network Rules."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"website")," - Display link to the Network Website."))),(0,r.kt)("li",{parentName:"ul"},"Implemented a filter listener connected to the filter API which checks incoming messages for prohibited content, using filters for links or phrases if enabled. If such content is detected, it sends a warning to the message sender. If an error occurs during this process, it is logged."),(0,r.kt)("li",{parentName:"ul"},"Implemented a jokingly General Kenobi listener which checks if the message content includes the phrase \"hello there\" and if the condition is met, sent a message to the same channel saying 'General Kenobi'."),(0,r.kt)("li",{parentName:"ul"},"Implemented a Guild Boosting event which find the premium status of the user, and sends a message to the specified welcome channel about thanking them for the boost."),(0,r.kt)("li",{parentName:"ul"},"Implemented a welcome user event which checks for a Verified user, and sends a welcome message specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"joinMessages.json")," with a random HEX code to the welcome channel."),(0,r.kt)("li",{parentName:"ul"},"Implemented a message deletion event which checks for when a user deletes a message it creates an embed with details about the deleted message, including the author, channel, and content and sends to the specified admin log channel."),(0,r.kt)("li",{parentName:"ul"},"Implemented a message edit event which checks for when a user edits a message it creates an embed with details about the edited message, including the author, channel, and content and sends to the specified admin log channel.")))}u.isMDXComponent=!0}}]);