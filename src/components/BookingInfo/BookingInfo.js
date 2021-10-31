import React, { useEffect, useState } from 'react';
import './BookingInfo.css'


const BookingInfo = () => {

const [allBooking,setAllBooking] = useState([]);


   useEffect(()=>{

     fetch('https://grisly-cemetery-32303.herokuapp.com/booking')
    .then(res=>res.json())
    .then(data=>setAllBooking(data))

   },[])

   const handleDelete= id =>{
       const url =`https://grisly-cemetery-32303.herokuapp.com/booking/${id}`;
       fetch(url,{
           method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            //   if(data.deletedCount)
              alert('This booking sucessfully deleted')
            //   const remaining= allBooking.filter=(singleBooking=>singleBooking._id !== id);
            //   setAllBooking(remaining);
          })
   }

   

    return (
        <div className="text-center">
            <h1>You can see all Booking Information from here</h1>
            <h3>Total booking Right Now: {allBooking.length}</h3>
            {
                allBooking.map(singleBooking => 
                <div className="booking-info"
                key={singleBooking?._id}>
                    <h2>Name: {singleBooking.Name}</h2>
                    <h2>Email: {singleBooking.email}</h2>
                    <h2>Address: {singleBooking.address}</h2>
                    <h2>Phone: {singleBooking.phone}</h2>
                    <button onClick={() => handleDelete(singleBooking._id)}
                     className="btn btn-primary mb-3">Delete</button>
                </div>)
            }

           
        </div>
    );
};

export default BookingInfo;