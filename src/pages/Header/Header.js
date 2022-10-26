import React, { useState } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { CourseContext } from '../../contexts/CourseProvider'
import ReactTooltip from 'react-tooltip'

const Header = () => {
  const { user, logOut } = useContext(CourseContext)

  const handleLogout = () => {
    logOut()
      .then(() => toast.success('Log out sucessfully'))
      .catch(() => toast.loading('someting went wrong'))
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div class='bg-gray-900 sticky top-0'>
      <div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative flex items-center justify-between'>
          <Link
            to='/'
            aria-label='Company'
            title='Code Academy'
            class='inline-flex items-center'
          >
            <svg
              class='w-8 text-teal-400'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'
            >
              <rect x='3' y='1' width='7' height='12' />
              <rect x='3' y='17' width='7' height='6' />
              <rect x='14' y='1' width='7' height='6' />
              <rect x='14' y='11' width='7' height='12' />
            </svg>
            <span class='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
              Code Academy
            </span>
          </Link>
          <ul class='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                to='/home'
                aria-label='Our product'
                title='Home'
                class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/all-courses'
                aria-label='Our product'
                title='all Courses'
                class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                to='/blogs'
                aria-label='Product pricing'
                title='Blogs'
                class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to='/faq'
                aria-label='About us'
                title='FAQ'
                class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                aria-label='About us'
                title='About us'
                class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
              >
                About Us
              </Link>
            </li>
            {user?.photoURL ? (
              <div
                data-tip={user.displayName}
                data-for='toolTip1'
                data-place='top'
              >
                <img
                  className='h-10 w-10 rounded-3xl'
                  src={user.photoURL}
                  alt=''/>
                <ReactTooltip id='toolTip1' />
              </div>
            ) : (
              <li>
                <Link
                  to='/profile'
                  aria-label='About us'
                  title='Profile'
                  class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
                >
                  Profile
                </Link>
              </li>
            )}
          </ul>
          {user?.uid ? (
            <p className='text-white'>
              {user?.displayName}{' '}
              <button
                className='bg-purple-600 text-white hover:bg-orange-500 p-2 rounded-lg font-bold'
                onClick={handleLogout}
              >
                Logout
              </button>{' '}
            </p>
          ) : (
            <>
              <ul class='flex items-center hidden space-x-8 lg:flex'>
                <li>
                  <Link
                    to='/register'
                    class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none'
                    aria-label='Sign up'
                    title='Register'
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to='/login'
                    class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none'
                    aria-label='Sign up'
                    title='Login'
                  >
                    LogIn
                  </Link>
                </li>
              </ul>
            </>
          )}
          <div class='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class='absolute top-0 left-0 w-full'>
                <div class='p-5 bg-white border rounded shadow-sm'>
                  <div class='flex items-center justify-between mb-4'>
                    <div>
                      <Link
                        to='/'
                        aria-label='Company'
                        title='Code Academy'
                        class='inline-flex items-center'
                      >
                        <svg
                          class='w-8 text-purple-400'
                          viewBox='0 0 24 24'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeMiterlimit='10'
                          stroke='currentColor'
                          fill='none'
                        >
                          <rect x='3' y='1' width='7' height='12' />
                          <rect x='3' y='17' width='7' height='6' />
                          <rect x='14' y='1' width='7' height='6' />
                          <rect x='14' y='11' width='7' height='12' />
                        </svg>
                        <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Code Academy
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class='space-y-4'>
                      <li>
                        <Link
                          to='/home'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/all-courses'
                          aria-label='Our product'
                          title='All courses'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          All Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          aria-label='Product pricing'
                          title='Blogs'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          aria-label='Product pricing'
                          title='Blogs'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/faq'
                          aria-label='Product pricing'
                          title='FAQ'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/profile'
                          aria-label='About us'
                          title='About us'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Profile
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li className=' mt-3 mb-5'>
                        <Link
                          to='/Register'
                          class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign up'
                          title='register'
                        >
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/login'
                          class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign up'
                          title='login'
                        >
                          LogIn
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
