import React from 'react';
import img from '../../../../assets/images/treatment.png'

const FooterBanner = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl  mt-20 ">
  <figure><img src={img} alt="Album" className='w-1/2 rounded-lg'/></figure>
  <div className="card-body ">
    <h2 className="card-title  font-4xl font-bold  ">Exceptional Dental Care, on Your Terms</h2>
    <p>It is a long established fact that a reader will be
         distracted by the readable <br /> content of a page when 
         looking at its layout. The point of using Lorem Ipsumis 
       </p>
    <div className=" ">
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">GET STARTED</button>
    </div>
  </div>
</div>
    );
};

export default FooterBanner;