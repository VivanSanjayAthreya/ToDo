(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),r=a.n(o),c=(a(13),a(14),a(4));function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(c.b,{className:"navbar-brand",to:"/ToDo/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link active","aria-current":"page",to:"/ToDo/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/ToDo/about"},"About"))),e.searchBar?l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):"")))}s.defaultProps={title:"Your title",searchBar:!0};a(15);var i=function(){return l.a.createElement("footer",{className:"bg-dark text-light py-3 footerStyle"},l.a.createElement("p",{className:"text-center"},"Copyright \xa9 Vivan Sanjay Athreya"))},m=a(3),u=a(7),d=function(e){var t=e.todo,a=e.onDelete;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.desc),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)}},"Delete")),l.a.createElement("hr",null))},b=(a(16),function(e){return l.a.createElement("div",{className:"container ToDosStyle"},l.a.createElement("h3",{className:"my-3"},"ToDos List"),0===e.todos.length?"No ToDos to Display":e.todos.map(function(t){return l.a.createElement(d,{todo:t,key:t.sno,onDelete:e.onDelete})}))}),p=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(""),s=Object(m.a)(c,2),i=s[0],u=s[1];return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",null,"Add an Event"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),o&&i?(e.addToDo(o,i),r(""),u("")):alert("Title or Description cannot be empty")}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"ToDo Title"),l.a.createElement("input",{type:"text",value:o,onChange:function(e){return r(e.target.value)},className:"form-control",id:"title"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"desc",className:"form-label"},"ToDo Description"),l.a.createElement("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)},className:"form-control",id:"desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success"},"Add ToDo"),l.a.createElement("hr",null)))},E=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)(e),a=Object(m.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(o))},[o]),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{addToDo:function(e,t){console.log("Adding ToDo",e,t);var a={sno:0===o.length?1:o[o.length-1].sno+1,title:e,desc:t};r([].concat(Object(u.a)(o),[a])),console.log(a)}}),l.a.createElement(b,{todos:o,onDelete:function(e){console.log("Deleted",e),r(o.filter(function(t){return t!==e})),localStorage.setItem("todos",JSON.stringify(o))}}))},g=function(){return l.a.createElement("div",{style:{minHeight:"88vh"}},l.a.createElement("h2",{className:"text-center p-3"},"This is About Vivan Sanjay Athreya's page"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis voluptate ipsa, ipsum est ea velit, aliquid modi cumque aspernatur quidem. Pariatur ipsum aliquid odio cumque, doloribus quia eos quod possimus facere veniam labore ut adipisci nostrum optio, mollitia minima sed corporis commodi repellendus perferendis sapiente nemo rerum vel deserunt?"))},v=a(1);var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(s,{title:"My ToDos List",searchBar:!0}),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/ToDo/",element:l.a.createElement(E,null)}),l.a.createElement(v.a,{exact:!0,path:"ToDo/about",element:l.a.createElement(g,null)})),l.a.createElement(i,null)))},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),h()}],[[8,1,2]]]);
//# sourceMappingURL=main.07332db5.chunk.js.map