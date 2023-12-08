"use strict";(self.webpackChunkflamework=self.webpackChunkflamework||[]).push([[7807],{5560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(1151);const i={title:"Remote Events"},s=void 0,a={id:"additional-modules/networking/remote-events",title:"Remote Events",description:"RemoteEvents are for one way communication between the server and client. You should use these when you do not need a response from the receiver.",source:"@site/docs/additional-modules/networking/remote-events.md",sourceDirName:"additional-modules/networking",slug:"/additional-modules/networking/remote-events",permalink:"/docs/additional-modules/networking/remote-events",draft:!1,unlisted:!1,editUrl:"https://github.com/rbxts-flamework/documentation/docs/additional-modules/networking/remote-events.md",tags:[],version:"current",frontMatter:{title:"Remote Events"},sidebar:"flamework",previous:{title:"Introduction",permalink:"/docs/additional-modules/networking/introduction"},next:{title:"Remote Functions",permalink:"/docs/additional-modules/networking/remote-functions"}},c={},l=[{value:"Creation",id:"creation",level:2},{value:"Using Events",id:"using-events",level:2},{value:"Firing Events",id:"firing-events",level:3},{value:"Server",id:"server",level:4},{value:"Client",id:"client",level:4},{value:"Connecting",id:"connecting",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"RemoteEvents are for one way communication between the server and client. You should use these when you do not need a response from the receiver."}),"\n",(0,r.jsx)(n.h2,{id:"creation",children:"Creation"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"Networking.createEvent"})," macro to create your network handler. This will contain all your events for both server and client and you can also configure your ",(0,r.jsx)(n.a,{href:"./middleware",children:"middleware"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It should be noted that you cannot return a value from an event and the return type on the interfaces will be ignored.\nIf you want two way communication then you should use ",(0,r.jsx)(n.a,{href:"./remote-functions",children:"RemoteFunctions"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Networking } from "@flamework/networking";\n\ninterface ClientToServerEvents {\n\tevent(param1: string): void;\n}\n\ninterface ServerToClientEvents {\n\tevent(param1: string): void;\n}\n\n// Returns an object containing a `server` and `client` field.\nexport const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();\n\n// It is recommended that you create these in separate server/client files,\n// which will avoid exposing server configuration (including type guards) to the client.\nexport const ServerEvents = GlobalEvents.createServer({ /* server config */ });\nexport const ClientEvents = GlobalEvents.createClient({ /* client config */ });\n'})}),"\n",(0,r.jsx)(n.h2,{id:"using-events",children:"Using Events"}),"\n",(0,r.jsxs)(n.p,{children:["Once you've declared all your events, it's time to use them. You can access your events simply by indexing the ",(0,r.jsx)(n.a,{href:"./introduction#re-exporting",children:"Events"})," object."]}),"\n",(0,r.jsx)(n.h3,{id:"firing-events",children:"Firing Events"}),"\n",(0,r.jsx)(n.p,{children:"Send a request between the server and client."}),"\n",(0,r.jsx)(n.h4,{id:"server",children:"Server"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Fire to player(s)\nEvents.event.fire(player, ...args);\nEvents.event.fire([player1, player2], ...args);\n\n// Fire to all players except\nEvents.event.except(player, ...args);\nEvents.event.except([player1, player2], ...args);\n\n// Broadcast\nEvents.event.broadcast(...args);\n\n// Predict, fires server event using player as the sender\nEvents.event.predict(player, ...args);\n\n// Shorthand syntax, equivalent to Events.event.fire\nEvents.event(player, ...args);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"client",children:"Client"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Fire to server\nEvents.event.fire(...args);\n\n// Predict, fires client event from the client\nEvents.event.predict(...args);\n\n// Shorthand syntax, equivalent to Events.event.fire\nEvents.event(...args);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"connecting",children:"Connecting"}),"\n",(0,r.jsx)(n.p,{children:"Connecting to an event returns a RBXScriptConnection which can be used to disconnect the event at any time."}),"\n",(0,r.jsxs)(n.p,{children:["The following example is assuming the code is run on the server. Connecting events on the server and client is identical except that clients do not have an additional ",(0,r.jsx)(n.code,{children:"player"})," parameter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Connect to an event\nEvents.event.connect((player, arg1) => {\n\tprint(player, arg1);\n});\n\n// Disconnect an event connection\nconst myConnection = events.event.connect(() => {});\nmyConnection.Disconnect();\n"})})]})}function v(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);