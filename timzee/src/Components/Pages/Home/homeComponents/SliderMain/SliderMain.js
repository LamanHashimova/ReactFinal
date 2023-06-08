import React, { useEffect, useState,useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './sliderMain.css'
import axios from 'axios';
import api from '../../../../../agent/api'
function SliderMain() {
    const [slider, setSlider] = useState([]);
    const [base64, setBase64] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
 
    const handleSlideChange = () => {
        setTimeout(() => {
          const activeSlide = sliderRef.current.querySelector('.slick-current');
    
          if (activeSlide) {
            const slides = Array.from(sliderRef.current.querySelectorAll('.slick-slide'));
    
            slides.forEach(slide => {
              const slideIndex = parseInt(slide.getAttribute('data-index'), 10);
              const slideType = slider[slideIndex]?.sliderType;
    
              if (slideIndex !== parseInt(activeSlide.getAttribute('data-index'), 10)) {
                slide.querySelector('.Bodyy').style.left = slideType === 'left' ? '15%' : slideType === 'right' ? '50%' : '20%';
              } else {
                slide.querySelector('.Bodyy').style.left = slideType === 'left' ? '20%' : slideType === 'right' ? '15%' : '20%';
              }
            });
          }
        }, 0);
      };

    console.log({slider});

    const loadSlider = async () => {
        const result = await api.get("api/Sliders/GetAllSliders");
        setSlider(result.data)
        console.log(result.data)
    setBase64("data:image/jpeg;base64,");

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
        slidesToScroll: 1,
        initialSlide: true,
        autoplay: false,
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
            <div className="sliderBody"  ref={sliderRef}>
                <Slider {...settings} beforeChange={handleSlideChange}>
                {slider?.map((slide, index) => (

            <div className="slick-1" key={slide?.id}>
              <div className="slick-1-body">
                <img src={`${base64}${slide?.image}`} />
                {slide?.sliderType==="left"}
                <div
             
                  style={
                    currentSlide === index
                      ? {
                          top: "20%",
                          left:
                            slide?.sliderType === "left"
                              ? "20%"
                              : slide?.sliderType === "right"
                              ? "65%"
                              : slide?.sliderType === "center"
                              ? "20%"
                              : "20%",
                          textAlign: slide?.sliderType === "center" ? "center" : "left",
                        }
                      : {
                          top: "20%",
                          right:
                            slide?.sliderType === "left"
                              ? "20%"
                              : slide?.sliderType === "right"
                              ? ""
                              : slide?.sliderType === "center"
                              ? "20%"
                              : "20%",
                              textAlign: slide?.sliderType === "center" ? "center" : "left",
                        }
                  }
                  className="Bodyy"
                >
                  <h2>{slide.mainTitle}</h2>
                  <p className="p-0">{slide?.saleInfo}</p>
                  <div className="info">{slide?.subtitle}</div>
                  <div className="offer-price">
                    <span className="price">${slide?.price}</span>
                  </div>
                  <div className="explore">
                    <a href="#">Explore Service</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

                
                </Slider>
                
            </div>

        </div>
    )
}

export default SliderMain