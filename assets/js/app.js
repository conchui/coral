!function l(u,a,i){function c(r,e){if(!a[r]){if(!u[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(f)return f(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[r]={exports:{}};u[r][0].call(o.exports,function(e){return c(u[r][1][e]||e)},o,o.exports,l,u,a,i)}return a[r].exports}for(var f="function"==typeof require&&require,e=0;e<i.length;e++)c(i[e]);return c}({1:[function(e,r,t){"use strict";var o=n(e("jquery"));n(e("slick"));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){o.default.ajax({type:"POST",url:"backend/ajax/email-validation.php",data:e,success:function(e){var r,t,n=JSON.parse(e);(0,o.default)(".error").remove(),n.error&&(r=n.message,(0,o.default)(".field-container").append('<span class="error">'+r+"</span>")),t=n.error,(0,o.default)(".email-field").css({"border-color":"#ea4632"}),t||(0,o.default)(".email-field").css({"border-color":"#77bc20"})},error:function(e,r,t){console.log(e),console.log(r),console.log(t)}})}(0,o.default)(document).ready(function(){(0,o.default)(".link.-about").on("click",function(){event.preventDefault(),(0,o.default)(".scroll-up").toggleClass("-active")}),(0,o.default)(".scroll-up > .title").on("click",function(){event.preventDefault(),(0,o.default)(".scroll-up").toggleClass("-active")}),(0,o.default)(".signin-form > .button").on("click",function(){event.preventDefault();var e=(0,o.default)(this).parent("form").serialize();l(e)})})},{jquery:"jquery",slick:"slick"}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
