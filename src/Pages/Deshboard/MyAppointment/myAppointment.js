import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const uri = `http://localhost:5000/bookings?email=${user.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(uri,{
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });



  return (
    <div>
      <h2 className="text-4xl">My appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(bookings) && bookings.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
               
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.AppointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
