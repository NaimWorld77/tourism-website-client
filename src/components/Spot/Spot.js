import React from 'react';
import img1 from '../../spot images/s1.jpg';
import img2 from '../../spot images/s2.jpg';
import img3 from '../../spot images/s3.jpg';
import img4 from '../../spot images/s4.jpg';
import img5 from '../../spot images/s5.jpg';
import img6 from '../../spot images/s6.jpg';
import img7 from '../../spot images/s7.jpg';
import img8 from '../../spot images/s8.jpg';
import img9 from '../../spot images/s9.jpg';

const Spot = () => {
    return (
        <div>
            <h1 className="text-center">Lets see Some Beautifull Spot</h1>
            <div className="row mx-3">
                <div className="col-md-4">
                    <img className="img-fluid my-2" src={img1} alt="" />
                    <img className="img-fluid my-2" src={img2} alt="" />
                    <img className="img-fluid my-2" src={img3} alt="" />
                </div>
                <div className="col-md-4">
                    <img className="img-fluid my-2" src={img4} alt="" />
                    <img className="img-fluid my-2" src={img5} alt="" />
                    <img className="img-fluid my-2"  src={img6} alt="" />
                </div>
                <div className="col-md-4">
                    <img className="img-fluid my-2" src={img7} alt="" />
                    <img className="img-fluid my-2" src={img8} alt="" />
                    <img className="img-fluid my-2" src={img9} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Spot;


