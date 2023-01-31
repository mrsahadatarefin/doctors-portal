import React from 'react';

import Banner from '../Banner/Banner';
import InfoCards from '../InfoCart/Infocart';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../services/Services';
import Testimonial from '../Testimonial/Testimonial';
import FooterBanner from './FooterBanner/FooterBanner';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <FooterBanner></FooterBanner>

        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
        
        </div>
    );
};

export default Home;