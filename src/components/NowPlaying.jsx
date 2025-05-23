import React, { useState, useEffect } from 'react';

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = '53efe64c5655b16c80e4dbe3f0e88e35';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Now Playing Movies</h1>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NowPlaying;
