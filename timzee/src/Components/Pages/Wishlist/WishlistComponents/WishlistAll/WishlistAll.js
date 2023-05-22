import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'; 
import './WishlistAll.css'

function WishlistAll(params) {
    let wishlists = JSON.parse(localStorage.getItem('wishlist'));
    const count=JSON.parse(localStorage.getItem('wishlist')).length;
    const subtotal = wishlists?.reduce((sum,item)=>sum + (item.count * item.price),0) ?? 0;

    //plus basket
    function plusWishlist(elem) {
       
       let wishlist = JSON.parse(localStorage.getItem('wishlist'));
       wishlist.forEach(element => {
           if (element.Id == elem.Id) {
               element.count += 1;
           }
       });
       localStorage.removeItem('wishlist')
       localStorage.setItem('wishlist', JSON.stringify(wishlist))
       wishlists = JSON.parse(localStorage.getItem('wishlist'));
       window.location.reload();
   }

   //minus basket
   function minusWishlist(elem) {
       
       let wishlist = JSON.parse(localStorage.getItem('wishlist'));
       wishlist.forEach(element => {
           if (element.Id == elem.Id) {
               if (element.count > 1) {
                   element.count -= 1;
               }
           }
       });
       localStorage.removeItem('wishlist')
       localStorage.setItem('wishlist', JSON.stringify(wishlist))
       wishlists = JSON.parse(localStorage.getItem('wishlist'));
       window.location.reload();
   }

    //delete from basket
    function deleteWishlist(elem) {
       
       let wishlist = JSON.parse(localStorage.getItem('wishlist'));
       wishlist = wishlist.filter((item) => item.Id != elem.Id)
       localStorage.removeItem('wishlist')
       localStorage.setItem('wishlist', JSON.stringify(wishlist))
       wishlists = JSON.parse(localStorage.getItem('wishlist'));
       window.location.reload();
   }

   function clearWishlist(e) {
       
       localStorage.removeItem('wishlist')
       localStorage.setItem('wishlist', JSON.stringify([]))
       wishlists = JSON.parse(localStorage.getItem('wishlist'));
       
       window.location.reload();
   }
  return (
    
    <div id="allProducts">
    <div className="container">
   
<div className='col-lg-9'>
<div className="all-products">   
<button className='clear' onClick={(e) => clearWishlist(e)}>Clear Wishlist</button>
  {wishlists?.map((wishlist, index)=>(
      <div key={index} className="products">
      <div className="photo">
      <img  src={`data:image/jpeg;base64,${wishlist?.mainimage}`} alt="" />
      </div>
      <div className="info">
          <p className="m-0">{wishlist?.title}</p>
          <div className="price">
          <span className="m-0 ">${wishlist?.price}</span>
          <div className="number">
          <Link onClick={() => plusWishlist(wishlist)} className="plus">+</Link>
             <Link className='count'>{wishlist?.count}</Link>
              <Link  onClick={() => minusWishlist(wishlist)} className="minus" >-</Link>
          </div>
          <div className="Totalprice">
                                        <span>Total :</span>
                                        <span> ${wishlist?.count*wishlist?.price}</span>
                                    </div>
      </div>
      </div>
      <div className="others">
    
          <button className="delete" onClick={() => deleteWishlist(wishlist)}>
          <i className="fa-regular fa-circle-xmark"></i>
          </button>
      </div>
  </div>
  ))}


    </div>
</div>
  <div className='col-lg-3'>
  <div className="all-price">
        <div className="carttitle">
         <h2>Selected Products(<span className="showprice">{count}</span>)</h2>
        </div>
            <div className="cartside">
             <li><span>Total Count:</span> <span className="totalcount">{count}</span></li>
             <hr />
             <li><span>Total Price:</span> <span className="totalprice">${subtotal}</span></li>
             <Link to={"/basket"} className="buton">Go To Basket</Link>
            </div>
     </div> 
  </div>
    
</div>
</div>
  )
}

export default WishlistAll