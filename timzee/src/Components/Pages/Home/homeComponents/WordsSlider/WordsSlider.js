import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './WordsSlider.css'

function WordsSlider() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: true,
        autoplay: true,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div id="WordsSlider">
    <div class="container">
       <div class="word-all">
       <Slider {...settings}>
        <div class="word">
            <p class="m-0">‘‘The entire pursuit of a watchmaker should be the perfection of each and every watch.”</p>
            <span>- John Doe</span>
        </div>
        <div class="word">
            <p class="m-0">"Leo eget bibendum sodales, uis leo. Sed fringilla mauris sit amet nibh"</p>
            <span>Andrew Mark</span>
        </div>
        </Slider>
       </div>
    </div>

</div>
  )
}

export default WordsSlider