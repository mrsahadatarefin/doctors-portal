import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
  const { name, slots } = treatment;
  const data = format (selectedDate,'PP') 
 const handleBooking = event =>{
   
    event.preventDefault();

    const form = event.target;
    const name = form.name.value
    const email = form.email.value
    const slot = form.slot.value
    const phone = form.phone.value
    
 
    const booking = {
       treatment:name,
       
        AppointmentDate:data,
        patient:name,
        slot:slot,
        email,
        phone,



    }
    console.log(booking)
    setTreatment(null)
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
          <h3 className="text-lg font-bold">{name}</h3>
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
              className="input input-bordered w-full "
            />
            <input
            name="email"
              type="text"
              placeholder="your email"
              className="input input-bordered w-full "
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
