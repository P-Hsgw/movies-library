import React, { useState } from "react";
import { Card } from "./Card";
import uuid from 'react-uuid'

export const Body = () => {
  const [movies, setMovies] = useState([
    {
      title: "Title",
      releaseDate: "1992",
      thumbnail: "brre",
      isWatched: true,
    },
    {
      title: "Title",
      releaseDate: "1992",
      thumbnail: "brre",
      isWatched: false,
    },
    {
      title: "Title",
      releaseDate: "1992",
      thumbnail: "brre",
      isWatched: false,
    },
    {
      title: "Title",
      releaseDate: "1992",
      thumbnail: "brre",
      isWatched: false,
    },
    {
      title: "Title",
      releaseDate: "1992",
      thumbnail: "brre",
      isWatched: false,
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
