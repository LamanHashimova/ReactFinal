import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'; 
import './BasketAll.css'

function BasketAll(params) {

    let baskets = JSON.parse(localStorage.getItem('basket'));



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
                                    
                               <button onClick={() => deleteBasket(basket)}><i class="fa-solid fa-square-xmark"></i></button> 
                                </div>
                                <div className="cartItems">
                                    <a href="#">
                                        <img src={`data:image/jpeg;base64,${basket?.mainimage}`} alt="" />
                                    </a>
                                </div>
                                <div className="productInfo">
                                    <a href="#">{basket?.title}</a>
                                    <p className="m-0 price">${basket?.price}</p>
                                    <dl>
                                        <div className="product-option">
                                            <dt>Color: </dt>
                                            <dd>pink</dd>
                                        </div>

                                        <div className="product-option">
                                            <dt>Material: </dt>
                                            <dd>cotton</dd>
                                        </div>
                                    </dl>
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
                        {/* <div className="SingleCart">
                            <div className="cartItems">
                                <a href="#">
                                    <img src={require('../../../../../Assets/Images/watch2_02f3b74c-51b8-49b6-b632-67a2abc70b38_768x.webp')} alt="" />
                                </a>
                            </div>
                            <div className="productInfo">
                                <a href="#">Roman Semi</a>
                                <p className="m-0 price">$200.00</p>
                                <dl>
                                    <div className="product-option">
                                        <dt>Color: </dt>
                                        <dd>pink</dd>
                                    </div>

                                    <div className="product-option">
                                        <dt>Material: </dt>
                                        <dd>cotton</dd>
                                    </div>
                                </dl>
                                <div className="quantity">
                                    <input className=" qty" type="button" value="-" />
                                    <input className="qtytext" type="text" value="1" />
                                    <input className="qty" type="button" value="+" />
                                </div>
                                <div className="Totalprice">
                                    <span>Total :</span>
                                    <span> $200.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="SingleCart">
                            <div className="cartItems">
                                <a href="#">
                                    <img src={require('../../../../../Assets/Images/watch2_02f3b74c-51b8-49b6-b632-67a2abc70b38_768x.webp')} alt="" />
                                </a>
                            </div>
                            <div className="productInfo">
                                <a href="#">Roman Semi</a>
                                <p className="m-0 price">$200.00</p>
                                <dl>
                                    <div className="product-option">
                                        <dt>Color: </dt>
                                        <dd>pink</dd>
                                    </div>

                                    <div className="product-option">
                                        <dt>Material: </dt>
                                        <dd>cotton</dd>
                                    </div>
                                </dl>
                                <div className="quantity">
                                    <input className=" qty" type="button" value="-" />
                                    <input className="qtytext" type="text" value="1" />
                                    <input className="qty" type="button" value="+" />
                                </div>
                                <div className="Totalprice">
                                    <span>Total :</span>
                                    <span> $200.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="SingleCart">
                            <div className="cartItems">
                                <a href="#">
                                    <img src={require('../../../../../Assets/Images/watch2_02f3b74c-51b8-49b6-b632-67a2abc70b38_768x.webp')} alt="" />
                                </a>
                            </div>
                            <div className="productInfo">
                                <a href="#">Roman Semi</a>
                                <p className="m-0 price">$200.00</p>
                                <dl>
                                    <div className="product-option">
                                        <dt>Color: </dt>
                                        <dd>pink</dd>
                                    </div>

                                    <div className="product-option">
                                        <dt>Material: </dt>
                                        <dd>cotton</dd>
                                    </div>
                                </dl>
                                <div className="quantity">
                                    <input className=" qty" type="button" value="-" />
                                    <input className="qtytext" type="text" value="1" />
                                    <input className="qty" type="button" value="+" />
                                </div>
                                <div className="Totalprice">
                                    <span>Total :</span>
                                    <span> $200.00</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="shipping-section ">
                        <div className="ordersummary">
                            <h4>Order Summary</h4>
                            <div className="subtotal">
                                <span>Subtotal :</span>
                                <span>$2,700.00</span>
                            </div>
                            <em>Shipping, taxes, and discounts will be calculated at checkout.</em>
                            <div className="checkout">
                                <Link to={'/checkout'} >Proceed to Checkout</Link>
                            </div>
                            <div className="shipping">
                                <div className="shippingbutton">
                                    Get shipping estimates
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className="shippingcalculator">
                                    <div className="Adress">
                                        <label for="adressInfo">Country</label>
                                        <select name="adressInfo" >
                                            <option value="">Afghanistan</option>
                                            <option value="">Åland Islands</option>
                                            <option value="">Albania</option>
                                            <option value="">Algeria</option>
                                            <option value="">Andorra</option>
                                            <option value="">Angola</option>
                                            <option value="">Anguilla</option>
                                            <option value="">Argentina</option>
                                            <option value="">Armenia</option>
                                            <option value="">Aruba</option>
                                            <option value="">Ascension Island</option>
                                            <option value="">Australia</option>

                                        </select>
                                    </div>
                                    <div className="Adress">
                                        <label for="adressInfo">State</label>
                                        <select name="adressInfo" >
                                            <option value="">Alabama</option>
                                            <option value="">Alaska</option>
                                            <option value="">American Samoa</option>
                                            <option value="">Arizona</option>
                                            <option value="">Arkansas</option>
                                            <option value="">Angola</option>
                                            <option value="">Anguilla</option>
                                            <option value="">Argentina</option>
                                            <option value="">Armenia</option>
                                            <option value="">Aruba</option>
                                            <option value="">Ascension Island</option>
                                            <option value="">Australia</option>

                                        </select>
                                    </div>
                                    <div className="Adress">
                                        <label for="adressInfo">Zip/Postal Code</label>
                                        <input className="Zip" type="text" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BasketAll