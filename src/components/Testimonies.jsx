import { Nunito } from "next/font/google";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const nunito = Nunito({ subsets: ["latin"] });

const Testimonies = () => {

  const testimonies = [];

  // Usando un bucle for para llenar el array temporalmente
  for (let index = 0; index < 6; index++) {
    testimonies.push(
      <div key={index} className="flex flex-col items-center gap-5 p-4 rounded-xl shadoww">
        <div className="w-32 h-32 bg-gray-500 rounded-full -m-20"></div>
        <h3 className="mt-20 text-xl font-bold">Nombre Apellido {index + 1}</h3>
        <h4 className="text-sm text-gray-400">Nombre Empresa {index + 1}</h4>
        <p className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur soluta velit ut, nam tempora amet omnis magni. Dolorem saepe odio harum deserunt est laborum praesentium ullam? Blanditiis, eveniet praesentium.</p>
        <span className="flex gap-2 text-verde-agua"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mx-20 my-10 gap-10">
      <h1 className="text-xl text-verde-agua font-black">Testimonios</h1>
      <h2 className={`${nunito.className} text-4xl text-center font-bold mb-20 mx-32`}>
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid grid-cols-3 gap-x-10 gap-y-28 mx-20">
        {testimonies}
      </div>
    </div>
  );
}

export default Testimonies;