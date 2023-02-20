import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { json } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
  const { name:treatmentName, slots } = treatment;
  
  const data = format (selectedDate,'PP') 
 const {user} = useContext(AuthContext)
  const handleBooking = event =>{
   
    event.preventDefault();

    const form = event.target;
    const name = form.name.value
    const email = form.email.value
    const slot = form.slot.value
    const phone = form.phone.value
    
 
    const booking = {
       treatment:treatmentName,
       
        AppointmentDate:data,
        patient:name,
        slot:slot,
        email,
        phone,



    }
    console.log(booking)
 fetch('https://doctors-portal-server-drab-zeta.vercel.app/bookings',{
   method:'POST',
   headers:{
    'Content-type':'application/json'
   },
   body:JSON.stringify(booking)
 })
 .then(res => res.json())
 .then(data=>{
  console.log(data)
  setTreatment(null)
  if(data.acknowledged){
    toast.success('booking confirmed')
  }
  else{
    toast.error('you already have a booking')
  }
  

 })

    
}
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={data}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">

                {

               slots.map((slot,i)=><option value={slot}
                key={i}
                
                >{slot} </option>)

                }

              
            </select>
            <input
            name="name"
              type="text"
              placeholder="Your name"
              
              defaultValue={user?.displayName}
              className="input input-bordered w-full "
              readOnly
            />
            <input
            name="email"
              type="text"
              placeholder="your email"
              defaultValue={user.email}
              
              
              className="input input-bordered w-full "
              readOnly

            />
            <input
            name="phone"
              type="text"
              placeholder="phone number"
              className="input input-bordered w-full "
            />
            <br />
            <input
              className="btn btn-accent w-full max-xs"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
