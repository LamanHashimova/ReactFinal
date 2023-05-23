import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ShopAll.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { decrease } from '../../../../../redux/stateSlice';
import axios from 'axios';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CustomModal  from '../../../Modal/CustomModal.js';
import ProductModal from '../../../Modal/ProductModal';
import { useParams } from 'react-router-dom';

import Sidebar from '../../../../layout/Sidebar/Sidebar';
import { event } from 'jquery';

function ShopAll() {
    const [products, setProducts] = useState([]);
    const [brand, setBrands] = useState([]);
    const [productType, setproductType] = useState([]);
    const [bestsellers, setBestSellers] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectProductType, setSelectProduct] = useState([])
    const [minVal, setMinVal] = useState()
    const [maxVal, setMaxVal] = useState()
    const [selectedOption, setSelectedOption] = useState();
    const [page, setPage] = React.useState(1);
    const [Skip, setSkip] = React.useState(0);
    const [Take, setTake] = React.useState(12)
    const [totalCount,setTotalCount] = React.useState()
   
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const [productId, setProductId] = useState();

    const [selectedProductId , setSelectProductId] = useState(null);
  
    const handleModalOpen = (productId) => {
        setSelectProductId(productId)
      };
    
      const handleModalClose = () => {
        setSelectProductId(null)
      };

      const dispatch = useDispatch();
      const handleChangePag = (event, value) => {
        setPage(value);
        setSkip((value - 1) * Take)
    };



    const handleChange = (setState) => (event) => {
        event.preventDefault();
        setState(event.target.value)
    }


    const handleOptionChange = (event) => {
        event.preventDefault();
        setSelectedOption(event.target.value);
    };


    useEffect(() => {
       
        const baseUrl = 'api/Products/Filter';
        const params = new URLSearchParams();
        selectedBrands.forEach((value) => {
            params.append('brands', value);
        });
        const paramsType = new URLSearchParams();
        selectProductType.forEach((value) => {
            params.append('types', value);
        });
        const to = maxVal && Number(maxVal)
        const from = minVal && Number(minVal)
        const url = `${baseUrl}?${params.toString()}&${paramsType.toString()}from=${from || 0}&to=${to || 999999999}&availability=${selectedOption || ""}&skip=${Skip}&take=${Take}`;
             
        axios.get(`${url}`).then(res =>{
            setTotalCount(res?.data?.totalCount)
            setProducts(res?.data?.data)
        }).catch(err=>console.log(err))
    }, [selectedBrands, selectProductType, minVal, maxVal, selectedOption,Skip,Take])

    const pageCount = totalCount && Math.ceil(totalCount/Take)
    //    useEffect(() => {
    //     const url = `/api/filter?brands=${selectedBrands.join(',')}`;
    //     history.push(url);
    //   }, [selectedBrands]);

    const loadProducts = async () => {

        const result = await axios.get("api/Products/GetAllProducts");
        setProducts(result?.data)

    };
    const loadBrands = async () => {

        const result = await axios.get("api/Brands/GetAllBrands");
        setBrands(result.data)

    };
    const loadTypes = async () => {

        const result = await axios.get("api/Types/GetAllTypes");
        setproductType(result?.data)

    };

    const loadBestSellers = async () => {
        const result = await axios.get("api/Products/GetAllBestSellers");
        setBestSellers(result?.data)

    };

    useEffect(() => {
       
        
        // loadProducts();
        loadBestSellers();
        loadTypes();
        loadBrands();
    }, [productId]);
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
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
      };
    
    return (
        <div id="AllShop">
            <div className="container-fluid spacing_enabled">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="FilterShop">
                            <div className="BestSellers">
                                <h5>Best sellers</h5>
                                <div className="BestSellerSlider">
                                    <Slider {...settings} >
                                        {bestsellers?.map(slide =>
                                            <div className="product-single">
                                                <div className="pro-img">
                                                    <Link to={`/detail/${slide?.id}`} >
                                                        <div className="overlay"></div>
                                                        <img src={`data:image/jpeg;base64,${slide?.mainImage}`} alt="" />
                                                    </Link>
                                                    <div className="Smallside">
                                                        <a href="/"><i className="fa-solid fa-window-restore"></i></a>
                                                        <a href="/"><i className="fa-solid fa-heart"></i></a>
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
                                                        <span>Save <b>{slide?.save}%</b></span>
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <h4><a href="/">{slide?.title}</a></h4>
                                                    <div className="pricee">

                                                        <p className="m-0 prc" >${slide?.price}</p>
                                                        <p className="m-0 oldprc" >${slide?.discountedPrice}</p>
                                                    </div>


                                                </div>
                                            </div>
                                        )}
                                     
                                    </Slider>


                                </div>
                            </div>
                            <div className="availability">
                                <h5>Availability</h5>
                                <div className="stock">
                                    <div className="inputStok">
                                        <input onChange={handleOptionChange} value='instock' type="radio" name="available"
                                            checked={selectedOption === 'instock'}
                                        />
                                        <label for="available">In stock
                                        </label>
                                    </div>
                                    <span>(24)</span>
                                </div>
                                <div className="stock">
                                    <div className="inputStok">
                                        <input
                                            checked={selectedOption === 'outofstock'}
                                            onChange={handleOptionChange} value="outofstock" type="radio" name="available" />
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
                                            <input onChange={handleChange(setMinVal)} value={minVal} type="number" name="price" />
                                        </div>
                                    </div>
                                    <div className="pricefield">
                                        <label for="price">To $</label>
                                        <div className="inputdiv">
                                            <input onChange={handleChange(setMaxVal)} value={maxVal} type="number" name="price" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Producttype">
                                <h5>Product type</h5>
                                {productType.map(productType => (
                                    <div className="type">
                                        <div className="TypeInput">

                                            <input
                                                type="checkbox"
                                                name="brnd"
                                                checked={selectProductType.includes(productType.typeName)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectProduct((prevSelectProductType) => [
                                                            ...prevSelectProductType,
                                                            productType.typeName
                                                        ]);
                                                    } else {
                                                        setSelectProduct((prevSelectProductType) =>
                                                            prevSelectProductType.filter((selectProductType) => selectProductType !== productType.typeName)
                                                        );
                                                    }
                                                }}
                                            />


                                            <label for="type"> {productType.typeName}
                                            </label>
                                        </div>
                                        <span>(10)</span>
                                    </div>
                                ))}


                            </div>
                            <div className="Brand">
                                <h5>Brand</h5>
                                {brand.map((brand) => (
                                    <div className="brandd">
                                        <div className="BrandInput">
                                            <input
                                                type="checkbox"
                                                name="brnd"
                                                checked={selectedBrands.includes(brand.name)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedBrands((prevSelectedBrands) => [
                                                            ...prevSelectedBrands,
                                                            brand.name,
                                                        ]);
                                                    } else {
                                                        setSelectedBrands((prevSelectedBrands) =>
                                                            prevSelectedBrands.filter((selectedBrand) => selectedBrand !== brand.name)
                                                        );
                                                    }
                                                }}
                                            />
                                            <label htmlFor="brnd">{brand.name}</label>
                                        </div>
                                        <span>(0)</span>
                                    </div>
                                ))}

                         

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9  col-sm-9">
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

                                    {products && products?.length > 0 ? (
                                        products?.map(product => (
                                            <div className="col-lg-3 col-md-6"  key={product?.id}>
                                                <div className="product-single">
                                                    <div className="pro-img">
                                                        <Link to={`/detail/${product?.id}`} >
                                                            <div className="overlay"></div>
                                                            <img key={product?.id} src={`data:image/jpeg;base64,${product?.mainImage}`} alt="" />
                                                        </Link>
                                                        <div className="Smallside">
                                                            <a href="/"><i className="fa-solid fa-window-restore"></i></a>
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
                                                            <span>Save <b>{product?.save}%</b></span>
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="pro-content">
                                                        <h4><a href="/">{product?.title}</a></h4>
                                                        <div className="pricee">

                                                            <p className="m-0 prc" >${product?.price}</p>
                                                            <p className="m-0 oldprc" >${product.discountedPrice}</p>
                                                        </div>

                                                        <p className="m-0 title">{product?.brand?.name}</p>
                                                        <button onClick={(e) => addToBasket(product)}>Add to cart</button>
                                                        {isSidebarOpen && (
                                                            <Sidebar onClose={closeSidebar} />
                                                        )}
                                                    </div>
                                                  
                                                </div>
                                               
                                            </div>
                                        ))
                                    ) : (
                                        <p>Loading products...</p>
                                    )}
                                    <div 
                                    style={{backgroundColor:"transparent", marginTop:"30px",}}>
                                        <Stack spacing={2}>
                                            <Pagination  count={pageCount} page={page} onChange={handleChangePag}  />

                                        </Stack>

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

export default ShopAll