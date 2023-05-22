import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
// import { useSelector } from 'react-redux';
function Navbar() {

    const [basketnum, setBasketnum] = useState();
    function BasketResult() {
        let count = 0;
    
        let bask = JSON.parse(localStorage.getItem('basket'))
    
    
        if (bask == null) {
    
    
          setBasketnum(count)
    
        }
        else {
    
          for (let i = 0; i <= bask.length; i++) {
    
            count++
    
          }
          setBasketnum(count - 1)
    
    
        }
    
    
      }

    useEffect(()=>{
BasketResult();
    },[basketnum])
    // let baskets = JSON.parse(localStorage.getItem('basket'));
    // let data = useSelector(state => state.state.localCount);
    // if (data === 0) {
    //   data = localStorage.getItem('basket') ? baskets.length : 0
    //   if (data !== null) {
    //     data = JSON.parse(data);
    //     data = data?.baskets?.length;
    //   }
    // }

    return (
        <div>
            <div id="Header">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="logo">

                                <img src={require('../../../Assets/Images/logo_1.webp')} alt="Logo" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <nav>
                                <Link to={'/'}>Home</Link>
                                <Link to={'/shop'}>Shop</Link>
                                <Link to={'/about'}>About</Link>
                                <a href="#">Blog</a>
                                <Link  to={'/detail'}>Detail</Link>
                                <Link to={'/contact'}>Contact Us</Link>
                            </nav>
                        </div>
                        <div className="col-lg-4">
                            <div className="site-header">
                                <Link to={'/login'}> <i className="fa-solid fa-user-large"></i></Link>
                                <Link to={'/basket'}><i className="fa-solid fa-bag-shopping"></i>
                                <span class="basketNumber">{basketnum}</span></Link>
                                <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar