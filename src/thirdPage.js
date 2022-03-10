import './thirdPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookAtlas, faBookBible, faClover, faLandmark, faMicroscope, faPalette } from '@fortawesome/free-solid-svg-icons'

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
                            <div className='icon-item'>
                                <FontAwesomeIcon icon={faMicroscope} className="book-icon" />
                            </div>
                            <div className='icon-text'>
                                Science
                            </div>
                        </div>
                        <div className='books-list-items'>
                            <div className='icon-item'>
                                <FontAwesomeIcon icon={faPalette} className="book-icon" />
                            </div>
                            <div className='icon-text'>
                                Art
                            </div>
                        </div>
                        <div className='books-list-items'>
                            <div className='icon-item'>
                                <FontAwesomeIcon icon={faLandmark} className="book-icon" />
                            </div>
                            <div className='icon-text'>
                                Business
                            </div>       
                        </div>
                    </div>
                    <div className='item-group'>
                        <div className='books-list-items'>
                            <div className='icon-item'>
                                <FontAwesomeIcon icon={faClover} className="book-icon" />
                            </div>
                            <div className='icon-text'>
                                Novel
                            </div>
                        </div>
                        <div className='books-list-items'>
                            <div className='icon-item'>
                                <FontAwesomeIcon icon={faBookAtlas} className="book-icon" />
                            </div>
                            <div className='icon-text'>
                                Research
                            </div>
                        </div>
                        <div className='books-list-items'>
                            <div className='icon-item'>
                                <FontAwesomeIcon icon={faBookBible} className="book-icon" />
                            </div>
                            <div className='icon-text'>
                                Religion
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
   )
}

export default ThirdPage;