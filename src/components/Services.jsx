import Link from "next/link";
import { service } from "@/app/api/services";
import { Nunito } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";

const nunito = Nunito({ subsets: ["latin"] });

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-20 my-10 gap-10">
      <h1 className="text-xl text-verde-agua font-black">Nuestros Servicios</h1>
      <h2 className={`${nunito.className} text-4xl text-center font-bold mx-32`}>Descubri como podemos ayudarte a destacar en el mundo digital con un trato cercano y personalizado</h2>
      <div className="grid grid-cols-3 gap-10 mx-20">
        {service.map((service, index) => (
          <div key={index} className="flex flex-col shadoww items-center gap-5 p-8 rounded-2xl hover:scale-105 dark:hover:bg-arena dark:hover:text-dark-blue transition-all hover:bg-dark-blue hover:text-arena">
            <div className="bg-verde-agua flex items-center justify-center rounded-full w-fit z-10">{service.icon}</div>
            <h3 className={`${nunito.className} text-2xl font-bold text-center`}>{service.title}</h3>
            <Link href={'/servicios'}><FaArrowRight className="bg-verde-agua p-2 text-3xl rounded-full hover:scale-125 transition-transform" /></Link>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default Services;