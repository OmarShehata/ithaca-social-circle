const elementName = 'footer'
class Footer extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
      let inputElement = document.createElement('div')
        inputElement.innerHTML = 
        `	
        <style>
        ${style}
        </style>
        ${FORM_HTML}
        `

      
		this.appendChild(inputElement)
      const script = document.createElement('script');
      script.src = 'https://sibforms.com/forms/end-form/build/main.js';
      script.setAttribute('defer', "")
      this.appendChild(script);      


	}
}

var style = `
`

window.customElements.define(elementName, Footer);