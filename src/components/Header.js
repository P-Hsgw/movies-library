import React, { useState } from "react";

import { Button } from "./Button";

const Modal = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const input = document.querySelector("input")
    console.log(input.value)
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="search"
        className="form-input"
        placeholder="Search for a movie"
      />
      <Button>Submit</Button>
    </form>
  );
};

export const Header = () => {
  const [isVisible, setVisible] = useState(false);

  const handleMovieClick = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center content-center w-screen h-20">
        <Button additionalClass="bg-red-500" handleClick={handleMovieClick}>
          {isVisible ? "Close Search Bar" : "Add new movie"}
        </Button>
        <Button>Clear saved movies</Button>
      </div>
      {isVisible ? (
        <div className="flex flex-wrap justify-center content-center w-screen h-auto">
          <Modal />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
