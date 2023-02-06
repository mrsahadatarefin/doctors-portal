import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";
 
const Signup = () => {
  const [signupError, SetSingUpError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail,setCreatedUserEmail]=useState('')
  const navigate = useNavigate();
  const [token] = useToken(createdUserEmail);
 if(token){
  navigate('/')

 }
 
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
 
  const handleSignUp = (data) => {
    console.log(data);
    SetSingUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("user created successfully");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name,data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        SetSingUpError(err.message);
      });
  };
  const saveUser = (name, email) => {
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email);
        
      });
  };
  
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-3xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
              <toast></toast>
            </label>
            <input
              {...register("name", { required: "*Name is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p role="alert" className="text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "*Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "*password is required" })}
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-accent w-full mt-5 "
            value="sign up"
            type="submit"
          />
          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>
        <p>
          New to doctors portal{" "}
          <Link className="text-primary" to="/login">
            {" "}
            Create new account
          </Link>
        </p>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <button className="btn btn-outline">CONTINUE WITH GOOGLE </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
