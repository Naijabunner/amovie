'use client'
import { constants } from "@/constants/env";
import useIntersectionObserver from "@/hooks/IntersectionObserver";
import { MovieTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";


const data = {
    "adult": false,
    "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    "genre_ids": [
      878,
      28,
      12
    ],
    "id": 912649,
    "original_language": "en",
    "original_title": "Venom: The Last Dance",
    "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    "popularity": 4301.968,
    "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "release_date": "2024-10-22",
    "title": "Venom: The Last Dance",
    "video": false,
    "vote_average": 6.437,
    "vote_count": 734
  }

  type CardProps={
    cardData: MovieTypes
  }
const MainDisplayCard:FC<CardProps> = ({
  cardData
}) => {
  const [visible, setVisible] = useState(false)

  const [setElement] = useIntersectionObserver(setVisible);
  return (

    <div className=' w-full  cursor-pointer transition-all ease-linear' ref={setElement}>
      <Link href={`/${cardData.id}`}>
     <div className='CardWrapper '>
        <div className='Card bg-[#21242D] h-full max-h-[336px] w-full max-w-[232px] overflow-hidden rounded-xl shadow-sm shadow-[#21242D] relative'>
        {visible &&  <Image
            src={
              `${constants.imageUrl}${cardData.poster_path}`
              // "https://image.tmdb.org/t/p/original/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
            }
            alt={cardData.title}
            width={232}
            height={336}
            className='bg-primary  h-full w-full object-center opacity-85 duration-[0.8s] hover:scale-[1.1] transition-all ease-in-out'
          />}
          <div className=' details  transition-all ease-in-out translate-y-[10%] hover:translate-y-0 duration-[0.5s]  px-3 space-y-3 py-2 min-h-[50%] text-white absolute bottom-0 min-w-full bg-opacity-80 bg-[#21242D]'>
            <p className='title text-sm sm:text-base md:text-lg  text-primary font-semibold'>{cardData.title}</p>
            <div className=" text-xs  justify-between flex items-center">
                       <p className='ratings'>{cardData.vote_average.toFixed(1)}</p>
            <p className='ratings'>{data.release_date}</p>     
            </div>
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
