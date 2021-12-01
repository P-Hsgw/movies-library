import React, {useState} from "react";

import { Button } from "./Button";

const Modal = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleClick} className="mt-5">
      <input type="search" className="form-input" defaultValue="Search for a movie"/>
      <Button />    
      </form>
  );
};

export const Header = () => {
const [isVisible, setVisible] = useState(false)

const handleClick = () => {
  setVisible(!isVisible)
}  

  return (
    <> 
      <div className="flex flex-wrap justify-center content-center w-screen h-12">
        <Button additionalClass="bg-red-500" handleClick={handleClick}>Add new movie</Button>
        <Button>Clear saved movies</Button>
      </div>
      {
      isVisible ? (
        <Modal />
      ) : (
        <></>
      )
    }
    </>
  );
};
