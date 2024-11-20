'use client'
import React, { useRef, useState } from "react";
import Logo from "./Logo";
import Hambuger from "./Hambuger";
import SearchBar from "./SearchBar";
import SideNavBar from "./sideNavBar";
import Link from "next/link";

const Navbar = () => {

const [isNavbarOpen, setIsNavbarOpen] = useState(false)
const hamburgerRef = useRef<HTMLLabelElement>(null); 

  return (
    <nav className='flex relative items-center bg- w-full justify-between h-20 max-w-[1350px] mx-auto px-5'>
      <Logo />
      <SearchBar mediaQuery={'max-sm:hidden'} />
      <Hambuger setState={setIsNavbarOpen} state={isNavbarOpen} hamburgerRef={hamburgerRef} />
      <Link href={'/favorites'} className=" max-sm:hidden">
        Favorites
      </Link >
      <SideNavBar isNavbarOpen={isNavbarOpen}  setIsNavbarOpen={setIsNavbarOpen} hamburgerRef={hamburgerRef}/>

    </nav>
  );
};

export default Navbar;
