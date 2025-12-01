import{a as u,S as d,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const f="53393069-83cee6561783600a5d025c02b",p="https://pixabay.com/api/";function m(e){const o={key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return u.get(p,{params:o}).then(s=>s.data).catch(s=>{throw console.error("Error fetching:",s),s})}const c=document.querySelector(".gallery"),l=document.querySelector(".js-loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}" class="block">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" class="gallery-image" />
      </a>
      <div class="info">
        <div class="info-item"><b>Likes</b><span>${e.likes}</span></div>
        <div class="info-item"><b>Views</b><span>${e.views}</span></div>
        <div class="info-item"><b>Comments</b><span>${e.comments}</span></div>
        <div class="info-item"><b>Downloads</b><span>${e.downloads}</span></div>
      </div>
    </li>
  `}function y(e){const o=e.map(h).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function L(){l.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",function(e){e.preventDefault();const o=e.target.elements["search-text"].value.trim();if(!o){n.error({message:"Please enter a search word",position:"topRight"});return}b(),v(),m(o).then(s=>{if(!s.hits||s.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s.hits)}).catch(()=>{n.error({message:"Something went wrong. Try again later!",position:"topRight"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
