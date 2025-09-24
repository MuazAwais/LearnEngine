import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-between gap-10 xl:flex-row">
      <div className="w-[695px] relative flex justify-center py-[50px] px-[60px]">
        <div className="w-[196px] h-[196px] bg-[#FFCFCF] rounded-xl absolute top-0 right-0"></div>
        <div className="flex items-center justify-center z-[5]" >
          <video width="600" autoPlay loop muted className="rounded-xl mx-auto">
            <source src="https://res.cloudinary.com/dv8dtipj1/video/upload/v1758645311/2516162-hd_1920_1080_24fps_iuusja.mp4" type="video/mp4" autoPlay muted />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-[578px] h-[355px] bg-[#319D8E] rounded-xl absolute left-0 bottom-0"></div>
      </div>
      <div className="flex flex-col max-w-[425px] gap-1 sm:gap-2 md:gap-3 lg:gap-4 mx-auto">
        <div className="text-[16px] font-normal text-[#FE7558]">ABOUT US</div>
        <div className="text-[30px] md:text-[40px] lg:text-[50px]">
          Welcome to online Class LearnEngine
        </div>
        <div className="text-[18px]">
          At LearnEngine, we’re dedicated to transforming the way you learn
          online. Whether you're a student, professional, or lifelong learner,
          our platform offers easy-to-follow courses, expert instructors, and
          interactive tools designed to make education accessible and effective.
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-2">
            <div className="bg-[#319D8E] text-white px-1 py-1 rounded-full h-fit mb-5">
              <FaChevronDown size={15} />
            </div>
            <div>Expert instructors across various subjects</div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#319D8E] text-white px-1 py-1 rounded-full h-fit mb-5">
              <FaChevronDown size={15} />
            </div>
            24/7 access on any device
          </div>
        </div>
        <button className="flex items-center py-[13px] px-[15px] bg-[#FE7558] text-white text-[12px] max-w-fit rounded-lg">
          Learn more...
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
