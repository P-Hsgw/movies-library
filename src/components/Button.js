import React from "react"; 

export const Button = ( { buttonName }) => {

  return (
    <button className="border-2 border-solid rounded-md p-2 hover:bg-green-700">{buttonName || "Button"}</button>
  )
}