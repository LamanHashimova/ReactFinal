import React from 'react'

import backImageMan from '../../../../../Assets/Images/Untitled-1.webp'
import backImageWoman from '../../../../../Assets/Images/promo2_c5444c07-50e6-4452-90ed-99ca49a106fc.webp'
import backImageCouple from '../../../../../Assets/Images/promo3_e10c824c-b077-4e67-be09-c11067066cf5.webp'
import './banner.css'
function Banner() {
   
    return (
        <div id="Banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div  style={{backgroundImage:`url(${backImageMan})`}} className="men">
                            <h6>Flash Sale</h6>
                            <a href="#">Men's Watch</a>
                            <p className="p-0">25% Discount</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="women" style={{backgroundImage:`url(${backImageWoman})`}}>
                            <h6>Flash Sale</h6>
                            <a href="#">Women's Watch</a>
                            <p>40% Discount</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="couple" style={{backgroundImage:`url(${backImageCouple})`}}>
                            <h6>Flash Sale</h6>
                            <a href="#">Couple's Watch</a>
                            <p>30% Discount</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner