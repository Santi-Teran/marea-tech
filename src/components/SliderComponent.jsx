'use client'
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";


const SliderComponent = ({ projects }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div>
      <div className="flex mx-4 md:mx-20 lg:mx-40 gap-4 md:gap-10">
        <button className="embla__prev text-3xl md:text-6xl hidden md:block" onClick={scrollPrev}><MdNavigateBefore /></button>
        <div ref={emblaRef} className='overflow-hidden'>
          <div className="flex">
            {projects.map((project) => (
              <div key={project.id} className="embla flex flex-col justify-between w-full md:w-96 bg-verde-agua rounded-3xl p-4 md:p-10 gap-4 md:gap-6">
                <div className='flex flex-col gap-4'>
                  <h3 className='text-base md:text-3xl font-bold'>{project.title}</h3>
                  <hr className='border-2'/>
                  <p className='text-sm md:text-base'>{project.description}</p>
                </div>
                <div className='bg-white rounded-xl overflow-hidden'>
                  <img src={project.image} alt={project.title} className='w-full'/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="embla__next text-3xl md:text-6xl hidden md:block" onClick={scrollNext}><MdNavigateNext /></button>
      </div>
      <div className='md:hidden flex justify-center mt-10 gap-20'>
        <button className="embla__prev text-3xl md:text-6xl" onClick={scrollPrev}><MdNavigateBefore /></button>
        <button className="embla__next text-3xl md:text-6xl" onClick={scrollNext}><MdNavigateNext /></button>
      </div>
    </div>
  )
}

export default SliderComponent;