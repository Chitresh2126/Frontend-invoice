import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-screen'>
        {/* <div className='hidden sm:block'> */}
            {/* <img className='w-full h-full object-cover' src={loginImg} alt="" /> */}
        {/* </div> */}
        {/*  */}
        <div className='bg-gray-800 flex flex-col justify-center h-screen w-screen'>
            <form className='max-w-[400px]    w-9/12   mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
              <h2 className='text-4xl text-white font-bold text-center'>Sign in</h2>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>User Name</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
              </div>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
              </div>
              <div className='flex justify-between text-gray-400 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                {/* <p>Forgot Password</p> */}
              </div>
              
              <button onClick={() => navigate("/login/home")} className='w-full my-5 py-2 bg-blue-500 hover:bg-blue-900  text-white font-semibold rounded-lg' >Sign In</button>

            </form>
        </div>
    </div>
  )
}
// /login/user/detail