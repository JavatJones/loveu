"use client"
import React, { useState, useRef } from "react";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

// Assets
import Nosotros from "@/assets/nosotros.jpeg";
import Heart1 from "@/assets/heart1.svg";
import Sad from "@/assets/sad.jpg";
import HappyDefault from "@/assets/B2.png";
import id1 from "@/assets/1.jpeg";
import id2 from "@/assets/2.jpeg";
import id3 from "@/assets/3.jpeg";
import { StaticImageData } from "next/image";

// Definición de la interfaz para los textos
interface Surprise {
  id: number;
  text: string;
  img: StaticImageData; // O StaticImageData si usas Next.js optimizado
}

const texts: Surprise[] = [
  {
    id: 1,
    text: "Eres lo más bonito de mi vida ❤️",
    img: id1
  },
  {
    id: 2,
    text: "Te amo mas de lo que imaginas, adoro ser tu novio! 😍",
    img: id2
  },
  {
    id: 3,
    text: "Amo tus besos y tu cariño miamor 🌹",
    img: id3
  },
  {
    id: 4,
    text: "Adoro pasar tiempo contigo ❤️",
    img: id1
  },
  {
    id: 5,
    text: "Mi preciosa Nina, te amo mucho! 😍",
    img: id2
  },
  {
    id: 6,
    text: "Bebesita hermosa, preciosa, eres muy importante para mi 🌹",
    img: id3
  },
];

const IloveUHomepage = () => {
  const [non, setNon] = useState<boolean>(false);
  const [sad, setSad] = useState<boolean>(false);
  const [happy, setHappy] = useState<boolean>(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [nonCounter, setNonCounter] = useState<number>(0);
  const { width, height } = useWindowSize();

  // Estado para la sorpresa aleatoria
  const [currentSurprise, setCurrentSurprise] = useState<Surprise>(texts[0]);

  // Función principal para cuando dice que SÍ
  const handleSheSaidYes = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setCurrentSurprise(texts[randomIndex]);
    setHappy(true);
  };

  const moveButton = () => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const buttonWidth = 110;
    const buttonHeight = 70;

    let maxX = sectionRect.width - buttonWidth;
    let maxY = sectionRect.height - buttonHeight;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    setPosX(newX);
    setPosY(newY);
    setNonCounter(nonCounter + 1);
  };


  if (nonCounter >= 5) {
    return (
      <main className="relative z-50 bg-black w-full min-h-screen flex justify-center items-center p-5">
        <div className="flex flex-col gap-10 text-center">
          <h1 className="text-white text-3xl font-bold">¿Estás segura? 🥺</h1>
          <div className="grid grid-cols-2 gap-5">
            <button
              onClick={() => setSad(true)}
              className="bg-red-500 text-white rounded-2xl shadow-lg shadow-red-500/50 px-8 py-5 cursor-pointer hover:scale-105 transition duration-300"
            >
              Sí 😢
            </button>
            <button
              onClick={() => { setNonCounter(0); setNon(false); }}
              className="bg-white text-black rounded-2xl shadow-lg shadow-white/50 px-8 py-5 cursor-pointer hover:scale-105 transition duration-300"
            >
              Reconsiderar 😊
            </button>
          </div>
        </div>

        {sad && (
          <div className="absolute inset-0 z-[60] flex flex-col gap-8 bg-black/90 backdrop-blur-2xl justify-center items-center p-5 text-center">
            <img src={Sad.src} className="size-48 border-2 rounded-lg border-blue-400 object-cover" alt="Sad" />
            <span className="text-3xl text-white font-medium">Me hiciste llorar y a Bluey también 😭💔</span>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="relative flex-1 w-full min-h-screen flex items-center justify-center bg-black p-5 overflow-hidden">
      <section ref={sectionRef} className="container mx-auto max-w-xl min-h-[400px] relative flex flex-col p-16 bg-slate-100 border border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)] rounded-2xl">
        <img
          src={Nosotros.src}
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full absolute -top-32 left-1/2 -translate-x-1/2 border-4 border-red-500 shadow-xl z-10"
          alt="Nosotros"
        />

        <article className="mt-12 mb-10 text-center flex flex-col gap-5">
          <h1 className="text-black text-3xl font-medium italic">Feliz san valentin cariño</h1>
          <span className="text-black text-xl font-normal">
            Te amo mucho bb
          </span>
          <span className="text-black text-xl font-normal">
            Te tengo una pregunta :)
          </span>
          <span className="text-black text-xl font-normal">
            Me querí?
          </span>
        </article>

        <article className="relative h-20 grid grid-cols-2 items-center justify-center gap-5">
          <button
            onClick={handleSheSaidYes}
            className="text-white shadow-lg shadow-lime-500/50 bg-lime-500 p-5 rounded-2xl hover:bg-lime-600 transition duration-300 cursor-pointer font-bold"
          >
            Sí
          </button>
          <button
            onClick={() => setNon(true)}
            className={`text-white shadow-lg shadow-red-500/50 bg-red-500 p-5 rounded-2xl hover:bg-red-700 transition duration-300 cursor-pointer font-bold ${non ? "invisible" : ""}`}
          >
            No
          </button>
        </article>

        {/* Botón escurridizo */}
        {non && (
          <button
            onClick={moveButton}
            style={{
              position: 'absolute',
              left: `${posX}px`,
              top: `${posY}px`,
              transition: 'all 0.2s ease-out'
            }}
            className="w-32 text-white shadow-xl shadow-red-500 bg-red-600 p-4 rounded-2xl z-50 cursor-pointer font-bold"
          >
            ¿No? 😭
          </button>
        )}

        <Heart1 fill="red" className="h-20 w-20 absolute -right-5 -top-10 animate-bounce" />
      </section>

      {/* Overlay de Felicidad */}
      {happy && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center p-6 text-center animate-in fade-in duration-500">
          <div className="relative group">
            <img
              src={currentSurprise.img.src}
              className="h-80 w-80 object-cover rounded-3xl border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-6"
              alt="Su sorpresa"
            />
            <div className="absolute bottom-3 -right-6 bg-red-500 p-3 rounded-full animate-pulse">❤️</div>
          </div>

          <h2 className="text-4xl text-white font-black drop-shadow-lg mb-8 uppercase tracking-tighter">
            {currentSurprise.text}
          </h2>

          <button
            onClick={() => setHappy(false)}
            className="px-8 py-3 cursor-pointer bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/20"
          >
            Volver
          </button>

          {/* Pétalos de rosas */}
          <Confetti
            width={width}
            height={height}
            numberOfPieces={100}
            colors={['#8B0000', '#DC143C', '#FF0000']}
            drawShape={ctx => {
              ctx.beginPath();
              ctx.ellipse(0, 0, 8, 12, Math.PI / 4, 0, 2 * Math.PI);
              ctx.fillStyle = '#DC143C';
              ctx.fill();
            }}
          />

          {/* Corazones */}
          <Confetti
            width={width}
            height={height}
            numberOfPieces={60}
            colors={['#FF1493', '#DC143C']}
            drawShape={ctx => {
              ctx.beginPath();
              ctx.moveTo(0, 6);
              ctx.bezierCurveTo(-6, 0, -12, -3, -8, -10);
              ctx.bezierCurveTo(-6, -12, -3, -12, 0, -8);
              ctx.bezierCurveTo(3, -12, 6, -12, 8, -10);
              ctx.bezierCurveTo(12, -3, 6, 0, 0, 6);
              ctx.fill();
              ctx.closePath();
            }}
          />
        </div>
      )}
    </main>
  );
};

export default IloveUHomepage;  