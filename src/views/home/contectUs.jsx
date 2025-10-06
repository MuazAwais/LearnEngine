import React from 'react'

const ContectUs = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col'>
        <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-[40px] sm:text-[50px] md:text-[60px] lg:text-[65px] xl:text-[70px] font-bold bg-gradient-to-r from-gray-400 via-[#45c9c2] to-[#f8775b] text-transparent bg-clip-text inline-block'>Get in touch</div>
            <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Reach out, and let's create a universe of possibilities together!</div>
        </div>
        <div className='max-w-[1090px] mx-auto backdrop-blur-sm rounded-xl border-sky-300 p-6 flex gap-4'>
            <div className='max-w-[340px] md:max-w-[515px] flex flex-col gap-4'>
                <div>
                    <div className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold '>Contect Us</div>
                    <div className='text-[12px]'>Our team will come back to you within matter of hours to help you.</div>
                </div>
                <form action="Submit">
                    <div className='flex flex-col md:flex-row gap-2'>
                        <input type="text" className='border-gray-400 px-4 py-3 w-full' placeholder='First Name'/>
                        <input type="text" className='border-gray-400 px-4 py-3 w-full' placeholder='Last Name'/>
                    </div>
                    <div className='w-full'>
                        <input type="email" className='px-4 py-3 w-full' placeholder='Email' />
                    </div>
                    <div className='w-full rounded-lg'>
                        <input type="number" className='px-4 py-3 w-full rounded-lg' placeholder='Phone Number' />
                    </div>
                    <div className='w-full'>
                        <textarea name="massege" id="" cols="30" rows="10" placeholder='Massege' className='px-4 py-3 w-full'></textarea>
                    </div>
                    <button className='text-[18px] px-4 py-2 rounded-xl uppercase'>Send It</button>
                </form>
            </div>
            <div className='hidden md:block max-w-[515px] '>
                <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1759752707/altumcode-PNbDkQ2DDgM-unsplash_c5x0ax.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContectUs