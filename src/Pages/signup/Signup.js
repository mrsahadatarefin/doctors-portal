import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const {handleSubmit, register,formState:{errors}}= useForm()
    const handleSignUp = data =>{
        console.log(data)
         } 
    return (
        <div className="h-[800px]  flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-3xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
               {...register("name",{required:'*Name is required'})}
                type="text"
               
                className="input input-bordered w-full max-w-xs" />
              {errors.name && <p role='alert' className="text-red-600">{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email",{required:'*Email is required'})}
                className="input input-bordered w-full max-w-xs" />
             {errors.email && <p role='alert' className="text-red-600">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password",{required:'*password is required'})}
                className="input input-bordered w-full max-w-xs" />
               
               {errors.password && <p role='alert' className="text-red-600">{errors.password?.message}</p>}
            </div>
  
      
            <input className="btn btn-accent w-full "value='sign up'  type="submit" />
          </form>
          <p>New to doctors portal <Link className="text-primary" to='/login'> Create new account</Link></p>
        
          <div className="flex flex-col w-full border-opacity-50">
  
             <div className="divider">OR</div>
          <button className="btn btn-outline">CONTINUE WITH GOOGLE </button>
  </div>
        </div>
      </div>
    );
};

export default Signup;