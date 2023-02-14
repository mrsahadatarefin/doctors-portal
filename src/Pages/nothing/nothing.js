import React from 'react';
import { Link } from 'react-router-dom';

const Nothing = () => {
    return (
        <div className='mt-40'>
            <h1 className='text-4xl text-center  font-bold  '>404 page</h1>
            <p className='text-center text-2
            font-bold'><Link to='/'>go to home</Link></p>
        </div>
    );
};

export default Nothing;