import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import backgroundImg from '../../assets/Vector.png'
const AboutUs = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center xl:flex-row gap-x-[97px]">
      <div className="w-[345px] xsm:w-[395px] sm:w-[595px] md:w-[695px]  relative flex justify-center pt-[61px] pr-[50px] pl-[68px] pb-[48px]">
        <div className="w-[96px] h-[96px] sm:w-[150px] sm:h-[150px] md:w-[195px] md:h-[195px] bg-[#FFCFCF] rounded-xl absolute top-0 right-0"></div>
        <div className="flex items-center justify-center z-[5]" >
          <video autoPlay loop muted className="rounded-xl mx-auto w-[350px] sm:w-[550px] md:w-[577px] overflow-hidden">
            <source src="https://res.cloudinary.com/dv8dtipj1/video/upload/v1758645311/2516162-hd_1920_1080_24fps_iuusja.mp4" type="video/mp4" autoPlay muted className="rounded-xl w-full h-full" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }} className="w-[250px] h-[105px] sm:w-[450px] sm:h-[255px] md:w-[576px] md:h-[354px] rounded-xl absolute left-0 bottom-0"></div>
      </div>
      <div className="flex flex-col xl:max-w-[425px] gap-1 sm:gap-2">
        <div className="text-[16px] font-normal text-[#FE7558]">ABOUT US</div>
        <div className="text-[30px] md:text-[40px] lg:text-[45px]">
          Welcome to online Class LearnEngine
        </div>
        <div className="text-[18px]">
          At LearnEngine, we’re dedicated to transforming the way you learn
          online. Whether you're a student, professional, or lifelong learner,
           accessible and effective.
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
        <button className="flex items-center py-[13px] px-[15px] hover:bg-[#FE7558] hover:text-white text-[12px] max-w-fit rounded-lg bg-white text-[#FE7558] border border-[#FE7558] hover:cursor-pointer transition-all duration-300 ease-in-out">
          Learn more...
        </button>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
