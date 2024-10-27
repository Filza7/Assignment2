import React, { useEffect, useState } from 'react';
import { fetchAndOrganizeData } from '../../extrafunc'; // Adjust this import path if necessary
import Books from '../../components/Books'; // Ensure this path is correct
import Genre from '../../components/Genre'; // Ensure this import is correct
import { useRouter } from 'next/router'; // Import useRouter for navigation

const BooksPage = () => {
    const router = useRouter(); // Initialize the router
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const { books, genres } = await fetchAndOrganizeData(); // Fetch books and genres
            setBooks(books);
            setGenres(genres);
            setFilteredBooks(books); // Initialize filtered books with all books
            setLoading(false);
        };

        loadData();
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const genreId = query.get('genre'); // Get the genre from the URL

        if (genreId) {
            const filtered = books.filter(book => book.genreId === genreId);
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks(books); // Reset to all books if no genre is selected
        }
    }, [books]); // Run this effect when books change

    const handleGenreChange = (genreId) => {
        // Navigate to the books page with the selected genre as a query parameter
        router.push(`/books?genre=${genreId}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ textAlign: 'center', fontFamily: 'cursive' }}>
            <h1>Books List</h1>
            <Genre list={genres} onGenreChange={handleGenreChange} /> {/* Pass the handleGenreChange function */}
            <Books list={filteredBooks} /> {/* Pass the filtered books to the Books component */}
        </div>
    );
};

export default BooksPage;
