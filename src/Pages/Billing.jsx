import React, { useRef, useState, useEffect } from 'react'
import { Topbar } from '../components/Topbar'
import payCard from "../assets/payCard.png"
import folder from "../assets/box-1.png"
import payPal from "../assets/payPal.png"
import masterCard from "../assets/masterCard.png"
import visaCard from "../assets/visaCard.png"
import pen from "../assets/pen.png"
import pdf from "../assets/pdf.png"
import bin from "../assets/bin.png"
import calander from "../assets/calander.png"
import redDownArrow from "../assets/redDownArrow.png"
import greenUpArrow from "../assets/greenTopArrow.png"

export const Billing = () => {
  const [visaCardValue, setVisaCardValue] = useState({
    value: "789 456 123 321",
    edit: true
  })
  const [masterCardValue, setMasterCardValue] = useState({
    value: "789 456 123 321",
    edit: true
  })
  const [invoices, setinvoices] = useState([
    { id: '#MS-567RT', date: '2025-06-01', price: '$1,250.00' },
    { id: '#MS-568RT', date: '2025-06-05', price: '$720.00' },
    { id: '#MS-569RT', date: '2025-06-10', price: '$980.00' },
    { id: '#MS-570RT', date: '2025-06-15', price: '$1,100.00' },
  ])
  const [billings, setbillings] = useState([
    { id: 1, title: "Ovilar Liam", company: "Viking Berkshire", email: "abc123@example.com", vat: "FRB56445" },
    { id: 2, title: "Ovilar Liam", company: "Viking Berkshire", email: "abc123@example.com", vat: "FRB56445" },
    { id: 3, title: "Ovilar Liam", company: "Viking Berkshire", email: "abc123@example.com", vat: "FRB56445" },
  ])
  const masterRef = useRef(null)
  const visaRef = useRef(null)
  useEffect(() => {
    if (!visaCardValue.edit && visaRef.current) {
      visaRef.current.focus();
    }
  }, [visaCardValue.edit]);

  useEffect(() => {
    if (!masterCardValue.edit && masterRef.current) {
      masterRef.current.focus();
    }
  }, [masterCardValue.edit]);
  return (
    <>
    <div className='px-4'>
      <Topbar pageName={"Billings"} />
    </div>

      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-6 w-full">

        <div className="1 w-full 2xl:col-span-4 col-span-1 grid md:grid-rows-5 gap-3">
          <div className='upper grid md:grid-cols-8 grid-cols-1 row-span-3 gap-3'>

            <div className='w-full md:col-span-4 col-span-1 h-full'>
              <img src={payCard} alt="" className='w-full h-full' />
            </div>

            <div className='md:col-span-2 w-full col-span-1 px-4 py-6 flex flex-col gap-4 items-center bg-white rounded-3xl'>
              <div className='p-3 bg-main rounded-xl cursor-pointer w-fit'><img src={folder} alt="" /></div>
              <div className='flex flex-col items-center'>
                <h1 className='text-xl font-semibold'>Salary</h1>
                <p className='text-text font-semibold text-xs'>Belong Interative</p>
              </div>
              <p className='font-semibold'>+$2000</p>
            </div>

            <div className='md:col-span-2 w-full col-span-1 px-4 py-6 flex flex-col gap-4 items-center bg-white rounded-3xl'>
              <div className='p-3 bg-main rounded-xl cursor-pointer w-fit'><img src={payPal} alt="" /></div>
              <div className='flex flex-col items-center'>
                <h1 className='text-xl font-semibold'>PayPal</h1>
                <p className='text-text text-xs font-semibold'>Freelance Payment</p>
              </div>
              <p className='font-semibold'>$45.00</p>
            </div>
          </div>

          <div className='bottom row-span-2 p-4 rounded-3xl flex flex-col gap-6 bg-white justify-center'>
            <div className='title flex justify-between w-full items-center'>
              <h1 className='text-2xl font-semibold'>Payment Method</h1>
              <button className='bg-gradient-to-r from-[#2A3153] via-[#1C2036] to-[#151928] px-6 py-2 text-center text-white rounded-2xl cursor-pointer'>Add a new card</button>
            </div>

            <div className='flex items-center justify-center gap-6 flex-wrap md:flex-nowrap'>

              <div className="i1 flex items-center justify-between gap-2 w-full border-2 border-gray-200 px-5 py-3 rounded-2xl">
                <img src={visaCard} alt="" onClick={() => { visaRef.current.disabled = false }} />
                <input type="text" className='outline-0 text-text w-full px-2' value={visaCardValue.value} disabled={visaCardValue.edit} ref={visaRef} onChange={(e) => {
                  setVisaCardValue({ ...visaCardValue, value: e.target.value })
                }} />
                <img src={pen} alt="" className='cursor-pointer' onClick={() => {
                  setVisaCardValue({ value: "", edit: !visaCardValue.edit })
                }} />
              </div>

              <div className="i2 flex items-center justify-between  gap-2 w-full border-2 border-gray-200 px-5 py-3 rounded-2xl">
                <img src={masterCard} alt="" />
                <input
                  type="text"
                  className='outline-0 text-text w-full px-2'
                  value={masterCardValue.value}
                  disabled={masterCardValue.edit}
                  ref={masterRef}
                  onChange={(e) => {
                    setMasterCardValue({ ...masterCardValue, value: e.target.value });
                  }}
                />

                <img src={pen} alt="" className='cursor-pointer' onClick={() => {
                  setMasterCardValue({ value: "", edit: !masterCardValue.edit })
                }} />
              </div>

            </div>
          </div>
        </div>



        <div className='invoice-2 w-full bg-white 2xl:col-span-2 col-span-1 rounded-3xl px-4 py-6 max-h-full overflow-auto'>
          <div className="title flex justify-between">
            <h1 className='font-semibold text-2xl'>INVOICES</h1>
            <button className='text-main text-xs border-2 border-main px-5 py-2 text-center font-semibold rounded-xl hover:bg-main hover:text-white cursor-pointer'>View All</button>
          </div>

          <div className="invoices w-full h-full overflow-auto mt-4">
            {invoices.map((i) => {
              return <div key={i.id} className='flex justify-between py-2'>

                <div className='flex flex-col gap-2'>
                  <h1 className='font-semibold'>{i.date}</h1>
                  <p className='text-text'>{i.id}</p>
                </div>


                <div className='flex items-center gap-3 self-start'>
                  <div className='text-text font-semibold text-xs'>{i.price}</div>
                  <div className='flex items-center gap-2 text-xs cursor-pointer'><img src={pdf} alt="" />PDF</div>
                </div>

              </div>
            })}
          </div>
        </div>
      </div>



      {/* {Billing Information---------------------------------------------------------------------} */}
{/* max-h-[calc(100vh-250px)] */}
      <div className="billing grid 2xl:grid-cols-5 grid-cols-1 w-full gap-8 mt-4 overflow-hidden">
        <div className="1 2xl:col-span-3 w-full bg-white px-4 py-6 rounded-3xl max-h-full overflow-hidden">
          <div className="title">
            <h1 className="text-2xl font-semibold">Billing Information</h1>
          </div>

          <div className="billing-content mt-6 max-h-[calc(100vh)] overflow-auto">
            {billings.map((b) => (
              <div
                key={b.id}
                className="bg-[#F8F9FA] rounded-3xl md:p-6 p-3 mt-4 flex justify-between w-full max-[400px]:text-xs"
              >
               <div>
                 <h1 className="font-semibold text-[#79879C] text-xl">{b.title}</h1>
                <div>
                  <span className="text-[#A0AEC0] font-light">Company Name: </span>
                  <span className="font-semibold text-[#718096]">{b.company}</span>
                </div>
                <div>
                  <span className="text-[#A0AEC0] font-light">Email Address: </span>
                  <span className="font-semibold text-[#718096]">{b.email}</span>
                </div>
                <div>
                  <span className="text-[#A0AEC0] font-light">VAT Number: </span>
                  <span className="font-semibold text-[#718096]">{b.vat}</span>
                </div>
               </div>

               <div className='flex items-center md:flex-row flex-col md:gap-12 gap-6 self-start'>
                <div className='flex items-center gap-2 cursor-pointer w-full text-[#E53E3E] font-semibold'><img src={bin} alt="" className='w-4 h-4'/> DELETE</div>
                <div className='flex items-center gap-2 cursor-pointer w-full text-[#2D3748] font-semibold'><img src={pen} alt="" className='w-4 h-4'/> EDIT</div>
               </div>
              </div>
            ))}
          </div>
        </div>

        <div className="2 2xl:col-span-2 w-full bg-white rounded-3xl md:p-6 p-3 max-h-[calc(100vh)] overflow-auto">
          <div className="title flex justify-between items-center">
            <h1 className='text-2xl font-semibold'>Your Transactions</h1>
            <div className='text-text flex items-center gap-3'><img src={calander} alt="" /><span className='md:block hidden'>23 - 30 March 2025</span></div>
          </div>

          <div className="newest">
            <h4 className='text-text py-3'>NEWEST</h4>
            <div className='1 flex justify-between py-3'>
                <div className='flex gap-2'>
                  <div><img src={redDownArrow} alt="" /></div>
                  <div className='name flex flex-col gap-1'>
                    <h4>Netflix</h4>
                    <p className='text-text'>27 March 2025 at 12:39 PM</p>
                  </div>
                </div>
                <div className="payment text-[#E53E3E] font-semibold">
                  -$2500
                </div>
            </div>

            <div className='2 flex justify-between py-3'>
                <div className='flex gap-2'>
                  <div><img src={greenUpArrow} alt="" /></div>
                  <div className='name flex flex-col gap-1'>
                    <h4>Apple</h4>
                    <p className='text-text'>27 March 2025 at 12:39 PM</p>
                  </div>
                </div>
                <div className="payment text-[#48BB78] font-semibold">
                  $2500
                </div>
            </div>

            <div className="recent">
                <h4 className='text-text py-3'>RECENT</h4>
                <div className='1 flex justify-between py-3'>
                <div className='flex gap-2'>
                  <div><img src={greenUpArrow} alt="" /></div>
                  <div className='name flex flex-col gap-1'>
                    <h4>Stripe</h4>
                    <p className='text-text'>27 March 2025 at 12:39 PM</p>
                  </div>
                </div>
                <div className="payment text-[#48BB78] font-semibold">
                  $2500
                </div>
            </div>

                <div className='2 flex justify-between py-3'>
                <div className='flex gap-2'>
                  <div><img src={greenUpArrow} alt="" /></div>
                  <div className='name flex flex-col gap-1'>
                    <h4>Hbspot</h4>
                    <p className='text-text'>27 March 2025 at 12:39 PM</p>
                  </div>
                </div>
                <div className="payment text-[#48BB78] font-semibold">
                  $2500
                </div>
            </div>

                <div className='3 flex justify-between py-3'>
                <div className='flex gap-2'>
                  <div><img src={greenUpArrow} alt="" /></div>
                  <div className='name flex flex-col gap-1'>
                    <h4>Webflow</h4>
                    <p className='text-text'>27 March 2025 at 12:39 PM</p>
                  </div>
                </div>
                <div className="payment text-black font-semibold">
                  Pending
                </div>
            </div>

                <div className='3 flex justify-between py-3'>
                <div className='flex gap-2'>
                  <div><img src={redDownArrow} alt="" /></div>
                  <div className='name flex flex-col gap-1'>
                    <h4>Microsoft</h4>
                    <p className='text-text'>27 March 2025 at 12:39 PM</p>
                  </div>
                </div>
                <div className="payment text-[#E53E3E] font-semibold">
                  -$25000
                </div>
            </div>



            </div>

          </div>
        </div>
      </div>

    </>
  )
}
