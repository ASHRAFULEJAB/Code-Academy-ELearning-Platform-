import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div
      className='w-full max-w-md lg:ml-96 lg:m-5 mt-5  p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100'
      bis_skin_checked='1'
    >
      <h2 className='mb-3 text-3xl font-semibold text-center'>
        Register to your account
      </h2>
          <p className='text-sm text-center dark:text-gray-400'>
          Already have account?
        <Link
          to='/login'
          rel='noopener noreferrer'
          className='focus:underline hover:underline'
        >
          LogIn here
        </Link>
       
      </p>
      <div className='my-6 space-y-4' bis_skin_checked='1'>
        <button
          aria-label='Login with Google'
          type='button'
          className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            className='w-5 h-5 fill-current'
          >
            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
          </svg>
          <p>Register with Google</p>
        </button>
      </div>
      <div className='flex items-center w-full my-4' bis_skin_checked='1'>
        <hr className='w-full dark:text-gray-400' />
        <p className='px-3 dark:text-gray-400'>OR</p>
        <hr className='w-full dark:text-gray-400' />
      </div>
      <form
        novalidate=''
        action=''
        className='space-y-8 ng-untouched ng-pristine ng-valid'
      >
        <div className='space-y-4' bis_skin_checked='1'>
          <div className='space-y-2' bis_skin_checked='1'>
            <label for='fullName' className='block text-sm'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Please Enter Your Name'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
          </div>
          <div className='space-y-2' bis_skin_checked='1'>
            <label for='photoURL' className='block text-sm'>
              Photo URL
            </label>
            <input
              type='text'
              name='photo'
              id='photo'
              placeholder='Please Enter Your photoURL'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
          </div>
          <div className='space-y-2' bis_skin_checked='1'>
            <label for='email' className='block text-sm'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='codeacdemy@gamil.com'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
          </div>
          <div className='space-y-2' bis_skin_checked='1'>
            <div className='flex justify-between' bis_skin_checked='1'>
              <label for='password' className='text-sm'>
                Password
              </label>
              <Link
                rel='noopener noreferrer'
                to='/login'
                className='text-xs hover:underline dark:text-gray-400'
              >
                Already have an Account Login?
              </Link>
            </div>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='*****'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
          </div>
        </div>
        <button
          type='button'
          className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900'
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register