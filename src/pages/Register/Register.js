import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { CourseContext } from '../../contexts/CourseProvider'

const Register = () => {
  const { createUser,updateProfileInfo } = useContext(CourseContext)
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    photoURL: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState({
    name: '',
    photoURL: '',
    email: '',
    password: '',
    general: ""
  })
  
  
 
  const updateProfileInfoDetails = (name,photoURL) => {
    
    const profile = {
      displayName: name,
      photoURL:photoURL
    }
     console.log(profile)

    updateProfileInfo(profile)
      .then(result => {
        const user = result.user
        console.log(user)
      toast.success('Your Profile name has been Updated')
      })
      .catch(e => {
      toast.error('Registration complete..Please log in!!!')
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = registerInfo.name
    const photoURL= registerInfo.photoURL
      createUser(registerInfo.email, registerInfo.password)
          .then(result => {
              const user = result.user;
              console.log(user)
            toast.success('succesfull')
            updateProfileInfoDetails(name,photoURL)
             
          })
          .catch(e => {
            toast.error('registration incomplete')
            setError({ ...error, general: e.message });
          })
   
  }

  const handleNameChange = (e) => {
    const name = e.target.value
    // console.log(name)
    if (name.length < 8) {
      setError({ ...error, name: 'Your Should have 8 characters' })
      setRegisterInfo({ ...registerInfo, name: '' })
    } else {
      setError({ ...error, name: '' })
      setRegisterInfo({ ...registerInfo, name: e.target.value })
    }
  }

  const handlePhotoURLChange = (e) => {
    // const photoURL = e.target.value
    // console.log(photoURL)
    // if (photoURL.length>10) {
    //   setError({ ...error, photoURL: 'your photo must have png format' })
    //   setRegisterInfo({...registerInfo,photoURL:''})

    // } else {
    //   setError({ ...error, photoURL:''})
      setRegisterInfo({ ...registerInfo, photoURL: e.target.value })
    // }
  }

  const handleEmailChange = (e) => {
    const email = e.target.value

    if (
      !/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setError({ ...error, email: 'Please provide a valid email' })
      setRegisterInfo({ ...registerInfo, email: '' })
    } else {
      setError({ ...error, email: '' })
      setRegisterInfo({ ...registerInfo, email: e.target.value })
    }
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setError({ ...error, password: 'Please provide Minimum eight characters, at least one letter, one number and one special character' })
      setRegisterInfo({ ...registerInfo, password: '' })
    } else {
      setError({ ...error, password: '' })
      setRegisterInfo({ ...registerInfo, password: e.target.value })
    }
  }

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
        onSubmit={handleSubmit}
       
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
              onChange={handleNameChange}
              id='name'
              placeholder='Please Enter Your Name'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
            {error.name && <p className='text-red-500'>{error.name}</p>}
          </div>
          <div className='space-y-2' bis_skin_checked='1'>
            <label for='photoURL' className='block text-sm'>
              Photo URL
            </label>
            <input
              type='text'
              name='photo'
             
              onChange={handlePhotoURLChange}
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
             
              onChange={handleEmailChange}
              id='email'
              placeholder='codeacdemy@gamil.com'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
          </div>
          {error.email && <p className='text-red-500'>{error.email}</p>}

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
              onChange={handlePasswordChange}
              id='password'
              placeholder='*****'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
          </div>
          {error.password && <p className='text-red-500'>{error.password}</p>}
        </div>
        <button
          type='submit'
          className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900'
        >
          Register
        </button>
        {error.general && <p className="text-red-900 font-bold ">{error.general}</p>}
      </form>
    </div>
  )
}

export default Register
