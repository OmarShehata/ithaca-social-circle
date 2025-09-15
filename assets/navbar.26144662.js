const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};c();var l="./assets/instagram.e9203328.png";const s="custom-navbar";class d extends HTMLElement{constructor(){super()}connectedCallback(){const o=window.location.pathname;let r=document.createElement("div");r.className="topnav",r.innerHTML=`	
        <a id="home" href="/">Home</a>
        <a id="about" href="/about.html">About</a>
        <a id="our-friends" href="/our-friends.html">Our Friends</a>
        <a id="instagram" href="https://www.instagram.com/ithacasocialcircle/">
          <img src="${l}" width="25px"></img>
        </a>

        <style>
        ${f}
        </style>
        `;function n(e){r.querySelector(e).className="active"}o=="/"&&n("#home"),o=="/about.html"&&n("#about"),o=="/our-friends.html"&&n("#our-friends"),this.appendChild(r)}}var f=`
/* Add a black background color to the top navigation */
.topnav {
  background-color: #fff7ee;
  overflow: hidden;
  font-family: Glacial-light;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #5b5248;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ffe9d0;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #eca247;
  color: white;
}


`;window.customElements.define(s,d);
