import React from "react";
import MovieForm from "./MovieForm";
import "./NewMovie.css";


function NewMovie(props) {

    const saveMovieDataHandler = (enteredMovieData) => {

        const movieData = {
            ...enteredMovieData,
            id: Math.random().toString()
        };

        props.onAddMovie(movieData);
        props.addToDB(movieData);


    }

    return (
      <div className="new-movie">
        <MovieForm onSaveMovieData={saveMovieDataHandler} />
      </div>
    );

   

}

export default NewMovie;