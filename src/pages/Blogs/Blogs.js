import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded'>
          <Link to='/blogs' aria-label='Article'>
            <img
              src='https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
              className='object-cover w-full h-64 rounded'
              alt=''
            />
          </Link>
          <div className='py-5'>
            <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>
              13 Oct 2022
            </p>
            <Link
              to='/blogs'
              aria-label='Article'
              className='inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
            >
              <p className='text-2xl font-bold leading-5'>what is cors?</p>
            </Link>
            <p className='mb-4 text-gray-700'>
            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
            </p>
            <div className='flex space-x-4'>
              <Link
                to='/blogs'
                aria-label='Likes'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='6 23 1 23 1 12 6 12'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <path
                      d='M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>9.4K</p>
              </Link>
              <Link
                to='/blogs'
                aria-label='Comments'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='23 5 23 18 19 18 19 22 13 18 12 18'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <polygon
                      points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>71</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded'>
          <Link to='/blogs' aria-label='Article'>
            <img
              src='https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
              className='object-cover w-full h-64 rounded'
              alt=''
            />
          </Link>
          <div className='py-5'>
            <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>
              27 Oct 2022
            </p>
            <Link
              to='/blogs'
              aria-label='Article'
              className='inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
            >
              <p className='text-2xl font-bold leading-5'>Why are you using firebase? What other options do you have to implement authentication?</p>
            </Link>
            <p className='mb-4 text-gray-700'>
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </p>
            <div className='flex space-x-4'>
              <Link
                to='/blogs'
                aria-label='Likes'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='6 23 1 23 1 12 6 12'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <path
                      d='M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>7.4K</p>
              </Link>
              <Link
                to='/blogs'
                aria-label='Comments'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='23 5 23 18 19 18 19 22 13 18 12 18'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <polygon
                      points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>81</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded'>
          <Link to='/blogs' aria-label='Article'>
            <img
              src='https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              className='object-cover w-full h-64 rounded'
              alt=''
            />
          </Link>
          <div className='py-5'>
            <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>
              10 Oct 2022
            </p>
            <Link
              to='/blogs'
              aria-label='Article'
              className='inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
            >
              <p className='text-2xl font-bold leading-5'>
              How does the private route work?
              </p>
            </Link>
            <p className='mb-4 text-gray-700'>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>
            <div className='flex space-x-4'>
              <Link
                to='/blogs'
                aria-label='Likes'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='6 23 1 23 1 12 6 12'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <path
                      d='M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>8.4K</p>
              </Link>
              <Link
                to='/blogs'
                aria-label='Comments'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='23 5 23 18 19 18 19 22 13 18 12 18'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <polygon
                      points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>89</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded'>
          <Link to='/blogs' aria-label='Article'>
            <img
              src='https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              className='object-cover w-full h-64 rounded'
              alt=''
            />
          </Link>
          <div className='py-5'>
            <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>
              1 Oct 2022
            </p>
            <Link
              to='/blogs'
              aria-label='Article'
              className='inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
            >
              <p className='text-2xl font-bold leading-5'>
              What is Node? How does Node work?
              </p>
            </Link>
            <p className='mb-4 text-gray-700'>
            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
            <div className='flex space-x-4'>
              <Link
                to='/blogs'
                aria-label='Likes'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='6 23 1 23 1 12 6 12'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <path
                      d='M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>7.1K</p>
              </Link>
              <Link
                to='/blogs'
                aria-label='Comments'
                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
              >
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                  >
                    <polyline
                      points='23 5 23 18 19 18 19 22 13 18 12 18'
                      fill='none'
                      strokeMiterlimit='10'
                    />
                    <polygon
                      points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2'
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                    />
                  </svg>
                </div>
                <p className='font-semibold'>80</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
