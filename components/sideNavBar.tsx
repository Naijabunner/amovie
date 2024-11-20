import React, { useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

//@ts-ignore
const SideNavBar = ({ isNavbarOpen, setIsNavbarOpen, hamburgerRef}) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  // const [hash, setHash] = useState<string | null>(null);

  // Toggle the body scroll based on navbar visibility
  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflowY = "hidden"; // Lock scroll
    } else {
      document.body.style.overflowY = "auto"; // Unlock scroll
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isNavbarOpen]);

  // Close navbar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) && 
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsNavbarOpen(false);
      }
    };

    if (isNavbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen]);
  return (
    <div ref={navbarRef} className={`absolute h-24 ${isNavbarOpen ?'scale-y-[100%]':'scale-y-[0%]'} origin-top transition-all ease-in-out -bottom-[100%] z-20 w-[80%] right-0 rounded-b-lg p-2 mr-5 space-y-3  bg-[#21242D] sm:hidden`}>
      <SearchBar mediaQuery={"sm:hidden"} />
      <Link href={'/favorites'}
      className=' sm:hidden bg-primary w-full py-2 rounded-lg flex justify-center items-center'>
        Favorites
      
      </Link>

    </div>
  );
};

export default SideNavBar;
