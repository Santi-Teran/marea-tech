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
    <div className="flex mx-40 gap-10">
      <button className="embla__prev text-6xl" onClick={scrollPrev}><MdNavigateBefore /></button>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className="flex">
          {projects.map((project) => (
            <div key={project.id} className="embla flex justify-between mx-10 bg-verde-agua rounded-3xl px-10 pt-20 gap-x-10">
              <div className='w-1/4 flex flex-col gap-10'>
                <h3 className='text-3xl font-bold'>{project.title}</h3>
                <hr className='border-2'/>
                <p className='text-lg'>{project.description}</p>
              </div>
              <div className='bg-white w-3/4 rounded-t-xl'>
                <img src={project.image} alt={project.title} className='p-4 pb-0 rounded-t-xl'/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="embla__next text-6xl" onClick={scrollNext}><MdNavigateNext /></button>
    </div>
  )
}

export default SliderComponent;