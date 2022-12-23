import React from 'react'
import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CourseContext } from '../../../contexts/CourseProvider'
import CourseInfoDetails from './CourseInfoDetails'


const CourseDetails = () => {
  const courseInfo = useLoaderData()
  const {  loader } = useContext(CourseContext)
  if (loader) {
    return <div className="flex items-center justify-center space-x-2" bis_skin_checked="1">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
    </div>
  }
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
