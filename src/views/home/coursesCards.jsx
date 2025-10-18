import React from "react";
import { FaSignal, FaUserGraduate } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { MdBook } from "react-icons/md";
import { WiTime4 } from "react-icons/wi";

const CoursesCards = ({ cardData }) => {
  const card = cardData;
  return (
    <div className="container">
      <div className="max-w-[1440px] mx-auto flex flex-col">
      <div className="flex flex-col gap-3 w-full mx-auto px-2 text-center">
        <h2 className="uppercase text-[#FE7558] text-[18px]">
          Students Favorite
        </h2>
        <h3 className="text-[40px] font-semibold sm:text-[50px] md:text-[60px] lg:text-[65px] xl:text-[70px] bg-gradient-to-r from-gray-400 to-[#45c9c2]  text-transparent bg-clip-text inline-block">
          Popular Courses
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4 place-items-center px-2 ">
        {card.map((course, index) => (
          <div
            key={index}
            className="max-w-[305px] w-full flex flex-col gap-3 shadow-xl py-[19px] px-[13px] rounded-xl hover:cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-[278px] h-[199px] rounded-xl overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full"
              />
            </div>
            <div className="flex h-[42px]">
              <h3 className="text-[18px] font-semibold">{course.title}</h3>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                {course.rating}
                <div className="text-[#FF5D02]">
                  <GoStarFill />
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <FaUserGraduate /> {course.students} Students
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center text-[12px]">
                <div className="text-[#45c9c2]">
                  <WiTime4 size={18} />
                </div>{" "}
                {course.duration}
              </div>
              <div className="flex gap-1 items-center text-[12px]">
                <div className="text-[#FF5D02]">
                  <MdBook size={18} />
                </div>{" "}
                Lectures
              </div>
              <div className="flex gap-1 items-center text-[12px]">
                <div className="text-[#45c9c2]">
                  <FaSignal size={18} />
                </div>{" "}
                {course.level}
              </div>
            </div>
            <div className="px-2">
              <hr />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex justify-between items-center w-[45px] h-[45px] rounded-full overflow-hidden">
                  <img
                    src={course.instructorImage}
                    alt={course.instructorImage}
                    className=""
                  />
                </div>
                <div className="text-[16px] font-semibold">
                  {course.instructor}
                </div>
              </div>
              <div className="flex justify-end mt-2">
                {course.price === 0 ? (
                  <span className="text-[20px] font-bold text-[#45c9c2]">
                    Free 
                    </span>
                    ) : (
                      <span className="text-[20px] font-bold text-[#45c9c2]">
                        ${course.price}
                      </span>
                    )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CoursesCards;
