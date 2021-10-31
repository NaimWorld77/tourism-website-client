import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {id, name,description,img} = props.service;
    return (
        <div>
           
            
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 class="card-title text-danger">{name}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={`/showdetails/${id}`}>
                    <button className="btn btn-warning mt-2 text-center">Details</button>
                    </Link>
                    </div>
                    </div>
            </div>
       
    );
};

export default Service;