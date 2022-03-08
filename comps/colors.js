//MUST HAVE - CREATE A TEMPLATE TAG
var template_color = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_color.innerHTML = `
<link rel="stylesheet" href="color.css">
<a href="/colorpages/color1.html">
    <div class="fish">
        <div class="head">
        <div class="fin"></div>
        </div>
    </div>
 </a>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheColor extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_color.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".head").style.backgroundColor=this.getAttribute("hex");
        this.shadowRoot.querySelector(".fin").style.borderLeftColor=this.getAttribute("hex");
        this.shadowRoot.querySelector("a").href=this.getAttribute("link");
        document.querySelector(".fish1").addEventListener("click", e => {
            console.log("test")
            document.querySelector(".colorbox").style.display = "block";
        })
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-color", TheColor)