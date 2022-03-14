import { Component } from 'react'
import './bookPage.css'
import request from 'superagent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
    Link
} from "react-router-dom";

const MySwal = withReactContent(Swal)

class BookPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            books: [],
            sort: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.search(this.state.value)
    }

    search = (item) => {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: item })
            .query({ maxResults: 40 })
            .then((data) => {
                const cleanData = this.cleanData(data)
                this.setState({
                    books: cleanData
                })
                //console.log(data)
            })
            .catch(async (error) => {
                await MySwal.fire({
                    title: "Error",
                    text: "An error occurred while performing the search, please try again",
                    icon: 'error'
                  })
            })
    }

    handleSort = (event) => {
        this.setState({
            sort: event.target.value
        })
    }

    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }

            if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: '' }
            }

            if (book.volumeInfo.hasOwnProperty('authors') === false) {
                book.volumeInfo['authors'] = ['Not Available']
            }
            return book;
        })

        return cleanedData;
    }


    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            if (this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
            }

            else if (this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
            }
        })
        return (
            <>
                <div className='header-book-search'>
                    <FontAwesomeIcon icon={faBook} className="jfj" />
                    <p className='book-search-p'>Book Search</p>
                </div>
                <form onSubmit={this.handleSubmit} className='form-section-book'>
                    <input required type="text" placeholder='Search For Book' className='search-input' value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Search" className='submit-btn' />
                    <select defaultValue="Sort" onChange={this.handleSort} className='sort-btn'>
                        <option disabled value='Sort' className='option'>Sort</option>
                        <option value='Newest' className='option'>Newest</option>
                        <option value='Oldest' className='option'>Oldest</option>
                    </select>
                </form>
                <section className='book-list-container'>
                    {
                        sortedBooks.length != 0 ?
                        sortedBooks.map((book, i) => {
                            return (
                                <section className='book-card' key={i}>
                                    <a className="h4-link" href={book.volumeInfo.previewLink} target="_blank">
                                        <img src={book.volumeInfo.imageLinks.thumbnail} alt='Could not generate image' />
                                        <div className='desc'>
                                            <h4 className="h4">{book.volumeInfo.title}</h4>
                                            <h5 className='h4'>Author: {book.volumeInfo.authors[0]}</h5>
                                            <p className="h4">Published: {book.volumeInfo.publishedDate === '0000' ? 'Not Available' : book.volumeInfo.publishedDate.substring(0, 4)}</p>
                                        </div>
                                    </a>
                                </section>
                            )
                        }) : 
                            <section className='nothing'>Uh Oh! This Place Is Empty!!</section>
                        
                    }
                </section>
            </>
        )
    }

}

export default BookPage;