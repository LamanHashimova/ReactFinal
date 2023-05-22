import React from 'react'

import SliderMain from './homeComponents/SliderMain/SliderMain.js'
import Banner from './homeComponents/Banner/Banner.js'
import RomanNumeral from './homeComponents/RomanNumeral/RomanNumeral.js'
import Collection from './homeComponents/Collection/Collection.js'
import ProductCategory from './homeComponents/ProductCategory/ProductCategory.js'
import NewsLetter from './homeComponents/NewsLetter/NewsLetter.js'

function Home() {
  return (
    <div>
      <SliderMain />
      <Banner />
      <RomanNumeral />
      <Collection />
      <ProductCategory />
      <NewsLetter />
    </div>
  )
}

export default Home