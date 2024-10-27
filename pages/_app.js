// pages/_app.js
import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../Components/ThemeToggle';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <ThemeToggle /> {/* Dark mode toggle */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
