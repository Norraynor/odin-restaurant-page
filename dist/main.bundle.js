(()=>{"use strict";var e={};function t(e,t,n,a){const i=document.createElement("div");i.classList.add("card");const d=document.createElement("h4");d.textContent=`${e}`,d.classList.add(`${e.toLowerCase()}`),i.appendChild(d);const c=document.createElement("h5");c.textContent=`${t} - ${n}`,c.classList.add("name"),i.appendChild(c);const o=document.createElement("p");return o.classList.add("description"),o.textContent=`${a}`,i.appendChild(o),i}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=a[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const n=e.p+"1745b750e8b34fa80ff2.jpg",a=function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Mamma Mia! Pizzeria!",t.classList.add("name"),e.appendChild(t);const a=new Image;a.src=n,a.alt="pizza image",e.appendChild(a);const i=document.createElement("h4");return i.textContent="Pizza so good it hurts",i.classList.add("description"),e.appendChild(i),e},i=e.p+"65db96183950d8dc9ef7.jpg",d=e.p+"e436424bf4281ba12219.jpg";function c(e,t,n){const a=document.createElement("div");a.classList.add("card");const i=document.createElement("h4");i.textContent=`${e}`,i.classList.add(`${e.toLowerCase()}`),a.appendChild(i);const d=new Image;d.src=t,d.alt=`${e} image`,a.appendChild(d);const c=document.createElement("p");return c.classList.add("description"),c.textContent=`${n}`,a.appendChild(c),a}const o=document.querySelector("#content"),s=document.querySelector("#home-button"),r=document.querySelector("#menu-button"),l=document.querySelector("#about-button");o.appendChild(a()),s.addEventListener("click",(()=>{o.textContent="",o.appendChild(a())})),r.addEventListener("click",(()=>{o.textContent="",o.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Menu",t.classList.add("menu"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-container");const a=c("PineapplePizza",d,"Some love it and some hate it.");n.appendChild(a);const o=c("MargheritaPizza",i,"Simple and lovable pizza");return n.appendChild(o),e.appendChild(n),e}())})),l.addEventListener("click",(()=>{o.textContent="",o.appendChild(function(){const e=document.createElement("div"),n=document.createElement("h1");n.textContent="About Us",n.classList.add("about"),e.appendChild(n);const a=document.createElement("div");a.classList.add("about-container");const i=t("Owner","Giusseppi","Mastermind","Greatest pizza chef that ever lived. Orders his minions around to create best pizza that could exist. It is said that one day he may even finish a pizza");a.appendChild(i);const d=t("Manager","Giusseppi Jr","Minion","Tries to be like his father");a.appendChild(d);const c=t("Employee","Giusseppi(clone)","Minion","Created after greatest mastermind - has all the best qualities but not as refined");return a.appendChild(c),e.appendChild(a),e}())}))})();