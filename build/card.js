/*! License information can be found in https://cdn.jsdelivr.net/npm/@hodgef/press-theme@3.0.11/build/card.js.LICENSE.txt */
var PRSSComponent=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=React},function(e,t,n){self,e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?n(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}e.r(t),e.d(t,{appendToBody:()=>k,appendToHead:()=>x,findInStructure:()=>B,formattedDate:()=>S,getAllProps:()=>y,getComponent:()=>I,getItem:()=>M,getItemBySlug:()=>T,getItemChildren:()=>D,getItemChildrenBySlug:()=>F,getItems:()=>C,getJsonProp:()=>d,getPathUrl:()=>h,getProp:()=>f,getRawPostItem:()=>A,getSiteUrl:()=>g,getStructurePaths:()=>E,hasItem:()=>Y,init:()=>m,objGet:()=>p,processPRSSLinks:()=>U,propExists:()=>v,removeTagsFromElem:()=>N,setContent:()=>j,shuffle:()=>R,stripShortcodes:()=>P,stripTags:()=>O,timeAgo:()=>b,truncateStr:()=>H,truncateString:()=>w,walkStructure:()=>L});var u=null,s=null,m=function(e){e&&(u=e),window.onload=function(){U()}},f=function(e){return u?p(e,u):void 0},d=function(e){var t;if(v(e))try{t=JSON.parse(f(e))}catch(t){console.error("Prop '".concat(e,"' could not be parsed."),t)}return t},v=function(e){return void 0!==f(e)},p=function(e,t){return e.split(".").reduce((function(e,t){return e?e[t]:""}),t)},y=function(){return u},g=function(){return"localhost"===location.hostname||"127.0.0.1"===location.hostname?location.origin:f("site.url")},h=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=g();return t&&t.length&&"/"!==t[t.length-1]&&(t+="/"),e&&e.length&&"/"!==e[e.length-1]&&(e+="/"),t+e},b=function(e){var t=function(e){for(var t=0,n=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60],["second",1]];t<n.length;t++){var r=i(n[t],2),a=r[0],o=r[1],l=Math.floor(e/o);if(1<=l)return{interval:l,epoch:a}}}(Math.floor((new Date-new Date(e))/1e3)),n=t.interval,r=t.epoch,a=1===n?"":"s";return"".concat(n," ").concat(r).concat(a," ago")},S=function(e){var t=new Date(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),r=new Intl.DateTimeFormat("en",{month:"short"}).format(t),a=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(a," ").concat(r,", ").concat(n)},E=function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];return t.forEach((function(t){var a=t.key,o="".concat(n,"/").concat(a);r.push(o),t.children&&e(t.children,o,r)})),r},A=function(e){return(PRSSItems||[]).find((function(t){return t.uuid===e}))},P=function(e){var t=e;return o(t.matchAll(/\[([a-zA-Z]+)=?([a-zA-Z0-9]+)?\](.+?)\[\/[a-zA-Z]+\]?/gi)).forEach((function(e){var n=i(e,1)[0];n&&(t=t.replace(n,""))})),t},w=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50,n=e.replace(/"/g,"").replace(/\s+/g," ").trim();return n?n.length<=t?n:"".concat(n.substring(0,t),"..."):null},N=function(e,t){return t.forEach((function(t){return e.querySelectorAll(t).forEach((function(e){return e.innerHTML=""}))}))},O=function(e){var t=P(e),n=(new DOMParser).parseFromString(t,"text/html");return N(n,["pre","h1","h2"]),n.body.textContent||""},j=function(e,t){var n,r=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],a=document.querySelector(e);if(!a&&r&&e.includes(".")&&2===e.split(".").length){var o=e.split("."),l=i(o,2),c=l[0],u=l[1];(a=document.createElement(c)).className=u,n=!0}a&&(a.innerHTML=t),n&&document.body.appendChild(a)},T=function(e){return C().find((function(t){return t.slug===e}))},I=function(e){return C().find((function(t){return"component"===t.template&&t.slug===e}))},M=function(e){return C().find((function(t){return t.uuid===e}))},x=function(e){return document.head.innerHTML+=e},k=function(e){return document.body.innerHTML+=e},C=function(e,t){if(!PRSSItems)return[];var n=f("site").structure,a=E(n),o=s||a.map((function(e){var t,n=e.split("/").map((function(e){return e?(t=A(e)).slug:""})).slice(2).join("/");return t?r({},t,{path:n,url:h(n)}):null}));!s&&o.length&&(s=o);var i=o;return e&&(i=i.filter((function(t){return t.template===e}))),t&&(i=i.sort((function(e,t){return t.createdAt-e.createdAt}))),i},L=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=o(e),a=function(e){var n=e.key,o=e.children,i=void 0===o?[]:o,l=A(n);return l?r({key:n},t?t(l):{},{children:i.map(a)}):e};return n.map((function(e){return a(e)}))},R=function(){for(var e,t,n=Math.floor,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],a=o(r),i=a.length;0!==i;)t=n(Math.random()*i),e=a[i-=1],a[i]=a[t],a[t]=e;return a},Y=function(e,t){return JSON.stringify(t).includes(e)},B=function(e){var t,n=f("site").structure,r=function(n){return n.key===e?(t=n,!0):!!n.children&&n.children.some(r)};return n.some(r),t},D=function(e){var t=B(e);return(t&&t.children?t.children:[]).map((function(e){return M(e.key)}))},F=function(e){var t,n=null===(t=T(e))||void 0===t?void 0:t.uuid;return D(n)},H=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substring(0,t)+"...":e},U=function(){document.querySelectorAll("a[data-prss-path]").forEach((function(e){var t=e.getAttribute("data-prss-path");e.setAttribute("href",h(t))}))};return t})()},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n(2),l=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){var r;return r=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==c(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.name,n=e.renderItem,i=e.renderItemLabel,c=e.ulClassName,s=void 0===c?"":c,m=e.mode,f=e.style,d=void 0===f?{}:f,v=e.prependedComponent,p=void 0===v?null:v,y=o.getProp("site.menus.".concat(t));if(!y)return null;var g,h=(g=[],y.forEach((function e(t){t&&(g.push(t),t.children&&t.children.forEach(e))})),g),b=function e(t){return("prev-next"===m?S:n||A)(t,e)},S=function(e,t){var n=h.findIndex((function(e){return e.key===o.getProp("item").uuid})),r=h[n-1]?h[n-1]:null,c=h[n+1]?h[n+1]:null,u=!!r&&r.key===e.key,s=!!c&&c.key===e.key;if(!u&&!s)return null;var m=o.getItem(e.key);return a.a.createElement("li",{className:l()({"menu-item-prev":u,"menu-item-next":s}),title:e.title||(null==m?void 0:m.title)},i?i(m):a.a.createElement("a",{href:null==m?void 0:m.url},a.a.createElement("span",{className:"menu-item-title"},u?"Previous":"Next"),a.a.createElement("span",{className:"menu-item-label"},e.title||(null==m?void 0:m.title))))},E=function(e){var t=o.getProp("item").uuid;return e.key===t||o.hasItem(t,e)},A=function(e,t){var n=o.getItem(e.key);return a.a.createElement("li",{title:e.title||(null==n?void 0:n.title),className:l()({active:e.key===o.getProp("item").uuid,expanded:E(e)})},i?i(n):a.a.createElement("a",{href:null==n?void 0:n.url},e.title||(null==n?void 0:n.title)),e.children&&!!e.children.length&&a.a.createElement("ul",null,e.children.map(t)))},P="prev-next"===m?h.map(b):y.map(b);return P.filter((function(e){return!!e})).length?a.a.createElement(r.Fragment,null,p,a.a.createElement("ul",{className:l()("page-menu",s,u({},"mode-".concat(m),m)),style:d},P)):null}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1);t.a=function(){var e=o.getProp("vars"),t=e.footerLeft,n=e.footerRight,r=o.getProp("site").title;return a.a.createElement("footer",{className:"page-footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col-12 col-md-6"},t?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):a.a.createElement("span",null,"© ",r)),a.a.createElement("div",{className:"col col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end"},n?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}):a.a.createElement("a",{href:"https://prss.io",className:"d-flex align-items-center footer-shoutout",target:"_blank",rel:"noopener",title:"Powered by PRSS Site Creator"},a.a.createElement("img",{className:"prss-footer-image mr-1",src:"data:image/png;base64,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",width:15}),a.a.createElement("span",{className:"font-weight-bold prss-tag"},"PRSS Site Creator"))))))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),i=n.n(o),l=n(1),c=n(3);function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.onScrollCallback,n=e.onResizeCallback,o=l.getProp("vars").logoImageUrl,m=l.getProp("site"),f=m.title,d=(m.url,l.getProp("item").uuid),v=s(Object(r.useState)(0),2),p=v[0],y=v[1],g=s(Object(r.useState)(!1),2),h=g[0],b=g[1],S=s(Object(r.useState)(!1),2),E=S[0],A=S[1],P=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=function(e){var n=e.target.documentElement.scrollTop;t&&t(n),y(n),!h&&p>80&&(b(!0),A(!1)),!E&&h&&n<=20&&(b(!1),A(!0),P.current||(P.current=setTimeout((function(){A(!1),clearTimeout(P.current),P.current=null}),2e3)))},r=function(e){n&&n(e)};return window.addEventListener("scroll",e),window.addEventListener("resize",r),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",r)}}),[p]);return a.a.createElement("header",{className:"page-header"},a.a.createElement("div",{className:i()("header-nav",{scrolled:h,"sticky-unset":E,"sticky-top":h||E})},a.a.createElement("div",{className:"container"},a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark mx-2"},a.a.createElement("a",{className:"navbar-brand logo",href:l.getSiteUrl()},o?a.a.createElement("img",{src:o}):f),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},a.a.createElement(c.a,{name:"header",ulClassName:"navbar-nav",renderItem:function(e){var t=l.getItem(e.key),n=null!=t&&t.path?l.findInStructure(e.key):null,r=(null==n?void 0:n.children)||[],o=(null==e?void 0:e.children)||[],c=[].concat(u(r),u(o)),s=l.hasItem(d,c);return a.a.createElement("li",{className:i()("nav-item",{dropdown:o&&o.length,active:e.key===d||s})},a.a.createElement("a",{className:i()("nav-link",{"dropdown-toggle":o&&o.length}),href:null==t?void 0:t.url},e.title||(null==t?void 0:t.title)),o&&function(e){return a.a.createElement("div",{className:"dropdown-menu"},e.map((function(e){var t=l.getItem(e.key);return a.a.createElement("a",{className:"dropdown-item",href:null==t?void 0:t.url},null==t?void 0:t.title)})))}(o))}}))))))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),i=n.n(o);t.a=function(e){var t=e.children,n=e.className;return a.a.createElement("div",{className:i()("page",n)},t)}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),i=n.n(o);t.a=function(e){var t=e.children,n=e.imageUrl,r=void 0===n?"":n,o=e.containerChildClassName,l=void 0===o?"":o;return a.a.createElement("div",{className:"hero"},a.a.createElement("div",{className:"hero-image",style:{backgroundImage:r?"url(".concat(r,")"):null}}),a.a.createElement("div",{className:"container mt-5 mt-sm-0"},a.a.createElement("div",{className:i()("row mx-2 justify-content-between",l)},a.a.createElement("div",{className:"col"},t))))}},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(9);var r=n(0),a=n.n(r),o=n(1),i=n(5),l=n(4),c=n(6),u=n(7);t.default=function(e){o.init(e),window.PRSS=o;var t=o.getProp("vars"),n=t.heroTitle,r=t.heroMessage,s=t.heroImageUrl,m=o.getProp("item"),f=m.content,d=m.title,v=o.getProp("sidebarHtml");return a.a.createElement(c.a,{className:"page-post"},a.a.createElement(i.a,null),(n||d)&&a.a.createElement(u.a,{imageUrl:s},a.a.createElement("h1",{className:"hero-title"},n||d),r&&a.a.createElement("div",{className:"hero-message mt-2",dangerouslySetInnerHTML:{__html:r}})),a.a.createElement("main",null,a.a.createElement("div",{className:"container main-container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"content"},f&&f.trim().length&&a.a.createElement("section",{className:"post-content mb-3 pb-5",dangerouslySetInnerHTML:{__html:f}}))),v&&a.a.createElement("div",{className:"col-3",dangerouslySetInnerHTML:{__html:v}})))),a.a.createElement(l.a,null))}}]);