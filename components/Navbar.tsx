"use client";
import { Search, SearchCheck } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const inputFocusHandler = () => {
    setInputFocused(true);
  };

  const inputBlurHandler = () => {
    setInputFocused(false);
  };

  return (
    <nav className="flex bg-[#21242D] items-center bg- w-full justify-between h-20 max-w-[1350px] mx-auto px-5">
      <h1 className="logo text-xl sm:text-2xl md:text-3xl font-semibold">A_MOVIE</h1>
      <form className={`flex h-full max-h-11 md:max-h-12 justify-between items-center pl-2 overflow-hidden flex-1 max-w-[14rem] sm:max-w-[15rem] md:max-w-[30%] rounded-lg ${inputFocused ? 'border-2 border-blue-500' : 'bg-[#21242D]'}`}>
        <input
          type="text"
          className="flex-1 bg-transparent border-none outline-none"
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          placeholder="Enter title"
        />
        <button className="px-2 bg-white h-full text-black min-w-52">
          <Search />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
