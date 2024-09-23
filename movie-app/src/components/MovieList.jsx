import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
            ))}
        </div>
    );
};

export default MovieList;
