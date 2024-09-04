import Image from 'next/image'
import React from 'react'
import Badge from './Badge'
import Separator from './Separator'

const OpenningHours = () => {
  return (
    <section className='flex bg-primary h-[60vh] xl:h-[80vh]'>
        {/* 1 */}
        <div className="hidden flex-1 relative xl:flex justify-center items-center h-full">
          {/* overlay */}
          <div className='h-full w-full absolute z-40 top-0 bg-black/60'></div>
            <Image src="/assets/opening-hours/img.png" fill alt='' quality={100} priority className='object-cover'/>
            <Badge containerStyles="w-[320px] h-[320px] absolute z-40"/>
        </div>
        {/* 2 */}
        <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
          {/* overlay */}
          <div className='absolute w-full h-full top-0 z-10 bg-black/[0.85]'></div>
          {/* text and images */}
          <div className='z-20 flex flex-col justify-center items-center'>
            <h2 className='h2 text-white mb-4'>Opening Hours</h2>
            <Separator bg="accent"/>
            <div className='mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]'>
              <Image src="/assets/opening-hours/program-badge.svg" fill alt='' quality={100} priority className='object-contain'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default OpenningHours