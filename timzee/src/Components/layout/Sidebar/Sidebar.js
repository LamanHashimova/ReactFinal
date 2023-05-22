import React from 'react'
import './Sidebar.css'

function Sidebar({ isOpen, onClose }) {
    const sidebarStyle = {
        width: isOpen ? '20%' : '0%',
      };
      
  return (
    <div className="sidebar" id="basket-sidebar"  style={sidebarStyle}>
    <div className="headerside">
     <h4>Your Cart</h4>
     <button className="close" onClick={onClose}>
         <i className="fa-solid fa-xmark"></i>
     </button>
    </div>
    <div className="SingleSideCart">
     <div className="SideImg">
         <img src="/assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_medium.avif" alt=""/>
     </div>
     <div className="SideContent">
         <a href="#"><h6>Analog Numeral</h6></a>
         <p className="mb-0">white</p>
       <span className="money">$3,000.00</span>
       <div className="quantity">
         <input  className=" qty" type="button" value="-"/>
         <input className="qtytext" type="text" value="1"/ >
         <input className="qty" type="button" value="+"/>
     </div>
     </div>
    </div>
    <div className="SingleSideCart">
     <div className="SideImg">
         <img src="/assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_medium.avif" alt=""/>
        
     </div>
     <div className="SideContent">
         <a href="#"><h6>Analog Numeral</h6></a>
         <p className="mb-0">white</p>
       <span className="money">$3,000.00</span>
       <div className="quantity">
         <input  className=" qty" type="button" value="-" />
         <input className="qtytext" type="text" value="1"/ >
         <input className="qty" type="button" value="+"/>
     </div>
     </div>
    </div>
    <hr/>
    <div className="Total">
     <p className="mb-0 subtotal">Total </p>
     <span className="subtotal"> $3,000.00</span>
    </div>
    <hr/>
    <div className="GotoCheckout">
     <a href="#">Proceed to Checkout </a>
     <a href="#">View Cart  </a>
    </div>
   
 </div>
 
  )
}
export default Sidebar