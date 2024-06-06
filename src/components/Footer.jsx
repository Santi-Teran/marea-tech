import Link from 'next/link';
import { FaRegCopyright } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='flex justify-between star-wars-gradient p-4 shadoww text-dark-blue dark:text-arena flex-col items-center md:flex-row'>
      <div className='flex items-center gap-x-2'>
        <FaRegCopyright />
        <p className="text-sm lg:text-base">2024 Marea Tech.</p>
      </div>
      <div className='flex text-lg lg:text-xl items-center gap-x-3'>
        <Link href={''} target='_BLANK'><FaWhatsapp /></Link>
        <Link href={''} target='_BLANK'><FaLinkedinIn /></Link>
        <Link href={''} target='_BLANK'><FaInstagram /></Link>
      </div>
    </div>
  )
}