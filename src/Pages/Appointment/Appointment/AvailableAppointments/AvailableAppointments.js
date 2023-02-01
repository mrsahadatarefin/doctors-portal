import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './appointmentOption/appointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointments,setAppointments]= useState([])
   const [treatment,setTreatment]=useState(null)
   
    useEffect(()=>{
       fetch('appointmentOptions.json')
       .then(res => res.json())
       .then(data => setAppointments(data))
        
    },[])
    
    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate,'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 mt-5'>
            {
              appointments.map(option=><AppointmentOption
              key={option._id}
              option={option}
              setTreatment={setTreatment}
              ></AppointmentOption>)  
            }
            </div>
           { 
           treatment&&
           <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;