import { useState, useEffect } from "react";
import Card from "./Card";

const Reviews = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = '53efe64c5655b16c80e4dbe3f0e88e35'; // Replace with your actual API key

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                const data = await response.json();
                setMovies(data.results); // Make sure this is an array and contains movies
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching movie data:", error);
                setError(error);
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching movies: {error.message}</div>;
    }

    if (movies.length === 0) {
        return <div>No movies found.</div>;
    }

    return (
        <div>
            <h1>Movie Reviews</h1>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default Reviews;
