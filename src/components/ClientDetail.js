import React from 'react'

export default function ClientDetail() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
    <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-4/5">
        <form action="">
            <h2 className="text-blue-700 text-3xl font-semibold my-4">Client detail....</h2>
            {/* block first */}
            <div id="companyName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="companyName" className="w-1/2 mr-2">
                        <label for="cname" className="text-sm">Company name*</label><br />
                        <input type="text" name="" id="cname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm require" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="cNumber" className="w-1/2 ml-2 ">
                        <label  className="text-sm ">Country</label><br />
                        <input type="text" name="" id="cNumber"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>
            
                {/* block second */}
              <div id="fullName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="firstName" className="w-1/2 mr-2">
                        <label for="fname" className="text-sm">First Name</label><br />
                        <input type="text" name="" id="fname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="lastName" className="w-1/2 ml-2 ">
                        <label for="lname" className="text-sm">Last Name</label><br />
                        <input type="text" name="" id="lname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>
              {/* block five */}
              <div id="detail" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="place" className="w-1/2 mr-2">
                        <label for="country" className="text-sm">Email address*</label><br />
                        <input type="email" name="" id="country"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="numbr" className="w-1/2 ml-2 ">
                        <label for="phone" className="text-sm">Phone number</label><br />
                        <input type="number" name="" id="phone"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              {/* block third */}
              <div id="address" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="add1" className="w-1/2 mr-2">
                        <label for="address1" className="text-sm">Address line 1</label><br />
                        <input type="text" name="" id="address1"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="add2" className="w-1/2 ml-2 ">
                        <label for="address2" className="text-sm">Address line 2</label><br />
                        <input type="text" name="" id="address2"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>

              {/* block four */}
              <div id="code" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="pCode" className="w-1/2 mr-2">
                        <label for="postal" className="text-sm">Postal code</label><br />
                        <input type="number" name="" id="postal"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="city" className="w-1/2 ml-2 ">
                        <label for="cityname" className="text-sm">City</label><br />
                        <input type="text" name="" id="cityname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>


              {/* block six */}
              <div id="link" className="flex flex-row ">
                    {/* <!-- last name --> */}
                    <div id="site" className="w-1/2 mr-2 ">
                        <label for="website" className="text-sm">Website</label><br />
                        <input type="text" name="" id="website"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- first name --> */}
                    <div id="mail" className="w-1/2 ml-2 ">
                        <label for="mailEmail" className="text-sm">Invoice Currency</label><br />
                        <input type="text" name="" id="mailEmail"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              <label for="name" className="text-sm">Additional info</label><br />
            <input type="text" name="" id="name"
                className="w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm h-24" />

           
            {/* <!-- Sign up / submit button --> */}
            
            <button type="submit" name="" id="submit" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm mt-5" >Submit</button>
        </form>
    </div>
</div>
  )
}
