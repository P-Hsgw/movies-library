import React from "react"; 

import { Button } from "./Button"

export const Header = () => {

  return (
    <div className="flex flex-wrap justify-center content-center w-screen h-12">
      <Button buttonName="Add new movie"/> 
    </div>
  )
}