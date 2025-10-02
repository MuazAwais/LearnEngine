import React from 'react'
import instructors from '../../components/data/instructorsData'

const InstructorsCard = ( ) => {
  const card = instructors;
  return (
    <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-12'>
      {/* Single Instructor Card */}
      {card.map((instructor, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <div className='mb-4 text-center'>
            <img src={instructor.image} alt={instructor.title} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default InstructorsCard