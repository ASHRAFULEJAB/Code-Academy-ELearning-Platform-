import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='relative mt-16 bg-gray-900'>
      <svg
        className='absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-purple-400'
        preserveAspectRatio='none'
        viewBox='0 0 1440 54'
      >
        
      </svg>
      <div className='px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
          <div className='md:max-w-md lg:col-span-2'>
            <Link
              to='/'
              aria-label='Go home'
              title='Code academy'
              className='inline-flex items-center'
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Codecademy</title><path d="M23.827 19.729h-5.595c-.094 0-.17.058-.17.172v1.515c0 .094.058.17.172.17h5.594c.096 0 .172-.044.172-.164v-1.515c0-.105-.057-.166-.173-.166v-.014zM16.463 2.463c.016.034.03.067.047.12v18.79c0 .06-.02.096-.037.114a.168.168 0 01-.135.06H.153c-.038 0-.075 0-.097-.02A.181.181 0 010 21.393V2.564c0-.076.04-.134.096-.15h16.242c.04 0 .096.017.115.034v.016zM1.818 19.573c0 .072.038.135.096.152h12.643c.058-.019.096-.076.096-.154V4.402c0-.073-.039-.134-.098-.15H1.915c-.056.02-.096.073-.096.15l-.003 15.17zm5.174-8.375c.65 0 1.014.177 1.396.62.058.074.153.093.23.034l1.034-.92c.075-.044.058-.164.02-.224-.635-.764-1.554-1.244-2.74-1.244-1.59 0-2.79.795-3.255 2.206-.165.495-.24 1.126-.24 1.98 0 .854.075 1.483.255 1.98.465 1.425 1.665 2.204 3.255 2.204 1.2 0 2.115-.48 2.745-1.216.045-.074.06-.165-.015-.226l-1.037-.915c-.073-.047-.163-.047-.224.027-.39.45-.795.69-1.454.69-.706 0-1.245-.345-1.47-1.035-.136-.39-.166-.87-.166-1.483 0-.615.045-1.068.18-1.47.24-.66.766-1.008 1.486-1.008z"/>
              </svg>
              <span className='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
                Code Academy
              </span>
            </Link>
            <div className='mt-4 lg:max-w-sm'>
              <p className='text-sm text-purple-50'>
              Code Academy is a famous onlime learing platfrom where you can learn so many updated technology with fun and easiest way..
              </p>
              <p className='mt-4 text-sm text-deep-purple-50'>
              loaction:Austin,New York
              <br />
              Name:Code Academy
              <br />
              Established:Since 2000
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4'>
            <div>
              <p className='font-semibold tracking-wide text-teal-400'>
                Courses
              </p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    React Js
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    React Native
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-semibold tracking-wide text-teal-400'>
                Machine Learning
              </p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Web
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Data Structure
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-semibold tracking-wide text-teal-400'>
                C++
              </p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                   Networking
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Nonprofit
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Educational
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-semibold tracking-wide text-teal-400'>
                Business
              </p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    MangeMent Information
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    github
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='transition-colors duration-300 text-purple-50 hover:text-teal-400'
                  >
                    Firebase
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-purple-200 sm:flex-row'>
          <p className='text-sm text-gray-100'>
            © Copyright 2022 Code Acedemy. All rights reserved.
          </p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <Link
              to='/'
              className='transition-colors duration-300 text-purple-100 hover:text-teal-400'
            >
              <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
              </svg>
            </Link>
            <Link
              to='/'
              className='transition-colors duration-300 text-purple-100 hover:text-teal-400'
            >
              <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                <circle cx='15' cy='15' r='4' />
                <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
              </svg>
            </Link>
            <Link
              to='/'
              className='transition-colors duration-300 text-purple-100 hover:text-teal-400'
            >
              <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
