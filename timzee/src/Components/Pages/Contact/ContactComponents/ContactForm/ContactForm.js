import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <div id="ContactForm">
            <div className="container">
                <div className="ContactFormAll">
                    <h4> Contact Form </h4>
                    <form >
                      <div className="inputs">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone"/>
                      </div>
                        <textarea placeholder="Message" cols="30" rows="10"></textarea>
                        <div className="submit">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ContactForm