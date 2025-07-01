import React from 'react'
import serach from "../assets/search.png"
import signIn from "../assets/signIn.png"
import settings from "../assets/settings.png"
import bell from "../assets/bell.png"
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'

export const ProfileTopbar = ({pageName}) => {
    const {showMenu, setShowMenu} = useContext(MenuContext)
  return (
    <>
    <div className='flex justify-between  items-start'>
        <div className='flex flex-col gap-1'>
            <div className='flex gap-4'>
                <div className="burger xl:hidden block" onClick={()=>{
                    setShowMenu(!showMenu)
                    console.log(showMenu)
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="4" width="24" height="2" fill="white"/>
                    <rect y="11" width="24" height="2" fill="white"/>
                    <rect y="18" width="24" height="2" fill="white"/>
                    </svg>
                </div>
                <span className='text-white'>Pages </span>
                <span className='text-white'>/{" "}{pageName}</span>
            </div>

            <div className='font-semibold md:block hidden text-white'>
                {pageName}
            </div>
        </div>



        <div className='flex items-center gap-4'>
                <div className="input md:flex items-center px-4 py-2 rounded-2xl bg-white hidden">
                    <img src={serach} alt="" />
                    <input type="text" placeholder='Type here...' className='text-text outline-0 px-2'/>
                </div>

                <button className='md:flex items-center gap-2 cursor-pointer hidden text-white'>
                    <img src={signIn} alt="" />
                    Sign In
                </button>

                <img src={settings} alt="" className='cursor-pointer h-4'/>
                <img src={bell} alt="" className='cursor-pointer h-4'/>
        </div>


    </div>
    </>
  )
}
