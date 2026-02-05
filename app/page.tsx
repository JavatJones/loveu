"use client"
import React, { useState } from "react";
import nosotros from "@/assets/nosotros.jpeg";
import Heart1 from "@/assets/heart1.svg";


const btns = [
  {
    id: 0,
    text: "",

  },
  {
    id: 1,
    text: "",
  },
  {
    id: 2,
    text: "",
  },
  {
    id: 3,
    text: "",
  },
  {
    id: 4,
    text: "",
  },
  {
    id: 5,
    text: "",
  },
]



const IloveUHomepage = () => {

  const [non, setNon] = useState<boolean>(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const moveButton = () => {
    const maxX = window.innerWidth - 150; // 150 es un aproximado del ancho del botón
    const maxY = window.innerHeight - 190; // 100 es un aproximado del alto del botón

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setPosX(newX);
    setPosY(newY);
    console.log(newX, ", ", newY)
  };


  return (
    <main className=" flex-1 w-full min-h-screen grid grid-cols-1 items-center bg-black p-5">
      <section className="container mx-auto max-w-xl  min-h-96 relative flex flex-col p-16 bg-slate-100 border border-red-500 drop-shadow-2xl drop-shadow-red-500/50 rounded-2xl">
        <img
          src={""}
          className="w-32 h-32 md:w-50 md:h-50 object-cover rounded-full absolute -top-6 md:-top-16 left-1/2 -translate-x-1/2 -translate-y-1/2  border z-10 drop-shadow-2xl drop-shadow-red-500/50 border-red-500"
        ></img>
        <article>
          <h1 className="text-black">Para</h1>
        </article>

        <article className="relative h-20 grid grid-cols-2 items-center justify-center gap-5">
          <button className="text-white shadow-xs shadow-lime-500 hover:shadow-lime-600 bg-lime-500 p-5 rounded-2xl hover:bg-lime-600 transition duration-300 cursor-pointer">Sí</button>
          <button onClick={() => setNon(!non)} className={`text-white shadow-xs shadow-red-500 hover:shadow-red-700 bg-red-500 p-5 rounded-2xl hover:bg-red-700 transition duration-300 cursor-pointer ${non ? "hidden" : ""}`}>Nó</button>
        </article>
        <button onClick={moveButton} style={{ left: `${posX}px`, top: `${posY}px` }} className={`fixed w-26 text-white shadow-xs shadow-red-500 hover:shadow-red-700 bg-red-500 p-5 rounded-2xl hover:bg-red-700 transition duration-300 cursor-pointer z-50  ${non ? "" : "hidden"}`}>
          No? 😭
        </button>
        <Heart1
          fill="red"
          className="h-16 w-16 absolute -right-5 -top-10"
        ></Heart1>
      </section>
    </main>
  );
};

export default IloveUHomepage;
