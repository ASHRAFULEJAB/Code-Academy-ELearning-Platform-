import React from 'react'
import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CourseContext } from '../../contexts/CourseProvider'
import CourseTitle from './courseTitle/CourseTitle'
import CourseTitleRightSide from './courseTitle/CourseTitleRightSide'

const AllCourses = () => {
  const courses = useLoaderData()
  const {  loader } = useContext(CourseContext)
  if (loader) {
    return <div className="flex items-center justify-center space-x-2" bis_skin_checked="1">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
    </div>
  }

  return (
    <div className='grid lg:grid-cols-2'>
      <div>
        {courses.map((cr) => (
          <CourseTitle key={cr.id} cr={cr}></CourseTitle>
        ))}
      </div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 m-3 gap-3'>
        {courses.map((crs) => (
          <CourseTitleRightSide key={crs.id} crs={crs}></CourseTitleRightSide>
        ))}
      </div>
    </div>
  )
}

export default AllCourses
