(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),o=n.n(a),s=(n(15),n(10)),i=n(6),l=n(2),d=n(5),u=n.n(d),j=n(0),b=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(j.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={color:"steelblue"},b.propType={text:u.a.string,color:u.a.string,onClick:u.a.func};var h=b,O=function(e){e.title;var t=e.onAdd,n=e.showAdd;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:"Task Tracker"}),Object(j.jsx)(h,{color:n?"red":"green",text:n?"Close":"Add",onClick:t})]})},x=n(9),m=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(j.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(j.jsxs)("h3",{children:[t.text," "," ",Object(j.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})," "]}),Object(j.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(m,{task:e,onDelete:n,onToggle:c},e.id)}))})},k=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),d=i[0],u=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:d,reminder:O}),o(""),u(""),x(!1)):alert("Please add a task")},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Task"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Day and Time"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Day and Time",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control form-control-check",children:[Object(j.jsx)("label",{children:"Set Reminder"}),Object(j.jsx)("input",{type:"checkbox",checked:O,placeholder:"Add Task",value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var p=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0}]),o=Object(l.a)(a,2),d=o[0],u=o[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(O,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(j.jsx)(k,{onAdd:function(e){var t=Math.floor(1e5*Math.random())+1,n=Object(i.a)({id:t},e);u([].concat(Object(s.a)(d),[n]))}}),d.length>0?Object(j.jsx)(f,{tasks:d,onDelete:function(e){u(d.filter((function(t){return t.id!==e})))},onToggle:function(e){u(d.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No tasks to show"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.78b9340d.chunk.js.map