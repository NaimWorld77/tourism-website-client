import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Booking.css'


const Booking = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
     console.log(data);

    fetch('https://grisly-cemetery-32303.herokuapp.com/booking',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.insertedId){
            alert('booking processed successfully');
            reset();
        }
    })
}

    return (
        <div className="py-5 book-section bg-secondary">
            <h2 className="text-center text-white">fill up Your Booking</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} Placeholder="name" />
            <input {...register("email" )} Placeholder="email" />
            <input type="name" {...register("address")} Placeholder="address" />
            <input type="number" {...register("phone")} Placeholder="phone" />
            <input type="submit" />
            </form>
 
        </div>
    );
};

export default Booking;