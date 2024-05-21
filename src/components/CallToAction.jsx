import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center my-10 gap-10 bg-dark-blue dark:bg-arena text-arena dark:text-dark-blue mx-40 p-12 rounded-3xl'>
      <h2 className={`${nunito.className} text-3xl font-black`}>¿Listo para llevar tu negocio al siguiente nivel?</h2>
      <button className={`${nunito.className} text-xl font-black gradient w-fit py-4 px-8 rounded-xl hover:scale-125 transition-transform`}>Habla con nosotros!</button>
    </div>
  )
}

export default CallToAction;