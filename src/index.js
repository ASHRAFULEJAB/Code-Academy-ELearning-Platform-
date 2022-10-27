import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast'
import CourseProvider from './contexts/CourseProvider'
import DarkModeProvider from './contexts/DarkModeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CourseProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
      <Toaster />
    </CourseProvider>
  </React.StrictMode>
)
