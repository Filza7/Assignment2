import React from 'react';
import SearchBar from './Search/SearchBar'; // Make sure this is the correct path

const Layout = ({ children, onSearch }) => {
    return (
        <div>
            <header>
                <SearchBar onSearch={onSearch} />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
