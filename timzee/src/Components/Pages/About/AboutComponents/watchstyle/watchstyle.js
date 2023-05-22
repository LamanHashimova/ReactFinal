import React from 'react'
import './watchstyle.css'

function watchstyle() {
  return (
    <div id="watchstyle">
    <div className="container">
        <div className="row">
           <div className="col-lg-6">
            <div className="WatchInfo">
                <h4>Extraordinary watch style</h4>
                <h6>Your Passion is Watch Products</h6>
                <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus. Curabitur ullamcorper ultricies nisi.</p>
                <ul>
                    <li>Latest Designs</li>
                    <li>Brands that Matter</li>
                    <li>Quality that Inspires </li>
                </ul>
            </div>
           </div>
            <div className="col-lg-6">
                <div className="WatchImg">
                <img src={require('../../../../../Assets/Images/image1.webp')} alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default watchstyle