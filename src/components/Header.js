import React, { useEffect, useState } from "react";
import { Button } from "./Button";

const Modal = ({ fetchMovies }) => {
  const [movies, setMovies] = useState();

  const fillMovie = (title, releaseDate, thumbnail, isWatched) => {
    setMovies({
      title: title,
      releaseDate: releaseDate,
      thumbnail: thumbnail,
      isWatched: isWatched,
    });
  };

  useEffect(() => {
    fetchMovies(movies);
  }, [movies]);

  async function fetchMovie(search) {
    try {
      const response = await fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=9812bf8694ef69e36a998bad88ff117a&language=en-US&query=${search}&page=1&include_adult=false`,
        { mode: "cors" }
      );
      const movie = await response.json();
      console.log(movie.results[0]);
      fillMovie(
        movie.results[0].title,
        movie.results[0].release_date,
        movie.results[0].poster_path,
        true
      );
    } catch (error) {
      alert("Error:" + error);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    fetchMovie(input.value);
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

export const Header = ({ fetchMovies }) => {
  const [isVisible, setVisible] = useState(true);

  // const handleMovieClick = () => {
  //   setVisible(!isVisible);
  // };

  return (
    <>
      <div className="flex flex-wrap justify-center content-center w-screen h-20">
        {/* <Button additionalClass="bg-red-500" >
          {isVisible ? "Close Search Bar" : "Add new movie"}
        </Button> */}
        <Button>Clear saved movies</Button>
      </div>
      {isVisible ? (
        <div className="flex flex-wrap justify-center content-center w-screen h-auto">
          <Modal fetchMovies={fetchMovies} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
