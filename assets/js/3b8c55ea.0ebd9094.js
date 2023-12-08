"use strict";(self.webpackChunkflamework=self.webpackChunkflamework||[]).push([[3217],{6995:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(5893),l=n(1151);const r={title:"Installation"},i=void 0,s={id:"installation",title:"Installation",description:"This guide will show you how to get up and running with Flamework!",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/rbxts-flamework/documentation/docs/installation.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"flamework",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Frequently Asked",permalink:"/docs/frequently-asked"}},a={},d=[{value:"Flamework template",id:"flamework-template",level:2},{value:"Create your project folder",id:"create-your-project-folder",level:3},{value:"Create the template",id:"create-the-template",level:3},{value:"Compiling",id:"compiling",level:3},{value:"Manual installation",id:"manual-installation",level:2},{value:"Setting up your project",id:"setting-up-your-project",level:3},{value:"Installing Flamework",id:"installing-flamework",level:3},{value:"Packages",id:"packages",level:4},{value:"Configure tsconfig.json",id:"configure-tsconfigjson",level:4},{value:"Configure default.project.json",id:"configure-defaultprojectjson",level:4},{value:"Compiling",id:"compiling-1",level:3},{value:"Delete <code>out</code>",id:"delete-out",level:4},{value:"Installing roblox-ts",id:"installing-roblox-ts",level:4},{value:"Build your project!",id:"build-your-project",level:4},{value:"Updating Flamework",id:"updating-flamework",level:3},{value:"Update the packages",id:"update-the-packages",level:4},{value:"Reset your build",id:"reset-your-build",level:4},{value:"Build your project!",id:"build-your-project-1",level:4}];function c(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"This guide will show you how to get up and running with Flamework!"}),"\n",(0,t.jsx)(o.h2,{id:"flamework-template",children:"Flamework template"}),"\n",(0,t.jsx)(o.p,{children:"If you're starting a new project, the simplest way to setup Flamework is to use our template."}),"\n",(0,t.jsx)(o.h3,{id:"create-your-project-folder",children:"Create your project folder"}),"\n",(0,t.jsx)(o.p,{children:"You'll want to create the folder where your project will be stored. This can be anywhere on your pc."}),"\n",(0,t.jsx)(o.h3,{id:"create-the-template",children:"Create the template"}),"\n",(0,t.jsx)(o.p,{children:"After you've made your project folder, run the following commands inside of the directory."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx degit rbxts-flamework/template\nnpm i\n"})}),"\n",(0,t.jsx)(o.h3,{id:"compiling",children:"Compiling"}),"\n",(0,t.jsx)(o.p,{children:"You should use the build scripts to compile your project, otherwise Flamework may not work properly.\nAlternatively, you can use the vscode extension which will start up watch mode for you."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm run build # Build your project\nnpm run watch # Start watch mode\n"})}),"\n",(0,t.jsx)(o.h2,{id:"manual-installation",children:"Manual installation"}),"\n",(0,t.jsx)(o.p,{children:"For existing projects."}),"\n",(0,t.jsx)(o.h3,{id:"setting-up-your-project",children:"Setting up your project"}),"\n",(0,t.jsx)(o.p,{children:"Navigate to the directory that you want to place your project. This can be anywhere on your computer."}),"\n",(0,t.jsx)(o.p,{children:"After creating your project folder, you'll want to setup a new roblox-ts project. You can do this by opening command prompt, bash or powershell\nand running the following command."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx roblox-ts init game\n"})}),"\n",(0,t.jsx)(o.p,{children:"The command will ask you several questions about what to setup and you can choose whatever you'd like."}),"\n",(0,t.jsx)(o.h3,{id:"installing-flamework",children:"Installing Flamework"}),"\n",(0,t.jsx)(o.p,{children:"Now that you have your project setup, it's time to install Flamework."}),"\n",(0,t.jsx)(o.h4,{id:"packages",children:"Packages"}),"\n",(0,t.jsx)(o.p,{children:"First off, you'll want to install the flamework library and transformer."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm i -D rbxts-transformer-flamework\nnpm i @flamework/core\n"})}),"\n",(0,t.jsx)(o.p,{children:"You can optionally install the following additional modules. Documentation can be found under the additional modules section."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm i @flamework/components # Flamework's component system\nnpm i @flamework/networking # Flamework's remote networking module\n"})}),"\n",(0,t.jsx)(o.h4,{id:"configure-tsconfigjson",children:"Configure tsconfig.json"}),"\n",(0,t.jsx)(o.p,{children:"Next, you'll need to configure your tsconfig.json.\nYou'll want to add the following json under your compilerOptions field."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'"experimentalDecorators": true,\n"plugins": [\n\t{ "transform": "rbxts-transformer-flamework" }\n]\n'})}),"\n",(0,t.jsx)(o.p,{children:"You'll also need to add the @flamework scope to your typeRoots."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'typeRoots: ["node_modules/@rbxts", "node_modules/@flamework"]\n'})}),"\n",(0,t.jsx)(o.h4,{id:"configure-defaultprojectjson",children:"Configure default.project.json"}),"\n",(0,t.jsxs)(o.p,{children:["Find the following json inside your ",(0,t.jsx)(o.code,{children:"default.project.json"})]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'"node_modules": {\n\t"@rbxts": {\n\t\t"$path": "node_modules/@rbxts"\n\t}\n}\n'})}),"\n",(0,t.jsx)(o.p,{children:"After you've found it, you'll want to replace it with the following json."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'"node_modules": {\n\t"@rbxts": {\n\t\t"$path": "node_modules/@rbxts"\n\t},\n\t"@flamework": {\n\t\t"$path": "node_modules/@flamework"\n\t}\n}\n'})}),"\n",(0,t.jsx)(o.h3,{id:"compiling-1",children:"Compiling"}),"\n",(0,t.jsxs)(o.p,{children:["Now that you have Flamework installed, it's ",(0,t.jsx)(o.em,{children:"almost"})," time for you to start writing some code!"]}),"\n",(0,t.jsxs)(o.h4,{id:"delete-out",children:["Delete ",(0,t.jsx)(o.code,{children:"out"})]}),"\n",(0,t.jsxs)(o.p,{children:["Remove the ",(0,t.jsx)(o.code,{children:"out"})," directory that got generated when you initialized your project.\nThis is only necessary the first time you initialize the project, not after each build."]}),"\n",(0,t.jsx)(o.h4,{id:"installing-roblox-ts",children:"Installing roblox-ts"}),"\n",(0,t.jsxs)(o.p,{children:["Do ",(0,t.jsx)(o.strong,{children:"not"})," use a global install of roblox-ts. A local install inside of your project is necessary for Flamework to work."]}),"\n",(0,t.jsx)(o.p,{children:"Before you can start writing code with Flamework, you'll have to install roblox-ts in your project.\nYou can do this simply by running the following command in your project's directory."}),"\n",(0,t.jsxs)(o.p,{children:["It is necessary to install ",(0,t.jsx)(o.code,{children:"roblox-ts@next"})," until roblox-ts releases version 1.2.0"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm i -D roblox-ts@next\n"})}),"\n",(0,t.jsx)(o.h4,{id:"build-your-project",children:"Build your project!"}),"\n",(0,t.jsx)(o.p,{children:"It's time, you're ready to write some code. Simply run the following command in your project directory."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx rbxtsc -w\n"})}),"\n",(0,t.jsxs)(o.p,{children:["If you're not a fan of using a command, roblox-ts has a ",(0,t.jsx)(o.a,{href:"https://marketplace.visualstudio.com/items?itemName=Roblox-TS.vscode-roblox-ts",children:"vscode plugin"})," that exposes a status bar button and commands that will compile your project for you!"]}),"\n",(0,t.jsx)(o.h3,{id:"updating-flamework",children:"Updating Flamework"}),"\n",(0,t.jsx)(o.p,{children:"When it comes time to update the version of Flamework you are using, simply follow these steps."}),"\n",(0,t.jsx)(o.h4,{id:"update-the-packages",children:"Update the packages"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm i @flamework/core@latest\nnpm i -D rbxts-transformer-flamework@latest\n"})}),"\n",(0,t.jsx)(o.h4,{id:"reset-your-build",children:"Reset your build"}),"\n",(0,t.jsxs)(o.p,{children:["You'll want to delete your project's ",(0,t.jsx)(o.code,{children:"out"})," directory, as well as the autogenerated ",(0,t.jsx)(o.code,{children:"flamework.build"})," file before attempting to recompile."]}),"\n",(0,t.jsx)(o.h4,{id:"build-your-project-1",children:(0,t.jsx)(o.a,{href:"#build-your-project",children:"Build your project!"})})]})}function u(e={}){const{wrapper:o}={...(0,l.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>i});var t=n(7294);const l={},r=t.createContext(l);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);