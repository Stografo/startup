(this.webpackJsonpcodestografo=this.webpackJsonpcodestografo||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(19),s=n.n(a),o=(n(34),n(35),n(5)),r=n(6),l=n(8),d=n(7),j=(n(36),n(37),n.p+"static/media/menu.6e2d26b9.svg"),b=n.p+"static/media/menu-x.4fc9431e.svg",u=n(4),h=(n(38),n(27)),v=n.n(h),O=n(28),m=n.n(O),x=(n(39),n(0));function f(){window.location.reload()}var p=function(){return Object(x.jsx)("div",{onClick:f,className:"div-ButtonStart",children:Object(x.jsx)(u.b,{to:"/login",className:"Link-start",style:{textDecoration:"none"},children:Object(x.jsx)("input",{className:"ButtonStart",type:"button",value:"START"})})})},w=n(22),N=n.n(w),g=(n(46),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"div-resources",children:Object(x.jsxs)(u.b,{className:"resources",style:{textDecoration:"none",color:"#fff"},children:[" ",Object(x.jsx)(N.a,{className:"icon"})," Resources "]})})}}]),n}(c.Component)),y={textDecoration:"none",color:"#fff"},C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={width:window.innerWidth},e.handleWindowSizeChange=function(){e.setState({with:window.innerWidth})},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=600,t={support:Object(x.jsxs)(u.b,{className:"suport",style:y,children:["  ",Object(x.jsx)(v.a,{className:"icons-menu"})," ",Object(x.jsx)("b",{children:"Support"})," "]}),resourses:Object(x.jsx)(g,{}),buttonStart:Object(x.jsx)(p,{}),moreContent:Object(x.jsxs)(u.b,{className:"morecontent",style:y,children:[" ",Object(x.jsx)(m.a,{className:"icons-menu-cloud"})," More content "]}),about:Object(x.jsx)(u.b,{className:"about",to:"/about",style:y,children:"  About "}),donate:Object(x.jsx)(u.b,{className:"donate",style:y,children:" Donate"})};return e?Object(x.jsxs)("div",{className:"div-movile",children:[Object(x.jsx)("div",{className:"li",children:t.support}),Object(x.jsx)("div",{className:"li",children:t.resourses}),Object(x.jsx)("div",{className:"li-start",children:Object(x.jsx)("div",{className:"button",children:t.buttonStart})}),Object(x.jsx)("div",{className:"li",children:t.moreContent}),Object(x.jsx)("div",{className:"li",children:t.about}),Object(x.jsx)("div",{className:"li",id:"div-donate",children:t.donate}),Object(x.jsx)("div",{className:"separador"})]}):Object(x.jsxs)("div",{className:"div-movile",children:[Object(x.jsx)("div",{className:"li",children:t.support}),Object(x.jsx)("div",{className:"li-start",children:Object(x.jsx)("div",{className:"button",children:t.buttonStart})}),Object(x.jsx)("div",{className:"li",children:t.moreContent}),Object(x.jsx)("div",{className:"li",children:t.about}),Object(x.jsx)("div",{className:"li",id:"div-donate",children:t.donate}),Object(x.jsx)("div",{className:"separador"})]})}}]),n}(c.Component),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={dropMenu:!1,srcicon:j,with:window.innerWidth},e.changeIcon=function(){e.state.srcicon===j&&(e.setState({srcicon:b}),e.setState({dropMenu:!0})),e.state.srcicon===b&&(e.setState({srcicon:j}),e.setState({dropMenu:!1}))},e.handleWindowSizeChange=function(){e.setState({with:window.innerWidth})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){this.state.width;return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:this.changeIcon,className:"button-hamburgerIcon",children:Object(x.jsx)("img",{className:"img-hamburger",src:this.state.srcicon})}),this.state.dropMenu?Object(x.jsx)(C,{}):null]})}}]),n}(c.Component),S=(n(48),n.p+"static/media/logo.34b138e5.svg");var W=function(){return Object(x.jsx)(u.b,{className:"a-home_link",to:"/",children:Object(x.jsx)("img",{className:"img-home-link",src:S,alt:"CodeStografo svg logo"})})},z=(n(49),n(25)),D=n.n(z),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={width:window.innerWidth},e.handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return this.state.width<=600?Object(x.jsx)("div",{children:Object(x.jsxs)(u.b,{to:"/code",style:{textDecoration:"none"},children:[" ",Object(x.jsxs)("button",{className:"learn-code-input",children:[" ",Object(x.jsx)(D.a,{})," "]})," "]})}):Object(x.jsx)("div",{children:Object(x.jsxs)(u.b,{to:"/code",style:{textDecoration:"none"},children:[" ",Object(x.jsxs)("button",{className:"learn-code-input",children:[" Code ",Object(x.jsx)(D.a,{})," "]})," "]})})}}]),n}(c.Component);function M(){window.location.reload()}var E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={width:window.innerWidth},e.handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=600,t={logo:Object(x.jsx)(W,{}),menu:Object(x.jsx)(k,{}),learnInput:Object(x.jsx)(L,{})};return e?Object(x.jsxs)("div",{className:"header-navbar",children:[Object(x.jsx)("div",{className:"navbarDiv1",children:t.menu}),Object(x.jsx)("div",{className:"navbarDiv2",children:Object(x.jsx)("div",{className:"borderClick",onClick:M,children:t.logo})}),Object(x.jsx)("div",{className:"navbarDiv3",children:Object(x.jsx)("div",{className:"borderClick",onClick:M,children:t.learnInput})})]}):Object(x.jsxs)("div",{className:"header-navbar",children:[Object(x.jsx)("div",{className:"navbarDiv1",children:Object(x.jsx)("div",{className:"borderClick",onClick:M,children:t.logo})}),Object(x.jsx)("div",{className:"navbarDiv15",children:Object(x.jsx)("div",{className:"resources-div",children:Object(x.jsx)(g,{})})}),Object(x.jsx)("div",{className:"navbarDiv2",children:Object(x.jsx)("div",{className:"borderClick",onClick:M,children:t.learnInput})}),Object(x.jsx)("div",{className:"navbarDiv3",children:t.menu})]})}}]),n}(c.Component),A=n(3),I=(n(50),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)("body",{className:"body-home",children:Object(x.jsx)("h1",{})})}}]),n}(c.Component)),F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)("body",{children:Object(x.jsx)("h1",{children:"We are the about"})})}}]),n}(c.Component),U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={},c}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"All Courses"}),Object(x.jsxs)("p",{children:["From beginner to advance level.",Object(x.jsx)("br",{})," Learn all you need   with Stografo"]}),Object(x.jsxs)("section",{className:"section-filter-by",children:[Object(x.jsx)("div",{className:"div-filter-by-level"}),Object(x.jsx)("div",{className:"div-filter-by-price"}),Object(x.jsx)("div",{className:"div-filter-by-tech"})]}),Object(x.jsx)("section",{className:"section-render-curses"})]})}}]),n}(c.Component);n(51);function B(){window.location.reload()}var T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={},c}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"div-login",children:[Object(x.jsx)("div",{onClick:B,children:Object(x.jsxs)(u.b,{to:"/",children:[" ",Object(x.jsx)("img",{className:"logo-sign-in",src:S})," "]})}),Object(x.jsx)("h1",{className:"h1-sign-in",children:"Sign in to CodeStografo"}),Object(x.jsxs)("div",{className:"div-sign-in-user-input",children:[Object(x.jsx)("h1",{children:"Username or email address"}),Object(x.jsx)("input",{type:"e-mail"}),Object(x.jsxs)("h1",{children:[" Password ",Object(x.jsx)(u.b,{className:"link-forgot-password",children:"Forgot password?"})," "]}),Object(x.jsx)("input",{type:"password"}),Object(x.jsx)("button",{className:"button-Sing-in",type:"button",children:Object(x.jsx)("b",{children:"Sign in"})})]}),Object(x.jsx)("div",{className:"div-new-to-create-account",children:Object(x.jsxs)("h1",{children:[" Don't have account ?  ",Object(x.jsx)(u.b,{className:"Link-create-account",children:"Create an account."})]})})]})}}]),n}(c.Component);var P=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(u.a,{children:["#/login"!==window.location.hash&&Object(x.jsx)(E,{}),Object(x.jsxs)(A.c,{children:[Object(x.jsx)(A.a,{path:"/",exact:!0,component:I}),Object(x.jsx)(A.a,{path:"/about",component:F}),Object(x.jsx)(A.a,{path:"/code",component:U}),Object(x.jsx)(A.a,{path:"/login",component:T})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root")),J()}},[[53,1,2]]]);
//# sourceMappingURL=main.1f0c0dc0.chunk.js.map