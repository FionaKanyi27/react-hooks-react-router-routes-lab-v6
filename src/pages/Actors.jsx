import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('/actors')
    .then(response => response.json())
    .then(data => setActors(data));
  }, []);

  return (
   <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;
