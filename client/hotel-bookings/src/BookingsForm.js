import {useState} from 'react';
import { postBooking } from './BookingsService';

const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState( {
        guestName: "",
        email: "",
        checkedIn: ""
    })

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }
    
    const onSubmit = (e) =>{
        e.preventDefault();
        if(formData.guestName && formData.email ) {
            postBooking(formData).then((data)=>{
                addBooking(data);
            })
            // Reset the form input values
            setFormData({
                guestName: "",
                email: "",
                checkedIn: "",
            });
    }}
    
    return (
        <form onSubmit={onSubmit} >
            <h2>Add a Booking</h2>
            <div>
                <label htmlFor="guestName">Guest Name: </label>
                <input 
                    autoFocus
                    required
                    onChange={onChange} 
                    type="text" 
                    id="guestName" 
                    name="guestName"
                    value={formData.guestName} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    required
                    onChange={onChange} 
                    type="text" 
                    id="email" 
                    name="email"
                    value={formData.email} />
            </div>
            <div>
                <label htmlFor="checkedIn">Checked In? </label>
                <input 
                    onChange={onChange}
                    type="checkbox" 
                    id="checkedIn" 
                    name="checkedIn" 
                    value={formData.checkedIn}/>
            </div>
    
            <input type="submit" value="Save" id="save"/>
        </form>
    
    );

}
 
export default BookingsForm;