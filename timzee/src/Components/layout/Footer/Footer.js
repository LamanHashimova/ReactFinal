import React from 'react'
import './Footer.css'
import backImageFooter from '../../../Assets/Images/footer-img_052c2e02-57e9-473b-a7a4-2668c5104fbd.jpg'



function Footer() {
  return (   
    <div id="Footer" style={{backgroundImage:`url(${backImageFooter})`}}>
    <div className="container">
        <div className="row">
            <div className="singleFooterArea col-lg-3">
                <h5> Help </h5>
                <ul>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Information</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Shipping Details</a></li>
                </ul>
            </div>
            <div className="singleFooterArea col-lg-3">
                <h5> Support </h5>
                <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Refunds & Returns</a></li>
                    <li><a href="#">Deliveries</a></li>
                </ul>
            </div>
            <div className="singleFooterArea col-lg-3">
                <h5> Information </h5>
                <ul>
                    <li><a href="#">Search Terms</a></li>
                    <li><a href="#">Advanced Search</a></li>
                    <li><a href="#">Help & Faq's</a></li>
                    <li><a href="#">Store Location</a></li>
                    <li><a href="#">Orders & Returns</a></li>
                </ul>
            </div>
            <div className="singleFooterArea col-lg-3">
                <h5> Address </h5>
                <ul>
                    <li><address>
                        <i className="fa-solid fa-house-chimney"></i>
                        No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                    </address></li>
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        0000 - 123 - 456789</li>
                    <li><a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        info@example.com
                    </a></li>
               
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer