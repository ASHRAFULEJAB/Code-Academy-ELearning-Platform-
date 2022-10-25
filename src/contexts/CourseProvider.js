import React from 'react'
import { createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebaseConfig'
import { useState } from 'react'

export const CourseContext = createContext()
const auth = getAuth(app)

const CourseProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const updateProfileInfo = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }
  const verifyWithEmail = () => {
    return sendEmailVerification(auth.currentUser)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const user = useState('displayName:Amiii')
  const courseInfo = {
    user,
    createUser,
    login,
    updateProfileInfo,
    verifyWithEmail,
    logOut,
    loginWithGoogle,
  }
  return (
    <CourseContext.Provider value={courseInfo}>
      {children}
    </CourseContext.Provider>
  )
}

export default CourseProvider
