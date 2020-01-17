(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){"use strict";(function(e){var r=n(7),a=n(8),o=[],u=null,i=null,s=null,c=new(function(){function t(){Object(r.a)(this,t)}return Object(a.a)(t,[{key:"getQueue",value:function(){return o}},{key:"enqueue",value:function(e){o.push(e)}},{key:"processQueue",value:function(){var t=o.shift();t&&e(t)}},{key:"initInterval",value:function(e){u=setInterval(this.processQueue,e),this.eraseTicker()}},{key:"eraseTicker",value:function(){i=null,clearInterval(s),s=null}},{key:"startQueueing",value:function(e){this.initInterval(e),this.processQueue()}},{key:"clearQueueInterval",value:function(){clearInterval(u),u=null}},{key:"clear",value:function(){this.clearQueueInterval(),o=[]}},{key:"modulateSpeed",value:function(e){i=i||Date.now(),clearInterval(s),this.initTickInterval(e)}},{key:"initTickInterval",value:function(e){s=setInterval(this.tick.bind(null,e),1)}},{key:"tick",value:function(e){Date.now();i=Date.now(),this.processQueue()}},{key:"changeSpeed",value:function(e){this.clearQueueInterval(),this.eraseTicker(),this.initInterval(e)}}]),t}());t.a=c}).call(this,n(38).setImmediate)},27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),u=n.n(o),i=(n(32),n(7)),s=n(8),c=n(25),l=n(19),d=n(9),v=n(26),p=n(14),f=n(24),h=n(10),b=n(2),m=n.n(b),k=n(5),g=new(function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"findMoves",value:function(e){return[[e[0]-1,e[1]-2],[e[0]-2,e[1]-1],[e[0]+1,e[1]-2],[e[0]+2,e[1]-1],[e[0]-2,e[1]+1],[e[0]-1,e[1]+2],[e[0]+1,e[1]+2],[e[0]+2,e[1]+1]].filter(function(e){return e[0]>=0&&e[1]>=0&&e[0]<12&&e[1]<12})}},{key:"validMove",value:function(e,t){return 1!==e[t[0]][t[1]]}},{key:"boardVisited",value:function(e){return 143===e.length}},{key:"boardVisitedWarnsdorf",value:function(e){return 143===e.length}},{key:"shuffle",value:function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}},{key:"numOfEmpty",value:function(e,t){var n=0,r=this.findMoves(t),a=!0,o=!1,u=void 0;try{for(var i,s=r[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var c=i.value;this.validMove(e,c)&&n++}}catch(l){o=!0,u=l}finally{try{a||null==s.return||s.return()}finally{if(o)throw u}}return n}},{key:"mapNumToCoords",value:function(e){return[e%12,Math.floor(e/12)]}}]),e}()),y=function(){var e=Object(k.a)(m.a.mark(function e(t,n,r,a,o,u,i){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(Object(k.a)(m.a.mark(function e(){var i,s,c,l,d,v,p;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u(),(i=t)[0][0]=1,!g.boardVisited(n)){e.next=5;break}return e.abrupt("return",!0);case 5:s=n[n.length-1],c=g.findMoves(s),c=g.shuffle(c),l=0;case 9:if(!(l<c.length)){e.next=23;break}if(d=c[l],!g.validMove(i,d)){e.next=20;break}if(n.push(d),v=d[0],p=d[1],i[v][p]=1,a(d),r(i),!y(i,n,r,a,o,u)){e.next=20;break}return e.abrupt("return",!0);case 20:l++,e.next=9;break;case 23:console.log("ended","last move: ",n[n.length-1]);case 24:case"end":return e.stop()}},e)})),10);case 1:case"end":return e.stop()}},e)}));return function(t,n,r,a,o,u,i){return e.apply(this,arguments)}}(),E=y,O=n(1),w=function(){var e=Object(k.a)(m.a.mark(function e(t,n,r,a,o){var u,i,s,c,l,d,v,p,f,h,b,k,y,E;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=t,!(O.a.length>143)){e.next=4;break}return console.log("board toured"),e.abrupt("return",!0);case 4:if(!g.boardVisitedWarnsdorf(n)){e.next=7;break}return console.log("board toured"),e.abrupt("return",!0);case 7:for(i=n[n.length-1],0===u[i[0]][i[1]]&&(u[i[0]][i[1]]=1),console.log("lastMove: ",i),s=g.findMoves(i),l=1/0,d=!0,v=!1,p=void 0,e.prev=15,f=s[Symbol.iterator]();!(d=(h=f.next()).done);d=!0)b=h.value,(k=g.numOfEmpty(u,b))<l&&g.validMove(u,b)&&(l=k,c=b);e.next=23;break;case 19:e.prev=19,e.t0=e.catch(15),v=!0,p=e.t0;case 23:e.prev=23,e.prev=24,d||null==f.return||f.return();case 26:if(e.prev=26,!v){e.next=29;break}throw p;case 29:return e.finish(26);case 30:return e.finish(23);case 31:if(c){e.next=33;break}return e.abrupt("return");case 33:if(void 0===c[0]||void 0===c[1]){e.next=46;break}if(y=c[0],E=c[1],O.a.enqueue(function(){o(c),a(c),r(u)}),u[y][E]=1,n.push(c),!w(u,n,r,a,o)){e.next=43;break}return e.abrupt("return",!0);case 43:return e.abrupt("return",!1);case 44:e.next=48;break;case 46:return alert("failed to converge on correct solution!"),e.abrupt("return",!1);case 48:case"end":return e.stop()}},e,null,[[15,19,23,31],[24,,26,30]])}));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),j=w,M=n(12);function x(e,t,n,r){var a,o,u=[3,7,6,2,7,3,2,6],i=[4,3,7,4,0,7,3,0],s=[[-2,-1],[-1,-2],[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1]];var c=function(e,t){var n=function(e,t){var n=function(e,t){var n,r,a=12,o=12,u=e,i=t,s=8;do{var c=a/2,l=c%2,d=c-l,v=c+l;u<d?(a=d,n=1):(a=v,u-=v,n=2),v=(c=o/2)+(l=c%2),i<(d=c-l)?(o=d,r=1):(o=v,i-=d,r=2),s=1===n&&1===r&&u===a-3&&i===o-1?0:1===n&&1===r&&u===a-1&&i===o-2?1:2===n&&1===r&&1===u&&i===o-3?2:2===n&&1===r&&0===u&&i===o-1?3:2===n&&2===r&&2===u&&0===i?4:2===n&&2===r&&0===u&&1===i?5:1===n&&2===r&&u===a-2&&2===i?6:1===n&&2===r&&u===a-1&&0===i?7:s}while(!(a<=12&&o<=12&&(a<12||o<12)));return[a,o,u,i,s]}(e,t),r=Object(M.a)(n,5),a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],d=a<o;if(d){var v=a;a=o,o=v,v=s,s=c,c=v}var p=[[[4,5],[5,6],[4,7],[4,7],[5,7],[6,7]],[[3,4],[3,6],[0,3],[3,5],[0,6],[0,7]],[[2,5],[1,4],[0,1],[3,4],[2,5],[1,6]],[[2,5],[5,6],[4,7],[0,2],[1,5],[0,6]],[[3,4],[1,4],[4,7],[4,7],[0,2],[1,7]],[[2,3],[1,3],[1,0],[3,0],[0,2],[0,1]]][c][s],f=p[0],h=p[1];if(d&&(f=(9-f)%8,h=(9-h)%8),8!==l){var b=u[l],m=i[l];f===b?f=m:h===b?h=m:console.log("pathOrigin must always be one of next_a_offsetType and next_b_offset")}return[a,o,s,c,l,p,f,h]}(e,t),r=Object(M.a)(n,8),a=(r[0],r[1],r[2],r[3],r[4],r[5],r[6]),o=r[7],c=s[a],l=s[o];return[l,e+c[0],t+c[1],e+l[0],t+l[1]]}(e,t),l=Object(M.a)(c,5),d=(l[0],l[1]),v=l[2],p=l[3],f=l[4];return d===n&&v===r?(a=p,o=f):p===n&&f===r?(a=d,o=v):console.log("Neither of the next pointers match the lastXY (getNextPoint"),console.log("\n","lastX: ",n,"lastY: ",r,"\n"),console.log("\n","nextX: ",a,"nextY: ",o,"\n"),[a,o]}var T,I=function(){var e=Object(k.a)(m.a.mark(function e(t,n,r,a,o,u,i){var s,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(O.a.length>143)){e.next=3;break}return console.log("board conquered"),e.abrupt("return");case 3:if(1!==n[0]||0!==n[1]){e.next=6;break}return console.log("board conquered"),e.abrupt("return");case 6:if((s=t)[n[0]][n[1]]=1,c=x(n[0],n[1],r[0],r[1]),0===s[r[0]][r[1]]&&(s[r[0]][r[1]]=1),O.a.enqueue(function(){o(c),a(s)}),s[c[0]][c[1]]=1,!I(s,c,n,a,o,u,i)){e.next=16;break}return e.abrupt("return",!0);case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}},e)}));return function(t,n,r,a,o,u,i){return e.apply(this,arguments)}}(),S=I,N=(T={knight:[0,0],lastMove:[0,0],moves:[[0,0]],curMove:[0,2]},Object(h.a)(T,"lastMove",[1,0]),Object(h.a)(T,"board",[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]]),Object(h.a)(T,"iterations",0),Object(h.a)(T,"timeout",{}),Object(h.a)(T,"speed",80),T),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).state={speed:80,start:[[0,0]],curMove:[2,0],lastMove:[0,1]},e.backtrack=E.bind(Object(d.a)(e)),e.warnsdorf=j.bind(Object(d.a)(e)),e.divideandconquer=S.bind(Object(d.a)(e)),e}return Object(v.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){O.a.clearQueueInterval(),O.a.modulateSpeed(e.target.value),this.props.changeSpeed(e.target.value),this.setState({speed:e.target.value}),O.a.changeSpeed(e.target.value)}},{key:"run",value:function(e){O.a.clear();this.props.updateCurmove([0,2]),this.props.updateLastmove([1,0]),this.props.updateBoard([[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]]),this.props.moveKnight([0,0]),"warnsdorf"===e?j(this.props.board,this.props.moves,this.props.updateBoard,this.props.moveKnight,this.props.addMove):S(this.props.board,this.props.curMove,this.props.lastMove,this.props.updateBoard,this.props.moveKnight,this.props.updateCurmove,this.props.updateLastmove),O.a.startQueueing(this.props.speed)}},{key:"renderSquare",value:function(e){var t,n,r=e%12,o=Math.floor(e/12),u=(r+o)%2===1;return this.props.knight&&(t=this.props.knight[0]===r&&this.props.knight[1]===o),this.props.board&&(n=1===this.props.board[o][r]),t?u?a.a.createElement("div",{key:e,className:"black square knight"}):a.a.createElement("div",{key:e,className:"white square knight"}):u?n?a.a.createElement("div",{key:e,className:"black square "}):a.a.createElement("div",{key:e,className:"black square"}):n?a.a.createElement("div",{key:e,className:"white square "}):a.a.createElement("div",{key:e,className:"white square"})}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<144;n++)t.push(this.renderSquare(n));return a.a.createElement("div",{id:"main"},a.a.createElement("div",{id:"img"}),a.a.createElement("div",{className:"middle"},a.a.createElement("div",{id:"title"},a.a.createElement("h1",null,"Knight's Tour"),a.a.createElement("p",null,"By ",a.a.createElement("a",{href:"http://matthewhowe.net"},"Matthew Howe"))),a.a.createElement("div",{id:"board"},t)),a.a.createElement("div",{id:"buttons"},a.a.createElement("button",{onClick:function(){return e.run("warnsdorf")},id:"b3"},"Warnsdorf's Rule"),a.a.createElement("button",{onClick:function(){return e.run()},id:"b3"},"Divide and Conquer"),a.a.createElement("button",{onClick:function(){return e.run()},id:"b3"},"Neural Network Solution"),a.a.createElement("div",null),a.a.createElement("div",null,a.a.createElement("p",{className:"speed-text"},"Speed: ",this.state.speed," ms"),a.a.createElement("input",{name:"speed",onChange:function(t){e.handleChange(t)},type:"range",min:"10",max:"500",value:this.state.speed,className:"slider"})),a.a.createElement("p",{className:"iterations"},"Iterations: ",this.state.iter)))}}]),t}(r.Component),D=Object(p.b)(function(e){return{lastMove:e.board.lastMove,moves:e.board.moves,curMove:e.board.curMove,board:e.board.board,knight:e.board.knight,iterations:e.board.iterations,speed:e.board.speed}},function(e){return{moveKnight:function(t){return e(function(e){return{type:"MOVE_KNIGHT",knight:e}}(t))},updateBoard:function(t){return e({type:"UPDATE_BOARD",board:t})},runScript:function(){return e({type:"RUN_SCRIPT"})},addMove:function(t){return e(function(e){return{type:"ADD_MOVE",move:e}}(t))},updateCurmove:function(t){return e(function(e){return{type:"UPDATE_CURMOVE",move:e}}(t))},updateLastmove:function(t){return e(function(e){return{type:"UPDATE_LASTMOVE",move:e}}(t))},changeSpeed:function(t){return e(function(e){return{type:"CHANGE_SPEED",speed:e}}(t))}}})(C);var _=function(){return a.a.createElement("div",{className:"app"},a.a.createElement("div",null,a.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(4),q=n(21),P=n(22),R=n(23),V=Object(A.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SPEED":return Object.assign({},e,{speed:t.speed});case"MOVE_KNIGHT":return Object.assign({},e,{knight:[t.knight[1],t.knight[0]]});case"UPDATE_BOARD":return Object.assign({},e,{board:t.board});case"FAILURE":alert("Failed to converge on a correct solution. Try again.");break;case"RUN_SCRIPT":case"STOP_SCRIPT":return e;case"ITERATE":return Object.assign({},e,{iterations:e.iterations+1});case"ADD_MOVE":return Object.assign({},e,{moves:[].concat(Object(f.a)(e.moves),[t.move])});case"UPDATE_CURMOVE":return Object.assign({},e,{curMove:t.move});case"UPDATE_LASTMOVE":return Object.assign({},e,{lastMove:t.move});default:return console.log("Switch function error in board store"),N}}}),Q=Object(P.composeWithDevTools)(Object(A.applyMiddleware)(Object(q.createLogger)({collapsed:!0},R.a))),U=Object(A.createStore)(V,Q);u.a.render(a.a.createElement(p.a,{store:U},a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.19f60f36.chunk.js.map