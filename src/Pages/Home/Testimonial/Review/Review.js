import React from 'react';

const Review = ({review}) => {
    const { name, reviewTitle,img,location}= review
    return (
        <div className="card   shadow-xl">
        <div className="card-body">
         
          <p>{reviewTitle}</p>

          <div className="avatar  ">
  <div className="w-24 rounded-full ring ring-primary ring-offset-primary ring-offset-2 ">
    <img src={img}  alt="" />
    
  </div>
  <div className='p-5'>
    <p>{name}</p>
    <p>{location}</p></div>
</div>
          
        </div>
      </div>
    );
};

export default Review;