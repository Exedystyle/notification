!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);class i{constructor(){this.createPopup(),this.close=this.close.bind(this)}createPopup(){this.popup=document.createElement("div")}render(e=document.body,t){e.appendChild(this.popup),t&&setTimeout(e=>this.close(),t)}close(){this.popup.style.display="none",this.popup=null,this.unsubscribe()}subscribe(e){this.closeHandler=e,this.closeHandler.addEventListener("click",this.close)}unsubscribe(){this.closeHandler.removeEventListener("click",this.close)}static createDivWithClass(e){const t=document.createElement("div");return t.classList.add(e),t}}class n extends i{constructor(e="great lorem",t=4){super(),this.message=e,this.status=a[t],this.createToast()}createToast(){super.createPopup(),this.popup.classList.add("toast"),this.popup.classList.add(`toast__status--${this.status}`);const e=i.createDivWithClass("toast__img");e.classList.add(`toast__img--${this.status}`);const t=i.createDivWithClass("toast__message"),s=i.createDivWithClass("toast__message__title"),n=i.createDivWithClass("toast__message__text");s.innerText=this.status,n.innerText=this.message,t.appendChild(s),t.appendChild(n);const a=i.createDivWithClass("toast__ui"),o=i.createDivWithClass("ui__cross");a.appendChild(o),this.popup.appendChild(e),this.popup.appendChild(t),this.popup.appendChild(a),super.subscribe(o)}render(){this.container=document.querySelector(".toast__space"),console.log(this.container),this.container||(this.container=i.createDivWithClass("toast__space"),document.body.appendChild(this.container)),super.render(this.container,5e3)}}const a={1:"success",2:"error",3:"warning",4:"info"};class o extends i{constructor(e="Modal Window",t="Enter smth",s="empty button"){super(),this.title=e,this.message=t,this.button1Text=s,this.createModal()}createModal(){super.createPopup(),this.popup.classList.add("modal__shadow");const e=i.createDivWithClass("modal"),t=i.createDivWithClass("modal__header"),s=i.createDivWithClass("modal__body"),n=i.createDivWithClass("modal__ui"),a=document.createElement("h1");a.classList.add("modal__header__title"),a.innerText=this.title,t.appendChild(a);const o=i.createDivWithClass("modal__message");o.innerText=this.message,s.appendChild(o);const r=document.createElement("button");r.classList.add("modal__ui__button"),r.classList.add("modal__ui__button--1"),r.innerText=this.button1Text;const c=document.createElement("button");c.classList.add("modal__ui__button"),c.classList.add("modal__ui__button--2"),c.innerText="close",n.appendChild(r),n.appendChild(c),e.appendChild(t),e.appendChild(s),e.appendChild(n),this.popup.appendChild(e),e.addEventListener("click",e=>{e.stopPropagation()}),super.subscribe(this.popup),super.subscribe(c)}}document.getElementById("1").addEventListener("click",function(){new n("All right, you're fine fellow. Keep it up!",1).render()}),document.getElementById("2").addEventListener("click",function(){new n("Alarm! Alarm! Stack Overflow! Fix it right now!",2).render()}),document.getElementById("3").addEventListener("click",function(){new n("Attention, may be something goes wrong!",3).render()}),document.getElementById("4").addEventListener("click",function(){new n("I just want to know that you are fine").render()}),document.getElementById("5").addEventListener("click",function(){new o("close it","Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga sapiente explicabo obcaecati quidem accusamus tempore, molestias recusandae nemo. Maxime, quod distinctio. Ullam commodi odit impedit, vel culpa beatae fugiat, nulla maiores ea reiciendis nisi dolorem quas autem quisquam quaerat.").render()})}]);