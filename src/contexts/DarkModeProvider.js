import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext  = createContext()

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;