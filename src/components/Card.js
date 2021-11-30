import React from "react"; 
import { Button  } from "./Button";

export const Card = () => {
  return(
    <div className=" flex items-center justify-center">
    <div className="border-4 border-solid rounded-md h-72 w-72 text-center divide-y divide-fuchsia-300">
      <div className="p-4">
        MOVIE TITLE - release date
      </div>
      <div className="p-14">
        MOVIE THUMBNAIL
      </div>
      <div>
        <Button>Watched </ Button>
        <Button>Want to watch</Button>
      </div>
    </div></div>
  )
}