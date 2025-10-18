import React from 'react';
import Class from '../../components/ui/class';
import Greeting from '../../components/ui/greeting';
import Chart from '../../components/ui/chart';
import background from '../../assets/Frame.png'

const HeroSection = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col xl:flex-row gap-4 xl:gap-[10px] relative justify-between ">
      
      {/* LEFT: Text Section */}
      <div className="flex flex-col gap-6 xl:max-w-[650px] justify-center">
        <div>
          <span className="text-xs text-[#41CB47] font-normal">
            Best way to learn from anywhere
          </span>
          <h2 className="text-[45px] md:text-[55px] lg:text-[65px] xl:text-[70px] font-medium leading-snug">
            Learn on your schedule from any device
          </h2>
          <p className="text-sm">
            Unlock the freedom to learn anytime, anywhere. Our e-learning platform offers flexible, self-paced courses that fit into your busy life—whether you're at home, at work, or on the go. Access high-quality content from your laptop, tablet, or phone, and take control of your learning journey with interactive lessons, expert instructors, and real-world skills. Start learning today—on your terms.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-5">
          <button className="py-3 px-4 bg-[#FE7558] text-white text-xs rounded-xl hover:bg-[#fac2b7] hover:text-[#4e4e4e] hover:cursor-pointer transition-all duration-300 ease-in-out">
            Start Learning
          </button>
          <button className="py-3 px-4 border-2 border-black text-xs rounded-xl hover:bg-[#181818] hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out">
            Discover
          </button>
        </div>
      </div>

      {/* RIGHT: Image Section */}
      <div className="w-[600px] mx-auto sm:flex relative hidden">
        <div className="relative flex flex-col justify-end items-center pb-7 sm:w-[600px] md:w-[700px]">
          {/* Rotated background card */}
          <div className="bg-[#CEEBE4] w-[290px] sm:w-[338px] h-[290px] sm:h-[338px] absolute z-[1] rounded-2xl rotate-[15deg]"></div>
          {/* Back card */}
          <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} className="w-[290px] sm:w-[338px] h-[290px] sm:h-[338px] absolute z-[2] rounded-2xl "></div>
          {/* Image */}
          <div className="z-[3] w-[310px] sm:w-[320px]">
            <img
              src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1757776499/73a9c03aadc019ba3468c832f506b15a70dbd6cb_d6jeqy.png"
              alt="Promotion"
            />
          </div>
          <div className='z-[6] absolute right-0 bottom-40 hidden sm:block'>
            <Class/>
          </div>
          <div className='z-[7] absolute left-0 bottom-20 hidden sm:block'>
            <Greeting/>
          </div>
          <div className='z-[7] absolute left-0 top-20 hidden sm:block'>
            <Chart/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
