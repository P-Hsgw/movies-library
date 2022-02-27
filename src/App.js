import { Header } from "./components/Header"
import { Body } from "./components/Body"
import React, { useState } from "react";


function App() {
  const [movies, setMovies] = useState([
    {
      title: "Guardians ss the Galaxy",
      releaseDate: "2018",
      thumbnail: "PICTURE.JPG",
      isWatched: true,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Body movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
