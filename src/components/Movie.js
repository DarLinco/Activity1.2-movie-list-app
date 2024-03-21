import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Movie.css";

import Navigation from "./Navigation";
import { Card } from "reactstrap";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const getMovies = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=263d22d8";
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies();
  }, [query]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const API_KEY = "a9c7464";
    const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

    try {
      const response = await axios.get(apiURI);
      const data = response.data.Search;
      console.log(data);

      setMovies(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="shoppies">
        <Navigation
          searchMovie={searchMovie}
          query={query}
          setQuery={setQuery}
          movies={movies}
        />
      </div>

      <div className="list-movie">
        <Card movies={movies} />
      </div>
    </>
  );
};

export default Movie;
