(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(16),o=n.n(c),a=n(10),s=n(11),u=n(14),l=n(13),d=n(12),h=n(2),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("iframe",{width:"560",height:"315",src:this.props.src,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}}]),n}(i.a.Component),p=n(76),b=(i.a.Component,n(39)),m=(i.a.Component,n(77)),f=n(74),O=n(75),g=(n(51),i.a.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={error:null,isLoaded:!1,items:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.drinks})}),(function(t){e.setState({isLoaded:!0,error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.items;return t?Object(h.jsx)("p",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}):n?Object(h.jsx)("ul",{children:r.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("img",{width:"100px",height:"100px",src:e.strDrinkThumb}),Object(h.jsx)("li",{children:e.strDrink},e.name)]})}))}):Object(h.jsx)("p",{children:"Loading"})}}]),n}(i.a.Component));var v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()}},[[60,1,2]]]);
//# sourceMappingURL=main.ba5c796b.chunk.js.map