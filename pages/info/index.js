import React from 'react';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Our Bookstore!</h1>
            <p style={styles.message}>Explore a world of books and discover your next favorite read.</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2rem',
        color: '#555',
        textAlign: 'center',
        maxWidth: '600px',
    },
};

export default HomePage;
