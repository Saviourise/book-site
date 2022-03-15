import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Link
} from "react-router-dom";
import { Link as SamePageLink } from "react-scroll";
import { faBlog, faBook, faHome, faPhone, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons'


function FooterPage() {
    return (
        <>
            <div className="footer-page" id="footer-page">
                <header className='header-footer'>
                    <div className="nav-footer">
                        <FontAwesomeIcon icon={faBlog} className="footer-icon" />
                        <span id="contact-footer-name">Name Of Site</span>
                    </div>
                </header>

                <nav className="footer-nav-bar">

                    <p className="kfglfm">Links</p>

                        <span className="footer-nav-item">
                            <SamePageLink
                                to="body"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                className="footer-links"
                            >
                                <FontAwesomeIcon icon={faHome} className="footer-icon" />
                                Home
                            </SamePageLink>
                        </span>
                        <span className="footer-nav-item">
                            <SamePageLink
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                className="footer-links"
                            >
                                <FontAwesomeIcon icon={faUserAlt} className="footer-icon" />
                                About
                            </SamePageLink>
                        </span>
                        <span className="footer-nav-item">
                            <Link
                                activeClass="active"
                                to="/bookSearch"
                                className="footer-links"
                            >
                                <FontAwesomeIcon icon={faSearch} className="footer-icon" />
                                Search
                            </Link>
                        </span>
                        <span className="footer-nav-item">
                            <SamePageLink
                                to="book-section"
                                spy={true}
                                smooth={true}
                                duration={2000}
                                className="footer-links"
                            >
                                <FontAwesomeIcon icon={faBook} className="footer-icon" />
                                Books
                            </SamePageLink>
                        </span>
                        <span className="footer-nav-item">
                            <SamePageLink
                                to="contact-section"
                                spy={true}
                                smooth={true}
                                duration={3000}
                                className="footer-links"
                            >
                                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                                Contact
                            </SamePageLink>
                        </span>

                    </nav>

                    <div>
                        <p className="kfglfm">Sponsors</p>
                        <p className="footer-nav-item">Email.js</p>
                        <p className="footer-nav-item">SweetAlert</p>
                        <p className="footer-nav-item">FontAwesome</p>
                        <p className="footer-nav-item">Google Books</p>
                    </div>

                    <div className="center">
                        <p>Created by Saviour | Designed by Daniel</p>
                        <p>All Rights Reserved</p>
                    </div>
            </div>
        </>
    )
}

export default FooterPage;