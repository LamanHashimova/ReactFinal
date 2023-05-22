import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Components/layout/Navbar/Navbar.js';
import Home from './Components/Pages/Home/Home.js';
import Shop from './Components/Pages/Shop/Shop.js';
import Contact from './Components/Pages/Contact/Contact.js';
import About from './Components/Pages/About/About.js';
import Detail from './Components/Pages/Detail/Detail.js';
import Basket from './Components/Pages/Basket/Basket.js';
import Login from './Components/Pages/Login/Login.js';
import Register from './Components/Pages/Register/Register.js';
import CheckOut from './Components/Pages/Checkout/Checkout.js';
import Blog from './Components/Pages/Blog/Blog.js';
import Wishlist from './Components/Pages/Wishlist/Wishlist.js';
import BlogIndex from './Components/Pages/BlogIndex/BlogIndex.js';
import Footer from './Components/layout/Footer/Footer.js';

import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/blogindex/:id" element={<BlogIndex />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
        
    
      </div>
    </Router>

  );
}

export default App;
