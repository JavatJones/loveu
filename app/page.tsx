"use client"
import React, { useState, useRef } from "react";
import Nosotros from "@/assets/nosotros.jpeg";
import Heart1 from "@/assets/heart1.svg";
import Sad from "@/assets/sad.jpg"
import Happy from "@/assets/B2.png"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

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
  const [sad, setSad] = useState<boolean>(false);
  const [happy, setHappy] = useState<boolean>(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [nonCounter, setNonCounter] = useState<number>(0);
  const { width, height } = useWindowSize()

  const moveButton = () => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const buttonWidth = 100; // Ajusta según el ancho real de tu botón
    const buttonHeight = 60; // Ajusta según el alto real de tu botón

    // Calcular límites dentro del section
    let maxX = sectionRect.width - buttonWidth;
    let maxY = sectionRect.height - buttonHeight;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    setPosX(newX);
    setPosY(newY);
    setNonCounter(nonCounter + 1)
    console.log(newX, ", ", newY)
  };

  if (nonCounter >= 5) {
    return (
      <main className="relative z-50 bg-black container w-full min-h-screen mx-auto flex justify-center items-center">

        <div className="flex flex-col gap-10">
          <h1>¿Estas segura?</h1>
          <div className="grid grid-cols-2 gap-5">
            <button onClick={() => (setSad(true))} className="bg-red-500 text-white rounded-2xl shadow-lg shadow-red-500 px-8 py-5 cursor-pointer hover:scale-105 transition duration-300">Sí 😢</button>
            <button onClick={() => (setNonCounter(0), setNon(false))} className="bg-white text-black rounded-2xl shadow-lg shadow-white px-8 py-5 cursor-pointer hover:scale-105 transition duration-300">Reconciderar 😊</button>
          </div>
        </div>

        <div className={`absolute z-50 w-full bg-black/65 left-0 right-0 top-0 bottom-0 justify-center items-center ${sad ? "flex " : "hidden"}`}>
          <img src={Sad.src} className="size-48 border rounded-lg border-blue-400"></img>
        </div>

      </main>
    )
  }

  return (
    <main className="relative flex-1 w-full min-h-screen grid grid-cols-1 items-center bg-black p-5">
      <section ref={sectionRef} className="container mx-auto max-w-xl  min-h-96 relative flex flex-col p-16 bg-slate-100 border border-red-500 drop-shadow-2xl drop-shadow-red-500/50 rounded-2xl">
        <img
          src={Nosotros.src}
          className="w-32 h-32 md:w-50 md:h-50 object-cover rounded-full absolute -top-6 md:-top-16 left-1/2 -translate-x-1/2 -translate-y-1/2  border z-10 drop-shadow-2xl drop-shadow-red-500/50 border-red-500"
        ></img>
        <article>
          <h1 className="text-black">Para</h1>
        </article>

        <article className="relative h-20 grid grid-cols-2 items-center justify-center gap-5">
          <button onClick={() => setHappy(!happy)} className="text-white shadow-xs shadow-lime-500 hover:shadow-lime-600 bg-lime-500 p-5 rounded-2xl hover:bg-lime-600 transition duration-300 cursor-pointer">Sí</button>
          <button onClick={() => setNon(!non)} className={`text-white shadow-xs shadow-red-500 hover:shadow-red-700 bg-red-500 p-5 rounded-2xl hover:bg-red-700 transition duration-300 cursor-pointer ${non ? "hidden" : ""}`}>Nó</button>
        </article>
        <button onClick={moveButton} style={{ left: `${posX}px`, top: `${posY}px` }} className={`absolute w-26 text-white shadow-xs shadow-red-500 hover:shadow-red-700 bg-red-500 p-5 rounded-2xl hover:bg-red-700 transition duration-300 cursor-pointer z-50  ${non ? "" : "hidden"}`}>
          No? 😭
        </button>
        <Heart1
          fill="red"
          className="h-16 w-16 absolute -right-5 -top-10"
        ></Heart1>
      </section>
      <div className={`absolute z-50 w-full bg-black/80 left-0 right-0 top-0 bottom-0 justify-center items-center ${happy ? "flex flex-col" : "hidden"}`}>
        <img src={Happy.src} className="h-72 w-56"></img>
        <span>Te amó</span>
        <span></span>
        {/* Pétalos de rosas rojas */}
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={20}
          recycle={true}
          colors={['#8B0000', '#DC143C', '#FF0000', '#CD5C5C', '#C71585']}
          drawShape={ctx => {
            // Pétalo de rosa
            ctx.beginPath()
            ctx.ellipse(0, 0, 8, 12, Math.PI / 4, 0, 2 * Math.PI)
            ctx.fillStyle = '#DC143C'
            ctx.fill()

            // Detalle del pétalo
            ctx.beginPath()
            ctx.ellipse(0, -2, 5, 8, Math.PI / 4, 0, 2 * Math.PI)
            ctx.fillStyle = '#FF6B8A'
            ctx.fill()
            ctx.closePath()
          }}
        />

        {/* Corazones rojos */}
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={20}
          recycle={true}
          colors={['#DC143C', '#FF0000', '#C71585', '#FF1493']}
          drawShape={ctx => {
            // Corazón
            ctx.beginPath()
            ctx.moveTo(0, 6)

            // Lado izquierdo
            ctx.bezierCurveTo(-6, 0, -12, -3, -8, -10)
            ctx.bezierCurveTo(-6, -12, -3, -12, 0, -8)

            // Lado derecho
            ctx.bezierCurveTo(3, -12, 6, -12, 8, -10)
            ctx.bezierCurveTo(12, -3, 6, 0, 0, 6)

            ctx.fillStyle = '#DC143C'
            ctx.fill()
            ctx.closePath()
          }}
        />
      </div>
    </main>
  );
};

export default IloveUHomepage;