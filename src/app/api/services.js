import { FaPenNib, FaFireAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoIosStats, IoMdCloudUpload, IoMdBusiness } from "react-icons/io";

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

export { services };

const service = [
  {
    title: "Idear",
    icon: <FaFireAlt className="text-8xl p-6" />
  },
  {
    title: "Diseñar",
    icon:<FaPenNib className="text-8xl p-6" />,
  },
  {
    title: "Desarrollar",
    icon:<FiMonitor className="text-8xl p-6" />,
  },
  {
    title: "Mantener y Optimizar",
    icon:<IoIosStats className="text-8xl p-6" />,
  },
  {
    title: "Alojamiento Web",
    icon:<IoMdCloudUpload className="text-8xl p-6" />,
  },
  {
    title: "Consultoria Tecnologica",
    icon:<IoMdBusiness className="text-8xl p-6" />,
  }
];

export { service };