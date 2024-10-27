// hooks/useSearchHistory.js
import { useState, useEffect } from 'react';

const useSearchHistory = () => {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(savedHistory);
    }, []);

    const addSearch = (searchTerm) => {
        const updatedHistory = [searchTerm, ...searchHistory].slice(0, 5); // Limit to 5 entries
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    return { searchHistory, addSearch };
};

export default useSearchHistory;
