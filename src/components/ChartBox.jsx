import React from 'react'

export const ChartBox = ({title, img, amount, value }) => {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className='flex items-center gap-3'>
                <div className='p-3 bg-main rounded-3xl cursor-pointer'>
                    <img src={img} alt="" />    
                </div> {title}
            </div>

            <h2 className='font-semibold text-xl'>{amount}</h2>
            <div className="w-full bg-gray-200 rounded-full h-[6px] overflow-hidden">
                <div
                    className="bg-main h-full transition-all duration-300"
                    style={{ width: `${value}%` }}
                />
            </div>

        </div>
    )
}
