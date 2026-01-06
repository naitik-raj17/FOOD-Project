import React, { useState } from 'react'
import {IoIosArrowRoundBack} from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function ForgotPassword() {

    const [step,setStep  ]=useState(1)
    const [email,setEmail]=useState("")
    const [otp,setOtp] = useState("")
    const navigate = useNavigate()
    const [newPassword,setNewPassword]=useState("")
    const [confirmPassword,setconfirmPassword]=useState("")
  return (
    <div className='flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6] '>
      <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8'>
        <div className='flex items-center gap-4:mb-4'>
          <IoIosArrowRoundBack size={30} className='text-[#ff4d2d] cursor-pointer' onClick={()=>navigate("/user/login")} />
          <h1 className='text-2xl font-bold text-center text-[#ff4d2d]'>Forgot Password</h1>
        </div>

        {step==1 
          &&
           <div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>Email</label>
                    <input type="email" className='w-full border-1px rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>

                
                <button className='w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition cursor-pointer duration-200  bg-[#ff4d2d] hover:bg-gray-100'>
                  <span>Send Otp</span>
                                      </button>
           </div>}

        {step==2
          &&
           <div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>OTP</label>
                    <input type="email" className='w-full border-1px rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter Otp' onChange={(e)=>setOtp(e.target.value)} value={otp} required/>
                </div>

                
                <button className='w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition cursor-pointer duration-200  bg-[#ff4d2d] hover:bg-gray-100'>
                  <span>Verify</span>
                                      </button>
           </div>}
        

          {step==3
          &&
           <div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>New Password</label>
                    <input type="email" className='w-full border-1px rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter New Password' onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} required/>
                </div>
               
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>Confirm Password</label>
                    <input type="email" className='w-full border-1px rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter Confirm Password' onChange={(e)=>setconfirmPassword(e.target.value)} value={confirmPassword} required/>
                </div>
                
                <button className='w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition cursor-pointer duration-200  bg-[#ff4d2d] hover:bg-gray-100'>
                  <span>Reset Password</span>
                                      </button>
           </div>}
      </div>
    </div>
  )
}

export default ForgotPassword
