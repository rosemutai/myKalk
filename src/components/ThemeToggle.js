import React from 'react';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                
                <svg onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 absolute top-4 right-8 md:right-16 mx-auto z-40 cursor-pointer text-gray-500 dark:text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                
            ) : (
                    <svg onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 absolute top-4 right-8 mx-auto z-40 cursor-pointer text-gray-500 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                   
                )}
        </div>
    );
};

// top-4 right-8

export default Toggle;