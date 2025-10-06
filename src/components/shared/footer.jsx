import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[50px] bg-[#319D8E] text-gray-100'>
      <div className='max-w-[1440px] mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 md:gap-0 justify-between'>
        <div className='flex flex-col gap-4'>
            <div className='text-[24px] md:text-[30px] lg:text-[35px] font-bold'>Learn Engine</div>
            <div className='text-[14px] md:text-[16px] lg:text-[18px]'>Empowering Minds, One Click at a Time</div>
            <div className='text-[12px] md:text-[14px] lg:text-[16px]'>© 2024 Learn Engine. All rights reserved.</div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold'>Quick Links</div>
            <div className='flex flex-col gap-2 text-[12px] md:text-[14px] lg:text-[16px]'>
                <a href="#home" className='hover:underline'>Home</a>
                <a href="#about" className='hover:underline'>About Us</a>
                <a href="#courses" className='hover:underline'>Courses</a>
                <a href="#instructors" className='hover:underline'>Instructors</a>
                <a href="#contact" className='hover:underline'>Contact Us</a>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer