import Image from 'next/image';
import logo from '../../public/mareatech.png'
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center fixed bg-arena w-full dark:bg-dark-blue shadow-xl z-20'>
      <Image src={logo} alt='Marea Tech' className='w-1/6 p-5'/>
      <ul className='flex gap-12'>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Portafolio</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <ThemeToggle />
    </div>
  )
}

export default NavBar;
