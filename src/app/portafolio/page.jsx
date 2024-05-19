import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Portafolio = () => {
  return (
    <div className="flex flex-col items-center py-32 gap-10">
      <h1 className="text-5xl text-verde-agua font-black">Nuestros Portafolio</h1>
      <h2 className={`${nunito.className} text-3xl text-center font-bold mx-32`}>Explorá algunos de nuestros proyectos recientes y descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos</h2>
      <SliderComponent />
    </div>
  )
}

export default Portafolio;