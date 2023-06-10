import React, { useState } from "react";
import "./MovieForm.css";


function MovieForm(props) {

    const [enteredName , setEnteredName] = useState("");
    const [enteredYear, setEnteredYear] = useState("");
    const [enteredGenre, setEnteredGenre] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const yearChangeHandler = (event) => {
      setEnteredYear(event.target.value);
    };

    const genreChangeHandler = (event) => {
      setEnteredGenre(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const movieData = {
            name: enteredName,
            year: enteredYear,
            genre: enteredGenre
        }

        props.onSaveMovieData(movieData);
        setEnteredGenre('');
        setEnteredName('');
        setEnteredYear('');
       
    }

    return (
      <form action="" onSubmit={submitHandler}>
        <div className="new-movie__controls">
          <div className="new-movie__control">
            <label>Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="new-movie__control">
            <label>Year</label>
            <input
              type="number"
              value={enteredYear}
              onChange={yearChangeHandler}
            />
          </div>
          <div className="new-movie__control">
            <label>Genre</label>
            <input
              type="text"
              value={enteredGenre}
              onChange={genreChangeHandler}
            />
          </div>
          <div className="new-movie__actions">
            <button type="submit" >Add Movie</button>
          </div>
        </div>
      </form>
    );
}

export default MovieForm;