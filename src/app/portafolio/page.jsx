import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Portafolio = () => {
  // Array de proyectos falsos
  const fakeProjects = [
    { 
      id: 1,
      title: "Proyecto 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://th.bing.com/th/id/OIP._joQl3MvICGKwiSWmEpv3QHaDZ?w=1024&h=469&rs=1&pid=ImgDetMain", // Ruta de la imagen del proyecto
    },
    { 
      id: 2,
      title: "Proyecto 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/project2.jpg", // Ruta de la imagen del proyecto
    },
    { 
      id: 3,
      title: "Proyecto 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/project3.jpg", // Ruta de la imagen del proyecto
    },
  ];

  return (
    <div className="flex flex-col items-center py-32 gap-10">
      <h1 className="text-5xl text-verde-agua font-black">Nuestro Portafolio</h1>
      <h2 className={`${nunito.className} text-3xl text-center font-bold mx-32`}>Explora algunos de nuestros proyectos recientes y descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos</h2>
      <SliderComponent projects={fakeProjects} /> {/* Pasar proyectos falsos al componente SliderComponent */}
    </div>
  )
}

export default Portafolio;
