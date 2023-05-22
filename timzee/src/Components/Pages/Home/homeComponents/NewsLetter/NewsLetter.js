import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div id="NewsLetter">
        <div className="newsletterbody">
            <h2>Newsletter</h2>
            <div className="formNewsletter">
                <input type="text" placeholder="Your email address"/>
                <button>Subscribe</button>
            </div>
            <p className="m-0">Will be used in accordance with our Privacy policy</p>
            <div className="icons">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tumblr"></i>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter