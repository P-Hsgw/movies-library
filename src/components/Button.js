import React, { useState } from "react"; 


export const Button = ( { buttonName, handleClick, children }) => {
const [isClicked, setIsClicked] = useState(false)

const defaultHadleClick = () => {
setIsClicked(!isClicked)
}


  return (
    <button onClick={handleClick || defaultHadleClick} className="border-2 border-solid rounded-md p-2 focus:bg-green-700 ml-5 mt-5">{children || "Button"}</button>
  )
}