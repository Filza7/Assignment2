// pages/books/[id]/author.js

import React from 'react';
import Authors from '../../../components/Authors';
import styles from './author.module.css';
import { fetchAndOrganizeData } from '../../../extrafunc';

const BookAuthorPage = ({ author }) => {
    if (!author) {
        return <div>Error loading author information.</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Author Information</h1>
            <Authors list={[author]} /> {/* Pass the fetched author data as a list */}
        </div>
    );
};

export async function getStaticPaths() {
    const { books } = await fetchAndOrganizeData();
    const paths = books.map((book) => ({
        params: { id: book.id.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { authors } = await fetchAndOrganizeData();
    const author = authors.find(author => author.id === params.id); // Find author by ID
    return {
        props: {
            author: author || null, // Pass the author data as a prop
        },
    };
}

export default BookAuthorPage;
