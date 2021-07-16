import React from 'react';
import SearchBar from '../components/SearchBar';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <main className="container">
            <SearchBar />
            <Hero />
        </main>
    )
}

export default Home;