import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BreadCrump from './BlogIndexComponents/BlogIndexBreadCrump/BlogIndexBreadCrump.js'
import BlogIndexInfo from './BlogIndexComponents/BlogIndexInfo/BlogIndexInfo.js'
import BlogIndexContact from './BlogIndexComponents/BlogIndexContact/BlogIndexContact.js'

function BlogIndex(props) {
    const { id } = useParams();
    const [blog, setBlog] = useState(); 
   
    function initPromise() {
        const response = axios.get(`https://timzeeback.azurewebsites.net/api/Blogs/GetBlog/${id}`);
        
        return new Promise(function (res, rej) {
          res(response);
      })
     
        }
 
    useEffect(() => {
      
        initPromise()
        .then(function (result) {
            // "initResolve"
            return result.data;
        })
        .then(function (result) {
          setBlog(result) // "normalReturn" 
      
        });
 
      }, []);
  return (
    <div>
     <div id="BreadCrump">
            <div className="container">
                <div className="BreadCrump-all">
                    <h1>{blog?.title}</h1>
                    <a href="#">Home</a><span> / </span><span>  News</span><span> / </span><span>  {blog?.title}</span>
                </div>
            </div>
        </div>
    <div id="BlogInfo">
    <div className="container">
        <div className="BlogDetailImg">
        <img src={`data:image/jpeg;base64,${blog?.image}`}  alt="" />
        </div>
        <div className="BlogDetailInfo">
            <h3>{blog?.title}</h3>
            <div className="smallInfo">
                <div className="singleSmallInfo">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>Jul 05, 2019</span>
                </div>
                <div className="singleSmallInfo">
                    <i className="fa-solid fa-message"></i>
                    <span>0 comments</span>
                </div>
                <div className="singleSmallInfo">
                    <i className="fa-solid fa-user"></i>
                    <span>{blog?.createdBy}</span>
                </div>
            </div>
 
            <div className="Desc">
                <p className="mb-0">{blog?.description}</p>
            </div>
            <div className="share">
                <h6>Share with us:</h6>
                <div className="social">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-google"></i>
                </div>
            </div>
        </div>
    </div>
</div>
    <BlogIndexContact />
    
</div>
  )
}

export default BlogIndex