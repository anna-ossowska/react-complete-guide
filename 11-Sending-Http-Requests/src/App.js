import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (response.ok) {
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
      }
    } catch (err) {
      console.error(err);
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
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
