import React, { useEffect, useState } from 'react'
import './ProductCategory.css'

import api from '../../../../../agent/api'
import { Link } from '@mui/material';



function ProductCategory() {


    const [activeTab, setActiveTab] = useState('');
    const [bestsellers, setBestSellers] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]); 
    const [popular, setPopular] = useState([]); 

    const openProductCategory = (evt, productName) => {
        window.scrollTo(0, 1);
      const tabContentList = document.getElementsByClassName('tabContentProduct');
      for (let i = 0; i < tabContentList.length; i++) {
        tabContentList[i].style.display = 'none';
      }
  
      // Get all elements with className="tablinks" and remove the class "active"
      const tabLinkList = document.getElementsByClassName('tabLinksProduct');
      for (let i = 0; i < tabLinkList.length; i++) {
        tabLinkList[i].className = tabLinkList[i].className.replace(' active', '');
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(productName).style.display = 'block';
      evt.currentTarget.className += ' active';
  
      setActiveTab(productName); // Update the active tab state

}
    const loadnewArrivals = async () => {
      
        const result = await api.get("api/Products/GetAllNewArrival");
        setNewArrivals(result?.data)

    };
    const loadBestSellers = async () => {
        const result = await api.get("api/Products/GetAllBestSellers");
        setBestSellers(result?.data)

    };
    const loadPopular = async () => {
        const result = await api.get("api/Products/GetAllPopular");
        setPopular(result?.data)

    };

    useEffect(() => {
        loadPopular();
        loadBestSellers();
        loadnewArrivals();
      }, []);

  

    return (
        <div id="ProductCategory">
            <div className="container-fluid">
                <div className="productcategory-heading">
                    <h2>Product Categories</h2>
                </div>
                <div className="tabMenuProduct">
                    <div className="TabProduct">
                        <button className={`tabLinksProduct ${activeTab === 'CLASSICO' ? 'active' : ''}`} onClick={(e) => openProductCategory(e, 'CLASSICO')}>CLASSICO</button>
                        <button className={`tabLinksProduct ${activeTab === 'EXECUTIVE' ? 'active' : ''}`} onClick={(e) => openProductCategory(e, 'EXECUTIVE')}>EXECUTIVE</button>
                        <button className={`tabLinksProduct ${activeTab === 'SPORTS' ? 'active' : ''}`} onClick={(e) => openProductCategory(e, 'SPORTS')}>SPORTS</button>
                        <button className={`tabLinksProduct ${activeTab === 'DIALER' ? 'active' : ''}`} onClick={(e) => openProductCategory(e, 'DIALER')}>DIALER</button>


                    </div>


                    <div id="CLASSICO" className="tabContentProduct active-tab">
                        <div className="row">

                            {bestsellers?.map(slide =>
                                 (
                                    <div className="col-lg col-md-6">
                                    <div className="productCategory-single">
                                        <div className="proCate-img">
                                            <Link to={`/detail/${slide.id}`}>
                                                <div className="overlay"></div>
                                                <img src={`data:image/jpeg;base64,${slide.mainImage}`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="proCate-content">
                                            <a href="#">{slide.title}</a>
                                        </div>
                                    </div>
                                </div>
                                 )
                               
                            )}





                        </div>

                    </div>

                    <div id="EXECUTIVE" className="tabContentProduct">
                        <div className="row">

                            {newArrivals?.map(slide =>
                                <div className="col-lg">
                                    <div className="productCategory-single">
                                        <div className="proCate-img">
                                            <Link to={`/detail/${slide.id}`}>
                                                <div className="overlay"></div>
                                                <img src={`data:image/jpeg;base64,${slide.mainImage}`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="proCate-content">
                                            <a href="#">{slide.title}</a>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>

                    <div id="SPORTS" className="tabContentProduct">
                        <div className="row">

                        {popular?.map(slide =>
                                <div className="col-lg">
                                    <div className="productCategory-single">
                                        <div className="proCate-img">
                                            <a href="#">
                                                <div className="overlay"></div>
                                                <img src={`data:image/jpeg;base64,${slide.mainImage}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="proCate-content">
                                            <a href="#">{slide.title}</a>
                                        </div>
                                    </div>
                                </div>
                            )}



                        </div>
                    </div>
                    <div id="DIALER" className="tabContentProduct">
                        <div className="row">
                            {bestsellers?.map(slide =>
                                <div className="col-lg">
                                    <div className="productCategory-single">
                                        <div className="proCate-img">
                                            <a href="#">
                                                <div className="overlay"></div>
                                                <img src={`data:image/jpeg;base64,${slide.mainImage}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="proCate-content">
                                            <a href="#">{slide.title}</a>
                                        </div>
                                    </div>
                                </div>
                            )}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory