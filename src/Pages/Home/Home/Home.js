import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCart/Infocart';
import Services from '../services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
        </div>
    );
};

export default Home;