class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
        h1 {
            margin-left: 50px;
        }

          .footer {
            display: flex;
            padding-bottom: 100px;
            background-color: rgb(235, 203, 175);
        }
        
        .footer .heading {
            font-size: 50px;
            padding-top: 90px;
            margin-left: 75px;
        }

        .about h1 {
            margin-left: 5px;
        }

        .about {
            max-width:170px ;
            line-height: 45px;
            margin-left: 100px;
            font-family: 'EB Garamond', serif;
            font-size: 18px;
        }
        
        .about a {
            font-family: 'EB Garamond', serif;
            color: black;
        }

        .social h1 {
            margin-left: 5px;
        }
        
        .social {
            line-height: 45px;
            margin-left: 200px;
            font-family: 'EB Garamond', serif;
            font-size: 18px;
        }
        
        .bx {
            padding: 5px;
            align-items: baseline;
        }

        .join h1 {
            margin-left: 5px;
        }
        
        .join  {
            line-height: 55px;
            font-family: 'EB Garamond', serif;
            align-items: center;
        }
        
        form #footer-input {
           margin: 5px 5px 10px ;
           max-width: 150px;
           height: 5px;
        }
        
        .button {
            margin-top: 15px;
            margin-left: 2px;
            width: 175px;
        }
     </footer>
        `;
      }
    }

customElements.define('footer-component', Footer);