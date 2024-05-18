import React from 'react';

const FloatingWhatsAppButton = () => {
  const phoneNumber = '5492236343568'; // Reemplaza con tu número de teléfono en formato internacional
  const message = 'Hola, me gustaría obtener más información.'; // Reemplaza con tu mensaje predefinido
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
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
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button style={buttonStyle}>
        <img src="/whatsapp-icon.png" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
      </button>
    </a>
  );
};

export default FloatingWhatsAppButton;
