import "./MovieCard.css";

function MovieCard({ name, year, genre, image, actors }) {
  return (
    <div className="movie__card">
      <div className="movie__image">
        <img className="image" src={image} />
      </div>
      <div className="movie_details">
        <div className="movie__name">
          <div>Name</div>
          <div>{name}</div>
        </div>
        <div className="movie__year">
          <div>Year</div>
          <div>{year}</div>
        </div>
        <div className="movie__genre">
          <div>Genre</div>
          <div>{genre}</div>
        </div>
        
      </div>
    </div>
  );
}

export default MovieCard;
