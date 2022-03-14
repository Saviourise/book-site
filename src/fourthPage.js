import { useState } from 'react';
import './fourthPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faExternalLinkSquare, faShareAltSquare, faUserCircle } from '@fortawesome/free-solid-svg-icons'


function FourthPage() {
    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valueNumber, setValueNumber] = useState('')
    const [valueMessage, setValueMessage] = useState('')

    const handleChangeName = (event) => {
        setValueName(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setValueEmail(event.target.value)
    }

    const handleChangeNumber = (event) => {
        setValueNumber(event.target.value)
    }

    const handleChangeMessage = (event) => {
        setValueMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + valueName);
        setValueName('')
        setValueEmail('')
        setValueNumber('')
        setValueMessage('')
        event.preventDefault();
    }
    return (
        <>
            <div className='contact-section'>
                <header className='contact-header'>
                    <p className='contact-header-text'>Contact Us</p>
                </header>

                <section className='form-contact-section'>
                    <form onSubmit={handleSubmit} className='form-section'>
                        <input required type="text" className='name-input input' placeholder='Full Name' value={valueName} onChange={handleChangeName} />
                        <input required type="tel" className='number-input input' placeholder='Phone Number' value={valueNumber} onChange={handleChangeNumber} />

                        <br></br>
                        <input required type="email" className='email-input input' placeholder='Email Address' value={valueEmail} onChange={handleChangeEmail} />
                        <br></br>
                        <textarea required value={valueMessage} className='message-input input' rows={70} placeholder='Tell us your concern' onChange={handleChangeMessage}></textarea>
                        <br></br>
                        <input type="submit" value="Submit" className='submit-input input' />
                    </form>
                    <div className='form-2-section'>
                        <div className='form-2-section-img'>
                        <FontAwesomeIcon icon={faUserCircle} className='big-ala' />
                        </div>
                        <div className='form-2-section-contact'>
                            <div className='div-icons'>
                                <FontAwesomeIcon icon={faPhoneSquareAlt} className='ala' />
                                <FontAwesomeIcon icon={faExternalLinkSquare} className='ala' />
                                <FontAwesomeIcon icon={faShareAltSquare} className='ala' />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default FourthPage;