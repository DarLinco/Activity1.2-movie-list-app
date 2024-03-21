import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movie.css";
import AddFavorite from "./AddFavorite";

const Card = ({ movies, props }) => {
  return (
    <div className="cardlist_movies">
      {movies
        .filter((movie) => movie.Poster)
        .map((movie, index) => (
          <div className="card" key={index}>
            <div>
              <div className="overlay align-items-center justify-content-center">
                <AddFavorite />
              </div>
              <img className="movie_image" src={movie.Poster} alt="postal" />
            </div>

            <div className="flex_card">
              <p className="heading">{movie.Title}</p>
              <p className="paragraph">{movie.Year}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
