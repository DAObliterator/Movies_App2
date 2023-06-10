import React , { useState } from "react";
import MovieCard from "./components/MovieCard";
import Movies from "./components/Movies";
import NewMovie from "./components/NewMovie";
import "./App.css";


let dummy_movies = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/81yPE07T9wL._AC_UF1000,1000_QL80_.jpg",
    name: "The Shawshank Redemption",
    year: 1994,
    genre: "drama",
    actors: ["morgan freeman", "tim robbins"],
  },
  {
    id: 2,
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg?q=50&fit=crop&h=720&dpr=1.5",
    name: "The Godfather",
    year: 1972,
    genre: "crime",
    actors: ["Marlon Brando", "Al Pacino"],
  },
  {
    id: 3,
    name: "Pulp Fiction",
    image:
      "https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_as_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_Collection_013d572d-ff7f-464c-b13d-8e9d5e8e2060.jpg?v=1572088118",
    year: 1994,
    genre: "crime",
    actors: ["John Travolta", "Samuel L. Jackson"],
  },
  {
    id: 4,
    name: "The Dark Knight",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    year: 2008,
    genre: "action",
    actors: ["Christian Bale", "Heath Ledger"],
  },
  {
    id: 5,
    name: "The Matrix",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWQxMzg0OGYtNGE3Yi00OGY4LWJjZDktZWZiODE2N2MyODgzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY2450_.jpg",
    year: 1999,
    genre: "sci-fi",
    actors: ["Keanu Reeves", "Carrie-Anne Moss"],
  },
];

function App() {

  const [movies, setMovies] = useState(dummy_movies);


  // code to add movies from NewMovies that is lifted up into app
  // in place of movie we get movie entered through the form
  // and prevMovies is the array of objects from the data.js file
  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  const addToDB = (movie) => {
    return dummy_movies.push(movie);
  };

  return (
    <div className="App">
      <NewMovie onAddMovie={addMovieHandler} addToDB = {addToDB}></NewMovie>
      <Movies items={movies}></Movies>
    </div>
  );
}

export default App;
