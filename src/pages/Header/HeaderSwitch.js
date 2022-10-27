import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../../contexts/DarkModeProvider'
import { FaAdjust,FaMoon} from "react-icons/fa";

const HeaderSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const handleClick = () => {
    toggleDarkMode()
  }
  return (
    <div className='bg-gray-900 text-white'>
      <>
        {darkMode ? (
          <button
            onClick={handleClick}
            className='bg-white text-black rounded-lg text-2xl'
          >
           <FaAdjust/>
          </button>
        ) : (
          <button
            className=' text-white rounded-lg text-2xl'
            onClick={handleClick}
          >
            < FaMoon/>
          </button>
        )}
      </>
    </div>
  )
}

export default HeaderSwitch
