import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import axios from 'axios';
import jwt_decode from 'jwt-decode';


function Navbar() {
    
    const [basketnum, setBasketnum] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [results, setResults] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  


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
          setResults(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      const debouncedSearch = debounce(handleSearch, 300);
 
      const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
      };
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
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
        const decodedToken = jwt_decode(token);
        const userName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
        setUsername(userName)
       
      }
    }, []);
    return (
        <div>
            <div id="Header">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="logo">
                            <Link to={"/"}> <img src={require('../../../Assets/Images/logo_1.webp')} alt="Logo" />
                              </Link>
                            </div>
                        </div>
                        <div className="col">
                          <nav className={isSidebarOpen ? 'show-sidebar' : ''}>
                         
                            <Link to={'/shop'}>Shop</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/blog'}>Blog</Link>
                            {/* <Link to={'/wishlist'}>wishlist</Link> */}
                            <Link to={'/contact'}>Contact Us</Link>
                          </nav>
                        </div>
                        <div className="col">
                            <div className="site-header">
                            <a className="responsive" href="#" onClick={handleSidebarToggle}><i class="fa-solid fa-bars"></i></a>
                               {
                                username == null ? 
                                <Link to={'/login'}> 
                                <i className="fa-solid fa-user-large"></i>
                                </Link> :
                                <>
                                <Link to={'#'}> 
                                   {username}
                                </Link>
                                <Link to={'#'} onClick={
                                  ()=>{
                                    localStorage.removeItem('token');
                                    window.location.reload();
                                  }
                                } >
                                  LogOut
                             </Link>
                             </>
                               } 
                            <Link to={'/wishlist'}><i class="fa-solid fa-heart"></i></Link>

                                <Link to={'/basket'}><i className="fa-solid fa-bag-shopping"></i>
                                <span class="basketNumber">{basketnum}</span></Link>
                                <button onClick={toggleSearch} type="submit"><i class="fa fa-search"></i></button> 
                              
                                {isSearchOpen && (
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
           { searchTerm && results.length > 0 && (results.map((product) => (
       
       <li className="list-group-item disabled" key={product.id}>
       <a style={{ display: 'flex', alignItems: 'center',gap:'10px' }} href="#">
       <img style={{width:'20%'}} src={`data:image/jpeg;base64,${product.mainImage}`} alt="" />
           <p style={{ margin: 0 }}>{product.title}</p>
       </a>
       </li>
           )))}
       </ul>
       </div>
      )}

      {/* <ul className="SearchBody">
        {results.map((product) => (
          <li className="list-group-item disabled" key={product.id}>
            <a style={{ display: 'flex', alignItems: 'center', gap: '10px' }} href="#">
              <img style={{ width: '20%' }} src={`data:image/jpeg;base64,${product.mainImage}`} alt="" />
              <p style={{ margin: 0 }}>{product.title}</p>
            </a>
          </li>
        ))}
      </ul> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar