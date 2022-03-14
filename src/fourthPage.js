import { useState } from 'react';
import './fourthPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faExternalLinkSquare, faShareAltSquare, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import{ init } from '@emailjs/browser';

init("Zl7guDgf_6tbfrFkr");

const MySwal = withReactContent(Swal)

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
        event.preventDefault();
        emailjs.send('service_g5xsofk', 'template_7xt671b', {
                from_name: valueName,
                from_email: valueEmail,
                from_phone: valueNumber,
                message: valueMessage,
            })
            .then(function(response) {
                //console.log('', response.status, response.text);
                await MySwal.fire({
                    title: "SUCCESS!",
                    subtitle: response.status,
                    text: response.text,
                    icon: 'success'
                  })
            }, function(error) {
                 await MySwal.fire({
                    title: "FAILED...",
                    subtitle: error.status,
                    text: error.text,
                    icon: 'error'
                  })
                //console.log('FAILED...', error);
            });
        setValueName('')
        setValueEmail('')
        setValueNumber('')
        setValueMessage('')
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