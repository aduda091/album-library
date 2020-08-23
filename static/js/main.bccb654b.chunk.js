(this["webpackJsonpbornfight-album-frontend"]=this["webpackJsonpbornfight-album-frontend"]||[]).push([[0],{104:function(e,a,t){e.exports=t(171)},170:function(e,a,t){},171:function(e,a,t){"use strict";t.r(a);t(105),t(119),t(121),t(123),t(133),t(134),t(139),t(141);var n=t(0),r=t.n(n),l=t(95),c=t.n(l),i=t(14),o=t(1),m=Object(n.createContext)(),u=t(96),s=t.n(u);var b=function(){var e=Object(n.useContext)(m),a=e.searchTerm,t=e.setSearchTerm;return r.a.createElement("div",{className:s.a.searchContainer},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){return t(e.target.value)},value:a})))},f=t(35),d=t.n(f);var _=function(e){return r.a.createElement("div",{className:d.a.header},r.a.createElement("div",{className:d.a.innerContainer},r.a.createElement("h1",{className:d.a.pageTitle},r.a.createElement(i.b,{to:"/",title:"Home"},e.title)),e.hasSearch?r.a.createElement(b,{onSearchChange:e.onSearchChange}):null))},v=t(5),E=t.n(v);var h=function(e){var a=Object(n.useContext)(m).toggleFavorite,t=e.favorite?r.a.createElement("button",{className:E.a.removeFavorite,onClick:function(){return a(e.id)}},"Remove favorite"):r.a.createElement("button",{className:E.a.addFavorite,onClick:function(){return a(e.id)}},"Mark as favorite"),l=[E.a.albumCoverContainer];return e.favorite&&l.push(E.a.hasStar),r.a.createElement("div",{className:E.a.albumItem},r.a.createElement("div",{className:E.a.albumMainInfo},r.a.createElement("div",{className:l.join(" ")},r.a.createElement("img",{src:e.imageUrl,alt:"".concat(e.title," album cover."),className:E.a.albumCover})),r.a.createElement("div",{className:E.a.nameTitleContainer},r.a.createElement("div",{className:E.a.albumTitle},e.title),r.a.createElement(i.b,{to:"".concat("/artist","/").concat(e.artistId),title:"View all albums from ".concat(e.artistName),className:E.a.albumArtist},e.artistName))),r.a.createElement("div",{className:E.a.yearInfo},r.a.createElement("span",{className:E.a.yearLabel},"Released: "),r.a.createElement("span",{className:E.a.yearValue},new Date(e.releaseDate).getFullYear())),r.a.createElement("div",{className:E.a.price},e.price),r.a.createElement("div",{className:E.a.favoriteContainer},t))},p=t(98),g=t.n(p);var C=function(e){return r.a.createElement("div",{className:g.a.albumContainer},e.albums.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e,{artistName:e.artist.title}))})))},I=t(99),N=t.n(I);var A=function(){return r.a.createElement("div",{class:N.a.loader},"Loading...")},S=t(55),T=t.n(S);var O=function(){var e=Object(o.f)().search,a=Object(n.useContext)(m),t=a.albums,l=a.searchTerm,c=a.fetchAlbums,i=a.loading;return Object(n.useEffect)((function(){c(e)}),[l]),r.a.createElement("div",null,r.a.createElement(_,{title:"Album list",hasSearch:!0}),i?r.a.createElement(A,null):t.length?r.a.createElement(C,{albums:t}):r.a.createElement("div",{className:T.a.noResults},"No results found for"," ",r.a.createElement("span",{className:T.a.searchTerm},l)))};var j=function(){var e=Object(o.g)().artistId,a=Object(n.useContext)(m),t=a.albums,l=a.fetchAlbums,c=a.loading;Object(n.useEffect)((function(){0===t.length&&l()}),[]);var i=t.filter((function(a){return a.artistId===Number(e)}));return function(){if(c)return r.a.createElement(A,null);if(i.length){var a=i[0].artist.title;return r.a.createElement("div",null,r.a.createElement(_,{title:a}),r.a.createElement(C,{albums:i}))}return r.a.createElement("div",null,r.a.createElement(_,{title:"Unknown artist"}),r.a.createElement("div",{className:"no-results"},"No results found for artist with ID of"," ",r.a.createElement("strong",null,e)))}()};var y=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/artist/:artistId",component:j}),r.a.createElement(o.a,{path:"/",component:O})))},x=t(102),L=t(56),R=t.n(L),M=t(100),U=t(103),k=t(20),w=function(e,a){switch(a.type){case"SET_ALBUMS":return Object(k.a)(Object(k.a)({},e),{},{albums:a.payload,loading:!1});case"SET_LOADING":return Object(k.a)(Object(k.a)({},e),{},{loading:!0});case"SET_SEARCH_TERM":return Object(k.a)(Object(k.a)({},e),{},{searchTerm:a.payload});default:return e}},F=t(101),H={baseURL:"https://albums-mock-backend.glitch.me"},D=t.n(F).a.create({baseURL:H.baseURL}),B=function(e,a){var t=new URLSearchParams(e),n=parseInt(t.get("limit"))||10,r=a.length?"&q=".concat(a):"";return"".concat("/albums?_expand=artist","&_limit=").concat(n).concat(r)},G=function(e){var a=Object(n.useReducer)(w,{albums:[],searchTerm:"",loading:!1}),t=Object(U.a)(a,2),l=t[0],c=t[1],i=function(){var e=Object(M.a)(R.a.mark((function e(a){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),t=B(a,l.searchTerm),e.next=4,D.get(t);case 4:n=e.sent,c({type:"SET_ALBUMS",payload:n.data});case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),o=function(){return c({type:"SET_LOADING"})};return r.a.createElement(m.Provider,{value:{albums:l.albums,searchTerm:l.searchTerm,loading:l.loading,fetchAlbums:i,setSearchTerm:function(e){return c({type:"SET_SEARCH_TERM",payload:e})},toggleFavorite:function(e){var a=Object(x.a)(l.albums),t=l.albums.findIndex((function(a){return a.id===e})),n=!l.albums[t].favorite,r="".concat("/albums","/").concat(e);D.patch(r,{favorite:n}).then((function(e){a[t].favorite=e.data.favorite,c({type:"SET_ALBUMS",payload:a})})).catch((function(e){console.error(e)}))}}},e.children)};t(170);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null,r.a.createElement(i.a,null,r.a.createElement(y,null)))),document.getElementById("root"))},35:function(e,a,t){e.exports={header:"Header_header__1b8vH",innerContainer:"Header_innerContainer__2MUd_",pageTitle:"Header_pageTitle__2OpDX"}},5:function(e,a,t){e.exports={albumItem:"AlbumItem_albumItem__1bIab",albumMainInfo:"AlbumItem_albumMainInfo__3V5zC",albumCoverContainer:"AlbumItem_albumCoverContainer__-Qfn6",hasStar:"AlbumItem_hasStar__14kIj",albumCover:"AlbumItem_albumCover__2dW2C",albumTitle:"AlbumItem_albumTitle__Ezlpl",albumArtist:"AlbumItem_albumArtist__IwOaE",yearInfo:"AlbumItem_yearInfo__3fxGh",yearLabel:"AlbumItem_yearLabel__2tgts",price:"AlbumItem_price__2hGyi",favoriteContainer:"AlbumItem_favoriteContainer__zn3XP",addFavorite:"AlbumItem_addFavorite__11Ep7",removeFavorite:"AlbumItem_removeFavorite__1Y6dG"}},55:function(e,a,t){e.exports={noResults:"Home_noResults__PUYz5",searchTerm:"Home_searchTerm__MJFBn"}},96:function(e,a,t){e.exports={searchContainer:"Search_searchContainer__2NAis"}},98:function(e,a,t){e.exports={albumContainer:"AlbumContainer_albumContainer__1W6Nj"}},99:function(e,a,t){e.exports={loader:"LoadingSpinner_loader__2C9Jc",load8:"LoadingSpinner_load8__eqU78"}}},[[104,1,2]]]);
//# sourceMappingURL=main.bccb654b.chunk.js.map