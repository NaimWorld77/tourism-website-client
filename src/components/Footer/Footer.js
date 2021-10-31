import React from 'react';

const Footer = () => {
    return (
        <div>
        <div className="bg-dark p-3">
            <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                    <h3 className="text-danger">CoxATour</h3>
                    <h6 className="text-white">Adresss: 55 Commercial Rd, Melbourne VIC 3004
                    (03) 9076 2000</h6>
                    <p className="text-white">Emergency Contact: <br />  <i className="fas text-primary fa-phone-alt"></i> (03) 9076 1000
                    <br /><i className="fas text-primary fa-fax"></i> (+9)12542 </p>
                    <h3 className="text-light">Follow Us</h3>
                    <p className="text-danger"><i className="fab fa-facebook-f me-3"></i> 
                    <i className="fab fa-instagram me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-facebook-messenger"></i></p>

                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <h1 className="text-danger">Take a LOOK</h1>
                   <div className="text-white">
                   <p>Our all service all best</p>
                    <p>Low cost</p>
                    <p>World class</p>
                    <p>Travel Trade</p>
                    <p>Business Events</p>
                    <p>Tourism Business</p>
                   </div>
                    
                </div>
            </div>
        </div>            
        </div>
    );
};

export default Footer;