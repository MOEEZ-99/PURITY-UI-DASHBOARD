import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import table from "../assets/tablesSvg.svg"
import billing from "../assets/bilingsSvg.svg"
import rtl from "../assets/rtlSvg.svg"
import home from "../assets/homeSvg.svg"
import signIn from "../assets/signInSvg.svg"
import signUp from "../assets/signUpSvg.svg"
import profile from "../assets/profileSvg.svg"

import { useNavigate, useLocation } from 'react-router-dom'
import { Signup } from '../Pages/Signup'
import { MenuContext } from '../context/MenuContext'

export const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {showMenu, setShowMenu} = useContext(MenuContext)
    return (
        <>
        <div className={`absolute bg-neutral-300 ${showMenu? "opacity-[0.7] z-30" : "opacity-0 z-[-20]"} transition-all duration-300 ease-in-out h-screen w-screen overflow-hidden`} onClick={()=>{setShowMenu(false)}}></div>
        <div className={`bg-[#F8F9FA] box-border p-3 absolute xl:static min-h-[100dvh] z-30 ${showMenu? "left-[0]": "left-[-100%]"} transition-all duration-300 ease-in-out`}>

            <div className='logo flex items-center gap-3 justify-center pb-8 pt-4'>
                <img src={logo} alt="" className='cursor-pointer'/>
                <h3 className='text-xl font-semibold'>PURITY UI DASHBOARD</h3>
            </div>

           <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent'></div>

          <div className='pt-8 pb-3'>
            <ul className='flex flex-col'>
                <li onClick={()=>{navigate("/")
                    setShowMenu(false)
                }} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${location.pathname==="/"? "bg-neutral-200 font-semibold":"text-[#A0AEC0]"}`}>
                <div className='bg-white p-3 rounded-3xl'>
                <img src={home} alt="" />
                </div>
                Dashboard</li>

                <li onClick={()=>{navigate("/tables")
                    setShowMenu(false)
                }} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${location.pathname==="/tables"? "bg-neutral-200 font-semibold":"text-[#A0AEC0]"}`}>
                <div className='bg-white p-3 rounded-3xl'>
                <img src={table} alt="" />
                </div>
                Tables</li>

                <li onClick={()=>{navigate("/billing")
                    setShowMenu(false)
                }} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${location.pathname==="/billing"? "bg-neutral-200 font-semibold":"text-[#A0AEC0]"}`}>
                <div className='bg-white p-3 rounded-3xl'>
                <img src={billing} alt="" />
                </div>
                Billings</li>

                <li onClick={()=>{navigate("/rtl")
                    setShowMenu(false)
                }} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${location.pathname==="/rtl"? "bg-neutral-200 font-semibold":"text-[#A0AEC0]"}`}>
                <div className='bg-white p-3 rounded-3xl'>
                <img src={rtl} alt="" />
                </div>
                RTL</li>

            </ul>
          </div>

          <h1 className='font-semibold px-2'>ACCOUNT PAGES</h1>

          <div className='pt-3'>
            <ul className='flex flex-col'>
                <li onClick={()=>{navigate("/profile")
                    setShowMenu(false)
                }} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${location.pathname==="/profile"? "bg-neutral-200 font-semibold":"text-[#A0AEC0]"}`}>
                <div className='bg-white p-3 rounded-3xl'>
                <img src={profile} alt="" />
                </div>
                Profile
                </li>

                <li onClick={()=>{navigate("/sign-in")
                    setShowMenu(false)
                }} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${location.pathname==="/sign-in"? "bg-neutral-200 font-semibold":"text-[#A0AEC0]"}`}>
                <div className='bg-white p-3 rounded-3xl'>
                <img src={signIn} alt="" />
                </div>
                Sign In
                </li>

                <li onClick={()=>{navigate("/sign-up")
                    setShowMenu(false)
                }} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${location.pathname==="/sign-up"? "bg-neutral-200 font-semibold":"text-[#A0AEC0]"}`}>
                <div className='bg-white p-3 rounded-3xl'>
                <img src={signUp} alt="" />
                </div>
                Sign Up
                </li>
            </ul>
          </div>

        </div>
        </>
    )
}
