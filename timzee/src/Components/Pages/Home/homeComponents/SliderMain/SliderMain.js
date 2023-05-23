import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './sliderMain.css'
import axios from 'axios';
function SliderMain() {
    const [slider, setSlider] = useState([]);
    const loadSlider = async () => {
        const result = await axios.get("api/Sliders/GetAllSliders");
        setSlider(result.data)

    };
    useEffect(() => {
        window.scrollTo(0, 0);
        loadSlider();
   
    }, []);
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: true,
        autoplay: true,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
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
        <div id="Slider">
            <div className="sliderBody">
                <Slider {...settings}>
               {slider?.map(slide=>
                
                <div style={{ backgroundImage: `url(${slide?.image})` }} className="slick-1" key={slide?.image}>
                    <div  className="slick-1-body">
                        <h2>{slide.mainTitle}</h2>  
                        <p className="p-0">{slide?.subtitle}</p>
                        <div className="info">{slide?.sliderInfo}</div>
                        <div className="offer-price">
                            <span className="price">${slide?.price}</span>
                        </div>
                        <div className="explore">
                            <a href="#">Explore Service</a>
                        </div>
                    </div>
                </div>
                )} 

                {/* <div className="slick-1">
                    <div className="slick-1-body">
                        <h2>Alertzy</h2>
                        <p className="p-0">Exclusive Offer -20% Off This Week</p>
                        <div className="info">Expanding the offering is the choice between a leather strap or a metal bracelet, bringing the total new look. Black-tone stainless steel case with a black rubber strap. Scratch free sapphire crystal.</div>
                        <div className="offer-price">
                            <span className="price">$ 250.00</span>
                        </div>
                        <div className="explore">
                            <a href="#">EXPLORE SERVICES</a>
                        </div>
                    </div>
                </div>
                <div className="slick-2">
                    <div className="slick-2-body">
                        <h2>Gertious</h2>
                        <p className="p-0">Exclusive of Sales Tax</p>
                        <div className="info">The watch bracelet gives a much far colder personality.Dress watch style. Swiss made luxury watch. Stainless steel case with a brown leather strap. Scratch resistant sapphire crystal.</div>
                        <div className="offer-price">
                            <span className="old-price">$ 410.00</span>
                            <span className="price">$ 250.00</span>
                        </div>
                        <div className="explore">
                            <a href="#">EXPLORE SERVICES</a>
                        </div>
                    </div>

                </div>
                <div className="slick-3">
                    <div className="slick-3-body">
                        <h2>Gorgeus</h2>
                        <p className="p-0">2019</p>
                        <div className="info">One of the most advanced watch released during 2019. True style that always remains in fashion. Timepiece is the perfect complement to any outfit.</div>

                        <div className="explore">
                            <a href="#">EXPLORE SERVICES</a>
                        </div>
                    </div>
                </div> */}
                </Slider>
                
            </div>

        </div>
    )
}

export default SliderMain