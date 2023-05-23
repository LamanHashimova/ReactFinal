import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Product.css'
import axios from 'axios';
function Product() {
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
    <div id="Products">
    <div class="container">
        <div class="product-heading">
            <h2>Popular In Store</h2>
        </div>
        <div class="tabmenu">
            <div class="tab">
                <button class="tablinks" onclick="openProduct(event, 'CLASSIC')">CLASSIC</button>
                <button class="tablinks" onclick="openProduct(event, 'MODERN')">MODERN</button>
                <button class="tablinks" onclick="openProduct(event, 'SPECIALEDITION')">SPECIAL EDITION</button>
              </div>
              
            
              <div id="CLASSIC" class="tabcontent active-tab">
                <div class="row">
                   
                    
                      <div class="owl-carousel">
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a id="add-to-basket" href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a id="OpenModall" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>                 
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                      </div>
                  
                  </div>
          
               </div>
              
              <div id="MODERN" class="tabcontent">
                <div class="row">
                   
                    
                    <div class="owl-carousel">
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                
                </div>
         </div>
              
              <div id="SPECIALEDITION" class="tabcontent">
                <div class="row">
                   
                    
                    <div class="owl-carousel">
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div class="product-single">
                            <div class="pro-img">
                                <a href="#">
                                    <div class="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                                <div class="Smallside">
                                    <a href="#"><i class="fa-solid fa-window-restore"></i></a>
                                    <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                                <div class="sale">
                                    <span>Sale</span>
                                </div>
                                <div class="save">
                                    <span>Save <b>20%</b></span>
                                </div>
                            </div>
                            <div class="pro-content">
                                <h4><a href="#">Analog Numeral</a></h4>
                                <div class="pricee">
                                  
                                    <p class="m-0 prc" >$1550.00</p>  
                                    <p class="m-0 oldprc" >$1550.00</p>
                                </div>
                                <div class="range">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="m-0 title">Baggit</p>
                                <button>Add to cart</button>
                            </div>
                        </div> 
                    </div>
                
                </div>

              </div>
        </div>
    </div>
</div>
  )
}

export default Product