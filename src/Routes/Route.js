import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AllCourses from "../pages/AllCourses/AllCourses";
import Blogs from "../pages/Blogs/Blogs";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/all-courses',
                element:<AllCourses></AllCourses>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/faq',
                element:<Faq></Faq>
            },
            {
                path: '/profile',
                element:<Home></Home>
            },
            {
                path: '/about',
                element:<Home></Home>
            },
        ]
        
    }
])