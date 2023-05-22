import React from 'react'
import BreadCrump from './ContactComponents/BreadCrump/BreadCrumpContact.js'
import Location from './ContactComponents/Location/Location.js'
import ContactInfo from './ContactComponents/ContactInfo/ContactInfo.js'
import ContactForm from './ContactComponents/ContactForm/ContactForm.js'
function Contact() {
  return (
    <div>
        <BreadCrump />
        <Location />
        <ContactInfo />
        <ContactForm />
    </div>
  )
}

export default Contact