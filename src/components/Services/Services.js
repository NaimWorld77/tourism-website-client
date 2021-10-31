import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services,setServices]= useState([]);

    useEffect(()=>{
        fetch('https://grisly-cemetery-32303.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])



    return (
        <div id="services">
            <h1 className="text-center py-3">Our All Services</h1>
            <div className="service-container">
            {
                services.map(service=> <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;