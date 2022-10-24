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
            font-family: 'Cedarville Cursive', cursive;
            font-size: 80px;
            text-align: center;
        }

        a {
            font-family: 'Archivo Narrow', sans-serif;
            text-transform: capitalize;
            text-decoration: none;
            color:rgb(254, 162, 177) ;
            padding: 5px;
        }

        h1 {
            margin-left: 50px;
        }

        .footer {
            display: flex;
            padding-bottom: 160px;
            background-color: rgb(235, 203, 175);
        }
        
        .footer .heading {
            font-size: 50px;
            padding-top: 70px;
            margin-left: 100px;
        }
        
        .about {
            max-width:170px ;
            line-height: 30px;
            margin-left: 150px;
            font-family: 'EB Garamond', serif;
            font-size: 18px;
        }
        
        .about a {
            font-family: 'EB Garamond', serif;
            color: black;
        }
        
        .social {
            line-height: 30px;
            margin-left: 200px;
            font-family: 'EB Garamond', serif;
            font-size: 18px;
        }
        
        .bx {
            padding: 5px;
            align-items: baseline;
        }
        
        .join  {
            line-height: 30px;
            margin-left: 320px;
            font-family: 'EB Garamond', serif;
            align-items: center;
        }
        
        form #footer-input {
           margin: 10px 50px 10px ;
           max-width: 150px;
           height: 5px;
        }

        form input {
            display: block;
            width: 250px;
            height: 35px;
            padding: 10px;
            text-align: center;
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