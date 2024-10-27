import React from 'react';
import SearchBar from '../Search/SearchBar'; // Adjust path as needed

const Header = ({ onSearch }) => (
    <header style={{ padding: '10px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>My Book App</h1>
        <SearchBar onSearch={onSearch} />
    </header>
);

export default Header;
