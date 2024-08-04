import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TMDB_API_KEY = 'a923470874f8cf448b3278a9ac53580f';
const YOUTUBE_API_KEY = 'AIzaSyCmz791Z6dJ5A2HBNwRNmj94HiSM7zBc1s';

function Sad() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}`
        );
        const genresList = response.data.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});
        setGenres(genresList);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGenres();
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=12&region=IN&with_original_language=hi&page=${page}&append_to_response=videos`
        );
        const moviesWithTrailers = await Promise.all(
          response.data.results.map(async (movie) => {
            const movieResponse = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&append_to_response=videos`
            );
            let trailers = movieResponse.data.videos.results.filter(
              (video) => video.type === 'Trailer' && video.site === 'YouTube'
            );
            let trailerUrl = trailers.length > 0 ? `https://www.youtube.com/embed/${trailers[0].key}` : null;

            // If trailer URL is not found, search on YouTube
            if (!trailerUrl) {
              const youtubeTrailerUrl = await fetchTrailerFromYouTube(movie.title);
              trailerUrl = youtubeTrailerUrl ? youtubeTrailerUrl : null;
            }
            return { ...movie, trailerUrl };
          })
        );
        setMovies((prevMovies) => [...prevMovies, ...moviesWithTrailers]);
        setHasMore(response.data.page < response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [page]);

  useEffect(() => {
    if (movies.length > 0) {
      setCurrentMovieIndex(Math.floor(Math.random() * movies.length));
    }
  }, [movies]);

  const fetchTrailerFromYouTube = async (movieTitle) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          movieTitle + ' trailer'
        )}&key=${YOUTUBE_API_KEY}`
      );
      const trailers = response.data.items;
      if (trailers.length > 0) {
        return `https://www.youtube.com/embed/${trailers[0].id.videoId}`;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handlePrev = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const lastMovieElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  const handleClick = (path) => {
    navigate(path);
  };

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const { title, trailerUrl, vote_average, genre_ids } = movies[currentMovieIndex];
  const genreNames = genre_ids.map((id) => genres[id]).join(', ');

  return (
    <div>
      <div className="bg-gray-900">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <h1 className="text-white font-bold font-exo2 text-lg sm:text-2xl">
                aww don't Be sad
                <button
                  onClick={() => handleClick('/home')}
                  className="ml-2 sm:ml-4 border border-purple-500 bg-purple-500 hover:bg-purple-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded text-xs sm:text-lg"
                >
                  Change Mood
                </button>
              </h1>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-3xl mb-4 mt-4 text-center">{title}</h1>
        <div className="bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="w-full h-48 sm:h-64 lg:h-80 mb-4">
            {trailerUrl ? (
              <iframe
                className="w-full h-full rounded-lg"
                src={trailerUrl}
                title={title}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            ) : (
              <p>No trailer available</p>
            )}
          </div>
          <div className="text-center mb-4">
            <p className="text-sm sm:text-base">
              <strong>Rating:</strong> {vote_average}
            </p>
            <p className="text-sm sm:text-base">
              <strong>Genres:</strong> {genreNames}
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-base"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-base"
            >
              Next
            </button>
          </div>
        </div>
        <div ref={lastMovieElementRef}></div>
      </div>
    </div>
  );
}

export default Sad;
