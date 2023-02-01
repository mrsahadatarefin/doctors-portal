import React from 'react';

const AppointmentOption = ({option,setTreatment}) => {
    const {name,slots,}=option
    
    return (
        <div className="card   shadow-xl ">
        <div className="card-body text-center ">
          <h2 className=" text-primary text-2xl font-bold ">{name}</h2>
          <p>{slots.length >0? slots[0]:'no Appointment available'}</p>
          <p> {slots.length}{slots.length > 1 ? 'spaces':'space'}</p>
          <div className="card-actions justify-center">
           
          
            <label
            onClick={()=>setTreatment(option)}
             disabled={slots.length===0}
            
            htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary text-white">BOOK Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOption;