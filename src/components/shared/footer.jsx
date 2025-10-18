import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className=" bg-[#319D8E] text-gray-100">
      <div className="container">
      <div className="mt-[50px]">
      <div className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 md:gap-0 justify-around">
        <div className="flex flex-col gap-4">
          <div className="text-[24px] md:text-[30px] lg:text-[35px] font-bold">
            Learn Engine
          </div>
          <div className="text-[14px] md:text-[16px] lg:text-[18px]">
            Empowering Minds, One Click at a Time
          </div>
          <div className="text-[12px] md:text-[14px] lg:text-[16px]">
            © 2024 Learn Engine. All rights reserved.
          </div>
          <div className="flex gap-4 text-[20px]">
              <div className="border-2 border-white px-2 py-2 rounded-full hover:text-[#319d8e] hover:cursor-pointer hover:bg-gray-100 transition-all ease-in-out duration-300"><a href="https://www.facebook.com" target="block"><FaFacebookF /></a></div>
              <div className="border-2 border-white px-2 py-2 rounded-full hover:text-[#319d8e] hover:cursor-pointer hover:bg-gray-100 transition-all ease-in-out duration-300"><a href="hhtps://www.instagram.com" target="block"><FaInstagram /></a></div>
              <div className="border-2 border-white px-2 py-2 rounded-full hover:text-[#319d8e] hover:cursor-pointer hover:bg-gray-100 transition-all ease-in-out duration-300"><a href="https://www.x.com" target="block"><FaXTwitter /></a></div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold">
            Quick Links
          </div>
          <div className="flex flex-col gap-2 text-[12px] md:text-[14px] lg:text-[16px]">
            <Link to="home" smooth={true} duration={500}  className="hover:underline hover:cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="hover:underline hover:cursor-pointer">
              About Us
            </Link>
            <Link to="courses" smooth={true} duration={500} className="hover:underline hover:cursor-pointer">
              Courses
            </Link>
            <Link to="instructors" smooth={true} duration={500} className="hover:underline hover:cursor-pointer">
              Instructors
            </Link>
            <Link to="contact" smooth={true} duration={500} className="hover:underline hover:cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold">
            Contect Info
          </div>
          <div className="flex flex-col gap-2 text-[12px] md:text-[14px] lg:text-[16px]">
            <div className="flex gap-2">
              <div>Address</div>:{" "}
              <div>47 W 13th St, New York, NY 10011, USA </div>
            </div>
            <div className="flex gap-2">
              <div>Contect</div> : <div>+1 234 567 890</div>
            </div>
            <div className="flex gap-2">
              <div>Email</div> : <div>learnengine@info.pk</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6">
        <hr className="border-gray-300" />
        <div className="text-center text-[12px] md:text-[14px] lg:text-[16px] py-4">
          &copy; 2024 Learn Engine. All rights reserved.
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Footer;
