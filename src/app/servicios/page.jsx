import { Nunito } from "next/font/google";
import { FaPenNib, FaFireAlt, FaArrowRight } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoIosStats, IoMdCloudUpload, IoMdBusiness } from "react-icons/io";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"] });

const services = [
  {
    title: "Idear",
    icon: <FaFireAlt className="text-3xl text-white" />,
    description: "Transformamos tus ideas en conceptos sólidos y estrategias efectivas para tu presencia en la web.",
    benefits: [
      "Análisis profundo de tus necesidades y objetivos.",
      "Desarrollo de estrategias personalizadas.",
      "Creatividad e innovación en cada proyecto."
    ]
  },
  {
    title: "Diseñar",
    icon: <FaPenNib className="text-3xl text-white" />,
    description: "Creamos diseños visualmente atractivos y funcionales que reflejan la identidad de tu marca.",
    benefits: [
      "Diseño centrado en el usuario.",
      "Interfaces atractivas y funcionales.",
      "Adaptación a diferentes dispositivos y plataformas."
    ]
  },
  {
    title: "Desarrollar",
    icon: <FiMonitor className="text-3xl text-white" />,
    description: "Llevamos a la vida los diseños con un desarrollo web robusto y escalable.",
    benefits: [
      "Desarrollo ágil y eficiente.",
      "Uso de tecnologías modernas.",
      "Código limpio y escalable."
    ]
  },
  {
    title: "Mantener y Optimizar",
    icon: <IoIosStats className="text-3xl text-white" />,
    description: "Nos encargamos de mantener tu sitio web actualizado, seguro y en óptimas condiciones.",
    benefits: [
      "Mantenimiento regular y preventivo.",
      "Optimización de rendimiento y velocidad.",
      "Mejoras continuas y actualizaciones."
    ]
  },
  {
    title: "Alojamiento Web",
    icon: <IoMdCloudUpload className="text-3xl text-white" />,
    description: "Proporcionamos servicios de alojamiento web seguros y confiables.",
    benefits: [
      "Alta disponibilidad y tiempo de actividad.",
      "Configuración y gestión de servidores.",
      "Copias de seguridad y recuperación de datos."
    ]
  },
  {
    title: "Consultoría Tecnológica",
    icon: <IoMdBusiness className="text-3xl text-white" />,
    description: "Ofrecemos asesoramiento experto para ayudarte a adoptar las mejores soluciones tecnológicas.",
    benefits: [
      "Asesoramiento personalizado.",
      "Identificación de oportunidades tecnológicas.",
      "Planificación e implementación estratégica."
    ]
  }
];

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