!function(){var e,t=document.querySelector(".ast-above-header"),l=document.querySelector(".ast-above-header-navigation"),a=document.querySelector(".menu-above-header-toggle"),o=document.querySelector(".main-header-menu-toggle"),n=document.querySelector(".menu-below-header-toggle"),s=document.querySelector("html"),u=document.querySelectorAll(".ast-above-header"),d=document.querySelectorAll(".menu-above-header-toggle"),g=document.querySelectorAll(".ast-above-header-navigation");if(0<d.length){for(var r=0;r<d.length;r++)if(d[r].setAttribute("data-index",r),d[r].addEventListener("click",function(e){e.preventDefault();for(var t=this.getAttribute("data-index"),l=u[t].querySelectorAll(".menu-item-has-children"),a=0;a<l.length;a++){l[a].classList.remove("ast-submenu-expanded");for(var o=l[a].querySelectorAll(".sub-menu"),n=0;n<o.length;n++)o[n].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("menu-above-header-toggle")&&("function"==typeof astraToggleClass?(astraToggleClass(u[t],"toggle-on"),astraToggleClass(d[t],"toggled")):(toggleClass(u[t],"toggle-on"),toggleClass(d[t],"toggled")),u[t].classList.contains("toggle-on")?(g[t].style.display="block",s.classList.add("above-header-toggle-on")):(g[t].style.display="",s.classList.remove("above-header-toggle-on")),document.body.classList.add("ast-above-header-nav-open"));var r=document.querySelector(".ast-above-header-navigation"),e=r.getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);r.style.maxHeight=Math.abs(t-e.top)+"px"},!1),void 0!==u[r]){u[r].querySelectorAll(".ast-above-header-menu .menu-item");if(0<(e=document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")?u[r].querySelectorAll(".ast-header-break-point .ast-above-header-menu .ast-menu-toggle, .ast-header-break-point .ast-above-header-menu .menu-item-has-children > .menu-link"):u[r].querySelectorAll(".ast-above-header-menu .ast-menu-toggle")).length)for(var i=0;i<e.length;i++)e[i].addEventListener("click",AstraToggleSubMenu,!1)}}else{var c=document.querySelectorAll(".main-header-menu"),m=document.querySelectorAll(".ast-above-header-menu-items"),h=document.querySelectorAll(".main-header-menu-toggle");if(0<h.length&&0<m.length&&0==c.length)for(r=0;r<h.length;r++){var v=m[r].querySelectorAll(".ast-menu-toggle");if(0<v.length)for(i=0;i<v.length;i++)v[i].addEventListener("click",AstraToggleSubMenu,!1)}}null!=a&&(null!=o&&null!=l&&o.addEventListener("click",function(e){t.classList.remove("toggle-on"),l.style.display="none",null!=a&&a.classList.remove("toggled"),null!=n&&n.classList.remove("toggled")},!1),a.addEventListener("click",function(e){e.preventDefault(),null!=o&&o.classList.remove("toggled"),null!=n&&n.classList.remove("toggled");e=document.querySelector(".ast-below-header");null!=e&&(t=document.querySelector(".ast-below-header-actual-nav"),e.classList.remove("toggle-on"),null!=t&&(t.style.display=""));var t=document.querySelector(".main-header-bar-navigation");null!=t&&(t.classList.remove("toggle-on"),t.style.display="")},!1))}();!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var n=document.querySelectorAll(".ast-search-box.header-cover"),s=0;s<n.length;s++)for(var c=n[s].parentNode.querySelectorAll("a.astra-search-icon"),l=0;l<c.length;l++)c[l]==this&&(r(n[s]),n[s].querySelector("input.search-field").focus(),t=n[s],o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(a=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar"))&&null!==a&&(a=a.offsetHeight,o=o.offsetHeight,o=a&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(a)-parseFloat(o):parseFloat(o),t.style.maxHeight=Math.abs(o)+"px")));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(r(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.getElementsByClassName("close"),s=0,l=c.length;s<l;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){e=document.getElementById("ast-seach-full-screen-form");null!=e&&(n(e),o("full-screen"));for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)n(t[a])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();