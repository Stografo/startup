(this.webpackJsonpcodestografo=this.webpackJsonpcodestografo||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},46:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},57:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(19),s=i.n(a),d=(i(34),i(35),i(3)),j=i(4),l=i(6),r=i(5),o=(i(36),i(37),i.p+"static/media/menu.6e2d26b9.svg"),h=i.p+"static/media/menu-x.4fc9431e.svg",b=i(7),u=(i(38),i(27)),I=i.n(u),m=i(28),O=i.n(m),v=(i(39),i(0));function A(){window.location.reload()}var g=function(){return Object(v.jsx)("div",{className:"div-ButtonStart",onClick:A,children:Object(v.jsx)(b.b,{to:"/login",className:"Link-start",style:{textDecoration:"none"},children:Object(v.jsx)("input",{className:"ButtonStart",type:"button",value:"START"})})})},x=i(22),E=i.n(x),w=(i(46),function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(j.a)(i,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"div-resources",children:Object(v.jsxs)(b.b,{className:"resources",style:{textDecoration:"none",color:"#fff"},children:[" ",Object(v.jsx)(E.a,{className:"icon"})," Resources "]})})}}]),i}(c.Component)),N={textDecoration:"none",color:"#fff"};var R=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={width:window.innerWidth},e.handleWindowSizeChange=function(){e.setState({with:window.innerWidth})},e}return Object(j.a)(i,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=600,t={support:Object(v.jsxs)(b.b,{className:"suport",style:N,children:["  ",Object(v.jsx)(I.a,{className:"icons-menu"})," ",Object(v.jsx)("b",{children:"Support"})," "]}),resourses:Object(v.jsx)(w,{}),buttonStart:Object(v.jsx)(g,{}),moreContent:Object(v.jsxs)(b.b,{className:"morecontent",style:N,children:[" ",Object(v.jsx)(O.a,{className:"icons-menu-cloud"})," More content "]}),about:Object(v.jsx)(b.b,{className:"about",to:"/about",style:N,children:"  About "}),donate:Object(v.jsx)(b.b,{className:"donate",style:N,children:" Donate"})};return e?Object(v.jsxs)("div",{className:"div-movile",children:[Object(v.jsx)("div",{className:"li",children:t.support}),Object(v.jsx)("div",{className:"li",children:t.resourses}),Object(v.jsx)("div",{className:"li-start",children:Object(v.jsx)("div",{className:"button",children:t.buttonStart})}),Object(v.jsx)("div",{className:"li",children:t.moreContent}),Object(v.jsx)("div",{className:"li",children:t.about}),Object(v.jsx)("div",{className:"li",id:"div-donate",children:t.donate}),Object(v.jsx)("div",{className:"separador"})]}):Object(v.jsxs)("div",{className:"div-movile",children:[Object(v.jsx)("div",{className:"li",children:t.support}),Object(v.jsx)("div",{className:"li-start",children:Object(v.jsx)("div",{className:"button",children:t.buttonStart})}),Object(v.jsx)("div",{className:"li",children:t.moreContent}),Object(v.jsx)("div",{className:"li",children:t.about}),Object(v.jsx)("div",{className:"li",id:"div-donate",children:t.donate}),Object(v.jsx)("div",{className:"separador"})]})}}]),i}(c.Component),C=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={dropMenu:!1,srcicon:o,with:window.innerWidth},e.changeIcon=function(){e.state.srcicon===o&&(e.setState({srcicon:h}),e.setState({dropMenu:!0})),e.state.srcicon===h&&(e.setState({srcicon:o}),e.setState({dropMenu:!1}))},e.handleWindowSizeChange=function(){e.setState({with:window.innerWidth})},e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){this.state.width;return Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:this.changeIcon,className:"button-hamburgerIcon",children:Object(v.jsx)("img",{className:"img-hamburger",src:this.state.srcicon})}),this.state.dropMenu?Object(v.jsx)(R,{}):null]})}}]),i}(c.Component),p=(i(48),i.p+"static/media/logo.34b138e5.svg");function f(){window.location.reload()}var M=function(){return Object(v.jsx)("div",{onClick:f,children:Object(v.jsx)(b.b,{className:"a-home_link",to:"/",children:Object(v.jsx)("img",{className:"img-home-link",src:p,alt:"CodeStografo svg logo"})})})},Z=(i(49),i(25)),D=i.n(Z),S=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={width:window.innerWidth},e.handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e}return Object(j.a)(i,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return this.state.width<=600?Object(v.jsx)("div",{children:Object(v.jsxs)(b.b,{to:"/code",style:{textDecoration:"none"},children:[" ",Object(v.jsxs)("button",{className:"learn-code-input",children:[" ",Object(v.jsx)(D.a,{})," "]})," "]})}):Object(v.jsx)("div",{children:Object(v.jsxs)(b.b,{to:"/code",style:{textDecoration:"none"},children:[" ",Object(v.jsxs)("button",{className:"learn-code-input",children:[" Code ",Object(v.jsx)(D.a,{})," "]})," "]})})}}]),i}(c.Component);function W(){window.location.reload()}var z=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={width:window.innerWidth},e.handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e}return Object(j.a)(i,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=600,t={logo:Object(v.jsx)(M,{}),menu:Object(v.jsx)(C,{}),learnInput:Object(v.jsx)(S,{})};return e?Object(v.jsxs)("div",{className:"header-navbar",children:[Object(v.jsx)("div",{className:"navbarDiv1",children:t.menu}),Object(v.jsx)("div",{className:"navbarDiv2",children:Object(v.jsx)("div",{className:"borderClick",onClick:W,children:t.logo})}),Object(v.jsx)("div",{className:"navbarDiv3",children:Object(v.jsx)("div",{className:"borderClick",onClick:W,children:t.learnInput})})]}):Object(v.jsxs)("div",{className:"header-navbar",children:[Object(v.jsx)("div",{className:"navbarDiv1",children:Object(v.jsx)("div",{className:"borderClick",onClick:W,children:t.logo})}),Object(v.jsx)("div",{className:"navbarDiv15",children:Object(v.jsx)("div",{className:"resources-div",children:Object(v.jsx)(w,{})})}),Object(v.jsx)("div",{className:"navbarDiv2",children:Object(v.jsx)("div",{className:"borderClick",onClick:W,children:t.learnInput})}),Object(v.jsx)("div",{className:"navbarDiv3",children:t.menu})]})}}]),i}(c.Component),y=i(8),Q=(i(50),function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(v.jsx)("body",{className:"body-home",children:Object(v.jsx)("h1",{})})}}]),i}(c.Component)),G=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(v.jsx)("body",{children:Object(v.jsx)("h1",{children:"We are the about"})})}}]),i}(c.Component),L=(i(51),i(52),function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(e){var c;return Object(d.a)(this,i),(c=t.call(this,e)).state={name:e.text},c}return Object(j.a)(i,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"div-retroButton",children:Object(v.jsx)(b.b,{style:{textDecoration:"none"},children:Object(v.jsx)("input",{className:this.state.name,type:"button",value:this.state.name,onClick:this.filter})})})}}]),i}(c.Component)),Y=(i(53),i.p+"static/media/endScreen.54a2a971.png"),B=i.p+"static/media/go.ae1b19f4.png",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKEGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wMy0yNVQwNzozOS0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMy0yNVQwODoyMToxMC0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDMtMjVUMDg6MjE6MTAtMDU6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4MzY2ZWRlLWRiZjgtNzg0MS1hNWIyLTQ3N2QyMDdiNTViYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBjODg4NGUyLTk5NGUtOTg0ZC05MjAzLTQ2MTljYWIzNjk5YSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjViMjM5N2NjLTllZTEtNzU0YS05MTk4LTE3YjdmN2ZjNTQwMSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWIyMzk3Y2MtOWVlMS03NTRhLTkxOTgtMTdiN2Y3ZmM1NDAxIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTI1VDA3OjM5LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU5OWRhM2JiLTg4NDAtMGY0ZC1hYjRlLWFjZTk2Y2EzYjQ1ZCIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0yNVQwODoyMDoxMy0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYzg2ZTgyZi0yMjM1LTYwNDgtYmMxNi1hNTJiNmMxMDlhN2IiIHN0RXZ0OndoZW49IjIwMjEtMDMtMjVUMDg6MjE6MTAtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjgzNjZlZGUtZGJmOC03ODQxLWE1YjItNDc3ZDIwN2I1NWJiIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTI1VDA4OjIxOjEwLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFjODZlODJmLTIyMzUtNjA0OC1iYzE2LWE1MmI2YzEwOWE3YiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1YjIzOTdjYy05ZWUxLTc1NGEtOTE5OC0xN2I3ZjdmYzU0MDEiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YjIzOTdjYy05ZWUxLTc1NGEtOTE5OC0xN2I3ZjdmYzU0MDEiLz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+RTE4MkFEMjBDNzY5RjM0NUI1M0QzRjNBMjExOEYwQzk8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjViMjM5N2NjLTllZTEtNzU0YS05MTk4LTE3YjdmN2ZjNTQwMTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgTJRfUAABSQSURBVHja7d37c1Rlnsfx/gNcXZ1CRYHOpZN0nz7nPM/38pxOBBXwjpA+sWpnf9kqd3V3vKHC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",T=i.p+"static/media/python.d72dcf74.png",U=i.p+"static/media/html.b69798c8.png",J=(i(54),[{id:"go",img:B,cost:"free"},{id:"python",img:T,cost:"free"},{id:"js",img:k,cost:"paid"},{id:"html",img:U,cost:"free"}]),F=(c.Component,[{id:"go",img:B,cost:"free",level:"hard"},{id:"python",img:T,cost:"paid",level:"easy"},{id:"js",img:k,cost:"paid",level:"medium"},{id:"html",img:U,cost:"free",level:"easy"}]),P=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(e){var c;return Object(d.a)(this,i),(c=t.call(this,e)).easy=function(e,t){var i=t.free,n=t.paid,a=t.easy;if(i){if("free"===e.cost&&"easy"===e.level)return c.setState({h2:Object(v.jsx)("h2",{children:"free / easy"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img})}else if(n&&"paid"===e.cost&&"easy"===e.level)return c.setState({h2:Object(v.jsx)("h2",{children:"paid / easy"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img});if(a){if("easy"===e.level)return c.setState({h2:Object(v.jsx)("h2",{children:"easy"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img})}else if(c.setState((function(e){return{easy:!e.easy}})),"easy"===e.level)return c.setState({h2:Object(v.jsx)("h2",{children:"easy"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img})},c.free=function(e,t){if(t.free){if("free"===e.cost)return c.setState({h2:Object(v.jsx)("h2",{children:"free"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img})}else if(c.setState((function(e){return{free:!e.free}})),"free"===e.cost)return c.setState({h2:Object(v.jsx)("h2",{children:"free"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img})},c.paid=function(e,t){if(t.paid){if("paid"===e.cost)return c.setState({h2:Object(v.jsx)("h2",{children:"paid"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img})}else if(c.setState((function(e){return{paid:!e.paid}})),"paid"===e.cost)return c.setState({h2:Object(v.jsx)("h2",{children:"paid"})}),Object(v.jsx)("img",{className:"Product-img",src:e.img})},c.all=function(e){return Object(v.jsx)("img",{className:"Product-img",src:e.img})},c.show=function(e){switch(console.log("press",e),e){case"all":c.setState({show:Object(v.jsxs)("div",{children:[F.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[" ",c.all(e)," "]})}))," "]})}),c.setState({h2:Object(v.jsx)("h2",{})}),c.setState({easy:!1}),c.setState({medium:!1}),c.setState({hard:!1}),c.setState({free:!1}),c.setState({paid:!1});break;case"easy":c.setState({show:Object(v.jsxs)("div",{children:[F.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[" ",c.easy(e,c.state)," "]})}))," "]})}),c.setState({easy:!0}),c.setState({medium:!1}),c.setState({hard:!1});break;case"free":c.setState({show:Object(v.jsxs)("div",{children:[F.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[" ",c.free(e,c.state)," "]})}))," "]})}),c.setState({free:!0}),c.setState({paid:!1});break;case"paid":c.setState({show:Object(v.jsxs)("div",{children:[F.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[" ",c.paid(e,c.state)," "]})}))," "]})}),c.setState({free:!1}),c.setState({paid:!0})}},c.wardEasy=function(){c.show("easy")},c.wardMedium=function(){c.show("medium")},c.wardHard=function(){c.show("hard")},c.wardFree=function(){c.show("free")},c.wardPaid=function(){c.show("paid")},c.wardAll=function(){c.show("all")},c.state={show:Object(v.jsxs)("div",{children:[" ",F.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[" ",c.all(e)," "]})}))," "]}),h2:Object(v.jsx)("h2",{children:"defaultd"}),easy:!0,medium:!0,hard:!0,paid:!0,free:!0},c}return Object(j.a)(i,[{key:"render",value:function(){var e={wellcome:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"title",children:" All Courses "}),Object(v.jsx)("p",{children:" Filter By "})]}),endScreen:Object(v.jsx)("div",{className:"endScreen",children:Object(v.jsx)("img",{src:Y})})},t={easy:Object(v.jsxs)("div",{className:"button-div",onClick:this.wardEasy,children:["    ",Object(v.jsx)(L,{text:"Easy"}),"     "]}),medium:Object(v.jsxs)("div",{className:"button-div",onClick:this.wardMedium,children:["    ",Object(v.jsx)(L,{text:"Medium"}),"    "]}),hard:Object(v.jsxs)("div",{className:"button-div",onClick:this.wardHard,children:["    ",Object(v.jsx)(L,{text:"Hard"}),"    "]}),free:Object(v.jsxs)("div",{className:"button-div",onClick:this.wardFree,children:["    ",Object(v.jsx)(L,{text:"Free"}),"   "]}),paid:Object(v.jsxs)("div",{className:"button-div",onClick:this.wardPaid,children:["       ",Object(v.jsx)(L,{text:"Paid"}),"      "]}),all:Object(v.jsxs)("div",{className:"button-div",onClick:this.wardAll,children:["       ",Object(v.jsx)(L,{text:"Reset"}),"      "]})};return Object(v.jsxs)("div",{className:"wellcome-div",children:[e.wellcome,Object(v.jsxs)("div",{classname:"filter-div",children:[Object(v.jsxs)("div",{className:"level-div",children:[Object(v.jsx)("h2",{children:"  Level "}),t.easy,t.medium,t.hard]}),Object(v.jsxs)("div",{className:"price-div",children:[Object(v.jsxs)("h2",{children:[Object(v.jsx)("img",{className:"coin",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTI0VDEzOjEzOjAxLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTI0VDEzOjEzOjAxLTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0yNFQxMzoxMzowMS0wNTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YjU3MDVhZC0wYjIzLTdlNGMtODQ1OS03Njc4NmE5NmE0Y2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2Y2I1OTg0Ni1kZTVjLWJiNGMtOTA2Ny1j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"})," Price "]}),t.free,t.paid]}),t.all,e.endScreen,Object(v.jsxs)("div",{className:"products-div",children:[this.state.h2,this.state.show]})]})]})}}]),i}(c.Component),H=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(e){var c;return Object(d.a)(this,i),(c=t.call(this,e)).handleWindowSizeChange=function(){c.setState({width:window.innerWidth})},c.state={width:window.innerWidth},c}return Object(j.a)(i,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){this.state.width;var e={filter:Object(v.jsx)(P,{})};return Object(v.jsx)("div",{children:e.filter})}}]),i}(c.Component);i(55);function V(){window.location.reload()}var X=function(e){Object(l.a)(i,e);var t=Object(r.a)(i);function i(e){var c;return Object(d.a)(this,i),(c=t.call(this,e)).state={},c}return Object(j.a)(i,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"div-login",children:[Object(v.jsx)("div",{onClick:V,children:Object(v.jsxs)(b.b,{to:"/",children:[" ",Object(v.jsx)("img",{className:"logo-sign-in",src:p})," "]})}),Object(v.jsx)("h1",{className:"h1-sign-in",children:"Sign in to CodeStografo"}),Object(v.jsxs)("div",{className:"div-sign-in-user-input",children:[Object(v.jsx)("h1",{children:"Username or email address"}),Object(v.jsx)("input",{type:"e-mail"}),Object(v.jsxs)("h1",{children:[" Password ",Object(v.jsx)(b.b,{className:"link-forgot-password",children:"Forgot password?"})," "]}),Object(v.jsx)("input",{type:"password"}),Object(v.jsx)("button",{className:"button-Sing-in",type:"button",children:Object(v.jsx)("b",{children:"Sign in"})})]}),Object(v.jsx)("div",{className:"div-new-to-create-account",children:Object(v.jsxs)("h1",{children:[" Don't have account ?  ",Object(v.jsx)(b.b,{className:"Link-create-account",children:"Create an account."})]})})]})}}]),i}(c.Component);window.onhashchange=function(){window.location.reload()};var K=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(b.a,{children:["#/login"!==window.location.hash&&Object(v.jsx)(z,{}),Object(v.jsxs)(y.c,{children:[Object(v.jsx)(y.a,{path:"/",exact:!0,component:Q}),Object(v.jsx)(y.a,{path:"/about",component:G}),Object(v.jsx)(y.a,{path:"/code",component:H}),Object(v.jsx)(y.a,{path:"/login",component:X})]})]})})},q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,70)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(K,{})}),document.getElementById("root")),q()}},[[57,1,2]]]);
//# sourceMappingURL=main.0fdee7cc.chunk.js.map