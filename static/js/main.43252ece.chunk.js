(this["webpackJsonpbornfight-album-frontend"]=this["webpackJsonpbornfight-album-frontend"]||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);a(99),a(113),a(115),a(117),a(127),a(128),a(133),a(135);var n=a(0),r=a.n(n),c=a(92),l=a.n(c),i=a(13),s=a(1),o=Object(n.createContext)();a(142);var u=function(){var e=Object(n.useContext)(o),t=e.searchTerm,a=e.setSearchTerm;return r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t})))};a(143);var m=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"inner-container"},r.a.createElement("h1",{className:"page-title"},r.a.createElement(i.b,{to:"/",title:"Home"},e.title)),e.hasSearch?r.a.createElement(u,{onSearchChange:e.onSearchChange}):null))};a(148),a(149);var f=function(e){var t=Object(n.useContext)(o).toggleFavorite,a=e.favorite?r.a.createElement("button",{className:"remove-favorite",onClick:function(){return t(e.id)}},"Remove favorite"):r.a.createElement("button",{className:"add-favorite",onClick:function(){return t(e.id)}},"Mark as favorite");return r.a.createElement("div",{className:"album-item"},r.a.createElement("div",{className:"album-main-info"},r.a.createElement("div",{className:"album-cover-container".concat(e.favorite?" has-star":"")},r.a.createElement("img",{src:e.imageUrl,alt:"".concat(e.title," album cover."),className:"album-cover"})),r.a.createElement("div",{className:"name-title-container"},r.a.createElement("div",{className:"album-title"},e.title),r.a.createElement(i.b,{to:"".concat("/artist","/").concat(e.artistId),title:"View all albums from ".concat(e.artistName),className:"album-artist"},e.artistName))),r.a.createElement("div",{className:"year-info"},r.a.createElement("span",{className:"year-label"},"Released: "),r.a.createElement("span",{className:"year-value"},new Date(e.releaseDate).getFullYear())),r.a.createElement("div",{className:"price"},e.price),r.a.createElement("div",{className:"favorite-container"},a))};var b=function(e){return r.a.createElement("div",{className:"album-container"},e.albums.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e,{artistName:e.artist.title}))})))};a(150);var d=function(){return r.a.createElement("div",{class:"loader"},"Loading...")};a(151);var v=function(){var e=Object(s.f)().search,t=Object(n.useContext)(o),a=t.albums,c=t.searchTerm,l=t.fetchAlbums,i=t.loading;return Object(n.useEffect)((function(){l(e)}),[c]),r.a.createElement("div",null,r.a.createElement(m,{title:"Album list",hasSearch:!0}),i?r.a.createElement(d,null):a.length?r.a.createElement(b,{albums:a}):r.a.createElement("div",{className:"no-results"},"No results found for"," ",r.a.createElement("span",{className:"search-term"},c)))};var E=function(){var e=Object(s.g)().artistId,t=Object(n.useContext)(o),a=t.albums,c=t.fetchAlbums,l=t.loading;Object(n.useEffect)((function(){0===a.length&&c()}),[]);var i=a.filter((function(t){return t.artistId===Number(e)}));return function(){if(l)return r.a.createElement(d,null);if(i.length){var t=i[0].artist.title;return r.a.createElement("div",null,r.a.createElement(m,{title:t}),r.a.createElement(b,{albums:i}))}return r.a.createElement("div",null,r.a.createElement(m,{title:"Unknown artist"}),r.a.createElement("div",{className:"no-results"},"No results found for artist with ID of"," ",r.a.createElement("strong",null,e)))}()};var h=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/artist/:artistId",component:E}),r.a.createElement(s.a,{path:"/",component:v})))},p=a(96),g=a(53),N=a.n(g),O=a(94),S=a(97),j=a(19),T=function(e,t){switch(t.type){case"SET_ALBUMS":return Object(j.a)(Object(j.a)({},e),{},{albums:t.payload,loading:!1});case"SET_LOADING":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"SET_SEARCH_TERM":return Object(j.a)(Object(j.a)({},e),{},{searchTerm:t.payload});default:return e}},y=a(95),C={baseURL:"https://albums-mock-backend.glitch.me"},x=a.n(y).a.create({baseURL:C.baseURL}),A=function(e,t){var a=new URLSearchParams(e),n=parseInt(a.get("limit"))||10,r=t.length?"&q=".concat(t):"";return"".concat("/albums?_expand=artist","&_limit=").concat(n).concat(r)},R=function(e){var t=Object(n.useReducer)(T,{albums:[],searchTerm:"",loading:!1}),a=Object(S.a)(t,2),c=a[0],l=a[1],i=function(){var e=Object(O.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(),a=A(t,c.searchTerm),e.next=4,x.get(a);case 4:n=e.sent,l({type:"SET_ALBUMS",payload:n.data});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){return l({type:"SET_LOADING"})};return r.a.createElement(o.Provider,{value:{albums:c.albums,searchTerm:c.searchTerm,loading:c.loading,fetchAlbums:i,setSearchTerm:function(e){return l({type:"SET_SEARCH_TERM",payload:e})},toggleFavorite:function(e){var t=Object(p.a)(c.albums),a=c.albums.findIndex((function(t){return t.id===e})),n=!c.albums[a].favorite,r="".concat("/albums","/").concat(e);x.patch(r,{favorite:n}).then((function(e){t[a].favorite=e.data.favorite,l({type:"SET_ALBUMS",payload:t})})).catch((function(e){console.error(e)}))}}},e.children)};a(170);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null,r.a.createElement(i.a,null,r.a.createElement(h,null)))),document.getElementById("root"))},98:function(e,t,a){e.exports=a(171)}},[[98,1,2]]]);
//# sourceMappingURL=main.43252ece.chunk.js.map