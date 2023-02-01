import React, { useState } from 'react';
import chair from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = ({selectedDate,SetSelectedDate}) => {
    
    return (
        <header className='my-6'>
          <div className="hero ">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <img src={chair} alt="" className='max-w-md lg: w-1/2 rounded-md  ' />
    <div className='mr-6'>
    <DayPicker 
    mode='single'
    selected={selectedDate}
    onSelect={SetSelectedDate}
    
    />
    
    </div>
  </div>
</div>  
        </header>
    );
};

export default AppointmentBanner;