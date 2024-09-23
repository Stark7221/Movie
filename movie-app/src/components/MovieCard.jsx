import React from "react";
import "../app.css"

const MovieCard = ({ movie, onSelectMovie }) => {
    return (
        <div className="movie-card" onClick={() => onSelectMovie(movie)}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>Yıl: {movie.Year}</p>
        </div>
    );
};

export default MovieCard;
