import React from 'react'

export default function RegisterUser() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
        <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
            <form action="">
                <h2 className="text-blue-700 text-3xl font-semibold my-4">Register Person</h2>
                {/* <!-- full name --> */}
              <div id="fullName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="firstName" className="w-1/2 mr-1">
                        <label for="fname" className="text-sm">First Name</label><br />
                        <input type="text" name="" id="fname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="lastName" className="w-1/2 mr-1 ">
                        <label for="lname" className="text-sm">Last Name</label><br />
                        <input type="text" name="" id="lname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>

                {/* <!-- email --> */}
                <label for="email" className="text-sm ">Email</label><br />
                <input type="email" name="" id="email"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                {/* <!-- password --> */}
                <label for="password" className="text-sm">Password</label><br />
                <input type="password" name="" id="password"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                {/* <!-- confirm password --> */}
                <label for="confirmPassword" className="text-sm">Confirm Password</label><br />
                <input type="password" name="" id="confirmPassword"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                {/* <!-- radio buttons for gender --> */}
                <div id="gender" className="text-sm mb-4 mt-4">
                <p className="mt-2">Mode of service</p>
                <input type="radio" name="service" id="online" className="text-sm mx-1"  /><label for="online">Online</label>
                <input type="radio" name="service" id="offline" className="text-sm mx-1" /><label for="offline">Offline</label>
                <input type="radio" name="service" id="both" className="text-sm mx-1" /><label for="both">Both</label>
            </div>
                {/* <!-- Sign up / submit button --> */}
                <input type="submit" name="" id="signUp"
                    className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm" /><br />
                <p className="text-xs my-2">Already have a account? <a href="/login" className="text-blue-600">Login</a></p>
            </form>
        </div>
    </div>
  )
}
