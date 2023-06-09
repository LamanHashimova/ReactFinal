import React from 'react'
import { useEffect } from 'react';
import SliderMain from './homeComponents/SliderMain/SliderMain.js'
import Banner from './homeComponents/Banner/Banner.js'
import RomanNumeral from './homeComponents/RomanNumeral/RomanNumeral.js'
import Collection from './homeComponents/Collection/Collection.js'
import ProductCategory from './homeComponents/ProductCategory/ProductCategory.js'
import NewsLetter from './homeComponents/NewsLetter/NewsLetter.js'
import Experience from './homeComponents/Experience/Experience.js'
import WordsSlider from './homeComponents/WordsSlider/WordsSlider.js';
import Product from './homeComponents/Product/Product.js'

function Home() {
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
      <SliderMain />
      <Banner />
      <Product />
      <RomanNumeral />
      <Collection />
      <WordsSlider />
      <ProductCategory />
      <NewsLetter />
      <Experience />
    </div>
  )
}

export default Home