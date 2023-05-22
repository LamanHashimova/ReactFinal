import React, { useState } from 'react'
import BreadCrumpBasket from './BasketComponents/BreadCrumpBasket/BreadCrumpBasket.js'
import BasketAll from './BasketComponents/BasketAll/BasketAll.js'
import NotBasket from './BasketComponents/NotBasket/NotBasket.js'


function Basket() {
  const [forren, setForren] = useState();
  let basket;
    let tickets = JSON.parse(localStorage.getItem('basket'));
    if (tickets?.length === 0 || tickets == null) {
        basket = <NotBasket />
    } else {
        basket = <BasketAll ren={setForren} />
    }
  return (
    <div>
        <BreadCrumpBasket /> 
       {basket}
           {/* <BasketAll />
   */}
    </div>
  )
}

export default Basket