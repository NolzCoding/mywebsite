(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"14d6efee"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("h1",[t._v("Nolz")])]),a("v-spacer"),a("v-btn",{staticClass:"text-center",attrs:{target:"_blank",icon:""},on:{click:function(e){return t.changeTheme()}}},[a("span",{staticClass:"mr-2"}),a("v-icon",[t._v("mdi-brightness-6")])],1)],1),a("v-main",[a("router-view")],1)],1)},i=[],s={name:"App",data:function(){return{}},methods:{changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},o=s,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),v=a("40dc"),m=a("8336"),p=a("132d"),f=a("f6c4"),h=a("2fa4"),b=Object(l["a"])(o,n,i,!1,null,null,null),g=b.exports;u()(b,{VApp:d["a"],VAppBar:v["a"],VBtn:m["a"],VIcon:p["a"],VMain:f["a"],VSpacer:h["a"]});a("d3b7"),a("3ca3"),a("ddb0");var x=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-parallax",{attrs:{"ma-0":"",height:"300",src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"}},[a("h1",{staticClass:"text-center",attrs:{"text-xl":""}},[t._v("Nolz")]),a("p",{staticClass:"text-center"},[t._v(" VFX, CGI, CODING, GAME DEV, PHOTOGRAPHY, FILM MAKING")])]),a("v-container",{attrs:{"grid-list-xs":""}},[a("h1",[t._v("What is this?")]),a("p",[t._v("A website about my personal projects in multiple ares like coding and CGI")])]),a("v-spacer",{attrs:{"ma-5":""}}),a("v-divider",{attrs:{"ma-5":""}}),a("v-container",{attrs:{"grid-list-xs":""}},[a("hobbycards")],1),a("v-container",{staticClass:"text-center"},[a("v-btn",{attrs:{icon:"",outlined:"",color:"primary","x-large":""}},[a("v-icon",[t._v("mdi-arrow-down")])],1)],1),a("vfxpart")],1)},y=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{staticClass:"mx-auto transition-fast-in-fast-out",attrs:{"ma-5":"",elevation:r?5:0,"max-width":"344",outlined:"",raised:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"text-overline mb-4"},[t._v(" Art ")]),a("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" VFX & 3D Art ")]),a("v-list-item-subtitle",[t._v("I do Visual effects aswell as 3D Art in Blender 3D")])],1),a("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[a("img",{attrs:{src:"https://icon-library.com/images/blender-3d-icon/blender-3d-icon-5.jpg",alt:""}})])],1),a("v-card-actions",[a("v-btn",{attrs:{outlined:"",text:""}},[t._v(" Read more ")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{staticClass:"mx-auto transition-fast-in-fast-out",attrs:{elevation:r?5:0,"max-width":"344",outlined:"",raised:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"text-overline mb-4"},[t._v(" Web ")]),a("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" Full stack ")]),a("v-list-item-subtitle",[t._v("I do full stack web development, using Vuejs and Nodejs.")])],1),a("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[a("img",{attrs:{src:"https://vuejs.org/images/logo.png",alt:""}})])],1),a("v-card-actions",[a("v-btn",{attrs:{outlined:"",text:""}},[t._v(" Read more ")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{staticClass:"mx-auto transition-fast-in-fast-out",attrs:{elevation:r?5:0,"max-width":"344",outlined:"",raised:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"text-overline mb-4"},[t._v(" Game dev ")]),a("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" Minecraft plugins ")]),a("v-list-item-subtitle",[t._v("I code Minecraft plugins using Java and integrate other tools such as MongoDB with it")])],1),a("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[a("img",{attrs:{src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",alt:""}})])],1),a("v-card-actions",[a("v-btn",{attrs:{outlined:"",text:""}},[t._v(" Read more ")])],1)],1)]}}])})],1)},w=[],C={name:"Hobbycards"},j=C,O=a("b0af"),k=a("99d9"),A=a("ce87"),I=a("a722"),P=a("da13"),M=a("8270"),S=a("5d23"),E=Object(l["a"])(j,V,w,!1,null,null,null),L=E.exports;u()(E,{VBtn:m["a"],VCard:O["a"],VCardActions:k["a"],VHover:A["a"],VLayout:I["a"],VListItem:P["a"],VListItemAvatar:M["a"],VListItemContent:S["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"VFX"},[a("v-container",{attrs:{"grid-list-xs":""}},[a("h1",[t._v("VFX")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis excepturi assumenda dolorem ipsam similique sed vero deserunt neque perferendis earum. Accusantium nihil nobis dolorum architecto pariatur eum quidem accusamus deserunt ex aliquam tempora repellat velit et dolore minus animi modi, ab porro. Eaque, impedit quas aut doloremque quam unde sapiente.")])])],1)},T=[],G={name:"Vfxpart"},D=G,H=a("a523"),$=Object(l["a"])(D,q,T,!1,null,null,null),B=$.exports;u()($,{VContainer:H["a"]});var F={name:"Home",components:{Hobbycards:L,Vfxpart:B}},N=F,z=a("ce7e"),R=a("8b9c"),X=Object(l["a"])(N,_,y,!1,null,"615b23bc",null),J=X.exports;u()(X,{VBtn:m["a"],VContainer:H["a"],VDivider:z["a"],VIcon:p["a"],VParallax:R["a"],VSpacer:h["a"]}),r["a"].use(x["a"]);var W=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new x["a"]({mode:"history",routes:W}),Y=K,Q=a("f309"),U=a("fcf4");r["a"].use(Q["a"]);var Z=new Q["a"]({theme:{dark:!0,themes:{light:{primary:U["a"].deepOrange},dark:{primary:U["a"].deepOrange}}}});r["a"].config.productionTip=!1,new r["a"]({router:Y,vuetify:Z,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.c766db62.js.map