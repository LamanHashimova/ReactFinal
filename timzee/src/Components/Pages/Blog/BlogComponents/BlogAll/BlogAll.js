import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';
import './BlogAll.css'

import api from '../../../../../agent/api'

function BlogAll() {
    const [blog, setBlog] = useState([]);
    const [tags, setTags] = useState([]);
 
    const [page, setPage] = React.useState(1);
    const [Skip, setSkip] = React.useState(0);
    const [Take, setTake] = React.useState(6)
    const [totalCount,setTotalCount] = React.useState()
    
    const handleChangePag = (event, value) => {
        setPage(value);
        setSkip((value - 1) * Take)
    };

    const loadTags = async () => {
        const result = await api.get("api/Tags/GetAllTags");
        setTags(result?.data)
        

    };
    const loadBlogs = async () => {
        const result = await api.get(`api/Blogs/GetAllPaginationBlog?skip=${Skip}&take=${Take}`);
        setBlog(result?.data?.blogs)
        setTotalCount(result?.data?.totalCount)

    };
    useEffect(() => {
        window.scrollTo(0, 0);
        loadBlogs();
        loadTags();
    }, [Skip,Take]);
    const pageCount = totalCount && Math.ceil(totalCount/Take)
    console.log(pageCount)
  return (
    <div id="Blog">
    <div className="container">
        <div className="row ">
            <div className="col-lg-3">
                <div className="Leftsidebar ">
                    <div className="Articles">
                        <h5>Recent Articles</h5>
                        <div className="SingleArticle">
                            <div className="ArticleImage">
                            <img src={require('../../../../../Assets/Images/blog7_180x.avif')} alt=""/>
                                
                            </div>
                            <div className="ArticleInfo">
                                <a href="#">The Story Behind a Super Watch</a>
                                <p>Lorem ipsum dolor sit amet,...</p>
                            </div>
                        </div>
                        <div className="SingleArticle">
                            <div className="ArticleImage">
                            <img src={require('../../../../../Assets/Images/blog8_180x.avif')} alt=""/>
                              
                            </div>
                            <div className="ArticleInfo">
                                <a href="#">The Story Behind a Super Watch</a>
                                <p>Lorem ipsum dolor sit amet,...</p>
                            </div>
                        </div>
                    </div>
                    <div className="Tags">
                        <h5>Tags</h5>
                        <ul>
                            {tags?.map(tag=>(
                                <li><a href="#">{tag?.name}</a></li>
                            ))}
                            
                       
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="RightSidebar ">
                    <div className="RightContent">
                        <div className="row gy-5">
                            {blog?.map(blog=>(
                                <div className="col-lg-4">
                                <div className="SingleRightContent p-3">
                                    <div className="RightImage mb-4">
                                      
                                    <img src={`data:image/jpeg;base64,${blog?.image}`} alt="" />
                                    </div>
                                    <div className="RightInfo">
                                        <p className="m-0 ">
                                            <i className="fa-solid fa-calendar-days"></i>
                                            <span>July 5, 2019</span>
                                        </p>
                                        <a className="title mb-3 mt-3" href="#">{blog?.title}</a>
                                        <Link to={`/blogindex/${blog?.id}`} className="readmore" >Read More</Link>
                                    </div>
                                </div>
                                </div>
                            ))}
                        
                   
                        </div>
                        <div style={{backgroundColor:"transparent", marginTop:"30px",}}>
                                        <Stack spacing={2}>
                                            <Pagination  count={pageCount} page={page} onChange={handleChangePag}  />

                                        </Stack>

                                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BlogAll