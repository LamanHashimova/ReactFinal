import React from 'react'
import BlogAll from './BlogComponents/BlogAll/BlogAll.js'
import BreadCrumpBlog from './BlogComponents/BreadCrumpBlog/BreadCrumpBlog.js'
function Blog() {
  return (
    <div>  
         <BreadCrumpBlog />
    <BlogAll />
    </div>
  )
}

export default Blog