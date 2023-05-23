
import BreadCrump from './DetailComponents/BreadCrumpDetail/BreadCrumpDetail.js'
//import DetailAll from './DetailComponents/Detail/DetailAll.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';  
import { useDispatch } from 'react-redux'
import { decrease } from '../../../redux/stateSlice';
// import CustomModal  from '../../../Modal/CustomModal.js';
import ProductModal from '.././Modal/ProductModal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import axios from 'axios';

import '../Detail/DetailComponents/Detail/DetailAll.css';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const { id } = useParams();
  const [product, setProducts]= useState();
  const [color, setColor]= useState();
  const [material, setMaterial]= useState();
  const [size, setSize]= useState();
  const [productId, setProductId] = useState();

  const [selectedProductId , setSelectProductId] = useState(null);
  const handleModalOpen = (productId) => {
    setSelectProductId(productId)
  };

  const handleModalClose = () => {
    setSelectProductId(null)
  };

  function initPromise() {
    const response = axios.get(`http://localhost:44330/api/Products/GetProduct/${id}`)
    
    return new Promise(function (res, rej) {
      res(response);
  })
 
    }

  
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
  
   
        const loadnewArrivals = async () => {
      
          const result = await axios.get("http://localhost:44330/api/Products/GetAllNewArrival");
          setNewArrivals(result?.data)
  
      };
      const [activeTab, setActiveTab] = useState([]); // Initialize state to store active tab name
      const [category, setCategory] = useState([]); 
      const [newArrivals, setNewArrivals] = useState([]); 
      const [allSizes,setAllSizes] = useState([])
      const [allColors,setAllColors] = useState([])
      const [allMaterials,setAllMaterials] = useState([])
      const [types,setAllTypes] = useState([])


      console.log({allMaterials})
      let baskets = JSON.parse(localStorage.getItem('basket'));

      const subtotal = baskets?.reduce((sum,item)=>sum + (item.count * item.price),0) ?? 0;
       //plus basket
       function plusBasket(elem) {
          
          let basket = JSON.parse(localStorage.getItem('basket'));
          basket.forEach(element => {
              if (element.Id == elem.Id) {
                  element.count += 1;
              }
          });
          localStorage.removeItem('basket')
          localStorage.setItem('basket', JSON.stringify(basket))
          baskets = JSON.parse(localStorage.getItem('basket'));
          window.location.reload();
      }
  
      //minus basket
      function minusBasket(elem) {
          
          let basket = JSON.parse(localStorage.getItem('basket'));
          basket.forEach(element => {
              if (element.Id == elem.Id) {
                  if (element.count > 1) {
                      element.count -= 1;
                  }
              }
          });
          localStorage.removeItem('basket')
          localStorage.setItem('basket', JSON.stringify(basket))
          baskets = JSON.parse(localStorage.getItem('basket'));
          window.location.reload();
      }
  
      const loadMaterials = async () => {
    
       

          const result4 = await axios.get("http://localhost:44330/api/ProductMaterials/GetAllProductMaterials")
          setAllMaterials(result4?.data)
          
      };
      const loadColors = async () => {

          const result3 = await axios.get("http://localhost:44330/api/ProductColors/GetAllProductColors")
          setAllColors(result3?.data)
          
      };
      const loadSizes = async () => {
  

          const result2 = await axios.get("http://localhost:44330/api/ProductSizes/GetAllProductSizes")
          setAllSizes(result2?.data)
        
      };
      const loadTypes = async () => {
        const result1 = await axios.get("http://localhost:44330/api/Types/GetAllTypes");
        setAllTypes(result1?.data)
     
    
        
      };
      const loadCategories = async () => {
     
          const result = await axios.get("http://localhost:44330/api/Categories/GetAllCategories");
          setCategory(result?.data)

    
        
      };
      useEffect(() => {
        loadMaterials();
          loadCategories();
          loadnewArrivals();
          loadColors();
          loadSizes();
          loadTypes();
          // loadProducts();
          initPromise()
          .then(function (result) {
              // "initResolve"
              return result.data;
          })
          .then(function (result) {
            setProducts(result) // "normalReturn" 
        
          });
      }, [productId]);
      function addToWishlist(product) {
        let pro = {
            Id: product?.id,
            title: product?.title,
            save: product?.save,
            price: product?.price,
            oldprice: product?.discountedPrice,
            mainimage: product?.mainImage,
            brandname: product?.brand?.name,
            count: 1,
    
        }
    
        let count = 0;
        let wishlist = JSON.parse(localStorage.getItem('wishlist'))
    
        if (wishlist != null) {
            for (let i = 0; i < wishlist.length; i++) {
                if (parseInt(wishlist[i].Id) === parseInt(pro?.Id)) {
                    wishlist[i].count = wishlist[i].count + 1
                    count = 1
                }
            }
            if (count === 0) {
                wishlist.push(pro)
            }
        }
        else {
            wishlist = []
            wishlist.push(pro)
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
        window.location.reload();
        // dispatch(decrease())
    }
    function addToBasket(product) {
        let pro = {
            Id: product?.id,
            title: product?.title,
            save: product?.save,
            color:color,
            material:material,
            size:size,
            price: product?.price,
            oldprice: product?.discountedPrice,
            mainimage: product?.mainImage,
            brandname: product?.brand?.name,
            count: 1,
    
        }
    
        let count = 0;
        let basket = JSON.parse(localStorage.getItem('basket'))
        
        if (basket != null) {
            for (let i = 0; i < basket.length; i++) {
                if (parseInt(basket[i].Id) === parseInt(pro?.Id)) {
                    basket[i].material = material
                    basket[i].color = color
                    basket[i].size = size
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
        // dispatch(decrease())
    }
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
    <div>
      <BreadCrump />
      <div id="Detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 ">
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
                      {newArrivals.map(slide =>
                        <div className="product-single">
                          <div className="pro-img">
                            <a href="#">
                              <div className="overlay"></div>
                              <img src={`data:image/jpeg;base64,${slide.mainImage}`} alt="" />
                            </a>
                            <div className="Smallside">
                              <a href="#"><i className="fa-solid fa-window-restore"></i></a>
                              <a href="#"><i className="fa-solid fa-heart"></i></a>
                              <button onClick={() => handleModalOpen(slide?.id)}><i className="fa-solid fa-magnifying-glass"></i></button>
                                                          
                                                          <ProductModal 
                                                          key={slide?.id}
                                                          open={selectedProductId === slide?.id} 
                                                          onClose={handleModalClose} 
                                                          productId={slide?.id}/>
                            </div>
                            <div className="sale">
                              <span>Sale</span>
                            </div>
                            <div className="save">
                              <span>Save <b>20%</b></span>
                            </div>
                          </div>
                          <div className="pro-content">
                            <h4><a href="#">{slide.title}</a></h4>
                            <div className="pricee">

                              <p className="m-0 prc" >${slide.price}</p>
                              <p className="m-0 oldprc" >${slide.discountedPrice}</p>
                            </div>

                          </div>
                        </div>
                      )}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 ">
              <div className="DetailAll">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="MainImgs">
                      <div className="SingleMainImg">
                       <img src={`data:image/jpeg;base64,${product?.mainImage}`}  alt="" />
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="MainInfo">
                      <h2>{product?.title}</h2>
                      <div className="ProductPrice">
                        <p className="ttl">Price:</p>
                        <div className='allprc'>
                        <span>${product?.price}</span>
                        <span className="m-0 oldprc" >${product?.discountedPrice}</span>
                        </div>
                      </div>
                      <div className="ProductSize">
                        <p>Size:</p>
                        <div className='Sizes'>
                        {
                            allSizes?.map((size) => {
                              if (size?.productId == id) {
                                return (
                                  <div key={size?.id} className="singlesize">
                                    <input type="radio" name="size" onClick={()=>setSize(size?.size?.sizeName)}/>
                                    <label htmlFor={size?.id}>{size?.size?.sizeName}</label>
                                  </div>
                                );
                              }
                            
                            })
                          }
                        </div>
                       
                      </div>
                      <div className="ProductColor">
                        <p>Color:</p>
                        <div className="Colors">
                        {
                            allColors?.map((color) => {
                              if (color?.productId == id) {
                                return (
                                  <div className="singleColor">
                                  <input type="radio" name="color" onClick={()=>setColor(color?.color?.colorName.toLowerCase())} />
                                  <label htmlFor="color"><i style={{backgroundColor:
                                  color?.color?.colorName.toLowerCase()
                                  
                                  }}>
                                   </i></label>
                                </div>
                                );
                              }
                            
                            })
                          }                     
                        </div>
                      </div>
                      <div className="ProductMaterial">
                        <p>Material:</p>
                        <div className="Materials">

                        {
                            allMaterials?.map((mat) => {
                              if (mat?.productId == id) {
                                return (
                                  <div className="singlematerial">
                                  <input type="radio" name="material"  onClick={()=>setMaterial(mat?.material?.materialName)}/>
                                  <label htmlFor="material">{mat?.material?.materialName}</label>
                                </div>
                                );
                              }
                            
                            })
                          }


                       
                        </div>
                      </div>
                      <div className="ProductType">
                        <p className="ttl">Type:</p>
                        <span>
                      {product?.type?.typeName}
                    </span>
                                          
                        
                      </div>
                      <div className="ProductQuantity">
                        <p>Quantity:</p>
                        <div className="Quantities">
                        <Link onClick={() => minusBasket(product)} className=" qty"  >-</Link>
                        <Link className="qtytext"  >{product?.count}</Link>
                                        <Link  onClick={() => plusBasket(product)} className="qty"  >+</Link>
                        </div>
                      </div>
                      <div className="ProductAvailibility">
                        <p className="ttl">Availability:</p>
                        
                        <span className="stock">   {product?.count > 0 ? 'In Stock' : 'Sold out'}</span>
                      </div>
                      <div className="buy">
                      <button onClick={(e) => addToBasket(product)}>Add to Cart</button>
                        <button onClick={(e) => addToWishlist(product)}>Add to wishlist</button>
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
    </div>
  )
}

export default Detail