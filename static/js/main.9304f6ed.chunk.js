(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{160:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),c=a(52),l=a.n(c),r=(a(63),a(13)),o=a(3),u=a.p+"static/media/charleston-pineapple.1ad84db2.jpeg",d=a.p+"static/media/tree3.d514b7dd.jpeg";function m(){return Object(s.jsxs)("main",{className:"mt-36",children:[Object(s.jsx)("img",{src:u,alt:"pineapple water fountain",className:"absolute object-cover w-full h-full"}),Object(s.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8",children:Object(s.jsx)("h1",{className:"mt-36 text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name",children:"Hello, I'm Kenny"})})]})}var j=a(14),b=a(53),h=a.n(b)()({projectId:"t5a01jsc",dataset:"production"}),x=a(23),p=a.n(x),g=a(54),v=a.n(g),f=p()(h);function O(){var e,t=Object(n.useState)(null),a=Object(j.a)(t,2),i=a[0],c=a[1];return Object(n.useEffect)((function(){h.fetch('*[_type == "author"]{\n          name,\n          bio,\n          "authorImage": image.asset->url\n      }').then((function(e){return c(e[0])})).catch(console.error)}),[]),i?Object(s.jsxs)("main",{className:"mt-36 bg-gradient-to-r from-gray-400 via-white-500 to-gray-800 min-h-screen",children:[Object(s.jsx)("img",{src:d,alt:"green moss on a tree",className:"absolute object-cover w-full h-full fixed"}),Object(s.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(s.jsxs)("section",{className:"rounded-lg shadow-2xl lg:flex p-20 opacity-80",style:{backgroundColor:"#6b6e70"},children:[Object(s.jsx)("img",{src:(e=i.authorImage,f.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 ",alt:i.name}),Object(s.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(s.jsxs)("h1",{className:"cursive text-6xl text-green-300 mb-4",children:["Hey there. I'm"," ",Object(s.jsx)("span",{className:"text-green-100",children:i.name})]}),Object(s.jsx)("p",{className:"text-gray-100",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"}),Object(s.jsx)("div",{className:"prose lg:prose-xl text-white",children:Object(s.jsx)(v.a,{blocks:i.bio,projectId:"t5a01jsc",dataset:"production"})})]})]})})]}):Object(s.jsx)("div",{children:"LOADING"})}var N=a(24),y=a.n(N),w=a(55),k=(a.p,a.p,a.p,a(56)),q=a.n(k),C=function(){var e=Object(n.useState)("pikachu"),t=Object(j.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)([]),l=Object(j.a)(c,2),r=l[0],o=l[1],u=Object(n.useState)(""),d=Object(j.a)(u,2),m=d[0],b=d[1],h=function(){var e=Object(w.a)(y.a.mark((function e(){var t,s,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,s="https://pokeapi.co/api/v2/pokemon/".concat(a),e.next=5,q.a.get(s);case 5:n=e.sent,t.push(n.data),b(n.data.types[0].type.name),o(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Get Pokemon Data"}),Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),h()},children:Object(s.jsx)("label",{children:Object(s.jsx)("input",{type:"text",onChange:function(e){i(e.target.value.toLowerCase())},placeholder:"Enter Pokemon Name"})})}),r.map((function(e){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("img",{src:e.sprites.front_default}),Object(s.jsxs)("div",{className:"div-table",children:[Object(s.jsx)("div",{className:"div-table-body"}),Object(s.jsxs)("div",{className:"div-table-row",children:[Object(s.jsx)("div",{className:"div-table-cell",children:Object(s.jsx)("b",{children:"Type"})}),Object(s.jsx)("div",{className:"div-table-cell",children:m})]}),Object(s.jsxs)("div",{className:"div-table-row",children:[Object(s.jsx)("div",{className:"div-table-cell",children:Object(s.jsx)("b",{children:"Height"})}),Object(s.jsxs)("div",{className:"div-table-cell",children:[" ",Math.round(3.9*e.height),'"']})]}),Object(s.jsxs)("div",{className:"div-table-row",children:[Object(s.jsx)("div",{className:"div-table-cell",children:Object(s.jsx)("b",{children:"Weight"})}),Object(s.jsxs)("div",{className:"div-table-cell",children:[" ",Math.round(e.weight/4.3)," lbs"]})]}),Object(s.jsxs)("div",{className:"div-table-row",children:[Object(s.jsx)("div",{className:"div-table-cell",children:Object(s.jsx)("b",{children:"Number of battles"})}),Object(s.jsx)("div",{className:"div-table-cell",children:e.game_indices.length})]})]})]})}))]})},I=a(25);function S(){return Object(s.jsx)("header",{className:"fixed top-0 block shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center",style:{backgroundColor:"#61892F"},children:Object(s.jsxs)("div",{className:"container mx-auto  justify-between",children:[Object(s.jsxs)("nav",{className:"flex",children:[Object(s.jsx)(r.b,{to:"/",exact:!0,activeClassName:"text-white ",className:"inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-400 text-4xl font-bold cursive tracking-widest",children:"Kenny"}),Object(s.jsx)(r.b,{to:"/about",className:"inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-400",activeClassName:"text-red-100 bg-gray-600",children:"About Me"}),Object(s.jsx)(r.b,{to:"/resume",className:"inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-400",activeClassName:"text-red-100 bg-gray-600",children:"Resume"})]}),Object(s.jsxs)("div",{className:"inline-flex mb-2 px-3",children:[Object(s.jsx)(I.SocialIcon,{url:"https://www.linkedin.com/in/kenny-santiago-a70902205/",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(s.jsx)(I.SocialIcon,{url:"https://github.com/ksantiag",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})}var A=function(){return Object(s.jsxs)(r.a,{children:[Object(s.jsx)(S,{}),Object(s.jsx)(o.a,{component:m,path:"/",exact:!0}),Object(s.jsx)(o.a,{component:O,path:"/about"}),Object(s.jsx)(o.a,{component:C,path:"/resume"})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root")),D()},63:function(e,t,a){}},[[160,1,2]]]);
//# sourceMappingURL=main.9304f6ed.chunk.js.map