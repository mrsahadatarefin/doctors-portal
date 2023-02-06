import { useQuery } from "@tanstack/react-query";
import React from "react";

const Allusers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    alert("1");

    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization:`bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "user",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) =>{ 
        if(data.modifiedCount > 0){
        alert('admin created ')
         refetch()
        }
        
        console.log(data)});
  };

  return (
    <div>
      <h1 className="text-3xl text-center">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-xs btn-accent text-white"
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  {" "}
                  <button className="btn btn-xs btn-outline btn-red-600 bg-red-400 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
