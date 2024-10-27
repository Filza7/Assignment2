import { useEffect, useState } from "react"; // Ensure useState is imported
import { useRouter } from "next/router"; // Import useRouter
import { fetchAndOrganizeData } from '../extrafunc';
import styles from './index.module.css';
import Book from "../Components/Books"; // Adjust this path if necessary
import Genre from "../Components/Genre"; // Ensure this import is correct
import SearchBar from "../Components/Search/SearchBar"; // Adjust this path if necessary

export default function FeaturedEventsPage() {
  const [books, setBooks] = useState([]); // State for books
  const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books
  const [genres, setGenres] = useState([]); // State for genres
  const [loading, setLoading] = useState(true); // Loading state
  
  const router = useRouter(); // Initialize router

  useEffect(() => {
    async function loadData() {
      const { books, genres } = await fetchAndOrganizeData() || { books: [], genres: [] };
      setBooks(books);
      setFilteredBooks(books); // Initialize filtered books with all books
      setGenres(genres); // Set genres
      setLoading(false);
    }

    loadData();
  }, []);

  const handleGenreChange = (genreId) => {
    // Filter books based on selected genre
    if (genreId) {
      const filtered = books.filter(book => book.genreId === genreId);
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books); // Reset to all books if no genre is selected
    }
  };

  const handleSearch = (query) => {
    // Filter books based on the search query
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleClick = () => {
    router.push('/genres'); // Navigate to the genres page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "cursive" }}>
      <h1>Home Page: All Featured Books</h1>
      <SearchBar onSearch={handleSearch} /> {/* Include the SearchBar component */}
      {/* <Genre list={genres} onGenreChange={handleGenreChange} /> Genre filter */}
      <h2>Books:</h2>
      <Book list={filteredBooks} /> {/* Ensure the Book component is designed to display books */}
      {/* <button className={styles.button} onClick={handleClick}>View Genre</button> */}
    </div>
  );
}
