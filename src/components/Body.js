import React, { useState } from "react";
import { Card } from "./Card";
import uuid from 'react-uuid'

export const Body = () => {
  const [movies, setMovies] = useState([
    {
      title: "Guardians of the Galaxy",
      releaseDate: "2018",
      thumbnail: "PICTURE.JPG",
      isWatched: true,
    },

    {
      title: "Guardians of the Galaxy2",
      releaseDate: "2018",
      thumbnail: "PICTURE.JPG",
      isWatched: true,
    },
    {
      title: "Guardians of the Galaxy3",
      releaseDate: "2018",
      thumbnail: "PICTURE.JPG",
      isWatched: true,
    },
    {
      title: "Guardians of the Galaxy4",
      releaseDate: "2018",
      thumbnail: "PICTURE.JPG",
      isWatched: true,
    },
  ]);




  const fillMovie = (title, releaseDate, thumbnail, isWatched) => {
    setMovies({
      title: title,
      releaseDate: releaseDate,
      thumbnail: thumbnail,
      isWatched: isWatched,
    });
  };

  const movieCards = movies.map(
    ({ title, releaseDate, thumbnail, isWatched }) => (
      <Card
        key={uuid()}
        title={title}
        releaseDate={releaseDate}
        thumbnail={thumbnail}
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
