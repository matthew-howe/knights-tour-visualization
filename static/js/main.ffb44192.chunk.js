(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,r){e.exports=r(33)},27:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(7),o=r.n(i),s=(r(27),r(8)),c=r(9),u=r(20),l=r(16),d=r(6),p=r(21),h=r(10),f={knight:[0,0],board:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],iterations:0},v=r(1),b=r.n(v),m=r(5),g=new(function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"findMoves",value:function(e){return[[e[0]-1,e[1]-2],[e[0]-2,e[1]-1],[e[0]+1,e[1]-2],[e[0]+2,e[1]-1],[e[0]-2,e[1]+1],[e[0]-1,e[1]+2],[e[0]+1,e[1]+2],[e[0]+2,e[1]+1]].filter(function(e){return e[0]>=0&&e[1]>=0&&e[0]<8&&e[1]<8})}},{key:"validMove",value:function(e,t){return 1!==e[t[0]][t[1]]}},{key:"boardVisited",value:function(e){return 63===e.length}},{key:"shuffle",value:function(e){for(var t,r,n=e.length;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e}},{key:"numOfEmpty",value:function(e,t){var r=0,n=this.findMoves(t),a=!0,i=!1,o=void 0;try{for(var s,c=n[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var u=s.value;this.validMove(e,u)&&r++}}catch(l){i=!0,o=l}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return r}}]),e}());function k(e,t,r,n,a){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(b.a.mark(function e(t,r,n,a,i){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(Object(m.a)(b.a.mark(function e(){var i,o,s,c,u,l,d;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t)[0][0]=1,!g.boardVisited(r)){e.next=4;break}return e.abrupt("return",!0);case 4:o=r[r.length-1],s=g.findMoves(o),s=g.shuffle(s),c=0;case 8:if(!(c<s.length)){e.next=26;break}if(u=s[c],!g.validMove(i,u)){e.next=23;break}if(r.push(u),l=u[0],d=u[1],i[l][d]=1,a(u),n(i),!k(i,r,n,a)){e.next=19;break}return e.abrupt("return",!0);case 19:r.pop(),i[u[0]][u[1]]=0,a(r[r.length-1]),n(i);case 23:c++,e.next=8;break;case 26:i[o[0]][o[1]]=0,r.pop(),a(r[r.length-2]),n(i),k(i,r,n,a);case 31:case"end":return e.stop()}},e)})),i);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e,t,r,n,a){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(b.a.mark(function e(t,r,n,a,i){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(Object(m.a)(b.a.mark(function e(){var i,o,s,c,u,l,d,p,h,f,v,m,k,E;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t,!g.boardVisited(r)){e.next=3;break}return e.abrupt("return",!0);case 3:for(o=r[r.length-1],s=g.findMoves(o),u=0,l=!0,d=!1,p=void 0,e.prev=9,h=s[Symbol.iterator]();!(l=(f=h.next()).done);l=!0)v=f.value,(m=g.numOfEmpty(i,v))>u&&g.validMove(i,v)&&(u=m,c=v);e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),d=!0,p=e.t0;case 17:e.prev=17,e.prev=18,l||null==h.return||h.return();case 20:if(e.prev=20,!d){e.next=23;break}throw p;case 23:return e.finish(20);case 24:return e.finish(17);case 25:if(r.push(c),k=c[0],E=c[1],i[k][E]=1,a(c),n(i),!w(i,r,n,a)){e.next=33;break}return e.abrupt("return",!0);case 33:return e.abrupt("return",!1);case 34:case"end":return e.stop()}},e,null,[[9,13,17,25],[18,,20,24]])})),500);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={iter:0,speed:100},e.backtrack=k.bind(Object(d.a)(e)),e.warnsdorff=w.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({speed:e.target.value})}},{key:"renderSquare",value:function(e){var t,r,n=e%8,i=Math.floor(e/8),o=(n+i)%2===1;return this.props.knight&&(t=this.props.knight[0]===n&&this.props.knight[1]===i),this.props.board&&(r=1===this.props.board[i][n]),t?o?a.a.createElement("div",{key:e,className:"black square knight"}):a.a.createElement("div",{key:e,className:"white square knight"}):o?r?a.a.createElement("div",{key:e,className:"black square visited"}):a.a.createElement("div",{key:e,className:"black square"}):r?a.a.createElement("div",{key:e,className:"white square visited"}):a.a.createElement("div",{key:e,className:"white square"})}},{key:"render",value:function(){for(var e=this,t=[],r=0;r<64;r++)t.push(this.renderSquare(r));return a.a.createElement("div",{id:"main"},a.a.createElement("div",{id:"img"},a.a.createElement("img",{className:"img",src:"https://i.imgur.com/rDN4qFr.jpg"})),a.a.createElement("div",{id:"board"},t),a.a.createElement("div",{id:"buttons"},a.a.createElement("button",{onClick:function(){return e.backtrack(e.props.board,[[0,0]],e.props.updateBoard,e.props.moveKnight,e.state.speed)},id:"b4"},"Brute Force Iterations"),a.a.createElement("button",{onClick:function(){return e.warnsdorff(e.props.board,[[5,3]],e.props.updateBoard,e.props.moveKnight,e.state.speed)},id:"b3"},"Warnsdorf's Algorithm"),a.a.createElement("button",{onClick:function(){return e.warnsdorff(e.props.board,[[5,3]],e.props.updateBoard,e.props.moveKnight)},id:"b3"},"Divide and Conquer"),a.a.createElement("button",{onClick:function(){return e.warnsdorff(e.props.board,[[5,3]],e.props.updateBoard,e.props.moveKnight)},id:"b3"},"Neural Network Algorithm"),a.a.createElement("div",null),a.a.createElement("div",null,a.a.createElement("p",{className:"speed-text"},"Speed: ",this.state.speed," ms"),a.a.createElement("input",{name:"speed",onChange:function(t){e.handleChange(t)},type:"range",min:"10",max:"500",value:this.state.speed,className:"slider"})),a.a.createElement("p",{className:"iterations"},"Iterations: ",this.state.iter)))}}]),t}(n.Component),j=Object(h.b)(function(e){return{board:e.board.board,knight:e.board.knight,iterations:e.board.iterations}},function(e){return{moveKnight:function(t){return e(function(e){return{type:"MOVE_KNIGHT",knight:e}}(t))},updateBoard:function(t){return e({type:"UPDATE_BOARD",board:t})}}})(O);var x=function(){return a.a.createElement("div",{className:"app"},a.a.createElement("div",{id:"title"},a.a.createElement("h1",null,"Knight's Tour"),a.a.createElement("p",null,"By Matthew Howe")),a.a.createElement("div",null,a.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=r(3),M=r(18),T=r(19),S={script:null,speed:125,temp:null},C=Object(N.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_KNIGHT":return Object.assign({},e,{knight:[t.knight[1],t.knight[0]]});case"UPDATE_BOARD":return Object.assign({},e,{board:t.board});case"FAILURE":alert("Failed to converge on a correct solution. Try again.");break;case"RUN_SCRIPT":return f;default:return console.log("Switch function error in board store"),f}},algorithm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RUN_SCRIPT":return Object.assign({},e,{script:t.script});case"CHANGE_SPEED":case"MODULATE_SPEED":return Object.assign({},e,{speed:t.newSpeed});case"UPDATE_TEMP":return Object.assign({},e,{temp:t.newTemp});default:return S}}}),B=Object(T.composeWithDevTools)(Object(N.applyMiddleware)(Object(M.createLogger)({collapsed:!0}))),D=Object(N.createStore)(C,B);o.a.render(a.a.createElement(h.a,{store:D},a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.ffb44192.chunk.js.map