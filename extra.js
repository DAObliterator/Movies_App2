{
  actors.map((actor) => {
    <div className="movie__actor">{actor}</div>;
  });
}

<div className="movie__actors">
  <div>Actors</div>
  <div>
    {actors.map((actor) => {
      return (
        <ul>
          <li className="movie__actor">{actor}</li>
        </ul>
      );
    })}
  </div>
</div>;
