import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import './CheckoutAll.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Product from '../../../Home/homeComponents/Product/Product';
function CheckoutAll() {
    const [user, setUser] = useState();
    const [userName, setUserName] = useState();


    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [postalcode, setPostalCode] = useState();
    const [address, setAddress] = useState();
    const [apartment, setApartment] = useState();
    const [state, setState] = useState();
    const [no, setNo] = useState();
    const [comment, setComment] = useState();


    const [userId, setUserId] = useState();
    const [orderitems, setOrderItems] = useState([]);
    const [baskets, setBasket] = useState([]);



    const bodyParameters = {
        UserId: userId,
        No: no,
        Comment: comment,
        Status: 1,
        Country: country,
        City: city,
        State: state,
        Apartment: apartment,
        Address: address,
        PostalCode: postalcode,
        OrderItems: orderitems
    };


    // [
    //     { productId: 1},
    //     { productId: 2 },
    //     { productId: 3}
    //   ]
    async function create(e) {
        e.preventDefault();
debugger
        await axios.post('http://lamanhashimovaa-001-site1.ctempurl.com/api/Orders/CreateOrder',
            bodyParameters
            //,
            // {
            //     headers: {
            //         'Content-Type': 'application/json' // Set the content type to multipart/form-data
            //     }
            // }

        )
            .then(function (response) {

                localStorage.setItem("basket", JSON.stringify([]));

                Swal.fire(
                    '',
                    'Created',
                    'success'
                )

                window.location.reload();
            })
            .catch(function (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            });



    }
    const navigate = useNavigate();

    let token = localStorage.getItem('token');
    const subtotal = baskets?.reduce((sum,item)=>sum + (item.count * item.price),0) ?? 0;

 
    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };




    const loaditems = async () => {
        let basket = JSON.parse(localStorage.getItem('basket'));
        setBasket(basket)
        const updatedOrderItems = [...basket];


        // const orderItems = ;
        setOrderItems(updatedOrderItems.map(item => ({ productId: item.Id })));

    };
    useEffect(() => {

        loaditems();
        if (token != null) {
            let usermail = parseJwt(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
            let username = parseJwt(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
            let userid = parseJwt(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
            setUser(usermail)
            setUserName(username)
            setUserId(userid)
            setNo(parseInt(Math.random() * 10))
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'Error',
                title: 'Davam Etmek ucun girish etmelisiz',
                showConfirmButton: false,
                timer: 1500
            })

            navigate('/login')
        }
    }, [])

    return (
        <div id="Checkout">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="allRight">
                            <div className="Logo">
                            <img style={{color:"black"}} src={require('../../../../../Assets/Images/watch_x320.avif')} alt=""/>
                            

                            </div>
                            <div className="BreadCrump">
                                <a href="#" className="active"> Cart  <span>{'<'}</span>  </a>
                                <a href="#" className="information"> Information  <span>{'<'}</span> </a>
                                <a href="#"> Shipping  <span>{'<'}</span> </a>
                                <a href="#"> Payment </a>

                            </div>
                            <div className="contact">
                                <Form onSubmit={(e) => create(e)} id="FormForOrder">
                                    <div className="ContactData">
                                        <div className="logCon">
                                            <h2>Contact</h2>
                                            <p >Already have an account? <a href="#">Log in</a></p>
                                        </div>
                                        <div className="conInput">
                                            <Form.Control type="text" placeholder={`${user}`} disabled />
                                        </div>
                                    </div>
                                    <div className="shippingForm">
                                        <h2>Shipping address</h2>
                                        <div className="ForName">

                                            <Form.Control type="text " onChange={(e) => setCountry(e.target.value)} placeholder="Country" />

                                        </div>
                                        <div className="ForName">
                                            <Form.Control type="text" placeholder={`${userName}`} disabled />
                                            {/* <input type="text" placeholder="Last Name" /> */}
                                        </div>
                                        <div className="Address">
                                            <Form.Control type="text " onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                                        </div>
                                        <div className="Apartment">
                                            <Form.Control type="text" onChange={(e) => setApartment(e.target.value)} placeholder="Apartment, suite,etc.(optional)" />
                                        </div>
                                        <div className="Apartment">
                                            <Form.Control type="text" onChange={(e) => setState(e.target.value)} placeholder="State" />
                                        </div>
                                        <div className="Postal">
                                            <Form.Control type="text" onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal code" />
                                            <Form.Control type="text" onChange={(e) => setCity(e.target.value)} placeholder="City" />
                                        </div>
                                        <div className="Apartment">
                                            <Form.Control type="text" onChange={(e) => setComment(e.target.value)} placeholder="comment" />
                                        </div>
                                        <div className="Continue">
                                            <Link to={"/basket"}> <span>{'<'}</span>  Return to cart </Link>
                                            <button className='btn  btn-primary' type='submit'>Continue to shipping</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="allLeft">
                            {baskets.map(items=>
                                
                                <div className="singleCart">
                                <div className="imgCart">
                                <img src={`data:image/jpeg;base64,${items?.mainimage}`} alt="" />
                                    <span>{items?.count}</span>
                                </div>
                                <div className="ContentImg">
                                    <div className="ForInfo">
                                        <p className="mb-0">{items?.title}</p>
                                        <span>{items?.size} / {items?.color} / {items?.material}</span>
                                    </div>
                                    <div className="ForPrice">
                                        <span>${items?.price*items?.count} </span>
                                    </div>
                                </div>
                                
                            </div>
                            
                                )}
                         
                            <div className="ship">
                                <span>Shipping</span>


                                <p className="mb-0"> Calculated at next step</p>

                            </div>
                            <div className="total">
                                <span>Total</span>
                                <div className="fullprice">
                                    <span className="prcvalue">USD</span>
                                    <span >${subtotal}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckoutAll