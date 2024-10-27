// pages/books/[id].js
import React from 'react';
import { fetchAndOrganizeData } from '../../../extrafunc';
import styles from './BookDetail.module.css';
import { useRouter } from "next/router"; 

const BookDetailPage = ({ book }) => {
    const router = useRouter(); // Initialize router

    if (router.isFallback) {
        return <div>Loading...</div>; // Show loading state
    }

    if (!book) {
        return <div>Book not found</div>; 
    }

    const handleAuthorClick = () => {
        router.push(`/books/${book.id}/author`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{book.title}</h1>
            <p className={styles.description}>{book.description}</p>
            <div className={styles.details}>
                <div className={styles.detailItem}>Author ID: {book.authorId}</div>
                <div className={styles.detailItem}>Genre ID: {book.genreId}</div>
                <div className={`${styles.detailItem} ${styles.price}`}>Price: ${book.price}</div>
                <div className={`${styles.detailItem} ${styles.rating}`}>Rating: {book.rating}/5</div>
            </div>
            <button onClick={() => window.history.back()} className={styles.backButton}>
                Back to Books
            </button>
            <button onClick={handleAuthorClick} className={styles.backButton}>View Author Information</button>
        </div>
    );
};

// Fetch all book IDs to create paths for getStaticPaths
export async function getStaticPaths() {
    const { books } = await fetchAndOrganizeData();

    // Create paths with the book ID
    const paths = books.map((book) => ({
        params: { id: book.id.toString() },
    }));

    
    return { paths, fallback: true }; 
}

// Fetch the specific book data for getStaticProps
export async function getStaticProps({ params }) {
    const { books } = await fetchAndOrganizeData();
    const book = books.find((b) => b.id.toString() === params.id);

    
    if (!book) {
        return {
            notFound: true,
        };
    }

    return {
        props: { book }, // Pass the book data to the page
        revalidate: 10, 
    };
}

export default BookDetailPage;
