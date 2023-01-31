import React from 'react';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import Service from './service';



const Services = () => {
    const servicesData = [
        {
     id:1,
     name:'Fluoride Treatment',
     description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
     img:img1
    },
        {
     id:2,
     name:'Cavity Filling ',
     description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
     img:img2
    },
        {
     id:3,
     name:'Teeth Whitening',
     description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
     img:img3
    }
] 
    return (
        <div className=' mt-16'>
            <div className='text-center'>
               <h3 className='font-xl font-bold text-primary uppercase'>Our Services</h3> 
               <h2>Services We Provide</h2>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

              {
                servicesData.map(servicesInfo => <Service
                key={servicesInfo.id}
                servicesInfo={servicesInfo}
                ></Service> )
              }
            </div>
            
        </div>
    );
};

export default Services;