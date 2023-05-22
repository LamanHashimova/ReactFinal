import React from 'react'
import { Link } from 'react-router-dom';
import './NotBasket.css'

function NotBasket() {
  return (
  <div>
 
				 
				 
					<div className="col-md-12">
					
							<div className="card">
						
						<div className="card-body cart">
								<div className="col-sm-12 empty-cart-cls text-center">
									<img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid "/>
									<h3><strong>Your Cart is Empty</strong></h3>
									<h4>Add something to make me happy :)</h4>
									<Link to={'/shop'} className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
									
								
								</div>
						</div>
				</div>
						
					
		
				 
				
				
				</div>
  </div>
  )
}

export default NotBasket