!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};e[o].call(i.exports,i,i.exports,n);i.l=!0;return i.exports}n.m=e;n.c=t;n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})};n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="//static.hsappstatic.net/HubspotToolsMenu/static-1.68/";n(n.s=0)}([function(e,t,n){"use strict";"use es6";n(1);var o=r(n(2)),i=r(n(6));function r(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function e(){new o.default(window.hsVars).showToolsMenuIfAuthor();(new i.default).setup();document.removeEventListener("DOMContentLoaded",e)},!1)},function(e,t,n){"use strict";"use es6";String.prototype.endsWith||(String.prototype.endsWith=function(e,t){(void 0===t||t>this.length)&&(t=this.length);return this.substring(t-e.length,t)===e})},function(e,t,n){"use strict";"use es6";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n);o&&e(t,o);return t}}(),i=a(n(3)),r=a(n(4)),s=a(n(5));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(t){l(this,e);this.baseUrl=this.getHsBaseUrl(t.app_hs_base_url);this.cpBaseUrl=this.getHsBaseUrl(t.cp_hs_base_url);this.contentId=t.dynamic_page_id&&"0"!==t.dynamic_page_id&&"null"!==t.dynamic_page_id?t.dynamic_page_id:t.page_id;this.categoryId=t.category_id;this.contentGroupId=t.content_group_id;this.portalId=t.portal_id;this.cmsEnvironment=this.getCmsEnvironmentFromCookie();this.permissionObj={}}o(e,[{key:"getHsBaseUrl",value:function(e){return window.localStorage.getItem("HS_LOCAL_TESTING")?e.replace(/[^/](\w+?)(?=\.)/,"local"):e}},{key:"createElementFromHTML",value:function(e){var t=document.createElement("div");t.innerHTML=e.trim();return t.firstChild}},{key:"jsonp",value:function(e,t){window.jsonpHandler=function(e){t(e)};var n=e+(-1!==e.indexOf("?")?"&":"?")+"callback=jsonpHandler",o=document.createElement("script");o.type="text/javascript";o.async=!0;o.src=n;document.getElementsByTagName("head")[0].appendChild(o)}},{key:"httpGet",value:function(e,t){var n=new XMLHttpRequest;n.withCredentials=!0;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&t(JSON.parse(this.responseText))};n.open("GET",e,!0);n.send()}},{key:"showToolsMenuIfAuthor",value:function(){var e=this;if(window.location===window.parent.location){var t=void 0,n=this.contentId,o=!1;if(this.contentId&&this.contentGroupId)t=6===this.categoryId?"knowledge-articles":"blog-posts";else if(this.contentGroupId){t=6===this.categoryId?"knowledge-bases":"blogs";n=this.contentGroupId}else if(window.location.pathname.endsWith("_hcms/mem/login"))t="content-membership";else{o=!0;t="landing-pages"}var i=this.baseUrl+"/content-tools-menu/api/v1/tools-menu/has-permission?portalId="+this.portalId;this.jsonp(i,function(i){if(i.has_permission){var r=e.cpBaseUrl+"/content-tools-menu/api/v1/tools-menu/permissions?portalId="+e.portalId;e.httpGet(r,function(i){e.permissionObj=i;"content-membership"===t?e.getContentMembershipCookie(t,e.portalId):e.getAppLinks(t,n,e.portalId);o&&e.setupDeferredPrefetchingOfEditorAssets(t)})}})}}},{key:"getContentMembershipCookie",value:function(e,t){var n=this;this.jsonp(this.baseUrl+"/content-tools-menu/api/v1/content/validate-hubspot-user?redirect_url="+window.location.href+"&portalId="+t,function(e){if(e&&e.verified){var t=n.getUrlParameter("redirect_url");window.location.href=""===t?window.location.origin:t}})}},{key:"getAppLinks",value:function(e,t,n){var o=this;this.jsonp(this.baseUrl+"/content-tools-menu/api/v1/tools-menu/"+e+"/"+t+"/actions?portalId="+n,function(e){e.actions&&e.strings&&o.showAppLinks(e.actions,e.strings)})}},{key:"showAppLinks",value:function(e,t){var n=[].slice.call(document.querySelectorAll("[data-menu-id]")).filter(function(e){return!!e.getAttribute("data-menu-id").trim()}),o=n.length>0?n[0]:null;if(null!==o){var r=o.getAttribute("data-menu-id").trim();e.push([t.EDIT_NAVIGATION_MENU,this.baseUrl+"/settings/"+this.portalId+"/website/navigation/"+r])}var a="";e.forEach(function(e){a+="        <li><a target='_blank' href='"+e[1]+"'>\n        "+e[0]+"\n        </a></li>      "});this.permissionObj.permissions.includes("CAN_PREVIEW_ENVIRONMENTS")&&(a+='        <li><a class="hs-environment-buffer-on">'+t.VIEW_BUFFER+'</a></li>        <li><a class="hs-environment-buffer-off">'+t.VIEW_HARD+"</a></li>      ");var l='<link rel="stylesheet" href="'+s.default+'" />',c='\n      <div role="button" class="hs-tools-menu hs-collapsed" aria-expanded="false">\n        <img class="hs-sprocket" alt="'+t.MENU_ICON_ALT_TEXT+'" src="'+i.default+'" />\n        <div class="hs-dropdown">\n          <div class="hs-title">'+t.MENU_TITLE+"</div>\n          <ul>\n            "+a+'\n            <li>\n              <a role="button" href="#hide-menu" class="hs-menu-hider">'+t.HIDE_THIS_MENU+"</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    ";document.body.appendChild(this.createElementFromHTML(l));document.body.appendChild(this.createElementFromHTML(c));this.registerEvents()}},{key:"registerEvents",value:function(){var e=this,t=document.querySelector(".hs-tools-menu");this.registerDropdown(t);t.querySelector(".hs-menu-hider").addEventListener("click",function(e){e.preventDefault();e.stopPropagation();t.style.display="none"});var n=t.querySelector(".hs-environment-buffer-on");n&&(this.cmsEnvironment.buffer?n.parentElement.removeChild(n):n.addEventListener("click",function(t){t.preventDefault();t.stopPropagation();e.requestAndSetEnvironmentCookie(e.portalId,!0)}));var o=t.querySelector(".hs-environment-buffer-off");o&&(this.cmsEnvironment.buffer?o.addEventListener("click",function(t){t.preventDefault();t.stopPropagation();e.requestAndSetEnvironmentCookie(e.portalId,!1)}):o.parentElement.removeChild(o))}},{key:"requestAndSetEnvironmentCookie",value:function(e,t){var n=this.cpBaseUrl+"/content-tools-menu/api/v1/tools-menu/environment-cookie?portalId="+e+"&environmentId=1&buffer="+t;this.httpGet(n,function(e){document.cookie="hs_cms_environment="+btoa(JSON.stringify(e));window.location.reload()})}},{key:"registerDropdown",value:function(e){var t=Array.from(e.children).find(function(e){return e.classList.contains("hs-sprocket")}),n=function(){e.classList.add("hs-collapsed");e.setAttribute("aria-expanded",!1);t.setAttribute("src",i.default)},o=function(){e.classList.remove("hs-collapsed");e.setAttribute("aria-expanded",!0);t.setAttribute("src",r.default)},s=function e(){n();document.body.removeEventListener("click",e)},a=function(t){if(!t.target.getAttribute("href")){t.preventDefault();t.stopPropagation();if(e.classList.contains("hs-collapsed")){o();document.body.addEventListener("click",s)}else{n();document.body.removeEventListener("click",s)}}};e.addEventListener("click",a,!1)}},{key:"getUrlParameter",value:function(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}},{key:"getCmsEnvironmentFromCookie",value:function(){var e=this.getCookie("hs_cms_environment");return e?JSON.parse(atob(e)):{portalId:0,env:1,buffer:!1,createdAt:0}}},{key:"getCookie",value:function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""}},{key:"setupDeferredPrefetchingOfEditorAssets",value:function(e){window.addEventListener("load",function(){setTimeout(function(){var t=void 0;if("landing-pages"===e){t="content/editor/prefetcher.js";var n=window.location.host.indexOf("hubspotqa")>-1?"app.hubspotqa.com":"app.hubspot.com",o=document.createElement("script");o.src="https://"+n+"/"+t;document.head.appendChild(o)}},2e3)})}}]);return e}();t.default=c;e.exports=t.default},function(e,t){e.exports="//static.hsappstatic.net/HubspotToolsMenu/static-1.68/js/sprocket_white.svg"},function(e,t){e.exports="//static.hsappstatic.net/HubspotToolsMenu/static-1.68/js/sprocket_orange.svg"},function(e,t){e.exports="//static.hsappstatic.net/HubspotToolsMenu/static-1.68/css/toolsmenu.css"},function(e,t,n){"use strict";"use es6";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(e,o.key,o)}}return function(t,n,o){n&&e(t.prototype,n);o&&e(t,o);return t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){i(this,e);this.getShowAllFiltersLinkEventHandler=function(e){return function(t){var n=e.previousElementSibling.children;n&&[].slice.call(n,0).forEach(function(e){e.style.display="block"});e.style.display="none";t.preventDefault();t.stopPropagation()}}}o(e,[{key:"setup",value:function(){var e=this;[].slice.call(document.querySelectorAll(".filter-expand-link"),0).forEach(function(t){t.addEventListener("click",e.getShowAllFiltersLinkEventHandler(t))})}}]);return e}();t.default=r;e.exports=t.default}]);
//# sourceMappingURL=index.js.map