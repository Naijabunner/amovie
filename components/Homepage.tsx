'use client'
import React, { FC, useContext } from 'react'
import { FilterContext } from "@/store/context";
import { MovieTypes } from '@/types';
import MainDisplayLayout from './mainDisplayLayout';

type props = {
    result?: MovieTypes[];
    title: string;
    style: string;
  };

const Homepage: FC<props> =({ result, title, style }) => {
    const inputCtx = useContext(FilterContext)
    const data=inputCtx.filteredInput ? result?.filter((res)=>res.title.toLowerCase().includes(inputCtx.filteredInput)) : result
    
  return (
    <MainDisplayLayout result={data} title={title} style={style}  />
  )
}

export default Homepage