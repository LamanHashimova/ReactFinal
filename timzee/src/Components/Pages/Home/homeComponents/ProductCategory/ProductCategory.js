import React, { useEffect, useState } from 'react'
import './ProductCategory.css'

import axios from 'axios';


function ProductCategory() {


    const [activeTab, setActiveTab] = useState(''); // Initialize state to store active tab name

    const openProductCategory = (evt, productName) => {
      // Get all elements with class="tabcontent" and hide them
      const tabContentList = document.getElementsByClassName('tabContentProduct');
      for (let i = 0; i < tabContentList.length; i++) {
        tabContentList[i].style.display = 'none';
      }
  
      // Get all elements with class="tablinks" and remove the class "active"
      const tabLinkList = document.getElementsByClassName('tabLinksProduct');
      for (let i = 0; i < tabLinkList.length; i++) {
        tabLinkList[i].className = tabLinkList[i].className.replace(' active', '');
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(productName).style.display = 'block';
      evt.currentTarget.className += ' active';
  
      setActiveTab(productName); // Update the active tab state

}
    
    const [classico, setClassico] = useState([]);
    const [executive, setExecutive] = useState([]);
    const [sports, setSports] = useState([]);
    const [dialer, setDialer] = useState([]);

    const loadDialer = async () => {
        const result = await axios.get("api/Products/GetAllDialerCategory");
        setDialer(result.data)

    };

    const loadClasssico = async () => {
        const result = await axios.get("api/Products/GetAllClassicoCategory");
        setClassico(result.data)

    };
    const loadSports = async () => {
        const result = await axios.get("api/Products/GetAllSportsCategory");
        setSports(result.data)

    };

    const loadExecutive = async () => {
        const result = await axios.get("api/Products/GetAllExecutiveCategory");
        setExecutive(result.data)

    };
    useEffect(() => {
        window.scrollTo(0, 0);
        loadClasssico();
        loadExecutive();
        loadSports();
        loadDialer();
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

                            {classico?.map(slide =>
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

                    <div id="EXECUTIVE" className="tabContentProduct">
                        <div className="row">

                        {executive?.map(slide =>
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

                    <div id="SPORTS" className="tabContentProduct">
                        <div className="row">

                        {sports?.map(slide =>
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
                        {dialer?.map(slide =>
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