import React from "react"; 
import { Card } from "./Card"



export const Body = () => {

  return ( 
    <>
    <div className="w-screen grid xl:grid-cols-5 gap-8 lg:grid-cols-3 md:grid-cols-2 mt-20">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />

    </div>
    </>
  )
}