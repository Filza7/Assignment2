import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
          <button><Link href="/">Go back to Home</Link></button>  
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
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        color: '#e74c3c',
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2rem',
        color: '#555',
        marginBottom: '20px',
    },
    link: {
        fontSize: '1rem',
        color: '#3498db',
        textDecoration: 'underline',
    },
};

export default Custom404;
