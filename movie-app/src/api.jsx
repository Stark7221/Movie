const API_KEY = "ad88ac68"; // Buraya OMDb API anahtarınızı ekleyin.
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMovies = async (searchTerm) => {
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search || []; // Dönüş olarak "Search" dizisini alırız
};

export const fetchMovieDetail = async (id) => {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    const data = await response.json();
    return data;
};
