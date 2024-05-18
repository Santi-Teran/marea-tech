import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const phoneNumber = '5492236343568'; // Reemplaza con tu número de teléfono en formato internacional
  const message = 'Hola, me gustaría obtener más información.'; // Reemplaza con tu mensaje predefinido
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '60px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    padding: '15px',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
      <FaWhatsapp className="text-4xl"/>
    </Link>
  );
};

export default FloatingWhatsAppButton;
