import { useEffect } from "react";
import "./footer.css";


function Footer() {

    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = "assets/rev-slider.js";
        // script.defer = true;
        // document.body.appendChild(script);
    }, []);

  return (
    <>
      
      <div className="footer">
        <div className="footer-inner">
            <div className="footer-logo-col">
                <div className="logo-container">
                 <div className="sia-logo"></div>
                </div>
                <div className="title-container">
                    Singapore Indian Association
                </div>
                <div className="asso-desc-container">
                    Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Condimentum diam orci pretium<br></br> a pharetra, feugiat cursus.
                </div>
            </div>
            <div className="quick-links-container">
                  <div className="quick-link-heading">Quick Links</div>  
                  <div className="quick-link-links">About Us</div>  
                  <div className="quick-link-links">Event</div>  
                  <div className="quick-link-links">Gallery</div>  
            </div>
            <div className="socials-container">
                <div className="social-heading">Follow Us</div>
                <div className="social-icons-container">
                    <div className="fb-icon"></div>
                    <div className="tw-icon"></div>
                </div>
               
            </div>
        </div>  

        <div class="reach-out-container-holder">
            <div className="reach-out-container">
            <div className="call-section">
                <div className="call-icon"></div>
                <div className="call-details">
                    <div className="call-text">Give Us a Call</div>
                    <div className="call-num">+655 8965321</div>
                </div>
            </div>
            <div className="call-section">
                <div className="mail-icon"></div>
                <div className="call-details">
                    <div className="call-text">Send Us a Message</div>
                    <div className="call-num">contact@sia.com</div>
                </div>
            </div>

            <div className="call-section">
                <div className="address-icon"></div>
                <div className="call-details">
                    <div className="call-text">Our Address</div>
                    <div className="call-num">510 Kampong Bahru <br></br>Rd Singapore 099446</div>
                </div>
            </div>
        </div>   
      </div>

      </div>

 
    </>
  );
}

export default Footer;
