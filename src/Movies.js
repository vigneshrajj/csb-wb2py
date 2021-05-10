import React, { useState, useEffect } from "react";
import CardComponent from "./components/CardComponent";
import RateCardComponent from "./components/RateCardComponent";
import { movieList } from "./movieList";

const Movies = () => {
  const [movie, setMovie] = useState(movieList[0]);

  useEffect(() => {
    document.body.style.background = "black";

    return () => {
      document.body.style.background = "none";
    };
  });

  const handlePrevMovie = () => {
    const newId = movie.id - 1;
    setMovie(movieList[newId]);
  };

  const handleNextMovie = () => {
    const newId = movie.id + 1;
    setMovie(movieList[newId]);
  };

  return (
    <div>
      <h1 className="p-3">TOP RATED MOVIES:</h1>
      <div
        style={{ width: "100%", height: "5px", background: "#EA2027" }}
      ></div>
      <div className="d-flex mb-3">
        <button
          className="btn btn-outline-warning mr-auto p-2 bd-highlight"
          onClick={handlePrevMovie}
          disabled={movie.id === 0}
        >
          Prev
        </button>
        <button
          className="btn btn-outline-warning ml-auto p-2 bd-highlight"
          onClick={handleNextMovie}
          disabled={movie.id === 9}
        >
          Next
        </button>
      </div>
      <div className={`cards-slider active-slide-${movie.id}`}>
        <div
          className="cards-slider-wrapper"
          style={{
            transform: `translateX(-${movie.id * (100 / movieList.length)}%)`
          }}
        >
          {movieList.map((movie) => (
            <CardComponent key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className="position-absolute rate-card">
        <div
          style={{ width: "100vw", height: "5px", background: "#EA2027" }}
        ></div>
        <h2 className="p-3">LIST OF MOVIES:</h2>
        {movieList.map((movie) => (
          <RateCardComponent key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
