import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import image1 from '../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp';
import image2 from '../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp';
import './DetailAll.css';


function Detail() {
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

    const newarrival = [
        {
          title:'Analog Numeral',
          save: '20',
          price: '1550.00',
          oldprice: '1550.00',
          image:image1,
    
        },
        {
            title:'niasdlfsdkf Numeral',
            save: '20',
            price: '1550.00',
            oldprice: '1550.00',
            image:image2,
      
          },
       
       
      ]

    const [activeTab, setActiveTab] = useState(''); // Initialize state to store active tab name

    const openReview = (evt, productName) => {
      // Get all elements with class="tabcontent" and hide them
      const tabContentList = document.getElementsByClassName('tabcontent');
      for (let i = 0; i < tabContentList.length; i++) {
        tabContentList[i].style.display = 'none';
      }
  
      // Get all elements with class="tablinks" and remove the class "active"
      const tabLinkList = document.getElementsByClassName('tablinks');
      for (let i = 0; i < tabLinkList.length; i++) {
        tabLinkList[i].className = tabLinkList[i].className.replace(' active', '');
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(productName).style.display = 'block';
      evt.currentTarget.className += ' active';
  
      setActiveTab(productName); // Update the active tab state

}
return (
   
    <div id="Detail">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3">
                <div className="LeftDetail">
                    <div className="Category">
                        <h5>Category</h5>
                        <div className="accordion" id="myAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Wedding Watches</button>									
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <ul>
                                            <li><a href="#">Titan</a></li>
                                            <li><a href="#">Sonata</a></li>
                                            <li><a href="#">BigOwl</a></li>
                                            <li><a href="#">Fogg</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Party Watches</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <ul>
                                            <li><a href="#">Meclow</a></li>
                                            <li><a href="#">Chain pattern</a></li>
                                            <li><a href="#">Meditation Beads</a></li>
                                            <li><a href="#">Fashionable</a></li>
                                        </ul>   
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Stylish Watches</button>                     
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <ul>
                                            <li><a href="#">Timewear</a></li>
                                            <li><a href="#">Viceroy</a></li>
                                            <li><a href="#">Adamo</a></li>
                                            <li><a href="#">Relish</a></li>
                                        </ul>   
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">Slim Watches</button>                     
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <ul>
                                            <li><a href="#">iSweven</a></li>
                                            <li><a href="#">BigOwl</a></li>
                                            <li><a href="#">Lime</a></li>
                                            <li><a href="#">ROSRA</a></li>
                                        </ul>   
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">Printed Watches</button>                     
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <ul>
                                            <li><a href="#">Swiss Watch</a></li>
                                            <li><a href="#">Arric</a></li>
                                            <li><a href="#">Srk Enterprise</a></li>
                                            <li><a href="#">Teslo New</a></li>
                                        </ul>   
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">Grand Collection</button>                     
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <ul>
                                            <li><a href="#">Timebre</a></li>
                                            <li><a href="#">Ziera</a></li>
                                            <li><a href="#">Skylofts</a></li>
                                            <li><a href="#">Oofit</a></li>
                                        </ul>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Arrivals">
                        <h5>New Arrivals</h5>
                        <div className="ArrivalSlider">
                            <Slider {...settings}>
                                {newarrival.map(slide=>
                                      <div className="product-single">
                                      <div className="pro-img">
                                          <a href="#">
                                              <div className="overlay"></div>
                                              <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                                          </a>
                                          <div className="Smallside">
                                              <a href="#"><i className="fa-solid fa-window-restore"></i></a>
                                              <a href="#"><i className="fa-solid fa-heart"></i></a>
                                              <a id="OpenModall" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                                          </div>
                                          <div className="sale">
                                              <span>Sale</span>
                                          </div>
                                          <div className="save">
                                              <span>Save <b>20%</b></span>
                                          </div>
                                      </div>
                                      <div className="pro-content">
                                          <h4><a href="#">Analog Numeral</a></h4>
                                          <div className="pricee">
                                            
                                              <p className="m-0 prc" >$1550.00</p>  
                                              <p className="m-0 oldprc" >$1550.00</p>
                                          </div>
                                     
                                      </div>
                                  </div>
                                    )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="DetailAll">
                  <div className="row">
                  <div className="col-lg-6">
                    <div className="MainImgs">
                        <div className="SingleMainImg">
                        <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                        </div>
                        <div className="SliderMainImgs">
                         <div className="SinglesliderImg">
                         <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                         </div>
                         <div className="SinglesliderImg">
                         <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                         </div>
                         <div className="SinglesliderImg">
                         <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                        </div>
                        <div className="SinglesliderImg">
                        <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                        </div>
                           <div className="SinglesliderImg">
                           <img src={require('../../../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp')} alt=""/>
                         </div>
                        </div>
                     </div>
                  </div>
                   <div className="col-lg-6">
                    <div className="MainInfo">
                        <h2>Golden Classical</h2>
                        <div className="ProductPrice">
                            <p className="ttl">Price:</p>
                            <span>$301.00</span>
                        </div>
                        <div className="ProductSize">
                            <p>Size:</p>
                            <div className="Sizes">
                                <div className="singlesize">
                                    <input type="radio" name="size"/>
                                    <label for="size">25cm</label>
                                </div>
                                <div className="singlesize">
                                    <input type="radio" name="size"/>
                                    <label for="size">24cm</label>
                                </div>  
                            </div>
                        </div>
                        <div className="ProductColor">
                            <p>Color:</p>
                            <div className="Colors">
                                <div className="singleColor">
                                    <input type="radio" name="color" checked/>
                                    <label for="color"><i></i></label>
                                </div>
                                <div className="singleColor">
                                    <input type="radio" name="color"/>
                                    <label for="color"> <i></i></label>
                                </div>
                                <div className="singleColor">
                                    <input type="radio" name="color"/>
                                    <label for="color"><i></i></label>
                                </div>
                            </div>
                        </div>
                        <div className="ProductMaterial">
                            <p>Material:</p>
                            <div className="Materials">
                                <div className="singlematerial">
                                    <input type="radio" name="size"/>
                                    <label for="size">cotton</label>
                                </div>
                                <div className="singlematerial">
                                    <input type="radio" name="size"/>
                                    <label for="size">leather</label>
                                </div>  
                                <div className="singlematerial">
                                    <input type="radio" name="size"/>
                                    <label for="size">silk</label>
                                </div>  
                            </div>
                        </div>
                        <div className="ProductType">
                            <p className="ttl">Type:</p>
                            <span>Digital</span>
                        </div>
                        <div className="ProductQuantity">
                            <p>Quantity:</p>
                            <div className="Quantities">
                                <input  className=" qty" type="button" value="-"/>
                                <input className="qtytext" type="text" value="1" />
                                <input className="qty" type="button" value="+"/>
                            </div>
                        </div>
                        <div className="ProductAvailibility">
                            <p className="ttl">Availability:</p>
                            <span className="stock">In stock!</span>
                            <span className="sold">Sold Out</span>
                        </div>
                        <div className="buy">
                            <button type="submit">Add to Cart</button>
                            <a href="#">Buy it now</a>
                        </div>
                        <div className="wishlist">
                            <button type="submit">Add to wishlist</button>
                        </div>
                    </div>
                   </div>
                  </div>
                  <div className="Review">
                    <div className="tabmenu">
                        <div className="tab">
                        <button className={`tablinks ${activeTab === 'DESCRIPTION' ? 'active' : ''}`} onClick={(e) => openReview(e, 'DESCRIPTION')}>PRODUCT DESCRIPTION</button>
                        <button className={`tablinks ${activeTab === 'REVIEWS' ? 'active' : ''}`} onClick={(e) => openReview(e, 'REVIEWS')}>REVIEWS</button>
                           
                          </div>
                          
                         
                          <div id="DESCRIPTION" className="tabcontent active-tab">
                          <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                          <h4>Sample Unordered List</h4>
                          <ul>
                            <li>Comodous in tempor ullamcorper miaculis</li>
                            <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                            <li>Divamus sit amet purus justo.</li>
                            <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
                          </ul>
                          <h4>Sample Ordered Lista</h4>
                          <ul>
                            <li>Comodous in tempor ullamcorper miaculis.</li>
                            <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                            <li>Divamus sit amet purus justo.</li>
                            <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
                          </ul>
                      <h4>Sample Paragraph Text</h4>
                      <blockquote>Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras felis nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus id ullamcorper neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros accumsan quis justo at tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus volutpat, ut dapibus purus pulvinar. Vestibulum sit amet auctor ipsum.</blockquote>
                           </div>
                          
                          <div id="REVIEWS" className="tabcontent">
                          <div className="WriteReview">
                            <h2>Customer Reviews</h2>
                            <div className="based">
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <span>Based on 1 review</span>
                                </div>
                                <a href="#">Write a review</a>
    
                            </div>
                            <div className="ReadReview">
                                <div className="Stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <span><strong>James Samuel </strong>  on <strong> Jul 08, 2019</strong> </span>
                                <p>In eu mi bibendum neque. Tristique nulla aliquet enim tortor at auctor urna nunc id. Molestie nunc non blandit massa enim nec.</p>
                                <div className="by"><a href="#">Report as Inappropriate</a></div>
                            </div>
                          </div>
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


export default Detail