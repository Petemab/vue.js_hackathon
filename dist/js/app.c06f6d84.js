(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],s[o]&&d.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={1:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([7,0]),a()})({"0BI3":function(t,e,a){"use strict";var n=a("QzAO"),s=a.n(n);s.a},7:function(t,e,a){t.exports=a("Vtdi")},"8O5+":function(t,e,a){},GwAi:function(t,e,a){"use strict";var n=a("8O5+"),s=a.n(n);s.a},JZ20:function(t,e,a){},QzAO:function(t,e,a){},"R+BK":function(t,e,a){"use strict";var n=a("axuU"),s=a.n(n);s.a},TkQ9:function(t,e,a){},Tp40:function(t,e,a){"use strict";var n=a("nujO"),s=a.n(n);s.a},Vtdi:function(t,e,a){"use strict";a.r(e);a("VRzm");var n=a("Kw5r"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("BRITAIN BY THE BOOK")]),a("a",{staticClass:"navbar-burger",class:{"is-active":t.navIsOpen},attrs:{role:"button"},on:{click:function(e){t.toggleNav()}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.navIsOpen}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/places"}},[t._v("literary places")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/places/new"}},[t._v("add a literary place")])],1)])]),a("div",{staticClass:"mainView"},[a("router-view")],1)])},i=[],o={name:"app",data:function(){return{navIsOpen:!1}},methods:{toggleNav:function(){this.navIsOpen=!this.navIsOpen}},watch:{$route:function(){this.navIsOpen=!1}}},c=o,r=(a("bxp0"),a("KHd+")),l=Object(r["a"])(c,s,i,!1,null,"79d11034",null),u=l.exports,p=a("jE9Z"),d=(a("eKdF"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section homeSection"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[t._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third"}),a("router-link",{staticClass:"homePic column is-one-third",attrs:{tag:"div",to:"/places"}}),a("div",{staticClass:"column is-one-third"})],1),a("p",{staticClass:"credit"},[t._v("Created by Pete Bennett and Stephanie Ye")])])])])])}),m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homeWords has-text-centered"},[a("h1",{staticClass:"titleHome"},[t._v("Britain By The Book")]),a("hr"),a("h2",{staticClass:"subtitleHome"},[t._v("Explore the UK, city by city and page by page")]),a("p",{staticClass:"homeP"},[t._v("Click on Charles Dickens to begin")]),a("hr")])}],h={name:"Home"},v=h,f=(a("Tp40"),Object(r["a"])(v,d,m,!1,null,null,null)),b=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("google-map",{attrs:{places:t.places}}),a("img",{staticClass:"whale",attrs:{src:"http://www.angelfire.com/home/lake/images/4whale3d.gif"}}),t._m(0),t._m(1),t._m(2),t._m(3)],1)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bird-container bird-container--one"},[a("div",{staticClass:"bird bird--one"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bird-container bird-container--two"},[a("div",{staticClass:"bird bird--two"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bird-container bird-container--three"},[a("div",{staticClass:"bird bird--three"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bird-container bird-container--four"},[a("div",{staticClass:"bird bird--four"})])}],_=a("vDqi"),y=a.n(_),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"})},x=[],k=(a("f3/d"),{name:"GoogleMap",props:["center","places"],mounted:function(){this.map=new google.maps.Map(this.$el,{center:this.center||{lat:51.515,lng:-.078},zoom:6,styles:[{featureType:"all",elementType:"all",stylers:[{hue:"#ffaa00"},{saturation:"-33"},{lightness:"10"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#fe8f00"},{weight:"1.59"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{visibility:"on"}]}]}),this.infoWindow=new google.maps.InfoWindow},watch:{places:function(){var t=this;this.bounds=new google.maps.LatLngBounds,this.markers=this.places.map(function(e){t.bounds.extend(e.location);var a=new google.maps.Marker({position:e.location,map:t.map,animation:google.maps.Animation.DROP});a.addListener("click",function(){t.infoWindow.setContent("\n            <div style='text-align:center'>\n            <a href=\"/#/places/".concat(e._id,"\">\n            <div style='background-image: url(").concat(e.image,")' class=\"icon\" ></div>\n              <p class='title is-3'>").concat(e.name,"</p>\n              <p class='subtitle is-5'>Featured in: ").concat(e.book.toUpperCase(),"</p>\n              <p class='subtitle is-6'>").concat(e.address,"</p>\n            </a>\n            </div>\n          ")),t.infoWindow.open(t.map,a)})}),this.map.panTo(this.bounds.getCenter())},center:function(){this.map.setCenter(this.center),this.marker=new google.maps.Marker({position:this.center,map:this.map,animation:google.maps.Animation.DROP})}}}),O=k,E=Object(r["a"])(O,w,x,!1,null,null,null),$=E.exports,P={name:"PlacesIndex",data:function(){return{places:[]}},mounted:function(){var t=this;y.a.get("api/places").then(function(e){return t.places=e.data})},components:{GoogleMap:$}},T=P,j=(a("R+BK"),Object(r["a"])(T,g,C,!1,null,"79b177b2",null)),B=j.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),a("div",{staticClass:"columns is-mulitline"},[a("div",{staticClass:"column is-one-third"}),a("div",{staticClass:"column is-one-third"},[a("form",{on:{submit:function(e){e.preventDefault(),t.handleSubmit()}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Book")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.place.book,expression:"place.book"}],staticClass:"input",attrs:{type:"text",name:"book",placeholder:"book title"},domProps:{value:t.place.book},on:{input:function(e){e.target.composing||t.$set(t.place,"book",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Place")]),a("div",{staticClass:"control"},[a("Autocomplete",{attrs:{name:"address","handle-place-change":t.handlePlaceChange}})],1)]),t._m(2)])]),a("div",{staticClass:"column is-one-third"})])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fail"},[a("p",[t._v("sorry, something went wrong with your submission... please try again!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-mulitline"},[a("div",{staticClass:"column is-one-third"}),a("div",{staticClass:"column is-one-third has-text-centered"},[a("div",{staticClass:"fail"},[a("p",[t._v("sorry, something went wrong with your submission... please try again!")])]),a("h1",{staticClass:"subtitleHome has-text-black"},[t._v("Add a Literary Place")])]),a("div",{staticClass:"column is-one-third"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("button",{staticClass:"button addButton is-dark"},[t._v("Submit")])])}],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("input",{ref:"autocomplete",staticClass:"input",attrs:{placeholder:"place name"}})])},L=[],M={name:"Autocomplete",props:["handlePlaceChange"],mounted:function(){var t=this;this.autocomplete=new google.maps.places.Autocomplete(this.$refs.autocomplete,{types:["geocode"],componentRestrictions:{country:"uk"}}),this.autocomplete.addListener("place_changed",function(){var e=t.autocomplete.getPlace();t.handlePlaceChange(e)})}},D=M,H=(a("0BI3"),Object(r["a"])(D,I,L,!1,null,null,null)),N=H.exports,K={name:"PlacesNew",data:function(){return{place:{}}},methods:{handleSubmit:function(){var t=this;y.a.post("/api/places",this.place).then(function(){return t.$router.push("/places")}).catch(function(){return document.getElementsByClassName("fail")[0].style.display="block"})},handlePlaceChange:function(t){var e=t.name,a=t.formatted_address,n=t.geometry.location,s=t.photos;this.place.name=e,this.place.address=a,this.place.location=n.toJSON(),this.place.image=s?s[0].getUrl({maxWidth:1e3,maxHeight:1e3}):"https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2015/04/London-skyline_CS.jpg"}},components:{Autocomplete:N}},R=K,W=(a("sxZt"),Object(r["a"])(R,S,A,!1,null,null,null)),G=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("google-map",{attrs:{center:t.place.location}}),a("div",{staticClass:"columns show-box"},[a("div",{staticClass:"column"},[a("h1",{staticClass:"title is-2"},[t._v(t._s(t.place.name))]),a("h2",{staticClass:"subtitle is-5"},[t._v(t._s(t.place.address))]),a("div",{staticClass:"content"},[a("p",[t._v(t._s(this.description))])])]),a("div",{staticClass:"column"},[a("img",{staticClass:"imageshow",attrs:{src:t.place.image,alt:t.place.name}})])]),a("div",{staticClass:"literary"},[a("h3",{staticClass:"booky title is-3"},[t._v(t._s(t.place.book))]),a("p",{staticClass:"byline"}),a("div",{staticClass:"synopsis"},[a("p",[t._v(t._s(this.synopsis))])]),a("div",{staticClass:"extracted"})]),a("button",{staticClass:"button is-danger",on:{click:t.handleDelete}},[t._v("Delete")])],1)])},U=[],Z={name:"PlacesShow",data:function(){return{place:{},extract:{},synopsis:{},description:{}}},computed:{editLink:function(){return"/places/".concat(this.$route.params.id,"/edit")}},mounted:function(){var t=this;y.a.get("/api/places/".concat(this.$route.params.id)).then(function(e){t.place=e.data;var a=t.place.name,n=t.place.book;t.handleDescription(a),t.handleExtract(n),t.handleSynopsis(n)})},methods:{handleDelete:function(){var t=this;y.a.delete("/api/places/".concat(this.$route.params.id)).then(function(){return t.$router.push("/places")})},handleDescription:function(t){var e=this;y.a.get("https://en.wikipedia.org/api/rest_v1/page/summary/".concat(t.toLowerCase())).then(function(t){e.description=t.data.extract})},handleExtract:function(t){var e=this;y.a.get("https://extracts.panmacmillan.com/getextracts?titlecontains=".concat(t.toLowerCase())).then(function(t){e.extract=t.data,document.getElementsByClassName("extracted")[0].innerHTML=e.extract.Extracts[0].extractHtml,document.getElementsByClassName("byline")[0].innerHTML="by ".concat(e.extract.Extracts[0].author)}).catch(function(t){return console.log(t)})},handleSynopsis:function(t){var e=this;y.a.get("https://en.wikipedia.org/api/rest_v1/page/summary/".concat(t.toLowerCase())).then(function(t){e.synopsis=t.data.extract})}},components:{GoogleMap:$}},z=Z,Q=(a("GwAi"),Object(r["a"])(z,J,U,!1,null,"054c61a8",null)),V=Q.exports;n["a"].use(p["a"]);var F=[{path:"/",component:b},{path:"/places",component:B},{path:"/places/new",component:G},{path:"/places/:id",component:V}],Y=new p["a"]({routes:F});new n["a"]({render:function(t){return t(u)},router:Y}).$mount("#app")},axuU:function(t,e,a){},bxp0:function(t,e,a){"use strict";var n=a("TkQ9"),s=a.n(n);s.a},eKdF:function(t,e,a){},nujO:function(t,e,a){},sxZt:function(t,e,a){"use strict";var n=a("JZ20"),s=a.n(n);s.a}});
//# sourceMappingURL=app.c06f6d84.js.map