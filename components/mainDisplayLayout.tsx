'use client'
import React, { FC, useContext } from "react";
import MainDisplayCard from "./mainDisplayCard";
import { MovieTypes } from "@/types";
import Title from "./ui/Title";
import { FilterContext } from "@/store/context";

type props = {
  result?: MovieTypes[];
  title: string;
  style: string;
};

const MainDisplayLayout: FC<props> = ({ result, title, style }) => {

  
  return (
    <section className='w-full px-[5%] '>
      <Title title={title} style={style} />
      <div className=' grid grid-cols-2 md:grid-cols-4 gap-5 w-full justify-center '>
        {result &&
          result.map((result, id) => {
            return <MainDisplayCard cardData={result} key={id} />;
          })}
      </div>
    </section>
  );
};

export default MainDisplayLayout;
