import { useEffect } from 'react';
import './firstPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function FirstPage() {
          

    useEffect(() => {
        console.log("knedviodnvio")
        let slideIndex = 0;
        
        const showSlides = () => {
          var i;
          var slides = document.getElementsByClassName("big-text");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}
          slides[slideIndex-1].style.display = "block";
          setTimeout(showSlides, 5000); // Change image every 2 seconds
        }

        showSlides();
    })

    

  return (
    <div className="body">

        <header className="header">

            <nav className="nav-bar">
    
                <span className="nav-item">
                    <a href="#section-1">Home</a>
                </span>
                <span className="nav-item">
                    <a href="#section-1">About</a>
                </span>
                <span className="nav-item">
                    <a href="#section-1">Certificates</a>
                </span>
                <span className="nav-item">
                    <a href="#section-1">Projects</a>
                </span>
                <span className="nav-item">
                    <a href="#section-1">Contact</a>
                </span>
    
            </nav>
    
            <div className="nav-contact">
    
                <span id="contact-header-name">Saviour Ise</span>
                
                <span id="contact-header">
                <FontAwesomeIcon icon={faUserCircle} className="fa-circle-user" />
                </span>
    
            </div>
    
        </header>
        
         <div className="section-1" id="section-1">
    
            <div className="section-1-body">
                <div className="big-text-container">
                    <div className="big-text-1 big-text">
                        "NEVER REGRET ANYTHING THAT MADE YOU SMILE" <br></br> <i className="john">MARK TWAIN -</i> 
                    </div>
                    <div className="big-text-2 big-text">
                        "IF YOU WANT RAINBOW, YOU GOTTA PUT UP WITH THE RAIN" <br></br> <i className="john">DOLLY PARTON -</i> 
                    </div>
                    <div className="big-text-3 big-text">
                        "LIFE ISN'T ABOUT FINDING YOURSELF, IT IS ABOUT CREATING YOURSELF" <br></br> <i className="john">GEORGE BERNARD SHAW -</i> 
                    </div>
                </div>
                
                
                <div>
                    <button className="btn-1">Contact Me <FontAwesomeIcon icon={faMessage} className='jfj' /></button>
                    <button className="btn-2">About Me <FontAwesomeIcon icon={faUser} className="jfj" /></button>
                </div>
                
            </div>
    
        </div>

    </div>
  );
}

export default FirstPage;


