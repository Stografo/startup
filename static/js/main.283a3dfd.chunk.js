(this.webpackJsonpcodestografo=this.webpackJsonpcodestografo||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(19),i=n.n(a),r=(n(34),n(35),n(6)),o=n(7),l=n(9),j=n(8),d=(n(36),n(37),n.p+"static/media/menu.6e2d26b9.svg"),b=n.p+"static/media/menu-x.4fc9431e.svg",u=n(26),h=n.n(u),O=n(28),v=n.n(O),m=n(27),x=n.n(m),f=(n(38),n(4)),p=n(1),w=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/login",className:"Link-start",children:Object(p.jsx)("input",{className:"ButtonStart",type:"button",value:"START"})})})},g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={show_navbar:!1,srcicon:d},e.menu=function(){e.setState((function(e){return{show_navbar:!e.show_navbar}}));var t=!0;switch(e.state.srcicon===d&&(t=!1),t){case!1:e.setState({srcicon:b});break;default:e.setState({srcicon:d})}},e.closeMenu=function(){e.setState({show_navbar:!1}),e.setState({srcicon:d})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:this.menu,className:"button-hamburgerIcon",children:Object(p.jsx)("img",{className:"img-hamburger",src:this.state.srcicon})}),this.state.show_navbar?Object(p.jsxs)("div",{className:"div-menu",children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsxs)("a",{className:"suport",href:"",children:[" ",Object(p.jsx)(h.a,{className:"icons-menu"})," Support "]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{className:"resources",href:"",children:[" ",Object(p.jsx)(x.a,{className:"icons-menu"})," Resources"]})}),Object(p.jsx)("li",{className:"learn-input",children:Object(p.jsxs)(f.b,{to:"/courses",onClick:this.closeMenu,children:[" ",Object(p.jsxs)("div",{className:"container-component",children:[" ",Object(p.jsx)(w,{})," "]}),"  "]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{className:"morecontent",href:"",children:[Object(p.jsx)(v.a,{className:"icons-menu"}),"More content"]})}),Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{className:"about",to:"/about",onClick:this.closeMenu,children:" About "})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"donate",href:"",children:" Donate"})})]}),Object(p.jsx)("div",{className:"separador",onClick:this.closeMenu})]}):null]})}}]),n}(c.Component),N=(n(46),n.p+"static/media/logo.34b138e5.svg");var C=function(){return Object(p.jsx)(f.b,{className:"a-home_link",to:"/",children:Object(p.jsx)("img",{className:"img-home-link",src:N,alt:"CodeStografo svg logo"})})},k=(n(47),n(24)),y=n.n(k),S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={width:window.innerWidth},e.handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return this.state.width<=600?Object(p.jsxs)(f.b,{to:"/code",children:[" ",Object(p.jsxs)("button",{className:"learn-code-input",children:[" ",Object(p.jsx)(y.a,{})," "]})," "]}):Object(p.jsxs)(f.b,{to:"/code",children:[" ",Object(p.jsxs)("button",{className:"learn-code-input",children:[" Code ",Object(p.jsx)(y.a,{})," "]})," "]})}}]),n}(c.Component);function W(){window.location.reload()}var z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handleWindowSizeChange=function(){c.setState({width:window.innerWidth})},c.state={width:window.innerWidth},c}return Object(o.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=600,t={logo:Object(p.jsx)(C,{}),menu:Object(p.jsx)(g,{}),learnInput:Object(p.jsx)(S,{})};return e?Object(p.jsxs)("div",{className:"header-navbar",children:[Object(p.jsx)("div",{className:"navbarDiv1",children:t.menu}),Object(p.jsx)("div",{className:"navbarDiv2",children:Object(p.jsx)("div",{className:"borderClick",onClick:W,children:t.logo})}),Object(p.jsx)("div",{className:"navbarDiv3",children:t.learnInput})]}):Object(p.jsxs)("div",{className:"header-navbar",children:[Object(p.jsx)("div",{className:"navbarDiv1",children:Object(p.jsx)("div",{className:"borderClick",onClick:W,children:t.logo})}),Object(p.jsx)("div",{className:"navbarDiv2",children:Object(p.jsx)("div",{className:"borderClick",onClick:W,children:t.learnInput})}),Object(p.jsx)("div",{className:"navbarDiv3",children:t.menu})]})}}]),n}(c.Component),D=n(3),L=(n(48),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("body",{className:"body-home",children:Object(p.jsx)("h1",{})})}}]),n}(c.Component)),M=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("body",{children:Object(p.jsx)("h1",{children:"We are the about"})})}}]),n}(c.Component),F=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"All Courses"}),Object(p.jsxs)("p",{children:["From beginner to advance level.",Object(p.jsx)("br",{})," Learn all you need   with Stografo"]}),Object(p.jsxs)("section",{className:"section-filter-by",children:[Object(p.jsx)("div",{className:"div-filter-by-level"}),Object(p.jsx)("div",{className:"div-filter-by-price"}),Object(p.jsx)("div",{className:"div-filter-by-tech"})]}),Object(p.jsx)("section",{className:"section-render-curses"})]})}}]),n}(c.Component);n(49);function I(){window.location.reload()}var _=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"div-login",children:[Object(p.jsx)("div",{onClick:I,children:Object(p.jsxs)(f.b,{to:"/",children:[" ",Object(p.jsx)("img",{className:"logo-sign-in",src:N})," "]})}),Object(p.jsx)("h1",{className:"h1-sign-in",children:"Sign in to CodeStografo"}),Object(p.jsxs)("div",{className:"div-sign-in-user-input",children:[Object(p.jsx)("h1",{children:"Username or email address"}),Object(p.jsx)("input",{type:"e-mail"}),Object(p.jsxs)("h1",{children:[" Password ",Object(p.jsx)(f.b,{className:"link-forgot-password",children:"Forgot password?"})," "]}),Object(p.jsx)("input",{type:"password"}),Object(p.jsx)("button",{className:"button-Sing-in",type:"button",children:Object(p.jsx)("b",{children:"Sign in"})})]}),Object(p.jsx)("div",{className:"div-new-to-create-account",children:Object(p.jsxs)("h1",{children:[" Don't have account ?  ",Object(p.jsx)(f.b,{className:"Link-create-account",children:"Create an account."})]})})]})}}]),n}(c.Component);var A=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(f.a,{children:["#/login"!==window.location.hash&&Object(p.jsx)(z,{}),Object(p.jsxs)(D.c,{children:[Object(p.jsx)(D.a,{path:"/",exact:!0,component:L}),Object(p.jsx)(D.a,{path:"/about",component:M}),Object(p.jsx)(D.a,{path:"/code",component:F}),Object(p.jsx)(D.a,{path:"/login",component:_})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),E()}},[[51,1,2]]]);
//# sourceMappingURL=main.283a3dfd.chunk.js.map