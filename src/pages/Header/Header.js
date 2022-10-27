import React, { useState } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { CourseContext } from '../../contexts/CourseProvider'
import ReactTooltip from 'react-tooltip'
import { FaSignInAlt } from 'react-icons/fa'
import { DarkModeContext } from '../../contexts/DarkModeProvider'
import './Header.css'
import HeaderSwitch from './HeaderSwitch'

const Header = () => {
  const { user, logOut } = useContext(CourseContext)
  const  {darkMode}=useContext(DarkModeContext)

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
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Codecademy</title>
              <path d='M23.827 19.729h-5.595c-.094 0-.17.058-.17.172v1.515c0 .094.058.17.172.17h5.594c.096 0 .172-.044.172-.164v-1.515c0-.105-.057-.166-.173-.166v-.014zM16.463 2.463c.016.034.03.067.047.12v18.79c0 .06-.02.096-.037.114a.168.168 0 01-.135.06H.153c-.038 0-.075 0-.097-.02A.181.181 0 010 21.393V2.564c0-.076.04-.134.096-.15h16.242c.04 0 .096.017.115.034v.016zM1.818 19.573c0 .072.038.135.096.152h12.643c.058-.019.096-.076.096-.154V4.402c0-.073-.039-.134-.098-.15H1.915c-.056.02-.096.073-.096.15l-.003 15.17zm5.174-8.375c.65 0 1.014.177 1.396.62.058.074.153.093.23.034l1.034-.92c.075-.044.058-.164.02-.224-.635-.764-1.554-1.244-2.74-1.244-1.59 0-2.79.795-3.255 2.206-.165.495-.24 1.126-.24 1.98 0 .854.075 1.483.255 1.98.465 1.425 1.665 2.204 3.255 2.204 1.2 0 2.115-.48 2.745-1.216.045-.074.06-.165-.015-.226l-1.037-.915c-.073-.047-.163-.047-.224.027-.39.45-.795.69-1.454.69-.706 0-1.245-.345-1.47-1.035-.136-.39-.166-.87-.166-1.483 0-.615.045-1.068.18-1.47.24-.66.766-1.008 1.486-1.008z' />
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
            <li>
              
                
              <div className={darkMode ? 'Header header-dark' : 'Header header-light'}>
                <HeaderSwitch/>
              </div>
         
              {/* <label
                for='Toggle1'
                className='inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100'
              >
                {
                  <span>Left</span>:<span>Right</span>
                }
               
                <span className='relative'>
                  <input id='Toggle1' type='checkbox' className='hidden peer' />
                  <div
                    className='w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400'
                    bis_skin_checked='1'
                  ></div>
                  <div
                    className='absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800'
                    bis_skin_checked='1'
                  ></div>
                </span>
                
              </label> */}
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
                  alt=''
                />
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
                  <FaSignInAlt />
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
                          to='/about'
                          aria-label='Product pricing'
                          title='about-us'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          About Us
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
                      {user?.photoURL ? (
                        <div
                          data-tip={user.displayName}
                          data-for='toolTip1'
                          data-place='top'
                        >
                          <img
                            className='h-10 w-10 rounded-3xl'
                            src={user.photoURL}
                            alt=''
                          />
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
                            <FaSignInAlt />
                          </Link>
                        </li>
                      )}
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
