import React, { useEffect, useState } from 'react'
import profile from "../assets/profileR.png"
import signin from "../assets/signinR.png"
import signup from "../assets/signupR.png"
import dashboard from "../assets/dashboardR.png"
import logo from "../assets/logoR.png"
import line1 from "../assets/cRight.png"
import line2 from "../assets/cLeft.png"
import apple from "../assets/appleR.png"
import facebook from "../assets/facebookR.png"
import google from "../assets/googleR.png"
import ToogleSwitch from "../components/ToogleWitch.jsx"
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const [show, setShow] = useState(false)
  const move = useNavigate()
  useEffect(()=>{
   if(show){
    document.querySelector("body").style.overflow = "hidden"
   }
   else{
    document.querySelector("body").style.overflow = "auto"
   }
   return(()=>{
    document.querySelector("body").style.overflow = "auto"
   })
  },[show])
  return (
    <>
        <div className="bg-main absolute w-full xl:h-[50vh] h-full">
          <div className="absolute right-0 w-full h-full"><img src={line1} alt="" className='w-full h-full'/></div>
          <div className="absolute left-0 w-full h-full"><img src={line2} alt="" className='w-full h-full'/></div>
        </div>

        <nav className={`flex absolute xl:top-5 w-full text-white`}>
            <div className={`flex flex-col xl:flex-row xl:justify-between xl:w-[70%] w-full mx-auto xl:bg-transparent bg-[#949494] xl:items-center px-6 xl:py-8 py-4 xl:rounded-2xl  z-20 ${show? "max-h-screen min-h-screen overflow-auto": "max-h-[55px] overflow-hidden"}`}>
              <div className="logo flex items-center gap-3 font-semibold text-xl">
                <div className="cursor-pointer xl:hidden block" onClick={()=>{setShow(!show)
                  console.log(show)
                }}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="4" width="24" height="2" fill="white"/>
                          <rect y="11" width="24" height="2" fill="white"/>
                          <rect y="18" width="24" height="2" fill="white"/>
                          </svg></div>
                <div className="hidden xl:flex items-center gap-2 text-white"><img src={logo} alt="" /> <span>PURITY UI DASHBOARD</span></div>
                </div>
              <ul className='flex xl:flex-row flex-col md:items-center mt-8 xl:mt-0'>
                <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/profile")
                setShow(false)
                }}><img src={profile} alt="" className='h-4 w-4'/>PROFILE</li>
                <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/")
                setShow(false)
                }}><img src={dashboard} alt="" className='h-4 w-4'/>DASHBOARD</li>
                <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/sign-in")
                setShow(false)
                }}><img src={signin} alt="" className='h-4 w-4'/>SGN IN</li>
                <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/sign-up")
                setShow(false)
                }}><img src={signup} alt="" className='h-4 w-4'/>SIGN UP</li>
              </ul>
              <div><button className='px-6 py-2 text-xs rounded-2xl font-semibold bg-white text-black cursor-pointer'>Free Download</button></div>
            </div>
        </nav>

        <div className="form xl:w-[30%] w-full z-10 absolute xl:top-[20%] top-20 xl:left-[38%] flex flex-col pb-10 xl:p-0 p-4">

          <div className="welocme flex flex-col items-center gap-3">
            <h1 className='text-3xl font-semibold text-white'>Welcome</h1>
            <p className='text-white text-center'>Use this awesome form to login or create a new account in your project for free</p>
          </div>


          <div className="main py-6 px-4 rounded-2xl mt-5 bg-white h-full">
            <div className="register flex items-center flex-col gap-8 py-6">
              <h1 className='font-semibold text-xl'>Register with</h1>
              <div className="flex items-center gap-10">
                <img src={apple} alt=""className='cursor-pointer' />
                <img src={facebook} alt="" className='cursor-pointer'/>
                <img src={google} alt="" className='cursor-pointer'/>
              </div>
              <div className='text-text text-xl'>or</div>
            </div>
             <div className="form flex flex-col gap-6 px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <label className="">Email</label>
                        <input placeholder="Your email address" className="px-4 py-3 text-text outline-0 border-1 border-text rounded-2xl"/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="">Password</label>
                        <input placeholder="Your password" className="px-4 py-3 text-text outline-0 border-1 border-text rounded-2xl" type={"password"}/>
                      </div>
                      <div className="flex items-center gap-3">
                        <ToogleSwitch/> Rememer Me
                      </div>
                    </div>
          
                    <div className="flex mt-4 px-6">
                      <button className="bg-main text-white px-4 w-full rounded-xl py-2 text-center cursor-pointer hover:bg-white border-2 border-main hover:text-main">SIGN IN</button>
                    </div>
                    <div className="flex items-center justify-center mt-4 gap-2">
                      <span className="text-text">Already have an account </span>
                      <span className="text-main hover:underline cursor-pointer">{" "}Sign In</span>
                    </div>
          </div>


        </div>
    </>
  )
}
