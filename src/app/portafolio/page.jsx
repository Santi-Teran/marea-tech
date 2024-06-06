import projects from "../api/projects";
import SliderComponent from "@/components/SliderComponent";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Portafolio = () => {
  return (
    <div className="flex flex-col items-center py-32 gap-6 md:gap-10">
      <h1 className="text-lg md:text-2xl lg:text-5xl text-verde-agua font-black">Nuestro Portafolio</h1>
      <h2 className={`${nunito.className} text-sm md:text-lg lg:text-3xl text-center font-bold mx-2 md:mx-32`}>Explora algunos de nuestros proyectos recientes y descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos</h2>
      <SliderComponent projects={projects} />
    </div>
  )
}

export default Portafolio;