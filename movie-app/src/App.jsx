import React, { useState, useEffect } from "react";
import { fetchMovies } from "./api";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import MovieDetail from "./components/MovieDetail";


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("batman"); // Varsayılan arama
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            const moviesData = await fetchMovies(searchTerm);
            setMovies(moviesData);
        };
        getMovies();
    }, [searchTerm]);

    return (
        <div>
            <Navbar />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {selectedMovie ? (
                <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
            ) : (
                <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
            )}
        </div>
    );
};

export default App;
