import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseInfoDetails from './CourseInfoDetails'


const CourseDetails = () => {
  const courseInfo = useLoaderData()
  return (
    <div className='grid lg:grid-cols-2 lg:m-5 md:ml-20 mt-3 gap-3'>
      {
        courseInfo.map(course => <CourseInfoDetails
        
          key={course.id}
          course={course}
        ></CourseInfoDetails>)
      }
    </div>
  )
}

export default CourseDetails
