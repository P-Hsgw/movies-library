import { Header } from "./components/Header";
import { Body } from "./components/Body";
import React, { useState } from "react";

function App() {
  const [movie, setMovie] = useState();

  return (
    <div className="App">
      <Header fetchMovies={setMovie}  />
      <Body movieska={movie} />
    </div>
  );
}

export default App;
