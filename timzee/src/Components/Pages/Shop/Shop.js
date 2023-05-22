import React from 'react'
import { useEffect } from 'react';

import BreadCrump from './ShopComponents/BreadCrump/BreadCrump.js'
import AllShop from './ShopComponents/ShopAll/ShopAll.js'

function Shop() {
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    window.scrollTo(0, currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
           <BreadCrump />
           <AllShop />
    </div>
  )
}

export default Shop