import React, { FC } from "react";
import MainDisplayCard from "./mainDisplayCard";
import { MovieTypes } from "@/types";

type props={
 result?: MovieTypes[]
}

const MainDisplayLayout:FC<props> = ({ result }) => {
  
  return (
    <section className="w-full max-md:mx-[5%]">
      <div className='title w-full mb-10 space-y-2'>
        <h2 className=' text-sm sm:text-base md:text-lg'>
          Popular Movies From TDE
        </h2>
        <div className='line relative after:h-full after:sm:w-20 after:w-[20%] after:bg-primary after:absolute bg-black h-1 rounded-full overflow-hidden' />
      </div>
      <div className=' grid grid-cols-2 md:grid-cols-4 gap-5 w-full justify-center '>
        {
            result && result.map((result, id)=>{
                return(
            <MainDisplayCard cardData={result} key={id} />
                )
            })
        }
      </div>
    </section>
  );
};

export default MainDisplayLayout;
