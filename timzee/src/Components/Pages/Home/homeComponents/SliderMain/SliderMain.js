import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './sliderMain.css'
function SliderMain() {

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





  const hotelCards = [
    {
      title:'salam',
      info: 'Studio Room',
      price: 'Lorem ipsum dolor sit amet, consectur dolori',
      link: 'USD 50/Day',
      image: 'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',

    },
    {
        title:'salam',
        info: 'Studio Room',
        price: 'Lorem ipsum dolor sit amet, consectur dolori',
        link: 'USD 50/Day',
      image: 'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',

     },
    {
        title:'salam',
        info: 'Studio Room',
        price: 'Lorem ipsum dolor sit amet, consectur dolori',
        link: 'USD 50/Day',
      image: 'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
     },
    {
        title:'salam',
        info: 'Studio Room',
        price: 'Lorem ipsum dolor sit amet, consectur dolori',
        link: 'USD 50/Day',
      image: 'https://images.unsplash.com/photo-1559508551-44httpsbff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  
    },
  ]

    return (
        <div id="Slider">
            <div className="sliderBody">
                <Slider {...settings}>
               {hotelCards.map(slide=>
                
                <div style={{backgroundImage:`url(${slide.image})`}} key={slide.title.toString()}   className="slick-1">
                    <div  className="slick-1-body">
                        <h2>Alertzy</h2>
                        <p className="p-0">{slide.title}</p>
                        <div className="info">{slide.info}</div>
                        <div className="offer-price">
                            <span className="price">$ {slide.price}</span>
                        </div>
                        <div className="explore">
                            <a href="#">{slide.link}</a>
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