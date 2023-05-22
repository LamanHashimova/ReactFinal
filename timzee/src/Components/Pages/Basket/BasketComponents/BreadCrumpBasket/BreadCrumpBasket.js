import React from 'react'
import './BreadCrumpBasket.css'

function BreadCrumpBasket() {
  return (
    <div id="BreadCrump">
        <div className="container">
            <div className="BreadCrump-all">
                <h1>YOUR SHOPPING CART</h1>
                <a href="#">Home</a><span> / </span><span> Your Shopping Cart</span>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumpBasket