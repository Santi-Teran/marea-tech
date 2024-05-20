import { Nunito } from "next/font/google";
import { MdMailOutline, MdOutlineMessage, MdPersonOutline } from "react-icons/md";
import { BiBuildingHouse, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn , FaTwitter } from "react-icons/fa";

const nunito = Nunito({ subsets: ["latin"] });

const Contacto = () => {
  return (
    <div className="flex flex-col items-center py-32 gap-20">

      <div className="flex justify-center gap-40 mx-40">

        <div className="w-1/2 flex flex-col gap-10">
          <h1 className="text-6xl text-verde-agua font-black">Trabajemos Juntos!</h1>
          <h2 className={`${nunito.className} text-2xl font-light`}>Estamos aquí para ayudarte. Completa el formulario a continuación o utiliza nuestras vías de contacto</h2>
          <ul className="flex flex-col gap-10">
            <li className="flex items-center gap-2"><MdMailOutline className="text-2xl text-verde-agua" />info@mareatech.com</li>
            <li className="flex items-center gap-2"><BiBuildingHouse className="text-2xl text-verde-agua" /></li>
            <li className="flex items-center gap-2"><BiPhone className="text-2xl text-verde-agua" />+54 223 1111111</li>
          </ul>
        </div>

        <form className="w-1/2 flex flex-col gap-10">
          <div className="flex justify-between items-center p-4 rounded-lg border-2 border-verde-agua bg-transparent">
            <input placeholder="Nombre" className="bg-transparent focus:outline-none focus:ring-0" />
            <MdPersonOutline className="text-2xl"/>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg border-2 border-verde-agua bg-transparent">
            <input placeholder="Mail" className="bg-transparent focus:outline-none focus:ring-0" />
            <MdMailOutline className="text-2xl"/>
          </div>
          <div className="flex justify-between items-start p-4 rounded-lg border-2 border-verde-agua bg-transparent">
            <textarea placeholder="Mensaje" className="w-full bg-transparent focus:outline-none focus:ring-0 resize-none h-40" />
            <MdOutlineMessage className="text-2xl"/>
          </div>
          <button className={`${nunito.className} text-xl gradient w-fit py-3 px-9 rounded-xl`}>Enviar</button>
        </form>

      </div>

      <div className="flex gap-20">
        <div className="flex items-center gap-5 shadow-2xl px-8 py-4 rounded-xl hover:scale-125 transition-transform"><FaFacebookF className="text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />Facebook</div>
        <div className="flex items-center gap-5 shadow-2xl px-8 py-4 rounded-xl hover:scale-125 transition-transform"><FaInstagram className="text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />Instagram</div>
        <div className="flex items-center gap-5 shadow-2xl px-8 py-4 rounded-xl hover:scale-125 transition-transform"><FaLinkedinIn  className="text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />Linkedin</div>
        <div className="flex items-center gap-5 shadow-2xl px-8 py-4 rounded-xl hover:scale-125 transition-transform"><FaTwitter className="text-4xl text-verde-agua border-2 border-verde-agua p-2 rounded-full hover:bg-verde-agua hover:text-dark-blue dark:hover:text-arena transition-colors" />Twitter</div>
      </div>

    </div>
  )
}

export default Contacto;