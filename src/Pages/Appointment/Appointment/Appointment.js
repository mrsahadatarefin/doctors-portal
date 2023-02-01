import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate,SetSelectedDate]=useState(new Date())
    return (
        <div>
           <AppointmentBanner
           selectedDate={selectedDate}
           SetSelectedDate={SetSelectedDate}
           
           ></AppointmentBanner>
           
            <AvailableAppointments
            selectedDate={selectedDate}
           

            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;