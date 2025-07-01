import React from 'react'
import { Topbar } from "../components/Topbar.jsx"
import { DashboardBox } from '../components/DashboardBox.jsx'
import box1 from "../assets/box-1.png"
import box2 from "../assets/box-2.png"
import box3 from "../assets/box-3.png"
import box4 from "../assets/box-4.png"
import arrrow from "../assets/arrow.png"
import chakra from "../assets/chakra.png"
import Bg from "../assets/dashboardImg.png"
import whiteArrow from "../assets/arrowWhite.png"
import DarkBarChart from '../components/DarkBarChar.jsx'
import { ChartBox } from '../components/ChartBox.jsx'
import SimpleLineChart from '../components/SimpleLineChart.jsx'
import greenTick from "../assets/greenTick.png"
import dots from "../assets/dots.png"
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c4.png"
import c4 from "../assets/c5.png"
import c5 from "../assets/c6.png"
import c6 from "../assets/c7.png"
import members from "../assets/member1.png"
import ProgressBar from '../components/Progressbar.jsx'
import members2 from "../assets/members2.png"
import o1 from "../assets/order1.png"
import o2 from "../assets/order2.png"
import o3 from "../assets/order3.png"
import o4 from "../assets/order4.png"
import o5 from "../assets/order5.png"
import o6 from "../assets/order6.png"
import line from "../assets/line.png"

export const Dashboard = () => {
  return (
    <>
      <div className='px-4'>
      <Topbar pageName="Dashboard" />
      </div>
      <div className="main flex flex-col gap-8 w-full h-full">
        <div className='flex gap-3 xl:flex-nowrap flex-wrap w-full'>
          <DashboardBox title={"Today's Money"} amount={"53,000"} result={"+55%"} img={box1} />
          <DashboardBox title={"Today's Money"} amount={"23,000"} result={"+55%"} img={box2} />
          <DashboardBox title={"Today's Money"} amount={"254"} result={"-15%"} img={box3} />
          <DashboardBox title={"Today's Money"} amount={"523,000"} result={"+55%"} img={box4} />
        </div>

        <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>

          <div className='flex justify-between rounded-3xl w-full'>
            <div className='flex flex-col justify-between min-h-[250px] bg-white rounded-3xl w-full'>

              <div className='flex flex-col gap-2 p-4'>
                <h4 className='text-text font-semibold'>Built by developers</h4>
                <h1 className='font-semibold text-xl'>Purity UI Dashboard</h1>
                <p className='text-text md:w-[75%] w-full text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste excepturi reiciendis cumque deleniti.</p>
              </div>

              <div className='flex items-center gap-3 cursor-pointer p-4'>Read More <img src={arrrow} alt="" className='w-4' /></div>

            </div>
            <div className='h-full w-[115%] max-w-[400px] md font-semibold:block hidden'>
              <img src={chakra} alt="" className='rounded-3xl w-full h-full' />
            </div>

          </div>


          <div style={{ backgroundImage: `url(${Bg})` }} className="bg-cover bg-center rounded-3xl h-[100%]">
            <div className='bg-[#151928] h-[100%] opacity-[0.7] rounded-3xl flex flex-col justify-between p-4 cursor-pointer hover:opacity-[0.8] transition-all duration-250'>
              <div className='z-10'>
                <h2 className='font-semibold text-white text-2xl'>Work with Rockets</h2>
                <p className='font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ullam unde quaerat velit, cupiditate quo laboriosam aspernatur. Excepturi, autem incidunt.</p>
              </div>
              <div className='text-white flex items-center gap-3 cursor-pointer'>
                Read More <img src={whiteArrow} alt="" />
              </div>
            </div>
          </div>
        </div>



        <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>

          <div className="flex flex-col gap-8 p-4 bg-white rounded-3xl">

            <DarkBarChart />

            <div className='flex flex-col gap-8'>

              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-semibold'>Active Users</h1>
                <h6 className='font-semibold'><span className='text-green-400'>(+23)</span> <span className='text-text'>than last week</span></h6>
              </div>

              <div className='flex items-center flex-wrap md:flex-nowrap justify-evenly gap-6 w-full'>
                <ChartBox title="Users" amount={"45,000"} value={55} img={box1} />
                <ChartBox title="Clicks" amount={"520"} value={55} img={box2} />
                <ChartBox title="Sales" amount={"5,000"} value={55} img={box3} />
                <ChartBox title="Items" amount={"2,000"} value={55} img={box4} />
              </div>
            </div>


          </div>




          <div className="p-4 h-full w-full flex flex-col gap-8 bg-white rounded-3xl">
            <div>
              <h1 className='font-semibold text-xl'>Sales overview</h1>
              <h4>
                <span className='text-green-400'>(+5) more </span>
                <span className='text-text'>in 2022</span>
              </h4>
            </div>

            <div className='w-full h-[400px] md:h-[85%]'>
              <SimpleLineChart />
            </div>
          </div>


        </div>





        <div className="projects grid grid-cols-1 gap-8 2xl:grid-cols-6 w-full">

        {/**One */}  <div className='w-full py-6 px-4 rounded-3xl flex flex-col gap-6 2xl:col-span-4 col-span-1 bg-white'>

            <div className="title flex justify-between">
              <div>
                <h1 className='font-semibold text-xl'>Projects</h1>
                <div className='flex items-center gap-2 mt-2'>
                  <img src={greenTick} alt="" className='h-5' />
                  <span className='text-text font-semibold'>30 done</span> <span className='text-text'>this month</span>
                </div>
              </div>

              <div className='cursor-pointer'>
                <img src={dots} alt="" />
              </div>
            </div>

            <div className=" w-full overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="text-text">
                  <tr className='border-b border-gray-200'>
                    <th className="px-3 py-6 w-1/2 text-left">COMPANIES</th>
                    <th className="px-3 py-6 text-left">MEMBERS</th>
                    <th className="px-3 py-6 text-left">BUDGET</th>
                    <th className="px-3 py-6 text-left">COMPLETION</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 w-[300px] md:w-auto py-6 flex items-center gap-3 font-semibold">
                      <img src={c1} alt="" />
                      Chakra Soft UI Version
                    </td>
                    <td className="px-3 py-6">
                      <img src={members} alt="" />
                    </td>
                    <td className="px-3 py-6 font-semibold">$14,000</td>
                    <td className="px-3 py-6">
                      <ProgressBar value={35} />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                      <img src={c2} alt="" />
                      Add Progress Track
                    </td>
                    <td className="px-3 py-6">
                      <img src={members} alt="" />
                    </td>
                    <td className="px-3 py-6 font-semibold">$24,000</td>
                    <td className="px-3 py-6">
                      <ProgressBar value={95} />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                      <img src={c3} alt="" />
                      Fix Platform Errors
                    </td>
                    <td className="px-3 py-6">
                      <img src={members} alt="" />
                    </td>
                    <td className="px-3 py-6 font-semibold">Not Set</td>
                    <td className="px-3 py-6">
                      <ProgressBar value={100} />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                      <img src={c4} alt="" />
                      launch Our Mobile App
                    </td>
                    <td className="px-3 py-6">
                      <img src={members2} alt="" />
                    </td>
                    <td className="px-3 py-6 font-semibold">$45,00</td>
                    <td className="px-3 py-6">
                      <ProgressBar value={10} />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                      <img src={c5} alt="" />
                      Add the new pricing page
                    </td>
                    <td className="px-3 py-6">
                      <img src={members} alt="" />
                    </td>
                    <td className="px-3 py-6 font-semibold">$5,00</td>
                    <td className="px-3 py-6">
                      <ProgressBar value={23} />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                      <img src={c6} alt="" />
                      Redisgn new online shop
                    </td>
                    <td className="px-3 py-6">
                      <img src={members2} alt="" />
                    </td>
                    <td className="px-3 py-6 font-semibold">$58,00</td>
                    <td className="px-3 py-6">
                      <ProgressBar value={83} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>



          <div className="2 w-full 2xl:col-span-2 col-span-1 rounded-3xl px-4 py-6 flex flex-col gap-12 bg-white">

            <div className='title'>
              <h1 className='font-semibold text-xl'>Orders overview</h1>
              <h6>
                <span className='text-green-400 font-semibold'>+30% </span>
                <span className='text-text'>this month</span>
              </h6>
            </div>
             

            <div className='content'>

              <div className="1 flex gap-6 pb-2">
                <div className='flex flex-col '>
                  <img src={o1} alt="" className='py-1 h-fit w-6'/>
                  <img src={line} alt="" className='py-1 h-fit w-fit pl-[11px]'/>
                </div>
                <div>
                  <h1 className='text-xl font-semibold'>$24,000, Design Changes</h1>
                  <h3 className='font-semibold text-text'>22 DEC 7:20 PM</h3>
                </div>
              </div>

              <div className="2 flex gap-6 pb-2">
                <div className='flex flex-col '>
                  <img src={o2} alt="" className='py-1 h-fit w-6'/>
                  <img src={line} alt="" className='py-1 h-fit w-fit pl-[11px]'/>
                </div>
                <div>
                  <h1 className='text-xl font-semibold'>$24,000, Design Changes</h1>
                  <h3 className='font-semibold text-text'>22 DEC 7:20 PM</h3>
                </div>
              </div>

              <div className="3 flex gap-6 pb-2">
                <div className='flex flex-col '>
                  <img src={o3} alt="" className='py-1 h-fit w-6'/>
                  <img src={line} alt="" className='py-1 h-fit w-fit pl-[11px]'/>
                </div>
                <div>
                  <h1 className='text-xl font-semibold'>$24,000, Design Changes</h1>
                  <h3 className='font-semibold text-text'>22 DEC 7:20 PM</h3>
                </div>
              </div>

              <div className="4 flex gap-6 pb-2">
                <div className='flex flex-col '>
                  <img src={o4} alt="" className='py-1 h-fit w-6'/>
                  <img src={line} alt="" className='py-1 h-fit w-fit pl-[11px]'/>
                </div>
                <div>
                  <h1 className='text-xl font-semibold'>$24,000, Design Changes</h1>
                  <h3 className='font-semibold text-text'>22 DEC 7:20 PM</h3>
                </div>
              </div>

              <div className="5 flex gap-6 pb-2">
                <div className='flex flex-col '>
                  <img src={o5} alt="" className='py-1 h-fit w-6'/>
                  <img src={line} alt="" className='py-1 h-fit w-fit pl-[11px]'/>
                </div>
                <div>
                  <h1 className='text-xl font-semibold'>$24,000, Design Changes</h1>
                  <h3 className='font-semibold text-text'>22 DEC 7:20 PM</h3>
                </div>
              </div>

              <div className="6 flex gap-6 pb-2">
                <div className='flex flex-col '>
                  <img src={o6} alt="" className='py-1 h-fit w-6'/>
                  <img src={line} alt="" className='py-1 h-fit w-fit pl-[11px]'/>
                </div>
                <div>
                  <h1 className='text-xl font-semibold'>$24,000, Design Changes</h1>
                  <h3 className='font-semibold text-text'>22 DEC 7:20 PM</h3>
                </div>
              </div>
              

              
            </div>

          </div>
        </div>



      </div>
    </>
  )
}
