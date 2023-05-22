import React from 'react'
import './BlogIndexInfo.css'

function BlogIndexInfo() {
  return (
    <div id="BlogInfo">
    <div className="container">
        <div className="BlogDetailImg">
            <img src="/assets/Images/blog7.webp" alt=""/>
        </div>
        <div className="BlogDetailInfo">
            <h3>The Story Behind a Super Watch</h3>
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
                    <span>Ram M</span>
                </div>
            </div>
 
            <div className="Desc">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
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
  )
}

export default BlogIndexInfo