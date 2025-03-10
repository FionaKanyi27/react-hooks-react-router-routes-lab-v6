import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/movies/${id}`)
    .then(response => response.json())
    .then(data => setMovie(data));
  }, [id]); 
  
  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
