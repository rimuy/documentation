"use strict";(self.webpackChunkflamework=self.webpackChunkflamework||[]).push([[6179],{1533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(5893),a=t(1151);const s={title:"Global Handlers"},r=void 0,i={id:"additional-modules/networking/global-handlers",title:"Global Handlers",description:"The GlobalEvents/GlobalFunctions APIs includes some optional events that you can connect to.",source:"@site/docs/additional-modules/networking/global-handlers.md",sourceDirName:"additional-modules/networking",slug:"/additional-modules/networking/global-handlers",permalink:"/docs/additional-modules/networking/global-handlers",draft:!1,unlisted:!1,editUrl:"https://github.com/rbxts-flamework/documentation/tree/master/docs/additional-modules/networking/global-handlers.md",tags:[],version:"current",frontMatter:{title:"Global Handlers"},sidebar:"flamework",previous:{title:"Middleware",permalink:"/docs/additional-modules/networking/middleware"},next:{title:"Namespaces",permalink:"/docs/additional-modules/networking/namespaces"}},l={},d=[{value:"Connection",id:"connection",level:2},{value:"Events",id:"events",level:2},{value:"onBadRequest",id:"onbadrequest",level:3},{value:"onBadResponse",id:"onbadresponse",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"GlobalEvents"}),"/",(0,o.jsx)(n.code,{children:"GlobalFunctions"})," APIs includes some optional events that you can connect to."]}),"\n",(0,o.jsx)(n.h2,{id:"connection",children:"Connection"}),"\n",(0,o.jsxs)(n.p,{children:["You can connect to one of these optional events by using ",(0,o.jsx)(n.code,{children:"GlobalEvents.registerHandler(name, callback)"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'export const GlobalEvents = Networking.createEvent<S, C>();\nexport const GlobalFunctions = Networking.createFunction<S, C>();\n\n\nGlobalEvents.registerHandler("onBadRequest", (player) => print(player, "sent a bad request!"));\nGlobalEvents.registerHandler("onBadResponse", (player) => print(player, "returned a bad response!"));\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,o.jsxs)(n.p,{children:["Every handler is fired with the player in question (on the client, this will always be ",(0,o.jsx)(n.code,{children:"Players.LocalPlayer"})," even when events are caused by the server) along with an event data object."]}),"\n",(0,o.jsxs)(n.p,{children:["Every event data object includes a ",(0,o.jsx)(n.code,{children:"networkInfo"})," field containing information about the RemoteEvent/RemoteFunction that caused this event."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'export interface NetworkInfo {\n\t/**\n\t * The name provided for this event.\n\t */\n\tname: string;\n\n\t/**\n\t * The (generated) global name used for distinguishing different createEvent calls.\n\t */\n\tglobalName: string;\n\n\t/**\n\t * Whether this remote is an event or function.\n\t */\n\teventType: "Event" | "Function";\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Along with the ",(0,o.jsx)(n.code,{children:"networkInfo"})," field, each event also includes its own relevant data, specific to each event."]}),"\n",(0,o.jsx)(n.h3,{id:"onbadrequest",children:"onBadRequest"}),"\n",(0,o.jsx)(n.p,{children:"This event is fired when the server or client fires a remote but the arguments do not pass the generated type guards.\nIt is not recommended to use this for moderative action as false positives can happen in many ways."}),"\n",(0,o.jsx)(n.p,{children:"This event is fired for both RemoteEvents and RemoteFunctions."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface BadRequestData {\n\t/**\n\t * The index of the argument that was incorrect.\n\t */\n\targIndex: number;\n\n\t/**\n\t * The value of the argument that was incorrect.\n\t */\n\targValue: unknown;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"onbadresponse",children:"onBadResponse"}),"\n",(0,o.jsx)(n.p,{children:"This event is fired when the server or client return a value from a RemoteFunction callback that does not pass the generated type guards.\nIt is not recommended to use this for moderative action as false positives can happen in many ways."}),"\n",(0,o.jsx)(n.p,{children:"This event is only fired for RemoteFunctions."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface BadResponseData {\n\t/**\n\t * The value of the argument that was incorrect.\n\t */\n\tvalue: unknown;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(7294);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);