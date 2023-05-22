import React, { useState } from 'react'
import BreadCrumpWishlist from './WishlistComponents/BreadCrumpWishlist/BreadCrumpWishlist.js'
import WishlistAll from './WishlistComponents/WishlistAll/WishlistAll.js'
import NotWishlist from './WishlistComponents/NotWishlist/NotWishlist.js'
function Wishlist() {
    const [forren, setForren] = useState();
    let wishlist;
      let tickets = JSON.parse(localStorage.getItem('wishlist'));
      if (tickets?.length === 0 || tickets == null) {
        wishlist = <NotWishlist />
      } else {
        wishlist = <WishlistAll ren={setForren} />
      }
  return (
    <div>
    <BreadCrumpWishlist />
    {wishlist}
</div>
  )
}

export default Wishlist