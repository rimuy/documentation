"use strict";(self.webpackChunkflamework=self.webpackChunkflamework||[]).push([[135],{4266:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var t=o(5893),r=o(1151);const c={title:"Dependencies"},i=void 0,s={id:"guides/dependencies",title:"Dependencies",description:"This page will cover how to retrieve singletons from inside other singletons, or anywhere else in your code.",source:"@site/docs/guides/dependencies.md",sourceDirName:"guides",slug:"/guides/dependencies",permalink:"/docs/guides/dependencies",draft:!1,unlisted:!1,editUrl:"https://github.com/rbxts-flamework/documentation/docs/guides/dependencies.md",tags:[],version:"current",frontMatter:{title:"Dependencies"},sidebar:"flamework",previous:{title:"Creating a Singleton",permalink:"/docs/guides/creating-a-singleton"},next:{title:"Lifecycle Events",permalink:"/docs/guides/lifecycle-events"}},d={},a=[{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Dependency Macro",id:"dependency-macro",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This page will cover how to retrieve singletons from inside other singletons, or anywhere else in your code."}),"\n",(0,t.jsx)(n.h2,{id:"dependency-injection",children:"Dependency Injection"}),"\n",(0,t.jsx)(n.p,{children:"The preferred way to get references to your singletons is by using dependency injection. Flamework uses a constructor-based DI system, which means you simply specify the dependencies in your constructor and Flamework will automatically pass them when creating the singleton."}),"\n",(0,t.jsxs)(n.p,{children:["When you request a dependency through dependency injection, Flamework will ",(0,t.jsx)(n.a,{href:"/docs/guides/creating-a-singleton#load-order",children:"automatically determine the load order"})," of your singletons."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { OtherService } from "./otherService";\n\n@Service()\nexport class MyService {\n\tconstructor(private otherService: OtherService) {}\n\n\tmethod() {\n\t\tprint(this.otherService.getName());\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"dependency-macro",children:"Dependency Macro"}),"\n",(0,t.jsx)(n.p,{children:"If you cannot, or do not want to, use dependency injection then you can use the Dependency macro. The macro will grab a reference to your singleton and can be called from anywhere in your code, not just in other singletons."}),"\n",(0,t.jsxs)(n.admonition,{title:"Not Recommended",type:"danger",children:[(0,t.jsxs)(n.p,{children:["It is not recommended to use the ",(0,t.jsx)(n.code,{children:"Dependency"})," macro."]}),(0,t.jsxs)(n.p,{children:["While the ",(0,t.jsx)(n.code,{children:"Dependency"})," macro can be more convenient, it can also harm your ability to stub, test or refactor your code.\nYou should pass dependencies down through dependency injection, e.g through function arguments, Roact ",(0,t.jsx)(n.code,{children:"Context"}),"s, etc."]}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Dependency"})," macro can also obfuscate the execution order of your singletons, as a dependency of a singleton might run ",(0,t.jsx)(n.em,{children:"after"})," your singleton,\nas Flamework cannot statically know your singleton depends on another."]}),(0,t.jsxs)(n.p,{children:["When Flamework releases v2.0, the ",(0,t.jsx)(n.code,{children:"Dependency"})," macro may be removed or be unable to run in certain contexts, e.g prior to ignition."]}),(0,t.jsx)(n.p,{children:"If those aspects do not matter to you, then you can proceed, I won't stop you."})]}),"\n",(0,t.jsx)(n.p,{children:"Some examples of where you may use the Dependency macro over DI:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utility functions"}),"\n",(0,t.jsx)(n.li,{children:"Roact components"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to bypass circular dependency errors using the ",(0,t.jsx)(n.code,{children:"Dependency"})," macro, but this is not recommended and is widely considered an anti-pattern."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const myDependency = Dependency<MyDependency>();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>i});var t=o(7294);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);