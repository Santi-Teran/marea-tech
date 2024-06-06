import Image from "next/image";
import nosotros from "../api/nosotros";
import { Nunito } from "next/font/google";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { PiHandshake } from "react-icons/pi";

const nunito = Nunito({ subsets: ["latin"] });

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center py-8 md:py-16 lg:py-32 gap-10 md:gap-20">
      
      <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="text-2xl md:text-5xl text-verde-agua font-black">Conoce a Marea Tech</h1>
        <h2 className={`${nunito.className} text-lg md:text-3xl font-bold mx-4 md:mx-32`}>Descubre quiénes somos, qué nos motiva y cómo podemos ayudarte a alcanzar tus objetivos digitales</h2>
      </div>

      <div className="flex flex-col items-center gap-5 text-center">
        <h3 className="text-xl md:text-2xl text-verde-agua font-black">Nuestro Equipo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-4 md:mx-20">
          {nosotros.map((miembro) => (
            <div key={miembro.id} className="bg-white flex flex-col items-center rounded-xl gap-5 pb-5 shadow-xl text-dark-blue">
              <div className="bg-verde-agua rounded-xl pt-5">
                <Image src={miembro.image} alt={miembro.name} width={250} height={250} />
              </div>
              <span className={`${nunito.className} text-lg md:text-xl font-bold`}>{miembro.name}</span>
              <span className={`${nunito.className}`}>{miembro.position}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 mx-4 md:mx-20">
        <div className="w-full md:w-1/2 flex flex-col items-center gap-5 shadoww p-5 md:p-10 rounded-2xl">
          <h3 className={`${nunito.className} text-verde-agua text-xl md:text-2xl font-bold`}>Nuestra Misión y Visión</h3>
          <p className="text-sm md:text-base"><span className="font-bold">Misión: </span>Ofrecer soluciones tecnológicas innovadoras y personalizadas en diseño y desarrollo web, destacándonos por nuestra atención al detalle y el trato cercano con nuestros clientes.</p>
          <p className="text-sm md:text-base"><span className="font-bold">Visión: </span>Convertirnos en la referencia local para soluciones tecnológicas y desarrollo web, expandiendo nuestro alcance a nuevos mercados y clientes, manteniendo siempre la excelencia y la innovación como nuestros pilares fundamentales.</p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center gap-5 shadoww p-5 md:p-10 rounded-2xl">
          <h3 className={`${nunito.className} text-verde-agua text-xl md:text-2xl font-bold`}>Nuestros Valores</h3>
          <div className="flex flex-col gap-5 items-center justify-center h-full">
            <span className="flex items-center text-base md:text-xl font-bold gap-2"><HiOutlineRocketLaunch className="text-2xl md:text-3xl" />Innovación</span>
            <span className="flex items-center text-base md:text-xl font-bold gap-2"><IoBookOutline className="text-2xl md:text-3xl" />Transparencia</span>
            <span className="flex items-center text-base md:text-xl font-bold gap-2"><LiaBalanceScaleSolid className="text-2xl md:text-3xl" />Responsabilidad</span>
            <span className="flex items-center text-base md:text-xl font-bold gap-2"><PiHandshake className="text-2xl md:text-3xl" />Colaboración</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Nosotros;