import React from 'react'
import  './Collection.css'
import backImageCollection1 from '../../../../../Assets/Images/banner_286c6b34-88cb-465a-a2e8-2a5faf8295df.webp'
import backImageCollection2 from '../../../../../Assets/Images/Gallery2.webp'
import backImageCollection3 from '../../../../../Assets/Images/Gallery3.webp'
import backImageCollection4 from '../../../../../Assets/Images/Gallery6.webp'
import backImageCollection5 from '../../../../../Assets/Images/Gallery5.webp'
import backImageCollection6 from '../../../../../Assets/Images/Gallery4.webp'


function Collection() {
  return (
    <div id="Collection">
    <div className="AllCollection">
      <div className="container-fluid">
        <div className="row">
            <div className="single-collection col-lg-4 col-md-6 " style={{backgroundImage:`url(${backImageCollection1})`}}>
         
                <div className="overlay-body"></div>
                <div className="text-body">
                    <h4>Versits</h4>
                    <p className="m-0">Rhuyese ser sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.</p>
                    <a href="#">View all Products</a>
                </div>
            </div>
            <div className="single-collection col-lg-4 col-md-6" style={{backgroundImage:`url(${backImageCollection2})`}} >
                <div className="overlay-body"></div>
                <div className="text-body">
                    <h4>2019 Novalties  </h4>
                    <p className="m-0">Hiue wghres rhuyres magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.</p>
                    <a href="#">View all Collection</a>
                </div>
            </div>
            <div className="single-collection col-lg-4 col-md-6" style={{backgroundImage:`url(${backImageCollection3})`}}>
                <div className="overlay-body"></div>
                <div className="text-body">
                    <h4>Javelin</h4>
                    <p className="m-0">Kiures guyrese ngittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.</p>
                    <a href="#">View all Collection</a>
                </div>
            </div>
            <div className="single-collection col-lg-4 col-md-6" style={{backgroundImage:`url(${backImageCollection4})`}}>
                <div className="overlay-body"></div>
                <div className="text-body">
                    <h4>Voltamic</h4>
                    <p className="m-0">Biurese guyrese orese jittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.</p>
                    <a href="#">View all Collection</a>
                </div>
            </div>
            <div className="single-collection col-lg-4 col-md-6" style={{backgroundImage:`url(${backImageCollection5})`}}>
                <div className="overlay-body"></div>
                <div className="text-body">
                    <h4>Cerutaio</h4>
                    <p className="m-0">Ulreser tellus marquestis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.</p>
                    <a href="#">View all Collection</a>
                </div>
            </div>
            <div className="single-collection col-lg-4 col-md-6" style={{backgroundImage:`url(${backImageCollection6})`}}>
                <div className="overlay-body"></div>
                <div className="text-body">
                    <h4>Zerairo</h4>
                    <p className="m-0">Biurese hierese ciseittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.</p>
                    <a href="#">View all Collection</a>
                </div>
            </div>

           </div>
      </div>
    </div>
</div>
  )
}

export default Collection