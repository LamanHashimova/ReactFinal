
import Modal from '@mui/material/Modal';
import api from '../../../agent/api';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';


import './CustomModal.css'
import { useParams } from 'react-router-dom'
const style = {
  detail: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    height: "500px",
    bgcolor: 'background.paper',
    borderradius: '20px',
    boxShadow: 24,
    p: 4,
  },
}

function CustomModal({productId,onClose}) {
 
  const [product, setProducts] = useState([]);
  const [allSizes, setAllSizes] = useState([])
  const [allColors, setAllColors] = useState([])
  const [allMaterials, setAllMaterials] = useState([])
  const [color, setColor]= useState();
  const [material, setMaterial]= useState();
  const [size, setSize]= useState();
  

  const loadProducts = async (id) => {
    const response = await api.get(`Products/GetProduct/${id}`);
    setProducts(response?.data);
    const result2 = await api.get("ProductSizes/GetAllProductSizes")
    setAllSizes(result2?.data)
    const result3 = await api.get("ProductColors/GetAllProductColors")
    setAllColors(result3?.data)
    const result4 = await api.get("ProductMaterials/GetAllProductMaterials")
    setAllMaterials(result4?.data)
  };
  function addToBasket(product) {
    let pro = {
        Id: product?.id,
        title: product?.title,
        save: product?.save,
        price: product?.price,
        color:color,
        material:material,
        size:size,
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
    
  
}
  useEffect(() => {

    loadProducts(productId);
    // initPromise()
    //   .then(function (result) {
    //     return result?.data;
    //   })
    //   .then(function (result) {
    //     setProducts(result);
      
    //   });
  }, [productId]);

  // function initPromise() {
  //   const response = axios.get(`http://lamanhashimovaa-001-site1.ctempurl.com/api/Products/GetProduct/${id}`);

  //   return new Promise(function (res, rej) {
  //     res(response);
  //   });
  // };

  return (
    <div>
        <div className="modal-container">

          <div className='modalBody'>
          <button onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
            <div className="row">
              <div className="col-lg-6">
                <div className="MainImgs">
                  <div className="SingleMainImg">
                    <img key={product?.id} src={`data:image/png;base64,${product?.mainImage}`} alt="" />
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="MainInfo">
                  <h2>{product?.title}</h2>
                  <div className="ProductPrice">
                    <p className="ttl">Price:</p>
                    <span>${product?.price}</span>
                  </div>
                  <div className="ProductSize">
                    <p>Size:</p>
                    <div className="Sizes">
                      {
                        allSizes?.map((size) => {
                          if (size?.productId == productId) {
                            return (
                              <div key={size?.id} className="singlesize">
                                <input type="radio" name="size"  onClick={()=>setSize(size?.size?.sizeName)} />
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
                          {allColors?.map((color) => {
                            if (color?.productId == productId) {
                              return (
                                <div className="singleColor" key={color?.id}> {/* Add a key prop */}
                                  <input type="radio" name="color" onClick={()=>setColor(color?.color?.colorName.toLowerCase())} />
                                  <label htmlFor="color">
                                    <i
                                      style={{
                                        backgroundColor: color?.color?.colorName?.toLowerCase()
                                      }}
                                    ></i>
                                  </label>
                                </div>
                              );
                            } else {
                              return null; // Return null instead of an empty array
                            }
                          })}
                        </div>
                      </div>

                      <div className="ProductMaterial">
                      <p>Material:</p>
                      <div className="Materials">
                      {allMaterials?.map((mat) => {
                    if (mat?.productId == productId) {
                      return (
                        <div className="singlematerial" key={mat?.id}>
                          <input type="radio" name="material" onClick={()=>setMaterial(mat?.material?.materialName)}/>
                          <label htmlFor="material">{mat?.material?.materialName}</label> {/* Use htmlFor instead of for */}
                        </div>
                      );
                    } else {
                      return null; // Return null instead of an empty array
                    }
                  })}

                      </div>
                    </div>
                  <div className="ProductType">
                    <p className="ttl">Type:</p>
                    <span>{product?.type?.typeName}</span>
                  </div>
                  <div className="ProductQuantity">
                    <p>Quantity:</p>
                    <div className="Quantities">
                      <input className=" qty" type="button" value="-" />
                      <input className="qtytext" type="text" value="1" />
                      <input className="qty" type="button" value="+" />
                    </div>
                  </div>

                  <div className="buy">
                  <button onClick={(e) => addToBasket(product)}>Add to cart</button>
                    <a href="#">View Product <i class="fa-solid fa-arrow-right"></i></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CustomModal;
