import React from 'react'
import './BlogIndexContact.css'

function BlogIndexContact() {
  return (
    <div id="ContactForm">
            <div className="container">
                <div className="ContactFormAll">
                    <h4> Leave a comment </h4>
                    <form >
                      <div className="inputs">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        
                      </div>
                        <textarea placeholder="Message" cols="30" rows="10"></textarea>
                        <div className="submit">
                            <button type="submit">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default BlogIndexContact