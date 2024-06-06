import { Nunito } from "next/font/google";
import { MdMailOutline, MdOutlineMessage, MdPersonOutline } from "react-icons/md";
import { BiBuildingHouse, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn , FaTwitter } from "react-icons/fa";

const nunito = Nunito({ subsets: ["latin"] });

const Contacto = () => {
  return (
    <div className="flex flex-col items-center py-32 gap-20 mx-4 md:mx-20">

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-40">

        <div className="lg:w-1/2 flex flex-col gap-10">
          <h1 className="text-3xl md:text-6xl text-verde-agua font-black">Trabajemos Juntos!</h1>
          <h2 className={`${nunito.className} text-lg md:text-2xl font-light`}>Estamos aquí para ayudarte. Completa el formulario a continuación o utiliza nuestras vías de contacto</h2>
          <ul className="flex flex-col gap-4 md:gap-10">
            <li className="flex items-center gap-2"><MdMailOutline className="text-xl md:text-2xl text-verde-agua" />info@mareatech.com</li>
            <li className="flex items-center gap-2"><BiBuildingHouse className="text-xl md:text-2xl text-verde-agua" /></li>
            <li className="flex items-center gap-2"><BiPhone className="text-xl md:text-2xl text-verde-agua" />+54 223 1111111</li>
          </ul>
        </div>

        <form className="lg:w-1/2 flex flex-col gap-4 md:gap-10">
          <div className="flex justify-between items-center p-4 rounded-lg border-2 border-verde-agua bg-transparent">
            <input placeholder="Nombre" className="bg-transparent focus:outline-none focus:ring-0 w-full" />
            <MdPersonOutline className="text-xl md:text-2xl"/>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg border-2 border-verde-agua bg-transparent">
            <input placeholder="Mail" className="bg-transparent focus:outline-none focus:ring-0 w-full" />
            <MdMailOutline className="text-xl md:text-2xl"/>
          </div>
          <div className="flex justify-between items-start p-4 rounded-lg border-2 border-verde-agua bg-transparent">
            <textarea placeholder="Mensaje" className="w-full bg-transparent focus:outline-none focus:ring-0 resize-none h-32 md:h-40" />
            <MdOutlineMessage className="text-xl md:text-2xl"/>
          </div>
          <button className={`${nunito.className} text-lg md:text-xl gradient w-fit py-3 px-6 md:px-9 rounded-xl hover:scale-105 transition-transform`}>Enviar</button>
        </form>

      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-20">
        <div className="flex items-center gap-5 shadow-2xl px-6 md:px-8 py-4 rounded-xl hover:scale-105 transition-transform">
          <FaFacebookF className="text-3xl md:text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />
          Facebook
        </div>
        <div className="flex items-center gap-5 shadow-2xl px-6 md:px-8 py-4 rounded-xl hover:scale-105 transition-transform">
          <FaInstagram className="text-3xl md:text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />
          Instagram
        </div>
        <div className="flex items-center gap-5 shadow-2xl px-6 md:px-8 py-4 rounded-xl hover:scale-105 transition-transform">
          <FaLinkedinIn className="text-3xl md:text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />
          Linkedin
        </div>
        <div className="flex items-center gap-5 shadow-2xl px-6 md:px-8 py-4 rounded-xl hover:scale-105 transition-transform">
          <FaTwitter className="text-3xl md:text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />
          Twitter
        </div>
      </div>

    </div>
  )
}

export default Contacto;