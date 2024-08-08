# BollyMood: Movie Recommendation App

## Overview

BollyMood is a unique movie recommendation app that suggests movies based on your current mood. Whether you're feeling happy, sad, adventurous, or relaxed, BollyMood provides tailored movie recommendations to match your emotional state. This app leverages mood-based algorithms to offer personalized movie suggestions that cater to your feelings.

## Features

- **Mood-Based Recommendations:** Get movie suggestions based on your current mood.
- **Movie Details:** View information about movies including title, genre, synopsis, and rating.
- **Responsive Design:** The app is optimized for both desktop and mobile devices.

## Installation

To run the BollyMood app locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/VanshSharma0/Bollymood.git
   cd Bollymood
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open the app:**
   Open your browser and navigate to `http://localhost:3000` to see BollyMood in action.

## Usage

1. **Select Your Mood:**
   - Choose your current mood from a list of options (e.g., happy, sad, adventurous).

2. **Get Recommendations:**
   - The app will display a list of movie recommendations based on the selected mood.

4. **Explore Movie Details:**
   - Click on a movie to see its title, genre, synopsis, and rating.

## Technologies Used

- **React.js:** For building the user interface.
- **Axios:** For making API requests to fetch movie data.
- **TailwindCSS:** For styling the application.

## API

The app uses the [TMDb (The Movie Database) API](https://www.themoviedb.org/documentation/api) to fetch movie data. You will need to sign up for an API key from TMDb and add it to your project.

1. **Get your API key:**
   - Sign up at [TMDb](https://www.themoviedb.org/signup) and get your API key.

2. **Add the API key to your project:**
   - Create a `.env` file in the root of your project and add your API key:
     ```sh
     REACT_APP_TMDB_API_KEY=your_api_key_here
     ```

## Mood Algorithm

The mood-based recommendations are generated using a predefined set of moods and their associated movie genres. For example:
- **Happy:** Comedy, Family
- **Sad:** Drama, Romance
- **Adventurous:** Action, Adventure
- **Relaxed:** Comedy, Documentary and many more...

## Contact

If you have any questions or suggestions, feel free to reach out to me at vanished934@gmail.com
