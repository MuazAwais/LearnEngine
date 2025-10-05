import React from "react";
import instructors from "../../components/data/instructorsData";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const InstructorsCard = () => {
  const card = instructors;
  return (
    <div className="max-w-[1440px] mx-auto w-full flex flex-col">
      <h2 className="uppercase text-[#FE7558] text-[18px]">Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4 place-items-center">
        {/* Single Instructor Card */}
        {card.map((instructor, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-[305px] gap-3"
          >
            <div className="bg-[#87624E] rounded-xl w-[305px] h-[325px] flex flex-col items-center justify-center overflow-hidden">
              <img
                src={instructor.image}
                alt={instructor.title}
                className="w-full rounded-xl "
              />
            </div>
            <div className="flex justify-between items-center w-full px-2">
              <div className="flex flex-col items-start">
                <h3 className="text-[18px]">{instructor.name}</h3>
                <p className="text-[#8A8A8A] text-[12px]">{instructor.title}</p>
              </div>
              <button className="bg-[#319D8E] px-[25px] py-[13px] rounded-xl text-white flex items-center">
                Join Now
              </button>
            </div>
            <div className="flex justify-between items-center w-full px-2 text-[12px]">
              <div className="flex gap-1 items-center">
                <RiGraduationCapLine /> {instructor.courses} courses
              </div>
              <div className="flex gap-1 items-center">
                <FaUserGraduate /> {instructor.students}
              </div>
              <div className="flex gap-1 items-center">
                <div className="text-[#FF5D02]">
                  <GoStarFill />
                </div>
                {instructor.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="bg-[#FE7558] mx-auto px-[25px] py-[13px] rounded-xl text-white text-[12px] flex items-center justify-center">
          See more...
        </button>
      </div>
    </div>
  );
};

export default InstructorsCard;
