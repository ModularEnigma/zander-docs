"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6336],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,g=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"Using JSON Simple",sidebar_label:"Using JSON Simple",sidebar_position:1},i=void 0,s={unversionedId:"miscellaneous/using_json_simple",id:"miscellaneous/using_json_simple",title:"Using JSON Simple",description:"The main take away with JSONSimple (and most other Java JSON libraries) is that Objects can be one of three things at all times.",source:"@site/docs/miscellaneous/using_json_simple.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/using_json_simple",permalink:"/docs/miscellaneous/using_json_simple",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/miscellaneous/using_json_simple.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using JSON Simple",sidebar_label:"Using JSON Simple",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Form Modules",permalink:"/docs/contributing/zander/formModules"},next:{title:"Installing Datapacks",permalink:"/docs/miscellaneous/installingDatapacks"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The main take away with JSONSimple (and most other Java JSON libraries) is that Objects can be one of three things at all times."),(0,a.kt)("p",null,"It can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONObject"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n    // This format\n}\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONArray"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"[\n    // This format\n]\n")),(0,a.kt)("p",null,"Or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"."),(0,a.kt)("p",null,"All the functions return ",(0,a.kt)("inlineCode",{parentName:"p"},"Objects")," so it is up to the programmer to understand the format of the json and how it is meant to be casted to enable reading the JSON."),(0,a.kt)("p",null,"If you have some JSON that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "integer": 5,\n    "double": 0.5,\n    "string": "Hello, World!",\n    "numbers": [1, 2, 3, 4, 5],\n    "nested_content": [\n        {\n            "x": 2,\n            "y": 5\n        },\n        {\n            "x": 7,\n            "y": 8\n        },\n    ]\n}\n')),(0,a.kt)("p",null,"...we can begin to deconstruct this into ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONObjects"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONArrays")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Objects"),". Each of the methods below show how you would parse the json to retrieve the desired values."),(0,a.kt)("p",null,"Disclaimer: I have not tested this code at all."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.json.simple.JSONArray;\nimport org.json.simple.JSONObject;\nimport org.json.simple.parser.JSONParser;\nimport org.json.simple.parser.ParseException;\nimport java.util.List;\n\n\npublic class JsonSimpleExample {\n    private JSONObject jsonObject;\n\n    /**\n     * This is how you first convert a string into a JSONObject.\n     * For our example, let\'s assume they input the JSON from\n     * above.\n     */\n    public JsonSimpleExample(String json) {\n        try {\n            jsonObject = (JSONObject) new JSONParser().parse(json);\n        } catch (ParseException e) {\n            // Is not valid JSON\n        }\n    }\n\n    /**\n     * This returns an Object that we know is an integer so \n     * we can safely cast it. Note that we are casting it to\n     * a long not to an int, because internally this library\n     * reads integers as longs. You can cast it to a int if\n     * you know this won\'t be a problem.\n     */\n    public long getInteger() {\n        return (long)jsonObject.get("integer");\n    }\n\n    /**\n     * This returns an Object that we know is a double so \n     * we can safely cast it.\n     */\n    public double getDouble() {\n        return (double)jsonObject.get("double");\n    }\n\n    /**\n     * This returns an Object that we know is a String so \n     * we can safely cast it.\n     */\n    public String getString() {\n        return (String)jsonObject.get("string");\n    }\n\n    public List<Long> getNumbers() {\n        List<Long> numbers = new ArrayList<>();\n        JSONArray array = (JSONArray)jsonObject.get("numbers");\n        for (int i = 0; i < array.size(); i++) {\n            // Again, notice how we jump straight to casting the\n            // Object returned by get to a Long because we know\n            // it\'s an integer.\n            Long number = (Long)array.get(i);\n            numbers.add(number);\n        }\n        return numbers;\n    }\n\n    /**\n     * This is a more complicated example to show how you can combine\n     * the concepts above to read any JSON.\n     */\n    public void getNestedContent() {\n        JSONArray nestedContent = (JSONArray)jsonObject.get("nested_content");\n        for (int i = 0; i < nested_content.size(); i++) {\n            // Here we are casting the Object to a JSONObject, because\n            // it is still of the form {}. Therefore it is a JSONObject\n            // still and must be casted to that.\n            JSONObject innerJsonObject = (JSONObject)nested_content.get(i);\n\n            // And now that you\'ve extracted this data, you might opt\n            // to store it inside a class or another data structure.\n            // For this example I\'ve just left it here.\n            long x = (long)innerJsonObject.get("x");\n            long y = (long)innerJsonObject.get("x");\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);