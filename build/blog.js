/*! License information can be found in https://cdn.jsdelivr.net/npm/@hodgef/press-theme@3.0.25/build/blog.js.LICENSE.txt */
var PRSSComponent=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=11)}([function(e,t){e.exports=React},function(e,t){e.exports=PRSS},function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=o(e,l(a)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),o=a(2),i=a.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,a){var n;return n=function(e,t){if("object"!=c(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==c(n)?n:String(n))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.a=function(e){var t=e.name,a=e.renderItem,o=e.renderItemLabel,c=e.ulClassName,m=void 0===c?"":c,s=e.mode,d=e.style,v=void 0===d?{}:d,f=e.prependedComponent,p=void 0===f?null:f,g=l.getProp("site.menus.".concat(t));if(!g)return null;var y,E=(y=[],g.forEach((function e(t){t&&(y.push(t),t.children&&t.children.forEach(e))})),y),b=function e(t){return("prev-next"===s?h:a||S)(t,e)},h=function(e,t){var a=E.findIndex((function(e){return e.key===l.getProp("item").uuid})),n=E[a-1]?E[a-1]:null,c=E[a+1]?E[a+1]:null,u=!!n&&n.key===e.key,m=!!c&&c.key===e.key;if(!u&&!m)return null;var s=l.getItem(e.key);return r.a.createElement("li",{className:i()({"menu-item-prev":u,"menu-item-next":m}),title:e.title||(null==s?void 0:s.title)},o?o(s):r.a.createElement("a",{href:null==s?void 0:s.url},r.a.createElement("span",{className:"menu-item-title"},u?"Previous":"Next"),r.a.createElement("span",{className:"menu-item-label"},e.title||(null==s?void 0:s.title))))},N=function(e){var t=l.getProp("item").uuid;return e.key===t||l.hasItem(t,e)},S=function(e,t){var a=l.getItem(e.key);return r.a.createElement("li",{title:e.title||(null==a?void 0:a.title),className:i()({active:e.key===l.getProp("item").uuid,expanded:N(e)}),key:null==e?void 0:e.key},o?o(a):r.a.createElement("a",{href:null==a?void 0:a.url},e.title||(null==a?void 0:a.title)),e.children&&!!e.children.length&&r.a.createElement("ul",null,e.children.map(t)))},A="prev-next"===s?E.map(b):g.map(b);return A.filter((function(e){return!!e})).length?r.a.createElement(n.Fragment,null,p,r.a.createElement("ul",{className:i()("page-menu",m,u({},"mode-".concat(s),s)),style:v},A)):null}},function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1);t.a=function(){var e=l.getProp("vars"),t=e.footerLeft,a=e.footerRight,n=l.getProp("site").title;return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12 col-md-6"},t?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):r.a.createElement("span",null,"© ",n)),r.a.createElement("div",{className:"col col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end"},a?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):r.a.createElement("a",{href:"https://prss.io",className:"d-flex align-items-center footer-shoutout",target:"_blank",rel:"noopener",title:"Powered by PRSS Site Creator"},r.a.createElement("img",{className:"prss-footer-image mr-1",src:"data:image/png;base64,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",width:15}),r.a.createElement("span",{className:"font-weight-bold prss-tag"},"PRSS Site Creator"))))))}},function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l),i=a(1),c=a(3);function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,o,i=[],c=!0,u=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=l.call(a)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return i}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t=e.onScrollCallback,a=e.onResizeCallback,l=i.getProp("vars").logoImageUrl,s=i.getProp("site"),d=s.title,v=(s.url,i.getProp("item").uuid),f=m(Object(n.useState)(0),2),p=f[0],g=f[1],y=m(Object(n.useState)(!1),2),E=y[0],b=y[1],h=m(Object(n.useState)(!1),2),N=h[0],S=h[1],A=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=function(e){var a=e.target.documentElement.scrollTop;t&&t(a),g(a),!E&&p>80&&(b(!0),S(!1)),!N&&E&&a<=20&&(b(!1),S(!0),A.current||(A.current=setTimeout((function(){S(!1),clearTimeout(A.current),A.current=null}),2e3)))},n=function(e){a&&a(e)};return window.addEventListener("scroll",e),window.addEventListener("resize",n),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",n)}}),[p]);return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:o()("header-nav",{scrolled:E,"sticky-unset":N,"sticky-top":E||N})},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark mx-2"},r.a.createElement("a",{className:"navbar-brand logo",href:i.getSiteUrl()},l?r.a.createElement("img",{src:l}):d),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},r.a.createElement(c.a,{name:"header",ulClassName:"navbar-nav",renderItem:function(e){var t=i.getItem(e.key),a=null!=t&&t.path?i.findInStructure(e.key):null,n=(null==a?void 0:a.children)||[],l=(null==e?void 0:e.children)||[],c=[].concat(u(n),u(l)),m=i.hasItem(v,c);return r.a.createElement("li",{className:o()("nav-item",{dropdown:l&&l.length,active:e.key===v||m})},r.a.createElement("a",{className:o()("nav-link",{"dropdown-toggle":l&&l.length}),href:null==t?void 0:t.url},e.title||(null==t?void 0:t.title)),l&&function(e){return r.a.createElement("div",{className:"dropdown-menu"},e.map((function(e){var t=i.getItem(e.key);return r.a.createElement("a",{className:"dropdown-item",href:null==t?void 0:t.url},null==t?void 0:t.title)})))}(l))}}))))))}},function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);t.a=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:o()("page",a)},t)}},function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);t.a=function(e){var t=e.children,a=e.imageUrl,n=void 0===a?"":a,l=e.containerChildClassName,i=void 0===l?"":l;return r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero-image",style:{backgroundImage:n?"url(".concat(n,")"):null}}),r.a.createElement("div",{className:"container mt-5 mt-sm-0"},r.a.createElement("div",{className:o()("row mx-2 justify-content-between",i)},r.a.createElement("div",{className:"col"},t))))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return!(!e||!e.trim().length)}},function(e,t,a){},function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),o=a(2),i=a.n(o);t.a=function(e){var t=e.name,a=l.getProp("vars")[t];return a?r.a.createElement("div",{className:i()("page-aside",t),dangerouslySetInnerHTML:{__html:a}}):null}},function(e,t,a){"use strict";a.r(t);a(9);var n=a(0),r=a.n(n),l=a(1),o=a(2),i=a.n(o),c=a(5),u=a(4),m=a(6),s=a(7),d=a(10),v=a(8);t.default=function(e){l.init(e),window.PRSS=l;var t=l.getProp("vars"),a=t.heroTitle,n=t.heroMessage,o=t.heroImageUrl,f=t.sidebarAsideHtml,p=t.blogPosts,g=t.currentPage,y=t.totalPages,E=e.rootPath,b=l.getProp("item"),h=b.content,N=b.title,S=l.getProp("sidebarHtml"),A=l.getItems("post",!0,p),P=1===g?E:"../".concat(E);return r.a.createElement(m.a,{className:"page-blog"},r.a.createElement(c.a,null),(a||N)&&r.a.createElement(s.a,{imageUrl:o,containerChildClassName:"mt-5"},r.a.createElement("h1",{className:"hero-title"},a||N),n&&r.a.createElement("div",{className:"hero-message mt-2"},n)),r.a.createElement("main",null,r.a.createElement("div",{className:"container main-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"content"},h&&h.trim().length&&r.a.createElement("section",{dangerouslySetInnerHTML:{__html:h}}),r.a.createElement("section",{className:"mb-3"},r.a.createElement("div",null,r.a.createElement(d.a,{name:"inlineAsideHtml"}),A.map((function(e){var t,a,n,o;return r.a.createElement("div",{className:"card d-flex flex-row"},r.a.createElement("a",{className:i()("card-img-left",{"card-has-img":!(null==e||null===(t=e.vars)||void 0===t||!t.featuredImageUrl)}),href:null==e?void 0:e.url},(null==e||null===(a=e.vars)||void 0===a?void 0:a.featuredImageUrl)&&r.a.createElement("img",{src:null==e||null===(n=e.vars)||void 0===n?void 0:n.featuredImageUrl,alt:null==e||null===(o=e.vars)||void 0===o?void 0:o.featuredImageAlt,loading:"lazy"})),r.a.createElement("div",{className:"card-body col"},(null==e?void 0:e.title)&&r.a.createElement("a",{className:"card-title",href:null==e?void 0:e.url},null==e?void 0:e.title),(null==e?void 0:e.content)&&r.a.createElement("p",{className:"card-text"},null==e?void 0:e.content),(null==e?void 0:e.createdAt)&&r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted",title:l.formattedDate(null==e?void 0:e.createdAt)},"Posted ",l.formattedDate(null==e?void 0:e.createdAt)))))})))))),Object(v.a)(S||f)&&r.a.createElement("div",{className:"col-3 page-sidebar"},r.a.createElement("div",{className:"page-sidebar-content",dangerouslySetInnerHTML:{__html:S}}),r.a.createElement(d.a,{name:"sidebarAsideHtml"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("nav",{"aria-label":"Page navigation"},r.a.createElement("ul",{className:"pagination flex justify-content-center mt-2 mb-5"},g>1&&r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:"".concat(P,"blog/").concat(g-1==1?"":g-1)},"Previous")),Array.from({length:y}).map((function(e,t){var a=t+1,n=g===a;return r.a.createElement("li",{key:t,className:"page-item"},r.a.createElement("a",{href:"".concat(1===a?"".concat(P,"blog/"):"".concat(P,"blog/").concat(a,"/")),className:i()("page-link",{active:n})},a))})),g<y&&r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:"".concat(P,"blog/").concat(g+1)},"Next")))))))),r.a.createElement(u.a,null))}}]);
//# sourceMappingURL=blog.js.map