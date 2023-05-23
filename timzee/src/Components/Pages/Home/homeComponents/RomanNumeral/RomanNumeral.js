import React from 'react'
import backImageRoman from '../../../../../Assets/Images/Bg2.webp'
import './RomanNumeral.css'

function RomanNumeral() {
  return (
    <div id="RomanNumeral" style={{backgroundImage:`url(${backImageRoman})`}}>
        <div className="RomanBody">
            <h4>Roman or Numeral</h4>
            <p>Limited Edition of 200 pieces world-wide. Watch Big Bang, 361.PE.2010.RW.1104 The stainless steel case and band are thick and prominent, creating a durable feel on the wrist. However, the dial is much more whimsical.
                <br/>
                <br/>
                Accurate and Comfortable Imported Japanese quartz movement ensures precise time keeping. Its classic design of multi display watches and comfortable silicone material can provide to users excellent outdoor experiences.
                </p>
                <a href="#">Shop Now</a>
        </div>
    </div>
  )
}

export default RomanNumeral