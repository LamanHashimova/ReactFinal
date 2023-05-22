import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ShopAll.css'
import { useDispatch } from 'react-redux'
import { decrease } from '../../../../../redux/stateSlice';
import axios from 'axios';

function ShopAll() {
    const [products, setProducts] = useState([]);
    const [bestsellers, setBestSellers] = useState([]);

    const dispatch = useDispatch();

    const loadProducts = async () => {
        const result = await axios.get("api/Products/GetAllProducts");
        setProducts(result.data)

    };
    const loadBestSellers = async () => {
        const result = await axios.get("api/Products/GetAllBestSellers");
        setBestSellers(result.data)

    };

    useEffect(() => {
        window.scrollTo(0, 0);
        loadProducts();
        loadBestSellers();
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




    function addToBasket(product) {
        let pro = {
          Id: product.id,
          title: product.title,
          save: product.save,
          price: product.price,
          oldprice: product.oldprice,
          mainimage: product.mainImage,
          brandname:product.brand.name,
          count: 1,
        
        }
    
        let count = 0;
        let basket = JSON.parse(localStorage.getItem('basket'))
       
        if (basket != null) {
          for (let i = 0; i < basket.length; i++) {
            if (parseInt(basket[i].Id) === parseInt(pro?.Id)) {
              basket[i].count = basket[i].count + 1
              count = 1
            }
          }
          if (count === 0) {
            basket.push(pro)
          }
        }
        else {
          basket = []
          basket.push(pro)
        }
        localStorage.setItem('basket', JSON.stringify(basket))
       window.location.reload();
        dispatch(decrease())
      }
    return (
        <div id="AllShop">
            <div className="container-fluid spacing_enabled">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="FilterShop">
                            <div className="BestSellers">
                                <h5>Best sellers</h5>
                                <div className="BestSellerSlider">
                                    <Slider {...settings}>
                                        {bestsellers.map(slide =>
                                            <div className="product-single">
                                                <div className="pro-img">
                                                    <a href="/">
                                                        <div className="overlay"></div>
                                                        <img src={`data:image/jpeg;base64,${slide.mainImage}`} alt="" />
                                                    </a>
                                                    <div className="Smallside">
                                                        <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                        <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                        <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                    </div>
                                                    <div className="sale">
                                                        <span>Sale</span>
                                                    </div>
                                                    <div className="save">
                                                        <span>Save <b>{slide.save}%</b></span>
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <h4><a href="/">{slide.title}</a></h4>
                                                    <div className="pricee">

                                                        <p className="m-0 prc" >${slide.price}</p>
                                                        <p className="m-0 oldprc" >${slide.oldprice}</p>
                                                    </div>


                                                </div>
                                            </div>
                                        )}
                                        {/* <div className="product-single">
                                <div className="pro-img">
                                    <a href="/">
                                        <div className="overlay"></div>
                                        <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                                    </a>
                                    <div className="Smallside">
                                        <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                        <a href="/"><i className="fa-solid fa-heart"></i></a>
                                        <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                    </div>
                                    <div className="sale">
                                        <span>Sale</span>
                                    </div>
                                    <div className="save">
                                        <span>Save <b>20%</b></span>
                                    </div>
                                </div>
                                <div className="pro-content">
                                    <h4><a href="/">Analog Numeral</a></h4>
                                    <div className="pricee">
                                      
                                        <p className="m-0 prc" >$1550.00</p>  
                                        <p className="m-0 oldprc" >$1550.00</p>
                                    </div>
                                   
                                </div>
                            </div> */}
                                    </Slider>


                                </div>
                            </div>
                            <div className="availability">
                                <h5>Availability</h5>
                                <div className="stock">
                                    <div className="inputStok">
                                        <input type="checkbox" name="available" />
                                        <label for="available">In stock
                                        </label>
                                    </div>
                                    <span>(24)</span>
                                </div>
                                <div className="stock">
                                    <div className="inputStok">
                                        <input type="checkbox" name="available" />
                                        <label for="available">Out of Stock
                                        </label>
                                    </div>
                                    <span>(0)</span>
                                </div>
                            </div>
                            <div className="Price">
                                <h5>Price</h5>
                                <span>The highest price is $750.00</span>
                                <div className="allfield">
                                    <div className="pricefield">
                                        <label for="price">From $</label>
                                        <div className="inputdiv">
                                            <input type="number" name="price" />
                                        </div>
                                    </div>
                                    <div className="pricefield">
                                        <label for="price">To $</label>
                                        <div className="inputdiv">
                                            <input type="number" name="price" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Producttype">
                                <h5>Product type</h5>
                                <div className="type">
                                    <div className="TypeInput">
                                        <input type="checkbox" name="type" />
                                        <label for="type"> Analog
                                        </label>
                                    </div>
                                    <span>(10)</span>
                                </div>
                                <div className="type">
                                    <div className="TypeInput">
                                        <input type="checkbox" name="type" />
                                        <label for="type"> Automatic
                                        </label>
                                    </div>
                                    <span>(7)</span>
                                </div>
                                <div className="type">
                                    <div className="TypeInput">
                                        <input type="checkbox" name="type" />
                                        <label for="type"> Digital
                                        </label>
                                    </div>
                                    <span>(7)</span>
                                </div>
                            </div>
                            <div className="Brand">
                                <h5>Brand</h5>
                                <div className="brandd">
                                    <div className="BrandInput">
                                        <input type="checkbox" name="brnd" />
                                        <label for="brnd"> Baggit
                                        </label>
                                    </div>
                                    <span>(3)</span>
                                </div>
                                <div className="brandd">
                                    <div className="BrandInput">
                                        <input type="checkbox" name="brnd" />
                                        <label for="brnd">  Biltwell
                                        </label>
                                    </div>
                                    <span>(1)</span>
                                </div>
                                <div className="brandd">
                                    <div className="BrandInput">
                                        <input type="checkbox" name="brnd" />
                                        <label for="brnd">   Fostelo
                                        </label>
                                    </div>
                                    <span>(2)</span>
                                </div>
                                <div className="brandd">
                                    <div className="BrandInput">
                                        <input type="checkbox" name="brnd" />
                                        <label for="brnd">    Timzee
                                        </label>
                                    </div>
                                    <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="ShopProducts">
                            <div className="rightContent">
                                <div className="grids">
                                    <i className="fa-solid fa-grip"></i>
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                                <div className="featured">
                                    <select name="sorted" id="sorted">
                                        <option value="">Featured</option>
                                        <option value="">Best Selling</option>
                                        <option value="">Alphabetically,A-Z</option>
                                        <option value="">Alphabetically,Z-A</option>
                                        <option value="">Price,low to high</option>
                                        <option value="">Price,high to low</option>
                                        <option value="">Date,old to new</option>
                                        <option value="">Date,new to old</option>
                                    </select>
                                </div>
                            </div>
                            <div className="rightboxes">
                                <div className="row">
                                    {products.map((product=>
                                         <div className="col-lg-3">
                                         <div className="product-single">
                                             <div className="pro-img">
                                                 <a href="/">
                                                     <div className="overlay"></div>
                                                     <img src={`data:image/jpeg;base64,${product.mainImage}`} alt="" />
                                                 </a>
                                                 <div className="Smallside">
                                                     <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                     <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                     <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                 </div>
                                                 <div className="sale">
                                                     <span>Sale</span>
                                                 </div>
                                                 <div className="save">
                                                     <span>Save <b>{product.save}%</b></span>
                                                 </div>
                                             </div>
                                             <div className="pro-content">
                                                 <h4><a href="/">{product.title}</a></h4>
                                                 <div className="pricee">
 
                                                     <p className="m-0 prc" >${product.price}</p>
                                                     <p className="m-0 oldprc" >${product.oldprice}</p>
                                                 </div>
                                                 <div className="range">
                                                     <i className="fa-solid fa-star"></i>
                                                     <i className="fa-solid fa-star"></i>
                                                     <i className="fa-solid fa-star"></i>
                                                     <i className="fa-solid fa-star"></i>
                                                     <i className="fa-solid fa-star"></i>
                                                 </div>
                                                 <p className="m-0 title">{product.brand.name}</p>
                                                 <button onClick={(e) => addToBasket(product)}>Add to cart</button>
                                             </div>
                                         </div>
                                     </div>
                                        ))}
                                    {/* <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="product-single">
                                            <div className="pro-img">
                                                <a href="/">
                                                    <div className="overlay"></div>
                                                    <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt="" />
                                                </a>
                                                <div className="Smallside">
                                                    <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                    <a href="/"><i className="fa-solid fa-heart"></i></a>
                                                    <a id="OpenModall" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                </div>
                                                <div className="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div className="save">
                                                    <span>Save <b>20%</b></span>
                                                </div>
                                            </div>
                                            <div className="pro-content">
                                                <h4><a href="/">Analog Numeral</a></h4>
                                                <div className="pricee">

                                                    <p className="m-0 prc" >$1550.00</p>
                                                    <p className="m-0 oldprc" >$1550.00</p>
                                                </div>
                                                <div className="range">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="m-0 title">Baggit</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopAll