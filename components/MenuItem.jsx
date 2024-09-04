import Image from 'next/image'
import React from 'react'

const MenuItem = ({imgSrc,name,description,price}) => {
  return (
    <div className='flex items-center gap-4'>
      {/* image */}
      <div className='relative size-[60px] xl:size-[72px] rounded-full '>
        <Image src={imgSrc} fill alt='' quality={100} priority  className='object-cover'/>
      </div>
      {/* text */}
      <div className='flex flex-col flex-1 gap-2'>
        <div className='flex justify-between items-baseline gap-4'>
          {/* name */}
            <p className='uppercase font-primary font-semibold text-[22px] text-primary leading-none'>{name}</p>
            {/* border */}
            <div className='flex-1 border-b border-dashed border-primary'></div>
            <p className='leading-none font-primary font-semibold text-[30px] text-primary'>{price.toFixed(2)}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MenuItem