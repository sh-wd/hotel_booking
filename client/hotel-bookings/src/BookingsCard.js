import { deleteBooking } from "./BookingsService";
import React, { useState } from 'react';


const BookingCard = ({booking, removeBooking}) => {

    const handleDelete = () =>{
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id)
        })
    }

    const [isClicked,setClicked]= useState(false)

    const handleClick =()=>{
        setClicked(!isClicked)
    }


    return (
        <>
        <h4>{booking.guestName}</h4>
        <p>{booking.email}</p>
        <p>{booking.checkedIn}</p>
        <button onClick={handleDelete}> 🗑 </button>
        </>
      );
}
 
export default BookingCard;