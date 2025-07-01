import React, { useState } from 'react'
import bg from "../assets/profileBgLines.png"
import { ProfileTopbar } from '../components/ProfileTopbar.jsx'
import profile from "../assets/profileImg.png"
import profilePen from "../assets/profilePen.png"
import overview from "../assets/overview.png"
import teams from "../assets/teams.png"
import projects from "../assets/projects.png"
import ToogleSwitch from "../components/ToogleWitch.jsx"
import socialMedia from "../assets/socialMedia.png"
import pf1 from "../assets/pf1.png"
import pf2 from "../assets/pf2.png"
import pf3 from "../assets/pf3.png"
import members from "../assets/member1.png"
import plus from "../assets/plus.png"

export const Profile = () => {
    const [conv, setconv] = useState([
        {
            name: "Esthra Johnson",
            text: "Hey, did you check the latest report?"
        },
        {
            name: "Mark Wayne",
            text: "I'll join the meeting in 10 minutes."
        },
        {
            name: "Ava Smith",
            text: "Can you send over the design files?"
        },
        {
            name: "Ava Smith",
            text: "Can you send over the design files?"
        },
    ])
    const [projects, setprojects] = useState([
        {
            id: 1,
            name: "Redesign Website",
            detail: "Complete overhaul of the marketing site UI/UX.",
            img: pf1
        },
        {
            id: 2,
            name: "Mobile App Development",
            detail: "Build native apps for iOS and Android platforms.",
            img: pf2
        },
        {
            id: 3,
            name: "CRM Integration",
            detail: "Integrate Salesforce with internal tools and dashboards.",
            img: pf3
        }
    ])
    return (
        <>
            <div
                className="w-full min-h-[40vh] max-h-[40vh] bg-main mt-4 rounded-t-2xl p-4"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                <div className="topbar px-4">
                    <ProfileTopbar pageName={"Profile"} />
                </div>
            </div>

            <div className="profile bg-[rgba(255,248,248,0.8)] rounded-2xl p-4 flex md:flex-row flex-col gap-8 md:gap-0 md:justify-between items-center w-[95%] min-h-[20%] mx-auto -translate-y-1/2">
                <div className="left flex gap-3 items-center">
                    <div className='relative proilfImg'>
                        <div><img src={profile} alt="" className='rounded-xl' /></div>
                        <div className="pen absolute right-[-20%] top-[80%] p-3 bg-white rounded-xl cursor-pointer"><img src={profilePen} alt="" /></div>
                    </div>

                    <div className="left-right">
                        <h1 className='font-semibold text-xl'>Esthra Johsnon</h1>
                        <p className='text-text'>name@example.com</p>
                    </div>
                </div>


                <div className='right flex flex-wrap justify-center items-center gap-3'>
                    <button className='bg-white px-8 py-2 rounded-xl cursor-pointer flex items-center gap-2 font-semibold text-xs'><img src={overview} alt="" />OVERVIEW</button>
                    <button className='px-8 py-2 rounded-xl cursor-pointer flex items-center gap-2 font-semibold text-xs'><img src={teams} alt="" />TEAMS</button>
                    <button className='px-8 py-2 rounded-xl cursor-pointer flex items-center gap-2 font-semibold text-xs'><img src={projects} alt="" />PROJECTS</button>

                </div>
            </div>


            <div className="bottom-main mt-[-30px]">

                <div className="mid grid md:grid-cols-3 grid-cols-1 gap-6">
                    <div className="platform bg-white p-6 flex flex-col gap-3 rounded-2xl">
                        <h1 className='text-2xl font-semibold'>Platfrom Settings</h1>

                        <div className='account flex flex-col gap-3'>
                            <h4 className='text-text'>ACCOUNT</h4>
                            <div className='flex items-center gap-4'><ToogleSwitch />Emal me when someone follows me</div>
                            <div className='flex items-center gap-4'><ToogleSwitch />Emal me when someone follows me</div>
                            <div className='flex items-center gap-4'><ToogleSwitch />Emal me when someone answers me</div>
                        </div>

                        <div className='applicsation flex flex-col gap-3'>
                            <h4 className='text-text'>APPLICATION</h4>
                            <div className='flex items-center gap-4'><ToogleSwitch />Emal me when someone follows me</div>
                            <div className='flex items-center gap-4'><ToogleSwitch />Emal me when someone follows me</div>
                            <div className='flex items-center gap-4'><ToogleSwitch />Emal me when someone answers me</div>
                        </div>
                    </div>

                    <div className="profile bg-white p-6 rounded-2xl">
                        <div className="top flex flex-col gap-4 pb-8">
                            <h1 className='font-semibold text-2xl'>Profile Information</h1>
                            <p className='text-text text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda ullam officia nisi, nobis temporibus accusamus delectus maiores facilis obcaecati consequuntur at aliquid exercitationem enim!</p>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-text to-transparent"></div>

                        <div className='pt-8 flex flex-col gap-4'>
                            <div className='flex items-center gap-4'><span className='font-semibold'>Full Name: </span> <span className='text-text'>Alec M .Josn</span></div>
                            <div className='flex items-center gap-4'><span className='font-semibold'>Mobile: </span> <span className='text-text'>Alec M .Josn</span></div>
                            <div className='flex items-center gap-4'><span className='font-semibold'>Email: </span> <span className='text-text'>name@example.com</span></div>
                            <div className='flex items-center gap-4'><span className='font-semibold'>Location: </span> <span className='text-text'>Peshawar</span></div>
                            <div className='flex items-center gap-4'><span className='font-semibold'>Social Media: </span> <span className='text-text'><img src={socialMedia} alt="" className='h-4' /></span></div>
                        </div>
                    </div>




                    <div className="conver bg-white p-6 rounded-2xl max-h-[80vh] overflow-auto">
                        <h1 className='text-2xl font-semibold'>Conersations</h1>
                        <div className="conv max-h-full">
                            {conv.map((c, i) => {
                                return <div className='flex justify-between py-3' key={i}>
                                    <div className="1 flex gap-3">
                                        <div><img src={profile} alt="" className='rounded-2xl' /></div>
                                        <div>
                                            <h1 className='font-semibold'>{c.name}</h1>
                                            <p className="text-text">
                                                {c.text.split(' ').slice(0, 3).join(' ') + (c.text.split(' ').length > 3 ? '...' : '')}
                                            </p>

                                        </div>
                                    </div>
                                    <div className="2 cursor-pointer text-main">
                                        REPLY
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>


                <div className="projects p-6 bg-white rounded-2xl mt-[30px]">
                    <div className="title flex flex-col gap-3">
                        <h1 className='text-2xl font-semibold'>Projects</h1>
                        <p className='text-text'>Architects design house</p>
                    </div>

                    <div className="projects mt-3 grid md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-cols-1 gap-3 h-full w-full">
                        {projects.map((p) => {
                            return <div className='flex flex-col gap-8 w-full h-full' key={p.id}>
                                <div className="1 w-full h-full"><img src={p.img} alt="" className='w-full'/></div>
                                <div className="2 flex flex-col gap-2"><span className='text-text'>Project#{p.id}</span><span className='font-semibold'>{p.name}</span></div>
                                <div className='text-text'>{p.detail}</div>
                                <div className='flex items-center justify-between'>
                                    <button className='hover:bg-main hover:text-white text-main border-2 border-main px-6 py-2 text-xs rounded-xl cursor-pointer'>VIEW ALL</button>
                                    <img src={members} alt="" />
                                </div>
                            </div>
                        })}
                        <div className='flex flex-col items-center min-h-[200px] justify-center text-center h-full w-full border-2 border-text rounded-2xl cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out'>
                            <div className='mb-2'>
                                <img src={plus} alt="" className='h-fit w-fit'/>
                            </div>
                            <p className='text-text font-semibold'>Create new project</p>
                        </div>

                    </div>


                </div>


            </div>
        </>
    )
}
