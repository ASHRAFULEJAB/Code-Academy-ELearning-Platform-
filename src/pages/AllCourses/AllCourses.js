import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CourseTitle from './courseTitle/CourseTitle'
import CourseTitleRightSide from './courseTitle/CourseTitleRightSide'

const AllCourses = () => {
  const courses = useLoaderData()
 
  return (
    <div className='grid lg:grid-cols-2'>
      <div>
        {courses.map((cr) => (
          <CourseTitle key={cr.id} cr={cr}></CourseTitle>
        ))}
      </div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 m-3 gap-3'>{courses.map((crs) => (
          <CourseTitleRightSide key={crs.id} crs={crs}></CourseTitleRightSide>
        ))}</div>
    </div>
  )
}

export default AllCourses
