import Image from 'next/image';
import web from '../../public/web.svg';
import { Nunito } from "next/font/google";
import Link from 'next/link';

const nunito = Nunito({ subsets: ["latin"] });

const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mx-5 sm:mx-10 md:mx-20 my-10 gap-10 lg:gap-40 mt-28">
      <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-10">
        <h1 className={`${nunito.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black`}>Creando olas de innovacion para tu Negocio</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl">Soluciones de desarrollo web a medida, con un enfoque personal</h2>
        <Link href={'/servicios'} className={`${nunito.className} text-base sm:text-lg md:text-xl font-black gradient w-fit py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-xl hover:scale-110 transition-transform`}>
          Conoce nuestros servicios
        </Link>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <Image src={web} alt="Imagen relacionada con desarrollo web" />
      </div>
    </div>
  );
}

export default Landing;