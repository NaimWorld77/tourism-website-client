import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ShowDetails = () => {

    const {detailsId} = useParams();
    
    const [details,setDetails] = useState([]);
    console.log(details);

    useEffect(()=>{
        fetch("https://grisly-cemetery-32303.herokuapp.com/services")
        .then(res => res.json())
        .then(data =>setDetails(data))

    },[]);

    const showdetails = details.find(detail=>detail.id==detailsId)


    return (
        <div className="py-4">
                 <div class="card mb-3">
                <img src={showdetails?.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h2 class="card-title">{showdetails?.name}</h2>
                    <h3>Booking Fee: <span className="text-danger">{showdetails?.Fee}</span>$</h3>
                    <p class="card-text">{showdetails?.description}</p>
                <Link to={`/home`}>
                <button className="btn btn-primary mt-3 me-4">Go Previous</button>
                </Link>
                <Link to={`/booking`}>
                <button className="btn btn-primary mt-3">Book Now</button>
                </Link>
                </div>
                </div>
        </div>
    );
};

export default ShowDetails;