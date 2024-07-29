import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for movies


const movies = [
  {
    title: 'Kal Ho Naa Ho',
    trailer: "https://www.youtube.com/embed/0wFMX-BWDXM",
    rating: '7.9',
    genre: 'Drama, Romance'
  },
  {
    title: 'Taare Zameen Par',
    trailer: 'https://www.youtube.com/embed/tn_2Ie_jtX8',
    rating: '8.4',
    genre: 'Drama, Family'
  },
  {
    title: 'Rang De Basanti',
    trailer: 'https://www.youtube.com/embed/QHhnhqxPYP0',
    rating: '8.1',
    genre: 'Drama'
  },
  {
    title: 'Rockstar',
    trailer: 'https://www.youtube.com/embed/Iv1vgvvzP8Y',
    rating: '7.7',
    genre: 'Drama, Music, Romance'
  },
  {
    title: 'Highway',
    trailer: 'https://www.youtube.com/embed/Pnm0LTbrmhQ',
    rating: '7.6',
    genre: 'Adventure, Drama, Romance'
  },
  {
    title: 'Devdas',
    trailer: 'https://www.youtube.com/embed/O3AQqZW7DfM',
    rating: '7.5',
    genre: 'Drama, Musical, Romance'
  },
  {
    title: 'Aashiqui 2',
    trailer: 'https://www.youtube.com/embed/3Vh02kK1g-0',
    rating: '7.0',
    genre: 'Drama, Music, Musical'
  },
  {
    title: 'Barfi!',
    trailer: 'https://www.youtube.com/embed/cI8mHyj6em4',
    rating: '8.1',
    genre: 'Comedy, Drama, Romance'
  },
  {
    title: 'Kabhi Khushi Kabhie Gham',
    trailer: 'https://www.youtube.com/embed/7k6izTpXeHA',
    rating: '7.4',
    genre: 'Drama, Musical, Romance'
  },
  {
    title: 'Udaan',
    trailer: 'https://www.youtube.com/embed/Yg9tC1xOchs',
    rating: '8.0',
    genre: 'Drama'
  },
  {
    title: 'Anand',
    trailer: 'https://www.youtube.com/embed/qS9NqXKhFfI',
    rating: '8.8',
    genre: 'Drama, Musical'
  },
  {
    title: 'Dear Zindagi',
    trailer: 'https://www.youtube.com/embed/5DkO7ksXY8E',
    rating: '7.6',
    genre: 'Drama, Romance'
  },
  {
    title: 'Masaan',
    trailer: 'https://www.youtube.com/embed/IV9uFiNwzU0',
    rating: '8.1',
    genre: 'Drama'
  },
  {
    title: 'Margarita with a Straw',
    trailer: 'https://www.youtube.com/embed/k9zX1bKGoW4',
    rating: '7.2',
    genre: 'Drama, Romance'
  },
  {
    title: 'The Lunchbox',
    trailer: 'https://www.youtube.com/embed/iejmS6j5Mw4',
    rating: '7.8',
    genre: 'Drama, Romance'
  },
  {
    title: 'Neerja',
    trailer: 'https://www.youtube.com/embed/7779JrWy04g',
    rating: '7.7',
    genre: 'Biography, Drama, Thriller'
  },
  {
    title: 'Pink',
    trailer: 'https://www.youtube.com/embed/AL2TShb6fFs',
    rating: '8.1',
    genre: 'Drama, Thriller'
  },
  {
    title: 'Chhichhore',
    trailer: 'https://www.youtube.com/embed/tsxemFX0a7k',
    rating: '8.0',
    genre: 'Comedy, Drama'
  },
  {
    title: 'Mimi',
    trailer: 'https://www.youtube.com/embed/TGIYliwhLhI',
    rating: '7.9',
    genre: 'Comedy, Drama'
  },
  {
    title: 'Piku',
    trailer: 'https://www.youtube.com/embed/P_9ZoNECcV0',
    rating: '7.6',
    genre: 'Comedy, Drama'
  },
  {
    title: 'Queen',
    trailer: 'https://www.youtube.com/embed/fyPj2Rcc70w',
    rating: '8.2',
    genre: 'Adventure, Comedy, Drama'
  },
  {
    title: 'Article 15',
    trailer: 'https://www.youtube.com/embed/HKOIQwGUixc',
    rating: '8.2',
    genre: 'Crime, Drama'
  },
  {
    title: 'Kapoor & Sons',
    trailer: 'https://www.youtube.com/embed/sK7riqg2mr4',
    rating: '7.7',
    genre: 'Comedy, Drama, Romance'
  },
  {
    title: 'Lootera',
    trailer: 'https://www.youtube.com/embed/QrV2WtaQZfA',
    rating: '7.3',
    genre: 'Drama, Romance'
  },
  {
    title: 'October',
    trailer: 'https://www.youtube.com/embed/vOFUYhOr1hw',
    rating: '7.5',
    genre: 'Drama, Romance'
  },
  {
    title: 'Hichki',
    trailer: 'https://www.youtube.com/embed/uVnDAa9ZyE8',
    rating: '7.5',
    genre: 'Comedy, Drama'
  },
  {
    title: 'Hamari Adhuri Kahani',
    trailer: 'https://www.youtube.com/embed/C5hvZdX8mFc',
    rating: '6.7',
    genre: 'Drama, Romance'
  },
  {
    title: 'Dil Se..',
    trailer: 'https://www.youtube.com/embed/9j_I2jL6KZg',
    rating: '7.6',
    genre: 'Drama, Romance, Thriller'
  },
  {
    title: 'Raazi',
    trailer: 'https://www.youtube.com/embed/jkYjDJ8MdjE',
    rating: '7.8',
    genre: 'Action, Drama, Thriller'
  },
  {
    title: 'Yeh Jawaani Hai Deewani',
    trailer: 'https://www.youtube.com/embed/Rbp2XUSeUNE',
    rating: '7.1',
    genre: 'Drama, Musical, Romance'
  },
  {
    title: 'Airlift',
    trailer: 'https://www.youtube.com/embed/7HzgOo1an1g',
    rating: '8.0',
    genre: 'Action, Drama, History'
  },
  {
    title: 'Kai Po Che!',
    trailer: 'https://www.youtube.com/embed/LQkDYU9Zp_k',
    rating: '7.6',
    genre: 'Drama, Sport'
  },
  {
    title: 'Badhaai Ho',
    trailer: 'https://www.youtube.com/embed/unAljCZMQYw',
    rating: '8.0',
    genre: 'Comedy, Drama'
  },
  {
    title: 'Sultan',
    trailer: 'https://www.youtube.com/embed/wPxqcq6Byq0',
    rating: '7.0',
    genre: 'Action, Drama, Sport'
  },
  {
    title: 'Mulk',
    trailer: 'https://www.youtube.com/embed/pPtJFJ2nvHc',
    rating: '7.3',
    genre: 'Drama'
  },
  {
    title: 'Tumhari Sulu',
    trailer: 'https://www.youtube.com/embed/RTptFbgaDAc',
    rating: '7.0',
    genre: 'Comedy, Drama'
  },
  {
    title: 'Pad Man',
    trailer: 'https://www.youtube.com/embed/Xm5gJ-Z56QQ',
    rating: '7.9',
    genre: 'Biography, Comedy, Drama'
  },
  {
    title: 'Dear Comrade',
    trailer: 'https://www.youtube.com/embed/ViOMIvvQ6P0',
    rating: '7.3',
    genre: 'Action, Drama, Romance'
  },
  {
    title: 'PK',
    trailer: 'https://www.youtube.com/embed/SOXWc32k4zA',
    rating: '8.1',
    genre: 'Comedy, Drama, Sci-Fi'
  },
  {
    title: 'My Name Is Khan',
    trailer: 'https://www.youtube.com/embed/1iUjt7Bwgbo',
    rating: '8.0',
    genre: 'Drama'
  },
  {
    title: 'Dil Bechara',
    trailer: 'https://www.youtube.com/embed/GODAlxW5Pes',
    rating: '6.6',
    genre: 'Comedy, Drama, Romance'
  }
]

const randomMovies = Math.floor(Math.random() * movies.length);
console.log(randomMovies);

function Happy() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const handlePrev = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
  };

  const navigate = useNavigate();
  const handleClick = (path) => {
      navigate(path);
  }

  const { title, trailer, rating, genre } = movies[currentMovieIndex];

    return (
    <div>
      <div className="bg-gray-900">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <h1 className="text-white font-bold font-exo2 text-xl sm:text-3xl">
                Your mood is Happy <button onClick={() => handleClick("/home")} className="ml-4 border border-purple-500 bg-purple-500 hover:bg-purple-700 text-white py-1 px-2 rounded text-sm sm:text-xl">Change Mood</button>
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

export default Happy;
