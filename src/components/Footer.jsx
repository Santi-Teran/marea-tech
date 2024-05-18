import Link from 'next/link';
import { FaRegCopyright } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TiWaves } from "react-icons/ti";

export default function Footer() {
  return (
    <div className='flex justify-between star-wars-gradient p-2 text-white flex-col items-center md:flex-row'>
      <div className='flex items-center gap-x-2'>
        <FaRegCopyright />
        <p className="text-sm lg:text-base">2024 Marea Tech. Done with</p>
        <TiWaves className="text-verde-agua text-2xl"/>
      </div>
      <div className='flex text-lg lg:text-xl items-center gap-x-3'>
        <Link href={''} target='_BLANK'><FaWhatsapp /></Link>
        <Link href={''} target='_BLANK'><FaLinkedin /></Link>
        <Link href={''} target='_BLANK'><FaInstagram /></Link>
      </div>
    </div>
  )
}
