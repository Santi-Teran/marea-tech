import Image from 'next/image';
import logo from '../../public/mareatech.png'
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center fixed bg-arena w-full dark:bg-dark-blue shadow-xl z-20'>
      <Link href={'/'} className='w-1/6 p-5'><Image src={logo} alt='Marea Tech'/></Link>
      <ul className='flex gap-12'>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href={'/'}>Inicio</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href={'/servicios'}>Servicios</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href={'/portafolio'}>Portafolio</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href={'/nosotros'}>Nosotros</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href={'/contacto'}>Contacto</Link>
      </ul>
      <ThemeToggle />
    </div>
  )
}

export default NavBar;
