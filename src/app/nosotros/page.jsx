import { Nunito } from "next/font/google";
import Image from "next/image";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { PiHandshake } from "react-icons/pi";

const nunito = Nunito({ subsets: ["latin"] });

const nosotros = [
  { 
    id: 1,
    name: "Nombre Apellido",
    position: "Fundador y CEO",
    image: '/hombre.png', // Ruta de la imagen del proyecto
  },
  { 
    id: 2,
    name: "Nombre Apellido",
    position: "Fundador y CEO",
    image: '/hombre.png', // Ruta de la imagen del proyecto
  },
  { 
    id: 3,
    name: "Nombre Apellido",
    position: "Fundador y CEO",
    image: '/hombre.png', // Ruta de la imagen del proyecto
  },
]

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center py-32 gap-20">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl text-verde-agua font-black">Conoce a Marea Tech</h1>
        <h2 className={`${nunito.className} text-3xl text-center font-bold mx-32`}>Descubri quiénes somos, qué nos motiva y cómo podemos ayudarte a alcanzar tus objetivos digitales</h2>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-2xl text-verde-agua font-black">Nuestro Equipo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20">
          {nosotros.map((nosotros, index) => (
            <div key={index} className="bg-white flex flex-col items-center rounded-xl gap-5 pb-5 shadow-xl text-dark-blue">
              <div className="bg-verde-agua rounded-xl pt-5">
                <Image src={nosotros.image} alt="" width={250} height={0} />
              </div>
                <span className={`${nunito.className} text-xl font-bold`}>{nosotros.name}</span>
                <span className={`${nunito.className}`}>{nosotros.position}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-20 mx-40">
        <div className="w-1/2 flex flex-col items-center gap-5 shadoww p-10 rounded-2xl">
          <h3 className={`${nunito.className} text-verde-agua text-2xl font-bold`}>Nuestra Misión y Visión</h3>
          <p><span className="font-bold">Misión: </span>Ofrecer soluciones tecnológicas innovadoras y personalizadas en diseño y desarrollo web, destacándonos por nuestra atención al detalle y el trato cercano con nuestros clientes.</p>
          <p><span className="font-bold">Visión: </span>Convertirnos en la referencia local para soluciones tecnológicas y desarrollo web, expandiendo nuestro alcance a nuevos mercados y clientes, manteniendo siempre la excelencia y la innovación como nuestros pilares fundamentales.</p>
        </div>

        <div className="w-1/2 flex flex-col items-center gap-5 shadoww p-10 rounded-2xl">
          <h3 className={`${nunito.className} text-verde-agua text-2xl font-bold`}>Nuestros Valores</h3>
          <div className="flex flex-col gap-5 items-center justify-center h-full">
            <span className="flex items-center text-xl font-bold gap-2"><HiOutlineRocketLaunch className="text-3xl" />Innovacion</span>
            <span className="flex items-center text-xl font-bold gap-2"><IoBookOutline className="text-3xl" />Transparencia</span>
            <span className="flex items-center text-xl font-bold gap-2"><LiaBalanceScaleSolid  className="text-3xl" />Responsabilidad</span>
            <span className="flex items-center text-xl font-bold gap-2"><PiHandshake className="text-3xl" />Colaboracion</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros;