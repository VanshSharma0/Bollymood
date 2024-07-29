import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for sad movies
const sadMovies = [
    {
      title: '3 Idiots',
      trailer: "https://www.youtube.com/embed/e2eaXjb7LQ8?si=p_cOhnx9MC78s7Vq",
      genre: 'Comedy, Drama'
    },
    {
      title: 'Zindagi Na Milegi Dobara',
      trailer: 'https://www.youtube.com/embed/FJrpcDgC3zU',
      rating: '8.1',
      genre: 'Adventure, Comedy, Drama'
    },
    // Add more movies as needed
  ];

function Sad() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const handlePrev = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex === 0 ? sadMovies.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex === sadMovies.length - 1 ? 0 : prevIndex + 1));
  };

  const navigate = useNavigate();
  const handleClick = (path) => {
      navigate(path);
  }

  const { title, trailer, rating, genre } = sadMovies[currentMovieIndex];

  return (
    <div>
      <div className="bg-gray-900">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <h1 className="text-white font-bold font-exo2 text-xl sm:text-3xl">
                Your mood is Sad <button onClick={() => handleClick("/home")} className="ml-4 border border-purple-500 bg-purple-500 hover:bg-purple-700 text-white py-1 px-2 rounded text-sm sm:text-xl">Change Mood</button>
              </h1>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-2xl sm:text-4xl mb-4 mt-4 text-center">{title}</h1>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="w-full h-56 sm:h-80 lg:h-96 mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src={trailer}
              title={title}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <div className="text-center mb-4">
            <p className="text-base sm:text-lg"><strong>Rating:</strong> {rating}</p>
            <p className="text-base sm:text-lg"><strong>Genre:</strong> {genre}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sad;
