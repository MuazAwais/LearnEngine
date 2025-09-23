import React from 'react'

const Class = () => {
  return (
    <div className='bg-white shadow-lg bg-opacity-80 p-4 max-w-[255px] flex gap-2 rounded-xl'>
        <div className='w-[38px] h-[38px] rounded-full bg-[#319D8E] overflow-hidden'><img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1757776499/aadf634b7daec2803c4419be91fc743b0c971feb_y3crsc.png" alt="teacher" className='w-fit rounded-full overflow-hidden' /></div>
        <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold'>Web Design Class</h3>
            <span className='text-slate-400 text-[14px]'>Today at 2:00 PM</span>
            <button className='bg-[#319D8E] px-2 py-1 rounded-lg text-[12px] text-white w-fitt'>Join Now</button>
        </div>
    </div>
  )
}

export default Class