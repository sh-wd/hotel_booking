
import { useEffect, useState } from 'react';
import './App.css';
import BookingsGrid from './BookingsGrid';
import { getBookings } from './BookingsService';
import BookingsForm from './BookingsForm';



function App() {

  const [guestBookings, setGuestBookings] = useState([])

  useEffect(()=>{
    getBookings().then((allBookings)=>{
      setGuestBookings(allBookings)
    })
  },[])
  
const addBooking = (booking)=>{
  setGuestBookings([...guestBookings,booking])
}
const removeBooking = (id)=>{
  const bookingsToKeep = guestBookings.filter(booking => booking._id !== id)
  setGuestBookings(bookingsToKeep)
}
  return (
    <div>
      <BookingsForm addBooking={addBooking}/>
      <BookingsGrid bookings={guestBookings} removeBooking={removeBooking}/>
    </div>
  );
}

export default App;
