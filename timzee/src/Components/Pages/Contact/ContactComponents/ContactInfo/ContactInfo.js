import React from 'react'
import './ContactInfo.css'

function ContactInfo() {
  return (
    <div id="ContactInfo">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="SingleContactInfo">
                    <div className="icon"><i className="fa-solid fa-phone"></i></div>
                   <h4>Phone</h4>
                   <div className="MainInfo">
                    <p className="m-0">0000 - 123 - 456789</p>
                    <p className="m-0">0000 - 123 - 456789</p>
                   </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="SingleContactInfo">
                    <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                   <h4>Email</h4>
                   <div className="MainInfo">
                    <p className="m-0">info@example.com</p>
                    <p className="m-0">support@example.com</p>
                   </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="SingleContactInfo">
                    <div className="icon"><i className="fa-solid fa-location-arrow"></i></div>
                   <h4>Address</h4>
                   <div className="MainInfo">
                    <p className="m-0">No: 58 A, East Madison Street,
                        Baltimore, MD, USA 4508</p>
                    
                   </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default ContactInfo