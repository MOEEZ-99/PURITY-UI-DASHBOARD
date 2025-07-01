import React, {useState} from 'react'
import chakra from "../assets/chakrap.png"
import cr from "../assets/cLeft.png"
import cl from "../assets/cRight.png"
import { Topbar } from '../components/Topbar'
import logo from "../assets/logo.png"
import d from "../assets/dIcon.png"
import { useNavigate } from 'react-router-dom'
import profile from "../assets/dProfile.png"
import signIn from "../assets/dSignin.png"
import signUp from "../assets/dSignup.png"
import chakrap from "../assets/chakrap.png"
import ToogleSwitch from "../components/ToogleWitch.jsx"


export const Signin = () => {
  
  const move = useNavigate()
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="chkara hidden xl:block rounded-bl-2xl absolute md:h-[85vh] xl:w-[45vw] h-screen w-screen bg-main top-0 right-0">
        <div className="absolute left-0 w-full h-full"><img src={cl} alt="" className='w-full h-full'/></div>
        <div className="absolute right-0 w-full h-full"><img src={cr} alt="" className='w-full h-full'/></div>
        <div className="xl:flex items-center justify-center h-full w-full hidden"><img src={chakrap}/></div>
      </div>

    <nav className={`flex absolute xl:top-5 w-full`}>
      <div className={`flex flex-col xl:flex-row xl:justify-between xl:w-[70%] w-full mx-auto xl:bg-[rgba(255,248,248,0.8)] bg-slate-300 xl:items-center px-6 xl:py-8 py-4 xl:rounded-2xl  overflow-hidden z-20 ${show? "max-h-screen min-h-screen overflow-hidden": "max-h-[55px]"}`}>
        <div className="logo flex items-center gap-3 font-semibold text-xl">
          <div className="cursor-pointer xl:hidden block" onClick={()=>{setShow(!show)
            console.log(show)
          }}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="4" width="24" height="2" fill="#4FD1C5"/>
                    <rect y="11" width="24" height="2" fill="#4FD1C5"/>
                    <rect y="18" width="24" height="2" fill="#4FD1C5"/>
                    </svg></div>
          <div className="hidden xl:flex items-center gap-2"><img src={logo} alt="" /> <span>PURITY UI DASHBOARD</span></div>
          </div>
        <ul className='flex xl:flex-row flex-col md:items-center mt-8 xl:mt-0'>
          <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/profile")}}><img src={profile} alt="" className='h-4 w-4'/>PROFILE</li>
          <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/")}}><img src={d} alt="" className='h-4 w-4'/>DASHBOARD</li>
          <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/sign-in")}}><img src={signIn} alt="" className='h-4 w-4'/>SGN IN</li>
          <li className='px-2 py-2 flex items-center gap-3 font-semibold cursor-pointer hover:underline' onClick={()=>{move("/sign-up")}}><img src={signUp} alt="" className='h-4 w-4'/>SIGN UP</li>
        </ul>
        <div><button className='px-6 py-2 text-xs rounded-2xl font-semibold text-white bg-gradient-to-r from-[#2B3255] to-[#181C2E] cursor-pointer'>Free Download</button></div>
      </div>
    </nav>

    <div className="xl:h-[45vh] xl:w-[25%] container mx-auto p-6 absolute xl:top-[18%] top-30 xl:left-[16%]">
          <div className="title flex flex-col gap-2">
            <h1 className="text-main text-4xl font-semibold">Welcome Back</h1>
            <p className="text-text">Enter your email and password to sign in</p>
          </div>

          <div className="form mt-6 flex flex-col gap-6">
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

          <div className="flex mt-4">
            <button className="bg-main text-white px-4 w-full rounded-xl py-2 text-center cursor-pointer hover:bg-white border-2 border-main hover:text-main">SIGN IN</button>
          </div>
          <div className="flex items-center justify-center mt-4 gap-2">
            <span className="text-text">Dont have an account? </span>
            <span className="text-main hover:underline cursor-pointer">{" "}Sign Up</span>
          </div>
    </div>
    </>
  )
}
