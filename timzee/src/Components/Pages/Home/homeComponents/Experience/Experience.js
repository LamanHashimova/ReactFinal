import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Experience.css'
function Experience() {


    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     arrows: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: true,
    //     autoplay: true,
    //     cssEase: "linear",

    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
  return (
    <div id="Experience">
    <div class="container">
        <div class="experience-all">
                <h2>The great experience</h2>
                <div class="experienceSlider">
                {/* <Slider {...settings}> */}
                    <div class="single-ex">
                    <img src={require('../../../../../Assets/Images/client1_6e709373-d4d6-4fee-905c-f47825f2b2a6.png')} alt=""/>
                    </div>
                    <div class="single-ex">
                    <img src={require('../../../../../Assets/Images/client3_50109f47-cc2b-438c-80d1-d5a6d59c4064.png')} alt=""/>
                    </div>
                    <div class="single-ex">
                    <img src={require('../../../../../Assets/Images/client2_f5e7538d-5a02-406d-9b6f-8fabc6e087f4.png')} alt=""/>
                    </div>
                    <div class="single-ex">
                    <img src={require('../../../../../Assets/Images/client5_a0da5652-9304-43c6-847c-92778aae48b7.png')} alt=""/>
                    </div>
                    <div class="single-ex">
                    <img src={require('../../../../../Assets/Images/client4_ff7c56f6-25ab-4616-904a-e1c7b2812066.png')} alt=""/>
                    </div>
                
                    {/* </Slider> */}
                </div>
        </div>
    </div>
</div>
  )
}

export default Experience