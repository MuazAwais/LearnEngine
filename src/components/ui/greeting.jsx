import React from 'react'
import { FaMessage } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
const Greeting = () => {
  return (
    <div className='flex max-w-[255px] p-3 gap-2 bg-slate-100 bg-opacity-80 rounded-xl shadow-lg items-center relative'>
        <div className='bg-[#F8775B] text-white px-2 py-2 rounded-xl h-fit'>
            <FaMessage size={26}/>
        </div>
        <div className='flex flex-col gap-1'>
            <h3 className='text-[12px] text-[#F8775B]'>Congrats!</h3>
            <p className='text-[11px]'>Your Admission completed</p>
        </div>
        <div className='bg-[#F8775B] text-white px-1 py-1 rounded-full h-fit mb-5'>
            <FaChevronDown size={15}/>
        </div>
    </div>
  )
}

export default Greeting