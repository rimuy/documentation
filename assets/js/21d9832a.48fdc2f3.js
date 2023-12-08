"use strict";(self.webpackChunkflamework=self.webpackChunkflamework||[]).push([[5818],{2141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(5893),o=t(1151);const r={title:"Introduction"},s=void 0,l={id:"additional-modules/networking/introduction",title:"Introduction",description:"Flamework's networking is designed with ease of use and convenience in mind.",source:"@site/docs/additional-modules/networking/introduction.md",sourceDirName:"additional-modules/networking",slug:"/additional-modules/networking/introduction",permalink:"/docs/additional-modules/networking/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/rbxts-flamework/documentation/docs/additional-modules/networking/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"flamework",previous:{title:"Ignition!",permalink:"/docs/guides/ignition"},next:{title:"Remote Events",permalink:"/docs/additional-modules/networking/remote-events"}},d={},c=[{value:"Features",id:"features",level:2},{value:"Re-exporting",id:"re-exporting",level:2}];function a(e){const n={a:"a",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Flamework's networking is designed with ease of use and convenience in mind."}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./remote-events",children:"RemoteEvents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One way communication between the server and client."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./remote-functions",children:"RemoteFunctions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Two way communication between the server and client."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./middleware",children:"Middleware"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Modify, delay or drop requests on the receiver before being passed to handlers."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Automatic type guards","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Declare the event and let Flamework handle the rest ",(0,i.jsx)(n.del,{children:"(except writing your code)"}),"!"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"re-exporting",children:"Re-exporting"}),"\n",(0,i.jsxs)(n.p,{children:["After you've defined your networking events and/or functions, you'll want to export the created ",(0,i.jsx)(n.code,{children:"server"})," and ",(0,i.jsx)(n.code,{children:"client"})," objects in separate files."]}),"\n",(0,i.jsxs)(n.p,{children:["If you use the ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=roblox-ts.vscode-roblox-ts",children:"roblox-ts vscode extension"})," then the intellisense will hide the server objects on the client and vice-versa."]}),"\n",(0,i.jsx)(n.p,{children:"This will also allow you to hide server-specific configuration (such as generated type guards or middleware) from the client, for additional security."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'// Assumes your GlobalEvents/GlobalFunctions object is in shared/networking.ts\nimport { GlobalEvents } from "shared/networking";\nimport { GlobalFunctions } from "shared/networking";\n\n// client/networking.ts\nexport const Events = GlobalEvents.createClient();\nexport const Functions = GlobalFunctions.createClient();\n\n// server/networking.ts\nexport const Events = GlobalEvents.createServer();\nexport const Functions = GlobalFunctions.createServer();\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);