import React from 'react';
import Class from '../../components/ui/class';
import Greeting from '../../components/ui/greeting';


const HeroSection = () => {
  return (
    <div className="max-w-[1440px] md:mx-auto px-2 flex flex-col xl:flex-row gap-6 md:gap-[290px] relative">
      
      {/* LEFT: Text Section */}
      <div className="flex flex-col gap-6 max-w-[450px]">
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
          <button className="py-3 px-4 bg-[#FE7558] text-white text-xs rounded-xl hover:bg-[#fac2b7] hover:text-[#4e4e4e]">
            Start Learning
          </button>
          <button className="py-3 px-4 border-2 border-black text-xs rounded-xl">
            Discover
          </button>
        </div>
      </div>

      {/* RIGHT: Image Section */}
      <div className="max-w-[700px] flex relative md:scale-100 scale-75">
        <div className="relative flex flex-col justify-end">
          {/* Rotated background card */}
          <div className="bg-[#CEEBE4] w-[330px] sm:w-[368px] h-[330px] sm:h-[368px] absolute z-[1] rounded-lg rotate-[15deg]"></div>
          {/* Back card */}
          <div className="bg-[#F8775B] w-[330px] sm:w-[368px] h-[330px] sm:h-[368px] absolute z-[2] rounded-lg"></div>
          {/* Image */}
          <div className="z-[3] w-[330px] sm:w-[350px]">
            <img
              src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1757776499/73a9c03aadc019ba3468c832f506b15a70dbd6cb_d6jeqy.png"
              alt="Promotion"
            />
          </div>
        </div>
      </div>

      {/* Greeting Component */}
      <div className="absolute z-[4] left-1 md:left-[55%] bottom-20 scale-75">
        <Greeting />
      </div>

      {/* Class Component */}
      <div className="absolute z-[5] md:left-[85%] bottom-40">
        <Class />
      </div>

    </div>
  );
};

export default HeroSection;
