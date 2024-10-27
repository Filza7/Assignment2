import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);
    const [showRecentSearches, setShowRecentSearches] = useState(false); // New state to control visibility

    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        setRecentSearches(storedSearches);
    }, []);

    const handleSearch = () => {
        if (query) {
            onSearch(query);
            const updatedSearches = [query, ...recentSearches.filter(item => item !== query)].slice(0, 5);
            setRecentSearches(updatedSearches);
            localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
            setQuery('');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books..."
                onFocus={() => setShowRecentSearches(true)} // Show recent searches on focus
                onBlur={() => setShowRecentSearches(false)} // Hide recent searches on blur
            />
            <button onClick={handleSearch}>Search</button>
            {showRecentSearches && recentSearches.length > 0 && ( // Show recent searches only if visible
                <div>
                    <h4>Recent Searches</h4>
                    <ul>
                        {recentSearches.map((search, index) => (
                            <li key={index} onClick={() => onSearch(search)} style={{ cursor: 'pointer' }}>
                                {search}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
