import React, {useState} from "react";
import { Button } from "./Button";

export const Card = ({ title, releaseDate, thumbnail, isWatched, watchedClick }) => {
  const [watched, setIsWatched] = useState(isWatched)

  const changeIsWatched = () => {
    setIsWatched(!watched)
  }

  return (
    <div className=" flex items-center justify-center ">
      <div className="border-4 border-solid rounded-md w-89 text-center divide-y divide-fuchsia-300 h-min-max">
        <div className="p-4">
          {title} - {releaseDate}
        </div>
        <div className="p-28">{thumbnail}</div>
        <div>
          <Button additionalClass="mb-4" handleClick={changeIsWatched}>{watched? ("Watched") : ("Want to watch")}</Button>
          <Button additionalClass="mb-4 mt-4">Remove</Button>
        </div>
      </div>
    </div>
  );
};
