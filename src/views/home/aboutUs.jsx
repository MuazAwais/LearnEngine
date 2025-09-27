import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-between items-center gap-10 xl:gap-[130px] xl:flex-row px-2">
      <div className="w-[345px] xsm:w-[395px] sm:w-[595px] md:w-[695px]  mx-auto relative flex justify-center py-[20px] md:py-[30px] px-[20px] md:px-[50px]">
        <div className="w-[96px] h-[96px] sm:w-[150px] sm:h-[150px] md:w-[195px] md:h-[195px] bg-[#FFCFCF] rounded-xl absolute top-0 right-0"></div>
        <div className="flex items-center justify-center z-[5]" >
          <video autoPlay loop muted className="rounded-xl mx-auto w-[350px] sm:w-[550px] md:w-[577px]">
            <source src="https://res.cloudinary.com/dv8dtipj1/video/upload/v1758645311/2516162-hd_1920_1080_24fps_iuusja.mp4" type="video/mp4" autoPlay muted className="h-full w-full rounded-xl" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-[250px] h-[105px] sm:w-[450px] sm:h-[255px] md:w-[578px] md:h-[325px] bg-[#319D8E] rounded-xl absolute left-0 bottom-0"></div>
      </div>
      <div className="flex flex-col xl:max-w-[425px] gap-1 sm:gap-2 md:gap-3 lg:gap-4 mx-auto">
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
