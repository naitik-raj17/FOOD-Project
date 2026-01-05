import React, { useState } from 'react'
import {IoIosArrowRoundBack} from "react-icons/io";
function ForgotPassword() {

    const [step,setStep  ]=useState(1)
    const [email,setEmail]=useState("")
  return (
    <div className='flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6] '>
      <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8'>
        <div className='flex items-center gap-4:mb-4'>
          <IoIosArrowRoundBack size={30} className='text-[#ff4d2d]'/>
          <h1 className='text-2xl font-bold text-center text-[#ff4d2d]'>Forgot Password</h1>
        </div>

        {step==1 
          &&
           <div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>Email</label>
                    <input type="email" className='w-full border-1px rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>
           </div>}
      </div>
    </div>
  )
}

export default ForgotPassword
