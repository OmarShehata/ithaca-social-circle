import"./navbar.61a0b0a1.js";const T=`[{"kind":"calendar#event","etag":"\\"3444349804204000\\"","id":"42v3t032d694f8jgnecla2vc1k","status":"confirmed","htmlLink":"https://www.google.com/calendar/event?eid=NDJ2M3QwMzJkNjk0ZjhqZ25lY2xhMnZjMWsgMmRkNjliYjA1ZTczZmU1ZDRkZjE2M2VkNGU5NTRiN2Y4NDczNmEzNGFmOTEyYTdmYTYyMTY0N2I1M2VlYzIyOUBn","created":"2024-07-28T13:55:02.000Z","updated":"2024-07-28T13:55:02.102Z","summary":"Bi weekly happy hour","description":"We'll have nametags and signs! This is the main location, NOT the collegetown location.\xA0\\n\\nIf you need a ride or want to offer a ride, post in the discord!","location":"Ithaca Beer Co, 122 Ithaca Beer Dr, Ithaca, NY 14850, USA","creator":{"email":"omar.sameh.shehata@gmail.com"},"organizer":{"email":"2dd69bb05e73fe5d4df163ed4e954b7f84736a34af912a7fa621647b53eec229@group.calendar.google.com","displayName":"Ithaca Social Circle","self":true},"start":{"dateTime":"2024-08-09T19:00:00-04:00","timeZone":"America/New_York"},"end":{"dateTime":"2024-08-09T21:30:00-04:00","timeZone":"America/New_York"},"iCalUID":"42v3t032d694f8jgnecla2vc1k@google.com","sequence":0,"eventType":"default"}]`,v=M();async function w(){let a;v?a=JSON.parse(T):a=(await(await fetch("https://www.googleapis.com/calendar/v3/calendars/2dd69bb05e73fe5d4df163ed4e954b7f84736a34af912a7fa621647b53eec229@group.calendar.google.com/events?key=AIzaSyBMd8nlalBxzf3xyhIEBHrfKbK2Dd5WgJ4")).json()).items;const t=new Date().setHours(0,0,0,0),o=a.filter(i=>new Date(i.start.dateTime)>=t).sort((i,s)=>{const c=new Date(i.start.dateTime),m=new Date(s.start.dateTime);return c-m}),r=document.querySelector("#calender-data").parentElement;document.querySelector("#calender-data").remove();const e=document.createElement("div");r.appendChild(e),o.length;for(let i=0;i<o.length;i++){const s=o[i],c=u(s.start.dateTime),m=u(s.end.dateTime),g=x(s.start.dateTime);e.innerHTML+=`
            <h3 class="section-title" style="margin-bottom:0px;">${s.summary}</h3>
            <p class="no-margin muted">${g}, ${c}-${m}</p>
            <p class="muted" style="font-size: 20px; max-width: 400px; margin-top:0px;">
                <a href="https://maps.google.com/?q=${s.location}" target="_blank">
                    ${s.location}
                </a>
            </p>
            <p>
                ${s.description.replace(/\n/g,"<br>")}
            </p>
        `,i!=o.length-1&&(e.innerHTML+="<hr/>")}o.length==0&&(e.innerHTML+="There are currently no scheduled events on the calendar, sign up to the mailing list or Discord to be notified!")}window.fetchCalenderData=w;function u(a){let n=new Date(a).getHours();const o=n>=12;return n=n%12,n=n||12,n+(o?"pm":"am")}function x(a){const t=new Date(a),n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["January","February","March","April","May","June","July","August","September","October","November","December"],r=n[t.getDay()],e=o[t.getMonth()],i=t.getDate();return`${r}, ${e} ${i}`}function M(){const a=window.location.href;try{return new URL(a).hostname==="localhost"}catch{return!1}}var f=document.getElementById("emoji-rain"),p=["\u{1F600}","\u{1F601}","\u{1F604}","\u{1F60A}","\u{1F60E}","\u{1F60D}","\u{1F642}","\u{1F917}","\u{1F929}","\u{1F61D}","\u{1F973}","\u{1F920}","\u{1F638}","\u{1F438}","\u{1F43C}","\u{1F428}","\u{1F414}","\u{1F40C}","\u{1F41D}","\u{1F57A}","\u{1F483}","\u{1F64C}","\u{1FAF6}","\u{1F44B}","\u{1F46F}","\u{1F388}","\u2728","\u{1F389}","\u{1F38A}","\u{1F3C6}","\u{1FAA9}","\u{1FA87}","\u{1F37A}","\u{1F37B}","\u{1F942}","\u{1F37E}","\u{1F338}","\u{1F33A}","\u{1FA82}","\u{1F3D8}\uFE0F","\u{1F31D}","\u{1F31E}","\u{1F31F}","\u2B50","\u{1F308}","\u{1F496}","\u{1F4AB}","\u{1F4AF}","\u2B55"],l=[];function D(a,t,n,o=-30){setTimeout(function(){const r=.15;var e=new b(t[0]+Math.random()*t[1],o,n,{x:-r*.5+Math.random()*r,y:.05+Math.random()*.1},t);l.push(e)},a)}function b(a,t,n,o,r){var e=this;this.x=a,this.y=t,this.color=n,this.v=o,this.range=r,this.element=document.createElement("span"),this.element.style.opacity=0,this.element.style.position="absolute",this.element.style.fontSize="26px",this.element.style.color="hsl("+(Math.random()*360|0)+",80%,50%)",this.element.innerHTML=n,this.initialized=!1,f.appendChild(this.element),this.update=function(i){e.y>window.innerHeight&&(e.y=-30,e.x=e.range[0]+Math.random()*e.range[1]),e.y+=e.v.y*i,e.x+=e.v.x*i,this.initialized||(this.initialized=!0,this.element.style.opacity=1),this.element.style.transform="translate3d("+e.x+"px, "+e.y+"px, 0px)",this.element.style.webkitTransform="translate3d("+e.x+"px, "+e.y+"px, 0px)",this.element.style.mozTransform="translate3d("+e.x+"px, "+e.y+"px, 0px)"}}var d=null,h=null;function y(a){d==null&&(d=a);const t=a-d;d=a;for(var n in l)l[n].update(t);requestAnimationFrame(y)}function N(){for(var a=0;a<15;a++){const t=window.innerWidth,n=window.innerHeight,o=t/5;for(let r=0;r<t;r+=o)D(a*150,[r,300],p[Math.floor(Math.random()*p.length)],-30-n*Math.random())}y(),clearTimeout(h),h=setTimeout(()=>{document.querySelector("#emoji-rain").classList.add("fadeout-element"),h=setTimeout(()=>{for(let t=0;t<l.length;t++)f.removeChild(l[t].element);l=[],document.querySelector("#emoji-rain").classList.remove("fadeout-element")},2e3)},15e3)}window.startEmojiRain=N;
