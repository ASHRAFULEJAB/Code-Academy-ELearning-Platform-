import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import About from '../pages/About/About'
import AllCourses from '../pages/AllCourses/AllCourses'
import CourseDetails from '../pages/AllCourses/courseDetailsPage/CourseDetails'
import Blogs from '../pages/Blogs/Blogs'
import Faq from '../pages/FAQ/Faq'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/all-courses',
        element: <AllCourses></AllCourses>,
        loader: () => fetch('http://localhost:5000/courses'),
      },
      {
        path: '/courseslist/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseslist/${params.id}`),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
      },
      {
        path: '/profile',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
])
