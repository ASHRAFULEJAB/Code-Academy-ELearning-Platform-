import React from 'react';
import { createContext } from 'react';
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebaseConfig'
import { useState } from 'react';

export const CourseContext = createContext()
const auth = getAuth(app)


const CourseProvider = ({children}) => {
    const user = useState('displayName:Amiii')
    return (
        <CourseContext.Provider value={user}>
            {children}
        </CourseContext.Provider>
    );
};

export default CourseProvider;