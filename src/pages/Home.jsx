import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import  NavBar from "../components/NavBar";

const Home= () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
  fetch('/movies')
  .then(response => response.json())
  .then(data => setMovies(data));
}, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
