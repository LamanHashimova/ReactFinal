import React from 'react'
import './ProductCategory.css'

function ProductCategory() {
  return (
    <div id="ProductCategory">
        <div className="container-fluid">
            <div className="productcategory-heading">
                <h2>Product Categories</h2>
            </div>
            <div className="tabMenuProduct">
                <div className="TabProduct">
                    <button className="tabLinksProduct" onclick="openProductCategory(event, 'CLASSICO')">CLASSICO</button>
                    <button className="tabLinksProduct" onclick="openProductCategory(event, 'EXECUTIVE')">EXECUTIVE</button>
                    <button className="tabLinksProduct" onclick="openProductCategory(event, 'SPORTS')">SPORTS</button>
                    <button className="tabLinksProduct" onclick="openProductCategory(event, 'DIALER')">DIALER</button>
                  </div>
                  
               
                  <div id="CLASSICO" className="tabContentProduct active-tab">
                    <div className="row">                      
                    
                          <div className="col-lg">
                            <div className="productCategory-single">
                                <div className="proCate-img">
                                    <a href="#">
                                        <div className="overlay"></div>
                                        <img src="../../../Assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                    </a>
                                </div>
                                <div className="proCate-content">
                                    <a href="#">Red & Black Numeral</a>
                                </div>
                            </div>
                          </div>
                           <div className="col-lg">
                            <div className="productCategory-single">
                                <div className="proCate-img">
                                    <a href="#">
                                        <div className="overlay"></div>
                                        <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                    </a>
                                </div>
                                <div className="proCate-content">
                                    <a href="#">Red & Black Numeral</a>
                                </div>
                            </div>
                           </div>
                        <div className="col-lg">
                            <div className="productCategory-single">
                                <div className="proCate-img">
                                    <a href="#">
                                        <div className="overlay"></div>
                                        <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                    </a>
                                </div>
                                <div className="proCate-content">
                                    <a href="#">Red & Black Numeral</a>
                                </div>
                            </div>
                        </div>
                          <div className="col-lg">
                            <div className="productCategory-single">
                                <div className="proCate-img">
                                    <a href="#">
                                        <div className="overlay"></div>
                                        <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                    </a>
                                </div>
                                <div className="proCate-content">
                                    <a href="#">Red & Black Numeral</a>
                                </div>
                            </div>
                          </div>
                       <div className="col-lg">
                        <div className="productCategory-single">
                            <div className="proCate-img">
                                <a href="#">
                                    <div className="overlay"></div>
                                    <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                </a>
                            </div>
                            <div className="proCate-content">
                                <a href="#">Red & Black Numeral</a>
                            </div>
                        </div>
                       </div>
                           
                      
                      
                      </div>
              
                   </div>
                  
                  <div id="EXECUTIVE" className="tabContentProduct">
                    <div className="row">                      
                       
                        <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch14_b2e50cb0-e772-4668-8cc5-dc3c54adce87_2000x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                        </div>
                         <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                         </div>
                      <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                      </div>
                        <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                        </div>
                     <div className="col-lg">
                      <div className="productCategory-single">
                          <div className="proCate-img">
                              <a href="#">
                                  <div className="overlay"></div>
                                  <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                              </a>
                          </div>
                          <div className="proCate-content">
                              <a href="#">Red & Black Numeral</a>
                          </div>
                      </div>
                     </div>
                         
                  
                    
                    </div>
             </div>
                  
                  <div id="SPORTS" className="tabContentProduct">
                    <div className="row">                      
                    
                        <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                        </div>
                         <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                         </div>
                      <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                      </div>
                        <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                        </div>
                     <div className="col-lg">
                      <div className="productCategory-single">
                          <div className="proCate-img">
                              <a href="#">
                                  <div className="overlay"></div>
                                  <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                              </a>
                          </div>
                          <div className="proCate-content">
                              <a href="#">Red & Black Numeral</a>
                          </div>
                      </div>
                     </div>
                         
                     
                    
                    </div>
                  </div>
                  <div id="DIALER" className="tabContentProduct">
                    <div className="row">
                        <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                        </div>
                         <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                         </div>
                      <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                      </div>
                        <div className="col-lg">
                          <div className="productCategory-single">
                              <div className="proCate-img">
                                  <a href="#">
                                      <div className="overlay"></div>
                                      <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                                  </a>
                              </div>
                              <div className="proCate-content">
                                  <a href="#">Red & Black Numeral</a>
                              </div>
                          </div>
                        </div>
                     <div className="col-lg">
                      <div className="productCategory-single">
                          <div className="proCate-img">
                              <a href="#">
                                  <div className="overlay"></div>
                                  <img src="assets/Images/Watch5_0f753270-74d5-471c-b694-5f55d31a0f0e_600x.webp" alt=""/>
                              </a>
                          </div>
                          <div className="proCate-content">
                              <a href="#">Red & Black Numeral</a>
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

export default ProductCategory