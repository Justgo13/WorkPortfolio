(this["webpackJsonpjason-site"]=this["webpackJsonpjason-site"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(4),i=a(6),r=a(5),s=a(1),o=a.n(s),l=a(9),j=a.n(l),d=a(2),b=(a(21),a(16)),u=a(7),p="About Me",g="Work Experience",v="Projects",h="Active Page",m=a(0),O=["name","url"],x={aboutMeActivePage:function(){return function(e){e({type:p})}},workExpActivePage:function(){return function(e){e({type:g})}},projectsActivePage:function(){return function(e){e({type:v})}}},_=Object(u.b)(null,x)((function(e){var t=e.name,a=e.url,n=Object(b.a)(e,O);return n.aboutMeActivePage(),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"nav-link",onClick:function(){!function(e,t){e===p?t.aboutMeActivePage():e===g?t.workExpActivePage():e===v&&t.projectsActivePage()}(t,n)},href:a,children:t})})})})),f="About Me",y="Work Experience",N="Projects",k=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={navItems:[{name:f,url:"#"},{name:y,url:"#"},{name:N,url:"#"}]},e.getNavEntry=function(t){var a=e.state.navItems.findIndex((function(e){return e.name===t}));return e.state.navItems[a]},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)(_,Object(d.a)({},this.getNavEntry(f))),Object(m.jsx)(_,Object(d.a)({},this.getNavEntry(y))),Object(m.jsx)(_,Object(d.a)({},this.getNavEntry(N)))]})})}}]),a}(s.Component),w=k,P=(a(29),function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(m.jsxs)("a",{className:"navbar-brand",href:"index.html",children:[Object(m.jsx)("i",{className:"fas fa-laptop-code nav-icon"}),"Software Portfolio"]}),Object(m.jsx)(w,{})]})}}]),a}(s.Component)),C=P,A=(a(30),function(e){var t=e.heading,a=e.img_url,n=e.sub_heading,c={header:{backgroundImage:"url(/".concat(a,")"),height:"20vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},content:{height:"100%",width:"100%",backgroundColor:"rgba(215, 215, 180, 0.7)"}};return Object(m.jsx)("div",{style:c.header,children:Object(m.jsxs)("div",{style:c.content,children:[Object(m.jsx)("h1",{className:"display-3 header",children:t}),Object(m.jsx)("h3",{className:"display-6 sub-header",children:n})]})})}),S=(a(31),a(32),function(e){var t=e.logo_name,a=e.caption_title,n=e.caption_text,c="fab";return"database"===t&&(c="fas"),Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{className:"".concat(c," fa-").concat(t," icon"),id:t}),Object(m.jsx)("h3",{children:a}),Object(m.jsx)("p",{children:n})]})}),M=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={github_url:"https://github.com/Justgo13",linkedin_url:"https://www.linkedin.com/in/justgo13/"},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("a",{href:this.state.github_url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(S,{logo_name:"github"})}),Object(m.jsx)("a",{href:this.state.linkedin_url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(S,{logo_name:"linkedin"})})]})}}]),a}(s.Component),E=M,I=(a(33),function(e){var t=e.intro_text;return Object(m.jsxs)("div",{className:"col-sm-4 col-md-6 col-lg-12 card border-success mt-4 mb-4 introduction",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Introduction"})}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("div",{className:"card-text",children:Object(m.jsx)("p",{children:t})})})]})}),R=(a(34),function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"display-5 header",children:"Skills"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"html5",caption_title:"HTML5",caption_text:"Designing user-friendly webpages"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"js-square",caption_title:"JavaScript",caption_text:"Modular design for dynamic websites"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"css3-alt",caption_title:"CSS3",caption_text:"Styling HTML"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"react",caption_title:"ReactJS",caption_text:"Creating modular components and using redux to store data"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"php",caption_title:"PHP",caption_text:"Creating websites that link to SQL backends"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"linux",caption_title:"Linux/Unix",caption_text:"Utilizing the terminal to develop in a virutual machine"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"bootstrap",caption_title:"Bootstrap",caption_text:"Created responsive websites using CSS templates"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"npm",caption_title:"NPM",caption_text:"Installed various modules from node js"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"database",caption_title:"MongoDB/MySQL",caption_text:"Query databases and set up connections to external programs"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"python",caption_title:"Python",caption_text:"Designing modulues that communicate with external applications"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"java",caption_title:"Java",caption_text:"Creating applications that follow an OOP design"})}),Object(m.jsx)("div",{className:"col-md-4 skills-row",children:Object(m.jsx)(S,{logo_name:"cuttlefish",caption_title:"C Language",caption_text:"Memory management"})})]})]})}),J=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={heading:p,img_url:"AboutMe.jpg",sub_heading:"Carleton University Software Engineering Student",intro_text:"I am a software engineering student studying at Carleton University who is passionate about developing software applications. Through my years of university and coop experiences, I have developed a strong grasp on programming paradigms, design patterns, and various development languages. "},e}return Object(c.a)(a,[{key:"render",value:function(){return this.props.active_page===p?Object(m.jsxs)("div",{children:[Object(m.jsx)(A,Object(d.a)({},this.state)),Object(m.jsx)(I,{intro_text:this.state.intro_text}),Object(m.jsx)(R,{}),Object(m.jsx)(E,{})]}):Object(m.jsx)("div",{})}}]),a}(s.Component),L=Object(u.b)((function(e){return{active_page:e.activePageReducer.activePageName.active_page_name}}),null)(J),D=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={heading:g,img_url:"work_experience.png",sub_heading:"Collaboration is key"},e}return Object(c.a)(a,[{key:"render",value:function(){return this.props.active_page===g?Object(m.jsxs)("div",{children:[Object(m.jsx)(A,Object(d.a)({},this.state)),Object(m.jsx)(E,{})]}):Object(m.jsx)("div",{})}}]),a}(s.Component),T=Object(u.b)((function(e){return{active_page:e.activePageReducer.activePageName.active_page_name}}),null)(D),U=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={heading:v,img_url:"projects.png",sub_heading:"Where skills were applied"},e}return Object(c.a)(a,[{key:"render",value:function(){return this.props.active_page===v?Object(m.jsxs)("div",{children:[Object(m.jsx)(A,Object(d.a)({},this.state)),Object(m.jsx)(E,{})]}):Object(m.jsx)("div",{})}}]),a}(s.Component),W=Object(u.b)((function(e){return{active_page:e.activePageReducer.activePageName.active_page_name}}),null)(U),B=a(8),H=a(15),Q={pages:[{page_name:p,active_page:!1},{page_name:g,active_page:!1},{page_name:v,active_page:!1}]},z=Object(B.combineReducers)({activePageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=Object(H.a)(e.pages),n={active_page_name:""};switch(t.type){case p:var c=a.findIndex((function(e){return e.page_name===p}));return-1!==c&&(a[c].active_page=!0),a.forEach((function(e){e.page_name!==p&&(e.active_page=!1)})),n.active_page_name=p,Object(d.a)(Object(d.a)({},e),{},{activePageName:n});case g:var i=a.findIndex((function(e){return e.page_name===g}));return-1!==i&&(a[i].active_page=!0),a.forEach((function(e){e.page_name!==g&&(e.active_page=!1)})),n.active_page_name=g,Object(d.a)(Object(d.a)({},e),{},{activePageName:n});case v:var r=a.findIndex((function(e){return e.page_name===v}));return-1!==r&&(a[r].active_page=!0),a.forEach((function(e){e.page_name!==v&&(e.active_page=!1)})),n.active_page_name=v,Object(d.a)(Object(d.a)({},e),{},{activePageName:n});case h:var s=n.active_page_name;return Object(d.a)(Object(d.a)({},e),{},{active_page:s});default:return e}}}),q=a(13),F=a(14),G=Object(B.createStore)(z,Object(q.composeWithDevTools)(Object(B.applyMiddleware)(F.a))),K=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)(u.a,{store:G,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(C,{}),Object(m.jsx)(L,{}),Object(m.jsx)(T,{}),Object(m.jsx)(W,{})]})})}}]),a}(o.a.Component);j.a.render(Object(m.jsx)(K,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.bfd62852.chunk.js.map