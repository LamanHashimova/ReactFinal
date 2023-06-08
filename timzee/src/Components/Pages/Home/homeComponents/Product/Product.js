import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomModal  from '../../../Modal/CustomModal.js';
import ProductModal from '../../../Modal/ProductModal';
import { Link } from '@mui/material';
import { useDispatch } from 'react-redux'
import { decrease } from '../../../../../redux/stateSlice';
import './Product.css'
import api from '../../../../../agent/api'

function Product() {
    const [products, setProducts] = useState([]);
    const [popular, setPopular] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    const [activeTab, setActiveTab] = useState('CLASSIC');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProductId , setSelectProductId] = useState(null);
    const [productId, setProductId] = useState(); // Initialize state to store active tab name
    const dispatch = useDispatch();
    const openProduct = (evt, productName) => {
        window.scrollTo(0, 1);
      const tabContentList = document.getElementsByClassName('tabcontent');
      for (let i = 0; i < tabContentList.length; i++) {
        tabContentList[i].style.display = 'none';
      }
  
      // Get all elements with className="tablinks" and remove the class "active"
      const tabLinkList = document.getElementsByClassName('tablinks');
      for (let i = 0; i < tabLinkList.length; i++) {
        tabLinkList[i].className = tabLinkList[i].className.replace(' active', '');
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(productName).style.display = 'block';
      evt.currentTarget.className += ' active';
  
      setActiveTab(productName); // Update the active tab state

}
const handleModalOpen = (productId) => {
    setSelectProductId(productId)
  };

  const handleModalClose = () => {
    setSelectProductId(null)
  };


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
    dispatch(decrease())
}
function addToBasket(product) {
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
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        
        initialSlide: false,
        autoplay: false,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    initialSlide:false,
                    dots: true
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                   initialSlide:false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    initialSlide:false,

                    slidesToScroll: 1
                    
                }
            }
        ]
    };
    const loadProducts = async () => {

        const result = await api.get("api/Products/GetAllProducts");
        setProducts(result.data)

    };
    const loadPopulars = async () => {

        const result = await api.get("api/Products/GetAllPopular");
        setPopular(result.data)

    };
    const loadBestSellers = async () => {

        const result = await api.get("api/Products/GetAllBestSellers");
        setBestSeller(result.data)

    };
    useEffect(() => {
        window.scrollTo(0, 0);
        loadProducts();
        loadPopulars();
        loadBestSellers();
    }, [productId]);
    function addToBasket(product) {
        let pro = {
            Id: product?.id,
            title: product?.title,
            save: product?.save,
            price: product?.price,
            oldprice: product?.oldprice,
            mainimage: product?.mainImage,
            brandname: product?.brand?.name,
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
    <div id="Products">
    <div className="container">
        <div className="product-heading">
            <h2>Popular In Store</h2>
        </div>
        <div className="tabmenu">
        <div className="tab">
            <button className={`tablinks ${activeTab === 'CLASSIC' ? 'active' : ''}`} onClick={(e) => {
              openProduct(e, 'CLASSIC')
                }}>CLASSIC</button>
            <button className={`tablinks ${activeTab === 'MODERN' ? 'active' : ''}`} onClick={(e) => {
               openProduct(e, 'MODERN'
                )}}>MODERN</button>
            <button className={`tablinks ${activeTab === 'SPECIALEDITION' ? 'active' : ''}`} onClick={(e) =>{
                openProduct(e, 'SPECIALEDITION')
                 }}>SPECIAL EDITION</button>
            </div>
              
            
              <div id="CLASSIC" className="tabcontent active">
                <div className="row">
                <Slider {...settings}>
                {products?.map(product => (
                                              <div className='col-lg-3'>
                                                  <div className="product-single">
                                                            <div className="pro-img">
                                                                <a href="#">
                                                                    <div className="overlay"></div>
                                                                    <img src={`data:image/jpeg;base64,${product?.mainImage}`} alt="" />
                                                                </a>
                                                                <div className="Smallside">
                                                                    <a href="#"><i className="fa-solid fa-window-restore"></i></a>
                                                                    <button onClick={(e) => addToWishlist(product)}><i className="fa-solid fa-heart"></i></button>
                                                                    <button onClick={() => handleModalOpen(product?.id)}><i className="fa-solid fa-magnifying-glass"></i></button>
                                                          
                                                          <ProductModal 
                                                          key={product?.id}
                                                          open={selectedProductId === product?.id} 
                                                          onClose={handleModalClose} 
                                                          productId={product?.id}/>
                                                                </div>
                                                                <div className="sale">
                                                                    <span>Sale</span>
                                                                </div>
                                                                <div className="save">
                                                                    <span>Save <b>20%</b></span>
                                                                </div>
                                                            </div>
                                                            <div className="pro-content">
                                                                <h4><a href="#">{product?.title}</a></h4>
                                                                <div className="pricee">
                                                                
                                                                    <p className="m-0 prc" >${product?.price}</p>  
                                                                    <p className="m-0 oldprc" >${product?.discountedPrice}</p>
                                                                </div>
                                                     
                                                                <p className="m-0 title">{product?.brand.name}</p>
                                                                <button onClick={(e) => addToBasket(product)}>Add to cart</button>
                                                            </div>
                                                </div>
                                              </div>
                                                ))}
                </Slider>
                </div>
               </div>
              
                <div id="MODERN" className="tabcontent ">
                <div className="row">
                <Slider {...settings}>
                {popular?.map(product => (
                                               <div className='col-lg-3'>
                                               <div className="product-single">
                                                         <div className="pro-img">
                                                             <a href="#">
                                                                 <div className="overlay"></div>
                                                                 <img src={`data:image/jpeg;base64,${product?.mainImage}`} alt="" />
                                                             </a>
                                                             <div className="Smallside">
                                                                 <a href="#"><i className="fa-solid fa-window-restore"></i></a>
                                                                 <button onClick={(e) => addToWishlist(product)}><i className="fa-solid fa-heart"></i></button>
                                                                    <button onClick={() => handleModalOpen(product?.id)}><i className="fa-solid fa-magnifying-glass"></i></button>
                                                          
                                                          <ProductModal 
                                                          key={product?.id}
                                                          open={selectedProductId === product?.id} 
                                                          onClose={handleModalClose} 
                                                          productId={product?.id}/>
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
                                                     
                                                             <p className="m-0 title">Baggit</p>
                                                             <button onClick={(e) => addToBasket(product)}>Add to cart</button>
                                                         </div>
                                             </div>
                                           </div>
                                                ))}
                 </Slider>
                </div>
                </div>
              
              <div id="SPECIALEDITION" className="tabcontent">
                <div className="row">  
                <Slider {...settings}>
                {bestSeller?.map(product => (
                                                 <div className='col-lg-3'>
                                                 <div className="product-single">
                                                           <div className="pro-img">
                                                               <a href="#">
                                                                   <div className="overlay"></div>
                                                                   <img src={`data:image/jpeg;base64,${product?.mainImage}`} alt="" />
                                                               </a>
                                                               <div className="Smallside">
                                                                   <a href="#"><i className="fa-solid fa-window-restore"></i></a>
                                                                   <button onClick={(e) => addToWishlist(product)}><i className="fa-solid fa-heart"></i></button>
                                                                    <button onClick={() => handleModalOpen(product?.id)}><i className="fa-solid fa-magnifying-glass"></i></button>
                                                          
                                                          <ProductModal 
                                                          key={product?.id}
                                                          open={selectedProductId === product?.id} 
                                                          onClose={handleModalClose} 
                                                          productId={product?.id}/>
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
                                                            
                                                               <p className="m-0 title">Baggit</p>
                                                               <button onClick={(e) => addToBasket(product)}>Add to cart</button>
                                                           </div>
                                               </div>
                                             </div>
                                                ))}
                 </Slider>
                </div>
              </div>
        </div>
    </div>
</div>
  )
}

export default Product