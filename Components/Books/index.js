import React, { useEffect, useState } from 'react';
import { fetchAndOrganizeData } from '../../extrafunc'; // Ensure this path is correct
import styles from './Books.module.css'; // Adjust if your CSS file is named differently
import Genre from '../Genre'; // Import Genre component

const Books = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAndOrganizeData(); // Fetch the book data
            setBooks(data.books);
            setFilteredBooks(data.books); // Initialize filtered books with all books
            setGenres(data.genres); // If genres are included
            setLoading(false); // Set loading to false once data is fetched
        };

        fetchData();
    }, []);

    const handleGenreFilter = (genreId) => {
        if (genreId) {
            const filtered = books.filter(book => book.genreId === genreId);
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks(books); // Reset to all books if no genre is selected
        }
    };

    // Define handleExploreClick function
    const handleExploreClick = (id) => {
        console.log('Navigating to book with ID:', id); // Debugging log
        window.location.href = `/books/${id}`; // Use window.location.href for navigation
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.bookContainer}>
            {/* Pass the handleGenreFilter as a prop named onGenreChange */}
            <Genre list={genres} onGenreChange={handleGenreFilter} />
            {filteredBooks.map((book) => (
                <div key={book.id} className={styles.bookCard}>
                    <div className={styles.bookTitle}>{book.title}</div>
                    <div className={styles.bookDescription}>{book.description}</div>
                    <div className={styles.bookDetails}>
                        <p>Author ID: {book.authorId}</p>
                        <p>Genre ID: {book.genreId}</p>
                        <p>Price: ${book.price}</p>
                        <p>Rating: {book.rating}/5</p>
                    </div>
                    <button onClick={() => handleExploreClick(book.id)} className={styles.button}>
                        View Details
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Books;
