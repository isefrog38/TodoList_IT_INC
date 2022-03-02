(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{54:function(e,t,n){e.exports={is_done:"Task_is_done__2LeLg",container:"Task_container__3kyj7"}},69:function(e,t,n){e.exports={main:"AddTodoList_main__2gwcY",error:"AddTodoList_error__2qVvA",error_message:"AddTodoList_error_message__1CetP"}},79:function(e,t,n){e.exports=n(92)},84:function(e,t,n){},85:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),c=n.n(i),o=(n(84),n(85),n(12)),l=n(133);function u(e){var t=Object(a.useState)(e.title),n=Object(o.a)(t,2),i=n[0],c=n[1],u=Object(a.useState)(!1),d=Object(o.a)(u,2),s=d[0],m=d[1];return s?r.a.createElement(l.a,{style:{width:"120px"},color:"success",variant:"standard",value:i,onChange:function(e){return c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){e.editTitle(i),m(!s)}}):r.a.createElement("span",{onDoubleClick:function(){return m(!s)}},e.title)}var d=n(138);var s=function(e){var t=e.title,n=e.onClickHandler,a=e.activeButton;return r.a.createElement(d.a,{color:"success",variant:a===t?"contained":"outlined",onClick:n},t)},m=n(130),f=n(140),O=r.a.memo((function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],c=n[1],u=Object(a.useState)(null),d=Object(o.a)(u,2),s=d[0],O=d[1],E=function(){""!==i.trim()?(e.addTask(e.id,i.trim()),c("")):O("Title is required !")};return r.a.createElement("div",null,r.a.createElement(l.a,{size:"small",color:"success",helperText:s,error:!!s,variant:"standard",label:"Name of your task",id:"outlined-basic",value:i,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){O(null),(e.ctrlKey||"Enter"===e.key)&&E()},autoComplete:"offline"}),r.a.createElement(f.a,{onClick:E},r.a.createElement(m.a,null)))})),E=n(131),b=n(14),T=n(16),j=n(4),v=n(27),I=Object(v.v1)(),_=[{id:I,title:"What to learn",filter:"All"}],p=function(e,t){return{type:"CHANGE_FILTER_TODOLIST",todolistId:e,filter:t}},D=Object(j.a)({},I,[{id:Object(v.v1)(),title:"HTML&CSS",isDone:!0},{id:Object(v.v1)(),title:"JS/ES6",isDone:!0},{id:Object(v.v1)(),title:"React",isDone:!0},{id:Object(v.v1)(),title:"Redux-Reducers",isDone:!1},{id:Object(v.v1)(),title:"Bootstrap",isDone:!1}]),k=n(21),S=n(54),A=n.n(S),h=n(135),g=r.a.memo((function(e){var t=e.todolistId,n=e.taskId,a=Object(k.b)(),i=Object(k.c)((function(e){return e.taskReducer[t].find((function(e){return e.id===n}))}));return i?r.a.createElement("div",{className:A.a.container},r.a.createElement("li",{key:n,className:i.isDone?A.a.is_done:""},r.a.createElement(h.a,{color:"default",checked:i.isDone,onChange:function(e){return a(function(e,t,n){return{type:"CHANGE_STATUS_TASK",todolistId:e,taskID:t,isDone:n}}(t,n,e.currentTarget.checked))}}),r.a.createElement(u,{title:i.title,editTitle:function(e){return a(function(e,t,n){return{type:"EDIT_TITLE_TASK",todolistId:e,taskId:t,title:n}}(t,n,e))}}),r.a.createElement(f.a,{onClick:function(){return a(function(e,t){return{type:"REMOVE_TASK",todolistId:t,taskID:e}}(n,t))}},r.a.createElement(E.a,null)))):r.a.createElement("div",null,"Error...")})),y=r.a.memo((function(e){var t,n=e.todolistId,a=e.filterBS,i=Object(k.b)(),c=Object(k.c)((function(e){return e.taskReducer[n]})),o=Object(k.c)((function(e){return e.todolistReducer.filter((function(e){return e.id===n}))[0]})),l=(t=o.filter,"Active"===t?c.filter((function(e){return!e.isDone})):"Completed"===t?c.filter((function(e){return e.isDone})):c).map((function(e){return r.a.createElement(g,{key:e.id,taskId:e.id,todolistId:n})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(f.a,{style:{float:"right"},onClick:function(){return i(function(e){return{type:"REMOVE_TODOLIST",todolistId:e}}(n))}},r.a.createElement(E.a,null)),r.a.createElement("h3",null,r.a.createElement(u,{title:o.title,editTitle:function(e){return i(function(e,t){return{type:"EDIT_TITLE_TODOLIST",todolistId:e,title:t}}(n,e))}})),r.a.createElement(O,{addTask:function(e,t){return i(function(e,t){return{type:"ADD_TASK",todolistId:e,title:t}}(e,t))},id:n}),r.a.createElement("ul",null,l),r.a.createElement("div",null,r.a.createElement(s,{activeButton:a,onClickHandler:function(){return i(p(n,"All"))},title:"All"}),r.a.createElement(s,{activeButton:a,onClickHandler:function(){return i(p(n,"Active"))},title:"Active"}),r.a.createElement(s,{activeButton:a,onClickHandler:function(){return i(p(n,"Completed"))},title:"Completed"}))))})),C=n(141),L=n(142),R=n(136),w=n(139),x=n(143),K=n(132),B=n(70),N=n(69),H=n.n(N),M=["addTodolist"],V=r.a.memo((function(e){var t=e.addTodolist,n=(Object(B.a)(e,M),Object(a.useState)("")),i=Object(o.a)(n,2),c=i[0],u=i[1],d=Object(a.useState)(null),s=Object(o.a)(d,2),O=s[0],E=s[1],b=function(){""!==c.trim()?(t(c),u("")):E("Title is required !")};return r.a.createElement("div",{className:H.a.main},r.a.createElement("div",null,r.a.createElement(l.a,{size:"small",helperText:O,color:"warning",error:!!O,variant:"standard",label:"Add Name to Todolist",id:"outlined-basic",value:c,onChange:function(e){u(e.currentTarget.value)},onKeyPress:function(e){E(null),(e.ctrlKey||"Enter"===e.key)&&b()}}),r.a.createElement(f.a,{onClick:b},r.a.createElement(m.a,null))))})),F=r.a.memo((function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.todolistReducer}));return r.a.createElement("div",{className:"App"},r.a.createElement(C.a,{position:"static",color:"primary"},r.a.createElement(L.a,{maxWidth:"xl"},r.a.createElement(R.a,{container:!0},r.a.createElement(x.a,null,r.a.createElement(f.a,{color:"inherit","aria-label":"menu",size:"large"},r.a.createElement(K.a,null)),r.a.createElement(V,{addTodolist:function(t){e(function(e){return{type:"ADD_TODOLIST",title:e,id:Object(v.v1)()}}(t))}}))))),r.a.createElement(R.a,{container:!0,spacing:3},t.map((function(e){return r.a.createElement(R.a,{item:!0,key:e.id},r.a.createElement(w.a,{style:{margin:"30px 0 0 20px",padding:"30px",alignItems:"center"},elevation:3},r.a.createElement(y,{key:e.id,todolistId:e.id,filterBS:e.filter})))}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(56),W=Object(G.a)({todolistReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODOLIST":return[{id:t.id,title:t.title,filter:"All"}].concat(Object(b.a)(e));case"REMOVE_TODOLIST":return e.filter((function(e){return e.id!==t.todolistId}));case"CHANGE_FILTER_TODOLIST":return e.map((function(e){return e.id===t.todolistId?Object(T.a)(Object(T.a)({},e),{},{filter:t.filter}):e}));case"EDIT_TITLE_TODOLIST":return e.map((function(e){return e.id===t.todolistId?Object(T.a)(Object(T.a)({},e),{},{title:t.title}):e}));default:return e}},taskReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODOLIST":return Object(T.a)(Object(T.a)({},e),{},Object(j.a)({},t.id,[]));case"ADD_TASK":var n={id:Object(v.v1)(),title:t.title,isDone:!1};return Object(T.a)(Object(T.a)({},e),{},Object(j.a)({},t.todolistId,[n].concat(Object(b.a)(e[t.todolistId]))));case"REMOVE_TASK":return Object(T.a)(Object(T.a)({},e),{},Object(j.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!==t.taskID}))));case"EDIT_TITLE_TASK":return Object(T.a)(Object(T.a)({},e),{},Object(j.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(T.a)(Object(T.a)({},e),{},{title:t.title}):e}))));case"CHANGE_STATUS_TASK":return Object(T.a)(Object(T.a)({},e),{},Object(j.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskID?Object(T.a)(Object(T.a)({},e),{},{isDone:t.isDone}):e}))));default:return e}}}),q=Object(G.b)(W);c.a.render(r.a.createElement(k.a,{store:q},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[79,1,2]]]);
//# sourceMappingURL=main.5bc0876d.chunk.js.map