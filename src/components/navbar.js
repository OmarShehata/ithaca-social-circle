const elementName = 'custom-navbar'
class Navbar extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
        const pathname = window.location.pathname

      let element = document.createElement('div')
      element.className = 'topnav'
      element.innerHTML = 
        `	
        <a id="home" href="/">Home</a>
        <a id="about" href="/about.html">About</a>
        <a id="our-friends" href="/our-friends.html">Our Friends</a>

        <style>
        ${style}
        </style>
        `

    function setActive(selector) {
        element.querySelector(selector).className = 'active' 
    }

    if (pathname == "/") setActive("#home")
    if (pathname == "/about.html") setActive("#about")
    if (pathname == "/our-friends.html") setActive("#our-friends")
      
	  this.appendChild(element)    
	}
}

var style = 
`
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
`

window.customElements.define(elementName, Navbar);