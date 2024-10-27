import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const SearchPage = () => {
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        setRecentSearches(storedSearches);
    }, []);

    return (
        <Layout>
            <h1>Search Page</h1>
            {recentSearches.length > 0 ? (
                <div>
                    <h4>Recent Searches:</h4>
                    <ul>
                        {recentSearches.map((search, index) => (
                            <li key={index}>{search}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No recent searches found.</p>
            )}
        </Layout>
    );
};

export default SearchPage;
