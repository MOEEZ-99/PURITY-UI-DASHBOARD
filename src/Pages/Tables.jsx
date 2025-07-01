import React from 'react'
import a1 from "../assets/author1.png"
import a2 from "../assets/author2.png"
import a3 from "../assets/author3.png"
import a4 from "../assets/author4.png"
import a5 from "../assets/author5.png"
import a6 from "../assets/author6.png"
import { Topbar } from '../components/Topbar'
import members from "../assets/member1.png"
import members2 from "../assets/members2.png"
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c4.png"
import c4 from "../assets/c5.png"
import c5 from "../assets/c6.png"
import c6 from "../assets/c7.png"
import ProgressBar from '../components/Progressbar.jsx'
import dots from "../assets/dots.png"
import greenTick from "../assets/greenTick.png"

export const Tables = () => {
  return (
    <>
    <div className='px-6'>
    <Topbar pageName={"Tables"} />
    </div>
      <div className='px-6 py-6 bg-white rounded-3xl w-full overflow-x-auto'>
        <div className="title">
          <h1 className='font-semibold text-xl'>Authors table</h1>
        </div>
        <table className='min-w-full table-auto'>
          <thead>
            <tr className='text-text text-left border-b border-gray-200'>
              <th className="w-[50%] md:px-3 px-30 py-6">AUTHOR</th>
              <th className='px-3 py-6'>FUNCTION</th>
              <th className='px-3 py-6'>STATUS</th>
              <th className='px-3 py-6'>EMPLOYED</th>
              <th className='px-3 py-6'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className="flex items-center gap-4 px-3 py-4">
                <img src={a1} alt="author" />
                <div>
                  <h1 className="font-semibold">Esthrra Jackson</h1>
                  <p className="text-text">esthera123@gmail.com</p>
                </div>
              </td>
              <td className='px-3 py-4'>
                <h3 className='font-semibold'>Manager</h3>
                <p className='text-text'>Organization</p>
              </td>
              <td className='px-3 py-4'>
                <div className='bg-[#48BB78] px-4 py-2 rounded-xl font-semibold text-white w-fit'>Online</div>
              </td>
              <td className='px-3 py-4 font-semibold'>14/02/25</td>
              <td className='text-text font-semibold cursor-pointer'>Edit</td>
            </tr>

            <tr className='border-b border-gray-200'>
              <td className="flex items-center gap-4 px-3 py-4">
                <img src={a2} alt="author" />
                <div>
                  <h1 className="font-semibold">Alexa Liaras</h1>
                  <p className="text-text">alexa123@gmail.com</p>
                </div>
              </td>
              <td className='px-3 py-4'>
                <h3 className='font-semibold'>Programmer</h3>
                <p className='text-text'>Developer</p>
              </td>
              <td className='px-3 py-4'>
                <div className='bg-[#48BB78] px-4 py-2 rounded-xl font-semibold text-white w-fit'>Online</div>
              </td>
              <td className='px-3 py-4 font-semibold'>14/02/25</td>
              <td className='text-text font-semibold cursor-pointer'>Edit</td>
            </tr>

            <tr className='border-b border-gray-200'>
              <td className="flex items-center gap-4 px-3 py-4">
                <img src={a3} alt="author" />
                <div>
                  <h1 className="font-semibold">Laurent Micheal</h1>
                  <p className="text-text">laurent123@gmail.com</p>
                </div>
              </td>
              <td className='px-3 py-4'>
                <h3 className='font-semibold'>Programmer</h3>
                <p className='text-text'>Developer</p>
              </td>
              <td className='px-3 py-4'>
                <div className='bg-[#48BB78] px-4 py-2 rounded-xl font-semibold text-white w-fit'>Online</div>
              </td>
              <td className='px-3 py-4 font-semibold'>30/05/21</td>
              <td className='text-text font-semibold cursor-pointer'>Edit</td>
            </tr>

            <tr className='border-b border-gray-200'>
              <td className="flex items-center gap-4 px-3 py-4">
                <img src={a4} alt="author" />
                <div>
                  <h1 className="font-semibold">Freudo Hill</h1>
                  <p className="text-text">freudo123@gmail.com</p>
                </div>
              </td>
              <td className='px-3 py-4'>
                <h3 className='font-semibold'>Programmer</h3>
                <p className='text-text'>Developer</p>
              </td>
              <td className='px-3 py-4'>
                <div className='bg-[#CBD5E0] px-4 py-2 rounded-xl font-semibold text-white w-fit'>Offline</div>
              </td>
              <td className='px-3 py-4 font-semibold'>30/05/21</td>
              <td className='text-text font-semibold cursor-pointer'>Edit</td>
            </tr>

            <tr className='border-b border-gray-200'>
              <td className="flex items-center gap-4 px-3 py-4">
                <img src={a5} alt="author" />
                <div>
                  <h1 className="font-semibold">Mark Wilson</h1>
                  <p className="text-text">mark123@gmail.com</p>
                </div>
              </td>
              <td className='px-3 py-4'>
                <h3 className='font-semibold'>Programmer</h3>
                <p className='text-text'>Developer</p>
              </td>
              <td className='px-3 py-4'>
                <div className='bg-[#CBD5E0] px-4 py-2 rounded-xl font-semibold text-white w-fit'>Offline</div>
              </td>
              <td className='px-3 py-4 font-semibold'>30/05/21</td>
              <td className='text-text font-semibold cursor-pointer'>Edit</td>
            </tr>

            <tr className=''>
              <td className="flex items-center gap-4 px-3 py-4">
                <img src={a6} alt="author" />
                <div>
                  <h1 className="font-semibold">Daniel Thomson</h1>
                  <p className="text-text">daniel123@gmail.com</p>
                </div>
              </td>
              <td className='px-3 py-4'>
                <h3 className='font-semibold'>Programmer</h3>
                <p className='text-text'>Developer</p>
              </td>
              <td className='px-3 py-4'>
                <div className='bg-[#48BB78] px-4 py-2 rounded-xl font-semibold text-white w-fit'>Online</div>
              </td>
              <td className='px-3 py-4 font-semibold'>03/05/22</td>
              <td className='text-text font-semibold cursor-pointer'>Edit</td>
            </tr>
          </tbody>
        </table>

      </div>
      
      <div className="2 px-6 py-6 bg-white rounded-3xl mt-6">
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
                          <th className="px-3 py-6 w-[40%] text-left">COMPANIES</th>
                          <th className="px-3 py-6 text-left">BUDGET</th>
                          <th className='px-3 py-6 text-left'>STATUS</th>
                          <th className="px-3 py-6 text-left">COMPLETION</th>
                        </tr>
                      </thead>
      
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 w-[300px] md:w-auto py-6 flex items-center gap-3 font-semibold">
                            <img src={c1} alt="" />
                            Chakra Soft UI Version
                          </td>
                          <td className="px-3 py-6 font-semibold">$14,000</td>
                          <td className='px-3 py-6 font-semibold'>Working</td>
                          <td className="px-3 py-6">
                            <ProgressBar value={35} />
                          </td>
                          <td className='px-3 py-6 flex justify-end cursor-pointer'><img src={dots} alt="" /></td>
                        </tr>
      
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                            <img src={c2} alt="" />
                            Add Progress Track
                          </td>
                          <td className="px-3 py-6 font-semibold">$24,000</td>
                          <td className='px-3 py-6 font-semibold'>Not Started</td>
                          <td className="px-3 py-6">
                            <ProgressBar value={95} />
                          </td>
                          <td className='px-3 py-6 flex justify-end cursor-pointer'><img src={dots} alt="" /></td>
                        </tr>
      
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                            <img src={c3} alt="" />
                            Fix Platform Errors
                          </td>
                          <td className="px-3 py-6 font-semibold">Not Set</td>
                          <td className='px-3 py-6 font-semibold'>Working</td>
                          <td className="px-3 py-6">
                            <ProgressBar value={100} />
                          </td>
                          <td className='px-3 py-6 flex justify-end cursor-pointer'><img src={dots} alt="" /></td>
                        </tr>
      
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                            <img src={c4} alt="" />
                            launch Our Mobile App
                          </td>
                          <td className="px-3 py-6 font-semibold">$45,00</td>
                          <td className='px-3 py-6 font-semibold'>Working</td>
                          <td className="px-3 py-6">
                            <ProgressBar value={10} />
                          </td>
                          <td className='px-3 py-6 flex justify-end cursor-pointer'><img src={dots} alt="" /></td>
                        </tr>
      
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                            <img src={c5} alt="" />
                            Add the new pricing page
                          </td>
                          <td className="px-3 py-6 font-semibold">$5,00</td>
                          <td className='px-3 py-6 font-semibold'>Working</td>
                          <td className="px-3 py-6">
                            <ProgressBar value={23} />
                          </td>
                          <td className='px-3 py-6 flex justify-end cursor-pointer'><img src={dots} alt="" /></td>
                        </tr>
      
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-6 flex items-center gap-3 font-semibold">
                            <img src={c6} alt="" />
                            Redisgn new online shop
                          </td>
                          <td className="px-3 py-6 font-semibold">$58,00</td>
                          <td className='px-3 py-6 font-semibold'>Working</td>
                          <td className="px-3 py-6">
                            <ProgressBar value={83} />
                          </td>
                          <td className='px-3 py-6 flex justify-end cursor-pointer'><img src={dots} alt="" /></td>
                        </tr>
                      </tbody>
                    </table>
      </div>
      </div>
    </>
  )
}
