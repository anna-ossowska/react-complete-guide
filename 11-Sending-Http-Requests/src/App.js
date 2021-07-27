import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async function () {
    setIsLoading(true);
    // Clearing any prev errors
    setError(null);

    try {
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
  }, []);

  // Fetching data as soon as the component loads
  // Fetching data from API is a side effect, thus, such a state should be handled with useEffect
  // We refer to fetchMoviesHandler as a dependency because in the future we might alter the function
  // in a way it relies on some external state, and we want to avoid any potential bugs
  // However, this solution produces another potential bug: fns are objects, and with each App component re-execution, we recreate the fn from scratch
  // To avoid creating an infinite loop, we must wrap the async function with useCallback()
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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
