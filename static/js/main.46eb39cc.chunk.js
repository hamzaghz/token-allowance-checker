(this.webpackJsonpTAC=this.webpackJsonpTAC||[]).push([[0],{1020:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(90),l=a.n(c),o=(a(492),a(493),a(70)),s=a(74),i=a(9),u=a.n(i),m=a(34),d=a(19),p=a(470),b=a(446),f=a(255),E=a.n(f),h=a(1061),g=a(1058),w=a(59),v=Object(n.createContext)({onboard:null,web3:null,address:null,networkId:null,loggedIn:!1,loginFunction:null}),k=function(e){var t=Object(n.useState)(),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(),s=Object(d.a)(o,2),i=s[0],p=s[1],f=Object(n.useState)(),k=Object(d.a)(f,2),y=k[0],O=k[1],j=Object(n.useState)(),S=Object(d.a)(j,2),x=S[0],C=S[1],A=Object(n.useState)(!1),z=Object(d.a)(A,2),T=z[0],N=z[1];Object(n.useEffect)((function(){console.log("Initializing OnBoard.js...");var e=Object(b.a)({dappId:"f4b71bf0-fe50-4eeb-bc2b-b323527ed9e6",networkId:1,subscriptions:{wallet:function(e){console.log("".concat(e.name," is now connected!")),l(new E.a(e.provider))},address:function(e){p(e),console.log("Address changed to ".concat(e,"!"))},network:function(e){O(e),console.log("NetworkId change to ".concat(e))}}});C(e)}),[]);var I=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=17;break}if(T){e.next=13;break}return console.log("logging in"),e.next=5,x.walletSelect();case 5:if(!(t=e.sent)){e.next=10;break}return e.next=9,x.walletCheck();case 9:N(!0);case 10:return e.abrupt("return",t);case 13:return console.log("already logged in"),e.abrupt("return",!0);case 15:e.next=19;break;case 17:return console.log("Trying login without onboard"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H={onboard:x,web3:c,address:i,networkId:y,loginFunction:I};return x?(console.log("Onboard initialized!"),r.a.createElement(v.Provider,{value:H},e.children)):(console.log("Onboard not yet initialized!"),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{basic:!0,padded:"very",textAlign:"center"},r.a.createElement(g.a,{info:!0,icon:!0,size:"huge"},r.a.createElement(w.a,{name:"spinner",loading:!0}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Initializing web3"),"Please wait while initializing web3 connection.")))))},y=a(449),O=a(1049),j=a(1057),S=a(1055),x=a(1021),C=a(1062),A=function(e){var t=e.address,a=e.ensName;return a?r.a.createElement("div",null,r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement("small",null,t))):r.a.createElement("div",null,t)},z=a(50),T=a.n(z),N=a(141),I=a.n(N);function H(e,t,a){if(!("string"===typeof(n=e)||n instanceof String))throw new Error("Pass strings to prevent floating point precision issues.");var n,r=new a(10).pow(new a(t)),c="-"===e.substring(0,1);if(c&&(e=e.substring(1)),"."===e)throw new Error("Invalid value ".concat(e," cannot be converted to")+" base unit with ".concat(t," decimals."));var l=e.split(".");if(l.length>2)throw new Error("Too many decimal points");var o=l[0],s=l[1];if(o||(o="0"),s||(s="0"),s.length>t)throw new Error("Too many decimal places");for(;s.length<t;)s+="0";o=new a(o),s=new a(s);var i=o.mul(r).add(s);return c&&(i=i.neg()),new a(i.toString(10),10)}var B=a(1053),D=a(1052),F=a(1048),L=a(1060),q=function(e){var t=e.showModal,a=e.tokenName,n=e.tokenAddress,c=e.spenderAddress,l=e.currentAllowance,o=e.newAllowance,s=e.handleClose,i=e.handleSubmit,u=e.handleChange,m=a;return""===m&&(m="Unknown ERC20 at ".concat(n)),r.a.createElement(B.a,{open:t,size:"small",onClose:s},r.a.createElement(C.a,null,"Edit Allowance"),r.a.createElement(B.a.Content,null,r.a.createElement(g.a,{size:"huge"},r.a.createElement(g.a.List,null,r.a.createElement(g.a.Item,null,"Token: ",m),r.a.createElement(g.a.Item,null,"Spender: ",c),r.a.createElement(g.a.Item,null,"Current allowance: ",l))),r.a.createElement(D.a,{size:"huge",onSubmit:i},r.a.createElement(D.a.Field,{required:!0},r.a.createElement(F.a,{label:{tag:!0,content:"Set new allowance"},labelPosition:"right",placeholder:"Enter amount",type:"number",name:"newAllowance",onChange:u,value:o})),r.a.createElement(L.a,{columns:2},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Column,null,r.a.createElement(D.a.Button,{type:"button",fluid:!0,size:"huge",negative:!0,onClick:s},"Cancel")),r.a.createElement(L.a.Column,null,r.a.createElement(D.a.Button,{type:"submit",fluid:!0,size:"huge",positive:!0},"Okay")))))))},_=function(e){var t=e.handleSubmit,a=e.handleClose,c=e.tokenDecimals,l=e.tokenSupply,o=e.tokenName,s=e.allowance,i=e.spender,u=e.tokenSymbol,m=e.tokenAddress,p=Object(n.useContext)(v),b=Object(n.useState)(""),f=Object(d.a)(b,2),E=f[0],h=f[1],g=Object(n.useCallback)((function(){return s.gte(l)?"unlimited":I()({value:s,decimals:c,roundToDecimals:p.web3.utils.toBN(2)}).rounded}),[s,c,l,p]);return r.a.createElement(q,{currentAllowance:g(),handleClose:a,spenderAddress:i,showModal:!0,tokenName:o,handleChange:function(e,t){var a=t.name,n=t.value;console.log("handleChange: ".concat(a," - ").concat(n)),parseFloat(n)<0&&(n="0"),h(n)},handleSubmit:function(){var e=H(E,c,p.web3.utils.BN);t(e)},tokenSymbol:u,tokenAddress:m,newAllowance:E})},R=function(e){var t,a=e.showModal,n=e.isConfirming,c=e.transactionHash,l=e.error,o=e.handleClose;return l?t=r.a.createElement(g.a,{error:!0,icon:!0},r.a.createElement(w.a,{name:"exclamation triangle"}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Error"),l)):c?t=r.a.createElement(g.a,{success:!0,icon:!0},r.a.createElement(w.a,{name:"checkmark"}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Allowance changed"),r.a.createElement("p",null,"The new allowance is now set."),r.a.createElement("p",null,"Transaction Hash: ",c))):n&&(t=r.a.createElement(g.a,{icon:!0,info:!0},r.a.createElement(w.a,{name:"spinner",loading:!0}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Waiting for confirmation"),"Transaction is being processed..."))),r.a.createElement(B.a,{open:a,size:"small",onClose:o},r.a.createElement(B.a.Content,null,t),!n&&r.a.createElement(B.a.Actions,null,r.a.createElement(x.a,{onClick:o},"Dismiss")))},P=new T.a(2).pow(new T.a(256)).subn(1),M=function(e){var t=e.tokenName,a=e.tokenAddress,c=e.tokenDecimals,l=e.tokenSupply,o=e.tokenSymbol,s=e.tokenContractInstance,i=e.ownerBalance,p=e.owner,b=e.spenders,f=e.spenderENSNames,E=e.allowances,g=Object(n.useContext)(v),w=Object(n.useState)(""),k=Object(d.a)(w,2),y=k[0],z=k[1],N=Object(n.useState)(!1),H=Object(d.a)(N,2),B=H[0],D=H[1],F=Object(n.useState)(!1),L=Object(d.a)(F,2),q=L[0],M=L[1],$=Object(n.useState)(""),U=Object(d.a)($,2),G=U[0],J=U[1],W=Object(n.useState)(""),K=Object(d.a)(W,2),Q=K[0],Y=K[1],V=Object(n.useState)(!1),X=Object(d.a)(V,2),Z=X[0],ee=X[1],te=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Setting new allowance ".concat(t," for ").concat(y)),J(""),Y(""),D(!1),M(!0),ee(!0),e.prev=6,e.next=9,s.approve(y,t.toString(),{from:g.address});case 9:a=e.sent,Y(a.tx),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),console.log("Error while approving: ".concat(e.t0.message)),J(e.t0.message);case 17:ee(!1);case 18:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}(),ae=[],ne=!0,re=!1,ce=void 0;try{for(var le,oe=function(){var e=le.value,t=void 0,a=!1,n=!1;if(T.a.isBN(E[e])&&T.a.isBN(c)&&T.a.isBN(l)){var o=E[e];if(n=p.toLowerCase()===g.address.toLowerCase(),a=o.eq(P)||o.gte(l))t=r.a.createElement("em",null,"unlimited");else{var s=c,i=new T.a(2),u=I()({value:o,decimals:s,roundToDecimals:i}).rounded;t="".concat(u)}}else t=r.a.createElement(O.a,{active:!0,inline:!0,size:"mini"});ae.push(r.a.createElement(j.a.Row,{key:e},r.a.createElement(j.a.Cell,null,r.a.createElement(A,{address:e,ensName:f[e]})),r.a.createElement(j.a.Cell,{negative:a},t),r.a.createElement(j.a.Cell,null,r.a.createElement(S.a,{content:n?"edit allowance":"Only address owner can edit allowance",trigger:r.a.createElement("span",null,r.a.createElement(x.a,{icon:"edit",size:"small",compact:!0,primary:!0,disabled:!n,onClick:function(){!function(e){z(e),D(!0)}(e)}}))}))))},se=b[Symbol.iterator]();!(ne=(le=se.next()).done);ne=!0)oe()}catch(de){re=!0,ce=de}finally{try{ne||null==se.return||se.return()}finally{if(re)throw ce}}var ie=t;""===ie&&(ie="Unknown ERC20 at ".concat(a));var ue=new T.a(2);if(T.a.isBN(i)&&T.a.isBN(c)){var me=I()({value:i,decimals:c,roundToDecimals:ue}).rounded;ie+=" (current balance: ".concat(me,")")}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{raised:!0},r.a.createElement(C.a,{as:"h3"},ie),r.a.createElement(j.a,{basic:"very",celled:!0,selectable:!0},r.a.createElement(j.a.Header,null,r.a.createElement(j.a.Row,null,r.a.createElement(j.a.HeaderCell,null,"Spender"),r.a.createElement(j.a.HeaderCell,null,"Allowance"),r.a.createElement(j.a.HeaderCell,null,"Action"))),r.a.createElement(j.a.Body,null,ae))),B&&r.a.createElement(_,{spender:y,tokenDecimals:c,allowance:E[y],tokenSymbol:o,tokenName:t,tokenSupply:l,tokenAddress:a,handleSubmit:te,handleClose:function(){D(!1)}}),q&&r.a.createElement(R,{showModal:q,isConfirming:Z,handleClose:function(){M(!1)},error:G,transactionHash:Q}))},$=a(876),U=a(82),G=function(e){var t=e.contractAddress,a=e.owner,c=e.spenders,l=Object(n.useContext)(v),o=Object(n.useState)(null),s=Object(d.a)(o,2),i=s[0],p=s[1],b=Object(n.useState)(),f=Object(d.a)(b,2),E=f[0],h=f[1],g=Object(n.useState)(),w=Object(d.a)(g,2),k=w[0],O=w[1],j=Object(n.useState)(""),S=Object(d.a)(j,2),x=S[0],C=S[1],A=Object(n.useState)(""),z=Object(d.a)(A,2),T=z[0],N=z[1],I=Object(n.useState)({}),H=Object(d.a)(I,2),B=H[0],D=H[1],F=Object(n.useState)(!0),L=Object(d.a)(F,2),q=(L[0],L[1]),_=Object(n.useState)({}),R=Object(d.a)(_,2),P=R[0],G=R[1],J=Object(n.useState)(),W=Object(d.a)(J,2),K=W[0],Q=W[1];return Object(n.useEffect)((function(){var e=!1;return function(){var n=Object(m.a)(u.a.mark((function n(){var r,o,s,i,m,d,b,f,E,g,w,v,k;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return q(!0),(r=$(y)).setProvider(l.web3.currentProvider),n.next=5,r.at(t);case 5:return o=n.sent,n.next=8,o.decimals();case 8:return s=n.sent,n.next=11,o.totalSupply();case 11:return i=n.sent,n.next=14,o.balanceOf(a);case 14:if(m=n.sent,!e){n.next=17;break}return n.abrupt("return");case 17:return p(o),h(s),O(i),Q(m),n.prev=21,n.t0=C,n.next=25,o.name();case 25:return n.t1=n.sent,(0,n.t0)(n.t1),n.t2=N,n.next=30,o.symbol();case 30:n.t3=n.sent,(0,n.t2)(n.t3),n.next=37;break;case 34:n.prev=34,n.t4=n.catch(21),console.log("Failed to get name/symbol of contract at ".concat(t));case 37:d={},b=!0,f=!1,E=void 0,n.prev=41,g=c[Symbol.iterator]();case 43:if(b=(w=g.next()).done){n.next=54;break}return v=w.value,n.next=47,o.allowance(a,v);case 47:if(k=n.sent,!e){n.next=50;break}return n.abrupt("return");case 50:d[v]=k;case 51:b=!0,n.next=43;break;case 54:n.next=60;break;case 56:n.prev=56,n.t5=n.catch(41),f=!0,E=n.t5;case 60:n.prev=60,n.prev=61,b||null==g.return||g.return();case 63:if(n.prev=63,!f){n.next=66;break}throw E;case 66:return n.finish(63);case 67:return n.finish(60);case 68:D(d),q(!1);case 70:case"end":return n.stop()}}),n,null,[[21,34],[41,56,60,68],[61,,63,67]])})));return function(){return n.apply(this,arguments)}}()(),function(){e=!0}}),[l.web3,t,a,c]),Object(n.useEffect)((function(){var e=!1,t=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,r,l,o,s,i,m,d,p,b,f;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={},r=!0,l=!1,o=void 0,t.prev=4,s=c[Symbol.iterator]();case 6:if(r=(i=s.next()).done){t.next=26;break}return m=i.value,t.prev=8,d=m.toLowerCase().substr(2)+".addr.reverse",t.next=12,a.eth.ens.resolver(d);case 12:return p=t.sent,b=U.hash(d),t.next=16,p.methods.name(b).call();case 16:f=t.sent,n[m]=f,t.next=23;break;case 20:t.prev=20,t.t0=t.catch(8),console.log("No reverse name found for ".concat(m));case 23:r=!0,t.next=6;break;case 26:t.next=32;break;case 28:t.prev=28,t.t1=t.catch(4),l=!0,o=t.t1;case 32:t.prev=32,t.prev=33,r||null==s.return||s.return();case 35:if(t.prev=35,!l){t.next=38;break}throw o;case 38:return t.finish(35);case 39:return t.finish(32);case 40:if(!e){t.next=42;break}return t.abrupt("return");case 42:G(n);case 43:case"end":return t.stop()}}),t,null,[[4,28,32,40],[8,20],[33,,35,39]])})));return function(e){return t.apply(this,arguments)}}();return l.web3&&t(l.web3),function(){e=!0}}),[l.web3,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{tokenName:x,tokenAddress:t,tokenDecimals:E,tokenSupply:k,tokenSymbol:T,owner:a,ownerBalance:K,spenders:c,spenderENSNames:P,allowances:B,tokenContractInstance:i}))},J=(a(1009),"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"),W=[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],K=Object(p.createDfuseClient)({apiKey:"server_217e99c3f906df80430c3c5f4366c8d0",network:"mainnet.eth.dfuse.io"}),Q=function(){var e=Object(n.useContext)(v),t=Object(s.g)().address,a=Object(n.useState)(!1),c=Object(d.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)({}),p=Object(d.a)(i,2),b=p[0],f=p[1],E=Object(n.useState)(""),k=Object(d.a)(E,2),y=k[0],O=k[1],j=Object(n.useState)(t?t.toLowerCase():""),S=Object(d.a)(j,2),x=S[0],C=S[1];if(Object(n.useEffect)((function(){C(t?t.toLowerCase():"")}),[t]),Object(n.useEffect)((function(){document.title="TAC - ".concat(x)}),[x]),Object(n.useEffect)((function(){var t=!1,a=function(){var a=Object(m.a)(u.a.mark((function a(){var n,r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(!0),O(""),n={},a.prev=3,a.next=6,K.graphql("query ($query: String! $limit: Int64!) {\n      searchTransactions(\n        indexName: LOGS, \n        query: $query, \n        limit: $limit, \n        sort: DESC\n      ) {\n        edges {\n          node {\n            block {\n              number\n            }\n            matchingLogs {\n              data\n              topics\n              address\n            }\n          }\n        }\n      }\n    }",{variables:{limit:"10",query:"signer:".concat(x," method:'approve(address,uint256)' topic.0:").concat(J)}});case 6:if(r=a.sent,!t){a.next=10;break}return console.log("Received stale response."),a.abrupt("return");case 10:if(!r.errors){a.next=12;break}throw r.errors;case 12:(c=r.data.searchTransactions.edges||[]).length<=0&&console.log("No Approve() calls found for ".concat(x)),c.forEach((function(t){t.node.matchingLogs.forEach((function(t){if(t.topics[0]===J){var a=e.web3.eth.abi.decodeLog(W,t.data,t.topics.slice(1));if(a.owner.toLowerCase()===x){var r=t.address;Object.keys(n).includes(r)||(console.log("Adding tokenContract ".concat(r)),n[r]=[]),n[r].includes(a.spender)||(console.log("Adding Spender ".concat(a.spender," for ").concat(r)),n[r].push(a.spender))}else console.log("Skipping log event due to owner mismatch. Expected ".concat(x,", got ").concat(a.owner))}else console.warn("Skipping wrong topic ".concat(t.topics[0]))})),f(n)})),a.next=21;break;case 17:a.prev=17,a.t0=a.catch(3),console.log(a.t0),t||O(JSON.stringify(a.t0));case 21:o(!1);case 22:case"end":return a.stop()}}),a,null,[[3,17]])})));return function(){return a.apply(this,arguments)}}();return f({}),e.web3&&x&&(console.log('Starting query for "'.concat(x,'"')),a(x)),function(){t=!0}}),[e.web3,x]),""===x)return r.a.createElement(h.a,{basic:!0,padded:"very",textAlign:"center"},r.a.createElement(g.a,{info:!0,icon:!0,size:"huge"},r.a.createElement(w.a,{name:"info"}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Enter an address to start!"))));if(l)return r.a.createElement(h.a,{basic:!0,padded:"very",textAlign:"center"},r.a.createElement(g.a,{icon:!0,warning:!0,size:"huge"},r.a.createElement(w.a,{name:"circle notched",loading:!0}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Please wait"),r.a.createElement("p",null,"Checking address: ",x),"Querying dfuse API for ERC20 Approvals...")));if(y)return r.a.createElement(h.a,{basic:!0,padded:"very",textAlign:"center"},r.a.createElement(g.a,{error:!0,icon:!0,size:"huge"},r.a.createElement(w.a,{name:"exclamation triangle"}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Error"),y)));if(0===Object.keys(b).length)return r.a.createElement(h.a,{basic:!0,padded:"very",textAlign:"center"},r.a.createElement(g.a,{success:!0,icon:!0,size:"huge"},r.a.createElement(w.a,{name:"info"}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"No Approvals"),"Address ",x," has no Approvals.")));for(var A=[],z=0,T=Object.entries(b);z<T.length;z++){var N=Object(d.a)(T[z],2),I=N[0],H=N[1];A.push(r.a.createElement(G,{key:I,owner:x,spenders:H,contractAddress:I}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{basic:!0},r.a.createElement("h2",null,x," has these allowances")),A)},Y=function(e){var t=Object(s.f)(),a=Object(n.useContext)(v),c=Object(n.useState)(!0),l=Object(d.a)(c,2),o=l[0],i=l[1],p=Object(n.useState)(!1),b=Object(d.a)(p,2),f=b[0],E=b[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,a.loginFunction();case 3:(n=e.sent)||t.push("/"),E(n),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.onboard&&e()}),[a.onboard,t]),f&&a.web3?r.a.createElement(r.a.Fragment,null,e.children):o?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{basic:!0,padded:"very",textAlign:"center"},r.a.createElement(g.a,{info:!0,icon:!0,size:"huge"},r.a.createElement(w.a,{name:"spinner",loading:!0}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Waiting for wallet"),"Please complete wallet selection.")))):f?void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{basic:!0,padded:"very",textAlign:"center"},r.a.createElement(g.a,{warning:!0,icon:!0,size:"huge"},r.a.createElement(w.a,{name:"exclamation triangle"}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"No wallet selected"),"You need to select a wallet."))))},V=a(1059),X=a(1050),Z=a(1051),ee=a(1056),te=function(e){var t=e.handleInput,a=e.loading,n=e.error,c=e.value,l=e.success,o=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.target.value,t(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(D.a.Field,{inline:!0,width:14},r.a.createElement(F.a,{placeholder:"Address or ENS Name",error:n,loading:a,onChange:o,value:c,type:"text",action:{type:"Submit",disabled:!l,content:"Go!",positive:!0},label:"Enter address or select in wallet"}))},ae="address_initial",ne="address_resolving",re="address_valid",ce="address_invalid",le=function(){var e=Object(n.useContext)(v),t=Object(s.g)().address||"",a=Object(s.f)(),c=Object(n.useState)(ae),l=Object(d.a)(c,2),o=l[0],i=l[1],p=Object(n.useState)(t?t.toLowerCase():""),b=Object(d.a)(p,2),f=b[0],E=b[1],h=Object(n.useState)(""),g=Object(d.a)(h,2),w=g[0],k=g[1],y=Object(n.useState)(e.address?e.address.toLowerCase():""),O=Object(d.a)(y,2),j=O[0],S=O[1];Object(n.useEffect)((function(){(function(){var t=Object(m.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==f.length){t.next=4;break}i(ae),t.next=24;break;case 4:if(a=/^(0x)?[0-9a-f]{40}$/i.test(f),!/.*\.eth$/i.test(f)){t.next=23;break}return i(ne),t.prev=8,t.next=11,e.web3.eth.ens.getAddress(f);case 11:n=t.sent,console.log("Resolved ".concat(f," to ").concat(n)),i(re),k(n),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(8),console.log("Could not resolve "+f),i(ce);case 21:t.next=24;break;case 23:a?(k(f),i(re)):i(ce);case 24:case"end":return t.stop()}}),t,null,[[8,17]])})));return function(){return t.apply(this,arguments)}})()()}),[f,k,e.web3]),Object(n.useEffect)((function(){var n=e.address?e.address.toLowerCase():"";""!==n&&(""!==t&&n===j||(E(n),S(n),a.push("/address/".concat(n))))}),[e.address,j,t,a]);var x=o===ce,C=o===ne,A=o===re;return r.a.createElement(L.a,{textAlign:"center",centered:!0,columns:1},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Column,{width:14},r.a.createElement(D.a,{size:"huge",onSubmit:function(){A?(console.log("Submit! Address: ".concat(w)),a.push("/address/".concat(w))):console.log("Submit with invalid address")},error:x,success:A,widths:"equal"},r.a.createElement(D.a.Group,null,r.a.createElement(te,{handleInput:E,value:f,error:x,success:A,loading:C}))))))},oe=function(){var e=r.a.createElement(h.a,{inverted:!1,textAlign:"center",vertical:!0},r.a.createElement(V.a,{fixed:"top",inverted:!0,size:"huge"},r.a.createElement(X.a,null,r.a.createElement(V.a.Item,{header:!0,as:o.b,to:"/"},r.a.createElement(w.a,{name:"home",size:"big"})," Home"),r.a.createElement(V.a.Item,{as:o.b,to:"/address/"},r.a.createElement(w.a,{name:"search",size:"big"})," Check Allowances"),r.a.createElement(V.a.Menu,{position:"right"},r.a.createElement(V.a.Item,null,r.a.createElement("a",{href:"https://github.com/TripleSpeeder/allowance-limiter",title:"github.com/TripleSpeeder/allowance-limiter"},r.a.createElement(w.a,{name:"github",size:"big"})))))),r.a.createElement(X.a,{text:!0,style:{marginTop:"4em",marginBottom:"2em"}},r.a.createElement(C.a,{as:"h1",inverted:!1,style:{fontSize:"3em",marginTop:"0.5em"}},"Token Allowance Checker",r.a.createElement(C.a.Subheader,null,"powered by ",r.a.createElement("a",{href:"https://www.dfuse.io/",rel:"noopener noreferrer",target:"_blank"},"dfuse")))));return r.a.createElement(o.a,null,e,r.a.createElement(k,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:["/address/:address","/address"]},r.a.createElement(X.a,null,r.a.createElement(Y,null,r.a.createElement(h.a,{basic:!0,padded:!0},r.a.createElement(le,null)),r.a.createElement(Q,null)))),r.a.createElement(s.a,{path:"/"},r.a.createElement(h.a,{basic:!0,vertical:!0,style:{paddingTop:"4em"}},r.a.createElement(L.a,{container:!0,stackable:!0,verticalAlign:"top"},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Column,{width:8},r.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Do you actually know who can spend your tokens?"),r.a.createElement("p",{style:{fontSize:"1.33em"}},r.a.createElement("em",null,"Token Allowance Checker")," helps you keep track of which contracts you have approved to spend your tokens."),r.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Control your approvals"),r.a.createElement("p",{style:{fontSize:"1.33em"}},r.a.createElement("em",null,"Token Allowance Checker")," will show you all approvals for ERC20-compliant tokens, and the option to change the approved amount - or completely zero it.")),r.a.createElement(L.a.Column,{floated:"right",width:7},r.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"The unlimited approval problem"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Many DApps have the habit of requiring you to approve effectively unlimited amount of tokens. This helps improving the user experience, as you only have to sign off an approval once and it will be enough for all future transactions."),r.a.createElement("p",{style:{fontSize:"1.33em"}},"However this also means that the DApp (or the person/entity controlling it) can at any time transfer ",r.a.createElement("em",null,"all of your tokens"),", without requiring any further approval."),r.a.createElement("p",{style:{fontSize:"1.33em"}},"In addition, there is no concept of expiring approvals. Once approved, the approval will remain forever. If you do not trust a DApp or its operators anymore, there is usually no easy way to remove the approval."))))),r.a.createElement(h.a,{basic:!0,textAlign:"center"},r.a.createElement(x.a,{as:o.b,to:"/address/",primary:!0,size:"massive"},"Check Allowances",r.a.createElement(w.a,{name:"right arrow"})))))),r.a.createElement(h.a,{basic:!0},r.a.createElement(Z.a,null),r.a.createElement(X.a,{textAlign:"center"},r.a.createElement(ee.a,{horizontal:!0},r.a.createElement(ee.a.Item,{as:"a",href:"https://twitter.com/TripleSpeeder",target:"_blank"},r.a.createElement(S.a,{content:"@triplespeeder",trigger:r.a.createElement(w.a,{size:"big",name:"twitter"})})),r.a.createElement(ee.a.Item,{as:"a",href:"https://t.me/triplespeeder",target:"_blank"},r.a.createElement(S.a,{content:"@triplespeeder",trigger:r.a.createElement(w.a,{size:"big",name:"telegram"})})),r.a.createElement(ee.a.Item,{as:"a",href:"mailto:michael@m-bauer.org"},r.a.createElement(S.a,{content:"michael@m-bauer.org",trigger:r.a.createElement(w.a,{size:"big",name:"mail outline"})})),r.a.createElement(ee.a.Item,{as:"a",href:"https://github.com/TripleSpeeder",target:"_blank"},r.a.createElement(S.a,{content:"github.com/TripleSpeeder",trigger:r.a.createElement(w.a,{size:"big",name:"github"})})),r.a.createElement(ee.a.Item,{as:"a",href:"https://www.reddit.com/u/TripleSpeeder",target:"_blank"},r.a.createElement(S.a,{content:"u/TripleSpeeder",trigger:r.a.createElement(w.a,{size:"big",name:"reddit"})})))),r.a.createElement(X.a,{textAlign:"center"},r.a.createElement("p",{style:{fontSize:"1em",float:"right"}},r.a.createElement(w.a,{name:"copyright outline"})," Michael Bauer"))))};l.a.render(r.a.createElement(oe,null),document.getElementById("root"))},487:function(e,t,a){e.exports=a(1020)},492:function(e,t,a){},493:function(e,t,a){},503:function(e,t){},521:function(e,t){},523:function(e,t){},589:function(e,t){},591:function(e,t){},592:function(e,t){},598:function(e,t){},600:function(e,t){},617:function(e,t){},620:function(e,t){},636:function(e,t){},639:function(e,t){},656:function(e,t){},657:function(e,t){},659:function(e,t){},772:function(e,t){},924:function(e,t){},931:function(e,t){},948:function(e,t){},960:function(e,t){},963:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=963},969:function(e,t){},995:function(e,t){}},[[487,1,2]]]);
//# sourceMappingURL=main.46eb39cc.chunk.js.map