import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from '../../../assets/images/appointment.png'
const MakeAppointment = () => {
  return (
    <section className="mt-32" 
    style={{
        background:`url(${appointment})`
     }}
    
    >
     
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} alt="" className="hidden  md:block lg:block lg:w-1/2  rounded-lg shadow-md -mt-32"  />
          <div>
            <p className="font-xl font-bold text-primary  ">Appointment</p>
            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
