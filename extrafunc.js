// extrafunc.js
export async function fetchAndOrganizeData() {
    const url =
        typeof window === 'undefined'
            ? `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data.json`
            : '/data.json';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data; // Ensure this returns an object with genres
    } catch (error) {
        console.error('Error fetching data:', error);
        return { books: [], genres: [], authors: [] };
    }
}
