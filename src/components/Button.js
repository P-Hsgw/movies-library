import React, { useState } from "react"; 


export const Button = ( { buttonName, handleClick, children, marginLeft, marginTop, additionalClass }) => {
const [isClicked, setIsClicked] = useState(false)

const defaultHadleClick = () => {
setIsClicked(!isClicked)
}


  return (
    <button onClick={handleClick || defaultHadleClick} className={`border-2 border-solid rounded-md p-2 ${marginLeft || "ml-5"} ${marginTop || "mt-5"} ${additionalClass}`}>{children || "Button"}</button>
  )
}