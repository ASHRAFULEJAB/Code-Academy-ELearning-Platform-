import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CourseContext } from '../contexts/CourseProvider';

const PrivateRoutes = ({ children }) => {
    
    const { user, loader } = useContext(CourseContext)
    const location = useLocation()
    if (loader) {
        return <div className="flex items-center justify-center space-x-2" bis_skin_checked="1">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
    </div>
    }
    if (!user) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
   
};

export default PrivateRoutes;