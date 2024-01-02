"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9006],{9920:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=i(5893),o=i(1151);const a={title:"Docs Documentation",description:"Contributing to the documentation",sidebar_label:"Docs Documentation",sidebar_position:2},d=void 0,s={id:"contributing/documentation",title:"Docs Documentation",description:"Contributing to the documentation",source:"@site/docs/contributing/documentation.md",sourceDirName:"contributing",slug:"/contributing/documentation",permalink:"/docs/contributing/documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/contributing/documentation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Docs Documentation",description:"Contributing to the documentation",sidebar_label:"Docs Documentation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Discord",permalink:"/docs/products/zander/features/discord"},next:{title:"Conventions",permalink:"/docs/contributing/zander/apiConventions"}},r={},c=[{value:"Documentation Installation",id:"documentation-installation",level:2},{value:"Compiling the Documentation",id:"compiling-the-documentation",level:2},{value:"Contributing to the API Documentation",id:"contributing-to-the-api-documentation",level:2},{value:"Understanding the API Template",id:"understanding-the-api-template",level:3},{value:"Adding a page",id:"adding-a-page",level:3},{value:"Adding a footer",id:"adding-a-footer",level:3},{value:"Live editing",id:"live-editing",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Contributing to the documentation is readily encouraged. Feel free to submit a pull request if you feel you can add to the documentation."}),"\n",(0,t.jsx)(n.h2,{id:"documentation-installation",children:"Documentation Installation"}),"\n",(0,t.jsxs)(n.p,{children:["To compile the documentation you will need ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," and ",(0,t.jsx)(n.a,{href:"https://www.python.org/",children:"Python3"}),". With Node.js installed you should be able to run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also check to see if Python is installed with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Optionally): Start a python virtual environment."}),"\n",(0,t.jsx)(n.p,{children:"You will then need to install the yaml parser with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python -m pip install -r requirements.txt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compiling-the-documentation",children:"Compiling the Documentation"}),"\n",(0,t.jsx)(n.p,{children:"Open a terminal and run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd vendor\npython APIGenerator/src/gen.py --build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will build the documentation to the directory ",(0,t.jsx)(n.code,{children:"docs"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Any local API documentation modification in the ",(0,t.jsx)(n.code,{children:"docs"})," directory will be overwritten whenever a build takes place. To edit the footers edit the files in ",(0,t.jsx)(n.code,{children:"api"}),", or modify ",(0,t.jsx)(n.code,{children:"docs.yaml"})," directly."]})}),"\n",(0,t.jsx)(n.p,{children:"Then run the following to install all of the nodejs packages required for the documentation platform:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then run the following to start the documentation platform:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will start Docusaurus at ",(0,t.jsx)(n.a,{href:"localhost:3000",children:(0,t.jsx)(n.code,{children:"localhost:3000"})})," where you can navigate your changes locally."]}),"\n",(0,t.jsx)(n.h2,{id:"contributing-to-the-api-documentation",children:"Contributing to the API Documentation"}),"\n",(0,t.jsxs)(n.p,{children:["The API documentation is unique because most of each page is built dynamically using ",(0,t.jsx)(n.code,{children:"gen.py"}),". To edit one of the endpoints key information open ",(0,t.jsx)(n.code,{children:"vendor/docs.yaml"})," and navigate to the endpoint you wish to edit. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# ...\ndiscord:\n  sidebar: Discord\n  files:\n  - join.mdx:\n      route: discord/join\n      method: POST\n      privileged: true\n      short: Log user joining\n      description: Log a message to a Discord channel when user joins the Network.\n      parameters:\n        username:\n          type: string\n          info: Users IGN.\n          optional: false\n# ...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can see how this is rendered by looking at\n",(0,t.jsx)(n.a,{href:"/docs/products/zander/api/discord/join",children:"discord/join"})]}),"\n",(0,t.jsx)(n.h3,{id:"understanding-the-api-template",children:"Understanding the API Template"}),"\n",(0,t.jsxs)(n.p,{children:["The API template can be found at ",(0,t.jsx)(n.code,{children:"api/template.mdx"}),". This file outlines how ",(0,t.jsx)(n.code,{children:"gen.py"})," will generate each API page from the data contained in ",(0,t.jsx)(n.code,{children:"docs.yaml"}),". Variables with parentheses ",(0,t.jsx)(n.code,{children:"(VAR)"})," perform a simple replace. Variables with opening parentheses ",(0,t.jsx)(n.code,{children:"(VAR)"})," and closing arentheses ",(0,t.jsx)(n.code,{children:"(/VAR)"})," can be included based on a condition. These substitutions are performed in ",(0,t.jsx)(n.code,{children:"generate_file"})," in ",(0,t.jsx)(n.code,{children:"gen.py"}),". Example:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"example_template.mdx"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"My name is (NAME).\n\n(HOBBIES)\n- I like (GAME)\n(/HOBBIES)\n\n(SECRETS)\n- I like pineapple on pizza\n(/SECRETS)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"generate_file()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'template.replace("NAME", "shadowolfyt")\ntemplate.replace("GAME", "Minecraft")\ntemplate.remove_line_with_if("HOBBIES", False)\ntemplate.remove_line_with_if("SECRETS", True)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Final page"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"My name is shadowolfyt.\n\n- I like Minecraft\n\n"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"adding-a-page",children:"Adding a page"}),"\n",(0,t.jsxs)(n.p,{children:["To add a page, simply create a new endpoint in ",(0,t.jsx)(n.code,{children:"docs.yaml"})," under the section you desire. See the documentation at ",(0,t.jsx)(n.a,{href:"https://github.com/ModularSoftAU/APIGenerator",children:"API Generator"})," for more information about the format of ",(0,t.jsx)(n.code,{children:"docs.yaml"})," and the config."]}),"\n",(0,t.jsx)(n.admonition,{title:"Types",type:"caution",children:(0,t.jsxs)(n.p,{children:["Endpoints have some values type checked in ",(0,t.jsx)(n.code,{children:"gen.py"}),". For example, valid methods\nmust be ",(0,t.jsx)(n.code,{children:"POST"})," or ",(0,t.jsx)(n.code,{children:"GET"})," and valid parameter types must be ",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"boolean"}),",\nor ",(0,t.jsx)(n.code,{children:"integer"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"adding-a-footer",children:"Adding a footer"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoints can include a footer that includes typical usage examples and any edge cases. These footers are spliced onto the end of the template in ",(0,t.jsx)(n.code,{children:"gen.py"}),". Footers are found in the ",(0,t.jsx)(n.code,{children:"api"})," directory. The file structure here is identical to the file structure made in ",(0,t.jsx)(n.code,{children:"docs.yaml"})," (again see docs for more info)."]}),"\n",(0,t.jsx)(n.h2,{id:"live-editing",children:"Live editing"}),"\n",(0,t.jsxs)(n.p,{children:["Whenever you make a change to a footer, you will have to re-run ",(0,t.jsx)(n.code,{children:"gen.py"})," to see the changes on the website. This can get annoying."]}),"\n",(0,t.jsxs)(n.p,{children:["To alleviate this, ",(0,t.jsx)(n.code,{children:"gen.py"})," supports live editing mode. To start live editing\nmode run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd vendor\npython APIGenerator/src/gen.py --live\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will start ",(0,t.jsx)(n.code,{children:"gen.py"}),". It will then poll the template directory and immediately rebuild the api if a change occurs."]}),"\n",(0,t.jsxs)(n.p,{children:["To end live coding mode simple press ",(0,t.jsx)(n.code,{children:"CTRL+C"})," on your keyboard."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>d});var t=i(7294);const o={},a=t.createContext(o);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);