const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};l();const c="custom-navbar";class s extends HTMLElement{constructor(){super()}connectedCallback(){const o=window.location.pathname;let n=document.createElement("div");n.className="topnav",n.innerHTML=`	
        <a id="home" href="/">Home</a>
        <a id="about" href="/about.html">About</a>
        <a id="our-friends" href="/our-friends.html">Our Friends</a>

        <style>
        ${d}
        </style>
        `;function r(e){n.querySelector(e).className="active"}o=="/"&&r("#home"),o=="/about.html"&&r("#about"),o=="/our-friends.html"&&r("#our-friends"),this.appendChild(n)}}var d=`
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
`;window.customElements.define(c,s);
