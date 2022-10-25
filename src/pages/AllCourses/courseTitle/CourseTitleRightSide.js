import React from 'react'
import { Link } from 'react-router-dom'

const CourseTitleRightSide = ({ crs }) => {
    const {name,img,id}=crs
  return (
    <div
      className='max-w-xs  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100'
      bis_skin_checked='1'
    >
      <img
        src={img}
        alt=''
        className='object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500'
      />
      <div
        className='flex flex-col justify-between p-6 space-y-8'
        bis_skin_checked='1'
      >
        <div className='space-y-2' bis_skin_checked='1'>
          <h2 className='text-3xl font-semibold tracking-wide'>
           {name}
          </h2>
        </div>
       <Link to={`/courseslist/${id}`}> <button
          type='button'
          className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900'
        >
          See Details
        </button></Link>
      </div>
    </div>
  )
}

export default CourseTitleRightSide
