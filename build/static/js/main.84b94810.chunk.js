(this["webpackJsonpmapping-components-practice"]=this["webpackJsonpmapping-components-practice"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n.n(c);var o=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))};var u=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))};var i=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},m=n(1);var p=function(e){const[t,n]=Object(a.useState)({title:"",content:""});function c(e){const{name:t,value:a}=e.target;n(e=>Object(m.a)(Object(m.a)({},e),{},{[t]:a}))}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{name:"title",onChange:c,value:t.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onChange:c,value:t.content,placeholder:"Take a note...",rows:"3"}),l.a.createElement("button",{onClick:function(a){e.onAdd(t),n({title:"",content:""}),a.preventDefault()}},"Add")))};var E=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(p,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(i,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),l.a.createElement(u,null))};r.a.render(l.a.createElement(E,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.84b94810.chunk.js.map