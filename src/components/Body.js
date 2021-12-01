import React, { useState } from "react";
import { Card } from "./Card";
import uuid from "react-uuid";

export const Body = () => {
  const [movies, setMovies] = useState([
    {
      title: "Guardians of the Galaxy",
      releaseDate: "2018",
      thumbnail: "PICTURE.JPG",
      isWatched: true,
    },
  ]);

  async function fetchMovie(search) {
    try {
      const response = await fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=9812bf8694ef69e36a998bad88ff117a&language=en-US&query=Dune&page=1&include_adult=false`,
        { mode: "cors" }
      );
      const movie = await response.json();
      console.log(movie);
    } catch (error) {
      alert("Error:" + error);
    }
  }

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
