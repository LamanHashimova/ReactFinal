import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import axios from 'axios';
// import { useSelector } from 'react-redux';
function Navbar() {

    const [basketnum, setBasketnum] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const debounce = (callback, delay) => {
        let timerId;
        return function (...args) {
          if (timerId) {
            clearTimeout(timerId);
          }
          timerId = setTimeout(() => {
            callback(...args);
          }, delay);
        };
      };

    const handleSearch = async (e) => {

    
        try {
          const response = await axios(`/api/Products/search?searchTerm=${searchTerm}`);
        //   const data = await response.json();
        setResults(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      const debouncedSearch = debounce(handleSearch, 300);
 
    
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


// loadSearch();
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
                                {/* <Link  to={'/detail'}>Detail</Link> */}
                                <Link to={'/contact'}>Contact Us</Link>
                            </nav>
                        </div>
                        <div className="col-lg-4">
                            <div className="site-header">
                                <Link to={'/login'}> <i className="fa-solid fa-user-large"></i></Link>
                                <Link to={'/basket'}><i className="fa-solid fa-bag-shopping"></i>
                                <span class="basketNumber">{basketnum}</span></Link>
                              
                                <div className='Search'>
                                <form class="example" onSubmit={handleSearch}>
                                <input type="text"
                                        value={searchTerm}
                                        onChange={(e) => {
                                          setSearchTerm(e.target.value);
                                          debouncedSearch(e.target.value); // Call debouncedSearch directly with the updated search term
                                        }}
                                        placeholder="Search..." name="search"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                                <ul className='SearchBody'>
                                    {results.map((product) => (
                                
                                <li className="list-group-item disabled" key={product.id}>
                                <a style={{ display: 'flex', alignItems: 'center',gap:'10px' }} href="#">
                                <img style={{width:'20%'}} src={`data:image/jpeg;base64,${product.mainImage}`} alt="" />
                                    <p style={{ margin: 0 }}>{product.title}</p>
                                </a>
                                </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar