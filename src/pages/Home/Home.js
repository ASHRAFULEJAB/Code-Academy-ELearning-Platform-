import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import coding from '../../assets/coding.json'
import { CourseContext } from '../../contexts/CourseProvider'

const Home = () => {
  const {  loader } = useContext(CourseContext)
  if (loader) {
    return <div className="flex items-center justify-center space-x-2" bis_skin_checked="1">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
    </div>
  }
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
        <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5'>
          <div className='max-w-xl mb-6'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-400 text-teal-900 rounded-full'>
                Trending Now
              </p>
            </div>
            <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6'>
              Code
              <br className='hidden md:block' />
              Academy{' '}
              <span className='inline-block text-deep-purple-accent-400'>
               ...
              </span>
            </h2>
            <p className='text-gray-700 text-base md:text-lg'>
            Code Academy is a famous onlime learing platfrom where you can learn so many updated technology with fun and easiest way..
            </p>
          </div>
          <div className='flex items-center space-x-3'>
            <Link
              to='/home'
              className='w-32 transition duration-300 hover:shadow-lg'
            >
              <img
                src='https://kitwind.io/assets/kometa/app-store.png'
                className='object-cover object-top w-full h-auto mx-auto'
                alt=''
              />
            </Link>
            <Link
              to='/home'
              className='w-32 transition duration-300 hover:shadow-lg'
            >
              <img
                src='https://kitwind.io/assets/kometa/google-play.png'
                className='object-cover object-top w-full h-auto mx-auto'
                alt=''
              />
            </Link>
          </div>
        </div>
        <div className='flex items-center mt-0 justify-center lg:w-1/2'>
        <Lottie  animationData={coding} loop={true}></Lottie>
        </div>
      </div>
      <Link
        to='/all-courses'
        aria-label='Scroll down'
        className='flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-purple-600 hover:border-purple-700 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='currentColor'
        >
          <path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' />
        </svg>
      </Link>
    </div>
  )
}

export default Home
