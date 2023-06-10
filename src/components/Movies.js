import React, { useState } from "react";
import MovieCard from "./MovieCard";

function Movies(props) {
  return props.items.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        image={movie.image}
        name={movie.name}
        year={movie.year}
        genre={movie.genre}
        actors = {movie.actors}
      ></MovieCard>
    );
  });
}

export default Movies;
