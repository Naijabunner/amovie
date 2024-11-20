'use client'
import { FilterContext } from '@/store/context';
import { Search } from 'lucide-react';
import React, { useContext, useState } from 'react'

const SearchBar = ({ mediaQuery}:{ mediaQuery: string}) => {

    const [inputFocused, setInputFocused] = useState(false);
    const [input, setInput] = useState('');
 const inputCtx = useContext(FilterContext)

    const inputFocusHandler = () => {
      setInputFocused(true);
    };
  
    const inputBlurHandler = () => {
      setInputFocused(false);
    };
  
  return (
    <form className={`flex md:w-[30%] ${mediaQuery} pb-1 ${inputFocused ? 'border-b-2 border-b-primary' : 'border-b-2 border-b-primarybg-none'}`}>
    <input
    type="text"
    className=" bg w-full bg-transparent outline-none"
    onFocus={inputFocusHandler}
      onBlur={inputBlurHandler}
      onChange={(e)=>{
        inputCtx?.setfilteredInput(e.target.value)
        // setInput(e.target.value)
      }}
      value={inputCtx?.filteredInput}
      placeholder="Enter movie title"
    />
    <button className={`"px-2 " ${inputFocused ? 'text-primary' :'text-gray-600'}`}>
      <Search />
    </button>
  </form>
  )
}

export default SearchBar