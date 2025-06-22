import React from 'react'

export const DashboardBox = ({ title, amount, result, img }) => {
    return (
        <>
            <div className='main flex justify-between items-center p-4 w-full rounded-2xl bg-white'>
                <div className='flex flex-col gap-1'>
                    <p>{title}</p>
                    <div className='flex flex-col font-semibold'>
                        <span className='text-xl'>${amount}</span>
                        <span className={` ${result[0] === "-" ? "text-[#E53E3E]" : "text-[#48BB78]"}`}>{result}</span>
                    </div>

                </div>

                <div className='p-3 bg-main rounded-2xl w-fit cursor-pointer'>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}
