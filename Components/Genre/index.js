import React, { useState } from 'react';
import styles from './Genre.module.css';

function Genre({ list, onGenreChange }) {
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleGenreSelect = (genreId) => {
        setSelectedGenre(genreId);
        if (onGenreChange) {
            onGenreChange(genreId); // Call the onGenreChange function passed as a prop
        }
    };

    return (
        <div className={styles.genreContainer}>
            <h2>Filter by Genre:</h2>
            <select 
                value={selectedGenre} 
                onChange={(e) => handleGenreSelect(e.target.value)} 
                className={styles.genreSelect}
            >
                <option value="">All Genres</option>
                {list.map((genre) => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Genre;
