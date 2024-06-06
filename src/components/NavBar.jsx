'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../public/mareatech.png';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between items-center fixed bg-arena w-full dark:bg-dark-blue shadow-xl z-20'>
      <Link href='/' className='md:w-1/6 w-1/2 p-5'>
        <Image src={logo} alt='Marea Tech'/>
      </Link>
      <div className='hidden md:flex gap-12'>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/'>Inicio</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/servicios'>Servicios</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/portafolio'>Portafolio</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/nosotros'>Nosotros</Link>
        <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/contacto'>Contacto</Link>
      </div>
      <div className='md:hidden absolute right-0 top-0 m-5'>
        <button onClick={toggleMenu} className='text-3xl focus:outline-none'>
          <FiMenu />
        </button>
      </div>
      <div className='md:flex hidden'>
        <ThemeToggle />
      </div>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-30 flex flex-col items-end justify-center md:hidden'>
          <div className='bg-white dark:bg-dark-blue rounded-lg shadow-lg w-60 h-full'>
            <button onClick={toggleMenu} className='absolute right-0 m-5 text-3xl'><FiX /></button>
            <nav className='flex flex-col items-start gap-10 p-10 pt-20 text-xl'>
              <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/'>Inicio</Link>
              <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/servicios'>Servicios</Link>
              <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/portafolio'>Portafolio</Link>
              <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/nosotros'>Nosotros</Link>
              <Link className='hover:scale-105 hover:border-b border-dark-blue dark:border-arena transition-all' href='/contacto'>Contacto</Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
