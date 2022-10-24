const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
          <style>
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Rubik:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Cedarville+Cursive&family=Rubik:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');

          body {
            font-family: Arial, Helvetica, sans-serif;
            color: black;
            background-color: white;
            margin: 20px;
        }

        .heading {
            margin: 30px 50px 0px;
            font-family: 'Cedarville Cursive', cursive;
            font-size: 50px;
            text-align: center;
        }

        a {
            font-family: 'Archivo Narrow', sans-serif;
            text-transform: capitalize;
            text-decoration: none;
            color:rgb(254, 162, 177) ;
            padding: 5px;
        }

        .footer {
            display: flex;
            padding-bottom: 100px;
            background-color: rgb(235, 203, 175);
        }
        
        .footer .heading {
            font-size: 50px;
            padding-top: 100px;
            margin-left: 100px;
        }
        
        .about {
            margin: 50px 100px 50px;
            width: 170px;
            line-height: 40px;
            font-family: 'EB Garamond', serif;
            font-size: 18px;
        }
        
        .about a {
            font-family: 'EB Garamond', serif;
            color: black;
        }
        
        .social {
            margin: 50px 100px 50px;
            width: 170px;
            line-height: 40px;
            font-family: 'EB Garamond', serif;
            font-size: 18px;
        }
        
        .bx {
            padding: 5px;
            align-items: baseline;
        }
        
        .join  {
            margin: 50px 100px 50px;
            width: 170px;
            line-height: 40px;
            font-family: 'EB Garamond', serif;
            font-size: 18px;
        }

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        form #footer-input {
           margin: 10px 50px 30px ;
           width: 165px;
           height: 35px;
        }

    button {
        width: 175px;
        height: 50px;
    }
    }
     </style>
     <footer>
     <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
     <link rel="stylesheet" type="text/css" href="styles.css">

     <section class="footer">
     <div class="heading">Everett</div>
 
     <div class="about">
         <h1>About</h1>
         <div><a href="contact.html">Contact</a></div>
         <div ><a href="gallery.html">Gallery</a></div>
         <div ><a href="shipping.html">Shipping & Delivery</a></div>
     </div>
 
     <div class="social">
         <h1>Follow us</h1>
         <div><i class='bx bxl-instagram'></i>Instagram</a></div>
         <div ><i class='bx bxl-facebook'></i>Facebook</a></div>
         <div ><i class='bx bxl-pinterest'></i>Pinterest</a></div>
     </div>  
 
     <div class="join">
         <h1>Join us</h1>
             <form>
                     <input type="text" id="footer-input" placeholder="Your Name">
                     <input type="email" id="footer-input" placeholder="Your Email">
                     <button class="button">Get Updates</button>
             </form>
         </div>
     </section>
     </footer>
        `;
        class Footer extends HTMLElement {
            constructor() {
              super();
            }
          
            connectedCallback() {
              const fontAwesome = document.querySelector('link[href*="font-awesome"]');
              const boxIcons = document.querySelector('link[href*="box-icons"]')
              const shadowRoot = this.attachShadow({ mode: 'closed' });
          
              if (fontAwesome) {
                shadowRoot.appendChild(fontAwesome.cloneNode());
              }
              if (boxIcons) {
                shadowRoot.appendChild(boxIcons.cloneNode());
              }
          
              shadowRoot.appendChild(footerTemplate.content);
            }
          }
          
          customElements.define('footer-component', Footer);
    

customElements.define('footer-component', Footer);