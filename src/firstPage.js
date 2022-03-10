import { useEffect } from 'react';
import './firstPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faUserCircle, faBarsStaggered, faBlog } from '@fortawesome/free-solid-svg-icons'

function FirstPage() {
          

    useEffect(() => {
        let windowWidth = window.innerWidth;
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

    const openNav = () => {
        document.getElementsByClassName("sidenav")[0].style.width = "100%";
    }

    const closeNav = () => {
        document.getElementsByClassName("sidenav")[0].style.width = "0";
    }

    

  return (
    <div className="body">

        <div className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Books</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <p className='sitename'>Name Of Site</p>
        </div>

        <div className='main'>

            <header className='header-2'>
                <nav className='nav-bar-2' onClick={openNav}>
                    
                    <FontAwesomeIcon icon={faBarsStaggered} className="menu-bar" />

                </nav>

                <div className="nav-contact-2">
                    <FontAwesomeIcon icon={faBlog} className="fa-circle-user-2" />

                </div>
            </header>
            <header className="header">

                <nav className="nav-bar">
        
                    <span className="nav-item">
                        <a href="#section-1">Home</a>
                    </span>
                    <span className="nav-item">
                        <a href="#section-1">About</a>
                    </span>
                    <span className="nav-item">
                        <a href="#section-1">Books</a>
                    </span>
                    <span className="nav-item">
                        <a href="#section-1">Services</a>
                    </span>
                    <span className="nav-item">
                        <a href="#section-1">Contact</a>
                    </span>
        
                </nav>

        
                <div className="nav-contact">
        
                    <span id="contact-header-name">Name Of Site</span>
                    
                    <span id="contact-header">
                    <FontAwesomeIcon icon={faBlog} className="fa-circle-user" />
                    </span>
        
                </div>
        
            </header>
            
            <div className="section-1" id="section-1">
        
                <div className="section-1-body">
                    <div className="big-text-container">
                        <div className="big-text-1 big-text">
                            "NEVER REGRET ANYTHING THAT MADE YOU SMILE :)" <br></br> <i className="john">MARK TWAIN -</i> 
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
    </div>
  );
}

export default FirstPage;


