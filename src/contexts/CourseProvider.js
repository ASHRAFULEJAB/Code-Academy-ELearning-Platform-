import React from 'react'
import { createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebaseConfig'
import { useState } from 'react'
import { useEffect } from 'react'

export const CourseContext = createContext()
const auth = getAuth(app)

const CourseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginWithGoogle = (provider) => {
    setLoader(true)
    return signInWithPopup(auth, provider)
  }

  const login = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const updateProfileInfo = (profile) => {
    setLoader(true)
    return updateProfile(auth.currentUser, profile)
  }
  const verifyWithEmail = () => {
    setLoader(true)
    return sendEmailVerification(auth.currentUser)
  }

  const logOut = () => {
    setLoader(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const courseInfo = {
    user,
    loader,
    setLoader,
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
