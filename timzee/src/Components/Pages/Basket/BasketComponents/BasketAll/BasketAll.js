import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'; 
import './BasketAll.css'

function BasketAll(params) {

    let baskets = JSON.parse(localStorage.getItem('basket'));

    const subtotal = baskets?.reduce((sum,item)=>sum + (item.count * item.price),0) ?? 0;
     //plus basket
     function plusBasket(elem) {
        
        let basket = JSON.parse(localStorage.getItem('basket'));
        basket.forEach(element => {
            if (element.Id == elem.Id) {
                element.count += 1;
            }
        });
        localStorage.removeItem('basket')
        localStorage.setItem('basket', JSON.stringify(basket))
        baskets = JSON.parse(localStorage.getItem('basket'));
        window.location.reload();
    }

    //minus basket
    function minusBasket(elem) {
        
        let basket = JSON.parse(localStorage.getItem('basket'));
        basket.forEach(element => {
            if (element.Id == elem.Id) {
                if (element.count > 1) {
                    element.count -= 1;
                }
            }
        });
        localStorage.removeItem('basket')
        localStorage.setItem('basket', JSON.stringify(basket))
        baskets = JSON.parse(localStorage.getItem('basket'));
        window.location.reload();
    }

     //delete from basket
     function deleteBasket(elem) {
        
        let basket = JSON.parse(localStorage.getItem('basket'));
        basket = basket.filter((item) => item.Id != elem.Id)
        localStorage.removeItem('basket')
        localStorage.setItem('basket', JSON.stringify(basket))
        baskets = JSON.parse(localStorage.getItem('basket'));
        window.location.reload();
    }

    function clearBasket(e) {
        e.preventDefault()
        localStorage.removeItem('basket')
        localStorage.setItem('basket', JSON.stringify([]))
        baskets = JSON.parse(localStorage.getItem('basket'));
        params.ren('');
        window.location.reload();
    }
    return (
        <div id="Basket">
            <div className="container">
                <div className="basketAll">

                    <div className="CartProducts ">
                        <div className="Cartheading">
                            <h4> Products </h4>
                           <button onClick={(e) => clearBasket(e)}>Clear Basket</button>
                        </div>
                        {baskets.map((basket, index) =>
                            <div key={index} className="SingleCart">
                                <div className="CloseButton">
                                    
                               <button onClick={() => deleteBasket(basket)}><i class="fa-solid fa-xmark"></i></button> 
                                </div>
                                <div className="cartItems">
                                    <a href="#">
                                        <img src={`data:image/jpeg;base64,${basket?.mainimage}`} alt="" />
                                    </a>
                                </div>
                                <div className="productInfo">
                                    <a href="#">{basket?.title}</a>
                                    <p className="m-0 price">${basket?.price}</p>
                                    
                                        <div className="product-option">
                                           
                                            <span>{basket?.color},</span>
                                            <span>{basket?.material}</span>
                                        </div>

                                  
                                    <div className="quantity">
                                        <Link onClick={() => minusBasket(basket)} className=" qty"  >-</Link>
                                        <Link className="qtytext"  >{basket?.count}</Link>
                                        <Link  onClick={() => plusBasket(basket)} className="qty"  >+</Link>
                                    </div>
                                    <div className="Totalprice">
                                        <span>Total :</span>
                                        <span> ${basket?.count*basket?.price}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                       
                    </div>
                    <div className="shipping-section ">
                        <div className="ordersummary">
                            <h4>Order Summary</h4>
                            <div className="subtotal">
                                <span>Subtotal :</span>
                                <span>${subtotal}</span>
                            </div>
                            <em>Shipping, taxes, and discounts will be calculated at checkout.</em>
                            <div className="checkout">
                                <Link to={'/checkout'} >Proceed to Checkout</Link>
                                <Link to={'/shop'} >Continue Shopping</Link>
                            </div>
                          
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BasketAll