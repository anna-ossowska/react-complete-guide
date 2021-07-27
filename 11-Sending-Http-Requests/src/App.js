import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);

      // Clearing any prev errors
      setError(null);

      const response = await fetch('https://swapi.dev/api/films/');
      console.log(response);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }

  // fetch('https://swapi.dev/api/films/').then((response) => {
  //   if (response.ok) {
  //     return response.json().then((data) => {
  //       console.log(data.results);

  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           releaseDate: movieData.release_date,
  //           openingText: movieData.opening_crawl,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  //   }
  // });

  // {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
  // {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
  // {isLoading && <p>Loading...</p>}
  // {!isLoading && error && <p>{error}</p>}

  let content = <p>Found no movies</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
