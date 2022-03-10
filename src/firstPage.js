import { useEffect } from 'react';
import './firstPage.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faBarsStaggered, faBlog } from '@fortawesome/free-solid-svg-icons'

function FirstPage() {
          

    useEffect(() => {
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
    <div className="body" id='body'>

        <div className="sidenav">
            <a className="closebtn" onClick={closeNav}>&times;</a>
            <Link
                activeClass="active"
                to="body"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={closeNav}
            >
                Home
            </Link> 
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={closeNav}
            >
                About
            </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={closeNav}
            >
                Books
            </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={closeNav}
            >
                Services
            </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={closeNav}
            >
                Contact
            </Link>
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
                        <Link
                            activeClass="active"
                            to="body"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            className="links"
                        >
                            Home
                        </Link> 
                    </span>
                    <span className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            className="links"
                        >
                            About
                        </Link>  
                    </span>
                    <span className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            className="links"
                        >
                            Books
                        </Link> 
                    </span>
                    <span className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            className="links"
                        >
                            Services
                        </Link>
                    </span>
                    <span className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            className="links"
                        >
                            Contact
                        </Link>
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
                        <button className="btn-1">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                Contact Us 
                                <FontAwesomeIcon icon={faMessage} className='jfj' />
                            </Link>
                        </button>
                        <button className="btn-2">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                About Us 
                                <FontAwesomeIcon icon={faUser} className="jfj" />
                            </Link>
                        </button>
                    </div>
                    
                </div>
        
            </div>
        </div>
    </div>
  );
}

export default FirstPage;


