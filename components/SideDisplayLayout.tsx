import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import { MovieTypes } from "@/types";
import SideNavCard from "./SideNavCard";
import MainDisplayCard from "./mainDisplayCard";
import { getTopMovies } from "@/services/http";



const SideDisplayLayout= async() => {
    const [data, error]= await getTopMovies()
    if (!data) {
      return;
    }
    if (error) {
      return(
        <h1 className=' justify-center flex mb-10 text-lg text-red-700'>
        An Error Occured
        </h1>
      )
    }
   
  return (
    <div className='sideDispalyBar  w-full lg:max-w-[230px] max-lg:px-[5%] overflow-hidden'>
      <Title title={"Top Movies From TMDB"} style={"bg-yellow-500"} />
      <div className='cardWrapper my-5 max-lg:grid grid-cols-2 md:grid-cols-4 gap-5 w-full justify-center lg:space-y-3 '>
        {data?.results?.map((data, index) => {
            if (index > 4) return;
          return(
            <>
            <div className="max-lg:hidden">
             <SideNavCard cardData={data} key={index} number={index +1} />
             </div>
            <div className=" max-lg:flex hidden w-full">
            <MainDisplayCard cardData={data} key={index} number={index +1}/>
            </div>
            </>
          ) 
        })}
      </div>
    </div>
  );
};

export default SideDisplayLayout;
