(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(n,t,e){"use strict";e.r(t);var r=e(22),i=e(12),a=e(18),c=e(92),u=e(93),o=e(43),l=e(0),d=e.n(l),f=e(26),s=e(94),m=e(7),p=e(8);function b(){var n=Object(m.a)(["\n  max-width: 60%;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1400px) {\n    max-width: 75%;\n  }\n\n  @media screen and (max-width: 800px) {\n    max-width: unset;\n    margin: unset;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(m.a)(["\n  font-size: 28px;\n  margin: 0 auto 25px;\n  cursor: pointer;\n\n  &:hover {\n    color: grey;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]);return g=function(){return n},n}var h=p.c.div(g()),x=p.c.h1(v()),j=p.c.div(b()),O=Object(f.f)(function(n){var t=n.title,e=n.items,r=n.history,i=n.match,a=n.routeName;return d.a.createElement(h,null,d.a.createElement(x,{onClick:function(){return r.push("".concat(i.path,"/").concat(a))}},t.toUpperCase()),d.a.createElement(j,null,e.filter(function(n,t){return t<4}).map(function(n){return d.a.createElement(s.a,{key:n.id,item:n})})))});function w(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return w=function(){return n},n}var y=p.c.div(w()),E=Object(i.b)({collections:c.b}),k=Object(r.b)(E)(function(n){var t=n.collections;return d.a.createElement(y,null,t.map(function(n){var t=n.id,e=Object(o.a)(n,["id"]);return d.a.createElement(O,Object.assign({key:t},e))}))}),U=Object(i.b)({isLoading:c.c}),z=Object(a.d)(Object(r.b)(U),u.a)(k);t.default=z},92:function(n,t,e){"use strict";e.d(t,"b",function(){return c}),e.d(t,"a",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"d",function(){return l});var r=e(12),i=function(n){return n.shop},a=Object(r.a)([i],function(n){return n.collections}),c=Object(r.a)([a],function(n){return n?Object.keys(n).map(function(t){return n[t]}):[]}),u=function(n){return Object(r.a)([a],function(t){return t?t[n]:null})},o=Object(r.a)([i],function(n){return n.isFetching}),l=Object(r.a)([i],function(n){return!!n.collections})},93:function(n,t,e){"use strict";var r=e(43),i=e(0),a=e.n(i),c=e(45);t.a=function(n){return function(t){var e=t.isLoading,i=Object(r.a)(t,["isLoading"]);return e?a.a.createElement(c.a,null):a.a.createElement(n,i)}}},94:function(n,t,e){"use strict";var r=e(0),i=e.n(r),a=e(22),c=e(28),u=e(7),o=e(8),l=e(44);function d(){var n=Object(u.a)(["\n  width: 10%;\n  text-align: right;\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return f=function(){return n},n}function s(){var n=Object(u.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return s=function(){return n},n}function m(){var n=Object(u.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  padding: 0 10px;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    padding: unset;\n\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var v=o.c.div(b()),g=Object(o.c)(l.a)(p()),h=o.c.div(m(),function(n){var t=n.imageUrl;return"url(".concat(t,")")}),x=o.c.div(s()),j=o.c.span(f()),O=o.c.span(d());t.a=Object(a.b)(null,function(n){return{addItem:function(t){return n(Object(c.a)(t))}}})(function(n){var t=n.item,e=n.addItem,r=t.name,a=t.price,c=t.imageUrl;return i.a.createElement(v,null,i.a.createElement(h,{className:"image",imageUrl:c}),i.a.createElement(x,null,i.a.createElement(j,null,r),i.a.createElement(O,null,a)),i.a.createElement(g,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))})}}]);
//# sourceMappingURL=4.d5c76cb1.chunk.js.map