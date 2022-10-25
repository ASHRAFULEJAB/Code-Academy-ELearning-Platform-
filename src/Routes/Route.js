import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import About from '../pages/About/About'
import AllCourses from '../pages/AllCourses/AllCourses'
import CourseDetails from '../pages/AllCourses/courseDetailsPage/CourseDetails'
import Blogs from '../pages/Blogs/Blogs'
import CheckOut from '../pages/Checkout/CheckOut'
import Faq from '../pages/FAQ/Faq'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Register from '../pages/Register/Register'
import PrivateRoutes from './PrivateRoutes'

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
        element: <PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseslist/${params.id}`),
        },
        {
            path: '/checkout',
            element:<CheckOut></CheckOut>
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
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
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
