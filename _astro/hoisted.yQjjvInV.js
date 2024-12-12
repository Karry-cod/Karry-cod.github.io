var k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},M=function(e){return"IMG"===e.tagName},se=function(e){return NodeList.prototype.isPrototypeOf(e)},Y=function(e){return e&&1===e.nodeType},X=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},Z=function(e){try{return Array.isArray(e)?e.filter(M):se(e)?[].slice.call(e).filter(M):Y(e)?[e].filter(M):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(M):[]}catch{throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},me=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},ue=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+c+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},I=function(e,t){var o=k({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),n},fe=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=window.Promise||function(e){function t(){}e(t,t)},i=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,Z(t))}),[]);return n.filter((function(e){return-1===c.indexOf(e)})).forEach((function(e){c.push(e),e.classList.add("medium-zoom-image")})),l.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),h},r=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,t=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(u.container)if(u.container instanceof Object)t=(e=k({},e,u.container)).width-e.left-e.right-2*u.margin,o=e.height-e.top-e.bottom-2*u.margin;else{var n=(Y(u.container)?u.container:document.querySelector(u.container)).getBoundingClientRect(),i=n.width,r=n.height,d=n.left,a=n.top;e=k({},e,{width:i,height:r,left:d,top:a})}t=t||e.width-2*u.margin,o=o||e.height-2*u.margin;var c=f.zoomedHd||f.original,l=X(c)?t:c.naturalWidth||t,m=X(c)?o:c.naturalHeight||o,s=c.getBoundingClientRect(),p=s.top,h=s.left,g=s.width,v=s.height,E=Math.min(Math.max(g,l),t)/g,y=Math.min(Math.max(v,m),o)/v,b=Math.min(E,y),z="scale("+b+") translate3d("+((t-g)/2-h+u.margin+e.left)/b+"px, "+((o-v)/2-p+u.margin+e.top)/b+"px, 0)";f.zoomed.style.transform=z,f.zoomedHd&&(f.zoomedHd.style.transform=z)};return new n((function(o){if(e&&-1===c.indexOf(e))o(h);else{if(f.zoomed)o(h);else{if(e)f.original=e;else{if(!(c.length>0))return void o(h);var n=c;f.original=n[0]}if(f.original.dispatchEvent(I("medium-zoom:open",{detail:{zoom:h}})),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,m=!0,f.zoomed=ue(f.original),document.body.appendChild(p),u.template){var i=Y(u.template)?u.template:document.querySelector(u.template);f.template=document.createElement("div"),f.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(f.template)}if(f.original.parentElement&&"PICTURE"===f.original.parentElement.tagName&&f.original.currentSrc&&(f.zoomed.src=f.original.currentSrc),document.body.appendChild(f.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),f.original.classList.add("medium-zoom-image--hidden"),f.zoomed.classList.add("medium-zoom-image--opened"),f.zoomed.addEventListener("click",d),f.zoomed.addEventListener("transitionend",(function e(){m=!1,f.zoomed.removeEventListener("transitionend",e),f.original.dispatchEvent(I("medium-zoom:opened",{detail:{zoom:h}})),o(h)})),f.original.getAttribute("data-zoom-src")){f.zoomedHd=f.zoomed.cloneNode(),f.zoomedHd.removeAttribute("srcset"),f.zoomedHd.removeAttribute("sizes"),f.zoomedHd.removeAttribute("loading"),f.zoomedHd.src=f.zoomed.getAttribute("data-zoom-src"),f.zoomedHd.onerror=function(){clearInterval(r),console.warn("Unable to reach the zoom image target "+f.zoomedHd.src),f.zoomedHd=null,t()};var r=setInterval((function(){f.zoomedHd.complete&&(clearInterval(r),f.zoomedHd.classList.add("medium-zoom-image--opened"),f.zoomedHd.addEventListener("click",d),document.body.appendChild(f.zoomedHd),t())}),10)}else if(f.original.hasAttribute("srcset")){f.zoomedHd=f.zoomed.cloneNode(),f.zoomedHd.removeAttribute("sizes"),f.zoomedHd.removeAttribute("loading");var a=f.zoomedHd.addEventListener("load",(function(){f.zoomedHd.removeEventListener("load",a),f.zoomedHd.classList.add("medium-zoom-image--opened"),f.zoomedHd.addEventListener("click",d),document.body.appendChild(f.zoomedHd),t()}))}else t()}}}))},d=function(){return new n((function(e){if(!m&&f.original){m=!0,document.body.classList.remove("medium-zoom--opened"),f.zoomed.style.transform="",f.zoomedHd&&(f.zoomedHd.style.transform=""),f.template&&(f.template.style.transition="opacity 150ms",f.template.style.opacity=0),f.original.dispatchEvent(I("medium-zoom:close",{detail:{zoom:h}})),f.zoomed.addEventListener("transitionend",(function t(){f.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(f.zoomed),f.zoomedHd&&document.body.removeChild(f.zoomedHd),document.body.removeChild(p),f.zoomed.classList.remove("medium-zoom-image--opened"),f.template&&document.body.removeChild(f.template),m=!1,f.zoomed.removeEventListener("transitionend",t),f.original.dispatchEvent(I("medium-zoom:closed",{detail:{zoom:h}})),f.original=null,f.zoomed=null,f.zoomedHd=null,f.template=null,e(h)}))}else e(h)}))},a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target;return f.original?d():r({target:e})},c=[],l=[],m=!1,s=0,u=o,f={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?u=t:(t||"string"==typeof t)&&i(t),u=k({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},u);var p=me(u.background);document.addEventListener("click",(function(e){var t=e.target;t!==p?-1!==c.indexOf(t)&&a({target:t}):d()})),document.addEventListener("keyup",(function(e){var t=e.key||e.keyCode;("Escape"===t||"Esc"===t||27===t)&&d()})),document.addEventListener("scroll",(function(){if(!m&&f.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(s-e)>u.scrollOffset&&setTimeout(d,150)}})),window.addEventListener("resize",d);var h={open:r,close:d,toggle:a,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(p.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=k({},u.container,e.container)),e.template){var o=Y(e.template)?e.template:document.querySelector(e.template);t.template=o}return u=k({},u,t),c.forEach((function(e){e.dispatchEvent(I("medium-zoom:update",{detail:{zoom:h}}))})),h},clone:function(){return e(k({},u,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}))},attach:i,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];f.zoomed&&d();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,Z(t))}),[]):c;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(I("medium-zoom:detach",{detail:{zoom:h}}))})),c=c.filter((function(e){return-1===n.indexOf(e)})),h},on:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),l.push({type:"medium-zoom:"+e,listener:t,options:o}),h},off:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),l=l.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),h},getOptions:function(){return u},getImages:function(){return c},getZoomedImage:function(){return f.original}};return h};function ge(){document.querySelectorAll(".copy-btn").forEach((e=>{const t=e.querySelector(".copy-checkbox");if(t&&e instanceof HTMLElement){const o=e.closest(".highlight")?.querySelector(".code");if(o&&o instanceof HTMLElement){const n=o.innerText;t.addEventListener("change",(function(){t.checked&&navigator.clipboard.writeText(n).then((function(){t.setAttribute("disabled","true"),e.setAttribute("title","Copied!"),setTimeout((()=>{t.removeAttribute("disabled"),e.removeAttribute("title"),t.checked=!1}),1500)}),(function(e){console.error("Copy failed:",e)}))}))}else console.error("codeBlock is null or not an HTMLElement")}}))}document.addEventListener("swup:page:view",(()=>{fe(".main-card img:not(.link-card img):not(.comment img)",{margin:24,background:"#00000080"})})),document.addEventListener("swup:page:view",(()=>{ge();const e=new Event("astro:page-load");document.dispatchEvent(e)})),document.addEventListener("DOMContentLoaded",(()=>{const e=new Event("swup:page:view");document.dispatchEvent(e)}));let F=window.scrollY;const x=document.getElementById("navbar");function K(e){let t="";return e.childNodes.forEach((e=>{e.nodeType===Node.TEXT_NODE?t+=e.textContent:e.nodeType===Node.ELEMENT_NODE&&!e.classList.contains("sr-only")&&(t+=K(e))})),t}function ve(){const e=document.getElementById("content-box")||null,t=Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));e&&(e.innerHTML=(()=>{let e="<ul class='overflow-auto w-full list-none m-0 p-0' id='catalogs'>",o=[0,0,0,0,0,0];return t.forEach((t=>{let n=K(t);const i=t.id,r=parseInt(t.tagName.charAt(1),10);if(i&&n&&r){const t=r-1;o[t]++,o.fill(0,t+1);var d=o.slice(1,t+1).join(".");""==d&&(d="⚝"),e+=`\n            <li class="list-none m-0 p-0">\n              <a class="w-full text-base font-semibold p-2 level-${r}" href="#${i}">\n                <span class="toc-number">${d}</span>${n}\n              </a>\n            </li>`}})),e+="</ul>",e})());const o=(e,t)=>{let o=0;t>0&&t--;for(let n=0;n<t;n++){const t=document.querySelector(`a[href="#${e[n].id}"]`);t&&(o+=t.offsetHeight)}return o};document.addEventListener("scroll",(()=>{let e=t.findIndex((e=>e.getBoundingClientRect().top>.2*window.innerHeight));-1===e?e=t.length-1:e>0&&(e-=1);const n=document.querySelector(`a[href="#${t[e].id}"]`);n&&(document.querySelector(".active")?.classList.remove("active"),n.classList.add("active"),document.getElementById("catalogs")?.scrollTo({top:o(t,e),behavior:"smooth"}))}))}window.addEventListener("scroll",(()=>{if(x){if(window.scrollY>F&&window.scrollY>50){x.classList.add("-translate-y-full"),x.classList.remove("translate-y-0");const e=document.getElementById("dropdown");e&&e.removeAttribute("open")}else window.scrollY<F&&(x.classList.remove("-translate-y-full"),x.classList.add("translate-y-0"));F=window.scrollY}})),document.addEventListener("click",(function(e){const t=document.getElementById("dropdown");t&&!t.contains(e.target)&&t.hasAttribute("open")&&t.removeAttribute("open")})),document.addEventListener("touchmove",(function(e){const t=document.getElementById("dropdown");t&&!t.contains(e.target)&&t.hasAttribute("open")&&t.removeAttribute("open")})),document.querySelectorAll("#dropdown > ul > li > a").forEach((e=>{e.addEventListener("click",(function(){const e=document.getElementById("dropdown");e&&e.hasAttribute("open")&&e.removeAttribute("open")}))})),document.querySelectorAll("#dropdown > ul > li > details > ul > li > a").forEach((e=>{e.addEventListener("click",(function(){const e=document.getElementById("dropdown");e&&e.hasAttribute("open")&&e.removeAttribute("open")}))})),window.addEventListener("scroll",(function(){const e=document.getElementById("dropdown");e&&e.hasAttribute("open")&&e.removeAttribute("open")})),document.addEventListener("swup:page:view",ve);class he extends HTMLElement{connectedCallback(){const e=e=>this.querySelector(e),t=e("#themeToggle"),o=e("#themeButton"),n=e("#themeLabel"),i=this.dataset.light,r=this.dataset.dark;[n].forEach((e=>{e&&(e.classList.remove("hidden"),e.classList.add("swap","swap-rotate"))}));const d=()=>{const e=document.documentElement.dataset.theme;if(t&&n){const o=e===r;n.classList.toggle("active",o),t.checked=o}};d(),t&&o&&(t.disabled=!0,o.addEventListener("click",(()=>{let e=localStorage.getItem("theme");const t=window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark";"light"!==e&&"dark"!==e&&(e="light",localStorage.setItem("theme",e));const o="light"===(e||t)?"dark":"light";((e,t)=>{document.documentElement.setAttribute("data-theme-type",t),document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",t)})("light"===o?i:r,o),d()})))}}customElements.define("frosti-theme",he);class pe extends HTMLElement{connectedCallback(){const e=(e=>this.querySelector("#backToTop"))();e&&e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}}customElements.define("frosti-backtotop",pe);