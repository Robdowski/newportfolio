import React from 'react'
import '../css/Contact.css'

const Contact = (props) => {
    return (
        <div className={props.modal === true ? '' : 'hidden'}>
            <h2>Contact Me</h2>
            <form action="https://formcarry.com/s/A1fDSooRTOQ" method="POST" accept-charset="UTF-8" >
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' />
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' />
                <label htmlFor='message'>Message: </label>
                <input type='text' name='message' />
            </form>
        </div>
    )
}

export default Contact
