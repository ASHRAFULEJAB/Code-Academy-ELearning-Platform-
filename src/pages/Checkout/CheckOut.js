import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Lottie from 'lottie-react'
import checkout from '../../assets/checkout.json'

import Swal from 'sweetalert2'

const CheckOut = () => {
  const checkOut = useLoaderData()
  console.log(checkOut)
  const { image, title, Description, total } = checkOut
  const handleChectout = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Congratulation!!You have Enrolled Succesfully',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    })
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-2xl font-bold tracking-wider text-cyan-700 uppercase rounded-full bg-teal-cyan-400'>
              Enroll Now
            </p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='9ef1ff62-feb2-41fe-8163-772b4c79de7b'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative ml-3'>{title}</span>
            </span>{' '}
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>{Description}</p>
        </div>
        <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
          <input
            placeholder='Email'
            required
            type='email'
            className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-600 focus:outline-none focus:shadow-outline'
          />
          <button
            onClick={handleChectout}
            type='submit'
            className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none'
          >
            Enrolled
          </button>
        </form>
        <p className='max-w-md mb-10 text-3xl font-bold text-gray-900 sm:text-sm md:text-center'>
          Price:{total}$
        </p>
        <img
          src={image}
          className='w-full mx-auto md:w-auto md:max-w-xs'
          alt=''
        />
      </div>
      <div className='flex items-center mt-0 justify-center '>
        <Lottie animationData={checkout} loop={true}></Lottie>
      </div>
    </>
  )
}

export default CheckOut
