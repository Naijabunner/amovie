import { constants } from '@/constants/env';
import { MovieTypes } from '@/types';
import Image from 'next/image'
import Link from 'next/link';
import React, { FC } from 'react'

type CardProps = {
    cardData: MovieTypes;
    number: number
  };

const SideNavCard: FC<CardProps> = ({ cardData, number }) => {
 
  return (
    <Link href={`/${cardData.id}`} className="">
    <div className='card grid grid-cols-2 max-w-full gap-x-3 hover:underline cursor-pointer  '>
    <div className='imageCard bg-[#21242D] h-[137px] w-full overflow-hidden rounded-xl shadow-sm shadow-[#21242D] relative'>
      <Image
      src={`${constants.imageUrl}${cardData.poster_path}`}
      alt={cardData.title}
        width={232}
        height={336}
        className=' bg-green-100 h-full w-full object-center opacity-85'
      />
    </div>
    <div className='details text-sm'>
      <p className='description text-3xl font-semibold'>
        {number}. <br />
        {/* <span className=' text-2xl line-clamp-1'>{cardData.title}</span> */}
      </p>
      <p className='title line-clamp-3'>{cardData.title}</p>
      <p className='ratings'>8.5</p>
    </div>
  </div></Link>
  )
}

export default SideNavCard