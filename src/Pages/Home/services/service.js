import React from 'react';

const Service = ({servicesInfo}) => {
    const {name,description,img }=servicesInfo
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt='' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
    );
};

export default Service;