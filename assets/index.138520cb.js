const v=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}};v();const g=`[{"kind":"calendar#event","etag":"\\"3444349804204000\\"","id":"42v3t032d694f8jgnecla2vc1k","status":"confirmed","htmlLink":"https://www.google.com/calendar/event?eid=NDJ2M3QwMzJkNjk0ZjhqZ25lY2xhMnZjMWsgMmRkNjliYjA1ZTczZmU1ZDRkZjE2M2VkNGU5NTRiN2Y4NDczNmEzNGFmOTEyYTdmYTYyMTY0N2I1M2VlYzIyOUBn","created":"2024-07-28T13:55:02.000Z","updated":"2024-07-28T13:55:02.102Z","summary":"Bi weekly happy hour","description":"We'll have nametags and signs! This is the main location, NOT the collegetown location.\xA0\\n\\nIf you need a ride or want to offer a ride, post in the discord!","location":"Ithaca Beer Co, 122 Ithaca Beer Dr, Ithaca, NY 14850, USA","creator":{"email":"omar.sameh.shehata@gmail.com"},"organizer":{"email":"2dd69bb05e73fe5d4df163ed4e954b7f84736a34af912a7fa621647b53eec229@group.calendar.google.com","displayName":"Ithaca Social Circle","self":true},"start":{"dateTime":"2024-08-09T19:00:00-04:00","timeZone":"America/New_York"},"end":{"dateTime":"2024-08-09T21:30:00-04:00","timeZone":"America/New_York"},"iCalUID":"42v3t032d694f8jgnecla2vc1k@google.com","sequence":0,"eventType":"default"}]`,y=x();async function w(){let a;y?a=JSON.parse(g):a=(await(await fetch("https://www.googleapis.com/calendar/v3/calendars/2dd69bb05e73fe5d4df163ed4e954b7f84736a34af912a7fa621647b53eec229@group.calendar.google.com/events?key=AIzaSyBMd8nlalBxzf3xyhIEBHrfKbK2Dd5WgJ4")).json()).items;const o=new Date().setHours(0,0,0,0),i=a.filter(s=>new Date(s.start.dateTime)>=o).sort((s,r)=>{const c=new Date(s.start.dateTime),m=new Date(r.start.dateTime);return c-m}),t=document.querySelector("#calender-data").parentElement;document.querySelector("#calender-data").remove();const e=document.createElement("div");t.appendChild(e);for(let s=0;s<i.length;s++){const r=i[s],c=u(r.start.dateTime),m=u(r.end.dateTime);e.innerHTML+=`
            <h3 class="section-title" style="margin-bottom:0px;">${r.summary}</h3>
            <p class="no-margin muted">${c}-${m}</p>
            <p class="muted" style="font-size: 20px; max-width: 400px; margin-top:0px;">
                <a href="https://maps.google.com/?q=${r.location}" target="_blank">
                    ${r.location}
                </a>
            </p>
            <p>
                ${r.description.replace(/\n/g,"<br>")}
            </p>
        `,s!=i.length-1&&(e.innerHTML+="<hr/>")}i.length==0&&(e.innerHTML+="There are currently no scheduled events on the calendar, sign up to the mailing list or Discord to be notified!")}window.fetchCalenderData=w;function u(a){let n=new Date(a).getHours();const i=n>=12;return n=n%12,n=n||12,n+(i?"pm":"am")}function x(){const a=window.location.href;try{return new URL(a).hostname==="localhost"}catch{return!1}}var p=document.getElementById("emoji-rain"),h=["\u{1F600}","\u{1F601}","\u{1F604}","\u{1F60A}","\u{1F60E}","\u{1F60D}","\u{1F642}","\u{1F917}","\u{1F929}","\u{1F61D}","\u{1F973}","\u{1F920}","\u{1F638}","\u{1F438}","\u{1F43C}","\u{1F428}","\u{1F414}","\u{1F40C}","\u{1F41D}","\u{1F57A}","\u{1F483}","\u{1F64C}","\u{1FAF6}","\u{1F44B}","\u{1F46F}","\u{1F388}","\u2728","\u{1F389}","\u{1F38A}","\u{1F3C6}","\u{1FAA9}","\u{1FA87}","\u{1F37A}","\u{1F37B}","\u{1F942}","\u{1F37E}","\u{1F338}","\u{1F33A}","\u{1FA82}","\u{1F3D8}\uFE0F","\u{1F31D}","\u{1F31E}","\u{1F31F}","\u2B50","\u{1F308}","\u{1F496}","\u{1F4AB}","\u{1F4AF}","\u2B55"],l=[];function _(a,o,n,i=-30){setTimeout(function(){const t=.15;var e=new E(o[0]+Math.random()*o[1],i,n,{x:-t*.5+Math.random()*t,y:.05+Math.random()*.1},o);l.push(e)},a)}function E(a,o,n,i,t){var e=this;this.x=a,this.y=o,this.color=n,this.v=i,this.range=t,this.element=document.createElement("span"),this.element.style.opacity=0,this.element.style.position="absolute",this.element.style.fontSize="26px",this.element.style.color="hsl("+(Math.random()*360|0)+",80%,50%)",this.element.innerHTML=n,this.initialized=!1,p.appendChild(this.element),this.update=function(s){e.y>window.innerHeight&&(e.y=-30,e.x=e.range[0]+Math.random()*e.range[1]),e.y+=e.v.y*s,e.x+=e.v.x*s,this.initialized||(this.initialized=!0,this.element.style.opacity=1),this.element.style.transform="translate3d("+e.x+"px, "+e.y+"px, 0px)",this.element.style.webkitTransform="translate3d("+e.x+"px, "+e.y+"px, 0px)",this.element.style.mozTransform="translate3d("+e.x+"px, "+e.y+"px, 0px)"}}var d=null,f=null;function b(a){d==null&&(d=a);const o=a-d;d=a;for(var n in l)l[n].update(o);requestAnimationFrame(b)}function M(){for(var a=0;a<15;a++){const o=window.innerWidth,n=window.innerHeight,i=o/5;for(let t=0;t<o;t+=i)_(a*150,[t,300],h[Math.floor(Math.random()*h.length)],-30-n*Math.random())}b(),clearTimeout(f),f=setTimeout(()=>{document.querySelector("#emoji-rain").classList.add("fadeout-element"),f=setTimeout(()=>{for(let o=0;o<l.length;o++)p.removeChild(l[o].element);l=[],document.querySelector("#emoji-rain").classList.remove("fadeout-element")},2e3)},15e3)}window.startEmojiRain=M;const T="signup-form";class k extends HTMLElement{constructor(){super()}connectedCallback(){let o=document.createElement("div");o.innerHTML=`	
        <style>
        ${L}
        </style>
        ${I}
		`,this.appendChild(o);const n=document.createElement("script");n.src="https://sibforms.com/forms/end-form/build/main.js",n.setAttribute("defer",""),this.appendChild(n),window.REQUIRED_CODE_ERROR_MESSAGE="Please choose a country code",window.LOCALE="en",window.EMAIL_INVALID_MESSAGE=window.SMS_INVALID_MESSAGE="The information provided is invalid. Please review the field format and try again.",window.REQUIRED_ERROR_MESSAGE="This field cannot be left blank. ",window.GENERIC_INVALID_MESSAGE="The information provided is invalid. Please review the field format and try again.",window.translation={common:{selectedList:"{quantity} list selected",selectedLists:"{quantity} lists selected"}},window.AUTOHIDE=Boolean(0);let i=null;document.querySelector("#submit-btn").onclick=()=>{clearInterval(i),i=setInterval(()=>{const t=document.querySelector("#success-message").classList.length==2;console.log({isSuccess:t}),t&&(clearInterval(i),console.log("Emoji rain!"),startEmojiRain())},100)}}}var L=`
@import url("https://sibforms.com/forms/end-form/build/sib-styles.css");

@font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
}

@font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
}

@font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
}

#sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
}

#sib-container input::placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
}

#sib-container textarea::placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
}

#sib-container a {
    text-decoration: underline;
    color: #2BB2FC;
}

.sib-form {
    text-align: center;
}
`,I=`<div class="sib-form">
   <div id="sib-form-container" class="sib-form-container">
      <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
         <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
               <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
            </svg>
            <span class="sib-form-message-panel__inner-text">
            Your subscription could not be saved. Please try again.
            </span>
         </div>
      </div>
      <div></div>
      <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
         <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
               <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span class="sib-form-message-panel__inner-text">
            Your subscription has been successful.
            </span>
         </div>
      </div>
      <div></div>
      <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid; direction:ltr">
         <form id="sib-form" method="POST" action="https://9442adb3.sibforms.com/serve/MUIFAFfGI-IGK9vwJelgd4wl9p4EMXS_wcaVoT_zDf3PYEnRKDhlm3FFYGRCXbmPwG3vPQ_Raqn_xV1G3DY5-QxERJbkm9mOQdG-rvArgZrLgfmhmm9hGiHak3d0gjMS7drWu9volYZzO2tMX8xiHSwky7gOhh8hOUxF1txdAD66fp4xnMUraGBszn3eKKGO9wv3OMwalzw2RaBl" data-type="subscription">
            <div style="padding: 8px 0;">
               <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                     <div class="form__label-row ">
                        <div class="entry__field">
                           <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="on" placeholder="EMAIL" data-required="true" required />
                        </div>
                     </div>
                     <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                     </label>
                  </div>
               </div>
            </div>
            <div style="padding: 8px 0;">
               <div class="sib-form-block" style="text-align: left">
                  <button id="submit-btn" class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
                     <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                     </svg>
                     SIGN ME UP!
                  </button>
               </div>
            </div>
            <input type="text" name="email_address_check" value="" class="input--hidden">
            <input type="hidden" name="locale" value="en">
         </form>
      </div>
   </div>
</div>`;window.customElements.define(T,k);
