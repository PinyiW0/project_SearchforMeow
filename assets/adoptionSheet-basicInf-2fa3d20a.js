import"./main-bac5165b.js";import{a as s}from"./axios-54ed5feb.js";(async()=>{s.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";const p=document.querySelector(".js-city"),u=document.querySelector(".js-town"),y=document.querySelector(".js-area-text"),g=document.querySelectorAll(".dropdown-validation"),f=document.querySelectorAll(".dropdown-menu"),m=document.querySelector(".js-profile"),r=document.querySelector(".js-detail"),v=document.querySelector(".js-thanks"),i=document.querySelector(".js-timeLine"),c=i.querySelectorAll("span"),w=i.querySelector(".timeLine__left"),L=i.querySelector(".timeLine__right");let n=1;const h=async()=>(await s.post("https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",{grant_type:"client_credentials",client_id:"sksak75312-53681308-78bc-403b",client_secret:"4df72a2d-14a9-4f79-87c8-55a002e1f028"})).data.access_token,l=await h();(async()=>{try{let t="";(await s.get("https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON",{headers:{Authorization:`Bearer ${l}`}})).data.forEach(e=>{t+=`<li><a class="dropdown-item" href="#" id= ${e.City}>${e.CityName}</a></li>`}),p.innerHTML=t}catch(t){console.log(t)}})();const S=t=>{t.preventDefault();const e=t.target.closest(".dropdown-validation"),a=e.querySelector(".dropdown-text"),o=e.querySelector(".js-city");if(typeof t.target.text=="string"){if(e.classList.add("is-valid"),e.classList.remove("is-invalid"),a.innerText=t.target.text,o){y.innerText="\u9078\u64C7\u5340\u57DF";let d="";s.get(`https://tdx.transportdata.tw/api/basic/v2/Basic/City/${t.target.id}/Town?%24format=JSON`,{headers:{Authorization:`Bearer ${l}`}}).then(q=>{q.data.forEach(T=>{d+=`<li><a class="dropdown-item" href="#">${T.TownName}</a></li>`}),u.innerHTML=d})}}else e.classList.add("is-invalid"),e.classList.remove("is-valid")};f.forEach(t=>{t.addEventListener("click",S)}),function(){var t=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(t).forEach(function(e){e.addEventListener("submit",function(a){e.checkValidity()?n===1?(a.preventDefault(),a.stopPropagation(),m.classList.toggle("d-none"),r.classList.toggle("d-none"),w.classList.toggle("active"),c[1].classList.toggle("active"),window.scrollTo(0,0),n++):n===2&&(a.preventDefault(),a.stopPropagation(),r.classList.toggle("d-none"),v.classList.toggle("d-none"),L.classList.toggle("active"),c[2].classList.toggle("active"),window.scrollTo(0,0)):(a.preventDefault(),a.stopPropagation()),g.forEach(o=>{o.classList.contains("is-valid")===!1&&(a.preventDefault(),a.stopPropagation(),o.classList.add("is-invalid"))}),e.classList.add("was-validated")},!1)})}()})();
