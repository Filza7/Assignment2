// pages/genres.js

import React from 'react';
import Genre from '../Components/Genre'; // Adjust the import path if necessary
import { fetchAndOrganizeData } from '../extrafunc'; // Ensure this function fetches genres

const GenresPage = ({ genres }) => {
    return (
        <div style={{ textAlign: "center", fontFamily: "cursive" }}>
            <h1>Genres</h1>
            <Genre list={genres} />
        </div>
    );
};

// Fetch data on each request
export async function getServerSideProps() {
    try {
        const { genres } = await fetchAndOrganizeData(); // Ensure this function returns genres

        // If genres data is not available, you can return notFound
        if (!genres) {
            return { notFound: true };
        }

        return {
            props: {
                genres: genres || [], // Pass genres data to the page component
            },
        };
    } catch (error) {
        console.error('Error fetching genres:', error);
        return {
            props: {
                genres: [], // Return an empty array on error
            },
        };
    }
}

export default GenresPage;
