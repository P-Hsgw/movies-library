import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import uuid from "react-uuid";
import { Button } from "./Button";

export const Body = ({ movieska }) => {
  const [movies, setMovies] = useState([]);
  const [mounted, setMounted] = useState(null);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('storedMovies'));
    if (storedMovies) {
     setMovies(storedMovies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('storedMovies', JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    setMounted(false);
  }, []);

  useEffect(() => {
    if (mounted === false) {
      setMovies((oldArray) => [...oldArray, movieska]);
    }
  }, [movieska]);

  const movieCards = movies.map(
    ({ title, releaseDate, thumbnail, isWatched }) => (
      <Card
        key={uuid()}
        title={title}
        releaseDate={releaseDate}
        thumbnail={
          <img
            src={`https://image.tmdb.org/t/p/w500/${thumbnail}`}
            alt={`${title}`}
          />
        }
        isWatched={isWatched}
        movies={setMovies}
        allMovies={movies}
      />
    )
  );

  const clearDatabase = () => {
    setMovies([]);
    localStorage.clear()
  };

  return (
    <>
      <div className="flex flex-wrap justify-center content-center w-screen h-20">
        <Button handleClick={clearDatabase}>Clear database</Button>
      </div>
      <div className="w-screen grid xl:grid-cols-5 gap-8 lg:grid-cols-3 md:grid-cols-2 mt-20">
        {movieCards}
      </div>
    </>
  );
};
