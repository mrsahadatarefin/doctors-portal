import React from "react";
import moduleName from "../../../assets/icons/quote.svg";
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import Review from "./Review/Review";
const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      reviewTitle:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img:img1
    },
    {
      id: 2,
      name: " Herry",
      reviewTitle:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img:img2
    },
    {
      id: 3,
      name: "Winson ",
      reviewTitle:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img:img3
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img src={moduleName} alt="" className=" w-24 lg:w-48" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        { reviews.map(review => <Review
        key={review.id}
        review={review}
        ></Review>)}
      </div>
    </section>
  );
};

export default Testimonial;
