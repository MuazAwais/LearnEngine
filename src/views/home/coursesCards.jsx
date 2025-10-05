import React from 'react'
import { FaUserGraduate } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';

const CoursesCards = ({cardData}) => {
  const card = cardData;
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col'>
        <div className='flex flex-col gap-3 w-full mx-auto px-2 text-center'>
            <h2 className='uppercase text-[#FE7558] text-[18px]'>Students Favorite</h2>
            <h3 className='text-[40px] font-semibold sm:text-[50px] md:text-[60px] lg:text-[65px] xl:text-[70px]'>Popular Courses</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4 place-items-center px-2'>
          {card.map((course, index) => (
            <div key={index} className='max-w-[305px] w-full flex flex-col gap-3 shadow-xl py-[19px] px-[13px] rounded-xl'>
              <div className='w-[278px] h-[199px] rounded-xl overflow-hidden'>
                <img src={course.image} alt={course.title} className='w-full h-full'/>
              </div>
              <div className='flex h-[42px]'>
                <h3 className='text-[18px] font-semibold'>{course.title}</h3>
              </div>
              <div className='flex justify-between'>
                  <div className="flex gap-1 items-center">
                    {course.rating}
                    <div className="text-[#FF5D02]"><GoStarFill /></div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaUserGraduate /> {course.students} Students
                  </div>
              </div>
            </div>  
          ))}
        </div>
    </div>
  )
}

export default CoursesCards