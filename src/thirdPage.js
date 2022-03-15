import './thirdPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link
} from "react-router-dom";
import { faBookAtlas, faBookBible, faFilm, faLandmark, faMicroscope, faPalette, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

function ThirdPage() {
    return (
        <>
            <div className='book-section' id='book-section'>
                <header className='book-header'>
                    <p className='book-header-text'>Books</p>
                    <p className='book-header-subtitle'>Browse Through Our Collection Of Books</p>
                </header>
                <div className='books-list'>
                    <div className='item-group'>
                        <div className='books-list-items'>
                            <Link
                                to={"/bookSearch/science"}
                            >
                                <div className='icon-item'>
                                    <FontAwesomeIcon icon={faMicroscope} className="book-icon" />
                                </div>
                                <div className='icon-text'>
                                        Science
                                </div>
                            </Link>
                        </div>
                        <div className='books-list-items'>
                            <Link
                                to={"/bookSearch/art"}
                            >
                                <div className='icon-item'>
                                    <FontAwesomeIcon icon={faPalette} className="book-icon" />
                                </div>
                                <div className='icon-text'>
                                    Art
                                </div>
                            </Link>
                        </div>
                        <div className='books-list-items'>
                            <Link
                                to={"/bookSearch/business"}
                            >
                                <div className='icon-item'>
                                    <FontAwesomeIcon icon={faLandmark} className="book-icon" />
                                </div>
                                <div className='icon-text'>
                                    Business
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='item-group'>
                        <div className='books-list-items'>
                            <Link
                                to={"/bookSearch/comic"}
                            >
                                <div className='icon-item'>
                                    <FontAwesomeIcon icon={faFilm} className="book-icon" />
                                </div>
                                <div className='icon-text'>
                                    Comic
                                </div>
                            </Link>
                        </div>
                        <div className='books-list-items'>
                            <Link
                                to={"/bookSearch/research"}
                            >
                                <div className='icon-item'>
                                    <FontAwesomeIcon icon={faBookAtlas} className="book-icon" />
                                </div>
                                <div className='icon-text'>
                                    Research
                                </div>
                            </Link>
                        </div>
                        <div className='books-list-items'>
                            <Link
                                to={"/bookSearch/religion"}
                            >
                                <div className='icon-item'>
                                    <FontAwesomeIcon icon={faBookBible} className="book-icon" />
                                </div>
                                <div className='icon-text'>
                                    Religion
                                </div>
                            </Link>
                        </div>
                    </div>

                    <button className="btn-3">
                        <Link
                            className="go-book-text"
                            to="/bookSearch"
                        >
                            Search Instead
                            <FontAwesomeIcon icon={faSignInAlt} className="bookjfj" />
                        </Link>
                    </button>

                </div>
            </div>
        </>
    )
}

export default ThirdPage;