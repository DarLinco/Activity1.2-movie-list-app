import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import Card from "./Card";

const Navigation = ({ searchMovie, query, setQuery, movies }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <h5 className="navbar-brand">
          <img
            src="https://png.pngtree.com/element_our/20190603/ourmid/pngtree-movie-board-icon-image_1455346.jpg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Just.movies
        </h5>
        <form
          className="navBar"
          style={{ padding: "1vh" }}
          onSubmit={searchMovie}
        >
          <label htmlFor="query" className="name"></label>
          <div style={{ marginRight: "1vh" }}>
            <input
              className="form-control mr-sm-2"
              type="text"
              name="query"
              placeholder="i.e Guardians of the Galaxy Vol. 2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>

      <div>
        <Card movies={movies} />
      </div>
    </div>
  );
};

export default Navigation;
