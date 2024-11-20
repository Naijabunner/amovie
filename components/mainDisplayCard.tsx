"use client";
import dynamic from 'next/dynamic'

import { constants } from "@/constants/env";
import useIntersectionObserver from "@/hooks/IntersectionObserver";
import { MovieTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
const Favbtn = dynamic(
  () => import('./Favbtn'),
  { ssr: false }
)
type CardProps = {
  cardData: MovieTypes;
  number?: number
};
const MainDisplayCard: FC<CardProps> = ({ cardData, number }) => {
  const [visible, setVisible] = useState(false);

  const [setElement] = useIntersectionObserver(setVisible);
  return (
    <div
      className=' w-fit  cursor-pointer transition-all ease-linear'
      //@ts-ignore
      ref={setElement}
    >
      <Link href={`/${cardData.id}`} className="">
        <div className='CardWrapper w-fit'>
          <div className='Card bg-[#21242D] h-full max-h-[336px] w-full max-w-[232px] overflow-hidden rounded-xl shadow-sm shadow-[#21242D] relative'>
            {visible && (
              <Image
                src={`${constants.imageUrl}${cardData.poster_path}`}
                alt={cardData.title}
                width={232}
                height={336}
                className='bg-primary  h-full w-full object-center opacity-85 duration-[0.8s] hover:scale-[1.1] transition-all ease-in-out'
              />
            )}
            <p className=" absolute z-10 top-0 right-0 text-3xl font-semibold pr-4 pt-4">
            {number}
            </p>
            <div className=' details  transition-all ease-in-out translate-y-[10%] hover:translate-y-0 duration-[0.5s]  px-3 space-y-3 py-2 min-h-[50%] text-white absolute bottom-0 min-w-full bg-opacity-80 bg-[#21242D]'>
              <p className='title text-sm sm:text-base md:text-lg  text-primary font-semibold'>
                {cardData.title}
              </p>
              <div className=' text-xs  justify-between flex items-center'>
                <p className='ratings'>{cardData.vote_average.toFixed(1)}</p>
                <p className='ratings'>{cardData.release_date}</p>
              </div>
              <Favbtn variant={'solid'} movie={cardData}/>
              {/* <p className='description text-xs md:text-sm line-clamp-5'>
              {cardData.overview}
            </p> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainDisplayCard;
