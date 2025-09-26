import React from 'react'

const Chart = () => {
  return (
    <div className='w-[255px] bg-white bg-opacity-90 rounded-xl shadow-lg p-3'>
        <div className='flex gap-16'>
            <div className='flex flex-col '>
            <span className='text-[12px] text-[#26C32D]'>Eu id.Eu id.Eu </span>
            <span className='text-[12px] text-[#FE7558]'>Eu id.Eu id.Eu id.Eu id.</span>
            </div>
            <div className='bg-red-300 rounded-full p-[3px] flex justify-center items-center bg-gradient-to-t from-green-600 to-red-400 text-[12px]'>
                <div className='flex items-center justify-center w-full h-full px-[5px] bg-white rounded-full'>
                   70%
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-[12px] font-medium text-[#26C32D] '>Studens</div>
            <div className='text-[15px] font-medium'>58k+</div>
        </div>
        <div className='flex justify-between items-end'>
        <div className='flex gap-1 items-end'>
            <div className='w-[28px] h-[86px] rounded-t-full bg-[#F58C8C]'></div>
            <div className='w-[28px] h-[62px] rounded-t-full bg-[#DAD3FE]'></div>
        </div>
        <div className='flex gap-1 items-end'>
            <div className='w-[28px] h-[62px] rounded-t-full bg-[#FD7A5D]'></div>
            <div className='w-[28px] h-[62px] rounded-t-full bg-[#228D7D]'></div>
        </div>
        <div className='flex gap-1 items-end'>
            <div className='w-[28px] h-[62px] rounded-t-full bg-[#FC6E70]'></div>
            <div className='w-[28px] h-[62px] rounded-t-full bg-[#F6C4C4]'></div>
        </div>
        </div>
    </div>
  )
}

export default Chart