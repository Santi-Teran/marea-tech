import { services } from "../api/services";
import Link from "next/link";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Servicios = () => {
  return (
    <div className="flex flex-col items-center py-32 gap-10">
      <h1 className="text-5xl text-verde-agua font-black">Nuestros Servicios</h1>
      <h2 className={`${nunito.className} text-3xl text-center font-bold mx-32`}>Descubri como podemos ayudarte a destacar en el mundo digital con un trato cercano y personalizado</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-20">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-5 p-8 rounded-2xl shadoww">
            <div className="flex items-center justify-center w-16 h-16 bg-verde-agua rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className={`${nunito.className} text-verde-agua text-3xl font-bold text-center mb-2`}>{service.title}</h3>
            <p className="text-center text-lg">{service.description}</p>
            <ul className="text-left mt-4">
              <h4 className="text-2xl font-bold mb-2">Beneficios:</h4>
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="text-md mb-2">{benefit}</li>
              ))}
            </ul>
            <Link href="/contacto" className={`${nunito.className} mt-4 px-6 py-2 gradient font-bold rounded-md hover:scale-125 transition-all`}>Hablemos</Link>
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Servicios;