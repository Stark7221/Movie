import React, { useEffect, useState } from "react";
import { fetchMovieDetail } from "../api";

const MovieDetail = ({ movie, onBack }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const getMovieDetail = async () => {
            const movieDetail = await fetchMovieDetail(movie.imdbID); // IMDB ID'si ile detay al
            setDetails(movieDetail);
        };
        getMovieDetail();
    }, [movie.imdbID]);

    if (!details) return <p>Yükleniyor...</p>;

    return (
        <div className="movie-detail">
            <button onClick={onBack}>Geri Dön</button>
            <img src={details.Poster} alt={details.Title} />
            <h2>{details.Title}</h2>
            <p>{details.Plot}</p>
            <p>Rating: {details.imdbRating}</p>
            <p>Çıkış Tarihi: {details.Released}</p>
        </div>
    );
};

export default MovieDetail;
