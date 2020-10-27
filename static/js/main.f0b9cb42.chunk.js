(this["webpackJsonpsubstrate-front-end-template"]=this["webpackJsonpsubstrate-front-end-template"]||[]).push([[0],{1204:function(e){e.exports=JSON.parse('{"PROVIDER_SOCKET":"wss://rpc.polkadot.io"}')},1213:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(148),l=n.n(c),o=n(26),u=n(1238),i=n(1227),s=n(1240),E=n(1236),m=n(1228),p=n(1225),f=(n(578),n(18)),d=n.n(f),b=n(30),O=n(25),v=n(367),C=n.n(v),h=n(553),y=n.n(h),S=n(368),R=n(228),j=n(305),N=n.n(j),g=n(557),_=n(1204),k=["REACT_APP_PROVIDER_SOCKET","REACT_APP_DEVELOPMENT_KEYRING"].reduce((function(e,t){return void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/substrate-front-end-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]&&(e[t.slice(10)]=Object({NODE_ENV:"production",PUBLIC_URL:"/substrate-front-end-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]),e}),{}),T=Object(O.a)(Object(O.a)(Object(O.a)({},g),_),k),w=y.a.parse(window.location.search).rpc||T.PROVIDER_SOCKET;console.log("Connected socket: ".concat(w));var P={socket:w,jsonrpc:Object(O.a)(Object(O.a)({},C.a),T.RPC),types:T.CUSTOM_TYPES,keyring:null,keyringState:null,api:null,apiError:null,apiState:null},A=function(e,t){switch(t.type){case"CONNECT_INIT":return Object(O.a)(Object(O.a)({},e),{},{apiState:"CONNECT_INIT"});case"CONNECT":return Object(O.a)(Object(O.a)({},e),{},{api:t.payload,apiState:"CONNECTING"});case"CONNECT_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{apiState:"READY"});case"CONNECT_ERROR":return Object(O.a)(Object(O.a)({},e),{},{apiState:"ERROR",apiError:t.payload});case"LOAD_KEYRING":return Object(O.a)(Object(O.a)({},e),{},{keyringState:"LOADING"});case"SET_KEYRING":return Object(O.a)(Object(O.a)({},e),{},{keyring:t.payload,keyringState:"READY"});case"KEYRING_ERROR":return Object(O.a)(Object(O.a)({},e),{},{keyring:null,keyringState:"ERROR"});default:throw new Error("Unknown type: ".concat(t.type))}},x=!1,D=r.a.createContext(),I=function(e){var t=Object(O.a)({},P);["socket","types"].forEach((function(n){t[n]="undefined"===typeof e[n]?t[n]:e[n]}));var n=Object(a.useReducer)(A,t),c=Object(o.a)(n,2),l=c[0],u=c[1];return function(e,t){var n=e.apiState,a=e.socket,r=e.jsonrpc,c=e.types;if(!n){t({type:"CONNECT_INIT"});var l=new S.WsProvider(a),o=new S.ApiPromise({provider:l,types:c,rpc:r});o.on("connected",(function(){t({type:"CONNECT",payload:o}),o.isReady.then((function(e){return t({type:"CONNECT_SUCCESS"})}))})),o.on("ready",(function(){return t({type:"CONNECT_SUCCESS"})})),o.on("error",(function(e){return t({type:"CONNECT_ERROR",payload:e})}))}}(l,u),function(e,t){var n=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_KEYRING"}),e.prev=1,e.next=4,Object(R.web3Enable)(T.APP_NAME);case 4:return e.next=6,Object(R.web3Accounts)();case 6:n=(n=e.sent).map((function(e){var t=e.address,n=e.meta;return{address:t,meta:Object(O.a)(Object(O.a)({},n),{},{name:"".concat(n.name," (").concat(n.source,")")})}})),N.a.loadAll({isDevelopment:T.DEVELOPMENT_KEYRING},n),t({type:"SET_KEYRING",payload:N.a}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),t({type:"KEYRING_ERROR"});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();if(!e.keyringState){if(x)return t({type:"SET_KEYRING",payload:N.a});x=!0,n()}}(l,u),r.a.createElement(D.Provider,{value:l},e.children)},H=function(){return Object(O.a)({},Object(a.useContext)(D))},K=(n(73),n(1214));function Y(e){var t=H(),a=t.api,r=t.apiState,c=t.keyring,l=t.keyringState;return"READY"===r&&(window.api=a),"READY"===l&&(window.keyring=c),window.util=n(4),window.utilCrypto=n(45),null}var M=n(292),G=n(1230),B=n(561),L=n(1229),z=n(231),U=n(156);function V(e){var t=H().keyring,n=e.setAccountAddress,c=Object(a.useState)(""),l=Object(o.a)(c,2),u=l[0],i=l[1],s=t.getPairs().map((function(e){return{key:e.address,value:e.address,text:e.meta.name.toUpperCase(),icon:"user"}})),E=s.length>0?s[0].value:"";Object(a.useEffect)((function(){n(E),i(E)}),[n,E]);return r.a.createElement(G.a,{attached:"top",tabular:!0,style:{backgroundColor:"#fff",borderColor:"#fff",paddingTop:"1em",paddingBottom:"1em"}},r.a.createElement(p.a,null,r.a.createElement(G.a.Menu,null,r.a.createElement(B.a,{src:"".concat("/substrate-front-end-template","/assets/substrate-logo.png"),size:"mini"})),r.a.createElement(G.a.Menu,{position:"right",style:{alignItems:"center"}},u?null:r.a.createElement("span",null,"Add your account with the"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/polkadot-js/extension"},"Polkadot JS Extension")),r.a.createElement(M.CopyToClipboard,{text:u},r.a.createElement(K.a,{basic:!0,circular:!0,size:"large",icon:"user",color:u?"green":"red"})),r.a.createElement(L.a,{search:!0,selection:!0,clearable:!0,placeholder:"Select an account",options:s,onChange:function(e,t){var a;a=t.value,n(a),i(a)},value:u}),r.a.createElement(J,{accountSelected:u}))))}function J(e){var t=e.accountSelected,n=H().api,c=Object(a.useState)(0),l=Object(o.a)(c,2),u=l[0],i=l[1];return Object(a.useEffect)((function(){var e;return t&&n.query.system.account(t,(function(e){i(e.data.free.toHuman())})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[n,t]),t?r.a.createElement(z.a,{pointing:"left"},r.a.createElement(U.a,{name:"money",color:"green"}),u):null}function W(e){var t=H(),n=t.api;return t.keyring.getPairs&&n.query?r.a.createElement(V,e):null}n(87);var F=n(1233);var q=n(1235),Q=n(1237);function X(e){var t=H().api,n=e.finalized,c=Object(a.useState)(0),l=Object(o.a)(c,2),u=l[0],i=l[1],E=Object(a.useState)(0),m=Object(o.a)(E,2),p=m[0],f=m[1],d=Object(a.useState)(0),b=Object(o.a)(d,2),O=(b[0],b[1]),v=n?t.derive.chain.bestNumberFinalized:t.derive.chain.bestNumber;Object(a.useEffect)((function(){var e=null;return v((function(e){i(e.toNumber()),f(0)})).then((function(t){e=t})).catch(console.error),t.rpc.chain.subscribeNewHeads((function(e){O(JSON.parse(e).parentHash),console.log(JSON.parse(e).parentHash)})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[v]);var C=function(){f((function(e){return e+1}))};return Object(a.useEffect)((function(){var e=setInterval(C,1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement(s.a.Column,null,r.a.createElement(q.a,null,r.a.createElement(q.a.Content,{textAlign:"center"},r.a.createElement(Q.a,{label:(n?"Finalized":"Current")+" Block",value:u})),r.a.createElement(q.a.Content,{extra:!0},r.a.createElement(U.a,{name:"time"})," ",p)))}function Z(e){var t=H().api;return t.derive&&t.derive.chain&&t.derive.chain.bestNumber&&t.derive.chain.bestNumberFinalized?r.a.createElement(X,e):null}function $(e){var t=H().api,n=Object(a.useState)(0),c=Object(o.a)(n,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){return function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.rpc.chain.subscribeNewHeads((function(e){u(e)}))}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){return null}}),[t.derive.chain,t.rpc.chain,l]),r.a.createElement(s.a.Column,null,l&&r.a.createElement(F.a,{celled:!0},r.a.createElement(F.a.Header,null,r.a.createElement(F.a.Row,null,r.a.createElement(F.a.HeaderCell,null,"Block info"),r.a.createElement(F.a.HeaderCell,null,"Data"))),r.a.createElement(F.a.Body,null,r.a.createElement(F.a.Row,null,r.a.createElement(F.a.Cell,null,"Block number"),r.a.createElement(F.a.Cell,null,l.number.toNumber())),r.a.createElement(F.a.Row,null,r.a.createElement(F.a.Cell,null,"Block hash"),r.a.createElement(F.a.Cell,null,l.hash.toHuman())),r.a.createElement(F.a.Row,null,r.a.createElement(F.a.Cell,null,"ParentHash"),r.a.createElement(F.a.Cell,null,l.parentHash.toHuman())),r.a.createElement(F.a.Row,null,r.a.createElement(F.a.Cell,null,"Block state root"),r.a.createElement(F.a.Cell,null,l.stateRoot.toHuman())),r.a.createElement(F.a.Row,null,r.a.createElement(F.a.Cell,null,"block extrinsics Root"),r.a.createElement(F.a.Cell,null,l.extrinsicsRoot.toHuman())))))}function ee(e){var t=H().api;return t.derive&&t.derive.chain&&t.derive.chain.bestNumber&&t.derive.chain.bestNumberFinalized?r.a.createElement($,e):null}n(1232);n(1231),n(1226);var te=n(1234);function ne(e){var t=H().api,n=Object(a.useState)({data:null,version:null}),c=Object(o.a)(n,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rpc.state.getMetadata();case 3:n=e.sent,u({data:n,version:n.version}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.state]),r.a.createElement(s.a.Column,null,r.a.createElement(q.a,null,r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,null,"Metadata"),r.a.createElement(q.a.Meta,null,r.a.createElement("span",null,"v",l.version))),r.a.createElement(q.a.Content,{extra:!0},r.a.createElement(te.a,{trigger:r.a.createElement(K.a,null,"Show Metadata")},r.a.createElement(te.a.Header,null,"Runtime Metadata"),r.a.createElement(te.a.Content,{scrolling:!0},r.a.createElement(te.a.Description,null,r.a.createElement("pre",null,r.a.createElement("code",null,JSON.stringify(l.data,null,2)))))))))}function ae(e){var t=H().api;return t.rpc&&t.rpc.state&&t.rpc.state.getMetadata?r.a.createElement(ne,e):null}function re(e){var t=H().api,n=Object(a.useState)({}),c=Object(o.a)(n,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var n,a,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.rpc.system.chain(),t.rpc.system.name(),t.rpc.system.version()]);case 3:n=e.sent,a=Object(o.a)(n,3),r=a[0],c=a[1],l=a[2],u({chain:r,nodeName:c,nodeVersion:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.system]),r.a.createElement(s.a.Column,null,r.a.createElement(q.a,null,r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,null,l.nodeName),r.a.createElement(q.a.Meta,null,r.a.createElement("span",null,l.chain)),r.a.createElement(q.a.Description,null,"Built using the"," ",r.a.createElement("a",{href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Substrate Front End Template"))),r.a.createElement(q.a.Content,{extra:!0},r.a.createElement(U.a,{name:"setting"}),"v",l.nodeVersion)))}function ce(e){var t=H().api;return t.rpc&&t.rpc.system&&t.rpc.system.chain&&t.rpc.system.name&&t.rpc.system.version?r.a.createElement(re,e):null}function le(){var e,t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],f=H(),d=f.apiState,b=f.keyring,O=f.keyringState,v=f.apiError,C=(c&&"READY"===O&&b.getPair(c),function(e){return r.a.createElement(u.a,{active:!0},r.a.createElement(i.a,{size:"small"},e))});if("ERROR"===d)return e=v,r.a.createElement(s.a,{centered:!0,columns:2,padded:!0},r.a.createElement(s.a.Column,null,r.a.createElement(E.a,{negative:!0,compact:!0,floating:!0,header:"Error Connecting to Substrate",content:"".concat(JSON.stringify(e,null,4))})));if("READY"!==d)return C("Connecting to Substrate");if("READY"!==O)return C("Loading accounts (please review any extension's authorization)");var h=Object(a.createRef)();return r.a.createElement("div",{ref:h},r.a.createElement(m.a,{context:h},r.a.createElement(W,{setAccountAddress:l})),r.a.createElement(p.a,null,r.a.createElement(s.a,{stackable:!0,columns:"equal"},r.a.createElement(s.a.Row,{stretched:!0},r.a.createElement(ce,null),r.a.createElement(ae,null),r.a.createElement(Z,null),r.a.createElement(Z,{finalized:!0})),r.a.createElement(ee,null))),r.a.createElement(Y,null))}function oe(){return r.a.createElement(I,null,r.a.createElement(le,null))}l.a.render(r.a.createElement(oe,null),document.getElementById("root"))},557:function(e){e.exports=JSON.parse('{"APP_NAME":"substrate-front-end-tutorial","DEVELOPMENT_KEYRING":true,"RPC":{}}')},573:function(e,t,n){e.exports=n(1213)},646:function(e,t){},698:function(e,t){},700:function(e,t){},710:function(e,t){},712:function(e,t){},738:function(e,t){},740:function(e,t){},741:function(e,t){},746:function(e,t){},748:function(e,t){},755:function(e,t){},757:function(e,t){},776:function(e,t){},788:function(e,t){},791:function(e,t){},811:function(e,t){}},[[573,1,2]]]);
//# sourceMappingURL=main.f0b9cb42.chunk.js.map