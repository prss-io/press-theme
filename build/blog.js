/*! License information can be found in https://cdn.jsdelivr.net/npm/@hodgef/press-theme@3.0.15/build/blog.js.LICENSE.txt */
var PRSSComponent=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=React},function(e,t){e.exports=PRSS},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,l(n)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(1),o=n(2),i=n.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){var r;return r=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==c(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.name,n=e.renderItem,o=e.renderItemLabel,c=e.ulClassName,m=void 0===c?"":c,s=e.mode,d=e.style,v=void 0===d?{}:d,f=e.prependedComponent,p=void 0===f?null:f,g=l.getProp("site.menus.".concat(t));if(!g)return null;var y,b=(y=[],g.forEach((function e(t){t&&(y.push(t),t.children&&t.children.forEach(e))})),y),E=function e(t){return("prev-next"===s?h:n||S)(t,e)},h=function(e,t){var n=b.findIndex((function(e){return e.key===l.getProp("item").uuid})),r=b[n-1]?b[n-1]:null,c=b[n+1]?b[n+1]:null,u=!!r&&r.key===e.key,m=!!c&&c.key===e.key;if(!u&&!m)return null;var s=l.getItem(e.key);return a.a.createElement("li",{className:i()({"menu-item-prev":u,"menu-item-next":m}),title:e.title||(null==s?void 0:s.title)},o?o(s):a.a.createElement("a",{href:null==s?void 0:s.url},a.a.createElement("span",{className:"menu-item-title"},u?"Previous":"Next"),a.a.createElement("span",{className:"menu-item-label"},e.title||(null==s?void 0:s.title))))},N=function(e){var t=l.getProp("item").uuid;return e.key===t||l.hasItem(t,e)},S=function(e,t){var n=l.getItem(e.key);return a.a.createElement("li",{title:e.title||(null==n?void 0:n.title),className:i()({active:e.key===l.getProp("item").uuid,expanded:N(e)})},o?o(n):a.a.createElement("a",{href:null==n?void 0:n.url},e.title||(null==n?void 0:n.title)),e.children&&!!e.children.length&&a.a.createElement("ul",null,e.children.map(t)))},A="prev-next"===s?b.map(E):g.map(E);return A.filter((function(e){return!!e})).length?a.a.createElement(r.Fragment,null,p,a.a.createElement("ul",{className:i()("page-menu",m,u({},"mode-".concat(s),s)),style:v},A)):null}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(1);t.a=function(){var e=l.getProp("vars"),t=e.footerLeft,n=e.footerRight,r=l.getProp("site").title;return a.a.createElement("footer",{className:"page-footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col-12 col-md-6"},t?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):a.a.createElement("span",null,"© ",r)),a.a.createElement("div",{className:"col col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end"},n?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}):a.a.createElement("a",{href:"https://prss.io",className:"d-flex align-items-center footer-shoutout",target:"_blank",rel:"noopener",title:"Powered by PRSS Site Creator"},a.a.createElement("img",{className:"prss-footer-image mr-1",src:"data:image/png;base64,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",width:15}),a.a.createElement("span",{className:"font-weight-bold prss-tag"},"PRSS Site Creator"))))))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(2),o=n.n(l),i=n(1),c=n(3);function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.onScrollCallback,n=e.onResizeCallback,l=i.getProp("vars").logoImageUrl,s=i.getProp("site"),d=s.title,v=(s.url,i.getProp("item").uuid),f=m(Object(r.useState)(0),2),p=f[0],g=f[1],y=m(Object(r.useState)(!1),2),b=y[0],E=y[1],h=m(Object(r.useState)(!1),2),N=h[0],S=h[1],A=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=function(e){var n=e.target.documentElement.scrollTop;t&&t(n),g(n),!b&&p>80&&(E(!0),S(!1)),!N&&b&&n<=20&&(E(!1),S(!0),A.current||(A.current=setTimeout((function(){S(!1),clearTimeout(A.current),A.current=null}),2e3)))},r=function(e){n&&n(e)};return window.addEventListener("scroll",e),window.addEventListener("resize",r),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",r)}}),[p]);return a.a.createElement("header",{className:"page-header"},a.a.createElement("div",{className:o()("header-nav",{scrolled:b,"sticky-unset":N,"sticky-top":b||N})},a.a.createElement("div",{className:"container"},a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark mx-2"},a.a.createElement("a",{className:"navbar-brand logo",href:i.getSiteUrl()},l?a.a.createElement("img",{src:l}):d),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},a.a.createElement(c.a,{name:"header",ulClassName:"navbar-nav",renderItem:function(e){var t=i.getItem(e.key),n=null!=t&&t.path?i.findInStructure(e.key):null,r=(null==n?void 0:n.children)||[],l=(null==e?void 0:e.children)||[],c=[].concat(u(r),u(l)),m=i.hasItem(v,c);return a.a.createElement("li",{className:o()("nav-item",{dropdown:l&&l.length,active:e.key===v||m})},a.a.createElement("a",{className:o()("nav-link",{"dropdown-toggle":l&&l.length}),href:null==t?void 0:t.url},e.title||(null==t?void 0:t.title)),l&&function(e){return a.a.createElement("div",{className:"dropdown-menu"},e.map((function(e){var t=i.getItem(e.key);return a.a.createElement("a",{className:"dropdown-item",href:null==t?void 0:t.url},null==t?void 0:t.title)})))}(l))}}))))))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(2),o=n.n(l);t.a=function(e){var t=e.children,n=e.className;return a.a.createElement("div",{className:o()("page",n)},t)}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(2),o=n.n(l);t.a=function(e){var t=e.children,n=e.imageUrl,r=void 0===n?"":n,l=e.containerChildClassName,i=void 0===l?"":l;return a.a.createElement("div",{className:"hero"},a.a.createElement("div",{className:"hero-image",style:{backgroundImage:r?"url(".concat(r,")"):null}}),a.a.createElement("div",{className:"container mt-5 mt-sm-0"},a.a.createElement("div",{className:o()("row mx-2 justify-content-between",i)},a.a.createElement("div",{className:"col"},t))))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return!(!e||!e.trim().length)}},function(e,t,n){},function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(1),o=n(2),i=n.n(o);t.a=function(e){var t=e.name,n=l.getProp("vars")[t];return n?a.a.createElement("div",{className:i()("page-aside",t),dangerouslySetInnerHTML:{__html:n}}):null}},function(e,t,n){"use strict";n.r(t);n(9);var r=n(0),a=n.n(r),l=n(1),o=n(2),i=n.n(o),c=n(5),u=n(4),m=n(6),s=n(7),d=n(10),v=n(8);t.default=function(e){l.init(e),window.PRSS=l;var t=l.getProp("vars"),n=t.heroTitle,r=t.heroMessage,o=t.heroImageUrl,f=t.sidebarAsideHtml,p=(l.getJsonProp("vars.links"),l.getProp("item")),g=p.content,y=p.title,b=l.getProp("sidebarHtml"),E=l.getItems("post",!0);return a.a.createElement(m.a,{className:"page-blog"},a.a.createElement(c.a,null),(n||y)&&a.a.createElement(s.a,{imageUrl:o,containerChildClassName:"mt-5"},a.a.createElement("h1",{className:"hero-title"},n||y),r&&a.a.createElement("div",{className:"hero-message mt-2"},r)),a.a.createElement("main",null,a.a.createElement("div",{className:"container main-container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"content"},g&&g.trim().length&&a.a.createElement("section",{dangerouslySetInnerHTML:{__html:g}}),a.a.createElement("section",{className:"mb-3"},a.a.createElement("div",null,a.a.createElement(d.a,{name:"inlineAsideHtml"}),E.map((function(e){var t,n,r,o;return a.a.createElement("div",{className:"card d-flex flex-row"},a.a.createElement("a",{className:i()("card-img-left",{"card-has-img":!(null==e||null===(t=e.vars)||void 0===t||!t.featuredImageUrl)}),href:null==e?void 0:e.url},(null==e||null===(n=e.vars)||void 0===n?void 0:n.featuredImageUrl)&&a.a.createElement("img",{src:null==e||null===(r=e.vars)||void 0===r?void 0:r.featuredImageUrl,alt:null==e||null===(o=e.vars)||void 0===o?void 0:o.featuredImageAlt,loading:"lazy"})),a.a.createElement("div",{className:"card-body col"},(null==e?void 0:e.title)&&a.a.createElement("a",{className:"card-title",href:null==e?void 0:e.url},null==e?void 0:e.title),(null==e?void 0:e.content)&&a.a.createElement("p",{className:"card-text"},null==e?void 0:e.content),(null==e?void 0:e.createdAt)&&a.a.createElement("p",{className:"card-text"},a.a.createElement("small",{className:"text-muted",title:l.formattedDate(null==e?void 0:e.createdAt)},"Posted ",l.formattedDate(null==e?void 0:e.createdAt)))))})))))),Object(v.a)(b||f)&&a.a.createElement("div",{className:"col-3 page-sidebar"},a.a.createElement("div",{className:"page-sidebar-content",dangerouslySetInnerHTML:{__html:b}}),a.a.createElement(d.a,{name:"sidebarAsideHtml"}))))),a.a.createElement(u.a,null))}}]);
//# sourceMappingURL=blog.js.map