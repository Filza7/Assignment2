// components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust the import path

const ThemeToggle = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
};

export default ThemeToggle;
