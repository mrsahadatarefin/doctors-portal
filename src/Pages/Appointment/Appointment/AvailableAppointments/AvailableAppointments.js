// import { useQueries } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './appointmentOption/appointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const data = format(selectedDate,'PP')
    const [appointments,setAppointments]= useState([])
   const [treatment,setTreatment]=useState(null)
   
// const {data:appointments = []}= useQueries({
//     queryKey:['appointments'],
//     queryFn:async ()=>{ 
//         const res = await fetch('http://localhost:5000/appointmentOptions')
//     const data=await res.json();
//     return data
//     }
// })
    useEffect(()=>{
       fetch(`https://doctors-portal-server-drab-zeta.vercel.app/appointmentOptions?data=${data}`)
       .then(res => res.json())
       .then(data => setAppointments(data))
        
    },[data])
    
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
            setTreatment={setTreatment}
            selectedDate={selectedDate}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;