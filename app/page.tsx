import React from "react";
import nosotros from "@/assets/nosotros.jpeg";
import Heart1 from "@/assets/heart1.svg";


const btns = [
  {
    id:1,
    
  }
]

const IloveUHomepage = () => {
  return (
    <main className=" flex-1 w-full min-h-screen grid grid-cols-1 items-center bg-black p-5">
      <section className="container mx-auto max-w-xl relative flex flex-col p-10 bg-slate-100 border border-red-500 drop-shadow-2xl drop-shadow-red-500/50 rounded-2xl">
        <img
          src={""}
          className="w-32 h-32 md:w-50 md:h-50 object-cover rounded-full absolute -top-16 left-1/2 -translate-x-1/2 -translate-y-1/2  border z-10 drop-shadow-2xl drop-shadow-red-500/50 border-red-500"
        ></img>
        <article>
          <h1 className="text-black">Para</h1>
        </article>

        <article className="">
          {}
          <button onClick={} className="text-black">No</button>
        </article>

        <Heart1
          fill="red"
          className="h-16 w-16 absolute -right-5 -top-10"
        ></Heart1>
      </section>
    </main>
  );
};

export default IloveUHomepage;
