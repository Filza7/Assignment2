// pages/info/[...slug].js
import { useRouter } from 'next/router';
import React from 'react';

const InfoPage = () => {
    const router = useRouter();
    const { slug } = router.query; 

    // Determine content based on the slug
    const renderContent = () => {
        if (!slug || slug.length === 0) {
            return <h1>Welcome to the Info Page</h1>; 
        }
        if (slug[0] === 'faqs') {
            return <h1>FAQs - Frequently Asked Questions</h1>;
        }
        if (slug[0] === 'support') {
            return <h1>Support - How can we help you?</h1>;
        }
        return <h1>Information on Page {slug.join(' / ')}</h1>; 
    };

    return (
        <div style={{ textAlign: 'center', fontFamily: 'cursive', padding: '20px' }}>
            {renderContent()}
        </div>
    );
};

export default InfoPage;
