import React, { useState } from "react";
import { Button } from "./Button";

export const Card = ({
  title,
  releaseDate,
  thumbnail,
  isWatched,
  allMovies,
  movies,
}) => {
  const [watched, setIsWatched] = useState(isWatched);

  const changeIsWatched = () => {
    setIsWatched(!watched);
  };

  const handleRemove = (allMovies, title, movies) => {
    const filteredMovies = allMovies.filter((movie) => movie.title !== title);
    movies(filteredMovies);
  };

  return (
    <div className=" flex items-center justify-center ml-2 mr-2">
      <div className="border-4 border-solid rounded-md w-89 text-center divide-y divide-fuchsia-300 h-min-max">
        <div className="p-1">
          {title}
        </div>
        <div className="p-1">
        Release date: <i>{releaseDate}</i>
        </div>
        <div>{thumbnail}</div>
        <div>
          <Button additionalClass="mb-4" handleClick={changeIsWatched}>
            {watched ? "Watched" : "Want to watch"}
          </Button>
          <Button
            additionalClass="mb-4 mt-4"
            handleClick={() => {
              handleRemove(allMovies, title, movies);
            }}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
