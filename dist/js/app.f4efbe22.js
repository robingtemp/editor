(function(t){function e(e){for(var r,i,c=e[0],l=e[1],a=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(p.length)p.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var s=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"25f7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("034f"),n("2877")),c={},l=Object(i["a"])(c,o,u,!1,null,null,null),a=l.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Editor")],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toolbar"},[n("button",{staticClass:"save",on:{click:function(e){return t.onSave()}}},[t._v("Spara")])]),n("quillEditor",{ref:"quillEditor",attrs:{options:t.editorOptions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},v=[],b=(n("8096"),n("953d")),h={name:"Editor",components:{quillEditor:b["quillEditor"]},data:function(){return{content:"",editorOptions:{placeholder:"Skriv nått här...",readOnly:!1,theme:"snow"}}},methods:{onSave:function(){console.log(this.content)}}},m=h,y=(n("b16a"),Object(i["a"])(m,d,v,!1,null,null,null)),O=y.exports,w={name:"Home",components:{Editor:O}},g=w,_=Object(i["a"])(g,f,p,!1,null,null,null),j=_.exports;r["a"].use(s["a"]);var x=[{path:"/",name:"Home",component:j}],E=new s["a"]({base:"",routes:x}),S=E;r["a"].config.productionTip=!1,new r["a"]({router:S,render:function(t){return t(a)}}).$mount("#app")},"85ec":function(t,e,n){},b16a:function(t,e,n){"use strict";n("25f7")}});
//# sourceMappingURL=app.f4efbe22.js.map