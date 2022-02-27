import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import uuid from "react-uuid";

export const Body = ({ movieska }) => {
  const [movies, setMovies] = useState([]);
  const [mounted, setMounted] = useState(null);
  
  useEffect(() => {
    if (mounted === false) {
      setMovies((oldArray) => [...oldArray, movieska]);
    }
  }, [movieska]);

  useEffect(() => {
    setMounted(false);
  }, []);

  const movieCards = movies.map(
    ({ title, releaseDate, thumbnail, isWatched }) => (
      <Card
        key={uuid()}
        title={title}
        releaseDate={releaseDate}
        thumbnail={<img src={`https://image.tmdb.org/t/p/w500/${thumbnail}`} alt={`${title}`} />}
        isWatched={isWatched}
        movies={setMovies}
        allMovies={movies}
      />
    )
  );

  return (
    <>
      <div className="w-screen grid xl:grid-cols-5 gap-8 lg:grid-cols-3 md:grid-cols-2 mt-20">
        {movieCards}
      </div>
    </>
  );
};
