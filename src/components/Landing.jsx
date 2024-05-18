import Image from 'next/image';
import web from '../../public/web.svg';
import { Nunito } from "next/font/google";
import Link from 'next/link';

const nunito = Nunito({ subsets: ["latin"] });

const Landing = () => {
  return (
    <div className="flex justify-center items-center mx-20 my-10 gap-40 mt-28">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className={`${nunito.className} text-6xl font-black`}>Creando olas de innovacion para tu Negocio</h1>
        <h2 className="text-2xl">Soluciones de desarrollo web a medida, con un enfoque personal</h2>
        <Link href={'/servicios'} className={`${nunito.className} text-xl font-black gradient w-fit py-4 px-8 rounded-xl`}>Conoce nuestros servicios</Link>
      </div>
      <div className="w-1/2">
        <Image src={web} alt=""/>
      </div>
    </div>
  )
}

export default Landing;