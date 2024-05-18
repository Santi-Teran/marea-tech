import { Nunito } from "next/font/google";
import Link from "next/link";
import { FaPenNib, FaFireAlt, FaArrowRight } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoIosStats, IoMdCloudUpload, IoMdBusiness } from "react-icons/io";

const nunito = Nunito({ subsets: ["latin"] });

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-20 my-10 gap-10">
      <h1 className="text-xl text-verde-agua font-black">Nuestros Servicios</h1>
      <h2 className={`${nunito.className} text-4xl text-center font-bold mx-32`}>Descubri como podemos ayudarte a destacar en el mundo digital con un trato cercano y personalizado</h2>
      <div className="grid grid-cols-3 gap-10 mx-20">
        <div className="flex flex-col shadoww items-center gap-5 p-8 rounded-2xl hover:scale-105 dark:hover:bg-arena dark:hover:text-dark-blue transition-all hover:bg-dark-blue hover:text-arena">
          <div className="bg-verde-agua flex items-center justify-center rounded-full w-fit z-10">
            <Link href={'/servicios'}><FaFireAlt className="text-8xl p-6" /></Link>
          </div>
          <h3 className={`${nunito.className} text-2xl font-bold text-center`}>Idear</h3>
          <FaArrowRight className="dark:bg-arena bg-dark-blue text-arena bg-dark dark:text-dark-blue p-2 text-3xl rounded-full" />
        </div>
        <div className="flex flex-col shadoww items-center gap-5 p-8 rounded-2xl hover:scale-105 dark:hover:bg-arena dark:hover:text-dark-blue transition-all hover:bg-dark-blue hover:text-arena">
          <div className="bg-verde-agua flex items-center justify-center rounded-full w-fit">
            <FaPenNib className="text-8xl p-6" />
          </div>
          <h3 className={`${nunito.className} text-2xl font-bold text-center`}>Diseno</h3>
          <FaArrowRight className="dark:bg-arena bg-dark-blue text-arena dark:text-dark-blue p-2 text-3xl rounded-full" />
        </div>
        <div className="flex flex-col shadoww items-center gap-5 p-8 rounded-2xl hover:scale-105 dark:hover:bg-arena dark:hover:text-dark-blue transition-all hover:bg-dark-blue hover:text-arena">
          <div className="bg-verde-agua flex items-center justify-center rounded-full w-fit">
            <FiMonitor className="text-8xl p-6" />
          </div>
          <h3 className={`${nunito.className} text-2xl font-bold text-center`}>Desarrollo Web</h3>
          <FaArrowRight className="dark:bg-arena bg-dark-blue text-arena dark:text-dark-blue p-2 text-3xl rounded-full" />
        </div>
        <div className="flex flex-col shadoww items-center gap-5 p-8 rounded-2xl hover:scale-105 dark:hover:bg-arena dark:hover:text-dark-blue transition-all hover:bg-dark-blue hover:text-arena">
          <div className="bg-verde-agua flex items-center justify-center rounded-full w-fit">
            <IoIosStats className="text-8xl p-6" />
          </div>
          <h3 className={`${nunito.className} text-2xl font-bold text-center`}>Mantenimiento y Optimizacion</h3>
          <FaArrowRight className="dark:bg-arena bg-dark-blue text-arena dark:text-dark-blue p-2 text-3xl rounded-full" />
        </div>
        <div className="flex flex-col shadoww items-center gap-5 p-8 rounded-2xl hover:scale-105 dark:hover:bg-arena dark:hover:text-dark-blue transition-all hover:bg-dark-blue hover:text-arena">
          <div className="bg-verde-agua flex items-center justify-center rounded-full w-fit">
            <IoMdCloudUpload className="text-8xl p-6" />
          </div>
          <h3 className={`${nunito.className} text-2xl font-bold text-center`}>Alojamiento Web</h3>
          <FaArrowRight className="dark:bg-arena bg-dark-blue text-arena dark:text-dark-blue p-2 text-3xl rounded-full" />
        </div>
        <div className="flex flex-col shadoww items-center gap-5 p-8 rounded-2xl hover:scale-105 dark:hover:bg-arena dark:hover:text-dark-blue transition-all hover:bg-dark-blue hover:text-arena">
          <div className="bg-verde-agua flex items-center justify-center rounded-full w-fit">
            <IoMdBusiness className="text-8xl p-6" />
          </div>
          <h3 className={`${nunito.className} text-2xl font-bold text-center`}>Consultoria Tecnologica</h3>
          <FaArrowRight className="dark:bg-arena bg-dark-blue text-arena dark:text-dark-blue p-2 text-3xl rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Services;